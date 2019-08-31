import { renderDOMShows } from './shows.js';
import { renderDetail } from './detail.js';
import { hideFilter } from './ui.js';

let store = {
  shows: [],
};

page('/', () => {
  console.log('Load index');
  renderDOMShows();
})
page('/detail/:id', (ctx, next) => {
  const { params } = ctx;
  hideFilter();
  renderDetail(ctx.params.id);
});

page();