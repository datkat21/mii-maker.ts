import {
  FeatureSetType,
  MiiPagedFeatureSet,
} from "../components/MiiPagedFeatureSet";
import { MiiEyeColorTable } from "../../constants/ColorTables";
import { ArrayNum } from "../../util/NumberArray";
import type { TabRenderInit } from "../../constants/TabRenderType";
import EditorIcons from "../../constants/EditorIcons";
import { RenderPart } from "../../class/MiiEditor";

export function EyeTab(data: TabRenderInit) {
  data.container.append(
    MiiPagedFeatureSet({
      mii: data.mii,
      onChange: data.callback,
      entries: {
        eyeType: {
          label: "Type",
          // rearrangeArray(
          items: ArrayNum(60).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            icon: data.icons.eyes[k],
            part: RenderPart.Face,
          })),
          // MiiEyeTable
          // ),
        },
        eyeColor: {
          label: "Color",
          items: ArrayNum(6).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            color: MiiEyeColorTable[k],
            part: RenderPart.Face,
          })),
        },
        eyePosition: {
          label: "Position",
          items: [
            {
              type: FeatureSetType.Range,
              property: "eyeYPosition",
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
              property: "eyeSpacing",
              iconStart: EditorIcons.positionPushIn,
              iconEnd: EditorIcons.positionPushOut,
              soundStart: "move_together",
              soundEnd: "move_apart",
              min: 0,
              max: 12,
              part: RenderPart.Face,
            },
            {
              type: FeatureSetType.Range,
              property: "eyeRotation",
              iconStart: EditorIcons.positionRotateCW,
              iconEnd: EditorIcons.positionRotateCCW,
              soundStart: "rotate_cw",
              soundEnd: "rotate_ccw",
              min: 0,
              max: 7,
              part: RenderPart.Face,
            },
            {
              type: FeatureSetType.Range,
              property: "eyeScale",
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
              property: "eyeVerticalStretch",
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
