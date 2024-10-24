import {
  FeatureSetType,
  MiiPagedFeatureSet,
} from "../components/MiiPagedFeatureSet";
import { ArrayNum } from "../../util/NumberArray";
import type { TabRenderInit } from "../../constants/TabRenderType";
import EditorIcons from "../../constants/EditorIcons";
import { MiiMouthColorTable } from "../../constants/ColorTables";
import { RenderPart } from "../../class/MiiEditor";

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
            part: RenderPart.Face,
          })),
        },
        mouthColor: {
          label: "Color",
          items: ArrayNum(5).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            color: MiiMouthColorTable[k],
            part: RenderPart.Face,
          })),
        },
        mouthPosition: {
          label: "Position",
          items: [
            {
              type: FeatureSetType.Range,
              property: "mouthYPosition",
              iconStart: EditorIcons.positionMoveUp,
              iconEnd: EditorIcons.positionMoveDown,
              soundStart: "position_down",
              soundEnd: "position_up",
              min: 0,
              max: 18,
              part: RenderPart.Face,
            },
            {
              type: FeatureSetType.Range,
              property: "mouthScale",
              iconStart: EditorIcons.positionSizeDown,
              iconEnd: EditorIcons.positionSizeUp,
              soundStart: "scale_down",
              soundEnd: "scale_up",
              min: 0,
              max: 7,
              part: RenderPart.Face,
            },
            {
              type: FeatureSetType.Range,
              property: "mouthHorizontalStretch",
              iconStart: EditorIcons.positionStretchIn,
              iconEnd: EditorIcons.positionStretchOut,
              soundStart: "vert_stretch_down",
              soundEnd: "vert_stretch_up",
              min: 0,
              max: 6,
              part: RenderPart.Face,
            },
          ],
        },
      },
    })
  );
}
