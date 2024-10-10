import { setupAssets } from "./class/JFL/assets";
import { renderFace } from "./class/JFL/renderers/face";
import Mii from "./external/mii-js/mii";
import { Buffer } from "../node_modules/buffer/index";

await setupAssets();
renderFace(
  new Mii(
    Buffer.from(
      "AwEAAAAAAAAAAAAAgP9wmQAAAAAAAAAAAABNAGkAaQAAAAAAAAAAAAAAAAAAAEBAAAAhAQJoRBgmNEYUgRIXaA0AACkAUkhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMNn",
      "base64"
    )
  )
);
