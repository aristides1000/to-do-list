/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import { checked, textDecorationChecked, changeState } from './checked.js';

const ul = document.querySelector('.task-list');

function saveDataLocalStorage(activities) {
  localStorage.setItem('activities', JSON.stringify(activities));
}

function loadDataLocalStorage() {
  const activities = [{ description: 'example 1', completed: true, index: 0 }, { description: 'example 2', completed: true, index: 1 }, { description: 'example 3', completed: false, index: 2 }];

  return JSON.parse(localStorage.getItem('activities')) || activities;
}

function displayTasks() {
  ul.innerHTML = '';
  const activities = loadDataLocalStorage();

  for (let i = 0; i < activities.length; i++) {
    const li = document.createElement('li');
    const checkIn = checked(activities, i);

    li.innerHTML = `<li class="border p-3 d-flex justify-content-between" id="${activities[i].index}">
    <div class="d-inline">
      <input class="form-check-input" type="checkbox" value="" id="checkTask${i}" ${checkIn}>
      <input type="text" class="border-0 onfocus-border-none ps-2 w-75" value="${activities[i].description}" id="taskInput${i}">
    </div>
    <a href="#" class="color-text-black"><ion-icon name="ellipsis-vertical"></ion-icon></a>
  </li>`;

    ul.appendChild(li);

    const taskInput = document.getElementById(`taskInput${i}`);

    textDecorationChecked(activities, i, taskInput);

    const checkTask = document.getElementById(`checkTask${i}`);

    changeState(activities, i, checkTask);
  }
}

displayTasks();

export { displayTasks, saveDataLocalStorage };
