self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  // Par défaut, laisse passer toutes les requêtes
});
