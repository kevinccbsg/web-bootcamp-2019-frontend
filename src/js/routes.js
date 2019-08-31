import { renderDOMShows } from './shows.js';
import { renderDetail } from './detail.js';
import { handleFilter, handleForm } from './ui.js';

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
  const { params } = ctx;
  handleFilter('none');
  handleForm('block');
  renderDetail(ctx.params.id);
});

page();