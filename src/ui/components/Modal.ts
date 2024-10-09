import Html from "@datkat21/html";
import { playSound } from "../../class/audio/SoundManager";
import { AddButtonSounds } from "../../util/AddButtonSounds";

export type ModalButton = {
  text: string;
  callback: (e: Event) => any | Promise<any>;
  type?: string;
};

export default {
  modal: function (
    title: string,
    content: string | Html,
    parent = "body",
    ...buttons: ModalButton[]
  ) {
    if (content === undefined && title) {
      content = "" + title;
      title = "Alert";
    }

    let modalContent = new Html("div").class("modal-content");
    let modalHeader = new Html("div").class("modal-header");
    let modalBody = new Html("div").class("modal-body");
    modalContent.appendMany(modalHeader, modalBody);

    const x = new Html("div").class("modal").append(modalContent);

    new Html("span").text(title).appendTo(modalHeader);
    if (content instanceof Html === false) {
      new Html("span").html(content).appendTo(modalBody);
    } else {
      content.appendTo(modalBody);
    }
    new Html("div").class("flex-group").appendTo(modalBody);

    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      if (!button.text || !button.callback)
        throw new Error("Invalid button configuration");

      if (button.text === "Cancel") {
        let isClosing = false;
        const closeButtonHandler = (e: Event) => {
          // sometimes duplicated events
          if (isClosing) return;
          isClosing = true;
          const t = e.target as HTMLElement;
          if (t == null) return;
          if (
            t.closest(".modal-content") &&
            !t.classList.contains("close-button")
          )
            return;
          x.classOn("closing");
          setTimeout(() => {
            x.cleanup();
            button.callback(e);
          }, 350);
        };
        AddButtonSounds(
          new Html("button")
            .class("close-button")
            .appendTo(modalHeader)
            .on("click", closeButtonHandler)
        );
        x.on("click", closeButtonHandler);
        continue;
      }
      const b = AddButtonSounds(
        new Html("button").text(button.text).on("click", (e: any) => {
          x.class("closing");
          setTimeout(() => {
            x.cleanup();
            button.callback(e);
          }, 350);
        })
      );

      if (button.type && button.type === "primary") b.class("primary");
      if (button.type && button.type === "danger") b.class("danger");

      b.appendTo(modalContent.elm.querySelector(".flex-group")! as HTMLElement);
    }

    x.appendTo(parent);

    let elementsArray: HTMLElement[];

    // use RAF to assure all elements are painted
    requestAnimationFrame(() => {
      const focusableElements = x.elm.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="checkbox"], input[type="radio"], select'
      );
      elementsArray = Array.prototype.slice.call(focusableElements);
      elementsArray.forEach(
        (el: { setAttribute: (arg0: string, arg1: string) => void }) => {
          el.setAttribute("tabindex", "0");
        }
      );

      elementsArray[0].addEventListener(
        "keydown",
        (e: { key: string; shiftKey: any; preventDefault: () => void }) => {
          if (e.key === "Tab" && e.shiftKey) {
            e.preventDefault();
            elementsArray[elementsArray.length - 1].focus();
          }
        }
      );
      elementsArray[elementsArray.length - 1].addEventListener(
        "keydown",
        (e: { key: string; shiftKey: any; preventDefault: () => void }) => {
          if (e.key === "Tab" && !e.shiftKey) {
            e.preventDefault();
            elementsArray[0].focus();
          }
        }
      );
    });

    requestAnimationFrame(() => {
      (modalBody.elm.querySelector("input") as HTMLElement) &&
        (modalBody.elm.querySelector("input") as HTMLElement).focus();
    });

    return x;
  },
  alert: function (
    title: any,
    content: any,
    parent = "body",
    selectable = false
  ) {
    return new Promise((res, _rej) => {
      let p = parent;
      if (selectable) {
        new Html("div").class("modal-selectable").appendTo("body");
        p = ".modal-selectable";
      }
      this.modal(title, content, p, {
        text: "OK",
        callback: (_: any) => {
          res(true);
          Html.qs(".modal-selectable")?.cleanup();
        },
      });
    });
  },
  prompt: function (
    title: any,
    content: any,
    parent = "body",
    dangerous = false
  ) {
    return new Promise((res, _rej) => {
      this.modal(
        title,
        content,
        parent,
        {
          text: "Yes",
          type: dangerous ? "danger" : "primary",
          callback: (_: any) => res(true),
        },
        {
          text: "No",
          callback: (_: any) => res(false),
        }
      );
    });
  },
  input: function (
    title: any,
    description: any,
    placeholder: any,
    parent = "body",
    isPassword = false,
    value = ""
  ): Promise<string | false> {
    return new Promise((res, _rej) => {
      let wrapper = new Html("div").class("col");
      let modal = this.modal(
        title,
        wrapper,
        parent,
        {
          text: "OK",
          type: "primary",
          callback: (_: any) => {
            res((input.elm as HTMLInputElement).value);
          },
        },
        {
          text: "Cancel",
          callback: (_: any) => res(false),
        }
      );

      new Html("span").text(description).appendTo(wrapper);
      let input = new Html("input")
        .attr({
          placeholder,
          value,
          type: isPassword === true ? "password" : "text",
        })
        .on("keyup", (e) => {
          const ev = e as KeyboardEvent;
          if (ev.key === "Enter") {
            // submit modal
            modal.class("closing");
            setTimeout(() => {
              modal.cleanup();
              res((input.elm as HTMLInputElement).value);
            }, 350);
          }
        })
        .appendTo(wrapper);
    });
  },
};
