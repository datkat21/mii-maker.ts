import Html from "@datkat21/html";
import gsap from "gsap";
import { AddButtonSounds } from "../../util/AddButtonSounds";

export interface Tab {
  icon: string;
  select: (content: Html) => any | Promise<any>;
}

export enum TabListType {
  Square,
  NotSquare,
}
export function TabList(tabs: Tab[], type: TabListType = TabListType.Square) {
  // const tabContainer = new Html("div").class("tab-container");
  const tabList = new Html("div").class("tab-list");
  const tabContent = new Html("div").class("tab-content");

  function selectTab(tabElm: Html, tabSelect: (tabContent: Html) => any) {
    tabList.qsa(".tab")!.forEach((tab) => tab?.classOff("active"));
    tabElm.classOn("active");
    // requestAnimationFrame(async () => {
    // let tBCR = tabContent.elm.offsetHeight;
    tabContent.clear();
    tabSelect(tabContent);
  }

  for (const tab of tabs) {
    let tabElm = AddButtonSounds(
      new Html("div")
        .classOn("tab")
        .html(tab.icon)
        .on("click", async () => {
          selectTab(tabElm, tab.select);
        })
        .appendTo(tabList)
    );
    switch (type) {
      case TabListType.Square:
        tabElm.classOn("tab-square");
        break;
      case TabListType.NotSquare:
        tabElm.classOn("tab-rectangle");
        break;
    }
  }

  selectTab(
    Html.from(tabList.elm.children[0]! as HTMLElement)!,
    tabs[0].select
  );
  // (tabList.elm.children[0]! as HTMLElement).click();

  return { list: tabList, content: tabContent };
}
