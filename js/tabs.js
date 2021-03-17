let switchTitleElements = document.querySelectorAll('.tabs-header__item');
let switchContentElements = document.querySelectorAll('.content');
let closeButtonElements = document.querySelectorAll('.close');

switchTitleElements.forEach(function (item) {
  item.addEventListener('click', function () {
    let tabName = this.dataset.tab;
    // console.log(tabName);
    let tabContent = document.querySelector(
      '.content[data-tab = "' + tabName + '"]'
    );

    switchContentElements.forEach(function (item) {
      if (item.classList.contains === 'active') {
      }
      item.classList.remove('active');
    });
    switchTitleElements.forEach(function (item) {
      if (item.classList.contains === 'active') {
      }
      item.classList.remove('active');
    });
    tabContent.classList.add('active');
    this.classList.toggle('active');
  });
});

closeButtonElements.forEach((closeButtonElements) => {
  closeButtonElements.addEventListener('click', closeTabHandler);
});

function closeTabHandler(evt) {
  evt.stopPropagation();
  let switchTitleElement = evt.target.parentElement;
  const contentTab = switchTitleElement.dataset.tab;
  // console.log(contentTab);
  let tabName = switchTitleElement.dataset.tab;
  // console.log(tabName);
  const contentElement = document.querySelector(
    '.content[data-tab = "' + tabName + '"]'
  );
  contentElement.remove();
  switchTitleElement.remove();

  const tabActiveElement = document.querySelector('.tabs-header__item .active');
  if (!tabActiveElement) {
    const tabElement = document.querySelector('.tabs-header__item');
    tabElement.classList.add('active');
    let tabDataTab = tabElement.dataset.tab;
    const tabContentElement = document.querySelector(
      '.content[data-tab = "' + tabDataTab + '"]'
    );
    tabContentElement.classList.add('active');
  }
  // 2ndvar
  const allTabsElements = document.querySelectorAll('.tabs-header__item');
  if (allTabsElements.length === 1) {
    document.querySelector(`.tabs-header__item .close`).remove();
  }
}
