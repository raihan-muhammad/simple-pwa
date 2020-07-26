const CHAHE_NAME = "coba-v1";
const urlToChace = ["./", "./index.html", "./css/materialize.min.css"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CHAHE_NAME).then((cache) => {
      return cache.addAll(urlToChace);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request, { cacheName: CHAHE_NAME }).then((response) => {
      if (response) {
        console.log(
          `Service Worker menggunakan aset dari cache: ${response.url}`
        );
        return response;
      }
      console.log(
        "ServiceWorker: Memuat aset dari server: ",
        event.request.url
      );
    })
  );
});
