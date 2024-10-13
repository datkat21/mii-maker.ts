import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import CameraControls from "camera-controls";
import type Mii from "../external/mii-js/mii";
import { MiiFavoriteColorLookupTable } from "../constants/ColorTables";
import {
  cLightAmbient,
  cLightDiffuse,
  cLightDir,
  cLightSpecular,
  cMaterialName,
  cMaterialParam,
  cRimColor,
  cRimPower,
} from "./3d/shader/fflShaderConst";
import {
  FFLBodyShaderMaterial,
  fflFragmentShader,
  fflVertexShader,
} from "./3d/shader/FFLShader";
import { RenderPart } from "./MiiEditor";
import { Config } from "../config";
import { Buffer } from "../../node_modules/buffer";

export enum CameraPosition {
  MiiHead,
  MiiFullBody,
}

export class Mii3DScene {
  #camera: THREE.PerspectiveCamera;
  #controls: CameraControls;
  #textureLoader: THREE.TextureLoader;
  #gltfLoader: GLTFLoader;
  #scene: THREE.Scene;
  #renderer: THREE.WebGLRenderer;
  #parent: HTMLElement;
  mii: Mii;
  ready: boolean;
  headReady: boolean;
  mixer!: THREE.AnimationMixer;
  animators: Map<string, (n: number, f: number) => any>;
  animations: Map<string, THREE.AnimationClip>;
  constructor(mii: Mii, parent: HTMLElement) {
    this.animations = new Map();
    this.animators = new Map();
    this.#parent = parent;
    this.#scene = new THREE.Scene();
    this.#camera = new THREE.PerspectiveCamera(
      45,
      parent.offsetWidth / parent.offsetHeight,
      0.1,
      1000
    );
    this.#camera.position.set(0, 0, 25);
    this.#camera.rotation.set(0, Math.PI, 0);
    this.ready = false;
    this.headReady = false;

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    cubeTextureLoader
      .loadAsync([
        "./cube_map.png", // px.png
        "./cube_map.png", // nx.png
        "./cube_map.png", // py.png
        "./cube_map.png", // ny.png
        "./cube_map.png", // pz.png
        "./cube_map.png", // nz.png
      ])
      .then((environmentMap) => {
        this.#scene.environment = environmentMap;
        this.#scene.environmentIntensity = 1;
      });
    // cubeTextureLoader
    //   .loadAsync([
    //     "./assets/img/sky_px.png", // px.png
    //     "./assets/img/sky_nx.png", // nx.png
    //     "./assets/img/sky_py.png", // py.png
    //     "./assets/img/sky_ny.png", // ny.png
    //     "./assets/img/sky_pz.png", // pz.png
    //     "./assets/img/sky_nz.png", // nz.png
    //   ])
    //   .then((backgroundMap) => {
    //     this.#scene.background = backgroundMap;
    //     this.#scene.backgroundIntensity = 0.2;
    //   });

    const directionalLight = new THREE.DirectionalLight(0xebfeff, Math.PI);
    directionalLight.position.set(1, 0.1, 1);
    // directionalLight.visible = false;
    this.#scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x666666, Math.PI / 16);
    // ambientLight.visible = false;
    this.#scene.add(ambientLight);

    this.#renderer = new THREE.WebGLRenderer({ antialias: true });
    this.#renderer.setSize(512, 512);
    // this.#renderer.setPixelRatio(window.devicePixelRatio * 0.1);

    CameraControls.install({ THREE });

    this.#controls = new CameraControls(
      this.#camera,
      this.#renderer.domElement
    );
    this.#controls.mouseButtons.left = CameraControls.ACTION.ROTATE;
    this.#controls.mouseButtons.right = CameraControls.ACTION.NONE;
    this.#controls.mouseButtons.wheel = CameraControls.ACTION.DOLLY;
    this.#controls.minDistance = 8;
    this.#controls.maxDistance = 35;
    this.#controls.minAzimuthAngle = -Math.PI;
    this.#controls.maxAzimuthAngle = Math.PI;

    // this.#controls.maxTargetRadius = 10;
    // this.#controls.enableDamping = true;
    // this.#controls.enablePan = false;
    // this.#controls.enableZoom = false;

    this.animators.set("cameraControls", (time, delta) => {
      this.#controls.update(delta);
    });

    this.#textureLoader = new THREE.TextureLoader();
    this.#gltfLoader = new GLTFLoader();

    this.mii = mii;

    const clock = new THREE.Clock();

    const animate = (time: number) => {
      const delta = clock.getDelta();

      this.#renderer.render(this.#scene, this.#camera);
      this.animators.forEach((f) => f(time, delta));
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

    this.#renderer.setClearAlpha(0);
    this.#renderer.setAnimationLoop(animate);

    this.#camera.aspect = this.#parent.offsetWidth / this.#parent.offsetHeight;
    this.#camera.updateProjectionMatrix();
    this.#renderer.setSize(this.#parent.offsetWidth, this.#parent.offsetHeight);
  }
  currentPosition!: CameraPosition;
  focusCamera(part: CameraPosition) {
    this.#controls.smoothTime = 0.2;

    // don't re-position the camera if it is already in the correct location
    if (this.currentPosition === part) return;

    this.currentPosition = part;

    if (part === CameraPosition.MiiFullBody) {
      this.#controls.moveTo(0, 0, 0, true);
      this.#controls.rotateTo(0, Math.PI / 2, true);
      this.#controls.dollyTo(25, true);
    } else if (part === CameraPosition.MiiHead) {
      this.#controls.moveTo(0, 3.5, 0, true);
      this.#controls.rotateTo(0, Math.PI / 2, true);
      this.#controls.dollyTo(15, true);
    }
  }
  resize() {
    this.#camera.aspect = this.#parent.offsetWidth / this.#parent.offsetHeight;
    this.#camera.updateProjectionMatrix();
    this.#renderer.setSize(this.#parent.offsetWidth, this.#parent.offsetHeight);
  }
  async init() {
    if (this.ready) return;
    this.ready = false;
    this.getRendererElement().style.opacity = "0";
    await this.#addBody();
    await this.updateMiiHead();
    this.ready = true;
  }
  getRendererElement() {
    return this.#renderer.domElement;
  }
  #playAnimation(mesh: THREE.Object3D, id: string, clip: THREE.AnimationClip) {
    // Create an AnimationMixer, and get the list of AnimationClip instances
    const mixer = new THREE.AnimationMixer(mesh);

    this.animators.set(id, (time, delta) => {
      mixer.update(delta);
    });

    const action = mixer.clipAction(clip);
    action.play();
  }
  async #addBody() {
    const setupMiiHeadAnim = async () => {
      const glb = await this.#gltfLoader.loadAsync("./miiHeadAnim.glb");
      this.animations.set("HeadBob", glb.animations[0]);
    };
    const setupMiiBody = async (path: string, type: "m" | "f") => {
      const glb = await this.#gltfLoader.loadAsync(path);

      console.log(glb);

      const clips = glb.animations;
      const floatClip = clips.find((c) => c.name === "Float")!;
      console.log("clip:", floatClip);

      this.#playAnimation(
        glb.scene.getObjectByName(type)!,
        path + type,
        floatClip
      );

      glb.scene.name = `${type}-body-root`;

      setTimeout(() => {
        this.#scene.add(glb.scene);
      });

      // Add materials to body and legs
      (glb.scene.getObjectByName(`body_${type}`)! as THREE.Mesh).material =
        new THREE.MeshStandardMaterial({ color: 0xffffff });
      (glb.scene.getObjectByName(`legs_${type}`)! as THREE.Mesh).material =
        new THREE.MeshStandardMaterial({ color: 0x666666 });

      // this.#traverseFFLShaderTest(
      //   glb.scene.getObjectByName(`body_${type}`)! as any,
      //   false
      // );
      // this.#traverseFFLShaderTest(
      //   glb.scene.getObjectByName(`legs_${type}`)! as any,
      //   false
      // );

      if (this.#scene.getObjectByName("m"))
        this.#scene.getObjectByName("m")!.visible = false;
      if (this.#scene.getObjectByName("f"))
        this.#scene.getObjectByName("f")!.visible = false;
    };

    const loaders = [
      setupMiiBody("./miiBodyM.glb", "m"),
      setupMiiBody("./miiBodyF.glb", "f"),
      setupMiiHeadAnim(),
    ];

    await Promise.all(loaders);

    console.log("READY");
  }
  // getPantsColor() {
  //   if (this.mii.normalMii === false) {
  //     return 0xffff66;
  //   }
  //   if (this.mii.favorite) {
  //     return 0xff6666;
  //   }
  //   return 0x666666;
  // }
  async updateBody() {
    if (!this.ready) return;

    // console.log("updateBody");

    const bodyM = this.#scene.getObjectByName("m-body-root");
    const bodyF = this.#scene.getObjectByName("f-body-root");
    if (!bodyM) return;
    if (!bodyF) return;

    // console.log("h", this.mii.height, "w", this.mii.build);

    // // Arbitrary guesses at calculations..
    // const height = (this.mii.height / 127) * 1.5 + 0.25;
    // const build = (this.mii.build / 127) * 1.5 + 0.4; // * (height * 0.5);

    const build = this.mii.build;
    const height = this.mii.height;

    // Ported from FFL-Testing
    let scaleFactors = { x: 0, y: 0, z: 0 };

    scaleFactors.y = height / 128.0;
    scaleFactors.x = scaleFactors.y * 0.3 + 0.6;
    scaleFactors.x =
      ((scaleFactors.y * 0.6 + 0.8 - scaleFactors.x) * build) / 128.0 +
      scaleFactors.x;

    scaleFactors.y = scaleFactors.y * 0.55 + 0.6;

    // the below are applied for both sets of factors
    scaleFactors.z = scaleFactors.x;
    // Ensure scaleFactors.y is clamped to a maximum of 1.0
    scaleFactors.y = Math.min(scaleFactors.y, 1.0);

    switch (this.mii.gender) {
      // m
      case 0:
        bodyM.getObjectByName("m")!.visible = true;
        bodyF.getObjectByName("f")!.visible = false;
        bodyM
          .getObjectByName("m")!
          .scale.set(scaleFactors.x, scaleFactors.y, scaleFactors.z);
        const mBody = bodyM
          .getObjectByName("m")!
          .getObjectByName("body_m")! as THREE.Mesh;
        (mBody.material as THREE.MeshStandardMaterial).color.set(
          MiiFavoriteColorLookupTable[this.mii.favoriteColor]
        );
        // const mLegs = bodyM
        //   .getObjectByName("m")!
        //   .getObjectByName("legs_m")! as THREE.Mesh;
        // (mLegs.material as THREE.MeshStandardMaterial).color.set(
        //   this.getPantsColor()
        // );
        break;
      // f
      case 1:
        bodyM.getObjectByName("m")!.visible = false;
        bodyF.getObjectByName("f")!.visible = true;
        bodyF
          .getObjectByName("f")!
          .scale.set(scaleFactors.x, scaleFactors.y, scaleFactors.z);
        const fBody = bodyF
          .getObjectByName("f")!
          .getObjectByName("body_f")! as THREE.Mesh;
        (fBody.material as THREE.MeshStandardMaterial).color.set(
          MiiFavoriteColorLookupTable[this.mii.favoriteColor]
        );
        // const fLegs = bodyF
        //   .getObjectByName("f")!
        //   .getObjectByName("legs_f")! as THREE.Mesh;
        // (fLegs.material as THREE.MeshStandardMaterial).color.set(
        //   this.getPantsColor()
        // );
        break;
    }
  }
  debugGetScene() {
    return this.#scene;
  }
  fadeIn() {
    this.getRendererElement().style.opacity = "1";
  }
  async updateMiiHead(renderPart: RenderPart = RenderPart.Head) {
    if (!this.ready) {
      console.log("first time loading head");
      // return;
    }
    let head = this.#scene.getObjectsByProperty("name", "MiiHead");

    switch (renderPart) {
      case RenderPart.Head:
        if (head.length > 0) {
          head.forEach((h) => {
            // Dispose of old head materials
            h.traverse((c) => {
              let child = c as THREE.Mesh;
              if (child.isMesh) {
                child.geometry.dispose();
                const mat = child.material as THREE.MeshBasicMaterial;
                if (mat.map) mat.map.dispose();
                mat.dispose();
              }
            });
          });
        }
        const GLB = await this.#gltfLoader.loadAsync(
          this.mii.studioUrl({
            ext: "glb",
          } as unknown as any)
        );

        GLB.scene.name = "MiiHead";
        GLB.scene.scale.set(0.12, 0.12, 0.12);

        // ffl shader is disabled for now
        // due to face texture and lighting issues
        this.#traverseFFLShaderTest(GLB.scene);
        this.#scene.remove(...head);
        this.#scene.add(GLB.scene);
        break;
      case RenderPart.Face:
        if (head.length > 0) {
          head.forEach((h) => {
            // Dispose of old head materials
            h.traverse((c) => {
              let child = c as THREE.Mesh;
              if (child.isMesh) {
                if (child.geometry.userData) {
                  const data = child.geometry.userData as {
                    cullMode: number;
                    modulateColor: number[];
                    modulateMode: number;
                    modulateType: number;
                  };
                  if (data.modulateMode) {
                    if (data.modulateType === 6) {
                      // found face!!
                      (async () => {
                        const mat = child.material as THREE.MeshBasicMaterial;

                        // throw out old texture!
                        // const oldMap = mat.map!;
                        const oldMat = mat;

                        // console.log(mat, mat.map!);

                        const tex = await this.#textureLoader.loadAsync(
                          Config.renderer.renderFaceURL +
                            "&data=" +
                            encodeURIComponent(
                              Buffer.from(this.mii.encode()).toString("base64")
                            )
                        );

                        if (tex) {
                          tex.flipY = false;
                          tex.colorSpace = "srgb";
                          //@ts-expect-error ???
                          tex.transparent = true;

                          child.material = new THREE.MeshStandardMaterial({
                            map: tex,
                            emissiveIntensity: 1,
                            transparent: true,
                            metalness: 1,
                            toneMapped: true,
                            alphaTest: 0.5,
                          });
                          // for (const key in child.material) {
                          //   if (
                          //     (oldMat as any)[key] !==
                          //     (child.material as any)[key]
                          //   ) {
                          //     console.log(
                          //       "MAT DIFF:",
                          //       key,
                          //       (oldMat as any)[key],
                          //       "vs.",
                          //       (child.material as any)[key]
                          //     );
                          //   }
                          // }
                          // for (const key in tex) {
                          //   if ((oldMap as any)[key] !== (tex as any)[key]) {
                          //     console.log(
                          //       "MAP DIFF:",
                          //       key,
                          //       (oldMap as any)[key],
                          //       "vs.",
                          //       (tex as any)[key]
                          //     );
                          //   }
                          // }

                          oldMat.dispose();
                          // oldMap.dispose();
                        }
                      })();
                    }
                  }
                }
              }
            });
          });
        }
        break;
    }

    // use head bob animation from animations source
    // const clip = this.animations.get("HeadBob")!;

    // this.#playAnimation(GLB.scene, "MiiHeadBobClip", clip);

    this.headReady = true;
    this.fadeIn();
    this.updateBody();
  }
  #traverseFFLShaderTest(model: THREE.Group<THREE.Object3DEventMap>) {
    // Traverse the model to access its meshes
    model.traverse((n) => {
      const node = n as THREE.Mesh;
      if (node.isMesh) {
        const originalMaterial = node.material as THREE.MeshBasicMaterial;

        // Access userData from geometry
        const userData = node.geometry.userData;

        // Retrieve modulateType and map to material parameters
        const modulateType = userData.modulateType;
        if (userData.modulateType === undefined)
          console.warn(
            `Mesh "${node.name}" is missing "modulateType" in userData.`
          );

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
          console.warn(
            `Mesh "${node.name}" is missing "modulateColor" in userData.`
          );
          // Default to red if missing
          modulateColor = new THREE.Vector4(...[1, 0, 0], 1);
        } else {
          modulateColor = new THREE.Vector4(...userData.modulateColor, 1);
        }

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

        // debugging code related to broken head mesh. shader will be disabled until it can be fixed
        // console.log(node.name, "is using", userData.modulateMode);
        // if (userData.modulateMode === 1) {
        //   if (originalMaterial.map!.isTexture) {
        //     console.log("head mesh has texture");
        //     //@ts-expect-error G
        //     window.headMeshMap = originalMaterial.map;
        //     // console.log(node.name, "is using", originalMaterial.map);
        //   }
        // }

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
    });
  }

  shutdown() {
    Array.from(this.animators.keys()).forEach((k) => {
      this.animators.delete(k);
    });
  }
}
