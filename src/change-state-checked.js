/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import { saveDataLocalStorage } from './local-storage';
import { displayTasks } from './display-task.js';

function changeStateChecked(activities, i) {
  if (activities[i].completed) {
    activities[i].completed = false;
  } else {
    activities[i].completed = true;
  }
}

export { changeStateChecked };