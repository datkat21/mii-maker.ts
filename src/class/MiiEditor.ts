import Mii from "../external/mii-js/mii";
import { Buffer } from "../../node_modules/buffer/index";
import Html from "@datkat21/html";
import { TabList } from "../ui/components/TabList";
import EditorTabIcons from "../constants/EditorTabIcons";
import { CameraFocusPart, Mii3DScene } from "./3DScene";
import { EyeTab } from "../ui/tabs/Eye";

export enum MiiGender {
  Male,
  Female,
}
export type IconSet = {
  eyes: string[];
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

  constructor(gender: MiiGender) {
    let initString =
      "AwEAAAAAAAAAAAAAgP9wmQAAAAAAAAAAAABNAGkAaQAAAAAAAAAAAAAAAAAAAEBAAAAhAQJoRBgmNEYUgRIXaA0AACkAUkhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMNn";
    if (gender === MiiGender.Male) {
      initString =
        // "AwEAAAAAAAAAAAAAgP9wmQAAAAAAAAAAAABNAGkAaQAAAAAAAAAAAAAAAAAAAEBAAAAhAQJoRBgmNEYUgRIXaA0AACkAUkhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMNn";
        // "AwAAQIBhWERghMCA3W5Cj5VIdIKFVAAAamBUAHkAbABlAHIAAAAAAAAAAAAAAF5DIAB5AUJoRBggREUUgRITaA0AACkAUkhQVAB5AGwAZQByAAAAAAAAAAAAAAAAAI3d";
        "AwCSMNjV7opqF2hGnVxmK8z7ZRITiAAAlGJBAHUAcwB0AGkAbgAGJrIAuQAAAFNAAAA+ByBnRBjzQmUUbRQTZg0AACkAUkclAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIpM";
    } else if (gender === MiiGender.Female) {
      initString =
        "AwEAAAAAAAAAAAAAgD77GgAAAAAAAAAAAQBNAGkAaQAAAAAAAAAAAAAAAAAAAEBAAAAMAQRoQxggNEYUgRIXaA0AACkAUkhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAADzW";
    }
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
    const tabs = TabList([
      {
        icon: EditorTabIcons.head,
        select: (content) => {
          content.text("Unfinished");
          this.ui.scene.focusCamera(CameraFocusPart.MiiFullBody);
        },
      },
      {
        icon: EditorTabIcons.hair,
        select: (content) => {
          content.text("Unfinished");
          this.ui.scene.focusCamera(CameraFocusPart.MiiFullBody);
        },
      },
      {
        icon: EditorTabIcons.eyebrows,
        select: (content) => {
          content.text("Unfinished");
          this.ui.scene.focusCamera(CameraFocusPart.MiiFullBody);
        },
      },
      {
        icon: EditorTabIcons.eyes,
        select: (content) => {
          this.ui.scene.focusCamera(CameraFocusPart.MiiHead);
          EyeTab(content, this.mii, this.icons, (mii) => {
            this.mii = mii;
            this.render();
          });
        },
      },
      {
        icon: EditorTabIcons.nose,
        select: (content) => {
          content.text("Unfinished");
          this.ui.scene.focusCamera(CameraFocusPart.MiiFullBody);
        },
      },
      {
        icon: EditorTabIcons.mouth,
        select: (content) => {
          content.text("Unfinished");
          this.ui.scene.focusCamera(CameraFocusPart.MiiFullBody);
        },
      },
      {
        icon: EditorTabIcons.facialHair,
        select: (content) => {
          content.text("Unfinished");
          this.ui.scene.focusCamera(CameraFocusPart.MiiFullBody);
        },
      },
      {
        icon: EditorTabIcons.mole,
        select: (content) => {
          content.text("Unfinished");
          this.ui.scene.focusCamera(CameraFocusPart.MiiFullBody);
        },
      },
      {
        icon: EditorTabIcons.build,
        select: (content) => {
          content.text("Unfinished");
          this.ui.scene.focusCamera(CameraFocusPart.MiiFullBody);
        },
      },
      {
        icon: EditorTabIcons.favoriteColor,
        select: (content) => {
          content.text("Unfinished");
          this.ui.scene.focusCamera(CameraFocusPart.MiiFullBody);
        },
      },
      {
        icon: EditorTabIcons.details,
        select: (content) => {
          content.text("Unfinished");
          this.ui.scene.focusCamera(CameraFocusPart.MiiFullBody);
        },
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
