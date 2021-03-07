let modalWindow = document.querySelector('.modal');
// let formData = document.querySelectorAll('input[type="text"]');
// console.log(formData) ;

document.querySelector('.btn.add-user').addEventListener('click', function () {
  modalWindow.classList.remove('hidden');
});

document.querySelector('.close').addEventListener('click', function () {
  modalWindow.classList.add('hidden');
  document.getElementById('popap-form').reset();
});

document.querySelector('.btn.close').addEventListener('click', function () {
  modalWindow.classList.add('hidden');
  document.getElementById('popap-form').reset();

});
