import { addData } from '../src/app/completTask';
import Data from '../src/app/data';
import documents from './mocks';

test('shoul add element', () => {
  const DOM = documents();
  localStorage.clear('tasks');
  const list = document.querySelector('.list');
  //   const tasks = JSON.parse(localStorage.getItem('tasks'));
  const addTaskInput = document.querySelector('.add-taskInput input');
  addData('hello', list, Data);
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  const Ntasks = localStorage.getItem('tasks');
  console.log(Ntasks);
  Data.displayTask(list);
  const allList = document.querySelectorAll('.list li');

  expect(allList).toHaveLength(3);
});
