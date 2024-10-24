import { BitStream } from "../bitStream/bitStream";
import { Buffer } from "../../../node_modules/buffer/index";

export default class ExtendedBitStream extends BitStream {
  constructor(buffer: Buffer) {
    super(buffer, buffer.byteOffset, buffer.byteLength);
  }

  public swapEndian(): void {
    this.bigEndian = !this.bigEndian;
  }

  // the type definition for BitStream does not include the _index property
  // since it's supposed to be private, but it's needed 4 times here sooo

  public alignByte(): void {
    // // @ts-expect-error _index is private
    const nextClosestByteIndex = 8 * Math.ceil(this._index / 8);
    // // @ts-expect-error _index is private
    const bitDistance = nextClosestByteIndex - this._index;

    this.skipBits(bitDistance);
  }

  public bitSeek(bitPos: number): void {
    // // @ts-expect-error _index is private
    this._index = bitPos;
  }

  public skipBits(bitCount: number): void {
    // // @ts-expect-error _index is private
    this._index += bitCount;
  }

  public skipBytes(bytes: number): void {
    const bits = bytes * 8;
    this.skipBits(bits);
  }

  public skipBit(): void {
    this.skipBits(1);
  }

  public skipInt8(): void {
    this.skipBytes(1);
  }

  public skipInt16(): void {
    // Skipping a uint16 is the same as skipping 2 uint8's
    this.skipBytes(2);
  }

  public readBit(): number {
    return this.readBits(1);
  }

  public readBytes(length: number): number[] {
    return Array(length)
      .fill(0)
      .map(() => this.readUint8());
  }

  public readBuffer(length: number): Buffer {
    return Buffer.from(this.readBytes(length));
  }

  public readUTF16String(length: number): string {
    return this.readBuffer(length).toString("utf16le").replace(/\0.*$/, "");
  }

  public writeBit(bit: number): void {
    this.writeBits(bit, 1);
  }

  public writeBuffer(buffer: Buffer): void {
    buffer.forEach((byte) => this.writeUint8(byte));
  }

  public writeUTF16String(string: string): void {
    const stringBuffer = Buffer.from(string, "utf16le");
    const terminatedBuffer = Buffer.alloc(0x14);

    stringBuffer.copy(terminatedBuffer);

    this.writeBuffer(terminatedBuffer);
  }
}
