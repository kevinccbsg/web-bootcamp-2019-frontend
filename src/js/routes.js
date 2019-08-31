page('/', () => {
  console.log('wat');
})
page('/detail/:id', ctx => {
  console.log(ctx);
})
page();