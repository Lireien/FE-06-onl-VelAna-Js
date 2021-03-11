let modalWindow = document.querySelector('.modal');
// let formData = document.querySelectorAll('input[type="text"]');
// console.log(formData) ;

document.querySelector('.btn.add-user').addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
});

document.querySelector('.close').addEventListener('click', clearForm);

document.querySelector('.btn.close').addEventListener('click',clearForm);
  function clearForm (){
    modalWindow.classList.add('hidden');
    document.getElementById('popap-form').reset();

};


// Дополнительное задание!
// ● Расширим функционал модального окна из занятия #7.
// ● При добавлении пользователя через модальное окно, добавим полученный объект в массив пользователей.
// ● Снова отрисуем массив, уже с новым пользователем.
const okButtonElement = document.querySelector('.ok')
const inputElements = document.querySelectorAll('.popap-form input');
okButtonElement.addEventListener('click', addNewUser);
const users = [
  {firstName:'',lastName: '',age:''}
]
function addNewUser(){
  const newUser = [];
  inputElements.forEach(inputElement => {
    newUser[inputElement.name] = inputElement.value;
  });
  users.push(newUser);
  console.log(newUser);
  clearForm();
} 
  
  