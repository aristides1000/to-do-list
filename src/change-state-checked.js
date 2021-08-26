/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

function changeStateChecked(activities, i) {
  if (activities[i].completed) {
    activities[i].completed = false;
  } else {
    activities[i].completed = true;
  }
}

export { changeStateChecked };