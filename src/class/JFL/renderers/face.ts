// TODO
import {
  LinearSRGBColorSpace,
  MeshBasicMaterial,
  MeshStandardMaterial,
  SRGBColorSpace,
  TextureLoader,
  type Mesh,
} from "three";
import type Mii from "../../../external/mii-js/mii";
import { getMeshes, getTextures } from "../assets";
import { MiiClassToFFLiCharInfo } from "../src/detail/FFLiCharInfo";
import {
  CalcRawMask,
  FFLiOriginPosition,
  type RawMasks,
} from "../src/FFLiRawMask";
import { MiiEyeColorNumberTable } from "../tables/colors";
import { EYE_INDEX, FACE_OVERLAY_INDEX } from "../tables/idLookup";
import { log } from "../util/log";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { traverseAddMaterial, traverseSetPosition } from "../util/traverse";
import { getRenderer, traverseMesh } from "../../../jfl-demo";
import { Buffer } from "../../../../node_modules/buffer/index";

async function getImageDataFromUrl(
  imageUrl: string,
  mirror: boolean
): Promise<ImageData> {
  return new Promise((resolve, reject) => {
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d")!;

    const img = new Image();
    img.onload = () => {
      tempCtx.save();
      if (mirror === true) {
        tempCtx.scale(-1, 1);
        tempCtx.drawImage(img, 0, 0, img.width * -1, img.height);
      } else {
        tempCtx.scale(1, 1);
        tempCtx.drawImage(img, 0, 0, img.width, img.height);
      }
      tempCtx.restore();
      const imageData = tempCtx.getImageData(0, 0, img.width, img.height);
      resolve(imageData);
    };
    img.onerror = () => {
      reject(new Error("Failed to load image"));
    };
    img.src = imageUrl;
  });
}
function replaceColorChannels(
  imageData: ImageData,
  redColor: [number, number, number],
  greenColor: [number, number, number],
  blueColor: [number, number, number]
) {
  const data = imageData.data;

  let count = 0;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    // Skip alpha channel
    if (a === 0) continue;
    // Skip ALL racism
    if (r === 0 && g === 0 && b === 0) continue;
    count++;

    const total = r + g + b;
    const rPercent = (r / total) * 100;
    const gPercent = (g / total) * 100;
    const bPercent = (b / total) * 100;

    // log("rCC", "step1", rPercent, gPercent, bPercent);

    const replacementColors = {
      red: redColor, // [255, 0, 0], // Replace red with this color
      green: greenColor, // [0, 255, 0], // Replace green with this color
      blue: blueColor, // [0, 0, 255], // Replace blue with this color
    };

    // log(
    //   "rCC",
    //   "step2",
    //   replacementColors.red,
    //   replacementColors.green,
    //   replacementColors.blue
    // );

    let replacementColor;
    if (rPercent >= gPercent && rPercent >= bPercent) {
      replacementColor = replacementColors.red;
    } else if (gPercent >= rPercent && gPercent >= bPercent) {
      replacementColor = replacementColors.green;
    } else {
      replacementColor = replacementColors.blue;
    }

    // log("rCC", "step3", replacementColor);

    let secondMostDominant;
    if (rPercent > gPercent && rPercent > bPercent) {
      secondMostDominant =
        gPercent > bPercent ? replacementColors.green : replacementColors.blue;
      // log("rCC", "step3.5", "");
    } else if (gPercent > rPercent && gPercent > bPercent) {
      secondMostDominant =
        rPercent > bPercent ? replacementColors.red : replacementColors.blue;
    } else {
      secondMostDominant =
        rPercent > gPercent ? replacementColors.red : replacementColors.green;
    }

    // log("rCC", "step4", secondMostDominant);

    // Mix the replacement color with the second most dominant color (adjust the mixing formula as needed)
    // const mixedColor = [
    //   ((replacementColor[0] + secondMostDominant[0]) / 2) * 255,
    //   ((replacementColor[1] + secondMostDominant[1]) / 2) * 255,
    //   ((replacementColor[2] + secondMostDominant[2]) / 2) * 255,
    // ];

    // log("rCC", "step5", mixedColor[0], mixedColor[1], mixedColor[2]);

    data[i] = replacementColor[0] * 255;
    data[i + 1] = replacementColor[1] * 255;
    data[i + 2] = replacementColor[2] * 255;
  }

  log(count, "iterations for replaceColorChannels");

  return imageData;
}

export function renderFace(mii: Mii): Promise<Mesh> {
  return new Promise(async (resolve, reject) => {
    log("mii eyes:", mii.eyeType);

    const gltfLoader = new GLTFLoader();
    const texLoader = new TextureLoader();

    const convertedMii = MiiClassToFFLiCharInfo(mii);

    const defaultMask = {
      pos: { x: 0, y: 0 },
      scale: { x: 0, y: 0 },
      rot: 0,
      originPos: 0,
    };

    let mask: RawMasks = {
      rawMaskPartsDescEye: [defaultMask, defaultMask],
      rawMaskPartsDescEyebrow: [defaultMask, defaultMask],
      rawMaskPartsDescMole: defaultMask,
      rawMaskPartsDescMouth: defaultMask,
      rawMaskPartsDescMustache: [defaultMask, defaultMask],
    };

    CalcRawMask(
      mask,
      MiiClassToFFLiCharInfo(mii),
      312,
      convertedMii.parts.eyeType,
      convertedMii.parts.eyeType
    );

    log("EDITED MASK", mask);

    const texList = getTextures();

    // test
    let eyeURL = URL.createObjectURL(texList[EYE_INDEX + mii.eyeType].data);
    let eyeLImageData = await getImageDataFromUrl(eyeURL, false);
    let eyeRImageData = await getImageDataFromUrl(eyeURL, true);
    URL.revokeObjectURL(eyeURL);
    eyeLImageData = replaceColorChannels(
      eyeLImageData,
      [0, 1, 1],
      [1, 1, 1],
      MiiEyeColorNumberTable[mii.eyeColor]
    );
    eyeRImageData = replaceColorChannels(
      eyeRImageData,
      [0, 1, 1],
      [1, 1, 1],
      MiiEyeColorNumberTable[mii.eyeColor]
    );

    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.top = "50px";
    canvas.style.left = "50px";
    canvas.width = 312;
    canvas.height = 312;
    canvas.style.background = "white";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d")!;

    console.log(
      mask.rawMaskPartsDescEye[0].pos.x,
      canvas.width - mask.rawMaskPartsDescEye[1].pos.x
    );

    // ctx.putImageData(
    //   eyeLImageData,
    //   canvas.width - mask.rawMaskPartsDescEye[0].pos.x,
    //   canvas.height - mask.rawMaskPartsDescEye[0].pos.y
    //   // 0,
    //   // 0,
    //   // mask.rawMaskPartsDescEye[0].scale.x,
    //   // mask.rawMaskPartsDescEye[0].scale.y
    // );

    function putImageData(
      imageData: ImageData,
      originPos: FFLiOriginPosition,
      xPosition: number,
      yPosition: number,
      width: number,
      height: number,
      rotation: number,
      isSecondary: boolean = false
    ) {
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d")!;
      tempCanvas.width = imageData.width;
      tempCanvas.height = imageData.height;
      tempCtx.putImageData(imageData, 0, 0);
      ctx.save();

      let startingX = canvas.width / 2 - imageData.width / 2;

      switch (originPos) {
        case FFLiOriginPosition.FFLI_ORIGIN_POSITION_CENTER:
          startingX = canvas.width / 2 - imageData.width / 2;
          break;
        case FFLiOriginPosition.FFLI_ORIGIN_POSITION_RIGHT:
          startingX = canvas.width - imageData.width;
          startingX -= xPosition;
          break;
        case FFLiOriginPosition.FFLI_ORIGIN_POSITION_LEFT:
          startingX = 0;
          startingX += xPosition;
          break;
      }

      // Primary eye will move LEFT with positive X value, secondary will move right
      if (originPos === FFLiOriginPosition.FFLI_ORIGIN_POSITION_CENTER) {
        if (isSecondary === false) {
          startingX = xPosition - canvas.width / 2;
        } else {
          startingX = xPosition;
        }

        // ctx.rotate(rotation);
        // ctx.scale(
        //   width * (imageData.width / canvas.width),
        //   height * (imageData.height / canvas.height)
        // );
        // console.log(
        //   `${width} * (${imageData.width} / ${canvas.width})`,
        //   width * (imageData.width / canvas.width),
        //   `${height} * (${imageData.height} / ${canvas.height})`,
        //   height * (imageData.height / canvas.height)
        // );
        ctx.translate(startingX, 0);
        ctx.drawImage(
          tempCanvas,
          canvas.width / 2 - imageData.width / 2,
          canvas.height / 2 - imageData.height / 2,
          width * 3,
          height * 3
        );
      }

      ctx.restore();
    }

    putImageData(
      eyeLImageData,
      mask.rawMaskPartsDescEye[0].originPos,
      mask.rawMaskPartsDescEye[0].pos.x,
      mask.rawMaskPartsDescEye[0].pos.y,
      mask.rawMaskPartsDescEye[0].scale.x,
      mask.rawMaskPartsDescEye[0].scale.y,
      mask.rawMaskPartsDescEye[0].rot
    );
    putImageData(
      eyeRImageData,
      mask.rawMaskPartsDescEye[1].originPos,
      mask.rawMaskPartsDescEye[1].pos.x,
      mask.rawMaskPartsDescEye[1].pos.y,
      mask.rawMaskPartsDescEye[1].scale.x,
      mask.rawMaskPartsDescEye[1].scale.y,
      mask.rawMaskPartsDescEye[1].rot,
      true
    );

    canvas.toBlob(async (blob) => {
      const faceTexUrl = URL.createObjectURL(blob!);
      const faceMaskUrl = URL.createObjectURL(
        getMeshes()[FACE_OVERLAY_INDEX + convertedMii.parts.faceType].data
      );

      const gltf = await gltfLoader.loadAsync(faceMaskUrl);
      const mesh = gltf.scene.children[0] as Mesh;
      mesh.geometry.computeVertexNormals();
      setTimeout(async () => {
        mesh.geometry.userData = {
          cullMode: 1,
          modulateColor: [1, 1, 1, 1],
          modulateMode: 1,
          modulateType: 6,
        };
        mesh.scale.set(0.1, 0.1, 0.1);
        URL.revokeObjectURL(faceMaskUrl);
        const texture = await texLoader.loadAsync(
          faceTexUrl
          // "https://mii-renderer.nxw.pw/miis/image.png?width=312&scale=1&drawStageMode=mask_only&data=" +
          //   encodeURIComponent(Buffer.from(mii.encode()).toString("base64"))
        );
        // getRenderer().initTexture(texture);
        console.log("texture:", texture);
        // texture.colorSpace = SRGBColorSpace;
        texture.colorSpace = LinearSRGBColorSpace;
        texture.wrapS = 1002;
        texture.wrapT = 1002;
        // texture.flipY = false;
        mesh.material = new MeshStandardMaterial({
          map: texture,
          // map: texture,
          // emissiveIntensity: 1,
          // transparent: true,
          // metalness: 1,
          // toneMapped: true,
          // alphaTest: 0.5,
        });
        traverseSetPosition(gltf.scene, [0, -1, 0]);
        // apply FFL shader to face texture
        // (mesh.material as MeshStandardMaterial).map!.colorSpace =
        //   LinearSRGBColorSpace;
        // traverseMesh(mesh);

        return resolve(mesh);
      }, 300);
    });
  });
}
