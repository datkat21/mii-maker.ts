import {
  FeatureSetType,
  MiiPagedFeatureSet,
} from "../components/MiiPagedFeatureSet";
import EditorIcons from "../../constants/EditorIcons";
import { MiiHairColorTable } from "../../constants/ColorTables";
import type { TabRenderInit } from "../../constants/TabRenderType";
import { ArrayNum } from "../../util/NumberArray";
import { RenderPart } from "../../class/MiiEditor";
import { MiiHairTable, rearrangeArray } from "../../constants/MiiFeatureTable";

export function HairTab(data: TabRenderInit) {
  data.container.append(
    MiiPagedFeatureSet({
      mii: data.mii,
      onChange: data.callback,
      entries: {
        hairType: {
          label: "Type",
          items: rearrangeArray(
            ArrayNum(132).map((k) => ({
              type: FeatureSetType.Icon,
              value: k,
              icon: data.icons.hair[k], // `<img src="./assets/img/hair/${k}.png" width="84" height="84" />`,
              part: RenderPart.Head,
            })),
            MiiHairTable
          ),
        },
        hairColor: {
          label: "Color",
          items: ArrayNum(8).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            color: MiiHairColorTable[k],
            part: RenderPart.Head,
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
              part: RenderPart.Head,
            },
          ],
        },
      },
    })
  );
}
