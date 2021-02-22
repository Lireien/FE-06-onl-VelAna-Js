// Массив уникальных случайных цифр.

// Создадим массив для семи элементов;
// Заполним его случайными цифрами от 0 до 10;
// Цифры в массиве не должны повторяться;
// Вывести этот массив в консоль;
// Упорядочить массив;
// Еще раз вывести его в консоль.

function randomArray(count, min, max) {
  if (count > max - min) return;
  var arr = [],
    tmp;

  while (count) {
    tmp = Math.floor(Math.random() * (max - min) + min);
    if (arr.indexOf(tmp) === -1) {
      arr.push(tmp);
      count--;
    }
  }

  return arr;
}
var arr = randomArray(7, 0, 10);
// console.log(arr);
console.log(arr.sort());
