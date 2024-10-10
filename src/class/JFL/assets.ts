import JSZip from "jszip";

export const getAssets = () => assets;

let assets: Record<string, any>;

export const setupAssets = async () => {
  if (assets !== undefined) return console.log("[jfl] assets already set up");

  const data = await fetch("./JFLAssets/JFLAssets.zip").then((j) => j.blob());
  const zip = await JSZip.loadAsync(data);

  const meshDir = zip.folder("mesh")!;
  const texDir = zip.folder("tex")!;

  const loadFile = (
    name: string,
    type: string,
    file: JSZip.JSZipObject
  ): Promise<any> =>
    new Promise((resolve, reject) => {
      file
        .async("blob")
        .then((b) => resolve({ type, name, data: b, success: true }))
        .catch((e) => reject({ type, name, data: e, success: false }));
    });

  let promises: Promise<any>[] = [];
  for (const mesh of Object.keys(meshDir.files)) {
    const meshData = meshDir.files[mesh];
    promises.push(
      new Promise((resolve, reject) => {
        meshData
          .async("blob")
          .then((b) =>
            resolve({ type: "mesh", name: mesh, data: b, success: true })
          )
          .catch((e) =>
            reject({ type: "mesh", name: mesh, data: e, success: false })
          );
      })
    );
  }
  const resolves = await Promise.all(promises);

  //   for (const file of fileList) {
  //     // console.log(file, zip.files[file]);
  //     promises.push(zip.files[file].async("arraybuffer"));
  //   }
  //   for (let i = 0; i < fileList.length; i++) {
  //     const fileName = fileList[i].split(".");
  //     fileName.pop();
  //     await sm.loadSoundBuffer(resolves[i], fileName.join("."));
  //   }

  console.log("[jfl] assets are being set up");
};
