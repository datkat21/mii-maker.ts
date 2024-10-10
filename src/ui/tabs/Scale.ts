import {
  FeatureSetType,
  MiiPagedFeatureSet,
} from "../components/MiiPagedFeatureSet";
import type { TabRenderInit } from "../../constants/TabRenderType";
import EditorIcons from "../../constants/EditorIcons";

export function ScaleTab(data: TabRenderInit) {
  data.container.append(
    MiiPagedFeatureSet({
      mii: data.mii,
      onChange: data.callback,
      entries: {
        bodySize: {
          label: "Scale",
          items: [
            {
              type: FeatureSetType.Slider,
              property: "height",
              iconStart: EditorIcons.scaleShort,
              iconEnd: EditorIcons.scaleTall,
              min: 0,
              max: 127,
              forceRender: false,
            },
            {
              type: FeatureSetType.Slider,
              property: "build",
              iconStart: EditorIcons.scaleThin,
              iconEnd: EditorIcons.scaleFat,
              min: 0,
              max: 127,
              forceRender: false,
            },
          ],
        },
      },
    })
  );
}
