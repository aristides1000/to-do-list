/**
* @jest-environment jsdom
*/
/* eslint-disable linebreak-style */
import { addTask, deleteTask, deleteAll } from '../src/add-and-remove.js';
import { displayTasks } from '../src/display-task.js';
import { saveDataLocalStorage, loadDataLocalStorage } from '../src/local-storage.js';

document.body.innerHTML = `
<li class="task-list">

</li>
`;

const ul = document.querySelector('.task-list');

describe('add and remove Task', () => {
  it('Add Task', () => {
    let array = [];
    array = loadDataLocalStorage();
    array = addTask(array, 'test1');
    array = addTask(array, 'test2');
    saveDataLocalStorage(array);
    displayTasks(ul);
    expect(ul.childNodes).toHaveLength(2);
  });

  it('Delete Task', () => {
    let array = [];
    array = loadDataLocalStorage();
    array = deleteTask(array, 1);
    saveDataLocalStorage(array);
    displayTasks(ul);
    expect(ul.childNodes).toHaveLength(1);
  });

  it('Delete All Task', () => {
    let array = [];
    array = loadDataLocalStorage();
    array = addTask(array, 'test3');
    array = addTask(array, 'test4');
    array = deleteAll(array);
    saveDataLocalStorage(array);
    displayTasks(ul);
    expect(ul.childNodes).toHaveLength(3);
  });
});