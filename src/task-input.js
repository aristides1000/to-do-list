/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import { loadDataLocalStorage, saveDataLocalStorage } from './local-storage.js';
import { displayTasks } from './display-task.js';

function inputTask(ul, taskInput, i, activityTwo) {
  loadDataLocalStorage();
  activityTwo[i].description = taskInput.value;
  saveDataLocalStorage(activityTwo);
  displayTasks(ul);
}

export { inputTask };