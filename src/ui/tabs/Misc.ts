import Html from "@datkat21/html";
import type { TabRenderInit } from "../../constants/TabRenderType";

export function MiscTab(data: TabRenderInit) {
  data.container.appendMany(new Html("button").text("Copy to Clipboard"));
}
