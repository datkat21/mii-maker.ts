console.time("program run");

import { readdir } from "fs/promises";
import { join } from "path";

const svgsList = await readdir("./svg");

let categories = [
  "face",
  "makeup",
  "wrinkles",
  "eyebrows",
  "eyes",
  "nose",
  "mouth",
  "mustache",
  "goatee",
  "hair",
  "glasses",
];

let json: { [key: string]: string[] } = {};

function parseSvg(svg: string): string {
  svg = svg
    .replace(/fill="#6C7070"/g, 'fill="var(--eye-color)"')
    .replace(
      /fill="white" stroke="#6F6F6F"/g,
      'fill="var(--icon-face-fill)" stroke="var(--icon-face-stroke)"'
    )
    // Hair icons
    .replace(
      /fill="white" stroke="#BFBFBF"/g,
      'fill="var(--icon-head-fill)" stroke="var(--icon-head-stroke)"'
    )
    .replace(/fill="#5F5F5F"\/>/g, 'fill="var(--icon-hair-fill)"/>')
    .replace(/fill="#1E1E1E"/g, 'fill="var(--icon-facial-hair-fill)"')
    .replace(/fill="#BFBFBF"/g, 'fill="var(--icon-hair-tie)"')
    // Glasses
    .replace(
      /fill="white" stroke="#BFBEBD"/g,
      'fill="var(--icon-head-fill)" stroke="var(--icon-head-stroke)"'
    )
    .replace(/stroke="#7B0000"/g, 'stroke="var(--icon-glasses-fill)"')
    .replace(/fill="#7B0000"/g, 'fill="var(--icon-glasses-fill)"')
    .replace(/fill="#030303"/g, 'fill="currentColor"')
    .replace(/stroke="#030303"/g, 'stroke="currentColor"')
    .replace(/fill="#F60000"/g, 'fill="var(--icon-glasses-shade)"')
    .replace(
      /fill="white" stroke="#999999"/g,
      'fill="var(--icon-head-fill)" stroke="var(--icon-head-stroke)"'
    )
    .replace(/fill="#808080"/g, 'fill="var(--icon-hat-fill)"')
    .replace(/fill="#404040"/g, 'fill="var(--icon-hat-stroke)"')
    .replace(/fill="#8D8D8D"/g, 'fill="var(--icon-face-detail)"')
    .replace(/#996D54/g, "var(--icon-face-wrinkles)")
    .replace(/#E30000/g, "var(--icon-eyebrow-fill)")
    .replace(/#FF5F5F/g, "currentColor")
    .replace(/#0055FF/g, "var(--icon-mouth-tooth)")
    .replace(/#712A04/g, "var(--icon-lip-color-top)")
    .replace(/#BE4E26/g, "var(--icon-lip-color-bottom)")
    .replace(/<rect[^>]*\/>/g, "");
  return svg;
}

// Step 1: Sort the files by category then number
svgsList.sort((a, b) => {
  const categoryA = a.split("-")[0];
  const categoryB = b.split("-")[0];
  const numberA = parseInt(a.split("-")[1]);
  const numberB = parseInt(b.split("-")[1]);

  // Compare categories first
  if (categoryA !== categoryB) {
    return categories.indexOf(categoryA) - categories.indexOf(categoryB);
  }

  // If categories are the same, compare numbers
  return numberA - numberB;
});

for (const item of svgsList) {
  const cat = categories.find((cat) => item.startsWith(cat));
  if (cat) {
    if (!json[cat]) {
      json[cat] = [];
    }
    try {
      let fileData = await Bun.file(join("./svg", item)).text();

      fileData = parseSvg(fileData);

      json[cat].push(fileData);
    } catch (error) {
      console.log("Error in", item);
    }
  } else {
  }
}

// Sort the keys of 'datas' based on the order of 'categories'
const sortedKeys = Object.keys(json).sort((a, b) => {
  return categories.indexOf(a) - categories.indexOf(b);
});

// Create a new object with the sorted keys
const sortedDatas: { [key: string]: string[] } = {};
for (const key of sortedKeys) {
  sortedDatas[key] = json[key];
}

Bun.write("./public/dist/icons.json", JSON.stringify(sortedDatas, null, 2));

console.timeEnd("program run");
console.log("Done");
