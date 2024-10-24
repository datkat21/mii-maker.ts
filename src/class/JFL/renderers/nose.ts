//TODO
import type Mii from "../../../external/mii-js/mii";
import { getTextures } from "../assets";
import { log } from "../util/log";

export async function renderNose(mii: Mii) {
  log("mii nose:", mii.noseType, mii.noseYPosition, mii.noseScale);

  getTextures();
}
