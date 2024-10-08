import Mii from "../external/mii-js/mii";
import { Buffer } from "../../node_modules/buffer/index";
import Html from "@datkat21/html";
import { TabList } from "../ui/components/TabList";
import EditorTabIcons from "../constants/EditorTabIcons";
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

  renderingMode: RenderMode;

  constructor(gender: MiiGender, init?: string) {
    let initString =
      "AwEAAAAAAAAAAAAAgP9wmQAAAAAAAAAAAABNAGkAaQAAAAAAAAAAAAAAAAAAAEBAAAAhAQJoRBgmNEYUgRIXaA0AACkAUkhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMNn";
    if (gender === MiiGender.Male) {
      initString =
        // "AwEAAAAAAAAAAAAAgP9wmQAAAAAAAAAAAABNAGkAaQAAAAAAAAAAAAAAAAAAAEBAAAAhAQJoRBgmNEYUgRIXaA0AACkAUkhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMNn";
        // "AwAAQIBhWERghMCA3W5Cj5VIdIKFVAAAamBUAHkAbABlAHIAAAAAAAAAAAAAAF5DIAB5AUJoRBggREUUgRITaA0AACkAUkhQVAB5AGwAZQByAAAAAAAAAAAAAAAAAI3d";
        "AwCSMNjV7opqF2hGnVxmK8z7ZRITiAAAlGJBAHUAcwB0AGkAbgAGJrIAuQAAAFNAAAA+ByBnRBjzQmUUbRQTZg0AACkAUkclAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIpM";
    } else if (gender === MiiGender.Female) {
      // chacha12_1101
      initString =
        "AwAFMG0rAiKJRLe1nDWwN5i26X5uuAAAY0FjAGgAYQByAGwAaQBuAGUAAAAAAEwmApBlBttoRBggNEYUgRITYg0AACkAUkhQYwBoAGEAcgBsAGkAbgBlAAAAAAAAAHLb";
    }
    if (init) initString = init;

    this.renderingMode = RenderMode.Image;

    this.mii = new Mii(Buffer.from(initString, "base64") as unknown as Buffer);

    window.mii = this.mii;

    this.#setupUi();
  }

  async #setupUi() {
    this.icons = await fetch("./dist/icons.json").then((j) => j.json());
    this.ui = {} as unknown as any;
    this.#setupBase();
    await this.#setupMii();
    this.#setupTabs();
    this.render();
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
    const renderModeToggle = new Html("button")
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
      .appendTo(this.ui.mii);
  }
  #setup2D() {
    /* renderImage */
    new Html("img").appendTo(this.ui.mii);
  }
  async #setup3D() {
    this.ui.scene = new Mii3DScene(this.mii, this.ui.mii.elm);
    await this.ui.scene.init();
    this.ui.mii.append(this.ui.scene.getRendererElement());
    window.addEventListener("resize", () => {
      this.ui.scene.resize();
    });
  }
  #setupTabs() {
    const TabInit = (Tab: TabBase, CameraFocusPart: CameraPosition) => {
      return async (content: Html) => {
        if (this.ui.scene) this.ui.scene.focusCamera(CameraFocusPart);
        await Tab({
          container: content,
          callback: (mii) => {
            this.mii = mii;
            this.render();
            this.ui.base.style({
              "--eye-color": MiiEyeColorTable[this.mii.eyeColor],
              "--icon-lip-color-top":
                MiiMouthColorLipTable[this.mii.mouthColor].top,
              "--icon-lip-color-bottom":
                MiiMouthColorLipTable[this.mii.mouthColor].bottom,
            });
          },
          icons: this.icons,
          mii: this.mii,
        });
        if (this.ui.scene) this.ui.scene.resize();
      };
    };

    const tabs = TabList([
      {
        icon: EditorTabIcons.head,
        select: TabInit(HeadTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorTabIcons.hair,
        select: TabInit(HairTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorTabIcons.eyebrows,
        select: TabInit(EmptyTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorTabIcons.eyes,
        select: TabInit(EyeTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorTabIcons.nose,
        select: TabInit(NoseTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorTabIcons.mouth,
        select: TabInit(MouthTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorTabIcons.facialHair,
        select: TabInit(EmptyTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorTabIcons.mole,
        select: TabInit(EmptyTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorTabIcons.build,
        select: TabInit(EmptyTab, CameraPosition.MiiFullBody),
      },
      {
        icon: EditorTabIcons.favoriteColor,
        select: TabInit(FavoriteColorTab, CameraPosition.MiiFullBody),
      },
      {
        icon: EditorTabIcons.details,
        select: TabInit(MiscTab, CameraPosition.MiiFullBody),
      },
    ]);
    this.ui.tabList = tabs.list;
    this.ui.tabContent = tabs.content;
    this.ui.base.appendMany(tabs.list, tabs.content);
  }

  async render() {
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
            src: `https://mii-unsecure.ariankordi.net/miis/image.png?data=${Buffer.from(
              this.mii.encode()
            ).toString(
              "base64"
            )}&shaderType=2&type=face&width=260&verifyCharInfo=0`,
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
        this.ui.scene.updateMiiHead();
        break;
    }
  }
}
