import { links, containers, bookHeading } from './modules/variables.js';
import dateData from './modules/DateAndTime.js';
import BookStore from './modules/bookstore.js';

const hideAllContainers = () => {
  containers.forEach((container) => {
    container.style.display = 'none';
  });
};
const removeAllActiveLInks = () => {
  links.forEach((link) => {
    link.classList.remove('show--active--link');
  });
};

// Get date data from luxon.js
const dateElement = document.querySelector('.date');
dateElement.innerText = dateData;

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    const linkClass = e.currentTarget.classList[1];
    hideAllContainers();
    removeAllActiveLInks();
    e.target.classList.add('show--active--link');
    containers.forEach((container) => {
      if (linkClass === container.id) {
        if (container.id === 'bookList') {
          bookHeading.style.display = 'block';
        } else {
          bookHeading.style.display = 'none';
        }
        container.style.display = 'block';
      } else {
        container.style.display = 'none';
      }
    });
  });
});
window.addEventListener('DOMContentLoaded', () => {
  hideAllContainers();
  removeAllActiveLInks();
  containers[0].style.display = 'block';
  links[0].classList.add('show--active--link');
});

const bookStore = new BookStore();
