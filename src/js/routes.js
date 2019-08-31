import { renderDOMShows } from './shows.js';
import { renderDetail } from './detail.js';
import { handleFilter } from './ui.js';

let store = {
  shows: [],
};

page('/', () => {
  console.log('Load index');
  handleFilter('block');
  renderDOMShows();
})
page('/detail/:id', (ctx, next) => {
  const { params } = ctx;
  handleFilter('none');
  renderDetail(ctx.params.id);
});

page();