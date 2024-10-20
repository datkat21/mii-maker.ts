import {
  MeshStandardMaterial,
  type Material,
  type Mesh,
  type Object3D,
  type Vector3,
} from "three";

// Helper function to assign a material to a glTF object
export function traverseAddMaterial(object: Object3D, material: Material) {
  object.traverse((c) => {
    const child = c as Mesh;

    if (child.isMesh && child.geometry) {
      // Compute vertex normals if they don't exist
      if (!child.geometry.attributes.normal) {
        child.geometry.computeVertexNormals();
        console.log("computing vertex normals for", child.name);
      }
      child.material = material;
      console.log("adding material to", child.name);
    }
  });
}

// Helper function to assign user data to a glTF object that doesn't have it
export function traverseAddUserData(
  object: Object3D,
  userData: Record<string, any>
) {
  object.traverse((c) => {
    const child = c as Mesh;

    if (child.isMesh) {
      child.geometry.userData = userData;
      // child.userData = userData;
    }
  });
}

// Helper function to scale down a big model
export function traverseSetScale(
  object: Object3D,
  scale: [number, number, number]
) {
  object.traverse((c) => {
    const child = c as Mesh;

    if (child.isMesh) {
      child.scale.set(...scale);
    }
  });
}

// Helper function to position a model
export function traverseSetPosition(
  object: Object3D,
  position: [number, number, number]
) {
  object.traverse((c) => {
    const child = c as Mesh;

    if (child.isMesh) {
      child.position.set(...position);
    }
  });
}
