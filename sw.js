const CACHE_NAME = 'task-tracer-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    './fav/android-chrome-192x192.png',
    './fav/android-chrome-512x512.png'
];

// 1. 安装阶段 (进货)：下载并缓存所有文件
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installing...');
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching all assets');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    // 跳过等待，立即激活新的 Service Worker
    self.skipWaiting();
});

// 2. 拦截请求 (发货)：优先使用缓存
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            // A. 如果缓存里有，直接返回缓存 (离线可用)
            if (cachedResponse) {
                return cachedResponse;
            }
            // B. 如果缓存没有，去网络请求
            return fetch(e.request).then((networkResponse) => {
                // 检查请求是否有效
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    return networkResponse;
                }

                // === 动态缓存资源文件 ===
                // 检查 URL 是否包含 "resources/"
                // 如果是，说明这是个语言包，自动把它存入缓存！
                if (e.request.url.includes('/resources/')) {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        console.log('[Service Worker] Caching new resource:', e.request.url);
                        cache.put(e.request, responseToCache);
                    });
                }

                return networkResponse;
            });
        })
    );
});

// 3. 激活阶段 (清理)：删除旧版本的缓存
self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Activating...');
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[Service Worker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    // 立即接管页面
    self.clients.claim();
});