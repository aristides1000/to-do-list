import _ from 'lodash';
import './style.css';

const ul = document.querySelector('.task-list');

const activities = [{ description: 'example 1', completed: false, index: 0 }, { description: 'example 2', completed: false, index: 1 }, { description: 'example 3', completed: false, index: 2 }];

for (let i = 0; i < activities.length; i++) {
  const li = document.createElement('li');
  li.innerHTML = `<li class="border p-3 d-flex justify-content-between" id="${activities[i].index}">
  <div class="d-inline">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked="${activities[i].completed}">
    <input type="text" class="border-0 onfocus-border-none ps-2 w-75" value="${activities[i].description}">
  </div>
  <a href="#" class="color-text-black"><ion-icon name="ellipsis-vertical"></ion-icon></a>
</li>`;

  ul.appendChild(li);

}
