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

export default class Data {
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
      li.className = 'list-group-item d-flex justify-content-between ';
      li.innerHTML = `<div for="check">${atask.description}</div>
  <input class="form-check-input ml-auto" type="checkbox" value="" id="check">
      `;
      container.appendChild(li);
    });
    return container;
  }
}
