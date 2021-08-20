/* eslint-disable linebreak-style */
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

function deleteAll(activities) {
  const result = activities.filter((activity) => (activity.completed === false));
  return result;
}

export { addTask, deleteTask, deleteAll };