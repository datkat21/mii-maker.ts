import Mii from "./external/mii-js/mii";
import { Buffer as Buf } from "../node_modules/buffer/index";
import { setupUi } from "./ui/setup";
import type { MiiEditor } from "./class/MiiEditor";

declare global {
  interface Window {
    mii: Mii;
    Mii: any;
    editor: MiiEditor;
    buffer: Buf;
    localforage: LocalForage;
  }
}

//@ts-expect-error Buffer to keep in window for debugging purposes
window.buffer = Buf;

setupUi();
