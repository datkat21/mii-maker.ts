// https://jsfiddle.net/arian_/8gvynrdu/6/
import * as THREE from "three";
// Material table for FFLDefaultShader mapping to FFLModulateType
// Reference: https://github.com/aboood40091/FFL-Testing/blob/master/src/Shader.cpp
export enum cMaterialName {
  FFL_MODULATE_TYPE_SHAPE_FACELINE,
  FFL_MODULATE_TYPE_SHAPE_BEARD,
  FFL_MODULATE_TYPE_SHAPE_NOSE,
  FFL_MODULATE_TYPE_SHAPE_FOREHEAD,
  FFL_MODULATE_TYPE_SHAPE_HAIR,
  FFL_MODULATE_TYPE_SHAPE_CAP,
  FFL_MODULATE_TYPE_SHAPE_MASK,
  FFL_MODULATE_TYPE_SHAPE_NOSELINE,
  FFL_MODULATE_TYPE_SHAPE_GLASS,
  FFL_MODULATE_TYPE_SHAPE_BODY,
  FFL_MODULATE_TYPE_SHAPE_PANTS,
}
export const cMaterialParam = [
  {
    // FFL_MODULATE_TYPE_SHAPE_FACELINE
    ambient: new THREE.Vector4(0.85, 0.75, 0.75, 1.0),
    diffuse: new THREE.Vector4(0.75, 0.75, 0.75, 1.0),
    specular: new THREE.Vector4(0.3, 0.3, 0.3, 1.0),
    specularPower: 1.2,
    specularMode: 0,
  },
  {
    // FFL_MODULATE_TYPE_SHAPE_BEARD
    ambient: new THREE.Vector4(1.0, 1.0, 1.0, 1.0),
    diffuse: new THREE.Vector4(0.7, 0.7, 0.7, 1.0),
    specular: new THREE.Vector4(0.0, 0.0, 0.0, 1.0),
    specularPower: 40.0,
    specularMode: 1,
  },
  {
    // FFL_MODULATE_TYPE_SHAPE_NOSE
    ambient: new THREE.Vector4(0.9, 0.85, 0.85, 1.0),
    diffuse: new THREE.Vector4(0.75, 0.75, 0.75, 1.0),
    specular: new THREE.Vector4(0.22, 0.22, 0.22, 1.0),
    specularPower: 1.5,
    specularMode: 0,
  },
  {
    // FFL_MODULATE_TYPE_SHAPE_FOREHEAD
    ambient: new THREE.Vector4(0.85, 0.75, 0.75, 1.0),
    diffuse: new THREE.Vector4(0.75, 0.75, 0.75, 1.0),
    specular: new THREE.Vector4(0.3, 0.3, 0.3, 1.0),
    specularPower: 1.2,
    specularMode: 0,
  },
  {
    // FFL_MODULATE_TYPE_SHAPE_HAIR
    ambient: new THREE.Vector4(1.0, 1.0, 1.0, 1.0),
    diffuse: new THREE.Vector4(0.7, 0.7, 0.7, 1.0),
    specular: new THREE.Vector4(0.35, 0.35, 0.35, 1.0),
    specularPower: 10.0,
    specularMode: 1,
  },
  {
    // FFL_MODULATE_TYPE_SHAPE_CAP
    ambient: new THREE.Vector4(0.75, 0.75, 0.75, 1.0),
    diffuse: new THREE.Vector4(0.72, 0.72, 0.72, 1.0),
    specular: new THREE.Vector4(0.3, 0.3, 0.3, 1.0),
    specularPower: 1.5,
    specularMode: 0,
  },
  {
    // FFL_MODULATE_TYPE_SHAPE_MASK
    ambient: new THREE.Vector4(1.0, 1.0, 1.0, 1.0),
    diffuse: new THREE.Vector4(0.7, 0.7, 0.7, 1.0),
    specular: new THREE.Vector4(0.0, 0.0, 0.0, 1.0),
    specularPower: 40.0,
    specularMode: 1,
  },
  {
    // FFL_MODULATE_TYPE_SHAPE_NOSELINE
    ambient: new THREE.Vector4(1.0, 1.0, 1.0, 1.0),
    diffuse: new THREE.Vector4(0.7, 0.7, 0.7, 1.0),
    specular: new THREE.Vector4(0.0, 0.0, 0.0, 1.0),
    specularPower: 40.0,
    specularMode: 1,
  },
  {
    // FFL_MODULATE_TYPE_SHAPE_GLASS
    ambient: new THREE.Vector4(1.0, 1.0, 1.0, 1.0),
    diffuse: new THREE.Vector4(0.7, 0.7, 0.7, 1.0),
    specular: new THREE.Vector4(0.0, 0.0, 0.0, 1.0),
    specularPower: 40.0,
    specularMode: 1,
  },

  {
    // body
    ambient: new THREE.Vector4(0.95622, 0.95622, 0.95622, 1.0),
    diffuse: new THREE.Vector4(0.49673, 0.49673, 0.49673, 1.0),
    specular: new THREE.Vector4(0.24099, 0.24099, 0.24099, 1.0),
    specularPower: 3.0,
    specularMode: 0,
  },
  {
    // pants
    ambient: new THREE.Vector4(0.95622, 0.95622, 0.95622, 1.0),
    diffuse: new THREE.Vector4(1.08497, 1.08497, 1.08497, 1.0),
    specular: new THREE.Vector4(0.2409, 0.2409, 0.2409, 1.0),
    specularPower: 3.0,
    specularMode: 0,
  },
];

// FFLDefaultShader default lighting parameters
export const cLightAmbient = new THREE.Vector4(0.73, 0.73, 0.73, 1.0);
export const cLightDiffuse = new THREE.Vector4(0.6, 0.6, 0.6, 1.0);
export const cLightSpecular = new THREE.Vector4(0.7, 0.7, 0.7, 1.0);
// Light direction derived from this vector: [-0.65, 0.36]
export const cLightDir = new THREE.Vector3(
  -0.4531539381,
  0.4226179123,
  0.7848858833
);
export const cRimColor = new THREE.Vector4(0.3, 0.3, 0.3, 1.0);
export const cRimPower = 2.0;

export type FFLColor = [number, number, number, number];

// thanks ariankordi for the values extracted below :)

// one of your own miis
export const cPantsColorGray: FFLColor = [0.25098, 0.27451, 0.30588, 1.0];
// favorite/account mii
export const cPantsColorRed: FFLColor = [0.43922, 0.12549, 0.06275, 1.0];
// foreign mii from other console
export const cPantsColorBlue: FFLColor = [0.15686, 0.25098, 0.47059, 1.0];
// special mii created by N
export const cPantsColorGold: FFLColor = [0.75294, 0.62745, 0.18824, 1.0];

// Favorite colors (from color table) converted to FFL Shader colors:
export const MiiFavoriteFFLColorLookupTable: Record<number, FFLColor> = {
  0: [0.824, 0.118, 0.078, 1.0],
  1: [1.0, 0.431, 0.098, 1.0],
  2: [1.0, 0.847, 0.125, 1.0],
  3: [0.471, 0.824, 0.125, 1.0],
  4: [0.0, 0.471, 0.188, 1.0],
  5: [0.039, 0.282, 0.706, 1.0],
  6: [0.235, 0.667, 0.871, 1.0],
  7: [0.961, 0.353, 0.49, 1.0],
  8: [0.451, 0.157, 0.678, 1.0],
  9: [0.282, 0.22, 0.094, 1.0],
  10: [0.878, 0.878, 0.878, 1.0],
  11: [0.094, 0.094, 0.078, 1.0],
};
