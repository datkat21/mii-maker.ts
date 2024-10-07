import Html from "@datkat21/html";
import gsap from "gsap";

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

  for (const tab of tabs) {
    let tabElm = new Html("div")
      .classOn("tab")
      .html(tab.icon)
      .on("click", async () => {
        tabList.qsa(".tab")!.forEach((tab) => tab?.classOff("active"));
        tabElm.classOn("active");
        // requestAnimationFrame(async () => {
        //   let tBCR = tabContent.elm.offsetHeight;
        tabContent.clear();
        await tab.select(tabContent);
        //   requestAnimationFrame(() => {
        //     let nBCR = tabContent.elm.offsetHeight;
        //     console.log(tBCR, nBCR);
        //     gsap.fromTo(tabContent.elm, { height: tBCR }, { height: nBCR });
        //   });
        // });
      })
      .appendTo(tabList);
    switch (type) {
      case TabListType.Square:
        tabElm.classOn("tab-square");
        break;
      case TabListType.NotSquare:
        tabElm.classOn("tab-rectangle");
        break;
    }
  }

  (tabList.elm.children[0]! as HTMLElement).click();

  return { list: tabList, content: tabContent };
}
