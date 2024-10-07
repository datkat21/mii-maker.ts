import { MiiEditor, MiiGender } from "../class/MiiEditor";
import { PartSelectButton } from "./components/PartSelectButton";

export function setupUi() {
  window.editor = new MiiEditor(Math.round(Math.random())); // MiiGender.Male);
}
