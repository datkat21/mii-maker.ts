import Html from "@datkat21/html";

export interface Tab {
  icon: string;
  select: (content: Html) => any | Promise<any>;
}

export function TabList(tabs: Tab[]) {
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
        tabContent.clear();
        await tab.select(tabContent);
      })
      .appendTo(tabList);
  }

  return { list: tabList, content: tabContent };
}
