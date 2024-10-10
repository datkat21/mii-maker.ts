import Html from "@datkat21/html";
import Mii from "../../external/mii-js/mii";
import { TabList, TabListType, type Tab } from "./TabList";
import md5 from "md5";
import { playSound } from "../../class/audio/SoundManager";

export enum FeatureSetType {
  Icon,
  Range,
  Slider,
  Switch,
}
export interface FeatureSetIconItem {
  type: FeatureSetType.Icon;
  sound?: string;
  icon?: string;
  color?: string;
  value: number;
  forceRender?: boolean;
}
export interface FeatureSetRangeItem {
  type: FeatureSetType.Range;
  iconStart: string;
  iconEnd: string;
  soundStart?: string;
  soundEnd?: string;
  min: number;
  max: number;
  property: string;
  forceRender?: boolean;
}
export interface FeatureSetSliderItem {
  type: FeatureSetType.Slider;
  iconStart: string;
  iconEnd: string;
  soundStart?: string;
  soundEnd?: string;
  min: number;
  max: number;
  property: string;
  forceRender?: boolean;
}
export interface FeatureSetSwitchItem {
  type: FeatureSetType.Switch;
  iconOff: string;
  iconOn: string;
  soundOff?: string;
  soundOn?: string;
  property: string;
  forceRender?: boolean;
  isNumber?: boolean;
}

export type FeatureSetItem =
  | FeatureSetIconItem
  | FeatureSetRangeItem
  | FeatureSetSwitchItem
  | FeatureSetSliderItem;
export interface FeatureSetEntry {
  label: string;
  items: FeatureSetItem[];
}

export interface FeatureSet {
  mii?: any;
  onChange: (mii: Mii, forceRender: boolean) => void;
  entries: Record<string, FeatureSetEntry>;
  // pages: FeatureSetPage[];
}

export const playHoverSound = () => playSound("hover");

export function MiiPagedFeatureSet(set: FeatureSet) {
  let tmpMii: Mii | any;
  if (set.mii) tmpMii = new Mii(set.mii.encode());
  else tmpMii = {};

  let setContainer = new Html("div").class("feature-set-container");

  const tabListInit: Tab[] = [];

  for (const key in set.entries) {
    const entry = set.entries[key];

    tabListInit.push({
      icon: entry.label,
      select(content) {
        let setList = new Html("div")
          .class("feature-set-group")
          .appendTo(content);

        if ("items" in entry) {
          for (const item of entry.items) {
            const id = md5(String(Math.random() * 21412855));

            let forceRender = true;

            if (item.forceRender !== undefined) {
              if (item.forceRender === false) {
                forceRender = false;
              }
            }

            const update = () => set.onChange(tmpMii, forceRender);

            switch (item.type) {
              case FeatureSetType.Icon:
                let featureItem = new Html("div")
                  .class("feature-item")
                  .on("pointerenter", playHoverSound)
                  .on("click", () => {
                    (tmpMii as Record<string, any>)[key] = item.value;
                    update();
                    if (item.sound) playSound(item.sound);
                    else if (item.color) playSound("select_color");
                    else if (item.icon) playSound("select_part");
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
              case FeatureSetType.Slider:
                let featureSliderItem = new Html("div")
                  .class("feature-slider")
                  .on("pointerenter", playHoverSound)
                  .appendTo(setList);

                if (item.iconStart) {
                  let frontIcon = new Html("span")
                    .html(item.iconStart)
                    .on("click", () => {
                      featureSlider.val(Number(featureSlider.getValue()) - 1);
                      (tmpMii as Record<string, any>)[item.property] = Number(
                        featureSlider.getValue()
                      );
                      if (item.soundStart) playSound(item.soundStart);
                      else playSound("select");
                      update();
                    });
                  featureSliderItem.append(frontIcon);
                }

                let featureSlider = new Html("input")
                  .attr({
                    type: "range",
                    min: item.min,
                    max: item.max,
                  })
                  .id(id)
                  .appendTo(featureSliderItem);

                if (item.iconEnd) {
                  let backIcon = new Html("span")
                    .html(item.iconEnd)
                    .on("click", () => {
                      featureSlider.val(Number(featureSlider.getValue()) + 1);
                      (tmpMii as Record<string, any>)[item.property] = Number(
                        featureSlider.getValue()
                      );
                      if (item.soundEnd) playSound(item.soundEnd);
                      else playSound("select");
                      update();
                    });
                  featureSliderItem.append(backIcon);
                }

                featureSlider.val(
                  (tmpMii as Record<string, any>)[item.property]
                );

                featureSlider.on("input", () => {
                  (tmpMii as Record<string, any>)[item.property] = Number(
                    featureSlider.getValue()
                  );
                  update();
                });
                break;
              case FeatureSetType.Range:
                let featureRangeItem = new Html("div")
                  .class("feature-slider")

                  .appendTo(setList);

                if (item.iconStart) {
                  let frontIcon = new Html("span")
                    .html(item.iconStart)
                    .on("click", () => {
                      featureRange.val(Number(featureRange.getValue()) - 1);
                      (tmpMii as Record<string, any>)[item.property] = Number(
                        featureRange.getValue()
                      );
                      if (item.soundStart) playSound(item.soundStart);
                      else playSound("select");
                      update();
                    });
                  featureRangeItem.append(frontIcon);
                }

                let featureRange = new Html("input")
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
                      featureRange.val(Number(featureRange.getValue()) + 1);
                      (tmpMii as Record<string, any>)[item.property] = Number(
                        featureRange.getValue()
                      );
                      if (item.soundEnd) playSound(item.soundEnd);
                      else playSound("select");
                      update();
                    });
                  featureRangeItem.append(backIcon);
                }

                featureRange.val(
                  (tmpMii as Record<string, any>)[item.property]
                );

                featureRange.on("change", () => {
                  (tmpMii as Record<string, any>)[item.property] = Number(
                    featureRange.getValue()
                  );
                  update();
                });

                break;
              case FeatureSetType.Switch:
                let featureSwitchItem = new Html("div")
                  .class("feature-switch-group")
                  .appendTo(setList);

                let featureSwitch = new Html("div")
                  .class("feature-switch")
                  .id(id)
                  .appendTo(featureSwitchItem);

                let buttonLeft = new Html("button")
                  .class("feature-switch-left")
                  .html(item.iconOff)
                  .appendTo(featureSwitch);
                let buttonRight = new Html("button")
                  .class("feature-switch-right")
                  .html(item.iconOn)
                  .appendTo(featureSwitch);

                const switchToggle = (value: boolean) => {
                  let valueToSet: boolean | number = value;
                  if (item.isNumber) {
                    valueToSet = Number(valueToSet);
                  }
                  (tmpMii as Record<string, any>)[item.property] = valueToSet;

                  if (value === false) {
                    if (item.soundOff) playSound(item.soundOff);
                    else playSound("select");
                  }
                  if (value === true) {
                    if (item.soundOn) playSound(item.soundOn);
                    else playSound("select");
                  }
                  update();
                };

                buttonLeft.on("click", () => {
                  switchToggle(false);
                  buttonLeft.classOn("active");
                  buttonRight.classOff("active");
                });
                buttonRight.on("click", () => {
                  switchToggle(true);
                  buttonLeft.classOff("active");
                  buttonRight.classOn("active");
                });
                buttonLeft.on("pointerenter", playHoverSound);
                buttonRight.on("pointerenter", playHoverSound);

                if ((tmpMii as Record<string, any>)[item.property] == true) {
                  buttonLeft.classOff("active");
                  buttonRight.classOn("active");
                } else {
                  buttonLeft.classOn("active");
                  buttonRight.classOff("active");
                }
                break;
            }
          }
        }
      },
    });
  }

  if (Object.keys(set.entries).length === 1) {
    tabListInit[0].select(setContainer);
  } else {
    let tabs = TabList(tabListInit, TabListType.NotSquare);
    tabs.list.appendTo(setContainer);
    tabs.content.appendTo(setContainer);
  }

  return setContainer;
}
