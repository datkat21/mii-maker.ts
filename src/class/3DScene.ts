import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import type Mii from "../external/mii-js/mii";
import { MiiFavoriteColorLookupTable } from "../constants/FavoriteColorTable";
import gsap from "gsap";

export enum CameraFocusPart {
  MiiHead,
  MiiFullBody,
}

export class Mii3DScene {
  #camera: THREE.PerspectiveCamera;
  #controls: OrbitControls;
  #loader: GLTFLoader;
  #scene: THREE.Scene;
  #renderer: THREE.WebGLRenderer;
  #parent: HTMLElement;
  mii: Mii;
  ready: boolean;
  mixer!: THREE.AnimationMixer;
  animators: Map<string, (n: number, f: number) => any>;
  constructor(mii: Mii, parent: HTMLElement) {
    this.animators = new Map();
    this.#parent = parent;
    this.#scene = new THREE.Scene();
    this.#camera = new THREE.PerspectiveCamera(
      75,
      parent.offsetWidth / parent.offsetHeight,
      0.1,
      1000
    );
    this.#camera.position.set(0, 0, 25);
    this.#camera.rotation.set(0, Math.PI, 0);
    this.ready = false;

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const environmentMap = cubeTextureLoader.load([
      "./cube_map.png", // px.png
      "./cube_map.png", // nx.png
      "./cube_map.png", // py.png
      "./cube_map.png", // ny.png
      "./cube_map.png", // pz.png
      "./cube_map.png", // nz.png
    ]);
    const backgroundMap = cubeTextureLoader.load([
      "./assets/img/space_px.png", // px.png
      "./assets/img/space_nx.png", // nx.png
      "./assets/img/space_py.png", // py.png
      "./assets/img/space_ny.png", // ny.png
      "./assets/img/space_pz.png", // pz.png
      "./assets/img/space_nz.png", // nz.png
    ]);
    this.#scene.environment = environmentMap;
    this.#scene.background = backgroundMap;
    this.#scene.backgroundIntensity = 2;
    this.#scene.environmentIntensity = 1.25;

    const directionalLight = new THREE.DirectionalLight(0xebfeff, Math.PI);
    directionalLight.position.set(1, 0.1, 1);
    // directionalLight.visible = false;
    this.#scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x666666, Math.PI / 16);
    // ambientLight.visible = false;
    this.#scene.add(ambientLight);

    this.#renderer = new THREE.WebGLRenderer({ antialias: true });
    this.#renderer.setSize(512, 512);

    this.#controls = new OrbitControls(this.#camera, this.#renderer.domElement);
    // this.#controls.maxTargetRadius = 10;
    this.#controls.enableDamping = true;
    this.#controls.enablePan = false;
    this.#controls.enableZoom = false;

    this.animators.set("orbitControls", (time, delta) => {
      this.#controls.update(delta);
    });

    this.#loader = new GLTFLoader();

    this.mii = mii;

    const clock = new THREE.Clock();

    const animate = (time: number) => {
      const delta = clock.getDelta();

      this.#renderer.render(this.#scene, this.#camera);
      this.animators.forEach((f) => f(time, delta));
      // const timeChange = time % 4;

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
  focusCamera(part: CameraFocusPart) {
    this.#controls.enableRotate = false;

    if (part === CameraFocusPart.MiiFullBody) {
      gsap.to(this.#camera.position, {
        y: 0,
        z: 25,
        duration: 0.5,
        ease: "circ.out",
      });
    } else if (part === CameraFocusPart.MiiHead) {
      gsap.to(this.#camera.position, {
        y: 9,
        z: 15,
        duration: 0.5,
        ease: "sine",
      });
    }
    setTimeout(() => {
      this.#controls.enableRotate = true;
    }, 500);
    // this.animators.set("lerp", () => {});
  }
  resize() {
    this.#camera.aspect = this.#parent.offsetWidth / this.#parent.offsetHeight;
    this.#camera.updateProjectionMatrix();
    this.#renderer.setSize(this.#parent.offsetWidth, this.#parent.offsetHeight);
  }
  async init() {
    if (this.ready) return;
    this.ready = false;
    await this.#addBody();
    await this.updateMiiHead();
    this.ready = true;
  }
  getRendererElement() {
    return this.#renderer.domElement;
  }
  async #addBody() {
    const setupGlb = async (path: string, type: "m" | "f") => {
      const glb = await this.#loader.loadAsync(path);

      console.log(glb);

      // Create an AnimationMixer, and get the list of AnimationClip instances
      const mixer = new THREE.AnimationMixer(glb.scene.getObjectByName(type)!);
      const clips = glb.animations;

      this.animators.set(path, (time, delta) => {
        mixer.update(delta);
      });

      // // Play a specific animation
      const clip = THREE.AnimationClip.findByName(clips, "mIdle");
      const action = mixer.clipAction(clip);
      action.play();

      // // Play all animations
      // clips.forEach(function (clip) {
      //   mixer.clipAction(clip).play();
      // });

      glb.scene.name = `${type}-body-root`;
      this.#scene.add(glb.scene);

      // Add materials to body and legs
      (glb.scene.getObjectByName(`body_${type}`)! as THREE.Mesh).material =
        new THREE.MeshStandardMaterial({ color: 0xffffff });
      (glb.scene.getObjectByName(`legs_${type}`)! as THREE.Mesh).material =
        new THREE.MeshStandardMaterial({ color: 0x666666 });
    };

    await setupGlb("./miiBodyM.glb", "m");
    await setupGlb("./miiBodyF.glb", "f");
  }
  async #updateBody() {
    if (!this.ready) return;

    const bodyM = this.#scene.getObjectByName("m-body-root");
    const bodyF = this.#scene.getObjectByName("f-body-root");
    if (!bodyM) return;
    if (!bodyF) return;

    switch (this.mii.gender) {
      // m
      case 0:
        bodyM.getObjectByName("m")!.visible = true;
        bodyF.getObjectByName("f")!.visible = false;
        const mBody = bodyM
          .getObjectByName("m")!
          .getObjectByName("body_m")! as THREE.Mesh;
        (mBody.material as THREE.MeshStandardMaterial).color.set(
          MiiFavoriteColorLookupTable[this.mii.favoriteColor]
        );
        break;
      // f
      case 1:
        bodyM.getObjectByName("m")!.visible = false;
        bodyF.getObjectByName("f")!.visible = true;
        const fBody = bodyF
          .getObjectByName("f")!
          .getObjectByName("body_f")! as THREE.Mesh;
        (fBody.material as THREE.MeshStandardMaterial).color.set(
          MiiFavoriteColorLookupTable[this.mii.favoriteColor]
        );
        break;
    }
  }
  debugGetScene() {
    return this.#scene;
  }
  async updateMiiHead() {
    if (!this.ready) return;
    let head = this.#scene.getObjectByName("MiiHead");

    const GLB = await this.#loader.loadAsync(
      this.mii.studioUrl({
        ext: "glb",
      } as unknown as any)
    );

    if (head !== undefined) {
      console.log("attempting to remove head", head);
      this.#scene.remove(head);
    }

    GLB.scene.name = "MiiHead";
    GLB.scene.scale.set(0.12, 0.12, 0.12);
    this.#scene.add(GLB.scene);

    // GLB.scene.children.forEach((c) => {
    //   // (c as any).material.metalness = 0;
    //   // (c as any).material.roughness = 0.5;
    //   console.log(c);
    // });
    console.log(GLB);

    this.#updateBody();
  }
}
