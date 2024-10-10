// This script is used for generating temporary thumbnail files
// Combine this script with the following browser script to get the array:
/*javascript*/ `
var featureItems = Array.from(document.querySelectorAll(".feature-item"));
var featureItemList = [];

for (let i = 0; i < featureItems.length; i++) {
  setTimeout(() => {
    featureItems[i].click();
    featureItemList.push(document.querySelector("img").src);

    if (i === featureItems.length - 1) {
      console.log("DONE");
    } else console.log(i + 1, "/", featureItems.length);
  }, 250 * (i + 1));
}`;

const files: string[] = [];

const delay = (delay: number) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(delay);
    }, delay)
  );

for (let i = 0; i < files.length; i++) {
  await delay(169); // guess
  const hair = await fetch(files[i]).then((b) => b.blob());
  Bun.write(`./public/assets/img/hair/${i}.png`, hair);
  console.log(`./public/assets/img/hair/${i}.png`);
}
