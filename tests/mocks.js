/* eslint-disable max-classes-per-file */

class LocalStorage {
  constructor() {
    this.storege = {
      tasks: [],
    };
  }

  getItem(key) {
    return this.storege[key];
  }

  setItem(key, newtask) {
    this.storege[key] = newtask;
  }

  clear(key) {
    this.storege[key] = [];
  }
}

const localStorage = new LocalStorage();
const documents = () => {
  document.body.innerHTML = `
    <ul class="list add-task list-group border border-primary">
    <li class="list-group-item title">
    Today's to do <i class="fa fa-refresh" aria-hidden="true"></i>
    </li>
    <li class="list-group-item add-taskInput">
    <input class="input-add" type="text" placeholder="Add to your list..."/>
    <i class="fa fa-plus-circle add-icon" aria-hidden="true"></i>
    </li>
    </ul>
    
    `;
  return document;
};

export class Data {
  static getDataAll() {
    return localStorage.getItem('tasks');
  }

  static storeData(tasks) {
    localStorage.setItem('tasks', tasks);
  }

  static getData(index) {
    const allData = Data.getDataAll();
    // eslint-disable-next-line eqeqeq
    return allData.filter((adata) => adata.index == index)[0];
  }

  static displayTask(container) {
    const allTasks = Data.getDataAll() || [];

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
      inputContainer.innerHTML = `<input class="input-mod" type="text" placeholder="Modify task..."/>
                                  <div class="d-flex justify-content-end align-items-center"> 
                                  <span class="save-text"><i class="fa fa-check-circle " ></i></span>
                                  <span class="delete"><i class="fa fa-trash"></i></span>
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
  }
}

export default documents;

Object.defineProperty(window, 'localStorage', { value: localStorage });
