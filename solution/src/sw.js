/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log('Yay! Workb is loaded 🎉');
} else {
  console.log('Boo! Workbox didn\'t load 😬');
}

workbox.precaching.precacheAndRoute([
  { url: '/index.html', revision: '383676' },
]);

workbox.routing.registerRoute(
  new RegExp('/js/'),
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  new RegExp('https://api\\.tvmaze\\.com.*/shows'), // eslint-disable-line
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  new RegExp('https://cdn\\.rawgit\\.com.*/.*\\.js'), // eslint-disable-line
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  new RegExp('https://cdn\\.jsdelivr\\.net.*/.*\\.js'), // eslint-disable-line
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  new RegExp('/css/'),
  new workbox.strategies.CacheFirst()
);

