import {
  FeatureSetType,
  MiiPagedFeatureSet,
} from "../components/MiiPagedFeatureSet";
import type { TabRenderInit } from "../../constants/TabRenderType";
import EditorIcons from "../../constants/EditorIcons";

export function MoleTab(data: TabRenderInit) {
  data.container.append(
    MiiPagedFeatureSet({
      mii: data.mii,
      onChange: data.callback,
      entries: {
        eyePosition: {
          label: "Position",
          items: [
            {
              type: FeatureSetType.Switch,
              iconOff: "Disable",
              iconOn: "Enable",
              property: "moleEnabled",
            },
            {
              type: FeatureSetType.Range,
              property: "moleYPosition",
              iconStart: EditorIcons.positionMoveUp,
              iconEnd: EditorIcons.positionMoveDown,
              soundStart: "position_down",
              soundEnd: "position_up",
              min: 0,
              max: 30,
            },
            {
              type: FeatureSetType.Range,
              property: "moleXPosition",
              iconStart: EditorIcons.positionPushIn,
              iconEnd: EditorIcons.positionPushOut,
              soundStart: "move_together",
              soundEnd: "move_apart",
              min: 0,
              max: 16,
            },
            {
              type: FeatureSetType.Range,
              property: "moleScale",
              iconStart: EditorIcons.positionSizeDown,
              iconEnd: EditorIcons.positionSizeUp,
              soundStart: "scale_down",
              soundEnd: "scale_up",
              min: 0,
              max: 7,
            },
          ],
        },
      },
    })
  );
}
