import api from './api.js';
// import './js/quoteForm';

const { getShowsDetail } = api();

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
    const show = await getShowsDetail(id);
    const showHTML = detailTemplate(show);
    document.querySelector('main').innerHTML = showHTML;
  } catch (e) {
    console.error(e);
  }
};
