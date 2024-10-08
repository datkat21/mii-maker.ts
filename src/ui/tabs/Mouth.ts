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
import EditorTabIcons from "../../constants/EditorTabIcons";
import { MiiMouthColorTable } from "../../constants/ColorTables";

export function MouthTab(data: TabRenderInit) {
  data.container.append(
    MiiPagedFeatureSet({
      mii: data.mii,
      onChange: data.callback,
      entries: {
        mouthType: {
          label: "Type",
          items: ArrayNum(36).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            icon: data.icons.mouth[k],
          })),
        },
        mouthColor: {
          label: "Color",
          items: ArrayNum(5).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            color: MiiMouthColorTable[k],
          })),
        },
        mouthPosition: {
          label: "Position",
          items: [
            {
              type: FeatureSetType.Range,
              property: "mouthYPosition",
              iconStart: EditorTabIcons.positionMoveUp,
              iconEnd: EditorTabIcons.positionMoveDown,
              min: 0,
              max: 18,
            },
            {
              type: FeatureSetType.Range,
              property: "mouthSpacing",
              iconStart: EditorTabIcons.positionPushIn,
              iconEnd: EditorTabIcons.positionPushOut,
              min: 0,
              max: 12,
            },
            {
              type: FeatureSetType.Range,
              property: "mouthRotation",
              iconStart: EditorTabIcons.positionRotateCW,
              iconEnd: EditorTabIcons.positionRotateCCW,
              min: 0,
              max: 7,
            },
            {
              type: FeatureSetType.Range,
              property: "mouthScale",
              iconStart: EditorTabIcons.positionSizeDown,
              iconEnd: EditorTabIcons.positionSizeUp,
              min: 0,
              max: 7,
            },
            {
              type: FeatureSetType.Range,
              property: "mouthVerticalStretch",
              iconStart: EditorTabIcons.positionStretchIn,
              iconEnd: EditorTabIcons.positionStretchOut,
              min: 0,
              max: 6,
            },
          ],
        },
      },
    })
  );
}
