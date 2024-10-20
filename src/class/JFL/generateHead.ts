import type Mii from "../../external/mii-js/mii";
import {
  Color,
  Group,
  Material,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Texture,
} from "three";
import { log } from "./util/log";
import { renderFace } from "./renderers/face";
import { renderNose } from "./renderers/nose";
import {
  FACE_FILLERS_INDEX,
  HAIR_MESH_INDEX,
  HEAD_MESH_INDEX,
  NOSE_MESH_INDEX,
} from "./tables/idLookup";
import { getMeshes } from "./assets";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import {
  traverseAddMaterial,
  traverseAddUserData,
  traverseSetPosition,
  traverseSetScale,
} from "./util/traverse";
import { MiiHairColorTable, MiiSkinColorTable } from "./tables/colors";
import { cMaterialName } from "../3d/shader/fflShaderConst";

export async function generateHeadModel(mii: Mii) {
  const loader = new GLTFLoader();
  const group = new Group();

  async function loadMeshToGroup(
    meshId: number,
    material: MeshStandardMaterial,
    color: [number, number, number],
    modulateType: cMaterialName
    // userData: Record<string, any>
  ) {
    const meshURL = URL.createObjectURL(getMeshes()[meshId].data);
    const meshGLTF = await loader.loadAsync(meshURL);
    URL.revokeObjectURL(meshURL);
    traverseSetPosition(meshGLTF.scene, [0, -1, 0]);
    traverseSetScale(meshGLTF.scene, [0.1, 0.1, 0.1]);
    // const { r, g, b } = material.color; //.multiplyScalar(1.8);
    traverseAddUserData(meshGLTF.scene, {
      cullMode: 1,
      modulateColor: [...color, 1],
      modulateMode: 0,
      modulateType: modulateType,
    });
    traverseAddMaterial(meshGLTF.scene, material);
    group.add(meshGLTF.scene);
    return meshGLTF.scene;
  }

  // Head model
  const headModel = await loadMeshToGroup(
    mii.faceType + HEAD_MESH_INDEX,
    new MeshStandardMaterial({
      metalness: 0.5,
      roughness: 0.5,
      color: MiiSkinColorTable[mii.skinColor],
    }),
    MiiSkinColorTable[mii.skinColor],
    cMaterialName.FFL_MODULATE_TYPE_SHAPE_FACELINE
  );
  const hairModel = await loadMeshToGroup(
    mii.hairType + HAIR_MESH_INDEX,
    new MeshStandardMaterial({
      metalness: 0.5,
      roughness: 0.5,
      color: MiiHairColorTable[mii.hairColor],
    }),
    MiiHairColorTable[mii.hairColor],
    5
  );
  console.log(mii.noseType + NOSE_MESH_INDEX);

  let hasNose: boolean = false,
    noseModel: any;

  if (mii.noseType !== 0 && mii.noseType !== 2) {
    let noseLookup = mii.noseType;
    if (mii.noseType === 1) noseLookup = 0;
    // if (mii.noseType > 1) noseLookup = noseLookup + 1;

    noseModel = await loadMeshToGroup(
      noseLookup + NOSE_MESH_INDEX,
      new MeshStandardMaterial({
        metalness: 1,
        roughness: 1,
      }),
      MiiSkinColorTable[mii.skinColor],
      cMaterialName.FFL_MODULATE_TYPE_SHAPE_NOSE
    );
    noseModel.position.set(0, 2, 2.7);
  }

  let foreheadModel = await loadMeshToGroup(
    mii.hairType + FACE_FILLERS_INDEX,
    new MeshStandardMaterial({
      metalness: 1,
      roughness: 1,
    }),
    MiiSkinColorTable[mii.skinColor],
    3
  );


  log(headModel, hairModel);

  const faceline = await renderFace(mii);
  // const noseline = renderNose(mii);
  group.add(faceline);

  //@ts-expect-error
  window.faceDebug = {
    headModel,
    hairModel,
    noseModel,
    faceline,
    // noseline,
  };

  log("loaded mii:", mii);

  return group;
}
