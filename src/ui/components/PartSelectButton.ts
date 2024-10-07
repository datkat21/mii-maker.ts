import Html from "@datkat21/html";

export function PartSelectButton(icon: string, callback: () => any): Html {
  let btn = new Html("button").classOn("mii-part").html(icon);
  return btn;
}
