if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-7028bf80"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Profile.svg",revision:"b2b543dd1125a829f17ee13a5508db4b"},{url:"/_next/static/8AWqW8Y4IXaEMVDyAuDsE/_buildManifest.js",revision:"6313fb8c71af9079124a488801f1c1e5"},{url:"/_next/static/8AWqW8Y4IXaEMVDyAuDsE/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/123-f5627e800923dc9b.js",revision:"f5627e800923dc9b"},{url:"/_next/static/chunks/236.9a94d4edb70c2754.js",revision:"9a94d4edb70c2754"},{url:"/_next/static/chunks/565-28480d27afe5b5d6.js",revision:"28480d27afe5b5d6"},{url:"/_next/static/chunks/659.64550318f542a562.js",revision:"64550318f542a562"},{url:"/_next/static/chunks/708-935c8bbfa5624f07.js",revision:"935c8bbfa5624f07"},{url:"/_next/static/chunks/framework-8d78bf989db74c8f.js",revision:"8d78bf989db74c8f"},{url:"/_next/static/chunks/main-ea432c7333ff138c.js",revision:"ea432c7333ff138c"},{url:"/_next/static/chunks/pages/404-04d9f0ce6c08c3ab.js",revision:"04d9f0ce6c08c3ab"},{url:"/_next/static/chunks/pages/_app-9b66f0ce4cc877c0.js",revision:"9b66f0ce4cc877c0"},{url:"/_next/static/chunks/pages/_error-e52b336b20962b91.js",revision:"e52b336b20962b91"},{url:"/_next/static/chunks/pages/index-4e5f0bbca18ad932.js",revision:"4e5f0bbca18ad932"},{url:"/_next/static/chunks/pages/tools-b8ff8a094f26f85e.js",revision:"b8ff8a094f26f85e"},{url:"/_next/static/chunks/pages/tools/%5BtoolName%5D-9e3146eb1ea7e515.js",revision:"9e3146eb1ea7e515"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b68421a22f57baf9.js",revision:"b68421a22f57baf9"},{url:"/_next/static/css/5e202257b87d9ee1.css",revision:"5e202257b87d9ee1"},{url:"/_next/static/css/739e0ebbde921e5e.css",revision:"739e0ebbde921e5e"},{url:"/_next/static/css/b5732a3d1d7b4c6d.css",revision:"b5732a3d1d7b4c6d"},{url:"/_next/static/css/ed078cbf4c82f8b2.css",revision:"ed078cbf4c82f8b2"},{url:"/_next/static/css/efa1cd89624b2590.css",revision:"efa1cd89624b2590"},{url:"/assets/svg-images/about-us.svg",revision:"704939575f3c093f45d690bb70e89946"},{url:"/assets/svg-images/blogging.svg",revision:"5c9dfe9c9922db6b51e5f295c3d972dc"},{url:"/assets/svg-images/projects.svg",revision:"b4160568fe8114e6728227a61221b30c"},{url:"/assets/svg-images/tools.svg",revision:"c61c46145d9ce1dd22abb5da656bf91f"},{url:"/favicon.ico",revision:"2e752a0e74c2651b822d5e537377e950"},{url:"/fonts.css",revision:"c9838ae39bb455a09e172151fd85062a"},{url:"/kkupgrader.svg",revision:"b2b543dd1125a829f17ee13a5508db4b"},{url:"/logo192.png",revision:"d91954574ead5a24b8cf81a0b33b14e3"},{url:"/logo512.png",revision:"4aaa45784f8f5acf2cfc522b3693783a"},{url:"/manifest.json",revision:"59e1640cd7afa52b5907d0f201380ae6"},{url:"/robots.txt",revision:"7c675d89a062b8b1e260bf8ef12310b1"},{url:"/sitemap.xml",revision:"53a30ab663fa0e1b511d06f8fc778cae"},{url:"/textLogo.svg",revision:"ba1458dea00434390225bf419f44d440"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
