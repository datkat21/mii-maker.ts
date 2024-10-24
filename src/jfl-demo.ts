// JFL IS VERY BROKEN AND ONLY FOR TESTING, DO NOT USE THIS
// It's not very good anyways :(

import { setupAssets } from "./class/JFL/assets";
import { renderFace } from "./class/JFL/renderers/face";
import Mii from "./external/mii-js/mii";
import { Buffer } from "../node_modules/buffer/index";
import { generateHeadModel } from "./class/JFL/generateHead";
import * as THREE from "three";
import CameraControls from "camera-controls";
import { OrbitControls } from "three/examples/jsm/Addons.js";
// import {
//   cLightAmbient,
//   cLightDiffuse,
//   cLightDir,
//   cLightSpecular,
//   cMaterialParam,
//   cRimColor,
//   cRimPower,
// } from "./class/3d/shader/fflShaderConst";
import {
  fflFragmentShader,
  fflVertexShader,
} from "./class/3d/shader/FFLShader";
import {
  cLightAmbient,
  cLightDiffuse,
  cLightDir,
  cLightSpecular,
  cMaterialParam,
  cRimColor,
  cRimPower,
} from "./class/3d/shader/fflShaderConst";

// 3D scene test
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 25);
camera.rotation.set(0, Math.PI, 0);
const renderer = new THREE.WebGLRenderer({ antialias: true });
export const getRenderer = () => renderer;

renderer.setSize(window.innerWidth, window.innerHeight);

const div = document.createElement("div");
div.classList.add("ui-base");
div.style.padding = "0";

div.appendChild(renderer.domElement);
document.body.appendChild(div);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

CameraControls.install({ THREE });
const controls = new CameraControls(camera, renderer.domElement);

const clock = new THREE.Clock();

const cubeTextureLoader = new THREE.CubeTextureLoader();
const sky = "sky";
cubeTextureLoader
  .loadAsync([
    "cube_map.png",
    "cube_map.png",
    "cube_map.png",
    "cube_map.png",
    "cube_map.png",
    "cube_map.png",
    // `./assets/img/${sky}_px.png`, // px.png
    // `./assets/img/${sky}_nx.png`, // nx.png
    // `./assets/img/${sky}_py.png`, // py.png
    // `./assets/img/${sky}_ny.png`, // ny.png
    // `./assets/img/${sky}_pz.png`, // pz.png
    // `./assets/img/${sky}_nz.png`, // nz.png
  ])
  .then((backgroundMap) => {
    // scene.background = backgroundMap;
    scene.environment = backgroundMap;
    // scene.backgroundIntensity = 0.25;
    scene.environmentIntensity = 0.25;
  });

const animators: Map<string, (time: number, delta: number) => any> = new Map();

const animate = (time: number) => {
  const delta = clock.getDelta();
  renderer.render(scene, camera);

  animators.forEach((f) => f(time, delta));
  // const timeChange = time % 4;

  // TODO: nice background :D
  // this.#scene.backgroundRotation.set(
  //   0,
  //   (time / 1000) * 0.01 * Math.PI,
  //   (time / 1000) * 0.01 * Math.PI
  // );

  // if (this.mixer) {
  //   this.mixer.update(time * 1000);
  // }
};

const DIV = 1000;
const MUL = 5;

animators.set("controls", (_time, delta) => controls.update(delta));

const light = new THREE.AmbientLight(0x666666, 1);
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xebfeff, 3.14);
const dlh = new THREE.DirectionalLightHelper(directionalLight, 2);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight, dlh);

// let colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0x00ffff, 0xff00ff];
let colors = [
  [1, 0, 0],
  // [0, 1, 0],
  // [0, 0, 1],
  // [1, 1, 0],
  // [0, 1, 1],
  // [1, 0, 1],
];

for (let i = 0; i < colors.length; i++) {
  let val = i + 1;
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial();

  geometry.userData = {
    cullMode: 1,
    modulateColor: [...colors[i], 1],
    modulateMode: 0,
    modulateType: 1,
  };
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  traverseFFLShaderTest(mesh);
  animators.set(`cube${i}`, (time: number, delta: number) => {
    mesh.rotation.set(
      (time / DIV / val) * MUL * val,
      (time / DIV / val) * MUL * val,
      (time / DIV / val) * MUL * val
    );
    mesh.position.set(
      Math.sin((time * val) / DIV) * ((val + 2) / MUL) * 10,
      Math.sin((time * val) / DIV) * ((val + 2) / MUL) * 10,
      Math.cos((time * val) / DIV) * ((val + 2) / MUL) * 10
    );
  });
}

renderer.setClearColor(0x666666);
// renderer.setClearAlpha(0);
renderer.setAnimationLoop(animate);

// JFL is WIP and unused for now
await setupAssets();
const miiData = new Mii(
  Buffer.from(
    // "AwAAQKBBOMSghAAA27iHMb5gKyoqQgAAWS1KAGEAcwBtAGkAbgBlAAAAAAAAABw3EhB7ASFuQxwNZMcYAAgegg0AMEGzW4JtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsH",
    "AwAFMG0rAiKJRLe1nDWwN5i26X5uuAAAY0FjAGgAYQByAGwAaQBuAGUAAAAAAEwmApBlBttoRBggNEYUgRITYg0AACkAUkhQYwBoAGEAcgBsAGkAbgBlAAAAAAAAAHLb", // "AwEAAAAAAAAAAAAAgP9wmQAAAAAAAAAAAABNAGkAaQAAAAAAAAAAAAAAAAAAAEBAAAAhAQJoRBgmNEYUgRIXaA0AACkAUkhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMNn",
    "base64"
  )
);
const miiHeadTest = await generateHeadModel(miiData);
traverseFFLShaderTest(miiHeadTest);

// animators.set("head_spin", (time) => {
//   miiHeadTest.rotation.set(0, -time / 800, 0);
// });

scene.add(miiHeadTest);

function traverseFFLShaderTest(model: THREE.Object3D<THREE.Object3DEventMap>) {
  // Traverse the model to access its meshes
  model.traverse((n) => {
    const node = n as THREE.Mesh;
    if (node.isMesh) {
      traverseMesh(node);
    }
  });
}
export function traverseMesh(node: THREE.Mesh) {
  const originalMaterial = node.material as THREE.MeshBasicMaterial;

  // Access userData from geometry
  const userData = node.geometry.userData;

  // Retrieve modulateType and map to material parameters
  const modulateType = userData.modulateType;
  if (userData.modulateType === undefined)
    console.warn(`Mesh "${node.name}" is missing "modulateType" in userData.`);

  // HACK for now: disable lighting on mask, glass, noseline
  // (Because there is some lighting bug affecting
  // those that does not happen in FFL-Testing)
  const lightEnable = modulateType > 5 ? false : true;
  // Select material parameter based on the modulate type, default to faceline
  const materialParam =
    modulateType !== undefined
      ? modulateType && modulateType < 9
        ? cMaterialParam[modulateType]
        : cMaterialParam[0]
      : cMaterialParam[0];

  // Retrieve modulateMode, defaulting to constant color
  const modulateMode =
    userData.modulateMode === undefined ? 0 : userData.modulateMode;

  // Retrieve modulateColor (vec3)
  let modulateColor;
  if (!userData.modulateColor) {
    console.warn(`Mesh "${node.name}" is missing "modulateColor" in userData.`);
    // Default to red if missing
    modulateColor = new THREE.Vector4(...[1, 0, 0], 1);
  } else {
    modulateColor = new THREE.Vector4(...userData.modulateColor, 1);
  }

  console.log(node.name, userData);

  // Define macros based on the presence of textures
  const defines: Record<string, any> = {};
  if (originalMaterial.map) {
    defines.USE_MAP = "";
    originalMaterial.map.colorSpace = THREE.LinearSRGBColorSpace;
  }

  // Function to Map FFLCullMode to three.js material side
  let side = originalMaterial.side;
  if (userData.cullMode !== undefined) {
    switch (userData.cullMode) {
      case 0: // FFL_CULL_MODE_NONE
        side = THREE.DoubleSide; // No culling
        break;
      case 1: // FFL_CULL_MODE_BACK
        side = THREE.FrontSide; // Cull back faces, render front
        break;
      case 2: // FFL_CULL_MODE_FRONT
        side = THREE.BackSide; // Cull front faces, render back
        break;
    }
  }

  // Create a custom ShaderMaterial
  const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader: fflVertexShader,
    fragmentShader: fflFragmentShader,
    uniforms: {
      u_const1: { value: modulateColor },
      u_light_ambient: { value: cLightAmbient },
      u_light_diffuse: { value: cLightDiffuse },
      u_light_specular: { value: cLightSpecular },
      u_light_dir: { value: cLightDir },
      u_light_enable: { value: lightEnable },
      u_material_ambient: { value: materialParam.ambient },
      u_material_diffuse: { value: materialParam.diffuse },
      u_material_specular: { value: materialParam.specular },
      u_material_specular_mode: { value: materialParam.specularMode },
      u_material_specular_power: { value: materialParam.specularPower },
      u_mode: { value: modulateMode },
      u_rim_color: { value: cRimColor },
      u_rim_power: { value: cRimPower },
      s_texture: { value: originalMaterial.map },
    },
    defines: defines,
    side: side,
    // NOTE: usually these blend modes are
    // only set for DrawXlu stage
    blending: THREE.CustomBlending,
    blendDstAlpha: THREE.OneFactor,
    transparent: originalMaterial.transparent, // Handle transparency
    alphaTest: originalMaterial.alphaTest, // Handle alpha testing
  });

  // Assign the custom material to the mesh
  node.material = shaderMaterial;
}
