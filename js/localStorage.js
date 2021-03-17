// Задание! Записываем в локальное хранилище данные пользователей.
// ● Возьмем таблицу из самостоятельного задания 8 урока;
// ● При загрузке страницы проверим есть ли данные в локальном хранилище;
// ● Если да, то выведем содержимое, если нет - выводим объект по-умолчанию, и записываем в localstorage;
// ★ Добавим функционал добавления пользователя, новый пользователь так же должен быть записан в локальное хранилище
let users = [
  {
    firstName: 'Ashton',
    lastName: 'Kutcher',
    age: 40,
  },
  {
    firstName: 'Bradley',
    lastName: 'Pitt',
    age: 54,
  },
  {
    firstName: 'Hannah',
    lastName: 'Dakota',
    age: 24,
  },
];

const tableElement = document.querySelector('.table');


function initTable(usersList){
  usersList.forEach(user => {
    const template = `<tr><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.age}</td></tr>`;
    const templateElement = createElement(template);
    tableElement.append(templateElement);
  });
}
function createElement(template){
  const element = document.createElement('table');
  element.innerHTML = template;
  return element.firstElementChild;
}
initTable(users);
localStorage.clear()

window.onload = function (){
if(localStorage.getItem("users") === null){

} localStorage.setItem("users", JSON.stringify(users));

}

