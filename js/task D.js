// Задание D!
// Выводим окно prompt с вопросом о возрасте;
// В зависимости от ответа выводим alert с текстом “поздравляем, вам n полных лет”;
// Выводим окно alert с утверждением совершеннолетний пользователь или нет.
let age 
age = prompt ('How old are you?', 100);
console.log(age);
alert('Congratulations, You are ' + age + ' full years old!');
if (age >= 18) {
  alert('You are an adult!');
}
if (age <=18) {
  alert('Sorry, You are underage');
}