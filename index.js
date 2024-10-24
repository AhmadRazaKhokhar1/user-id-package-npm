// Globals
import {
  lowercaseAlphabets,
  numbers,
  uniqueSymbols,
  uppercaseAlphabets,
} from "./globals/global.js";
import getComplexity from "./methods/getComplexity.js";

// Methods
import getRandomIndex from "./methods/randomIndex.js";
import shuffleFinalArray from "./methods/shuffleFinalArray.js";

function userId(complexitySalt) {
  if (complexitySalt <= 0 || complexitySalt > 15) {
    throw new Error("Please enter a salt value between 1 to 15");
  }
  const complexity = getComplexity(complexitySalt);

  var idArray = [];
  for (let i = 0; i <= lowercaseAlphabets.length - 1; i++) {
    const randomIndex = getRandomIndex(lowercaseAlphabets.length);
    const randomAlphabetLowerCase = lowercaseAlphabets[randomIndex];
    idArray.push(randomAlphabetLowerCase);
  }
  for (let j = 0; j <= uppercaseAlphabets.length - 1; j++) {
    const randomIndex = getRandomIndex(uppercaseAlphabets.length);
    const randomAlphabetUpperCase = uppercaseAlphabets[randomIndex];
    idArray.push(randomAlphabetUpperCase);
  }
  for (let k = 0; k <= numbers.length - 1; k++) {
    const randomIndex = getRandomIndex(numbers.length);
    const randomNumber = numbers[randomIndex];
    idArray.push(randomNumber);
  }
  for (let z = 0; z <= uniqueSymbols.length - 1; z++) {
    const randomIndex = getRandomIndex(uniqueSymbols.length);
    const randomUniqueSymbol = uniqueSymbols[randomIndex];
    idArray.push(randomUniqueSymbol);
  }
  let date = new Date().getTime();
  let randomFigure = Math.random() * (date +1);
  idArray.push(randomFigure);
  idArray.push(date);
  const shuffled_arr = shuffleFinalArray(idArray);
  const unique_id = shuffled_arr.join("");
  const refined_id = unique_id.replace(/\./g, "");
  const reduced_id = refined_id.substring(
    0,
    complexity === "basic"
      ? 20
      : complexity === "mid"
      ? 50
      : complexity === "advanced"
      ? 70
      : 20
  );
  console.log({ reduced_id });
  return reduced_id;
}
userId();
export default userId;
