export default function getRandomIndex(maxCount) {
    const randomIndex = Math.floor(Math.random() * (maxCount - 1));
    return randomIndex;
  }