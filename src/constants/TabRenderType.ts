import type Html from "@datkat21/html";
import type Mii from "../external/mii-js/mii";
import type { IconSet, MiiEditor } from "../class/MiiEditor";

export type TabRenderInit = {
  container: Html;
  mii: Mii;
  icons: IconSet;
  callback: (newMii: Mii, forceRender: boolean) => any | Promise<any>;
  editor: MiiEditor;
};

export type TabBase = (input: TabRenderInit) => any;
