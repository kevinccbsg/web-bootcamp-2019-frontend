console.log('Service worker');

self.addEventListener('fetch', function(event) {
  console.log(event);
});


self.addEventListener('install', function(event) {
  // Perform install steps
  console.log(event);
});
