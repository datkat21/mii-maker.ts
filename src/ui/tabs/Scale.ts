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
