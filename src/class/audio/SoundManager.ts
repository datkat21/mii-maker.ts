import JSZip from "jszip";

export const getSoundManager = () => sm;
export const playSound = (sound: string) => getSoundManager().playSound(sound);
export class SoundManager {
  soundBufs: Record<string, AudioBuffer>;
  audioContext: AudioContext;
  gainNode: GainNode;

  constructor() {
    this.soundBufs = {};
    this.audioContext = new (window.AudioContext ||
      //@ts-ignore webkitaudiocontext exists
      window.webkitAudioContext)();
    this.gainNode = this.audioContext.createGain();
    this.gainNode.connect(this.audioContext.destination);
  }

  async loadSound(url: string, name: string) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();

    const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);

    this.soundBufs[name] = audioBuffer;
  }
  async loadSoundBuffer(arrayBuffer: ArrayBuffer, name: string) {
    const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);

    this.soundBufs[name] = audioBuffer;
  }

  playSound(name: string) {
    const soundBuffer = this.soundBufs[name];
    if (!soundBuffer) {
      console.error(`Sound "${name}" not found.`);
      return;
    }

    const source = this.audioContext.createBufferSource();
    source.buffer = soundBuffer;
    source.connect(this.gainNode);
    source.start();
  }

  setVolume(volume: number) {
    this.gainNode.gain.value = volume;
  }
}

let sm: SoundManager;

export const initSoundManager = async () => {
  sm = new SoundManager();

  const data = await fetch("./assets/aud/miiMakerSwitch.zip").then((j) =>
    j.blob()
  );
  const zip = await JSZip.loadAsync(data);
  let promises = [];
  const fileList = Object.keys(zip.files);
  for (const file of fileList) {
    // console.log(file, zip.files[file]);
    promises.push(zip.files[file].async("arraybuffer"));
  }
  const resolves = await Promise.all(promises);
  for (let i = 0; i < fileList.length; i++) {
    const fileName = fileList[i].split(".");
    fileName.pop();
    await sm.loadSoundBuffer(resolves[i], fileName.join("."));
  }
};
