import getRandomIndex from "./randomIndex.js";

export default function shuffleFinalArray(arr) {
  let final_arr = [];
  let prev_indexes = [];
  let randomPic;
  for (let i = arr.length - 1; i > 0; i--) {
    let randomIndex = getRandomIndex(arr.length);
    if (prev_indexes.some((index) => index === randomIndex)) {
      randomIndex = getRandomIndex(arr.length);
    }
    prev_indexes.push(randomIndex);
    randomPic = arr[randomIndex];
    final_arr.push(randomPic);
  }
  return final_arr;
}
