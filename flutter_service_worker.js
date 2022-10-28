'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7263f34adaa77b48cb6dc080585f0f5f",
"index.html": "1bc8d7e71710534ee5e9f9d04d4e333b",
"/": "1bc8d7e71710534ee5e9f9d04d4e333b",
"firebase-messaging-sw.js": "c46ded0b6250a04e76357ae78dde897b",
"main.dart.js": "65489dd295646eeb02b757422b37d6fe",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90fafd2705cb85433a7288ab5a0a377d",
"assets/AssetManifest.json": "3922c8f7ef0bce952008d30b4609ba8f",
"assets/NOTICES": "aee132c1489c976db28a775018aa794d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "83f89f04ae7cf2fd4ab86e1677ef4695",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/meter.svg": "7ec99baa33636f8969b7cf5ca0d11fb6",
"assets/assets/images/homeicon.png": "e2a798822d2bbc4cf8f1474a8f6b113e",
"assets/assets/images/hm_bg.png": "72610bba17182b945921d6573f950e47",
"assets/assets/images/heartpulse.png": "e897ccc6b78cc7841d8057d863af469a",
"assets/assets/images/home.svg": "a79d46d838e0ddca4e79f7abf5de01ad",
"assets/assets/images/userimage.png": "bfcb39771bbbf4d6feb710d02518f58f",
"assets/assets/images/outrange.svg": "847998da52e26149be8a82fc35f51718",
"assets/assets/images/coachicon.png": "e6e1a618520bb186344347a7d018673f",
"assets/assets/images/steps.svg": "6997c7f0d49c5b9465c8d84e0eda7d95",
"assets/assets/images/learnicon.png": "3db52dd4c0f2a56076b89b9732a7168d",
"assets/assets/images/deepdrive.svg": "1bf8730332e2e8182a144765da5a75eb",
"assets/assets/images/formsicon.png": "acb9ad1bc4afafd144075bf0673fdb11",
"assets/assets/images/foodicon.png": "c6d29017d6d08fcac045457928e0c6d9",
"assets/assets/images/assign_users.svg": "a320a0d8a921e246bc4b43747436298f",
"assets/assets/images/hame_bg1.png": "d0bb9c1a9fd4f7b5141bc70fddd55533",
"assets/assets/images/message.svg": "52ecce9fc8d08fc48fbc7eafaf3a08f9",
"assets/assets/images/logo.png": "9e4d0892dfc5a65936f0c5e2d855a6cd",
"assets/assets/images/camera.svg": "1e5f13355329373d4e2df2097626ee22",
"assets/assets/images/coach.svg": "40746fe31644d0d9d8809eac2c500f06",
"assets/assets/images/logo_white.png": "8d0ec63c647a2dab1dad2babf0611bb2",
"assets/assets/images/footoutline.png": "7581c2cf4e8fb59054d501136d7aa028",
"assets/assets/images/gasmeteroutline.png": "0b6ae558f352f1b4e3971204757f0394",
"assets/assets/images/learn.svg": "99a57a95a8aa35b335a467a1b95fa4da",
"assets/assets/images/time_tracking.svg": "66fa0dc9507a6a64bcad54a8b5d05746",
"assets/assets/images/weightoutline.png": "16bfd3257bad8c648236575edfc319dc",
"assets/assets/images/lapsingusers.svg": "364e96ea2d699ebd3353f2437a4ea7bc",
"assets/assets/images/all_users.svg": "83f071e847880c0af041ed0303878fc9",
"assets/assets/images/logo_white.svg": "757e7e4e1f2bc028ca00ea071bc31242",
"assets/assets/images/meal.svg": "d455234f335b66a2a0d4ea428f8f56d4",
"assets/assets/images/home_bg.svg": "ac5935edb7ec3f1702ce85c4e17e889d",
"assets/assets/images/no_internet.png": "0289c3d0b6f5abeaefab6d057f014284",
"assets/assets/images/graph.svg": "3019d032312e8e4027203b174a21a487",
"assets/assets/images/weight.svg": "f774162460d51ea4cd0f975d3b6aa674",
"assets/assets/images/forums.svg": "5d4f833168ff88d71dcfd729fe203bd9",
"assets/assets/images/heart.svg": "716a5f0e91dfd692ef1e4c64481b1982",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
