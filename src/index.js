import './sass/app.scss';
import Data from './app/data';
import 'fontawesome';
import {
  sortTaskByIndex,
  addDrogClass,
  getDragElementAfter,
} from './app/dragDrop.js';
import { markAsDone, addData } from './app/completTask.js';

const list = document.querySelector('.list');
const addIcon = document.querySelector('.add-icon');
const addTaskInput = document.querySelector('.add-taskInput input');

Data.displayTask(list);
const listItems = document.querySelectorAll('.draggable');

addDrogClass(listItems);
markAsDone(listItems);

list.addEventListener('dragover', (e) => {
  e.preventDefault();
  const todos = sortTaskByIndex(Data.getDataAll());
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
  addDrogClass(listItems);
  markAsDone(listItems);
});
