import './sass/app.scss';
import Data from './app/data';
import 'fontawesome';
import { addDrogClass, getDragElementAfter } from './app/dragDrop';
import { markAsDone, addData } from './app/completTask';
import updateTitle from './app/update';
import { save } from 'fontawesome';

const list = document.querySelector('.list');
const addIcon = document.querySelector('.add-icon');
const addTaskInput = document.querySelector('.add-taskInput input');

Data.displayTask(list);
const listItems = document.querySelectorAll('.draggable');
const listItemsCheck = document.querySelectorAll('.draggable .ckeck-btn');

addDrogClass(listItems);
markAsDone(listItemsCheck);

listItems.forEach((item) => {
  item.addEventListener('click', () => {
    updateTitle(item);
  });
});

list.addEventListener('dragover', (e) => {
  e.preventDefault();
  const drag = document.querySelector('.dragging');
  const elementPrevious = getDragElementAfter(list, e.clientY);
  if (elementPrevious == null) {
    list.appendChild(drag);
  } else {
    elementPrevious.classList.add('previousDrag');
    list.insertBefore(drag, elementPrevious);
    elementPrevious.classList.remove('previousDrag');
  }
});

addIcon.addEventListener('click', () => {
  addData(addTaskInput.value, list, Data);
  Data.displayTask(list);
  const listItems = document.querySelectorAll('.draggable');
  const listItemsCheck = document.querySelectorAll('.draggable input');

  addDrogClass(listItems);
  markAsDone(listItemsCheck);
});

const texts = document.querySelectorAll('.text');
texts.forEach((text) => {
  text.addEventListener('click', () => {
    const modify = text.parentElement.querySelector('.modify-task');
    modify.classList.add('d-flex');
    modify.classList.add('justify-content-between');
    modify.classList.remove('d-none');
  });
});

const saveIcons = document.querySelectorAll('.save-text');

saveIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    const input = icon.parentElement.querySelector('input');
    console.log(input.value);
    icon.parentElement.classList.remove('d-flex');
    icon.parentElement.classList.add('d-none');
  });
});
