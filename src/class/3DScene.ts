import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import CameraControls from "camera-controls";
import Mii from "../external/mii-js/mii";
import { MiiFavoriteColorLookupTable } from "../constants/ColorTables";
import {
  cLightAmbient,
  cLightDiffuse,
  cLightDir,
  cLightSpecular,
  cMaterialName,
  cMaterialParam,
  cPantsColorBlue,
  cPantsColorGold,
  cPantsColorGray,
  cPantsColorRed,
  cRimColor,
  cRimPower,
  MiiFavoriteFFLColorLookupTable,
} from "./3d/shader/fflShaderConst";
import { fflFragmentShader, fflVertexShader } from "./3d/shader/FFLShader";
import { RenderPart } from "./MiiEditor";
import { Config } from "../config";
import { Buffer } from "../../node_modules/buffer";
import { getSoundManager } from "./audio/SoundManager";

export enum CameraPosition {
  MiiHead,
  MiiFullBody,
}
export enum SetupType {
  Normal,
  Screenshot,
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
  setupType: SetupType;
  #initCallback?: (renderer: THREE.WebGLRenderer) => any;
  constructor(
    mii: Mii,
    parent: HTMLElement,
    setupType: SetupType = SetupType.Normal,
    initCallback?: (renderer: THREE.WebGLRenderer) => any
  ) {
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
    // this.#camera.rotation.set(0, Math.PI, 0);
    this.ready = false;
    this.headReady = false;
    if (initCallback) this.#initCallback = initCallback;

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

    if (setupType === SetupType.Screenshot) {
      this.#renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
      });
    } else {
      this.#renderer = new THREE.WebGLRenderer({ antialias: true });
    }
    this.setupType = setupType;

    this.#renderer.setSize(512, 512);
    // this.#renderer.setPixelRatio(window.devicePixelRatio * 0.1);

    CameraControls.install({ THREE });

    this.#controls = new CameraControls(
      this.#camera,
      this.#renderer.domElement
    );
    if (setupType === SetupType.Normal) {
      this.#controls.mouseButtons.left = CameraControls.ACTION.ROTATE;
      this.#controls.mouseButtons.right = CameraControls.ACTION.NONE;
      this.#controls.mouseButtons.wheel = CameraControls.ACTION.DOLLY;
      this.#controls.minDistance = 8;
      this.#controls.maxDistance = 35;
      this.#controls.minAzimuthAngle = -Math.PI;
      this.#controls.maxAzimuthAngle = Math.PI;
    }

    if (setupType === SetupType.Screenshot) {
      this.#controls.moveTo(0, 1.5, 0);
      this.#controls.dollyTo(40);
      this.#camera.fov = 30;
    }

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
    };

    this.#renderer.setClearAlpha(0);
    this.#renderer.setAnimationLoop(animate);

    this.#camera.aspect = this.#parent.offsetWidth / this.#parent.offsetHeight;
    this.#camera.updateProjectionMatrix();
    this.#renderer.setSize(this.#parent.offsetWidth, this.#parent.offsetHeight);
  }
  currentPosition!: CameraPosition;
  focusCamera(part: CameraPosition, force: boolean = false) {
    this.#controls.smoothTime = 0.2;

    // don't re-position the camera if it is already in the correct location
    if (this.currentPosition === part && force === false) return;

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
  playEndingAnimation() {
    this.focusCamera(CameraPosition.MiiFullBody, true);
    let heads = this.#scene.getObjectsByProperty("name", "MiiHead");
    for (const head of heads) {
      this.#traverseAddFaceMaterial(
        head as THREE.Mesh,
        `&data=${encodeURIComponent(
          Buffer.from(this.mii.encode()).toString("base64")
        )}&expression=1`
      );
    }
    const type = this.mii.gender == 0 ? "m" : "f";
    this.animators.delete(`animation-${type}`);
    this.#playAnimation(
      this.#scene.getObjectByName(type)!,
      `animation-${type}`,
      this.animations.get(`${type}-body-wave`)!
    );
    getSoundManager().playSound("finish");
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
    if (this.setupType === SetupType.Screenshot) {
      this.#initCallback && this.#initCallback(this.#renderer);
    }
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
      const idleClip = clips.find((c) => c.name === "Stand")!;
      const waveClip = clips.find((c) => c.name === "Wave")!;
      this.animations.set(`${type}-body-stand`, idleClip);
      this.animations.set(`${type}-body-wave`, waveClip);
      console.log("clip:", idleClip);

      this.#playAnimation(
        glb.scene.getObjectByName(type)!,
        `animation-${type}`,
        idleClip
      );

      glb.scene.name = `${type}-body-root`;

      requestAnimationFrame(() => {
        this.#scene.add(glb.scene);
      });

      // Add materials to body and legs
      const gBodyMesh = glb.scene.getObjectByName(
        `body_${type}`
      )! as THREE.Mesh;
      gBodyMesh.geometry.userData = {
        cullMode: 1,
        modulateColor: MiiFavoriteFFLColorLookupTable[this.mii.favoriteColor],
        modulateMode: 0,
        modulateType: cMaterialName.FFL_MODULATE_TYPE_SHAPE_BODY,
      };
      // adds shader material
      this.#traverseMesh(gBodyMesh);

      const gLegsMesh = glb.scene.getObjectByName(
        `legs_${type}`
      )! as THREE.Mesh;
      gLegsMesh.geometry.userData = {
        cullMode: 1,
        modulateColor: cPantsColorGray,
        modulateMode: 0,
        modulateType: cMaterialName.FFL_MODULATE_TYPE_SHAPE_PANTS,
        modulateSkinning: 1,
      };
      // adds shader material
      this.#traverseMesh(gLegsMesh);

      if (this.#scene.getObjectByName("m"))
        this.#scene.getObjectByName("m")!.visible = false;
      if (this.#scene.getObjectByName("f"))
        this.#scene.getObjectByName("f")!.visible = false;

      // this fixes body rotation when pose is broken due to shader bug!!!
      // change the position back when it works
      glb.scene.rotation.set(0, 0, 0);
    };

    const loaders = [
      setupMiiBody("./miiBodyM.glb", "m"),
      setupMiiBody("./miiBodyF.glb", "f"),
      setupMiiHeadAnim(),
    ];

    await Promise.all(loaders);

    console.log("READY");
  }
  getPantsColor() {
    if (this.mii.normalMii === false) {
      return cPantsColorGold;
    }
    if (this.mii.favorite) {
      return cPantsColorRed;
    }
    return cPantsColorGray;
  }
  async updateBody() {
    if (!this.ready) return;

    const bodyM = this.#scene.getObjectByName("m-body-root");
    const bodyF = this.#scene.getObjectByName("f-body-root");
    if (!bodyM) return;
    if (!bodyF) return;

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

    const traverseBones = (object: THREE.Object3D) => {
      object.scale.set(scaleFactors.x, scaleFactors.y, scaleFactors.z);
      this.#scene
        .getObjectByName("MiiHead")!
        .scale.set(
          0.12 / scaleFactors.x,
          0.12 / scaleFactors.y,
          0.12 / scaleFactors.z
        );
      // object.traverse((o: THREE.Object3D) => {
      //   if ((o as THREE.Bone).isBone) {
      //     // attempt at porting some bone scaling code.. disabled for now
      //     const bone = o as THREE.Bone;
      //     if (bone.name === "head") return;
      //     let boneScale = { x: 1, y: 1, z: 1 };
      //     switch (bone.name) {
      //       default:
      //         break;
      //       // case "chest":
      //       // case "chest_2":
      //       // case "hip":
      //       // case "foot_l1":
      //       // case "foot_l2":
      //       // case "foot_r1":
      //       // case "foot_r2":
      //       //   boneScale.x = scaleFactors.x;
      //       //   boneScale.y = scaleFactors.y;
      //       //   boneScale.z = scaleFactors.z;
      //       //   break;
      //       // case "arm_l1":
      //       // case "arm_l2":
      //       // case "elbow_l":
      //       // case "arm_r1":
      //       // case "arm_r2":
      //       // case "elbow_r":
      //       //   boneScale.x = scaleFactors.y;
      //       //   boneScale.y = scaleFactors.x;
      //       //   boneScale.z = scaleFactors.z;
      //       //   break;
      //       // case "wrist_l":
      //       // case "shoulder_l":
      //       // case "wrist_r":
      //       // case "shoulder_r":
      //       // case "ankle_l":
      //       // case "knee_l":
      //       // case "ankle_r":
      //       // case "knee_r":
      //       //   boneScale.x = scaleFactors.x;
      //       //   boneScale.y = scaleFactors.x;
      //       //   boneScale.z = scaleFactors.x;
      //       //   break;
      //       // case "head":
      //       //   boneScale.x = scaleFactors.x;
      //       //   boneScale.y = Math.min(scaleFactors.y, 1.0);
      //       //   boneScale.z = scaleFactors.z;
      //       //   break;
      //     }
      //     bone.scale.set(boneScale.x, boneScale.y, boneScale.z);
      //   }
      // });
    };

    switch (this.mii.gender) {
      // m
      case 0:
        bodyM.getObjectByName("m")!.visible = true;
        bodyF.getObjectByName("f")!.visible = false;

        // Attach head to head bone of body
        (bodyM.getObjectByName("head") as THREE.Bone).add(
          this.#scene.getObjectByName("MiiHead")!
        );

        // Scale each bone except for body
        traverseBones(bodyM);

        // ONLY KEEP BELOW IF USING SHADER MATERIAL, it will error if material is changed
        const mBody = bodyM
          .getObjectByName("m")!
          .getObjectByName("body_m")! as THREE.Mesh;
        (mBody.material as THREE.ShaderMaterial).uniforms.u_const1.value =
          new THREE.Vector4(
            ...MiiFavoriteFFLColorLookupTable[this.mii.favoriteColor]
          );
        const mLegs = bodyM
          .getObjectByName("m")!
          .getObjectByName("legs_m")! as THREE.Mesh;
        (mLegs.material as THREE.ShaderMaterial).uniforms.u_const1.value =
          new THREE.Vector4(...this.getPantsColor());
        break;
      // f
      case 1:
        bodyM.getObjectByName("m")!.visible = false;
        bodyF.getObjectByName("f")!.visible = true;

        // Attach head to head bone of body
        (bodyF.getObjectByName("head") as THREE.Bone).add(
          this.#scene.getObjectByName("MiiHead")!
        );

        // Scale each bone except for body
        traverseBones(bodyF);

        // KEEP BELOW IF USING SHADER MATERIAL, comment this section and uncomment the one below it to enable the one without shader material
        const fBody = bodyF
          .getObjectByName("f")!
          .getObjectByName("body_f")! as THREE.Mesh;
        (fBody.material as THREE.ShaderMaterial).uniforms.u_const1.value =
          new THREE.Vector4(
            ...MiiFavoriteFFLColorLookupTable[this.mii.favoriteColor]
          );
        const fLegs = bodyF
          .getObjectByName("f")!
          .getObjectByName("legs_f")! as THREE.Mesh;
        (fLegs.material as THREE.ShaderMaterial).uniforms.u_const1.value =
          new THREE.Vector4(...this.getPantsColor());

        // const fBody = bodyF
        //   .getObjectByName("f")!
        //   .getObjectByName("body_f")! as THREE.Mesh;
        // (fBody.material as THREE.MeshBasicMaterial).color.set(
        //   MiiFavoriteFFLColorLookupTable[this.mii.favoriteColor][0],
        //   MiiFavoriteFFLColorLookupTable[this.mii.favoriteColor][1],
        //   MiiFavoriteFFLColorLookupTable[this.mii.favoriteColor][2]
        // );
        // const fLegs = bodyF
        //   .getObjectByName("f")!
        //   .getObjectByName("legs_f")! as THREE.Mesh;
        // (fLegs.material as THREE.MeshBasicMaterial).color.set(
        //   this.getPantsColor()[0],
        //   this.getPantsColor()[1],
        //   this.getPantsColor()[2]
        // );
        break;
    }
  }
  debugGetScene() {
    return this.#scene;
  }
  fadeIn() {
    if (this.setupType === SetupType.Normal) {
      this.getRendererElement().style.opacity = "0";
      setTimeout(() => {
        this.getRendererElement().style.opacity = "1";
      }, 500);
    } else {
      // Screenshot mode only
      this.getRendererElement().style.opacity = "1";
    }
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
        try {
          const GLB = await this.#gltfLoader.loadAsync(
            this.mii.studioUrl({
              ext: "glb",
            } as unknown as any)
          );

          GLB.scene.name = "MiiHead";
          GLB.scene.rotation.set(-Math.PI / 2, 0, 0);
          // GLB.scene.rotation.set(Math.PI / 2, 0, 0);
          GLB.scene.scale.set(0.12, 0.12, 0.12);

          // enable shader on head
          this.#scene.remove(...head);
          // hack to force remove head anyways
          this.#scene.getObjectsByProperty("name", "MiiHead").forEach((obj) => {
            obj.parent!.remove(obj);
          });
          this.#traverseFFLShaderTest(GLB.scene);
          this.#scene.add(GLB.scene);
        } catch (e) {
          console.error(e);
        }
        break;
      case RenderPart.Face:
        if (head.length > 0) {
          head.forEach((h) => {
            this.#traverseAddFaceMaterial(
              h as THREE.Mesh,
              "&data=" +
                encodeURIComponent(
                  Buffer.from(this.mii.encode()).toString("base64")
                )
            );
          });
        }
        break;
    }

    if (this.headReady === false) this.fadeIn();
    this.headReady = true;
    await this.updateBody();
  }
  #traverseFFLShaderTest(model: THREE.Group<THREE.Object3DEventMap>) {
    // Traverse the model to access its meshes
    model.traverse((n) => {
      const node = n as THREE.Mesh;
      if (node.isMesh) {
        this.#traverseMesh(node);
      }
    });
  }
  #traverseMesh(node: THREE.Mesh) {
    const originalMaterial = node.material as THREE.MeshBasicMaterial;

    // Access userData from geometry
    const userData = node.geometry.userData;

    // Retrieve modulateType and map to material parameters
    const modulateType = userData.modulateType;
    if (userData.modulateType === undefined)
      console.warn(
        `Mesh "${node.name}" is missing "modulateType" in userData.`
      );

    let modulateSkinning = userData.modulateSkinning;
    if (userData.modulateSkinning === undefined) modulateSkinning = 0;

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

    let shaderMaterial: THREE.ShaderMaterial;
    if (
      modulateType === cMaterialName.FFL_MODULATE_TYPE_SHAPE_BODY ||
      modulateType === cMaterialName.FFL_MODULATE_TYPE_SHAPE_PANTS
    )
      shaderMaterial = new THREE.ShaderMaterial({
        vertexShader: fflVertexShader,
        fragmentShader: fflFragmentShader,
        uniforms: {
          u_const1: { value: modulateColor },
          u_light_ambient: { value: cLightAmbient },
          u_light_diffuse: { value: cLightDiffuse },
          u_light_specular: { value: cLightSpecular },
          u_light_dir: { value: cLightDir },
          u_light_enable: { value: true },
          u_material_ambient: { value: materialParam.ambient },
          u_material_diffuse: { value: materialParam.diffuse },
          u_material_specular: { value: materialParam.specular },
          u_material_specular_mode: { value: materialParam.specularMode },
          u_material_specular_power: { value: materialParam.specularPower },
          u_mode: { value: modulateMode },
          u_rim_color: { value: new THREE.Vector4(0.4, 0.4, 0.4, 1.0) },
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
    // Create a custom ShaderMaterial
    else
      shaderMaterial = new THREE.ShaderMaterial({
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
    if (modulateSkinning === 1) {
      // (node.material as THREE.ShaderMaterial).skinning
    }

    console.log(node.material);
    // Assign the custom material to the mesh
    node.material = shaderMaterial;
  }
  #traverseAddFaceMaterial(node: THREE.Mesh, urlParams: string) {
    // Dispose of old head materials
    node.traverse((c) => {
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
                const oldMat = mat;

                const tex = await this.#textureLoader.loadAsync(
                  Config.renderer.renderFaceURL + urlParams
                );

                if (tex) {
                  // Initialize the texture on the GPU to prevent lag frames
                  tex.flipY = false;
                  this.#renderer.initTexture(tex);

                  child.material = new THREE.MeshStandardMaterial({
                    map: tex,
                    emissiveIntensity: 1,
                    transparent: true,
                    metalness: 1,
                    toneMapped: true,
                    alphaTest: 0.5,
                  });

                  // Now... Replace it with FFL shader material
                  this.#traverseMesh(child);

                  oldMat.dispose();
                }
              })();
            }
          }
        }
      }
    });
  }

  // screenshot mode helper utils
  getCamera() {
    return this.#camera;
  }

  shutdown() {
    Array.from(this.animators.keys()).forEach((k) => {
      this.animators.delete(k);
    });
  }
}
