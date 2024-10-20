import Html from "@datkat21/html";
import type { TabRenderInit } from "../../constants/TabRenderType";
import { Buffer as Buf } from "../../../node_modules/buffer/index";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Mii from "../../external/mii-js/mii";
import Modal from "../components/Modal";
import { AddButtonSounds } from "../../util/AddButtonSounds";
import {
  FeatureSetType,
  MiiPagedFeatureSet,
} from "../components/MiiPagedFeatureSet";
import EditorIcons from "../../constants/EditorIcons";
import { getMii, RenderPart } from "../../class/MiiEditor";

export function MiscTab(data: TabRenderInit) {
  let tmpMii = new Mii(data.mii.encode());
  const setProp = (prop: string, val: any) => {
    (tmpMii as any)[prop] = val;
    data.callback(tmpMii, false, RenderPart.Head);
    return true;
  };
  data.container.append(
    new Html("div")
      .style({
        padding: "1rem",
        display: "flex",
        "flex-direction": "column",
        gap: "1rem",
      })
      .appendMany(
        AddButtonSounds(
          Button("Save & Exit", async () => {
            if (data.editor.dirty === true)
              Modal.modal(
                "Save Mii",
                "Would you like to save?",
                "body",
                {
                  text: "Save & Exit",
                  callback() {
                    // If the Mii is special and we try to save, there's an error that we need to disable sharing
                    if (getMii().normalMii === false)
                      getMii().disableSharing = true;
                    data.editor.shutdown();
                  },
                },
                {
                  text: "Exit without Saving",
                  callback() {
                    data.editor.shutdown(false);
                  },
                },
                {
                  text: "Cancel",
                  callback() {},
                }
              );
            else
              Modal.modal(
                "Quitting Editor",
                "No changes were made. Are you sure you want to exit?",
                "body",
                {
                  text: "Save & Exit",
                  callback() {
                    data.editor.shutdown();
                  },
                },
                {
                  text: "Exit without Saving",
                  callback() {
                    data.editor.shutdown(false);
                  },
                },
                {
                  text: "Cancel",
                  callback() {},
                }
              );
          })
        ),
        Input(
          "Name",
          data.mii.miiName,
          // set
          (name) => setProp("miiName", name),
          // validate
          (name) =>
            Buf.from(name, "utf16le").length <= 0x14 &&
            Buf.from(name, "utf16le").length !== 0,
          data.editor
        ),
        Input(
          "Creator",
          data.mii.creatorName,
          // set
          (creator) => setProp("creatorName", creator),
          // validate
          (creator) => Buf.from(creator, "utf16le").length <= 0x14,
          data.editor
        ),
        new Html("div")
          .class("input-group")
          .style({
            height: "max-content",
            margin: "0 -16px 0 -16px",
            width: "calc(100% + 32px)",
          })
          .appendMany(
            MiiPagedFeatureSet({
              mii: data.mii,
              onChange: data.callback,
              entries: {
                gender: {
                  label: "Gender",
                  items: [
                    {
                      type: FeatureSetType.Switch,
                      iconOff: EditorIcons.genderMale,
                      iconOn: EditorIcons.genderFemale,
                      property: "gender",
                      isNumber: true,
                      forceRender: false,
                      part: RenderPart.Face,
                    },
                  ],
                },
                favorite: {
                  label: "Favorite",
                  items: [
                    {
                      type: FeatureSetType.Switch,
                      iconOff: "No",
                      iconOn: "Yes",
                      property: "favorite",
                      isNumber: false,
                      forceRender: false,
                      part: RenderPart.Face,
                    },
                  ],
                },
                isSpecial: {
                  label: "Type",
                  items: [
                    {
                      type: FeatureSetType.Switch,
                      iconOff: "Special",
                      iconOn: "Normal",
                      property: "normalMii",
                      isNumber: false,
                      forceRender: false,
                      part: RenderPart.Face,
                    },
                  ],
                },
              },
            }).style({ width: "100%" })
          )
      )
  );
}
