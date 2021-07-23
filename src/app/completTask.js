/* eslint-disable import/no-cycle */
import Data from './data';

export function markAsDone(listItems) {
  let clearCompleted;
  listItems.forEach((alist) => {
    let check = true;
    const listParent = alist.parentElement;
    alist.addEventListener('click', () => {
      alist.checked = check;
      if (alist.checked) {
        listParent.classList.add('done');
        const allTasks = Data.getDataAll() || [];
        const completData = Data.getData(listParent.id);
        completData.completed = true;
        allTasks.splice(listParent.id, 1, completData);
        Data.storeData(allTasks);
        clearCompleted = true;
      } else {
        listParent.classList.remove('done');
        clearCompleted = false;
        const allTasks = Data.getDataAll() || [];
        const completData = Data.getData(listParent.id);
        completData.completed = false;
        allTasks.splice(listParent.id, 1, completData);
        Data.storeData(allTasks);
      }
      check = !check;
      const list = listParent.parentElement;
      let clear = list.querySelector('.clearMarked');
      if (clear === null) {
        const li = document.createElement('li');
        li.className = 'clearMarked list-group-item  text-center';
        li.innerHTML = 'Clear all Completed';
        list.appendChild(li);
        li.addEventListener('click', () => {
          const completed = list.querySelectorAll('.done');
          let allTasks = Data.getDataAll();
          completed.forEach((complet) => {
            // eslint-disable-next-line eqeqeq
            allTasks = allTasks.filter((task) => task.index != complet.id);
            list.removeChild(complet);
          });
          localStorage.setItem('tasks', JSON.stringify(allTasks));
        });
      }

      const inputs = listParent.parentElement.querySelectorAll('.ckeck-btn');
      inputs.forEach((element) => {
        if (element.checked) {
          clearCompleted = true;
        }
      });

      clear = document.querySelector('.none');
      if (!clearCompleted && clear == null) {
        const clear = list.querySelector('.clearMarked');
        list.removeChild(clear);
      }
      clearCompleted = false;
    });
  });
}

export function addData(inputTask, list, Data) {
  const tasks = Data.getDataAll() || [];
  const newTask = {
    description: inputTask,
    completed: false,
    index: tasks.length,
  };
  tasks.push(newTask);
  Data.storeData(tasks);
  const addTask = list.querySelector('.add-taskInput');
  const title = list.querySelector('.title');
  list.innerHTML = '';
  list.appendChild(title);
  list.appendChild(addTask);
}
