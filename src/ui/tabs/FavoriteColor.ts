import Html from "@datkat21/html";
import type Mii from "../../external/mii-js/mii";
import {
  FeatureSetType,
  MiiPagedFeatureSet,
  type FeatureSetIconItem,
} from "../components/MiiPagedFeatureSet";
import type { IconSet } from "../../class/MiiEditor";
import { MiiEyeTable, rearrangeArray } from "../../constants/MiiFeatureTable";
import { MiiFavoriteColorLookupTable } from "../../constants/ColorTables";
import { ArrayNum } from "../../util/NumberArray";
import type { TabRenderInit } from "../../constants/TabRenderType";
import { numToHex } from "../../util/NumberToHexString";

export function FavoriteColorTab(data: TabRenderInit) {
  data.container.append(
    MiiPagedFeatureSet({
      mii: data.mii,
      onChange: data.callback,
      entries: {
        favoriteColor: {
          label: "Color",
          items: ArrayNum(12).map((k) => ({
            type: FeatureSetType.Icon,
            forceRender: false,
            value: k,
            color: numToHex(MiiFavoriteColorLookupTable[k]),
          })),
        },
      },
    })
  );
}
