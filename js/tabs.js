let switchTitleElements = document.querySelectorAll('.tabs-header__item');
let switchContentElements = document.querySelectorAll('.tabs-content__item');
let closeButtonElements = document.querySelectorAll('.close');


switchTitleElements.forEach(function (item) {
  item.addEventListener('click', function () {
    let tabName = this.dataset.tab;
    // console.log(tabName);
    let tabContent = document.querySelector(
      '.tabs-content__item[data-tab = "' + tabName + '"]'
    );
      
    switchContentElements.forEach(function (item) {
      if (item.classList === 'active') {
      }
      item.classList.remove('active');
    });
    switchTitleElements.forEach(function (item) {
      if (item.classList === 'active') {
      }
      item.classList.remove('active');
    });
    tabContent.classList.add('active');
    this.classList.toggle('active');
  });
});
