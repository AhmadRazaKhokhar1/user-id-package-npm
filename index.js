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
  for (
    let i = 0;
    i <= (complexity.alphabetSalt ?? lowercaseAlphabets.length - 1);
    i++
  ) {
    const randomIndex = getRandomIndex(lowercaseAlphabets.length);
    const randomAlphabetLowerCase = lowercaseAlphabets[randomIndex];
    idArray.push(randomAlphabetLowerCase);
  }
  for (
    let j = 0;
    j <= (complexity.alphabetSalt ?? uppercaseAlphabets.length - 1);
    j++
  ) {
    const randomIndex = getRandomIndex(uppercaseAlphabets.length);
    const randomAlphabetUpperCase = uppercaseAlphabets[randomIndex];
    idArray.push(randomAlphabetUpperCase);
  }
  for (let k = 0; k <= (complexity.numberSalt ?? numbers.length - 1); k++) {
    const randomIndex = getRandomIndex(numbers.length);
    const randomNumber = numbers[randomIndex];
    idArray.push(randomNumber);
  }
  for (
    let z = 0;
    z <= (complexity.symbolSalt ?? uniqueSymbols.length - 1);
    z++
  ) {
    const randomIndex = getRandomIndex(uniqueSymbols.length);
    const randomUniqueSymbol = uniqueSymbols[randomIndex];
    idArray.push(randomUniqueSymbol);
  }
  console.log({
    lowercaseAlphabets,
    numbers,
    uniqueSymbols,
  });
  let date = new Date().getTime();
  let randomFigure = Math.random() * date;
  idArray.push(randomFigure);
  idArray.push(date);
  const shuffled_arr = shuffleFinalArray(idArray);
  const unique_id = shuffled_arr.join("");
  const refined_id = unique_id.replace(/\./g, "");
  console.log({ refined_id });
  return refined_id;
}
userId(15);
export default userId;
