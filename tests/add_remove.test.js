import { addData } from '../src/app/completTask';
import { deleteData, editTask } from '../src/app/update';
import documents, { Data } from './mocks';

describe('Add and remove tasks form the list', () => {
  it('shoul add an element', () => {
    documents();
    const list = document.querySelector('.list');
    addData('hello', list, Data);
    addData('hello2', list, Data);
    const allList = document.querySelectorAll('.list li');

    expect(allList).toHaveLength(4);
  });

  it('shoul delete an  element', () => {
    documents();
    const list = document.querySelector('.list');
    addData('hello', list, Data);
    const DeleteIcons = document.querySelectorAll('.delete');
    deleteData(DeleteIcons[0], list, Data);
    const allList = document.querySelectorAll('.list li');

    expect(allList).toHaveLength(4);
  });
});

describe('Update the task', () => {
  it('Should edit the task description', () => {
    documents();
    localStorage.clear('tasks');
    const list = document.querySelector('.list');
    addData('hello', list, Data);
    const saveIcons = document.querySelector('.save-text');
    const testInput = 'Input test descriptionhhhhh';
    editTask(saveIcons, list, testInput, Data);
    const allList = document.querySelectorAll('.list li');
    const data = Data.getData(allList[0].id);
    expect(data.description).toBe(testInput);
  });
});
