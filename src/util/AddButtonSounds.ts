import type Html from "@datkat21/html";
import { playSound } from "../class/audio/SoundManager";

export function AddButtonSounds(
  button: Html,
  hoverSound: string = "hover",
  pressSound: string = "select"
) {
  button.on("pointerenter", () => {
    playSound(hoverSound);
  });
  button.on("click", () => {
    playSound(pressSound);
  });
  return button;
}
