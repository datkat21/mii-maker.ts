export type MiiLookupTableHex = Record<number, number>;
export type MiiLookupTableString = Record<number, string>;
export type MiiLookupTableSpecial = Record<
  number,
  { top: string; bottom: string }
>;
export type MiiLookupTableColor = Record<number, any>;

export const MiiFavoriteColorLookupTable: MiiLookupTableHex = {
  /** Red */
  0: 0xd21e14,
  /** Orange */
  1: 0xff6e19,
  /** Yellow */
  2: 0xffd820,
  /** Light green */
  3: 0x78d220,
  /** Dark green */
  4: 0x007830,
  /** Dark blue */
  5: 0x0a48bc,
  /** Light blue */
  6: 0x3caade,
  /** Pink */
  7: 0xf55a7d,
  /** Purple */
  8: 0x7328ad,
  /** Brown */
  9: 0x483818,
  /** White */
  10: 0xe0e0e0,
  /** Black */
  11: 0x181814,
};

export const MiiFavoriteColorIconTable: MiiLookupTableSpecial = {
  /** Red */
  0: { top: "#d21e14", bottom: "#630e09" },
  /** Orange */
  1: { top: "#ff6e19", bottom: "#78340c" },
  /** Yellow */
  2: { top: "#ffd820", bottom: "#78660f" },
  /** Light green */
  3: { top: "#78d220", bottom: "#38630f" },
  /** Dark green */
  4: { top: "#007830", bottom: "#003817" },
  /** Dark blue */
  5: { top: "#0a48bc", bottom: "#052258" },
  /** Light blue */
  6: { top: "#3caade", bottom: "#1c5068" },
  /** Pink */
  7: { top: "#f55a7d", bottom: "#732a3b" },
  /** Purple */
  8: { top: "#7328ad", bottom: "#361351" },
  /** Brown */
  9: { top: "#483818", bottom: "#221a0b" },
  /** White */
  10: { top: "#e0e0e0", bottom: "#696969" },
  /** Black */
  11: { top: "#181814", bottom: "#0b0b09" },
};

export const MiiSkinColorTable: MiiLookupTableColor = {
  0: [1.0, 0.827, 0.678], // "#ffd3ad",
  1: [1.0, 0.714, 0.42], // "#ffb66b",
  2: [0.87, 0.475, 0.259], // "#de7942",
  3: [1.0, 0.667, 0.549], // "#ffaa8c",
  4: [0.678, 0.318, 0.161], // "#ad5129",
  5: [0.388, 0.173, 0.094], // "#632c18",
};
export const MiiHairColorTable: MiiLookupTableColor = {
  // 0: "#000000",
  // 1: "#402010",
  // 2: "#5C180A",
  // 3: "#7C3A14",
  // 4: "#787880",
  // 5: "#4E3E11",
  // 6: "#875917",
  // 7: "#D0A049",
  0: [0.118, 0.102, 0.094],
  1: [0.251, 0.125, 0.063],
  2: [0.361, 0.094, 0.039],
  3: [0.486, 0.227, 0.078],
  4: [0.471, 0.471, 0.502],
  5: [0.306, 0.243, 0.063],
  6: [0.533, 0.345, 0.094],
  7: [0.816, 0.627, 0.29],
};
export const MiiEyeColorTable: MiiLookupTableString = {
  0: "#000000",
  1: "#717372",
  2: "#663C2C",
  3: "#686537",
  4: "#4B58A8",
  5: "#387059",
};
export const MiiEyeColorNumberTable: MiiLookupTableColor = {
  0: [0.0, 0.0, 0.0],
  1: [0.424, 0.439, 0.439],
  2: [0.4, 0.235, 0.173],
  3: [0.376, 0.369, 0.188],
  4: [0.275, 0.329, 0.659],
  5: [0.22, 0.439, 0.345],
};
export const MiiMouthColorTable: MiiLookupTableString = {
  0: "#D04401",
  1: "#F30100",
  2: "#FD393A",
  3: "#F58862",
  4: "#1F1D1D",
};
export const MiiMouthColorLipTable: MiiLookupTableSpecial = {
  0: { top: "#823018", bottom: "#D85209" },
  1: { top: "#780C0D", bottom: "#F00C09" },
  2: { top: "#882028", bottom: "#F54849" },
  3: { top: "#DC7751", bottom: "#F09A74" },
  4: { top: "#461E0A", bottom: "#8C503F" },
};
export const MiiGlassesColorTable: MiiLookupTableString = {
  0: "#000000",
  1: "#5d391a",
  2: "#a01612",
  3: "#2e3969",
  4: "#a4601e",
  5: "#766f67",
};
export const MiiGlassesColorIconTable: MiiLookupTableSpecial = {
  0: { top: "#666666", bottom: "#606060" },
  1: { top: "#8d694a", bottom: "#e4c0a1" },
  2: { top: "#a01612", bottom: "#ff9d99" },
  3: { top: "#b5c0f0", bottom: "#b5c0f0" },
  4: { top: "#a4601e", bottom: "#ffe7a5" },
  5: { top: "#766f67", bottom: "#fdf6ee" },
};
