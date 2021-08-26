/**
* @jest-environment jsdom
*/
/* eslint-disable linebreak-style */
import { addTask, deleteTask, deleteAll } from '../src/add-and-remove.js';
import { displayTasks } from '../src/display-task.js';
import { saveDataLocalStorage, loadDataLocalStorage } from '../src/local-storage.js';
import { inputTask } from '../src/task-input.js';
import { changeStateChecked } from '../src/change-state-checked.js';
import { reorderIndex } from '../src/reorder-index.js';

document.body.innerHTML = `
<li class="task-list">

</li>
`;

const ul = document.querySelector('.task-list');

describe('Edit input, updating and delete all completed', () => {
  it('editing the task description', () => {
    let array = [];
    array = loadDataLocalStorage();
    array = addTask(array, 'test1');
    array = addTask(array, 'test2');
    array[0].description = 'changed';
    displayTasks(array);
    const arrayChange = array[0].description;
    inputTask(ul, arrayChange, 0, array);
    array = loadDataLocalStorage();
    expect(arrayChange).toBe('changed');
  });

  it('updating an item\'s \'completed\' status', () => {
    let array = [];
    array = loadDataLocalStorage();
    array = addTask(array, 'test1');
    array = addTask(array, 'test2');
    changeStateChecked(array, 0);
    saveDataLocalStorage(array);
    const arrayChange = array[0].completed;
    expect(arrayChange).toBe(true);
  });

  it('updating an item\'s index value', () => {
    let array = [];
    array = loadDataLocalStorage();
    array = deleteTask(array, 1);
    reorderIndex(array);
    saveDataLocalStorage(array);
    displayTasks(ul);
    console.log(array);
    const arrayIndex = array[1].index;
    expect(arrayIndex).toBe(1);
  });

  it('Clear all completed', () => {
    let array = [];
    array = loadDataLocalStorage();
    array = addTask(array, 'test3');
    array = addTask(array, 'test4');
    array = deleteAll(array);
    saveDataLocalStorage(array);
    displayTasks(ul);
    expect(ul.childNodes).toHaveLength(4);
  });
});