import {
  FeatureSetType,
  MiiPagedFeatureSet,
} from "../components/MiiPagedFeatureSet";
import { MiiHairColorTable } from "../../constants/ColorTables";
import { ArrayNum } from "../../util/NumberArray";
import type { TabRenderInit } from "../../constants/TabRenderType";
import EditorIcons from "../../constants/EditorIcons";
import { RenderPart } from "../../class/MiiEditor";

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
            icon: data.icons.mustache[k],
            part: RenderPart.Face,
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
              part: RenderPart.Face,
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
              part: RenderPart.Face,
            },
          ],
        },
        beardType: {
          label: "Goatee",
          items: ArrayNum(6).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            icon: data.icons.goatee[k],
            part: RenderPart.Head,
          })),
        },
        facialHairColor: {
          label: "Color",
          items: ArrayNum(8).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            color: MiiHairColorTable[k],
            part: RenderPart.Head,
          })),
        },
      },
    })
  );
}
