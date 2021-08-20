import { saveDataLocalStorage, loadDataLocalStorage } from './index.js';

function addTask(activities, description) {
  let newActivity = { description: description, index: activities.length, completed: false };
  activities.push(newActivity);
  return activities;
}

function deleteTask(activities, index) {
  activities.splice(index, 1);
  return activities;
}

export { addTask, deleteTask };