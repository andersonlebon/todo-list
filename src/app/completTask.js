import Data from './data';
export function markAsDone(listItems) {
  let clearCompleted;
  const inputs = listItems[0].parentElement.querySelectorAll('input');
  //   inputs.forEach((element) => {
  //     if (element.checked) {
  //       clearCompleted = true;
  //     } else {
  //       clearCompleted = false;
  //     }
  //   });
  listItems.forEach((alist) => {
    let check = true;
    alist.addEventListener('click', () => {
      const input = alist.querySelector('input');
      input.checked = check;
      if (input.checked) {
        alist.classList.add('done');
        clearCompleted = true;
      } else {
        alist.classList.remove('done');
        clearCompleted = false;
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
          completed.forEach((complet) => {
            list.removeChild(complet);
            const allTasks = Data.getDataAll();
            allTasks.splice(complet.id, 1);
            console.log(Data.getDataAll());
          });
          console.log(completed);
        });
      }
      const inputs = alist.parentElement.querySelectorAll('.ckeck-btn');
      inputs.forEach((element) => {
        if (element.checked) {
          clearCompleted = true;
        }
      });

      console.log(clearCompleted);
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
  const tasks = Data.getDataAll();
  const newTask = {
    description: inputTask,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  const addTask = list.querySelector('.add-taskInput');
  const title = list.querySelector('.title');
  console.log(addTask);
  list.innerHTML = '';
  list.appendChild(title);
  list.appendChild(addTask);
}
