import { addData } from '../src/app/completTask';
import Data from '../src/app/data';
import documents from './mocks';

test('shoul add element', () => {
  const DOM = documents();
  const list = document.querySelector('.list');
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const addTaskInput = document.querySelector('.add-taskInput input');
  addData(addTaskInput, list, Data);
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  //   const Ntasks = JSON.parse(localStorage.getItem('tasks'));
  const allTasks = JSON.parse(localStorage.getItem('tasks li'));

  expect(allTasks).toHaveLength(3);
});
