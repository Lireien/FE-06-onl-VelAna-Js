// Задание 2! Простая функция-калькулятор.
// ● Напишем функцию, которая будет принимать массив чисел.
// ● На выходе эта функция должна возвращать сумму этих чисел.
// ● Добавим функционал, для того, чтобы игнорировать другие типы данных в этом массиве (если они есть).


const myArr = [2,7,11,'word', null]

function sumOfNumbers(arr) {
  let sum = 0;
  for (var item of arr){
    if(typeof(item) === 'number'){
      sum += item
    }
  }
  return 'Sum is ' + sum
  }
  console.log(sumOfNumbers(myArr));

