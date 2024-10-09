import { crc16 } from "../external/mii-frontend/crc16.js";
import { Buffer as Buf } from "../../node_modules/buffer/index.js";
import sjcl from "../external/mii-frontend/sjcl.min.js";

// taken from the mii renderer frontend code
export const encryptAndEncodeVer3StoreDataToQRCodeFormat = (
  data: Uint8Array
) => {
  // NOTE: uses sjcl and assumes it is loaded
  const nonce = data.slice(12, 20);
  let content = [...data.slice(0, 12), ...data.slice(20)];

  // checksum the data, overriding the previous checksum it may have had
  const checksumContent = [
    ...data.slice(0, 12),
    ...nonce,
    ...data.slice(20, -2),
  ];
  const newChecksum = crc16(Buf.from(new Uint8Array(checksumContent)));
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
