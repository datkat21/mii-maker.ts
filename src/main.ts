import Mii from "./external/mii-js/mii";
import { Buffer as Buf } from "../node_modules/buffer/index";
import { setupUi } from "./ui/setup";
import type { MiiEditor } from "./class/MiiEditor";

setupUi();

declare global {
  interface Window {
    mii: Mii;
    editor: MiiEditor;
    buffer: Buf;
  }
}

//@ts-expect-error Buffer to keep in window for debugging purposes
window.buffer = Buf;
