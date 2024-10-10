import { MusicManager } from "../class/audio/MusicManager";
import { getSoundManager, initSoundManager } from "../class/audio/SoundManager";
import Modal from "./components/Modal";
import { Library } from "./pages/Library";

export async function setupUi() {
  let mm = new MusicManager();

  // document.onclick = () => {
  //   document.onclick = null;

  function playMusic() {
    mm.playSong("mii_maker_music", 0, 41.5, true, true, (source, gainNode) => {
      gainNode.gain.setValueAtTime(-1, mm.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(
        -0.6,
        mm.audioContext.currentTime + 2
      );
    });
  }

  mm.loadSong("./assets/aud/miimakermusic.mp3", "mii_maker_music").then(() => {
    playMusic();
    if (mm.audioContext.state === "suspended") {
      Modal.alert(
        "Audio needs action",
        "Music will start playing on first click. You can press V to change sound volume (default is 0.35)"
      );
      document.onclick = () => {
        document.onclick = null;
        playMusic();
      };
    }
  });

  Library();

  await initSoundManager();

  getSoundManager().setVolume(0.35);
  mm.setVolume(0.35);

  document.addEventListener("keydown", (e) => {
    if (document.activeElement === document.body) {
      if (e.code === "KeyS") {
        Modal.modal(
          "sound test",
          "choose a sound",
          "body",
          ...Object.keys(getSoundManager().soundBufs).map((k) => ({
            text: k,
            callback() {
              getSoundManager().playSound(k);
              //@ts-expect-error
              window.lastPlayedSound = k;
            },
          }))
        )
          .qs(".modal-content")!
          .style({ "max-width": "unset", "max-height": "unset" });
      }
      if (e.code === "KeyV") {
        const vol = Number(
          prompt("Enter volume level from 0-1 (default is 0.35)")
        );

        if (vol < 0) return;
        if (vol > 1) return;

        getSoundManager().setVolume(vol);
        mm.setVolume(vol);
      }
    }
  });
}
