import Mii from "./external/mii-js/mii";
// import { Buffer } from "../node_modules/buffer/index";
import { Buffer as Buf } from "../node_modules/buffer/index";
import { setupUi } from "./ui/setup";
import type { MiiEditor } from "./class/MiiEditor";

setupUi();

declare global {
  interface Window {
    mii: Mii;
    editor: MiiEditor;
    buffer: Buf;
  }
}

//@ts-expect-error classington
window.buffer = Buf;

// const RenderRequest = new DataView(new Uint8Array());

// import crc from "crc";

// class FFLiMiiDataCore {
//   // Create an ArrayBuffer to hold the raw data
//   buffer: ArrayBuffer;
//   view: DataView;

//   constructor(buffer: ArrayBuffer) {
//     this.buffer = buffer;
//     this.view = new DataView(buffer);
//   }

//   // Bit fields at offset 0x00 (birth_platform and unk_0x00_b4)
//   get birth_platform(): number {
//     return this.view.getUint8(0x00) & 0x0f; // Lower 4 bits
//   }

//   set birth_platform(value: number) {
//     let byte = this.view.getUint8(0x00);
//     byte = (byte & 0xf0) | (value & 0x0f); // Preserve upper 4 bits, set lower 4 bits
//     this.view.setUint8(0x00, byte);
//   }

//   // Read uint64 at offset 0x4
//   get author_id(): bigint {
//     return this.view.getBigUint64(0x04, true); // Little-endian
//   }

//   set author_id(value: bigint) {
//     this.view.setBigUint64(0x04, value, true); // Little-endian
//   }

//   // Handling bit fields at 0x18
//   get gender(): number {
//     return this.view.getUint16(0x18, true) & 0x01; // Get the lowest bit
//   }

//   set gender(value: number) {
//     let bits = this.view.getUint16(0x18, true);
//     bits = (bits & 0xfffe) | (value & 0x01); // Preserve all bits except the lowest one
//     this.view.setUint16(0x18, bits, true); // Set the gender bit
//   }

//   get birth_day(): number {
//     return (this.view.getUint16(0x18, true) >> 1) & 0x1f; // Extract bits 1-5
//   }

//   set birth_day(value: number) {
//     let bits = this.view.getUint16(0x18, true);
//     bits = (bits & 0xffe1) | ((value & 0x1f) << 1); // Preserve other bits, set birth day bits
//     this.view.setUint16(0x18, bits, true);
//   }

//   get birth_month(): number {
//     return (this.view.getUint16(0x18, true) >> 6) & 0x0f; // Extract bits 6-9
//   }

//   set birth_month(value: number) {
//     let bits = this.view.getUint16(0x18, true);
//     bits = (bits & 0xfc3f) | ((value & 0x0f) << 6); // Set birth month bits
//     this.view.setUint16(0x18, bits, true);
//   }

//   // char16_t mii_name[10];
//   get mii_name(): string {
//     return getChar16String(this.view, 0x1a, 10);
//   }
//   set mii_name(value: string) {
//     setChar16String(this.view, 0x1a, value, 10);
//   }

//   // be2_val<uint16_t> checksum; at 0x5e
//   get checksum(): number {
//     return this.view.getUint16(0x5e, true);
//   }
//   set checksum(value: number) {
//     this.view.setUint16(0x5e, value, true);
//   }

//   calculateChecksum(): void {
//     console.log("Calculating checksum..");
//     // calculate checksum from 0x0 to 0x5c
//     let buffer = this.view.buffer;
//     let slicedBuf = buffer.slice(0x0, 0x5c);

//     const checksum = crc.crc16(slicedBuf);

//     console.log("checksum", checksum);

//     this.checksum = checksum;
//   }

//   // Continue with similar methods for the rest of the structure...
// }

// const fromHexString = (hexString: string) =>
//   Uint8Array.from(
//     hexString.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))
//   );
// const data = fromHexString(
//   `03000040D8D5EE8A6A176846DA172BF74A9CD047CF4700009422410075007300740069006E000626B200B9000000534001003E0720674418F34265146D1413660D0000290052472500000000000000000000000000000000000000000000808D`
// );

// console.log(data);

// const mii = new FFLiMiiDataCore(data.buffer as ArrayBuffer);

// console.log("mii", mii);
// console.log(mii.mii_name);

// mii.mii_name = "TestTestTest";
// mii.calculateChecksum();

// console.log("Updated mii", mii.mii_name);

// // serialize to hex
// const serializedData = Array.from(new Uint8Array(mii.buffer))
//   .map((byte) => byte.toString(16).padStart(2, "0"))
//   .join("");
// console.log("serializedData", serializedData);

// // Handling char16_t strings like `creator_name` and `mii_name`
// function getChar16String(
//   view: DataView,
//   offset: number,
//   length: number
// ): string {
//   let str = "";
//   for (let i = 0; i < length; i++) {
//     const code = view.getUint16(offset + i * 2, true); // Little-endian
//     if (code === 0) break; // Stop at null terminator
//     str += String.fromCharCode(code);
//   }
//   return str;
// }

// function setChar16String(
//   view: DataView,
//   offset: number,
//   str: string,
//   length: number
// ) {
//   for (let i = 0; i < length; i++) {
//     const code = str.charCodeAt(i) || 0; // Null-terminate if shorter
//     view.setUint16(offset + i * 2, code, true); // Little-endian
//   }
// }
