const CACHE_NAME = 'im3-travel-esim-v1';
const APP_FILES = [
  './', './index.html', './app.js', './styles.css', './journey.css',
  './manifest.webmanifest', './assets/im3-travel-icon.svg', './assets/im3-travel-icon-180.png', './assets/im3-travel-icon-512.png',
  './assets/bangkok-wat-arun.png', './assets/travel-benefits.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
    return response;
  })));
});
