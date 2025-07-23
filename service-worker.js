self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('qr-tracker-cache').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './service-worker.js',
        './claimed.mp3',
        'https://unpkg.com/html5-qrcode'
      ]);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});