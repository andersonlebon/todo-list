export function markAsDone(listItems) {
  listItems.forEach((alist) => {
    let check = true;
    alist.addEventListener('click', () => {
      const input = alist.querySelector('input');
      input.checked = check;
      if (input.checked) {
        alist.classList.add('done');
      } else {
        alist.classList.remove('done');
      }
      check = !check;
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
  const addTask = list.querySelector('.add-task');
  const title = list.querySelector('.title');

  list.innerHTML = '';
  list.appendChild(title);
  list.appendChild(addTask);
}
