self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app').then(function(cache) {
        cache.addAll([
          '/',
          '/index.html',
         '/index.html?homescreen=1',
       '/?homescreen=1',
          '/manifest.json',
          '/favicon.ico',
          '/src/css/app.css',
          '/src/js/app.js'
        ])
      })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        return res;
      })
  );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);
  event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});



