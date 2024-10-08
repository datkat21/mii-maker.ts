import Html from "@datkat21/html";
import Mii from "../../external/mii-js/mii";
import { TabList, TabListType, type Tab } from "./TabList";
import md5 from "md5";

export enum FeatureSetType {
  Icon,
  Range,
  Switch,
}
export interface FeatureSetIconItem {
  type: FeatureSetType.Icon;
  icon?: string;
  color?: string;
  value: number;
}
export interface FeatureSetRangeItem {
  type: FeatureSetType.Range;
  iconStart: string;
  iconEnd: string;
  min: number;
  max: number;
  property: string;
}
export interface FeatureSetSwitchItem {
  type: FeatureSetType.Switch;
  iconOff: string;
  iconOn: string;
  property: string;
}

export type FeatureSetItem =
  | FeatureSetIconItem
  | FeatureSetRangeItem
  | FeatureSetSwitchItem;
export interface FeatureSetEntry {
  label: string;
  items: FeatureSetItem[];
}

export interface FeatureSet {
  mii: Mii;
  onChange: (mii: Mii) => void;
  entries: Record<string, FeatureSetEntry>;
  // pages: FeatureSetPage[];
}

export function MiiPagedFeatureSet(set: FeatureSet) {
  let tmpMii = new Mii(set.mii.encode());
  let setContainer = new Html("div").class("feature-set-container");

  const tabListInit: Tab[] = [];

  for (const key in set.entries) {
    const entry = set.entries[key];

    console.log("mii value:", key, (tmpMii as Record<string, any>)[key]);

    tabListInit.push({
      icon: entry.label,
      select(content) {
        let setList = new Html("div")
          .class("feature-set-group")
          .appendTo(content);

        if ("items" in entry) {
          for (const item of entry.items) {
            switch (item.type) {
              case FeatureSetType.Icon:
                let featureItem = new Html("div")
                  .class("feature-item")

                  .on("click", () => {
                    (tmpMii as Record<string, any>)[key] = item.value;
                    set.onChange(tmpMii);
                    setList
                      .qsa(".feature-item")!
                      .forEach((i) => i!.classOff("active"));
                    featureItem.classOn("active");
                  })
                  .appendTo(setList);
                if (item.icon) {
                  featureItem.html(item.icon);
                }
                if (item.color) {
                  featureItem
                    .classOn("is-color")
                    .style({ "--color": item.color });
                }
                if ((tmpMii as Record<string, any>)[key] === item.value) {
                  featureItem.classOn("active");
                }
                break;
              case FeatureSetType.Range:
                let featureRangeItem = new Html("div")
                  .class("feature-slider")

                  .appendTo(setList);

                const id = md5(String(Math.random() * 21412855));

                if (item.iconStart) {
                  let frontIcon = new Html("span")
                    .html(item.iconStart)
                    .on("click", () => {
                      featureSlider.val(Number(featureSlider.getValue()) - 1);
                      (tmpMii as Record<string, any>)[item.property] = Number(
                        featureSlider.getValue()
                      );
                      set.onChange(tmpMii);
                    });
                  featureRangeItem.append(frontIcon);
                }

                let featureSlider = new Html("input")
                  .attr({
                    type: "range",
                    min: item.min,
                    max: item.max,
                  })
                  .id(id)
                  .appendTo(featureRangeItem);

                if (item.iconEnd) {
                  let backIcon = new Html("span")
                    .html(item.iconEnd)
                    .on("click", () => {
                      featureSlider.val(Number(featureSlider.getValue()) + 1);
                      (tmpMii as Record<string, any>)[item.property] = Number(
                        featureSlider.getValue()
                      );
                      set.onChange(tmpMii);
                    });
                  featureRangeItem.append(backIcon);
                }

                featureSlider.val(
                  (tmpMii as Record<string, any>)[item.property]
                );

                featureSlider.on("change", () => {
                  (tmpMii as Record<string, any>)[item.property] = Number(
                    featureSlider.getValue()
                  );
                  set.onChange(tmpMii);
                });

                break;
            }
          }
        }
      },
    });
  }

  let tabs = TabList(tabListInit, TabListType.NotSquare);
  tabs.list.appendTo(setContainer);
  tabs.content.appendTo(setContainer);

  return setContainer;

  // for (const page of set.pages) {
  //   console.log("page", page);
  //   let pageElm = new Html("div").class("feature-page");
  //   for (const row of page.rows) {
  //     console.log("row", row);
  //     let rowElm = new Html("div").class("feature-row");
  //   }
  // }
}
