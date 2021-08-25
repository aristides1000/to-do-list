/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
import { displayTasks } from './display-task.js';
import { saveDataLocalStorage } from './local-storage.js';

function checked(activities, i) {
  let checked = '';

  if (activities[i].completed) {
    checked = 'checked';
  }

  return checked;
}

function textDecorationChecked(activities, i, taskInput) {
  if (activities[i].completed) {
    taskInput.classList.add('text-decoration-line-through');
  } else {
    taskInput.classList.remove('text-decoration-line-through');
  }
}

function changeState(activities, i, checkTask) {
  checkTask.addEventListener('change', () => {
    if (activities[i].completed) {
      activities[i].completed = false;
    } else {
      activities[i].completed = true;
    }

    saveDataLocalStorage(activities);
    displayTasks(activities);
  });
}

export { checked, textDecorationChecked, changeState };
