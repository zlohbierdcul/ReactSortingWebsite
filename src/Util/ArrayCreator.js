// export function getArray() {
//   return unsortedArray;
// }
export const debugEnabled = false;

export function createArray(arraySize) {
  const unsortedArray = [];
  let randomInt = 1;

  for (let i = 0; i < arraySize; i++) {
    do {
      randomInt = getRandomInt(arraySize);
    } while (trueIfDuplicatesIn(unsortedArray, randomInt));

    unsortedArray.push(randomInt);

    if (debugEnabled) {
      console.log(unsortedArray);
      console.log({ randomInt });
    }
  }
  return unsortedArray;
}

function getRandomInt(max) {
  let randomInt = Math.floor(Math.random() * max) + 1;
  // console.log(randomInt);
  return randomInt;
}

function trueIfDuplicatesIn(array, number) {
  let hasDuplicate = 0;

  array.forEach((element) => {
    if (element === number) {
      // console.log("Element: " + element + "- Number: " + number);
      hasDuplicate++;
    }
  });

  if (hasDuplicate !== 0) {
    return true;
  }
  return false;
}
