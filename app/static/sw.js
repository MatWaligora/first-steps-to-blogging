importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/6e014302a3da1bdb8cd1.js",
    "revision": "57969b279576e2973fe8fd98c3b60b06"
  },
  {
    "url": "/_nuxt/772295e75c45ada25475.js",
    "revision": "027b4917774205621bbd50bbd42bc45d"
  },
  {
    "url": "/_nuxt/aa66fdec2d924bfae1dd.js",
    "revision": "2e8180c92be9bedb23996829381cbba5"
  },
  {
    "url": "/_nuxt/c3c1ca1205f7575a94ab.js",
    "revision": "4922e398b0f53f0cb1bd09e4e7e85768"
  },
  {
    "url": "/_nuxt/c938bea34a052e5576c6.js",
    "revision": "a466cd3cf99a3ef1543129eb9e4234b2"
  },
  {
    "url": "/_nuxt/dcc5a88393658b07192f.js",
    "revision": "519abbebf9b54997a546442d262c2f36"
  }
], {
  "cacheId": "presentation-demo",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
