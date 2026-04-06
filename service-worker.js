// Changed to v2 to force the browser to update your code
const CACHE_NAME = "portfolio-cache-v2"; 

// Removed all leading slashes and added your dump images
const urlsToCache = [
  "./index.html",
  "about.html",
  "projects.html",
  "style.css",
  "script.js",
  "images/Profile.jpg",
  "images/dump1.jpg",
  "images/dump2.jpg",
  "images/project-1.jpg",
  "images/project-2.jpg",
  "images/project-3.jpg",
  "images/project-4.jpg"
];

// Install Service Worker and Cache Files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch Cached Files for Offline Support
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});