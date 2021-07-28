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
    this.storege[key].push(newtask);
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
    <li class="list-group-itemadd-taskInput">
    <input class="input-add" type="text" placeholder="Add to your list..."/>
    <i class="fa fa-plus-circle add-icon" aria-hidden="true"></i>
    </li>
    </ul>
    
    `;
  return document;
};

// export class Data {
//   static getDataAll() {
//     return JSON.parse(localStorage.getItem('tasks'));
//   }

//   static storeData(tasks) {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }
// }

export default documents;

Object.defineProperty(window, 'localStorage', { value: localStorage });
