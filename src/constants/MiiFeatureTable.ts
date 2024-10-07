// These convert the actual indices into the positions used on the UI
// for example to be used with the CSS order property.
export const MiiEyeTable: Record<number, number> = {
  // RealValue: DisplayedPosition
  0: 2,
  1: 6,
  2: 0,
  3: 42,
  4: 1,
  5: 24,
  6: 29,
  7: 36,
  8: 3,
};

export function rearrangeArray(
  array: any[],
  lookupTable: Record<number, number>
): any[] {
  let rearrangedArray: any[] = [];

  for (const index in lookupTable) {
    const newIndex = lookupTable[index];
    rearrangedArray[newIndex] = array[parseInt(index)];
  }

  rearrangedArray = rearrangedArray.filter((i) => i !== undefined);

  console.log("rearranged:", rearrangedArray);

  return rearrangedArray;
}
