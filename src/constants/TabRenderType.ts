import type Html from "@datkat21/html";
import type Mii from "../external/mii-js/mii";
import type { IconSet } from "../class/MiiEditor";

export type TabRenderInit = {
  container: Html;
  mii: Mii;
  icons: IconSet;
  callback: (newMii: Mii) => any | Promise<any>;
};

export type TabBase = (input: TabRenderInit) => any;
