import {
  FeatureSetType,
  MiiPagedFeatureSet,
} from "../components/MiiPagedFeatureSet";
import { MiiGlassesColorTable } from "../../constants/ColorTables";
import { ArrayNum } from "../../util/NumberArray";
import type { TabRenderInit } from "../../constants/TabRenderType";
import EditorIcons from "../../constants/EditorIcons";
import { RenderPart } from "../../class/MiiEditor";

export function GlassesTab(data: TabRenderInit) {
  data.container.append(
    MiiPagedFeatureSet({
      mii: data.mii,
      onChange: data.callback,
      entries: {
        glassesType: {
          label: "Type",
          items: ArrayNum(8).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            icon: data.icons.glasses[k],
            part: RenderPart.Head,
          })),
        },
        glassesColor: {
          label: "Color",
          items: ArrayNum(6).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            color: MiiGlassesColorTable[k],
            part: RenderPart.Head,
          })),
        },
        glassesPosition: {
          label: "Position",
          items: [
            {
              type: FeatureSetType.Range,
              property: "glassesYPosition",
              iconStart: EditorIcons.positionMoveUp,
              iconEnd: EditorIcons.positionMoveDown,
              soundStart: "position_down",
              soundEnd: "position_up",
              min: 3,
              max: 18,
              part: RenderPart.Head,
            },
            {
              type: FeatureSetType.Range,
              property: "glassesScale",
              iconStart: EditorIcons.positionSizeDown,
              iconEnd: EditorIcons.positionSizeUp,
              soundStart: "scale_down",
              soundEnd: "scale_up",
              min: 0,
              max: 8,
              part: RenderPart.Head,
            },
          ],
        },
      },
    })
  );
}
