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

export enum MiiGender {
  Male,
  Female,
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
  async #setupMii() {
    this.ui.mii = new Html("div").class("mii-holder").appendTo(this.ui.base);
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
        this.ui.scene.focusCamera(CameraFocusPart);
        await Tab({
          container: content,
          callback: (mii) => {
            this.mii = mii;
            this.render();
          },
          icons: this.icons,
          mii: this.mii,
        });
        this.ui.scene.resize();
      };
    };

    const tabs = TabList([
      {
        icon: EditorTabIcons.head,
        select: TabInit(HeadTab, CameraPosition.MiiHead),
      },
      {
        icon: EditorTabIcons.hair,
        select: TabInit(EmptyTab, CameraPosition.MiiHead),
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
        select: TabInit(EmptyTab, CameraPosition.MiiHead),
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
        select: TabInit(EmptyTab, CameraPosition.MiiFullBody),
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

  render() {
    this.ui.scene.mii = this.mii;
    this.ui.scene.updateMiiHead();
  }
}
