import qrjs from "../external/mii-frontend/qrjs.min.js";
import {
  convertDataToType,
  supportedFormats,
} from "../external/mii-frontend/data-conversion.js";
import { encryptAndEncodeVer3StoreDataToQRCodeFormat } from "./EncodeQRCode.js";
import Mii from "../external/mii-js/mii.js";
import { Buffer as Buf } from "../../node_modules/buffer/index.js";

const ver3Format = supportedFormats.find(
  (f) => f.className === "Gen2Wiiu3dsMiitomo"
)!;

const makeQrCodeImage = async (mii: string): Promise<HTMLImageElement> => {
  const convertedVer3Data = new Uint8Array(
    convertDataToType(
      new Uint8Array(Buf.from(mii, "base64")),
      ver3Format,
      ver3Format.className,
      true
    )
  );
  const ver3QRData =
    encryptAndEncodeVer3StoreDataToQRCodeFormat(convertedVer3Data);
  // console.log(convertedVer3Data, ver3QRData);
  const png = qrjs.generatePNG(ver3QRData, { margin: null });
  // //@ts-expect-error
  // window.qrCodeSourceData = convertedVer3Data;
  // //@ts-expect-error
  // window.qrCodeData = ver3QRData;
  // console.log(ver3QRData, png);
  const img = new Image(431, 431);
  img.src = URL.createObjectURL(await (await fetch(png)).blob());
  return new Promise((resolve) => {
    img.onload = () => {
      return resolve(img);
    };
  });
};

export const getMiiRender = async (mii: string): Promise<HTMLImageElement> => {
  const blob = await (
    await fetch(
      `https://mii-unsecure.ariankordi.net/miis/image.png?data=${encodeURIComponent(
        mii
      )}&shaderType=0&type=face&width=560&verifyCharInfo=0`
    )
  ).blob();
  const img = new Image(560, 560);
  img.src = URL.createObjectURL(blob);
  return new Promise((resolve) => {
    img.onload = () => {
      return resolve(img);
    };
  });
};

export const QRCodeCanvas = async (mii: string) => {
  const render = await getMiiRender(mii);
  const qrCodeSource = await makeQrCodeImage(mii);
  const miiData = new Mii(Buf.from(mii, "base64"));

  const canvas = document.createElement("canvas");
  canvas.width = 1280;
  canvas.height = 720;
  const ctx = canvas.getContext("2d")!;

  // background
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.fillRect(0, 0, 1280, 720);
  ctx.fill();
  // mark
  ctx.font = "500 24px sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillStyle = "#cccccc";
  ctx.fillText("mii-maker-web", 32, 667);
  ctx.drawImage(render, 77, 80, 561, 561);
  // qr code container
  ctx.fillStyle = "#DDDDDD";
  ctx.beginPath();
  ctx.roundRect(741, 79, 463, 463, [16, 16, 0, 0]);
  ctx.fill();
  ctx.drawImage(qrCodeSource, 757, 95, 431, 431);
  // name container
  ctx.fillStyle = "#F7F7F7";
  ctx.beginPath();
  ctx.roundRect(741, 542, 463, 99, [0, 0, 16, 16]);
  ctx.fill();
  // mii name
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "500 38px sans-serif";
  ctx.fillText(miiData.miiName, 972, 591);
  const canvasPngImage = canvas.toDataURL("png", 100);
  return canvasPngImage;
};
