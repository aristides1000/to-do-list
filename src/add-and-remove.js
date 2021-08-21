/* eslint-disable linebreak-style */
function addTask(activities, description) {
  const newActivity = { description, index: activities.length, completed: false };
  activities.push(newActivity);
  return activities;
}

function deleteTask(activities, index) {
  activities.splice(index, 1);
  activities = activities.filter((Obj, index) => {
    Obj.index = index;
    return true;
  });
  return activities;
}

function deleteAll(activities) {
  let result = activities.filter((activity) => (activity.completed === false));
  result = result.filter((Obj, index) => {
    Obj.index = index;
    return true;
  });
  return result;
}

export { addTask, deleteTask, deleteAll };