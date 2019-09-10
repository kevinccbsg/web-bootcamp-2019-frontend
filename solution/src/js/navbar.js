import { renderDOMShows } from './shows.js';
import storage from './storage.js';

const { setItem, getItem } = storage('cookieStorage');

const searchForm = 
  document.querySelector('#search-form');
const searchInput =
  document.querySelector('.input.search');

searchInput.value = getItem('search');

searchForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  // console.log(searchForm.checkValidity());
  // console.log(searchInput.validity);
  // console.log(searchInput.dataset.patternMismatch);
  if (searchInput.validity.valid) {
    // traer shows!!!
    setItem('search', searchInput.value);
    renderDOMShows(searchInput.value);
  }
});

