import Html from "@datkat21/html";
import type Mii from "../../external/mii-js/mii";
import {
  FeatureSetType,
  MiiPagedFeatureSet,
  type FeatureSetIconItem,
} from "../components/MiiPagedFeatureSet";
import type { IconSet } from "../../class/MiiEditor";
import { MiiEyeTable, rearrangeArray } from "../../constants/MiiFeatureTable";
import {
  MiiEyeColorTable,
  MiiHairColorTable,
} from "../../constants/ColorTables";
import { ArrayNum } from "../../util/NumberArray";
import type { TabRenderInit } from "../../constants/TabRenderType";
import EditorIcons from "../../constants/EditorIcons";

export function EyebrowTab(data: TabRenderInit) {
  data.container.append(
    MiiPagedFeatureSet({
      mii: data.mii,
      onChange: data.callback,
      entries: {
        eyebrowType: {
          label: "Type",
          // rearrangeArray(
          items: ArrayNum(25).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            icon: `<img src="./assets/img/eyebrow/${k}.png" width="84" height="84" />`, // String(k), //data.icons.eyes[k],
          })),
          // MiiEyeTable
          // ),
        },
        eyebrowColor: {
          label: "Color",
          items: ArrayNum(8).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            color: MiiHairColorTable[k], // MiiEyeColorTable[k],
          })),
        },
        eyePosition: {
          label: "Position",
          items: [
            {
              type: FeatureSetType.Range,
              property: "eyebrowYPosition",
              iconStart: EditorIcons.positionMoveUp,
              iconEnd: EditorIcons.positionMoveDown,
              soundStart: "position_down",
              soundEnd: "position_up",
              min: 3,
              max: 18,
            },
            {
              type: FeatureSetType.Range,
              property: "eyebrowSpacing",
              iconStart: EditorIcons.positionPushIn,
              iconEnd: EditorIcons.positionPushOut,
              soundStart: "move_together",
              soundEnd: "move_apart",
              min: 0,
              max: 12,
            },
            {
              type: FeatureSetType.Range,
              property: "eyebrowRotation",
              iconStart: EditorIcons.positionRotateCW,
              iconEnd: EditorIcons.positionRotateCCW,
              soundStart: "rotate_cw",
              soundEnd: "rotate_ccw",
              min: 0,
              max: 11,
            },
            {
              type: FeatureSetType.Range,
              property: "eyebrowScale",
              iconStart: EditorIcons.positionSizeDown,
              iconEnd: EditorIcons.positionSizeUp,
              soundStart: "scale_down",
              soundEnd: "scale_up",
              min: 0,
              max: 8,
            },
            {
              type: FeatureSetType.Range,
              property: "eyebrowVerticalStretch",
              iconStart: EditorIcons.positionStretchIn,
              iconEnd: EditorIcons.positionStretchOut,
              soundStart: "vert_stretch_down",
              soundEnd: "vert_stretch_up",
              min: 0,
              max: 6,
            },
          ],
        },
      },
    })
  );
}
