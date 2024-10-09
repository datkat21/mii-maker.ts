/**
 * Builds a TypeScript file to a directory.
 * @param filePath The file path.
 * @param outputDir Directory to output the compiled file.
 * @param minify Whether or not to minify the compiled output. Useful for debugging.
 * @returns void
 */
export async function compile(
  filePath: string,
  outputDir: string
): Promise<any> {
  return await Bun.build({
    entrypoints: [filePath],
    outdir: outputDir,
    splitting: true,
    emitDCEAnnotations: true,
    sourcemap: "linked",
    minify: {
      identifiers: false,
      syntax: false,
      whitespace: false,
    },
  });
}

import { join } from "path";
import { watch } from "fs";

import * as sass from "sass";

async function build() {
  try {
    await compile("./src/main.ts", "./public/dist/");
  } catch (e) {
    console.log(e);
  }

  try {
    const mainScss = sass.compile("./src/scss/main.scss");
    await Bun.write("./public/dist/main.css", mainScss.css);
    // const landingScss = sass.compile("./src/scss/landing.scss");
    // await Bun.write("./public/landing.css", landingScss.css);
  } catch (_) {
    console.error(_);
  }
}

const watcher = watch(
  join(import.meta.dir, "./src"),
  { recursive: true },
  async (event, filename) => {
    console.log(`Detected ${event} in ${filename}`);
    build();
  }
);

console.log("Watching!");
build();
