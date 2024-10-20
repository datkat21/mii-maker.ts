import Modal from "../components/Modal";
import { Library } from "./Library";
import { SaveDataManager } from "./SaveDataManager";
import { Settings } from "./Settings";

export function MainMenu() {
  Modal.modal(
    "Mii Maker Web",
    "What would you like to do?",
    "body",
    {
      text: "Mii Library",
      callback() {
        Library();
      },
    },
    {
      text: "Save Data",
      async callback() {
        SaveDataManager();
      },
    }
  );
}
