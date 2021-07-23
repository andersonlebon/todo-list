import './sass/app.scss';
import Data from './app/data';
import { addDrogClass, getDragElementAfter } from './app/dragDrop';
import { markAsDone, addData } from './app/completTask';
import updateTitle, { DeleteTask, showTexEditor } from './app/update';

const list = document.querySelector('.list');
const addIcon = document.querySelector('.add-icon');
const addTaskInput = document.querySelector('.add-taskInput input');

const allData = Data.getDataAll();
let index = 0;
if (allData !== null) {
  allData.forEach((adata) => {
    adata.index = index;
    index += 1;
  });
}
Data.storeData(allData);
Data.displayTask(list);
const listItems = document.querySelectorAll('.draggable');
const listItemsCheck = document.querySelectorAll('.draggable .ckeck-btn');

addDrogClass(listItems);
markAsDone(listItemsCheck);

listItems.forEach((item) => {
  item.addEventListener('click', () => {
    // updateTitle(item);
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
  const listItemsCheck = document.querySelectorAll('.draggable .ckeck-btn');
  const saveIcons = document.querySelectorAll('.save-text');
  const texts = document.querySelectorAll('.plus');
  const DeleteIcons = document.querySelectorAll('.delete');
  DeleteTask(DeleteIcons, list);

  updateTitle(saveIcons, list);
  showTexEditor(texts);
  addDrogClass(listItems);
  markAsDone(listItemsCheck);
});

const texts = document.querySelectorAll('.plus');
showTexEditor(texts);

const saveIcons = document.querySelectorAll('.save-text');
updateTitle(saveIcons, list);
