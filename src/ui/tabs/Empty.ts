import type { TabRenderInit } from "../../constants/TabRenderType";

export function EmptyTab(data: TabRenderInit) {
  data.container.text("Nothing to see here yet :(");
}
