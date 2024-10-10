import localforage from "localforage";
import Modal from "../components/Modal";
import { MainMenu } from "./MainMenu";

export function SaveDataManager() {
  Modal.modal(
    "Save Data",
    "Choose an option",
    "body",
    // TODO implement this
    // {
    //   text: "Import Save Data",
    //   async callback(e) {
    //     const input = document.createElement("input");
    //     input.type = "file";
    //     input.accept = "application/json";
    //     document.body.appendChild(input);
    //     input.click();
    //     requestAnimationFrame(() => {
    //       document.body.removeChild(input);
    //     });
    //     input.addEventListener("change", (e) => {
    //       console.log(input.files);
    //     });
    //     MainMenu();
    //   },
    // },
    {
      text: "Export Save Data",
      async callback(e) {
        let data: Record<string, string> = {};
        for (const key of (await localforage.keys()).filter((k) =>
          k.startsWith("mii")
        )) {
          console.log(key);
          data[key] = (await localforage.getItem(key)) as string;
        }
        console.log(data);
        const url = URL.createObjectURL(
          new Blob([JSON.stringify(data)], { type: "application/json" })
        );
        const a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.download = "mii-editor-save-data.json";
        document.body.appendChild(a);
        a.click();
        requestAnimationFrame(() => {
          a.remove();
        });
        MainMenu();
      },
    },
    {
      text: "Cancel",
      callback(e) {
        MainMenu();
      },
    }
  );
}
