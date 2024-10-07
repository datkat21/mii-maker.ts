import Html from "@datkat21/html";
import type { TabRenderInit } from "../../constants/TabRenderType";

export function EmptyTab(data: TabRenderInit) {
  data.container.text("Nohing to see here yet :(");
}
