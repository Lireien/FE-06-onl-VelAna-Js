export function getRandomElementFromArray(list) {
  return list[getRandomNumber(list.length)];
}

export function getRandomNumber(maxVal) {
  return Math.floor(Math.random() * maxVal);
}