import Html from "@datkat21/html";
import Mii from "../../external/mii-js/mii";

export interface FeatureSetItem {
  icon: string;
  value: number;
}

export interface FeatureSetPage {
  rows: FeatureSetItem[][];
}

export interface FeatureSet {
  property: string;
  mii: Mii;
  onChange: (mii: Mii) => void;
  items: FeatureSetItem[];
  // pages: FeatureSetPage[];
}

export function MiiPagedFeatureSet(set: FeatureSet) {
  let setList = new Html("div").class("feature-set-group");

  let tmpMii = new Mii(set.mii.encode());

  for (const item of set.items) {
    new Html("div")
      .class("feature-item")
      .html(item.icon)
      .on("click", () => {
        tmpMii.eyeType = item.value;
        set.onChange(tmpMii);
      })
      .appendTo(setList);
  }

  return setList;

  // for (const page of set.pages) {
  //   console.log("page", page);
  //   let pageElm = new Html("div").class("feature-page");
  //   for (const row of page.rows) {
  //     console.log("row", row);
  //     let rowElm = new Html("div").class("feature-row");
  //   }
  // }
}
