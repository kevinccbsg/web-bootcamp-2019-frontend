import api from './api.js';
// import './js/quoteForm';

const QUOTES_API = 'https://quotes-api-keepcoding.herokuapp.com/api/v1';

const { getShowsDetail } = api();
const { getQuotes } = api(QUOTES_API);

const quoteTemplate = ({ quote }) => `
  <div class="list-item">
    <p>${quote}</p>
  </div>
`;

const renderQuotes = newQuotes => {
  let quotesTemplate = '<div>There is no quotes</div>';
  if (newQuotes.length > 0) {
    quotesTemplate = newQuotes.map(quote => quoteTemplate(quote)).join('');
  }
  const quoteElement = document.getElementById('quoteList');
  quoteElement.innerHTML = quotesTemplate;
};

const detailTemplate = ({ id, name, summary, image }) => `
  <div class="detail-section">
    <header id="${id}">
      <div class="title-section">
        <h1>${name}</h1>
      </div>
      <div class="image-container">
        <img src="${image ? image.original : 'defaultImage'}" />
      </div>
    </header>
    <div class="content">
      ${summary}
    </div>
  </div>
`;

export const renderDetail = async id => {
  try {
    const [show, quotes] = await Promise.all([getShowsDetail(id), getQuotes(id)]);
    renderQuotes(quotes);
    const showHTML = detailTemplate(show);
    document.querySelector('main').innerHTML = showHTML;
  } catch (e) {
    console.error(e);
  }
};
