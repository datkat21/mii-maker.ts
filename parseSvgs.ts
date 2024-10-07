console.time("program run");

import { readdir } from "fs/promises";
import { join } from "path";

const svgsList = await readdir("./svg");

let categories = [
  "ears",
  "tail",
  "body",
  "hat",
  "features",
  "eyes",
  "lips",
  "arms",
  "legs",
  "accessory",
];

let json: { [key: string]: string[] } = {};

function parseSvg(svg: string): string {
  svg = svg
    // Remove lines with stroke="#737373"
    // .replace(/<path[^>]*stroke="#737373"[^>]*>/g, "")
    // Replace fill="#6C7070" with stroke="var(--ktat-hat)"
    .replace(/fill="#6C7070"/g, 'fill="var(--eye-color)"')
    // Remove lines with <rect/>;
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
  // console.log(item);
  const cat = categories.find((cat) => item.startsWith(cat));
  if (cat) {
    if (!json[cat]) {
      json[cat] = [];
    }
    try {
      // console.log(item);
      let fileData = await Bun.file(join("./svg", item)).text();

      fileData = parseSvg(fileData);

      json[cat].push(fileData);
    } catch (error) {
      console.log("Error in", item);
    }
  } else {
    // console.log(item, "does not belong to a category");
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
