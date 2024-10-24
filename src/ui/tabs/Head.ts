import {
  FeatureSetType,
  MiiPagedFeatureSet,
} from "../components/MiiPagedFeatureSet";
import EditorIcons from "../../constants/EditorIcons";
import { MiiSkinColorTable } from "../../constants/ColorTables";
import type { TabRenderInit } from "../../constants/TabRenderType";
import { ArrayNum } from "../../util/NumberArray";
import { RenderPart } from "../../class/MiiEditor";

export function HeadTab(data: TabRenderInit) {
  data.container.append(
    MiiPagedFeatureSet({
      mii: data.mii,
      onChange: data.callback,
      entries: {
        faceType: {
          label: EditorIcons.face,
          items: ArrayNum(12).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            icon: data.icons.face[k],
            part: RenderPart.Head,
          })),
        },
        makeupType: {
          label: EditorIcons.face_makeup,
          items: ArrayNum(12).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            icon: data.icons.makeup[k],
            part: RenderPart.Head,
          })),
        },
        wrinklesType: {
          label: EditorIcons.face_wrinkles,
          items: ArrayNum(12).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            icon: data.icons.wrinkles[k],
            part: RenderPart.Head,
          })),
        },
        skinColor: {
          label: "Color",
          items: ArrayNum(6).map((k) => ({
            type: FeatureSetType.Icon,
            value: k,
            color: MiiSkinColorTable[k],
            part: RenderPart.Head,
          })),
        },
      },
    })
  );
}
