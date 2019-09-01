import { renderDOMShows } from './shows.js';

const searchForm = 
  document.querySelector('#search-form');
const searchInput =
  document.querySelector('.input.search');

searchForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  // console.log(searchForm.checkValidity());
  // console.log(searchInput.validity);
  // console.log(searchInput.dataset.patternMismatch);
  if (searchInput.validity.valid) {
    // traer shows!!!
    renderDOMShows(searchInput.value);
  }
});

