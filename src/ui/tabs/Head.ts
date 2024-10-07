import Html from "@datkat21/html";
import type Mii from "../../external/mii-js/mii";
import {
  FeatureSetType,
  MiiPagedFeatureSet,
  type FeatureSetIconItem,
} from "../components/MiiPagedFeatureSet";
import EditorTabIcons from "../../constants/EditorTabIcons";
import { MiiSkinColorTable } from "../../constants/ColorTables";
import type { TabRenderInit } from "../../constants/TabRenderType";
import { ArrayNum } from "../../util/NumberArray";
// import { MiiEyeTable, rearrangeArray } from "../../constants/MiiFeatureTable";

export function HeadTab(data: TabRenderInit) {
  data.container.append(
    MiiPagedFeatureSet({
      mii: data.mii,
      onChange: data.callback,
      entries: {
        faceType: {
          label: EditorTabIcons.face,
          items: ArrayNum(12).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            icon: data.icons.face[k],
          })),
        },
        makeupType: {
          label: EditorTabIcons.face_makeup,
          items: ArrayNum(12).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            icon: data.icons.makeup[k],
          })),
        },
        wrinklesType: {
          label: EditorTabIcons.face_wrinkles,
          items: ArrayNum(12).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            icon: data.icons.wrinkles[k],
          })),
        },
        skinColor: {
          label: "Color",
          items: ArrayNum(6).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            color: MiiSkinColorTable[k],
          })),
        },
      },
    })
  );
}
