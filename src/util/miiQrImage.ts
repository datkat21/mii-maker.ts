import qrjs from "../external/mii-frontend/qrjs.min.js";
import {
  convertDataToType,
  supportedFormats,
} from "../external/mii-frontend/data-conversion.js";
import { encryptAndEncodeVer3StoreDataToQRCodeFormat } from "./EncodeQRCode.js";
import Mii from "../external/mii-js/mii.js";
import { Buffer as Buf } from "../../node_modules/buffer/index.js";
import { Config } from "../config.js";
import { CameraPosition, Mii3DScene, SetupType } from "../class/3DScene.js";
import Html from "@datkat21/html";

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
  const png = qrjs.generatePNG(ver3QRData, { margin: 0 });
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

export const getMiiRender = async (mii: Mii): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    let parent = new Html("div")
      .style({ width: "720px", height: "720px", opacity: "0.1" })
      .appendTo("body");
    const scene = new Mii3DScene(
      mii,
      parent.elm,
      SetupType.Screenshot,
      (renderer) => {
        requestAnimationFrame(() => {
          const imgUrl = renderer.domElement.toBlob((blob) => {
            const image = new Image(
              renderer.domElement.width,
              renderer.domElement.height
            );
            image.src = URL.createObjectURL(blob!);
            console.log("Temporary render URL:", image.src);
            image.onload = () => {
              resolve(image);
              scene.shutdown();
              parent.cleanup();
            };
          });
        });
      }
    );
    scene.init().then(() => {
      scene.updateBody();
      parent.append(scene.getRendererElement());
    });
  });
  // const blob = await (
  //   await fetch(
  //     `${Config.renderer.renderHeadshotURLNoParams}?data=${encodeURIComponent(
  //       mii
  //     )}&shaderType=0&type=face&width=720&verifyCharInfo=0`
  //   )
  // ).blob();
  // const img = new Image(720, 720);
  // img.src = URL.createObjectURL(blob);
  // return new Promise((resolve) => {
  //   img.onload = () => {
  //     return resolve(img);
  //   };
  // });
};

export const getBackground = async (): Promise<HTMLImageElement> => {
  const blob = await (await fetch("./assets/img/bg.png")).blob();
  const img = new Image(1280, 720);
  img.src = URL.createObjectURL(blob);
  return new Promise((resolve) => {
    img.onload = () => {
      return resolve(img);
    };
  });
};

export const QRCodeCanvas = async (mii: string) => {
  const miiData = new Mii(Buf.from(mii, "base64"));
  const render = await getMiiRender(miiData);
  const qrCodeSource = await makeQrCodeImage(mii);
  const background = await getBackground();

  const canvas = document.createElement("canvas");
  canvas.width = 1280;
  canvas.height = 720;
  const ctx = canvas.getContext("2d")!;

  // background
  ctx.drawImage(background, 0, 0);
  // mark
  ctx.font = "500 24px sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillStyle = "#cccccc";
  ctx.fillText(`${location.origin}`, 32, 667);
  ctx.drawImage(render, 49, 0, 720, 720);
  // qr code container
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.roundRect(769, 79, 463, 463, [16, 16, 0, 0]);
  ctx.fill();
  ctx.drawImage(qrCodeSource, 797, 107, 408, 408);
  // name container
  ctx.fillStyle = "#f6f6f6";
  ctx.beginPath();
  ctx.roundRect(769, 542, 463, 99, [0, 0, 16, 16]);
  ctx.fill();
  // mii name
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "500 38px sans-serif";
  ctx.fillText(miiData.miiName, 1005, 591);
  const canvasPngImage = canvas.toDataURL("png", 100);
  return canvasPngImage;
};
