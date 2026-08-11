// Service worker: la app funciona offline, pero el HTML se actualiza al reconectar.
// - Documento/navegación: network-first (siempre trae la última versión si hay red; cae a caché si no).
// - Resto de recursos propios: stale-while-revalidate.
// NOTA: los datos de trazos vienen del CDN de hanzi-writer (origen externo) y NO se cachean aquí;
// para offline real de los trazos hay que auto-hospedar hanzi-writer-data (pendiente).
const CACHE = "hsk-v2";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg"];

self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate", e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch", e=>{
  const req = e.request;
  if(req.method !== "GET") return;
  const isDoc = req.mode === "navigate" || (req.destination === "" && req.url.endsWith(".html")) || req.url.endsWith("/");
  if(isDoc){
    e.respondWith(
      fetch(req).then(res=>{
        const copy = res.clone();
        caches.open(CACHE).then(c=>c.put(req, copy));
        return res;
      }).catch(()=> caches.match(req).then(r=> r || caches.match("./index.html")))
    );
    return;
  }
  e.respondWith(
    caches.match(req).then(cached=>{
      const net = fetch(req).then(res=>{
        const copy = res.clone();
        caches.open(CACHE).then(c=>c.put(req, copy)).catch(()=>{});
        return res;
      }).catch(()=>cached);
      return cached || net;
    })
  );
});
