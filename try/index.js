const tasks = [
  {
    description: 'Attend morning session',
    completed: false,
    index: 0,
  },
  {
    description: 'lanch breack',
    completed: false,
    index: 1,
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
let listItems;

class Data {
  static getDataAll() {
    return tasks;
  }

  static getData(index) {
    const allData = Data.getDataAll();
    return allData.filter((adata) => adata.index === index)[0];
  }

  static displayTask(container) {
    const allTasks = Data.getDataAll();
    allTasks.forEach((atask) => {
      const li = document.createElement('li');
      li.draggable = true;
      li.className = 'list-group-item d-flex draggable';
      li.innerHTML = `<input class="form-check-input ckeck-btn ml-auto" value="checked" type="checkbox" id="check">
      <div class="pl-3">${atask.description}</div > <span class="justify-self-end mr-auto"> <i class="fa fa-ellipsis-v"></i></span>
      `;
      container.appendChild(li);
    });
    listItems = document.querySelectorAll('.draggable');
    return container;
  }
}
const list = document.querySelector('.list');
Data.displayTask(list);

console.log(listItems);

listItems.forEach((alist) => {
  alist.addEventListener('dragstart', () => {
    alist.classList.add('dragging');
    console.log('drag');
  });

  alist.addEventListener('dragend', () => {
    alist.classList.remove('dragging');
    console.log('drag end');
  });
});

list.addEventListener('dragover', () => {
  console.log('drags over');
  const drag = documen.querySelector('.dragging');
});
