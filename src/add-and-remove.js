import { reorderIndex } from "./reorder-index";

/* eslint-disable linebreak-style */
function addTask(activities, description) {
  const newActivity = { description, index: activities.length, completed: false };
  activities.push(newActivity);
  return activities;
}

function deleteTask(activities, index) {
  activities.splice(index, 1);
  reorderIndex(activities);
  return activities;
}

function deleteAll(activities) {
  const result = activities.filter((activity) => (activity.completed === false));
  reorderIndex(result);
  return result;
}

export { addTask, deleteTask, deleteAll };