import Html from "@datkat21/html";

export function Button(text: string, callback: (e: Event) => any): Html {
  return new Html("button").text(text).on("click", callback);
}
