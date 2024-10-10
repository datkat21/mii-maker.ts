import Mii from "../external/mii-js/mii";
import { Buffer } from "../../node_modules/buffer/index";
import Html from "@datkat21/html";
import { TabList } from "../ui/components/TabList";
import EditorIcons from "../constants/EditorIcons";
import { CameraPosition, Mii3DScene } from "./3DScene";
import { EyeTab } from "../ui/tabs/Eye";
import { HeadTab } from "../ui/tabs/Head";
import type { TabBase, TabRenderInit } from "../constants/TabRenderType";
import { EmptyTab } from "../ui/tabs/Empty";
import { MiscTab } from "../ui/tabs/Misc";
import { NoseTab } from "../ui/tabs/Nose";
import { FavoriteColorTab } from "../ui/tabs/FavoriteColor";
import { MouthTab } from "../ui/tabs/Mouth";
import { HairTab } from "../ui/tabs/Hair";
import {
  MiiEyeColorTable,
  MiiMouthColorLipTable,
  MiiMouthColorTable,
} from "../constants/ColorTables";
import { ScaleTab } from "../ui/tabs/Scale";
import Modal from "../ui/components/Modal";
import { playSound } from "./audio/SoundManager";
import { AddButtonSounds } from "../util/AddButtonSounds";
import { FacialHairTab } from "../ui/tabs/FacialHair";
import { MoleTab } from "../ui/tabs/Mole";
import { EyebrowTab } from "../ui/tabs/Eyebrow";
import { GlassesTab } from "../ui/tabs/Glasses";

export enum MiiGender {
  Male,
  Female,
}
export enum RenderMode {
  Image,
  ThreeJs,
}
export type IconSet = {
  face: string[];
  makeup: string[];
  wrinkles: string[];
  eyebrows: string[];
  eyes: string[];
  nose: string[];
  mouth: string[];
  facialHair: string[];
  mole: string[];
  glasses: string[];
};

export class MiiEditor {
  mii: Mii;
  icons!: IconSet;

  ui!: {
    base: Html;
    mii: Html;
    scene: Mii3DScene;
    tabList: Html;
    tabContent: Html;
  };

  dirty: boolean;
  ready: boolean;

  renderingMode: RenderMode;
  onShutdown!: (mii: string, shutdownProperly?: boolean) => any | Promise<any>;
  errors: Map<string, boolean>;

  constructor(
    gender: MiiGender,
    onShutdown?: (
      mii: string,
      shutdownProperly?: boolean
    ) => any | Promise<any>,
    init?: string
  ) {
    window.editor = this;

    this.#loadSoundLoop();
    this.dirty = false;
    this.ready = false;
    this.errors = new Map();

    // default male mii
    let initString =
      "AwEAAAAAAAAAAAAAgP9wmQAAAAAAAAAAAABNAGkAaQAAAAAAAAAAAAAAAAAAAEBAAAAhAQJoRBgmNEYUgRIXaA0AACkAUkhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMNn";
    if (gender === MiiGender.Female) {
      initString =
        "AwEAAAAAAAAAAAAAgN8ZmgAAAAAAAAAAAQBNAGkAaQAAAAAAAAAAAAAAAAAAAEBAAAAMAQRoQxggNEYUgRIXaA0AACkAUkhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFik";
    }
    if (init) initString = init;
    if (onShutdown) {
      this.onShutdown = onShutdown;
    }

    this.renderingMode = RenderMode.ThreeJs;

    this.mii = new Mii(Buffer.from(initString, "base64") as unknown as Buffer);

    // Ensure that birthPlatform doesn't cause issues.
    if (this.mii.deviceOrigin === 0) this.mii.deviceOrigin = 4;
    // Enable allow copying so QR can be made.
    if (this.mii.allowCopying === false) this.mii.allowCopying = true;

    this.#setupUi();
  }

  #loadSoundLoop() {
    const check = () => {
      if (this.ready) {
        clearInterval(interval);
        return;
      }
      playSound("wait");
    };
    check();
    let interval = setInterval(check, 2000);
  }

  async #setupUi() {
    this.icons = await fetch("./dist/icons.json").then((j) => j.json());
    this.ui = {} as unknown as any;
    this.#setupBase();
    this.#updateCssVars();
    await this.#setupMii();
    this.#setupTabs();
    await this.render();
    this.ready = true;
  }
  #setupBase() {
    this.ui.base = new Html("div").class("ui-base").appendTo("body");
  }
  #renderModeText(RM: RenderMode) {
    switch (RM) {
      case RenderMode.Image:
        return "2D";
      case RenderMode.ThreeJs:
        return "3D";
    }
  }
  async #setupMii() {
    this.ui.mii = new Html("div").class("mii-holder").appendTo(this.ui.base);
    this.ui.mii.append(
      new Html("div").html(EditorIcons.loading).class("loader", "active")
    );
    let nextRenderMode = 0;
    switch (this.renderingMode) {
      case RenderMode.Image:
        this.#setup2D();
        nextRenderMode = RenderMode.ThreeJs;
        break;
      case RenderMode.ThreeJs:
        this.#setup3D();
        nextRenderMode = RenderMode.Image;
        break;
    }
    const renderModeToggle = AddButtonSounds(
      new Html("button")
        .class("render-mode-toggle")
        .text(this.#renderModeText(nextRenderMode))
        .on("click", () => {
          renderModeToggle.text(this.#renderModeText(this.renderingMode));
          switch (this.renderingMode) {
            case RenderMode.Image:
              this.renderingMode = RenderMode.ThreeJs;
              break;
            case RenderMode.ThreeJs:
              this.renderingMode = RenderMode.Image;
          }
          this.render();
        })
        .appendTo(this.ui.mii)
    );
  }
  #setup2D() {
    /* renderImage */
    new Html("img").attr({ crossorigin: "anonymous" }).appendTo(this.ui.mii);
  }
  async #setup3D() {
    this.ui.scene = new Mii3DScene(this.mii, this.ui.mii.elm);
    await this.ui.scene.init();
    this.ui.mii.append(this.ui.scene.getRendererElement());
    window.addEventListener("resize", () => {
      this.ui.scene.resize();
    });
    this.ui.scene.focusCamera(CameraPosition.MiiHead);
    this.ui.scene.getRendererElement().classList.add("ready");
    this.ui.mii.qs(".loader")!.classOff("active");
  }
  #updateCssVars() {
    this.ui.base.style({
      "--eye-color": MiiEyeColorTable[this.mii.eyeColor],
      "--icon-lip-color-top": MiiMouthColorLipTable[this.mii.mouthColor].top,
      "--icon-lip-color-bottom":
        MiiMouthColorLipTable[this.mii.mouthColor].bottom,
    });
  }
  #setupTabs() {
    const TabInit = (Tab: TabBase, CameraFocusPart: CameraPosition) => {
      return async (content: Html) => {
        if (this.ui.scene) this.ui.scene.focusCamera(CameraFocusPart);
        await Tab({
          container: content,
          callback: (mii, forceRender) => {
            this.mii = mii;
            // use of forceRender forces reload of the head in 3D mode
            this.render(forceRender);
            this.#updateCssVars();
            this.dirty = true;
          },
          icons: this.icons,
          mii: this.mii,
          editor: this,
        });
        if (this.ui.scene) this.ui.scene.resize();
      };
    };

    const tabs = TabList([
      {
        icon: EditorIcons.head,
        select: TabInit(HeadTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorIcons.hair,
        select: TabInit(HairTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorIcons.eyebrows,
        select: TabInit(EyebrowTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorIcons.eyes,
        select: TabInit(EyeTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorIcons.nose,
        select: TabInit(NoseTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorIcons.mouth,
        select: TabInit(MouthTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorIcons.facialHair,
        select: TabInit(FacialHairTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorIcons.mole,
        select: TabInit(MoleTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorIcons.glasses,
        select: TabInit(GlassesTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorIcons.scale,
        select: TabInit(ScaleTab, CameraPosition.MiiFullBody),
      },
      {
        icon: EditorIcons.favoriteColor,
        select: TabInit(FavoriteColorTab, CameraPosition.MiiFullBody),
      },
      {
        icon: EditorIcons.details,
        select: TabInit(MiscTab, CameraPosition.MiiFullBody),
      },
    ]);
    this.ui.tabList = tabs.list;
    this.ui.tabContent = tabs.content;
    this.ui.base.appendMany(tabs.list, tabs.content);
  }

  async render(forceReloadHead: boolean = true) {
    switch (this.renderingMode) {
      case RenderMode.Image:
        if (this.ui.mii.qs("img") === null) {
          this.#setup2D();
        }
        if (this.ui.mii.qs("canvas")) {
          this.ui.mii.qs("canvas")?.style({ display: "none" });
        }
        this.ui.mii
          .qs("img")
          ?.style({ display: "block" })
          .attr({
            src: `https://mii-unsecure.ariankordi.net/miis/image.png?data=${encodeURIComponent(
              Buffer.from(this.mii.encode()).toString("base64")
            )}&shaderType=1&type=face&width=260&verifyCharInfo=0`,
          });
        break;
      case RenderMode.ThreeJs:
        if (this.ui.mii.qs("canvas") === null) {
          await this.#setup3D();
        }
        if (this.ui.mii.qs("img")) {
          this.ui.mii.qs("img")?.style({ display: "none" });
        }
        this.ui.mii.qs("canvas")?.style({ display: "block" });
        this.ui.scene.mii = this.mii;
        if (forceReloadHead) {
          // reload head and body
          this.ui.scene.updateMiiHead();
        } else {
          // only reload body
          this.ui.scene.updateBody();
        }
        break;
    }
  }
  shutdown(shouldSave: boolean = true) {
    if (shouldSave) {
      if (Array.from(this.errors.values()).find((i) => i === true)) {
        let errorList = [];
        for (const [id, value] of this.errors.entries()) {
          if (value === true) errorList.push(id);
        }
        Modal.alert(
          "Error",
          "Will not save because there are errors in the following items:\n\n" +
            errorList.map((e) => `• ${e}`).join("\n")
        );
        return;
      }
    }

    this.ui.base.classOn("closing");
    setTimeout(() => {
      if (this.ui.mii.qs("canvas")) {
        this.ui.scene.shutdown();
      }
      this.ui.base.cleanup();
      if (this.onShutdown) {
        this.onShutdown(
          Buffer.from(this.mii.encode()).toString("base64"),
          shouldSave
        );
      }
    }, 500);
  }
}
