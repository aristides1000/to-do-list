/* eslint-disable linebreak-style */
function addTask(activities, description) {
  const newActivity = { description, index: activities.length, completed: false };
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