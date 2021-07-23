import { sortTaskByIndex } from './dragDrop';
import updateTitle, { showTexEditor } from './update';

export const tasks = [
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
    completed: false,
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
    return JSON.parse(localStorage.getItem('tasks'));
  }

  static storeData(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static getData(index) {
    const allData = sortTaskByIndex(Data.getDataAll());
    // eslint-disable-next-line eqeqeq
    return allData.filter((adata) => adata.index == index)[0];
  }

  static updateTasks(element) {
    const allTasks = Data.getDataAll() || [];
    let completData = Data.getData(element.id);
    completData = element;
    allTasks.splice(element.id, 1, completData);
    Data.storeData(allTasks);
  }

  static displayTask(container) {
    const allTasks = Data.getDataAll() || [];
    if (allTasks !== null) sortTaskByIndex(allTasks);

    allTasks.forEach((atask) => {
      const li = document.createElement('li');
      li.draggable = true;
      li.id = atask.index;
      const check = atask.completed ? 'checked' : 'unchecked';
      li.className = 'list-group-item d-flex draggable';
      li.innerHTML = `<input class="form-check-input ckeck-btn ml-auto" ${check} type="checkbox" id="check">
      <div class="pl-3 text">${atask.description}</div > 
      <span class="justify-self-end mr-auto plus"> <i class="fa fa-ellipsis-v"></i></span>
      `;
      const inputContainer = document.createElement('div');
      inputContainer.innerHTML = `<input class="" type="text" placeholder="Modify task..."/>
                                  <div class="d-flex justify-content-end align-items-center"> 
                                  <span class="save-text"><i class="fa fa-check-circle " ></i></span>
                                  <span><i class="fa fa-trash"></i></span>
                                  </div>`;
      inputContainer.className = 'modify-task d-none';
      const input = li.querySelector('input');
      li.appendChild(inputContainer);
      if (input.checked) {
        li.classList.add('done');
      } else {
        li.classList.remove('done');
      }
      container.appendChild(li);
    });
    const texts = document.querySelectorAll('.plus');
    showTexEditor(texts);
    const saveIcons = document.querySelectorAll('.save-text');
    const list = document.querySelector('.list');
    updateTitle(saveIcons, list);
  }
}
