import {getRandomElementFromArray, getRandomNumber} from '/utils.js';
import {MOCK_IMAGES, BLOCK_TYPES, MOCK_TITLES, CONTAINER_TYPES} from '/constants.js';

function generateData(count) {
  const result = []
  
  for (let i = 0; i < count; i++) {
    const id = getRandomNumber(1000000);
    const type = getRandomElementFromArray(BLOCK_TYPES);
    
    let source = [];
    
    if (type === 'img') {
      source = MOCK_IMAGES;
    } else {
      source = MOCK_TITLES;
    }
    const content = getRandomElementFromArray(source);
    const container = getRandomElementFromArray(CONTAINER_TYPES);
    
    const item = {
      id,
      type,
      content,
      container
    }
    
    result.push(item);
  }
  
  return result;
}

const data = loadData(); 
const layout = getLayout();
changeLayout(layout);
const inputElement = document.querySelector(`#grid-${layout}`);
inputElement.setAttribute('checked','checked')

console.log('data is', data, 'layout is', layout);

data.forEach(renderElement);

const generatedExample = {
  id: '1',
  type: 'h1', // h2 h3 p img
  content: 'Это пример блока H1', // содержимое блока
  container: 'header', // content footer
}

/**
 * Рендерим блок на основе данных и вставляем в соответствующий контейнер документа
 */
function renderElement(block) {
  // 1. Сгенерировать шаблон
  const templateElement = document.querySelector('.' + block.type + '-template').cloneNode(true);
  const contentElement = templateElement.querySelector('.template-content');
  
  // 2. Из шаблона сгенерировать DOM елемент
  if (block.type === 'img') {
    contentElement.src = block.content;
  } else {
    contentElement.innerText = block.content;
  }

  const divElement = templateElement.firstElementChild;
  divElement.dataset.id = block.id;
  
  // 3. Вставить элемент в контейнер
  const containerElement = document.querySelector('.' + block.container + '__elements-wrapper');
  containerElement.append(divElement);
  divElement.querySelector('.delete-btn').addEventListener('click', buttonDeletehandler);
  divElement.querySelector('.template-content').addEventListener('dblclick', editContentHandler, true);
  
  if (block.container.includes('content')) {
    containerElement.parentElement.classList.remove('content--empty');
  } else {
    containerElement.parentElement.classList.remove(block.container + '--empty');
  }
}

// 1. Выбрать все элементы-кнопки удаления
// 2. Повесит обработчик клик по этому элементу
// 3. В обработчике удалить соответствующий

function buttonDeletehandler(evt) {
  const element = evt.target.parentNode;
  const id = element.dataset.id;
  const blockIndex = data.findIndex(item => item.id == id);
  const block = data[blockIndex];

  const wrapper = element.parentNode;
  element.remove();
  if (wrapper.childNodes.length === 0) {
    if (block.container.includes('content')) {
      wrapper.parentElement.classList.add('content--empty');
    } else {
      wrapper.parentElement.classList.add(block.container + '--empty');
    }
  }

  data.splice(blockIndex,1);
  saveData(data);
}
    
// 1. Добавить обработчик клика на элемент
// 2. При вызове обработчика взять контент элемента
// 3. Изменить контент на новый

const mainContainerElement = document.querySelector('.container')
const contentElements = mainContainerElement.querySelectorAll('.template-content')

function editContentHandler(evt){
  const editedElement = evt.target;
  const id = editedElement.parentNode.dataset.id;
  const blockIndex = data.findIndex(item => item.id == id);
  const block = data[blockIndex];
  
  let currentValue = '';
  
  if (editedElement.tagName === 'IMG') {
    currentValue = editedElement.src;
  } else {
    currentValue = editedElement.innerText;

  }

  const newValue = prompt('Вы хотите изменить значение?', currentValue);

  if(newValue){
    if(editedElement.tagName === 'IMG'){
      editedElement.src = newValue;
    } else {
      editedElement.innerText = newValue;
    }
      block.content = newValue;
    
  }  
  saveData(data);  
}

contentElements.forEach(element => {
  element.addEventListener('dblclick', editContentHandler, true);
})

  const addBtnElements = document.querySelectorAll('.add-btn');
  function showAddMenuHandler(evt){
    const parentElement = evt.currentTarget.parentNode;
    const addMenuElement = parentElement.querySelector('.choose-elem');
    addMenuElement.classList.toggle('hidden');
  }
  
  addBtnElements.forEach(item => item.addEventListener('click', showAddMenuHandler));

  const chooseBtnElements = document.querySelectorAll('.choose-elem__btn');
  function addElementHandler(evt){
    const clickedBtn = evt.target;

    const block = {
      id: getRandomNumber(1000000),
      type: clickedBtn.dataset.type, 
      content: clickedBtn.dataset.type === 'img' ? 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg' : clickedBtn.dataset.type, 
      container: clickedBtn.dataset.container, 
    }
    renderElement(block);
    data.push(block);
    saveData(data);
  }

  chooseBtnElements.forEach(item => item.addEventListener('click', addElementHandler))

//Реализация переклчения сетки сайта
  document.querySelector('.grid-select').addEventListener('change', changeLayoutHandler);

  function changeLayoutHandler(evt){
    const layout = evt.target.value;
    changeLayout(layout)
  } 

  function changeLayout(layout){
    const layoutElement = document.querySelector('.layout');
    layoutElement.classList.remove('layout--landing');
    layoutElement.classList.remove('layout--blog');
    layoutElement.classList.remove('layout--shop');
    layoutElement.classList.add(`layout--${layout}`);
    setLayout(layout);
  }
  //Реализация сохранения состояния
  function saveData(data){
    console.log('saveData', data)
    window.localStorage.setItem('data', JSON.stringify(data))

  }

  function loadData(){
    const data = JSON.parse(window.localStorage.getItem('data'));

    console.log('loadData', data);
    return data;
  }
  function setLayout(layout){
    localStorage.setItem('LayoutType', layout)
  }
  function getLayout(){
    return localStorage.getItem('LayoutType')
  }
  
  












