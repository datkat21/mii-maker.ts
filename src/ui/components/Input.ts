import Html from "@datkat21/html";
import type { MiiEditor } from "../../class/MiiEditor";

export function Input(
  label: string,
  value: string,
  callback: (s: string) => any,
  validate?: (s: string) => boolean,
  editor?: MiiEditor
): Html {
  let id = String(performance.now());

  function checkValidity(value: any) {
    if (editor) editor.dirty = true;
    if (validate)
      if (validate(value)) {
        input.classOff("invalid");
        callback(value);
        if (editor) editor.errors.set(label, false);
      } else {
        input.classOn("invalid");
        if (editor) editor.errors.set(label, true);
      }
  }
  let input: Html = new Html("input")
    .id(id)
    .attr({ type: "text", value: value })
    .on("input", (e) => {
      const target = e.target as HTMLInputElement;
      checkValidity(target.value);
    });
  if (validate) validate(value);
  return new Html("div")
    .class("input-group")
    .appendMany(new Html("label").attr({ for: id }).text(label), input);
}
