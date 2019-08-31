
let store = {
  shows: [],
};

page('/', () => {
  console.log('Load index');
})
page('/detail/:id', (ctx, next) => {
  const { params } = ctx;
  console.log(ctx);
  store = { ...store, shows: [1, 2, 3] };
  next();
}, ctx => {
  console.log(store);
  console.log('next one');
})
page();