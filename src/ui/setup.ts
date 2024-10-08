import { MiiEditor, MiiGender } from "../class/MiiEditor";
import { PartSelectButton } from "./components/PartSelectButton";

export async function setupUi() {
  let random = await fetch(
    "https://mii-unsecure.ariankordi.net/mii_data_random"
  ).then((j) => j.json());

  console.log(random);

  window.editor = new MiiEditor(
    Math.round(Math.random()),
    random.data
    // "AwEADAAAAAAAAAAAiLTJC8K2/4sAAAAAAABDAGEAaQBkAGUAbgAAAAAAAAAAAD46gwBA0IdoQxYJNEUQgRITaA0AACkAUmVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY+"
  );
}
