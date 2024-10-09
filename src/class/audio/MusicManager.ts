export class MusicManager {
  SongBufs: Record<string, AudioBuffer>;
  audioContext: AudioContext;
  gainNode: GainNode;

  constructor() {
    this.SongBufs = {};
    this.audioContext = new (window.AudioContext ||
      //@ts-ignore webkitaudiocontext exists
      window.webkitAudioContext)();
    this.gainNode = this.audioContext.createGain();
    this.gainNode.connect(this.audioContext.destination);
  }

  async loadSong(url: string, name: string) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();

    const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);

    this.SongBufs[name] = audioBuffer;
  }

  playSong(
    name: string,
    loopStart: number | null = null,
    loopEnd: number | null = null,
    loops: boolean = true,
    autoPlay: boolean = true,
    callbackBeforeStart?: (
      source: AudioBufferSourceNode,
      gainNode: GainNode
    ) => void
  ): { source: AudioBufferSourceNode; gainNode: GainNode } | null {
    const SongBuffer = this.SongBufs[name];
    if (!SongBuffer) {
      console.error(`Song "${name}" not found.`);
      return null;
    }

    const source = this.audioContext.createBufferSource();
    source.buffer = SongBuffer;
    source.connect(this.gainNode);
    if (loops === true) source.loop = true;
    if (loopStart !== null) source.loopStart = loopStart;
    if (loopEnd !== null) source.loopEnd = loopEnd;

    const gainNode = this.audioContext.createGain();
    source.connect(gainNode);
    gainNode.connect(this.gainNode);

    if (callbackBeforeStart) {
      callbackBeforeStart(source, gainNode);
    }

    if (autoPlay) {
      source.start();
    }

    return { source, gainNode };
  }

  stopSong() {
    // Stop any playing Song
    this.audioContext.suspend();
  }

  setVolume(volume: number) {
    this.gainNode.gain.value = volume;
  }
}
