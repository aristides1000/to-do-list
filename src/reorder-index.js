/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
function reorderIndex(activities) {
  activities.filter((Obj, index) => {
    Obj.index = index;
    return true;
  });
}

export { reorderIndex };