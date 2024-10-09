import { MusicManager } from "../class/audio/MusicManager";
import { initSoundManager } from "../class/audio/SoundManager";
import { Library } from "./pages/Library";

export async function setupUi() {
  let mm = new MusicManager();

  mm.loadSong("./assets/aud/miimakermusic.mp3", "mii_maker_music").then(() => {
    mm.playSong("mii_maker_music", 0, 41.5, true, true, (source, gainNode) => {
      gainNode.gain.setValueAtTime(-0.8, mm.audioContext.currentTime);
    });
  });

  initSoundManager();

  Library();
}
