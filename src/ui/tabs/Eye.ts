import Html from "@datkat21/html";
import type Mii from "../../external/mii-js/mii";
import {
  FeatureSetType,
  MiiPagedFeatureSet,
  type FeatureSetIconItem,
} from "../components/MiiPagedFeatureSet";
import type { IconSet } from "../../class/MiiEditor";
import { MiiEyeTable, rearrangeArray } from "../../constants/MiiFeatureTable";
import { MiiEyeColorTable } from "../../constants/ColorTables";
import { ArrayNum } from "../../util/NumberArray";
import type { TabRenderInit } from "../../constants/TabRenderType";

export function EyeTab(data: TabRenderInit) {
  data.container.append(
    MiiPagedFeatureSet({
      mii: data.mii,
      onChange: data.callback,
      entries: {
        eyeType: {
          label: "Type",
          items: rearrangeArray(
            ArrayNum(60).map((k) => ({
              type: FeatureSetType.Icon,
              value: k,
              icon: data.icons.eyes[k],
            })),
            MiiEyeTable
          ),
        },
        eyeColor: {
          label: "Color",
          items: ArrayNum(6).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            color: MiiEyeColorTable[k],
          })),
        },
        eyePosition: {
          label: "Position",
          items: [
            {
              type: FeatureSetType.Range,
              property: "eyeYPosition",
              icon: "eyeYPosition",
              min: 0,
              max: 18,
            },
            {
              type: FeatureSetType.Range,
              property: "eyeSpacing",
              icon: "eyeSpacing",
              min: 0,
              max: 12,
            },
            {
              type: FeatureSetType.Range,
              property: "eyeRotation",
              icon: "eyeRotation",
              min: 0,
              max: 7,
            },
            {
              type: FeatureSetType.Range,
              property: "eyeScale",
              icon: "eyeScale",
              min: 0,
              max: 7,
            },
            {
              type: FeatureSetType.Range,
              property: "eyeVerticalStretch",
              icon: "eyeVerticalStretch",
              min: 0,
              max: 6,
            },
          ],
        },
      },
    })
  );
}
