/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import _, { delay, slice } from 'lodash';
import './style.css';

import { displayTasks } from './display-task.js';
import { checked, textDecorationChecked, changeState } from './checked.js';
import { addTask, deleteTask, deleteAll } from './add-and-remove.js';

import { saveDataLocalStorage, loadDataLocalStorage } from './local-storage.js';

const ul = document.querySelector('.task-list');

const addNewDescription = document.getElementById('addNewDescription');
const inputNewDescription = document.getElementById('inputNewDescription');

addNewDescription.addEventListener('click', () => {
  let activities = loadDataLocalStorage();
  if (inputNewDescription.value === '') {
    return;
  }
  if (activities.findIndex(activity => activity.description === inputNewDescription.value) !== -1) {
    return;
  }
  activities = addTask(activities, inputNewDescription.value);
  saveDataLocalStorage(activities);
  inputNewDescription.value = '';
  displayTasks(ul);
});

inputNewDescription.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addNewDescription.click();
  }
});

const clearAllCompleted = document.getElementById('clearAllCompleted');

clearAllCompleted.addEventListener('click', () => {
  let activities = loadDataLocalStorage();
  activities = deleteAll(activities);
  saveDataLocalStorage(activities);
  displayTasks(ul);
});

displayTasks(ul);
