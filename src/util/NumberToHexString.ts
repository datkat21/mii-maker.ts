export const numToHex = (num: number) =>
  "#" + num.toString(16).padStart(6, "0");
