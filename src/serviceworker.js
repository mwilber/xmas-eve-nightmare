self.addEventListener('install', function(event){
    console.log('[SW] installing...');
    event.waitUntil(caches.open('static_v2')
        .then(function(cache){
            console.log('[SW] precaching');
            cache.addAll([
                '/',
                '/index.html'
            ]);
        }));
});

self.addEventListener('activate', function(event){
    console.log('[SW] activating...');
    // LOOK THIS UP
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