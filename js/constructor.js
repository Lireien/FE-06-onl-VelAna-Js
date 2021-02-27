// Задание 3! Функция-конструктор.
// ● Напишем функцию-конструктор, которая принимает массив, и содержит три метода:
// 1. возвращает количество элементов этого массива.
// 2. выводит новый массив, содержащий количество символов каждой строки.
// Прим на входе [“пирамида”, “юг”, “параллелограмм”] на выходе [8, 2, 14]
// 3. выводит их в виде строки, разделенной запятыми.

function iAmConstructor (arr){
this.data = arr;
this.getElementsQuantity = function(){
  return this.data.length;
}
this.getQuantityOfSymbols = function(){
  const result = [];
  for (let val of this.data){
    result.push(val.length)
  }
  return result;
}


this.getStringWithComma = function(){
  return this.data.join(', ')
}
}

const words = new iAmConstructor(['пирамида', 'юг', 'параллелограмм']);
console.log(words.getElementsQuantity());
console.log(words.getStringWithComma());
console.log(words.getQuantityOfSymbols());