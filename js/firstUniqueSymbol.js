// Напишите функцию, принимающую на вход строку, и возвращающую первый символ, который встречается в строке только один раз. Если это буква, то она должна быть в том регистре, в котором она встретилась в строке. Например, для строки mAmaN вернуть N. Если все символы встречаются больше одного раза, вернуть пустую строку.


function firstNonRepeatingLetter(str){
  const arr = str.split(``);
  const map = {};
  for (let item of arr){
    const key = item.toUpperCase();
    if (map[key]) {
      map[key]++;
    } else {
      map[key] = 1;
    }
  }
  // console.log(str, 'map is ', map);
  for (let item of arr) {
    const val = item.toUpperCase();
    if (map[val] < 2) {
      return item;
    }
  }
  return '';
}
console.log(firstNonRepeatingLetter('mAmaN'));
console.log(firstNonRepeatingLetter('a'));
console.log(firstNonRepeatingLetter('paPA'));
console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!"));