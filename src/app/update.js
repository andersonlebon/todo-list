import Data from './data';

export default function updateTitle(saveIcons, list) {
  saveIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const modifyTask = icon.parentElement;
      const input = modifyTask.querySelector('input');
      const li = modifyTask.parentElement;
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
      modifyTask.classList.remove('d-flex');
      modifyTask.classList.add('d-none');
    });
  });
}

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
