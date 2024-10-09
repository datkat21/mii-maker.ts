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
import EditorIcons from "../../constants/EditorIcons";

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
            icon: data.icons.nose[k],
            // icon: String(k),
          })),
        },
        nosePosition: {
          label: "Position",
          items: [
            {
              type: FeatureSetType.Range,
              property: "noseYPosition",
              iconStart: EditorIcons.positionMoveUp,
              iconEnd: EditorIcons.positionMoveDown,
              min: 0,
              max: 18,
            },
            {
              type: FeatureSetType.Range,
              property: "noseScale",
              iconStart: EditorIcons.positionSizeDown,
              iconEnd: EditorIcons.positionSizeUp,
              min: 0,
              max: 8,
            },
          ],
        },
      },
    })
  );
}
