import Html from "@datkat21/html";
import type Mii from "../../external/mii-js/mii";
import {
  FeatureSetType,
  MiiPagedFeatureSet,
  type FeatureSetIconItem,
} from "../components/MiiPagedFeatureSet";
import type { IconSet } from "../../class/MiiEditor";
import { ArrayNum } from "../../util/NumberArray";
import type { TabRenderInit } from "../../constants/TabRenderType";

export function NoseTab(data: TabRenderInit) {
  data.container.append(
    MiiPagedFeatureSet({
      mii: data.mii,
      onChange: data.callback,
      entries: {
        noseType: {
          label: "Type",
          items: ArrayNum(18).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            icon: String(k),
          })),
        },
        nosePosition: {
          label: "Position",
          items: [
            {
              type: FeatureSetType.Range,
              property: "noseYPosition",
              icon: "noseYPosition",
              min: 0,
              max: 18,
            },
            {
              type: FeatureSetType.Range,
              property: "noseScale",
              icon: "noseScale",
              min: 0,
              max: 8,
            },
          ],
        },
      },
    })
  );
}
