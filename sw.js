self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["/", "css/style.css", "img/logo.png", "js/main.js"])
        })
    );
});
self.addEventListener("fetch", e => {
    e.respndWith(
        catches.match(e.request).then(respons => {
            return respons || fetch(e.request)
        })
    )
});
self.addEventListener('message', (event) => {
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
        return;
    }
});