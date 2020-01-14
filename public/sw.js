// install service worker
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open('static-cache')
      .then(cache => {
        cache.addAll([
          '/'
        ]);
      })
  );
});

// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys()
      .then(keys => {
        // deleting old caches
        return Promise.all(keys
          .filter(key => true)
          .map(key => caches.delete(key)))
      })
  )
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    fetch(evt.request)
      .then(response => {
        return response;
      })
      .catch(() => {
        caches.match(evt.response)
          .then(cacheResponse => {
            return cacheResponse;
          })
      })
  );
});