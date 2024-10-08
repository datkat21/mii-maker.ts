import Html from "@datkat21/html";
import type Mii from "../../external/mii-js/mii";
import {
  FeatureSetType,
  MiiPagedFeatureSet,
  type FeatureSetIconItem,
} from "../components/MiiPagedFeatureSet";
import EditorTabIcons from "../../constants/EditorTabIcons";
import {
  MiiHairColorTable,
  MiiSkinColorTable,
} from "../../constants/ColorTables";
import type { TabRenderInit } from "../../constants/TabRenderType";
import { ArrayNum } from "../../util/NumberArray";
// import { MiiEyeTable, rearrangeArray } from "../../constants/MiiFeatureTable";

export function HairTab(data: TabRenderInit) {
  data.container.append(
    MiiPagedFeatureSet({
      mii: data.mii,
      onChange: data.callback,
      entries: {
        hairType: {
          label: "Type",
          items: ArrayNum(132).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            icon: String(k),
          })),
        },
        hairColor: {
          label: "Color",
          items: ArrayNum(8).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            color: MiiHairColorTable[k],
          })),
        },
        hairPosition: {
          label: "Position",
          items: [
            {
              type: FeatureSetType.Switch,
              iconOff: EditorTabIcons.positionHairFlip,
              iconOn: EditorTabIcons.positionHairFlipped,
              property: "flipHair",
            },
          ],
        },
      },
    })
  );
}
