import Data from './data';

export function markAsDone(listItems) {
  let clearCompleted;

  listItems.forEach((alist) => {
    let check = true;
    alist.addEventListener('click', () => {
      const input = alist.querySelector('input');
      input.checked = check;
      if (input.checked) {
        alist.classList.add('done');
        const allTasks = Data.getDataAll() || [];
        // console.log(allTasks);
        const completData = Data.getData(alist.id);
        completData.completed = true;
        allTasks.splice(alist.id, 1, completData);
        Data.storeData(allTasks);
        clearCompleted = true;
      } else {
        alist.classList.remove('done');
        clearCompleted = false;
        const allTasks = Data.getDataAll() || [];
        // console.log(allTasks);
        const completData = Data.getData(alist.id);
        completData.completed = false;
        allTasks.splice(alist.id, 1, completData);
        Data.storeData(allTasks);
      }
      check = !check;
      const list = alist.parentElement;

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

      const inputs = alist.parentElement.querySelectorAll('.ckeck-btn');
      inputs.forEach((element) => {
        if (element.checked) {
          clearCompleted = true;
        }
      });

      clear = list.querySelector('.clearMarked');
      if (!clearCompleted) {
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
