const CACHE_NAME = 'espe-pwa-v1';
const urlsToCache = [
  './',
  './index.html',
  './about.html',
  './offer.html',
  './admision.html',
  './contact.html',
  './css/style.css',
  './js/main.js',
  './manifest.webmanifest.json',
  './assets/icons/icon-144x144.png',
  './assets/icons/icon-192x192.png',
  './assets/icons/icon-256x256.png',
  './assets/icons/icon-384x384.png',
  './assets/icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
  console.log('Service Worker instalado y archivos cacheados');
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
  console.log('Service Worker activado');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});