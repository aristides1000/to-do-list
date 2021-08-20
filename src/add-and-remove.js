function addTask(activities, description) {
  let newActivity = { description: description, index: activities.length, completed: false };
  activities.push(newActivity);
  return activities;
}

export { addTask };