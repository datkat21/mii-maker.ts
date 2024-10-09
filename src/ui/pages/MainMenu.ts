import { MiiEditor } from "../../class/MiiEditor";
import Modal from "../components/Modal";
import { Library } from "./Library";

export function MainMenu() {
  Modal.modal(
    "Mii Maker Web",
    "What would you like to do?",
    "body",
    {
      text: "My Library",
      callback() {
        Library();
      },
    },
    {
      text: "Editor",
      callback() {
        window.editor = new MiiEditor(
          Math.round(Math.random()),
          () => MainMenu()
          // "AwAAQGqmu+VABHDQ01Vu/OicOfsIwAAAN15qJtcw6jDzMLswuTBqJgAAAAAAAD4AAACAAQRoQxggNEYUgRITaA0AACkAUkhQfzBqMH8wAAAAAAAAAAAAAAAAAAAAAE1Z"
          // random.data
          // "AwEADAAAAAAAAAAAiLTJC8K2/4sAAAAAAABDAGEAaQBkAGUAbgAAAAAAAAAAAD46gwBA0IdoQxYJNEUQgRITaA0AACkAUmVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY+"
        );
      },
    }
  );
}
