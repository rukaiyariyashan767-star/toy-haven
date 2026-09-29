const CACHE_NAME = "toy-haven-v4";
const ASSETS = [
  "./",
  "./index.html",
  "./products.html",
  "./cart.html",
  "./checkout.html",
  "./wishlist.html",
  "./support.html",
  "./css/style.css",
  "./js/app.js",
  "./js/products-data.js",
  "./assets/spiderman.svg",
  "./assets/batman.svg",
  "./assets/lego-city.svg",
  "./assets/lego-starwars.svg",
  "./assets/monopoly.svg",
  "./assets/ferrari.svg",
  "./assets/bmw.svg",
  "./assets/truck.svg",
  "./manifest.json",
  "./assets/favicon.svg",
  "./assets/icon-192.svg",
  "./assets/icon-512.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
  ));
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match("./index.html")))
  );
});
