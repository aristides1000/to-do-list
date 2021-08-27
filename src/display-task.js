/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable import/no-self-import */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */

import { loadDataLocalStorage, saveDataLocalStorage } from './local-storage.js';
import { checked, textDecorationChecked, changeState } from './checked.js';
import { deleteTask } from './add-and-remove.js';
import { inputTask } from './task-input.js';

function displayTasks() {
  const ul = document.querySelector('.task-list');
  ul.innerHTML = '';
  const activities = loadDataLocalStorage();

  activities.forEach((activity, i) => {
    const li = document.createElement('li');
    const checkIn = checked(activities, activity.index);

    li.innerHTML = `<li class="border p-3 d-flex justify-content-between" id="${i}">
    <div class="d-inline">
      <input class="form-check-input" type="checkbox" value="" id="checkTask${i}" ${checkIn}>
      <input type="text" class="border-0 onfocus-border-none ps-2 w-75" value="${activities[i].description}" id="taskInput${i}">
    </div>
    <div>
      <a href="#" class="color-text-black" id="verticalPoints${i}"><ion-icon name="ellipsis-vertical"></ion-icon></a>
      <a href="#" class="color-text-black d-none" id="delete${i}"><ion-icon name="trash"></ion-icon></a>
    </div>
  </li>`;

    ul.appendChild(li);

    const taskInput = document.getElementById(`taskInput${i}`);

    taskInput.onchange = () => {
      const activityTwo = loadDataLocalStorage();
      activityTwo[i].description = taskInput.value;
      saveDataLocalStorage(activityTwo);
      displayTasks(ul);
    };

    textDecorationChecked(activities, i, taskInput);

    const checkTask = document.getElementById(`checkTask${i}`);

    changeState(activities, i, checkTask);

    const verticalPoints = document.getElementById(`verticalPoints${i}`);
    const trashCan = document.getElementById(`delete${i}`);

    const container = document.getElementById(i);

    taskInput.addEventListener('focus', () => {
      verticalPoints.classList.add('d-none');
      trashCan.classList.remove('d-none');
      container.classList.add('bg-warning');
      taskInput.classList.add('border-0', 'onfocus-border-none', 'bg-warning');
    });

    taskInput.addEventListener('focusout', () => {
      setTimeout(() => {
        verticalPoints.classList.remove('d-none');
        trashCan.classList.add('d-none');
        container.classList.remove('bg-warning');
        taskInput.classList.remove('bg-warning');
      }, 200);
    });

    trashCan.addEventListener('click', () => {
      let data = loadDataLocalStorage();
      data = deleteTask(activities, i);
      saveDataLocalStorage(data);
      displayTasks(ul);
    });
  });
}

export { displayTasks };
