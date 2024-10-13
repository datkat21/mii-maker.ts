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
