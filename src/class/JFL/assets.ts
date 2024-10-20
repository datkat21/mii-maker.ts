import JSZip from "jszip";

export const getMeshes = () => meshes;
export const getTextures = () => textures;

let meshes: any[];
let textures: any[];

export const setupAssets = async (
  assetPath: string = "./JFLAssets/JFLAssets.zip"
) => {
  if (meshes !== undefined)
    return console.log("[jfl] mesh assets already set up");
  if (textures !== undefined)
    return console.log("[jfl] texture assets already set up");

  const data = await fetch(assetPath).then((j) => j.blob());
  const zip = await JSZip.loadAsync(data);

  const files = Object.keys(zip.files).filter((f) => !f.endsWith("/"));
  const meshEntries = files.filter((f) => f.includes("mesh/"));
  const texEntries = files.filter((f) => f.includes("tex/"));

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
  // load meshes and textures
  for (let mesh of meshEntries) {
    if (mesh === "mesh/") continue;
    const meshData = zip.file(mesh)!;
    mesh = mesh.replace("mesh/", "");
    promises.push(loadFile(mesh, "mesh", meshData));
  }
  for (let tex of texEntries) {
    if (tex === "tex/") continue;
    const texData = zip.file(tex)!;
    tex = tex.replace("tex/", "");
    promises.push(loadFile(tex, "tex", texData));
  }
  const resolves = await Promise.all(promises);

  const meshList: any[] = [];
  resolves
    .filter((r) => r.type === "mesh")
    .forEach((mesh) => {
      meshList[parseInt(mesh.name.slice(6, -4))] = mesh;
    });
  const texList: any[] = [];
  resolves
    .filter((r) => r.type === "tex")
    .forEach((tex) => {
      texList[parseInt(tex.name.slice(4, -4))] = tex;
    });
  // .sort(
  //   (a, b) => parseInt(a.name.slice(6, -4)) - parseInt(b.name.slice(6, -4))
  // );

  console.log("meshes:", meshList);
  console.log("textures:", texList);

  meshes = meshList;
  textures = texList;
};
