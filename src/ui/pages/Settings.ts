import Mii from "../../external/mii-js/mii";
import { AddButtonSounds } from "../../util/AddButtonSounds";
import { Button } from "../components/Button";
import {
  FeatureSetType,
  MiiPagedFeatureSet,
} from "../components/MiiPagedFeatureSet";
import Modal from "../components/Modal";
import { MainMenu } from "./MainMenu";
import { Buffer as Buf } from "../../../node_modules/buffer/index";
import { RenderPart } from "../../class/MiiEditor";

// settings is unfinished, will not be accessible for now
export function Settings() {
  const modal = Modal.modal("Settings", "", "body", {
    text: "Cancel",
    callback(e) {
      MainMenu();
    },
  });

  modal
    .qs(".modal-body")!
    .style({ padding: "0" })
    .classOn("ui-base", "not-fixed")
    .clear()
    .append(
      MiiPagedFeatureSet({
        entries: {
          1: {
            label: "Use experimental FFL shader",
            items: [
              {
                type: FeatureSetType.Switch,
                iconOff: "No",
                iconOn: "Yes",
                property: "useFFLShader",
                part: RenderPart.Head,
              },
            ],
          },
          2: {
            label: "Theme",
            items: [
              {
                type: FeatureSetType.Switch,
                iconOff: "Light",
                iconOn: "Dark",
                property: "darkTheme",
                part: RenderPart.Head,
              },
            ],
          },
        },
        onChange(mii, forceRender) {
          console.log("changed:", mii);
        },
      })
    );
}
