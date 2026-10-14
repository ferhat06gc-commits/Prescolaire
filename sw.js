/* الهدهد المعلّم — عامل الخدمة: يعمل التطبيق دون إنترنت بعد أوّل فتح.
   عند رفع نسخة جديدة: غيّر رقم الإصدار أدناه. */
const CACHE = 'hudhud-v6';
const ASSETS = ['./', './index.html', './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* الذاكرة أوّلًا، مع تحديث في الخلفية */
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    caches.open(CACHE).then((c) =>
      c.match(e.request, { ignoreSearch: true }).then((hit) => {
        const net = fetch(e.request)
          .then((r) => { if (r && r.ok) c.put(e.request, r.clone()); return r; })
          .catch(() => hit || c.match('./index.html'));
        return hit || net;
      })
    )
  );
});
