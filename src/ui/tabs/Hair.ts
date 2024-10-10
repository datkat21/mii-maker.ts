import {
  FeatureSetType,
  MiiPagedFeatureSet,
} from "../components/MiiPagedFeatureSet";
import EditorIcons from "../../constants/EditorIcons";
import { MiiHairColorTable } from "../../constants/ColorTables";
import type { TabRenderInit } from "../../constants/TabRenderType";
import { ArrayNum } from "../../util/NumberArray";

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
            icon: `<img src="./assets/img/hair/${k}.png" width="84" height="84" />`,
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
              iconOff: EditorIcons.positionHairFlip,
              iconOn: EditorIcons.positionHairFlipped,
              property: "flipHair",
            },
          ],
        },
      },
    })
  );
}
