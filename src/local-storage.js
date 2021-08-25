function saveDataLocalStorage(activities) {
  localStorage.setItem('activities', JSON.stringify(activities));
}

function loadDataLocalStorage() {
  const activities = [];

  return JSON.parse(localStorage.getItem('activities')) || activities;
}

export { saveDataLocalStorage, loadDataLocalStorage };