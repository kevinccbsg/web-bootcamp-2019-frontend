import api from './api.js';

const QUOTES_API = 'https://quotes-api-keepcoding.herokuapp.com/api/v1';

const { createQuote } = api(QUOTES_API);
// response -> { quote, date }
export const quoteTemplate = ({ quote, date }) => `
  <div class="list-item">
    <p>${quote}</p>
    <span>${date}</span>
  </div>
`;

const addQuoteListener = id => {
  const quotesForm = document.querySelector('#quote-form');
  const quotesInput = document.querySelector('#quote');
  const quotesList = document.querySelector('#quoteList');

  quotesForm.addEventListener('submit', async evt => {
    evt.preventDefault();
    try {
      if (quotesInput.validity.valid) {
        // const id = window.location.pathname.split('/detail/')[1];
        const response = await createQuote(id, quotesInput.value);
        quotesList.innerHTML += quoteTemplate(response);
        // 1. Caso :)
        // {"id":"1","quote":"comentario kevin","date":"2019-09-10T19:34:24.817Z"}
        // pintar(response))
        // 2.Caso :(
        // { "success": true }
        // pintar(quotesInput.value))
        // 3. Caso
        // const detail = await getQuote(id);
        // pintar(detail))
      }
    } catch (err) {
      console.error(err);
      // handleError();
    }
  });
};

export default addQuoteListener;
