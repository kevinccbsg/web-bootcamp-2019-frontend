import { renderDOMShows } from './shows.js';
import { renderDetail } from './detail.js';
import { handleFilter, handleForm } from './ui.js';
import addQuoteListeners from './quotesForm.js';

let store = {
  shows: [],
};

page('/', () => {
  console.log('Load index');
  handleFilter('block');
  handleForm('none');
  renderDOMShows();
})
page('/detail/:id', (ctx, next) => {
  handleFilter('none');
  handleForm('block');
  renderDetail(ctx.params.id);
  next();
}, ctx => {
  addQuoteListeners(ctx.params.id);
});

page();