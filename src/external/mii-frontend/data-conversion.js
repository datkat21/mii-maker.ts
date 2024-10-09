// NOTE: 3DS/Wii U compatible data is referred to officially in the Switch nn::mii library as "Ver3": "nn::mii::Ver3StoreData", functions and tables using "ToVer3" and "FromVer3", mii_Ver3Common.cpp, mii_Ver3StoreDataTable.cpp, etc.
// Switch data is not commonly referred to as Ver4, however, in Pikmin Bloom's global-metadata.dat, there are many strings referring to Ver3, many being symbols directly from nn::mii, even a string that looks like a const or macro in the file: "NN_MII_CHAR_INFO_SIZE". And finally, there is a string in there reading "FromVer4CoreData".
// Now, even though Pikmin Bloom is in Unity and not developed by Nintendo, there's still one other reference to the name. The Coral API endpoint "me.json" has a child in a "mii" object called "storeData", containing another child named simply "3" with 96-byte long Base64 data. However, there is another element called "coreData" containing a child named "4" with 48-byte long Base64 data. SO, there you go: Ver3StoreData, and Ver4CoreData.
// that's why for simplicity, 3DS/Wii U format will be reffered to as "Ver3" and Switch/Studio as "Ver4". idk what wii is but it will be 1

// NOTE: "to" functions need to be defined in conersionMethods
export const supportedFormats = [
  {
    className: "Gen1Wii",
    technicalName: "RFLCharData/RFLStoreData (Wii)",
    sizes: [74, 76],
    // TODO: needs dedicated encode function
    toVer3Function: "convertWiiFieldsToVer3",
    toVer4Function: "convertVer3FieldsToVer4",
  },
  {
    className: "Gen3Switch",
    technicalName: "nn::mii::StoreData/nn::mii::CoreData (Switch)",
    sizes: [68, 48],
    version: 4,
    // TODO: needs dedicated encode function
    toVer3Function: "convertVer4FieldsToVer3",
    // NOTE: coredata's eyebrow y field's true value += 3
    preConvertFromFunction: "correctFromVer4CoreDataFields",
  },
  {
    className: "Gen3Switchgame",
    technicalName: "nn::mii::CharInfo (Switch)",
    sizes: [88],
    version: 4,
    encodeFunction: "encodeSwitchCharInfo",
    toVer3Function: "convertVer4FieldsToVer3",
  },
  {
    className: "Gen2Wiiu3dsMiitomo",
    sizes: [96, 92, 72],
    technicalName: "CFL/FFL/AFL/Ver3 (3DS/Wii U) StoreData",
    version: 3,
    encodeFunction: "encodeVer3StoreData",
    toVer4Function: "convertVer3FieldsToVer4",
    // NOTE: right now we are force enabling copy from
    // structs that do not support it, specifically TO only ver3
    // perhaps if we are converting to other types that allow
    // copying, which I know nn::mii::CharInfo may but who cares...
    // ... then it should logically be applied there as WELL, bleh.
    postConvertToFunction: "forceEnableCopyingIfUndefined",
  },
  {
    className: "Gen2Wiiu3dsMiitomoNfpstoredataextention",
    sizes: [104],
    //sizes: [], // not meant to be specified by user
    technicalName: "Ver3StoreData + NfpStoreDataExtention (amiibo Data)",
    version: 3,
    toVer4Function: "useNfpStoreDataExtentionFieldsForVer4",
  },
  {
    // mii studio site decoded URL format/LocalStorage format
    className: "Gen3Studio",
    // the js will deobfuscate length 47 itself
    sizes: [46, 47], // 46 = decoded/raw format
    technicalName: "Mii Studio Data",
    version: 4,
    encodeFunction: "encodeKaitaiStructToUint8Array",
    toVer3Function: "convertVer4FieldsToVer3",
    preConvertFromFunction: "gen3studioDefineFacialHairFromBeardFields", // define facialhair from beard
    postConvertToFunction: "gen3studioDefineBeardFromFacialHairFields", // define beard from facialhair
  },
];

// ig you could also make this "no name" like FFL does
const DEFAULT_NAME_IF_NONE = "Mii"; // blanco api sets mii studio miis' names to this

// conversion methods for supportedFormats are defined here instead of window now
let conversionMethods = {};
// convert fields from ver3 and below to be compatible with switch/studio
// the only fields that need to be made compatible, however,
// , are the colors to convert them to the CommonColor type
conversionMethods.convertVer3FieldsToVer4 = (data) => {
  // cannot just set these directly, have to set the properties
  // kaitai structs use defineProperty to make these fetch from bitshifts

  // NOTE: while there is a table to map ver3 colors to the CommonColor type...
  // ... mii2studio took a shortcut, which is also what is being done here
  // due to the fact that in the common color tables, there is a contiguous
  // section of ver3-compatible colors so this "bumps them" to that section
  Object.defineProperty(data, "facialHairColor", {
    value: data.facialHairColor === 0 ? 8 : data.facialHairColor,
  });
  Object.defineProperty(data, "eyeColor", {
    value: data.eyeColor + 8,
  });
  Object.defineProperty(data, "eyebrowColor", {
    value: data.eyebrowColor === 0 ? 8 : data.eyebrowColor,
  });
  Object.defineProperty(data, "glassesColor", {
    value:
      data.glassesColor === 0
        ? 8
        : data.glassesColor < 6
        ? data.glassesColor + 13
        : 0,
  });
  Object.defineProperty(data, "hairColor", {
    value: data.hairColor === 0 ? 8 : data.hairColor,
  });
  Object.defineProperty(data, "mouthColor", {
    value: data.mouthColor < 4 ? data.mouthColor + 19 : 0,
  });
  // NOTE: you cannot do the same vice-versa to convert ver4 colors back
  // ver4 also has new glass types, and...
  // ... faceline/skin color is not mapped (ver3 ones work on ver4)
};

// converting fields from ver4 to ver3, like vice versa,
// involves reassigning colors, from CommonColor to the respective ver3 types
// one of the differences is that this is also reassigning glass type as ver4 has more
// NOTE: this is currently making use of tables from MiiPort:
// https://github.com/Genwald/MiiPort/blob/4ee38bbb8aa68a2365e9c48d59d7709f760f9b5d/include/convert_mii.h#L18
conversionMethods.convertVer4FieldsToVer3 = (data) => {
  // // these SHOULD be extracted from nn::mii, however, AFAIK these are located...
  // ... in the CommonColorTable as four uint8s after the two Color3s
  const ToVer3GlassTypeTable = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 1, 3, 7, 7, 6, 7, 8, 7, 7,
  ];
  const ToVer3HairColorTable = [
    0, 1, 2, 3, 4, 5, 6, 7, 0, 4, 3, 5, 4, 4, 6, 2, 0, 6, 4, 3, 2, 2, 7, 3, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 0, 0,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4,
    5, 7, 5, 7, 7, 7, 7, 7, 6, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 0, 4, 4, 4, 4,
  ];
  const ToVer3EyeColorTable = [
    0, 2, 2, 2, 1, 3, 2, 3, 0, 1, 2, 3, 4, 5, 2, 2, 4, 2, 1, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 4, 4, 4, 4, 4, 4, 4, 1, 0, 4,
    4, 4, 4, 4, 4, 4, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1,
  ];
  const ToVer3MouthColorTable = [
    4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 4, 0, 1, 2, 3, 4, 4,
    2, 3, 3, 4, 4, 4, 4, 1, 4, 4, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 4, 4,
    4, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3,
    4, 4, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4, 0, 3, 3, 3, 3, 4, 3, 3, 3, 3,
  ];
  const ToVer3GlassColorTable = [
    0, 1, 1, 1, 5, 1, 1, 4, 0, 5, 1, 1, 3, 5, 1, 2, 3, 4, 5, 4, 2, 2, 4, 4, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5,
  ];
  const ToVer3FacelineColorTable = [0, 1, 2, 3, 4, 5, 0, 1, 5, 5];

  data.glassesType = ToVer3GlassTypeTable[data.glassesType];
  data.hairColor = ToVer3HairColorTable[data.hairColor];
  // NOTE: even though the rest of the beard fields are named differently
  // in Gen3Studio, this one for beard color is the same there and in all
  data.facialHairColor = ToVer3HairColorTable[data.facialHairColor];
  data.eyeColor = ToVer3EyeColorTable[data.eyeColor];
  data.mouthColor = ToVer3MouthColorTable[data.mouthColor];
  data.glassesColor = ToVer3GlassColorTable[data.glassesColor];
  data.faceColor = ToVer3FacelineColorTable[data.faceColor];
};

// apply extra "extension" fields at the end of this struct
// back to the actual fields since the extension fields are ver4
conversionMethods.useNfpStoreDataExtentionFieldsForVer4 = (data) => {
  Object.defineProperty(data, "faceColor", {
    value: data.extFacelineColor,
  });
  Object.defineProperty(data, "hairColor", {
    value: data.extHairColor,
  });
  Object.defineProperty(data, "eyeColor", {
    value: data.extEyeColor,
  });
  Object.defineProperty(data, "eyebrowColor", {
    value: data.extEyebrowColor,
  });
  Object.defineProperty(data, "mouthColor", {
    value: data.extMouthColor,
  });
  Object.defineProperty(data, "facialHairColor", {
    value: data.extBeardColor,
  });
  Object.defineProperty(data, "glassesColor", {
    value: data.extGlassColor,
  });
  Object.defineProperty(data, "glassesType", {
    value: data.extGlassType,
  });
};

// add 3 to eyebrow vertical
conversionMethods.correctFromVer4CoreDataFields = (_, input) => {
  input.eyebrowVertical += 3;
  /*
Object.defineProperty(output, 'eyebrowVertical', {
  value: (input.eyebrowVertical + 3)
});
*/
  // when using this, it says attempt to change the value of a readonly property
};

// the method below is used to encode studio and switch charinfo
// by more or less directly mapping the u8 fields in the struct to a new array
// NOTE: only supports strings (TO UTF-16LE ONLY!!!), lists, and ofc uint8
conversionMethods.encodeKaitaiStructToUint8Array = (struct) => {
  // append all keys into this array
  // which will then become a uint8array
  let structArray = [];
  // NOTE: NOTE: kaitai private fields are NOT:
  // ... numbers, arrays, or strings. we can get away with switch()
  /*for(const key in struct) {
  // remove all private fields so that the object
  // represents only the struct fields in order
  if(key.startsWith('_')) {
    delete struct[key];
    continue;
  }
  //else if(typeof key)
  else
    // by default, add it directly (assuming int?)
    structArray.push(struct[key]);
}*/

  for (const key in struct) {
    // add to array based on the type
    // value will be changed for string case
    let value = struct[key];
    switch (typeof value) {
      case "number":
        // assuming this is a uint8, pushing it
        structArray.push(value);
        break;
      case "boolean":
        // there are never booleans in these fields natively
        // but there are when they are set from another struct
        structArray.push(Number(value));
        break;
      case "string":
        // NOTE: assuming NAME is ALWAYS 10 CHARACTER UTF-16 STRING
        // IMPORTANT!!!!: in Switch CharInfo, the name is (10+1) characters, where the last character is for padding
        // I THINK!!!! that Switch CharInfo is the only (for storage/transmission) format with padding
        // BECAUSE of this, for compatibility with other types...
        // ... this will be using and serializing a 10 character name
        // this WORKS in "gen3_switchgame.ksy" but NOT!!!! "miidata_swi.ksy" by HEYimHeroic
        const stringBytes = new Uint8Array(new ArrayBuffer(20));
        const stringBytesView = new DataView(stringBytes.buffer);
        for (let i = 0; i < 10; i++) {
          // assuming name is always 10 characters even if it has padding
          const u16Offset = i * 2;
          stringBytesView.setUint16(u16Offset, value.charCodeAt(i), true); // little-endian UTF-16
        }
        // encode string to utf-16le byte array
        value = [...stringBytes];
      // FALL THROUGH and add this as an array
      case "object":
        // actually, only arrays
        if (!(value instanceof Array)) {
          if (!key.startsWith("_"))
            console.warn("unknown field type on key object: " + key);
          continue;
        }
        // this is an array, so push each element
        for (v of value) structArray.push(v);
        break;
      default:
        if (!key.startsWith("_"))
          console.warn("unknown field type on key: " + key);
      // all other types are ignored
    }
  }
  // array of ints representing studio data
  //const structArray = Object.values(struct);
  // return as a uint8array for consistency
  return new Uint8Array(structArray);
  // NOTE: could be a uint8array, however...
  // ... apparently, in order to encode to hex it has to be an array anyway
};
// encodeSwitchCharInfo is mostly just a thunk using the
// above function to encode to uint8array, but generating
// a random create ID (in this kaitai called "unknownData") first
conversionMethods.encodeSwitchCharInfo = (struct) => {
  // if create id is not null, then fill it with randomness
  if (!struct.unknownData || isArrayNull(struct.unknownData)) {
    for (let i = 0; i < 16; i++) {
      struct.unknownData[i] = Math.floor(Math.random() * 256);
    }
    // from miiport: These two leftmost bits must be 0b10 for the ID to be valid.
    struct.unknownData[8] &= 0b10111111; // Clear the 7th bit
    struct.unknownData[8] |= 0b10000000; // Set the 8th bit
  }
  // fill in mii name if it is null
  if (!struct.miiName || isStringNull(struct.miiName))
    struct.miiName = DEFAULT_NAME_IF_NONE;
  // for whatever reason they do not want any characters
  // to be in the name after the null terminator
  struct.miiName = removeEverythingAfterNullTerminator(struct.miiName);
  // then thunk to encode kaitai function
  return conversionMethods.encodeKaitaiStructToUint8Array(struct);
};

// the methods below remap inconsistently named fields in gen3_studio.ksy from the original mii2studio
// as the fields usually prefixed "facialHair" in the other structs are instead prefixed "beard" here

// this will map the fields FROM the studio struct TO another one
conversionMethods.gen3studioDefineFacialHairFromBeardFields = (
  output,
  inputOptional
) => {
  // if we are only acting on one struct then we will use output for both
  let input = inputOptional;
  if (input === undefined) input = output;

  // if the studio fields are properly named according to the others then skip
  if (
    input.facialHairBeard !== undefined ||
    // ... or, if this is somehow already the same studio struct?!
    output.beardGoatee !== undefined
  )
    return;

  Object.defineProperty(output, "facialHairBeard", {
    value: input.beardGoatee,
  });
  Object.defineProperty(output, "facialHairSize", {
    value: input.beardSize,
  });
  Object.defineProperty(output, "facialHairMustache", {
    value: input.beardMustache,
  });
  Object.defineProperty(output, "facialHairVertical", {
    value: input.beardVertical,
  });
};
// this maps the fields TO the studio struct FROM any other one
conversionMethods.gen3studioDefineBeardFromFacialHairFields = (
  output,
  input
) => {
  // if the studio fields are properly named according to the others then skip
  if (
    output.facialHairBeard !== undefined ||
    // ... or, if this is somehow already the same studio struct?!
    input.beardGoatee !== undefined
  )
    return;

  // erroneously prefixed "beard" in studio when other structs use "facialHair"
  output.beardGoatee = input.facialHairBeard;
  output.beardSize = input.facialHairSize;
  output.beardMustache = input.facialHairMustache;
  output.beardVertical = input.facialHairVertical;
};

conversionMethods.forceEnableCopyingIfUndefined = (output, input) => {
  if (input.copying === undefined)
    Object.defineProperty(output, "copying", {
      value: true,
    });
};

// current name of studio kaitai struct class being used
const studioFormat = supportedFormats.find((f) => f.className === "Gen3Studio");
const ver3Format = supportedFormats.find(
  (f) => f.className === "Gen2Wiiu3dsMiitomo"
);

const handleConvertDetailsToggle = (event) => {
  if (
    !event.target.open || // not toggled open? ignore
    // or already revealed, we do not need to do anything
    event.target.getAttribute("data-revealed")
  )
    return;

  // NOTE: routine to find data in image, replaced by fetching from data attribute
  /*
// we need to find the data
// .. for now, take this from the parent's image url
const hopefullyImage = event.target.parentElement.getElementsByTagName('img')[0];
const imageSrc = hopefullyImage.getAttribute('src');
if(!imageSrc)
  // image src should not be undefined
  throw new Error('why is the image\'s src undefined...???');

// get data param, if it even exists
const imageURLParams = new URLSearchParams(new URL(imageSrc).search);
const dataValue = imageURLParams.get('data');
if(!dataValue)
  throw new Error('image\'s source doesn\'t have data query parameter');
*/
  const dataValue = event.target.getAttribute("data-data");
  if (!dataValue)
    throw new Error(
      "data-data attribute on <details> is undefined, it is supposed to contain the data for this result"
    );
  const name = event.target.getAttribute("data-name");
  // will be undefined if data-name is not there

  // the name of the input type will be put in this element
  const inputTypeElement = event.target.getElementsByClassName("input-type")[0];

  const inputData = parseHexOrB64TextStringToUint8Array(dataValue);

  //const studioURLDataElement = event.target.getElementsByClassName('studio-url-data')[0];
  const studioImageElement = event.target.getElementsByClassName("image-80")[0];
  const studioCodeElement =
    event.target.getElementsByClassName("studio-code")[0];

  // run the function to convert the data from the image to raw studio data
  const studioData = convertDataToType(inputData, studioFormat);
  // "studio code" = raw studio data in hex
  // NOTE: three dots are only required if it is a uint8array which
  // it is only one if the input data is studio data directly
  const studioCode = [...studioData].map(byteToHex).join("");
  studioCodeElement.textContent = studioCode;

  const miiInstructionsLinkElement = event.target.getElementsByClassName(
    "mii-instructions-link"
  )[0];
  miiInstructionsLinkElement.href += studioCode;

  const studioURLData = encodeStudioToObfuscatedHex(studioData);
  const studioURLRender =
    studioImageElement.getAttribute("data-src") + studioURLData;
  //studioURLDataElement.textContent = studioURLData;
  studioImageElement.setAttribute("src", studioURLRender);

  // do this at the end bc it is most likely to fail
  const ver3StoreDataElement =
    event.target.getElementsByClassName("ver3storedata")[0];
  const inputFormat = findInputFormatFromSize(inputData.length);

  if (
    inputFormat !== undefined &&
    typeof inputFormat.technicalName === "string"
  )
    inputTypeElement.textContent = inputFormat.technicalName;

  const ver3StoreData = convertDataToType(
    inputData,
    ver3Format,
    inputFormat.className
  );
  const ver3StoreDataB64 = uint8ArrayToBase64(ver3StoreData);
  ver3StoreDataElement.textContent = ver3StoreDataB64;
  // finally make a qr code
  if (window.QRCode !== undefined) {
    const ver3StoreDataForQR = convertDataToType(
      inputData,
      ver3Format,
      inputFormat.className,
      true
    ); // set "forQRCode" true
    const ver3QRCodeDataArray =
      encryptAndEncodeVer3StoreDataToQRCodeFormat(ver3StoreDataForQR);
    const qrCodeImage = event.target.getElementsByClassName("image-qr")[0];
    qrCodeImage.src = QRCode.generatePNG(ver3QRCodeDataArray, {
      margin: null,
    }); // for whatever reason they check whether this
    // property in options is null - but it is undefined
  }

  const modelDownloadButtons = event.target.getElementsByClassName(
    "model-download-button"
  );
  const imgSearchIfItExists =
    event.target.parentElement.getElementsByTagName("img");
  if (modelDownloadButtons.length && imgSearchIfItExists.length) {
    const linkButWithGlbInsteadOfPng = imgSearchIfItExists[0].src
      // switch shader has transparent faceline
      // texture which will look wrong here
      // so just remove it in order to avoid
      // ppl who use that and don't know that
      .replace("&shaderType=1", "")
      .replace(".png?", ".glb?");
    modelDownloadButtons[0].setAttribute(
      "action", // actually a form lmao
      linkButWithGlbInsteadOfPng
    );
  }

  // base name will be name if it is defined
  let fileBaseName = name;
  if (!fileBaseName) {
    // otherwise compose a base name from the date and type
    const now = new Date();
    const formattedTime = `${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}_${String(
      now.getHours()
    ).padStart(2, "0")}-${String(now.getMinutes()).padStart(2, "0")}-${String(
      now.getSeconds()
    ).padStart(2, "0")}`;

    fileBaseName = formattedTime + "-" + inputFormat.className;
  }

  const switchCharInfoDownloadButton = event.target.getElementsByClassName(
    "download-switch-charinfo"
  )[0];
  convertDataAndBindToDLButton(
    switchCharInfoDownloadButton,
    inputData,
    "Gen3Switchgame",
    inputFormat.className
  );
  switchCharInfoDownloadButton.setAttribute(
    "data-filename",
    fileBaseName + ".charinfo"
  );

  const studioDataDownloadButton = event.target.getElementsByClassName(
    "download-studio-data"
  )[0];
  convertDataAndBindToDLButton(
    studioDataDownloadButton,
    inputData,
    "Gen3Studio",
    inputFormat.className
  );
  studioDataDownloadButton.setAttribute(
    "data-filename",
    fileBaseName + ".mnms"
  );

  const ffsdDownloadButton =
    event.target.getElementsByClassName("download-ffsd")[0];
  ffsdDownloadButton.setAttribute("data-data", ver3StoreDataB64);
  studioDataDownloadButton.setAttribute(
    "data-filename",
    fileBaseName + ".ffsd"
  );

  // mark as revealed at the end, i.e. do NOT RUN THE HANDLER ANYMORE
  event.target.setAttribute("data-revealed", "1");
};

const convertDataAndBindToDLButton = (
  button,
  inputData,
  formatName,
  inputFormatName
) => {
  const format = supportedFormats.find((f) => f.className === formatName);
  const data = convertDataToType(inputData, format, inputFormatName);

  const dataString = uint8ArrayToBase64(data);
  button.setAttribute("data-data", dataString);
};

const handleDownloadDataFileButton = (event) => {
  event.preventDefault();
  // define a filename with the name, TBD: if name is generic then prepend date maybe?
  const filename = event.target.getAttribute("data-filename");
  if (!filename)
    throw new Error("download button does not have data-filename attribute");
  const dataText = event.target.getAttribute("data-data");
  if (!dataText)
    throw new Error(
      "download button does not have data-data attribute, where base64 data is supposed to go"
    );

  const data = base64ToUint8Array(dataText);

  // create and download a new blob from the uint8array we made
  const blob = new Blob([data]); //, {type: 'application/octet-stream'});

  // create a fake anchor so we can set the filename
  const link = document.createElement("a");
  // create a url from the blob, download from here
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = filename;
  // begin the download
  link.click();
  // revoke the object url after the download is complete ideally
  URL.revokeObjectURL(url);
};

// encodes a compatible struct to Ver3StoreData
/* NOTE: forQRCode DOES THESE (potentially undesirable) THINGS:
* FORCE ENABLES COPYING
* sets MiiVersion to 0x03, and birth platform to 3DS
 - both needed to scan as a qr code
* skips crc16 but actually only bc qr encode routine does it itself
*/
conversionMethods.encodeVer3StoreData = (dataStruct, forQRCode) => {
  // set unmarked fields
  dataStruct.unknown1 = 0x03; // ALWAYS constant 100% of the time
  // 3ds version mii, will scan as a qr code on 3ds and wii u
  // may already be set so using defineProperty on it
  if (forQRCode)
    Object.defineProperty(dataStruct, "version", {
      value: 3,
    });
  // mii needs a non-null name to scan
  // TODO: you may want to make this part of a hash or encoding or.. something
  // TODO: you have enough bytes to pack the studio info within all arbitrary data given
  // NOTE: NOTE: this is what the Coral account API returns
  // in its Mii data, along with random IDs, I assume they forge it from studio data
  if (!dataStruct.miiName || isStringNull(dataStruct.miiName))
    dataStruct.miiName = DEFAULT_NAME_IF_NONE;
  // setting system id and client id here are NOT necessary, but they can be randomized
  //origMii.systemId = [0, 0, 0, 0, 0, 0, 0, 0];
  // mii id on the other hand cannot be null
  // if you scan two miis with the same id (or potentially other ids)
  // then the system will think they are the same and not overwrite
  //origMii.avatarId = [128, 0, 0, 0];
  // TODO: make ALL RANDOM AVATAR IDS
  // TODO: ALL NUMBERS and ALSO RANDOM SYSTEM ID. MAYBE RANDOM (NINTENDO) MAC???

  // TODO: TODO: TODO: IF YOU ARE READING, ACTUALLY MAKE THIS
  // A HASH OF THE MII STUDIO DATA OR SOMETHING I THINK MAYBE
  //debugger
  if (!dataStruct.avatarId || isArrayNull(dataStruct.avatarId))
    // NOTE NOTE NOTE TODO TODO TODO
    // 3DS DOES NOT LIKE e.g. MATT'S RAW ID, BUT FFL & MIITOMO DOES???
    dataStruct.avatarId = [
      128,
      // should not exceed 256?
      Math.floor(Math.random() * 257),
      Math.floor(Math.random() * 257),
      Math.floor(Math.random() * 257),
    ];
  // force enable copying, but only if qr code mode is on
  if (forQRCode)
    Object.defineProperty(dataStruct, "copying", {
      value: true,
    });
  // mingle, or local only, is already initialized to false tho

  //origMii.clientId = [0, 0, 0, 0, 0, 0];
  // skip crc16 for qr code bc qr encode function does it itself
  let skipCRC16 = Boolean(forQRCode);
  return encode3DSStoreDataFromStructCopiedFromKazukiMiiEncode(
    dataStruct,
    skipCRC16
  );
};

// iterate through format list, assumed to be called supportedFormats
// to find that input format and throw an error if it is not supported
const findInputFormatFromSize = (size) => {
  for (const format of supportedFormats) {
    if (format.sizes.includes(size)) return format;
  }
  // nothing was found, throw error
  throw new Error("Input format is an unknown size of: " + size);
};

// ensures that the format class exists and then creates the struct type
// if data is not specified, then it simply creates a blank structure of the size
const createNewInstanceOfKaitaiStructFormat = (format, data) => {
  // className in the format is assumed to be a (kaitai struct) class in window
  const structClass = window[format.className];
  // ensure that this actually exists
  if (!structClass)
    throw new Error(
      "Cannot find format class name in window: " + format.className
    );
  // find the _read prototype that kaitai constructors usually have
  if (!structClass.prototype._read)
    throw new Error(
      "Class does not have prototype._read and may not be generated from a Kaitai struct: " +
        format.className
    );

  // assumed to be a KaitaiStream type passed to the constructor
  let stream;

  // if data is undefined, create a new blank stream using the first supported size
  if (data === undefined) {
    // ensure that the format actually defines sizes
    if (format.sizes.length < 1)
      throw new Error(
        `Trying to construct a blank instance of format ${format.className} but it does not have any defined sizes and no data was passed in.`
      );
    // assuming that the first size in the list is sufficient
    const firstSupportedSize = format.sizes[0];
    stream = new KaitaiStream(new ArrayBuffer(firstSupportedSize));
  } else {
    // ... otherwise, construct with data
    // if the data is smaller than the first size, which is assumed to be the size of the struct, then construct with that first size
    if (format.sizes.length > 0) {
      // this is what the size of the struct is meant to be
      const firstSupportedSize = format.sizes[0];
      if (data.length < firstSupportedSize) {
        const u8Array = new Uint8Array(firstSupportedSize);
        // copy the data to the larger buffer
        u8Array.set(data, 0);
        // create the stream with that buffer
        stream = new KaitaiStream(u8Array);
      } else {
        stream = new KaitaiStream(data);
      }
    } else {
      // NOTE: assumes "data" is ArrayBuffer or DataView: https://github.com/kaitai-io/kaitai_struct_javascript_runtime/blob/a911d627ffeb244ce0b7873858325020d6694ba5/KaitaiStream.js#L20
      stream = new KaitaiStream(data);
    }
  }

  const struct = new structClass(stream);
  // the above function will throw an error if something goes wrong
  // notably I have seen it will if the data is not long enough for it
  return struct;
};

// for mapping objects like these kaitai structs
// where the property names match on both
const mapObjectFieldsOneToOne = (src, dest) => {
  // copy fields on the destination that the source also has
  let allDestKeys = [
    ...Object.keys(dest),
    // get keys as WELL as properties on the prototype
    // these are used by larsenv's structs for bitmapped fields
    ...Object.getOwnPropertyNames(Object.getPrototypeOf(dest)),
  ];
  // speaking of structs, these have NOT been tested with HEYimHeroic's structs
  for (const key of allDestKeys) {
    //in dest) {
    // do not copy private fields that start with an underscore
    // NOTE: not needed anymore bc if they are not on the dest they wont be copied
    if (
      !key.startsWith("_") &&
      // if the key exists on the source...
      src[key] !== undefined
    ) {
      // ... then copy it to the destination
      //dest[key] = src[key];
      Object.defineProperty(dest, key, {
        value: src[key],
      });
    }
  }
  // NOTE!!!! NOTE!!!! this TURNS THE DESTINATION
  // into an INSTANCE OF THE SOURCE ...
};

// converts and encodes to a certain type
// third arugment, inupt format name, is optional
// if not provided then the size is used to auto detect
// length of obfuscated studio data
const STUDIO_OBFUSCATED_LENGTH = 47;
const convertDataToType = (
  data,
  outputFormat,
  inputFormatName,
  optionalBoolToEncodeFunc
) => {
  // ensure that data is an ArrayBuffer
  /*if(!(data instanceof ArrayBuffer))
  throw new Error('data must be ArrayBuffer or compatible.');
*/

  // format comes from either findInputFormatFromSize
  // or it comes directly from supportedFormats itself
  let format;
  // if inputFormatName is NOT a valid string, so it's undefined...
  if (typeof inputFormatName !== "string")
    // ... auto detect based on size
    format = findInputFormatFromSize(data.length);
  // that will throw an error so we don't need to handle it ourselves
  // otherwise, inputFormatName is assumed to be className
  else format = supportedFormats.find((f) => f.className === inputFormatName);
  if (!format)
    // find() will make it null or undefined
    // unsupported/non-existent formatName was passed in
    throw new Error("Unknown input format name: " + inputFormatName);

  // NOTE: SPECIAL CASE: DEOBFUSCATE STUDIO DATA
  if (data && data.length === STUDIO_OBFUSCATED_LENGTH)
    data = studioURLObfuscationDecode(data);

  // if this is the output format directly then no conversion is required
  /*if(findInputFormatFromSize(data.length) === outputFormat)
  return data;
*/
  // NOTE: above isn't viable anymore just because ver3storedata
  // needs birth platform modified before qr will work
  // and if it is smaller than the full storedata it needs checksum

  // create a new instance of the class, with this function handling errors
  // may be overridden by the preprocessing function
  let inputStruct = createNewInstanceOfKaitaiStructFormat(format, data);

  // assumes that outputFormat is an object and has className in it
  if (!outputFormat || outputFormat.className === undefined)
    throw new Error(
      "outputFormat is not a valid format object or does not have className"
    );

  // version is needed to evaluate which of the few conversion functions need to be run
  if (typeof outputFormat.version !== "number")
    throw new Error(
      `Output format ${outputFormat.className} does not have a version field or it is not a number.`
    );
  // encode function is run at the end here so it is needed
  if (
    outputFormat.encodeFunction === undefined ||
    typeof conversionMethods[outputFormat.encodeFunction] !== "function"
  )
    throw new Error(
      `Output format ${outputFormat.className} does not have a valid encodeFunction.`
    );

  /*
  const ver3ConvertFunc = format.toVer3Function;
  const ver4ConvertFunc = format.toVer4Function;
*/

  /*
   * usually:
   * convert to ver3, and then ver4
   *
   */

  // determine whether to convert to ver3, or ver4, or both
  let doConvertToVer3 = true,
    doConvertToVer4 = true;

  // for equal versions, do not do conversion at all
  if (format.version === outputFormat.version) {
    doConvertToVer3 = false;
    doConvertToVer4 = false;
  }
  // aim to convert up AND down...?
  // if this is less than ver4 then do not convert to it
  if (outputFormat.version < 4) doConvertToVer4 = false;
  // if this is less than ver3 don't convert to that either
  if (outputFormat.version < 3) doConvertToVer3 = false;

  if (doConvertToVer3 && format.toVer3Function !== undefined)
    // TODO: DOES NOT CHECK WHETHER THE FUNCTION ITSELF IS UNDEFINED
    conversionMethods[format.toVer3Function](inputStruct);
  if (doConvertToVer4 && format.toVer4Function !== undefined)
    // TODO: DOES NOT CHECK WHETHER THE FUNCTION ITSELF IS UNDEFINED
    conversionMethods[format.toVer4Function](inputStruct);

  // create a new blank instance of the output format
  let outputStruct = createNewInstanceOfKaitaiStructFormat(outputFormat);

  // call preConvertFromFunction for input if it exists
  if (format.preConvertFromFunction !== undefined)
    conversionMethods[format.preConvertFromFunction](outputStruct, inputStruct);

  // map all fields with the same names to each other
  // TODO: should use kaitai struct dedicated encoding functions instead...!!!
  mapObjectFieldsOneToOne(inputStruct, outputStruct);
  // NOTE!!!! NOTE!!!! the OUTPUT FORMAT becomes the same as the INPUT FORMAT's CLASS!!!!!

  // call postConvertToFunction for output if it exists
  if (outputFormat.postConvertToFunction !== undefined)
    conversionMethods[outputFormat.postConvertToFunction](
      outputStruct,
      inputStruct
    );

  // we should be finished
  //return outputStruct;
  // FINALLY, call the encoding function
  const encodedOutput = conversionMethods[outputFormat.encodeFunction](
    outputStruct,
    optionalBoolToEncodeFunc
  );
  return encodedOutput; // should be a uint8array
};

// yes I'm aware that typing this function name is as long as the snippet itself
//const uint8ArrayToBase64 = data => btoa(String.fromCharCode.apply(null, data));

/* !!
 * CODE BELOW IS FROM:
 * https://mii-studio.akamaized.net/static/js/editor.pc.46056ea432a4ef3974af.js
 * search ".prototype.encode"
 * beauitifed by GPT-4
 */

// helper to map numbers to zero-padded hex
const byteToHex = (num) => num.toString(16).padStart(2, "0");

// encode from studio data, apply the studio url obfuscation and hex encode
const encodeStudioToObfuscatedHex = (data) => {
  // we actually need to clone input as to not act directly on it
  const uint8Array = Object.assign([], data);
  // generate a random initial value between 0 and 255
  // NOTE: can make this 0 to disable randomization
  let initialRandomValue = Math.floor(256 * Math.random());
  let previousEncodedValue = initialRandomValue;

  // iterate over the Uint8Array and encode each byte
  for (let i = 0; i < uint8Array.length; i++) {
    let currentValue = uint8Array[i];
    // XOR the current value with the previous one and add 7, then take modulo 256
    uint8Array[i] = (7 + (currentValue ^ previousEncodedValue)) % 256;
    // update the previous value to the current encoded value
    previousEncodedValue = uint8Array[i];
  }

  // prepend the initial random value to the array and convert to a hexadecimal string
  return [initialRandomValue, ...uint8Array].map(byteToHex).join("");
};

// !! == ALL BELOW TAKEN FROM "mii2studio in js ai slop attempt 1" FIDDLE == !!

// Helper functions
/*
const stripSpaces = str => str.replace(/\s+/g, '');
const hexToUint8Array = hex => new Uint8Array(hex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
const base64ToUint8Array = base64 => Uint8Array.from(atob(base64), c => c.charCodeAt(0));
*/
// used to check if a string is all zeroes, which are seen in kaitai structs
const isStringNull = (string) =>
  string.split("").every((char) => char === "\u0000");
// take a null terminated string, and remove everything
// after the null terminator by replacing the rest with zeroes
// switch mii formats need this i think
const removeEverythingAfterNullTerminator = (string) => {
  let nullIndex = string.indexOf("\0"); // find null terminator in string
  if (nullIndex !== -1) {
    // if it is found...
    // .. we want to replace everything after it with nothing
    // however this is simply overwriting everything else with zeroes
    const beforeNull = string.slice(0, nullIndex + 1);
    // create padding to put after the null
    let padding = "\u0000".repeat(string.length - beforeNull.length);
    return beforeNull + padding;
  }
  return string; // if no null terminator??? then return input
};
// likewise used to check if an array is null
const isArrayNull = (array) => array.every((i) => i === 0);

// TODO: TODO: CHECK IF YOU CAN PUT THE TWO TABLES INTO ONE
// TODO: ALSO CHECK IF YOU CAN MAKE THIS SHORTER
// converts Wii properties to ver3 compatible properties
conversionMethods.convertWiiFieldsToVer3 = (data) => {
  // wii data does not support y scale so these are constant
  data.eyeStretch = 3;
  data.mouthStretch = 3;
  data.eyebrowStretch = 3;

  // tables to map "FaceLineAndMake" field in RFLCharData...
  // ... to FaceMake and FaceLine properties for 3DS-compatible data
  const makeup = {
    1: 1,
    2: 6,
    3: 9,
    9: 10,
  };

  const wrinkles = {
    4: 5,
    5: 2,
    6: 3,
    7: 7,
    8: 8,
    10: 9,
    11: 11,
  };
  // NOTE: tables taken directly from mii2studio.py
  // ... but they can be taken from FFL too

  // TODO: CAN YOU REMOVE hasOwnProperty HERE???
  if (makeup.hasOwnProperty(data.facialFeature))
    data.faceMakeup = makeup[data.facialFeature];
  if (wrinkles.hasOwnProperty(data.facialFeature))
    data.faceWrinkles = wrinkles[data.facialFeature];
};

// NOTE: customized for the kaitai by GPT-4o...
// ... and adapted from MiiInfoEditorCTR: https://github.com/kazuki-4ys/kazuki-4ys.github.io/blob/148dc339974f8b7515bfdc1395ec1fc9becb68ab/web_apps/MiiInfoEditorCTR/mii.js#L348
// 2024-08-10: tested to be accurate with: blanco, bro-mole-high, jasmine
const encode3DSStoreDataFromStructCopiedFromKazukiMiiEncode = (
  data,
  skipCRC16
) => {
  // Create buffer to store the encoded data
  let buf = new Uint8Array(0x48 + 20 + 2 + 2); // 0x48 bytes + 20 bytes for creatorName + 2 bytes padding + 2 bytes checksum

  // unknown1 byte
  buf[0x00] = data.unknown1 || 0;

  // characterSet, regionLock, profanityFlag, and copying all packed into one byte
  buf[0x01] =
    ((data.characterSet || 0) << 4) | // character set (2 bits), typically 0=JPN+USA+EUR, 1=CHN, 2=KOR, 3=TWN
    (((data.regionLock || 0) & 0x03) << 2) | // region lock (2 bits), 0=no lock, 1=JPN, 2=USA, 3=EUR
    ((data.profanityFlag ? 1 : 0) << 1) | // profanity flag (1 bit), 1 = contains profanity
    (data.copying ? 1 : 0); // copying allowed (1 bit), 1 = copying allowed

  // mii position page index and slot index
  buf[0x02] =
    (data.miiPositionPageIndex & 0x0f) | // page index (4 bits)
    ((data.miiPositionSlotIndex & 0x0f) << 4); // slot index (4 bits)

  // version and unknown3 packed together
  buf[0x03] =
    (data.version << 4) | // version (4 bits)
    (data.unknown3 & 0x0f); // unknown, typically 0 (4 bits)

  // systemId: unique ID associated with the console, 8 bytes
  if (data.systemId !== undefined) {
    for (let i = 0; i < 8; i++) {
      buf[0x04 + i] = data.systemId[i] || 0;
    }
  }

  // avatarId: unique Mii ID, 4 bytes (REQUIRED)
  for (let i = 0; i < 4; i++) {
    buf[0x0c + i] = data.avatarId[i] || 0;
  }

  // clientId: MAC address of the creator's console, 6 bytes
  if (data.clientId !== undefined) {
    for (let i = 0; i < 6; i++) {
      buf[0x10 + i] = data.clientId[i] || 0;
    }
  }

  // padding, 2 bytes (usually 0)
  buf[0x16] = data.padding & 0xff;
  buf[0x17] = (data.padding >> 8) & 0xff;

  // data1: gender, birth month, birth day, favorite color, favorite flag
  buf[0x18] =
    (data.gender & 0x01) | // gender (1 bit), 0 = male, 1 = female
    ((data.birthMonth & 0x0f) << 1) | // birth month (4 bits)
    ((data.birthDay & 0x1f) << 5); // birth day (5 bits)

  buf[0x19] =
    ((data.birthDay >> 3) & 0x03) | // continuation of birth day (2 bits)
    ((data.favoriteColor & 0x0f) << 2) | // favorite color (4 bits)
    ((data.favorite ? 1 : 0) << 6); // favorite flag (1 bit)

  // mii name (REQUIRED), UTF-16LE encoded
  const nameBytes = new Uint8Array(new ArrayBuffer(20));
  const nameBytesView = new DataView(nameBytes.buffer);
  for (let i = 0; i < 10; i++) {
    // only copy 10 characters, last one is padding
    const u16Offset = i * 2;
    nameBytesView.setUint16(u16Offset, data.miiName.charCodeAt(i), true); // little-endian UTF-16
  }
  buf.set(nameBytes, 0x1a);

  // height and weight
  buf[0x2e] = data.bodyHeight || 0; // height (1 byte)
  buf[0x2f] = data.bodyWeight || 0; // weight (1 byte)

  // face type (shape), skin color, and mingle settings
  buf[0x30] =
    ((data.faceColor & 0x07) << 5) | // skin color (3 bits)
    ((data.faceType & 0x0f) << 1) | // face shape (4 bits)
    (data.mingle ? 1 : 0); // mingle (1 bit)

  // face makeup and wrinkles
  buf[0x31] =
    (data.faceWrinkles & 0x0f) | // face wrinkles (4 bits)
    ((data.faceMakeup & 0x0f) << 4); // face makeup (4 bits)

  // hair type, color, and flip
  buf[0x32] = data.hairType || 0; // hair type (1 byte)
  buf[0x33] =
    (data.hairColor & 0x07) | // hair color (3 bits)
    ((data.hairFlip ? 1 : 0) << 3) | // hair flip (1 bit)
    ((data.unknown5 & 0x0f) << 4); // unknown (4 bits)

  // eye details: type, color, size, stretch, rotation, horizontal spacing, vertical position
  let eyeDetails =
    (data.eyeType & 0x3f) | // eye type (6 bits)
    ((data.eyeColor & 0x07) << 6) | // eye color (3 bits)
    ((data.eyeSize & 0x07) << 9) | // eye size (3 bits)
    ((data.eyeStretch & 0x07) << 13) | // eye stretch (3 bits)
    ((data.eyeRotation & 0x1f) << 16) | // eye rotation (5 bits)
    ((data.eyeHorizontal & 0x0f) << 21) | // eye horizontal spacing (4 bits)
    ((data.eyeVertical & 0x1f) << 25); // eye vertical position (5 bits)

  buf[0x34] = eyeDetails & 0xff;
  buf[0x35] = (eyeDetails >> 8) & 0xff;
  buf[0x36] = (eyeDetails >> 16) & 0xff;
  buf[0x37] = (eyeDetails >> 24) & 0xff;

  // eyebrow details: type, color, size, stretch, rotation, horizontal spacing, vertical position
  let eyebrowDetails =
    (data.eyebrowType & 0x1f) | // eyebrow type (5 bits)
    ((data.eyebrowColor & 0x07) << 5) | // eyebrow color (3 bits)
    ((data.eyebrowSize & 0x0f) << 8) | // eyebrow size (4 bits)
    ((data.eyebrowStretch & 0x07) << 12) | // eyebrow stretch (3 bits)
    ((data.eyebrowRotation & 0x0f) << 16) | // eyebrow rotation (4 bits)
    ((data.eyebrowHorizontal & 0x0f) << 21) | // eyebrow horizontal spacing (4 bits)
    ((data.eyebrowVertical & 0x1f) << 25); // eyebrow vertical position (5 bits)

  buf[0x38] = eyebrowDetails & 0xff;
  buf[0x39] = (eyebrowDetails >> 8) & 0xff;
  buf[0x3a] = (eyebrowDetails >> 16) & 0xff;
  buf[0x3b] = (eyebrowDetails >> 24) & 0xff;

  // nose details: type, size, vertical position
  let noseDetails =
    (data.noseType & 0x1f) | // nose type (5 bits)
    ((data.noseSize & 0x0f) << 5) | // nose size (4 bits)
    ((data.noseVertical & 0x1f) << 9); // nose vertical position (5 bits)

  buf[0x3c] = noseDetails & 0xff;
  buf[0x3d] = (noseDetails >> 8) & 0xff;

  // mouth details: type, color, size, stretch
  let mouthDetails =
    (data.mouthType & 0x3f) | // mouth type (6 bits)
    ((data.mouthColor & 0x07) << 6) | // mouth color (3 bits)
    ((data.mouthSize & 0x0f) << 9) | // mouth size (4 bits)
    ((data.mouthStretch & 0x07) << 13); // mouth stretch (3 bits)

  buf[0x3e] = mouthDetails & 0xff;
  buf[0x3f] = (mouthDetails >> 8) & 0xff;

  // mouth2 details: vertical position, mustache type
  let mouth2Details =
    (data.mouthVertical & 0x1f) | // mouth vertical position (5 bits)
    ((data.facialHairMustache & 0x07) << 5); // mustache type (3 bits)

  buf[0x40] = mouth2Details & 0xff;
  buf[0x41] = (mouth2Details >> 8) & 0xff;

  // beard details: type, color, size, vertical position
  let beardDetails =
    (data.facialHairBeard & 0x07) | // beard type (3 bits)
    ((data.facialHairColor & 0x07) << 3) | // beard color (3 bits)
    ((data.facialHairSize & 0x0f) << 6) | // beard size (4 bits)
    ((data.facialHairVertical & 0x1f) << 10); // beard vertical position (5 bits)

  buf[0x42] = beardDetails & 0xff;
  buf[0x43] = (beardDetails >> 8) & 0xff;

  // glasses details: type, color, size, vertical position
  let glassesDetails =
    (data.glassesType & 0x0f) | // glasses type (4 bits)
    ((data.glassesColor & 0x07) << 4) | // glasses color (3 bits)
    ((data.glassesSize & 0x0f) << 7) | // glasses size (4 bits)
    (data.glassesVertical << 11); // glasses vertical position (4 bits)

  buf[0x44] = glassesDetails & 0xff;
  buf[0x45] = (glassesDetails >> 8) & 0xff;

  // mole details: enable, size, horizontal position, vertical position
  let moleDetails =
    (data.moleEnable & 0x01) | // mole enabled (1 bit)
    ((data.moleSize & 0x0f) << 1) | // mole size (4 bits)
    ((data.moleHorizontal & 0x1f) << 5) | // mole horizontal position (5 bits)
    ((data.moleVertical & 0x1f) << 10); // mole vertical position (5 bits)

  buf[0x46] = moleDetails & 0xff;
  buf[0x47] = (moleDetails >> 8) & 0xff;

  // creator name (optional), UTF-16LE encoded
  if (data.creatorName !== undefined) {
    const creatorNameBytes = new Uint8Array(new ArrayBuffer(20));
    const creatorNameBytesView = new DataView(creatorNameBytes.buffer);
    for (let i = 0; i < 10; i++) {
      // only copy 10 characters, last one is padding
      const u16Offset = i * 2;
      creatorNameBytesView.setUint16(
        u16Offset,
        data.creatorName.charCodeAt(i),
        true
      ); // little-endian UTF-16
    }
    buf.set(creatorNameBytes, 0x48);
  }

  // padding2 which should always be zero
  buf[0x5c] = data.padding2 & 0xff;
  buf[0x5d] = (data.padding2 >> 8) & 0xff;

  // SET CRC16 CHECKSUM

  if (!skipCRC16) {
    // crc all before last two bytes
    const calculatedCRC16 = crc16(buf.slice(0, 94));
    // think MSB and LSB are reversed here but eh
    buf[0x5e] = (calculatedCRC16 >> 8) & 0xff;
    buf[0x5f] = calculatedCRC16 & 0xff;
  }

  return buf; // return the buffer containing the encoded StoreData
};

// deobfuscate the obfuscated studio url format
// from, and to, a Uint8Array (so requires converting from/to hex)
const studioURLObfuscationDecode = (data) => {
  const decodedData = new Uint8Array(data);
  const random = decodedData[0];
  let previous = random;

  // NOTE: THIS MAY GET AWAY WITH BEING 47, IDK
  for (let i = 1; i < 48; i++) {
    const encodedByte = decodedData[i];
    const original = (encodedByte - 7 + 256) % 256;
    decodedData[i - 1] = original ^ previous;
    previous = encodedByte;
  }

  return decodedData.slice(0, 46); // resize to normal studio data
};
/*
function crc16(data) {
let crc = 0;
let msb = crc >> 8;
let lsb = crc & 0xFF;

for(let i = 0; i < data.length; i++) {
  let c = data[i];
  let x = c ^ msb;
  x ^= (x >> 4);
  msb = (lsb ^ (x >> 3) ^ (x << 4)) & 0xFF;
  lsb = (x ^ (x << 5)) & 0xFF;
}

crc = (msb << 8) + lsb;
return crc;
}
*/
const encryptAndEncodeVer3StoreDataToQRCodeFormat = (data) => {
  // NOTE: uses sjcl and assumes it is loaded
  const nonce = data.slice(12, 20);
  let content = [...data.slice(0, 12), ...data.slice(20)];

  // checksum the data, overriding the previous checksum it may have had
  const checksumContent = [
    ...data.slice(0, 12),
    ...nonce,
    ...data.slice(20, -2),
  ];
  const newChecksum = crc16(new Uint8Array(checksumContent));
  // pack the uint16 checksum into an array
  const newChecksumArray = [(newChecksum >> 8) & 0xff, newChecksum & 0xff];
  content = [...content.slice(0, -2), ...newChecksumArray];

  //const cipher =  new sjcl.cipher.aes(sjcl.codec.hex.toBits('59FC817E6446EA6190347B20E9BDCE52'));
  const cipher = new sjcl.cipher.aes([
    1509720446, 1682369121, -1875608800, -373436846,
  ]);

  const paddedContent = new Uint8Array([...content, ...new Array(8).fill(0)]);
  const paddedContentBits = sjcl.codec.bytes.toBits(Array.from(paddedContent));
  // nonce has to be padded
  const nonceBits = sjcl.codec.bytes.toBits([...nonce, 0, 0, 0, 0]);

  const encryptedBits = sjcl.mode.ccm.encrypt(
    cipher,
    paddedContentBits,
    nonceBits,
    [],
    128
  );
  const encryptedBytes = sjcl.codec.bytes.fromBits(encryptedBits);

  const correctEncryptedContentLength = encryptedBytes.length - 8 - 16;
  const encryptedContentCorrected = encryptedBytes.slice(
    0,
    correctEncryptedContentLength
  );
  const tag = encryptedBytes.slice(encryptedBytes.length - 16);

  // construct and return an array
  const result = [...nonce, ...encryptedContentCorrected, ...tag];
  // note: not a uint8array because qrjs takes arrays natively
  return result;
};
