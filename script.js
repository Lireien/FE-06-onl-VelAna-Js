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

const data = generateData(10); 

console.log('data is', data);

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
  
  containerElement.parentElement.classList.remove(block.container + '--empty');
}

// 1. Выбрать все элементы-кнопки удаления
// 2. Повесит обработчик клик по этому элементу
// 3. В обработчике удалить соответствующий

function buttonDeletehandler(evt) {
  const element = evt.target.parentNode;
  const id = element.dataset.id;
  const block = data.find(item => item.id == id);

  const wrapper = element.parentNode;
  element.remove();

  if (wrapper.childNodes.length === 0) {
    wrapper.parentNode.classList.add(`${block.container}--empty`)
  }
}
    
function addDeleteClickHandlers() {
  const deleteBtnElement = document.querySelectorAll('.delete-btn');
  deleteBtnElement.forEach(buttonElement => {
    buttonElement.addEventListener('click', buttonDeletehandler)
  })
}

addDeleteClickHandlers();

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
  contentElements.forEach(item => item.contentEditable="false");

  let currentValue = '';
  
  if (editedElement.tagName === 'IMG') {
    currentValue = editedElement.src;
  } else {
    currentValue = editedElement.innerText;

    editedElement.contentEditable="true";
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










