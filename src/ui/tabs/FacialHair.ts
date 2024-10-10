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

export function FacialHairTab(data: TabRenderInit) {
  data.container.append(
    MiiPagedFeatureSet({
      mii: data.mii,
      onChange: data.callback,
      entries: {
        mustacheType: {
          label: "Mustache",
          items: ArrayNum(6).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            icon: `<img src="./assets/img/mustache/${k}.png" width="84" height="84" />`, //String(k),
          })),
        },
        mustachePosition: {
          label: "Position",
          items: [
            {
              type: FeatureSetType.Range,
              property: "mustacheYPosition",
              iconStart: EditorIcons.positionMoveUp,
              iconEnd: EditorIcons.positionMoveDown,
              soundStart: "position_down",
              soundEnd: "position_up",
              min: 0,
              max: 16,
            },
            {
              type: FeatureSetType.Range,
              property: "mustacheScale",
              iconStart: EditorIcons.positionSizeDown,
              iconEnd: EditorIcons.positionSizeUp,
              soundStart: "scale_down",
              soundEnd: "scale_up",
              min: 0,
              max: 8,
            },
          ],
        },
        beardType: {
          label: "Beard",
          items: ArrayNum(6).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            icon: `<img src="./assets/img/beard/${k}.png" width="84" height="84" />`, // String(k),
          })),
        },
        facialHairColor: {
          label: "Color",
          items: ArrayNum(8).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            color: MiiHairColorTable[k], // MiiEyeColorTable[k],
          })),
        },
      },
    })
  );
}
