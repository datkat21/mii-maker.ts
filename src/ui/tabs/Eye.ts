import Html from "@datkat21/html";
import type Mii from "../../external/mii-js/mii";
import { MiiPagedFeatureSet } from "../components/MiiPagedFeatureSet";
import type { IconSet } from "../../class/MiiEditor";
import { MiiEyeTable, rearrangeArray } from "../../constants/MiiFeatureTable";

export function EyeTab(
  content: Html,
  mii: Mii,
  icons: IconSet,
  onChange: (mii: Mii) => void
) {
  content.append(
    MiiPagedFeatureSet({
      property: "eye",
      mii,
      onChange,
      items: [
        ...rearrangeArray(
          Array.from(Array(60).keys()).map((k) => ({
            value: k,
            icon: icons.eyes[k],
          })),
          MiiEyeTable
        ),
      ],
    })
  );
}
