import { sortTaskByIndex } from './dragDrop.js';
import { addData } from './completTask.js';

const tasks = [
  {
    description: 'Attend morning session',
    completed: false,
    index: 0,
  },
  {
    description: 'lanch breack',
    completed: false,
    index: 6,
  },
  {
    description: 'afternoon session',
    completed: true,
    index: 2,
  },
  {
    description: 'evening session',
    completed: false,
    index: 3,
  },
];

export default class Data {
  static getDataAll() {
    return tasks;
  }

  static getData(index) {
    const allData = sortTaskByIndex(Data.getDataAll());
    return allData.filter((adata) => adata.index === index)[0];
  }

  static displayTask(container) {
    const allTasks = sortTaskByIndex(Data.getDataAll());
    console.log(allTasks);
    allTasks.forEach((atask) => {
      const li = document.createElement('li');
      li.draggable = true;
      li.id = atask.index;
      const check = atask.completed ? 'checked' : 'unchecked';
      li.className = 'list-group-item d-flex draggable';
      li.innerHTML = `<input class="form-check-input ckeck-btn ml-auto" ${check} type="checkbox" id="check">
      <div class="pl-3">${atask.description}</div > <span class="justify-self-end mr-auto"> <i class="fa fa-ellipsis-v"></i></span>
      `;
      const input = li.querySelector('input');
      if (input.checked) {
        li.classList.add('done');
      } else {
        li.classList.remove('done');
      }
      container.appendChild(li);
    });
  }
}
