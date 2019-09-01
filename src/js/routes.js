import { renderDOMShows } from './shows.js';
import { renderDetail } from './detail.js';
import { handleFilter, handleForm, renderLoader } from './ui.js';
import addQuoteListeners from './quotesForm.js';

page('/', async (_, next) => {
  console.log('Load index');
  renderLoader('hide', 'show');
  handleFilter('no-filter', 'filter');
  handleForm('none');
  await renderDOMShows();
  next();
}, () => {
  renderLoader('show', 'hide');
})
page('/detail/:id', async (ctx, next) => {
  renderLoader('hide', 'show');
  handleFilter('filter', 'no-filter');
  handleForm('block');
  await renderDetail(ctx.params.id);
  next();
}, ctx => {
  renderLoader('show', 'hide');
  addQuoteListeners(ctx.params.id);
});

page();