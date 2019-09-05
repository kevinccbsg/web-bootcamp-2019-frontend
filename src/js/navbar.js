
// console.log('navbar');
import { toggle } from './ui.js';
import { renderShowsDOM } from './shows.js';
// const { toggle: className } = require('./ui.js'); ()

const navbar = document.querySelector('#navbar');
const searchIcon = document.querySelector('#navbar-search');
const closeIcon = document.querySelector('#navbar-close');
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#navbar .input.search');

const handleNavBar = toggle(navbar);

searchIcon.addEventListener('click', () => (
  handleNavBar('no-search', 'search')
));


closeIcon.addEventListener('click', () => {
  toggle(navbar)('search', 'no-search');
});

searchForm.addEventListener('submit', evt => {
  evt.preventDefault();
  if (searchInput.validity.valid) {
    // render shows
    renderShowsDOM(searchInput.value);
  }
});

