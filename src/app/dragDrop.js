export function sortTaskByIndex(tasks) {
  return tasks.sort((a, b) => a.index - b.index);
}

export function getDragElementAfter(container, y) {
  const dragElements = [
    ...container.querySelectorAll('.draggable:not(.dragging)'),
  ];
  return dragElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }
      return closest;
    },
    { offset: Number.NEGATIVE_INFINITY },
  ).element;
}

export function addDrogClass(listItems) {
  listItems.forEach((alist) => {
    alist.addEventListener('dragstart', () => {
      alist.classList.add('dragging');
    });

    alist.addEventListener('dragend', () => {
      alist.classList.remove('dragging');
    });
  });
}
