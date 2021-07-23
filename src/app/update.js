import { markAsDone } from './completTask';
import Data from './data';

export function showTexEditor(texts) {
  texts.forEach((text) => {
    text.addEventListener('click', () => {
      const modify = text.parentElement.querySelector('.modify-task');
      modify.classList.add('d-flex');
      modify.classList.add('justify-content-between');
      modify.classList.remove('d-none');
    });
  });
}

export default function updateTitle(saveIcons, list) {
  saveIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const texts = document.querySelectorAll('.plus');
      showTexEditor(texts);
      const modifyTask = icon.parentElement;
      console.log(modifyTask.parentElement);

      const input = modifyTask.parentElement.querySelector('input');
      const li = modifyTask.parentElement.parentElement;
      const task = Data.getData(li.id);
      task.description = input.value;
      console.log(task);
      Data.updateTasks(task);
      const addTask = list.querySelector('.add-taskInput');
      const title = list.querySelector('.title');
      list.innerHTML = '';
      list.appendChild(title);
      list.appendChild(addTask);
      Data.displayTask(list);
      const listItemsCheck = document.querySelectorAll('.draggable .ckeck-btn');
      markAsDone(listItemsCheck);
      modifyTask.parentElement.classList.remove('d-flex');
      modifyTask.parentElement.classList.add('d-none');
    });
  });
}

export function DeleteTask(DeleteIcons, list) {
  DeleteIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const modifyTask = icon.parentElement;
      const li = modifyTask.parentElement.parentElement;
      const task = Data.getData(li.id);
      const allTasks = Data.getDataAll();
      allTasks.splice(li.id, 1);
      console.log(task);
      Data.storeData(allTasks);
      const addTask = list.querySelector('.add-taskInput');
      const title = list.querySelector('.title');
      list.innerHTML = '';
      list.appendChild(title);
      list.appendChild(addTask);
      Data.displayTask(allTasks);
      const listItemsCheck = document.querySelectorAll('.draggable .ckeck-btn');
      markAsDone(listItemsCheck);
      modifyTask.parentElement.classList.remove('d-flex');
      modifyTask.parentElement.classList.add('d-none');
    });
  });
}
