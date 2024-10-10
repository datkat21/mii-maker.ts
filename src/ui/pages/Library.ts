import Html from "@datkat21/html";
import localforage from "localforage";
import { MiiEditor, MiiGender } from "../../class/MiiEditor";
import { MainMenu } from "./MainMenu";
import Modal from "../components/Modal";
import Mii from "../../external/mii-js/mii";
import { Buffer } from "../../../node_modules/buffer/index";
import Loader from "../components/Loader";
import { playSound } from "../../class/audio/SoundManager";
import { AddButtonSounds } from "../../util/AddButtonSounds";
import { encryptAndEncodeVer3StoreDataToQRCodeFormat } from "../../util/EncodeQRCode";
import { QRCodeCanvas } from "../../util/miiQrImage";
export const savedMiiCount = async () =>
  (await localforage.keys()).filter((k) => k.startsWith("mii-")).length;

export const miiIconUrl = (data: string) =>
  `https://mii-unsecure.ariankordi.net/miis/image.png?data=${encodeURIComponent(
    data
  )}&shaderType=2&type=face&width=180&verifyCharInfo=0`;

export async function Library() {
  function shutdown(): Promise<void> {
    return new Promise((resolve) => {
      container.class("fadeOut");
      setTimeout(() => {
        container.cleanup();
        resolve();
      }, 500);
    });
  }

  const container = new Html("div").class("mii-library").appendTo("body");

  const sidebar = new Html("div").class("library-sidebar").appendTo(container);

  sidebar.append(new Html("h1").text("Mii Maker"));

  const libraryList = new Html("div").class("library-list").appendTo(container);

  const miis = await Promise.all(
    (
      await localforage.keys()
    )
      .filter((k) => k.startsWith("mii-"))
      .map(async (k) => ({
        id: k,
        mii: (await localforage.getItem(k)) as string,
      }))
  );

  if (miis.length === 0) {
    libraryList.append(
      new Html("div")
        .style({ position: "absolute", top: "2rem", left: "2rem" })
        .text("You have no Miis yet. Create one to get started!")
    );
  }
  for (const mii of miis) {
    let miiContainer = new Html("div")
      .class("library-list-mii")
      .on("click", miiEdit(mii, shutdown));

    AddButtonSounds(miiContainer);

    const miiData = new Mii(Buffer.from(mii.mii, "base64"));

    try {
      miiData.validate();

      console.log(miiData.miiName + "'s birthPlatform:", miiData.deviceOrigin);

      let miiImage = new Html("img").attr({
        src: miiIconUrl(mii.mii),
      });
      let miiName = new Html("span").text(miiData.miiName);

      miiContainer.appendMany(miiImage, miiName).appendTo(libraryList);
    } catch (e: unknown) {
      console.log("Oops", e);
    }
  }

  AddButtonSounds(
    new Html("button")
      .text("Main Menu")
      .on("click", async () => {
        await shutdown();
        MainMenu();
      })
      .appendTo(sidebar)
  );
  AddButtonSounds(
    new Html("button")
      .text("Create New")
      .on("click", async () => {
        await shutdown();
        miiCreateDialog();
      })
      .appendTo(sidebar)
  );
}

type MiiLocalforage = {
  id: string;
  mii: string;
};

const miiCreateDialog = () => {
  Modal.modal(
    "Create New",
    "How would you like to create the Mii?",
    "body",
    {
      text: "From Scratch",
      callback: miiCreateFromScratch,
    },
    {
      text: "Enter PNID",
      callback: miiCreatePNID,
    },
    {
      text: "Random",
      callback: miiCreateRandom,
    },
    {
      text: "Cancel",
      callback: () => Library(),
    }
  );
};
const miiCreateFromScratch = () => {
  function cb(gender: MiiGender) {
    return () => {
      new MiiEditor(gender, async (m, shouldSave) => {
        if (shouldSave === true)
          await localforage.setItem(
            `mii-${await savedMiiCount()}-${Date.now()}`,
            m
          );
        Library();
      });
    };
  }

  Modal.modal(
    "Create New",
    "Select the Mii's gender",
    "body",
    {
      text: "Male",
      callback: cb(MiiGender.Male),
    },
    {
      text: "Female",
      callback: cb(MiiGender.Female),
    },
    {
      text: "Cancel",
      callback: () => miiCreateDialog(),
    }
  );
};
const miiCreatePNID = async () => {
  const input = await Modal.input(
    "Create New",
    "Enter PNID of user..",
    "Username",
    "body",
    false
  );
  if (input === false) {
    return miiCreateDialog();
  }

  Loader.show();

  let pnid = await fetch(
    `https://mii-unsecure.ariankordi.net/mii_data/${encodeURIComponent(
      input
    )}?api_id=1`
  );

  Loader.hide();
  if (!pnid.ok) {
    await Modal.alert("Error", `Couldn't get Mii: ${await pnid.text()}`);
    return Library();
  }

  new MiiEditor(
    0,
    async (m, shouldSave) => {
      if (shouldSave === true)
        await localforage.setItem(
          `mii-${await savedMiiCount()}-${Date.now()}`,
          m
        );
      Library();
    },
    (await pnid.json()).data
  );
};
const miiCreateRandom = async () => {
  Loader.show();
  let random = await fetch(
    "https://mii-unsecure.ariankordi.net/mii_data_random"
  ).then((j) => j.json());
  Loader.hide();

  new MiiEditor(
    0,
    async (m, shouldSave) => {
      if (shouldSave === true)
        await localforage.setItem(
          `mii-${await savedMiiCount()}-${Date.now()}`,
          m
        );
      Library();
    },
    random.data
  );
};
const miiEdit = (mii: MiiLocalforage, shutdown: () => any) => {
  return () => {
    const modal = Modal.modal(
      "Mii Options",
      "What would you like to do?",
      "body",
      {
        text: "Edit",
        async callback() {
          await shutdown();
          new MiiEditor(
            0,
            async (m, shouldSave) => {
              if (shouldSave === true) await localforage.setItem(mii.id, m);
              Library();
            },
            mii.mii
          );
        },
      },
      {
        text: "Delete",
        async callback() {
          await localforage.removeItem(mii.id);
          await shutdown();
          Library();
        },
      },
      {
        text: "Export",
        async callback() {
          miiExport(mii);
        },
      },
      {
        text: "Cancel",
        async callback() {
          /* ... */
        },
      }
    );
    modal
      .qs(".modal-body")
      ?.prepend(
        new Html("img")
          .attr({ src: miiIconUrl(mii.mii) })
          .style({ width: "180px", margin: "-18px auto 0 auto" })
      );
  };
};

const miiExport = (mii: MiiLocalforage) => {
  Modal.modal(
    "Mii Export",
    "What would you like to do?",
    "body",
    {
      text: "Generate QR code",
      async callback() {
        const qrCodeImage = await QRCodeCanvas(mii.mii);
        const m = Modal.modal("QR Code", "", "body", {
          text: "Cancel",
          callback() {},
        });
        // m.qs(".modal-content")!.style({
        //   "max-width": "1280px",
        //   "max-height": "1280px",
        // });
        m.qs(".modal-body")!
          .clear()
          .style({ padding: "0" })
          .prepend(new Html("img").attr({ src: qrCodeImage }));
      },
    },
    {
      text: "Get FFSD data",
      async callback() {
        return Modal.alert(
          "FFSD code",
          mii.mii,
          // Buffer.from(
          //   new Mii(Buffer.from(mii.mii, "base64")).encode()
          // ).toString("base64"),
          "body",
          true
        );
      },
    },
    {
      text: "Cancel",
      async callback() {
        /* ... */
      },
    }
  );
};
