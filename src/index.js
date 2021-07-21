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
const addTaskInput = document.querySelector('.add-task input');

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
    drag.id = todos.length;
  } else {
    list.insertBefore(drag, elementPrevious);
    drag.id = elementPrevious.id + 1;
  }
  console.log(elementPrevious.id);
});

addIcon.addEventListener('click', () => {
  addData(addTaskInput, list, Data);
  Data.displayTask(list);
});
