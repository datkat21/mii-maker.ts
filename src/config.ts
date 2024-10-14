// Configuration file used client-side
const baseURL = "https://mii-renderer.nxw.pw/miis/image";
export const Config = {
  renderer: {
    baseURL,
    renderHeadshotURL: `${baseURL}.png?shaderType=0&type=face&width=260&verifyCharInfo=0`,
    renderHeadshotURLNoParams: `${baseURL}.png`,
    render3DHeadURL: `${baseURL}.glb?shaderType=0&type=face&width=260&verifyCharInfo=0`,
    renderFaceURL: `${baseURL}.png?width=312&scale=1&drawStageMode=mask_only`,
    randomUserURL: "???",
  },
  version: {
    string: "v0.5",
    name: "Unfinished",
  },
};
