var CACHE_STATIC_NAME = 'static-v3';

var STATIC_CACHE_REF = [
    '/',
    '/index.html',
];

self.addEventListener('install', function(event){
    console.log('[SW] installing...');
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
            .then(function(cache) {
                cache.addAll(STATIC_CACHE_REF);
        })
    );
});

self.addEventListener('activate', function(event){
    console.log('[SW] activating...');
    event.waitUntil(
        caches.keys()
          .then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
              if (key !== CACHE_STATIC_NAME) {
                return caches.delete(key);
              }
            }));
          })
    );
    self.clients.claim();
});

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
            .then(function(response){
                if(response){
                    return response;
                }else{
                    return fetch(event.request);
                }
            })
    );
});