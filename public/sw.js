if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Logo.svg",revision:"b93ca9cc3165c1f62c5d5e2272108dcc"},{url:"/Profile.svg",revision:"1c1921b11e3a434bc24485d85af047d6"},{url:"/_next/static/chunks/149-747d3f8e4501b4cb.js",revision:"747d3f8e4501b4cb"},{url:"/_next/static/chunks/664-860d4fb5fc32e7d0.js",revision:"860d4fb5fc32e7d0"},{url:"/_next/static/chunks/957-0c09bc001ff62531.js",revision:"0c09bc001ff62531"},{url:"/_next/static/chunks/ae51ba48-b551da767378a091.js",revision:"b551da767378a091"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-743f8aff90ea8642.js",revision:"743f8aff90ea8642"},{url:"/_next/static/chunks/pages/404-28efc875a373a553.js",revision:"28efc875a373a553"},{url:"/_next/static/chunks/pages/_app-b63cb76754a4062f.js",revision:"b63cb76754a4062f"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/blog-a5995f457489a184.js",revision:"a5995f457489a184"},{url:"/_next/static/chunks/pages/index-155e9bd3963d9b7d.js",revision:"155e9bd3963d9b7d"},{url:"/_next/static/chunks/pages/tools-6a0ae204f722a161.js",revision:"6a0ae204f722a161"},{url:"/_next/static/chunks/pages/tools/%5BtoolName%5D-b4fc323bf4504993.js",revision:"b4fc323bf4504993"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-59c5c889f52620d6.js",revision:"59c5c889f52620d6"},{url:"/_next/static/css/0a60c821ff09160f.css",revision:"0a60c821ff09160f"},{url:"/_next/static/css/380e0445512ea327.css",revision:"380e0445512ea327"},{url:"/_next/static/css/a7ff5f2fb1da3f18.css",revision:"a7ff5f2fb1da3f18"},{url:"/_next/static/css/ea019f36619532cc.css",revision:"ea019f36619532cc"},{url:"/_next/static/css/f97b2e3a0205a22e.css",revision:"f97b2e3a0205a22e"},{url:"/_next/static/fZaQM4yGykMA9ZDauIjyO/_buildManifest.js",revision:"1cb516efd0ccd4bf01dbd15a766d6e3a"},{url:"/_next/static/fZaQM4yGykMA9ZDauIjyO/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/images/Blog.svg",revision:"2962e4aa54064f2de318bd279f5d695c"},{url:"/assets/images/Thumbs.db",revision:"05e59e39f49acc13786671a1a0948b2d"},{url:"/assets/images/blob.svg",revision:"2962e4aa54064f2de318bd279f5d695c"},{url:"/assets/images/chevron-down.svg",revision:"c66b213d1dfff391c61146727032f068"},{url:"/assets/images/chevron-right.svg",revision:"9c59704b1de34c9fbb54c100b907ac85"},{url:"/assets/images/hero-banner.jpg",revision:"7565f46c11ebf33f284ef55335912f65"},{url:"/assets/images/hero-shape.svg",revision:"73e3c7a16270e8315c817844144daa19"},{url:"/assets/images/icon-1.svg",revision:"a143ec22b4271cbf9cbb6077bbe497ba"},{url:"/assets/images/icon-2.svg",revision:"b5e6a4f26a33fa25400f7b31a4de1dac"},{url:"/assets/images/icon-3.svg",revision:"b74ab4c259dee63785e0b06bb96dc090"},{url:"/assets/images/icon-4.svg",revision:"da3cc5783889d6b8d33c27fc4b4f8bb5"},{url:"/assets/images/icon-5.svg",revision:"74de00003e1326c3acc561f61af18e4b"},{url:"/assets/images/metaverse-technology.webp",revision:"904062f272f84b84d6f3a5c73d9e3545"},{url:"/assets/images/project-1.png",revision:"5c490b599263d6dc7581cb1d66ed8e20"},{url:"/assets/images/project-2.png",revision:"b34b60cd423b4184fbc4ec7a27577307"},{url:"/assets/images/project-3.png",revision:"5329136f13cfec5602696e65f4f49bd4"},{url:"/assets/images/project-4.png",revision:"8883d5a2f89d04a1b079e352a0904c0f"},{url:"/assets/images/result-site.png",revision:"5d0c1184d5e23993a1ce9c5e7f8f2066"},{url:"/assets/images/result-site.webp",revision:"0ebbb2dbc2aaf58fec096abac64b4093"},{url:"/assets/images/web-design.svg",revision:"eaf9806077d8713a04f94f2bcd4d539e"},{url:"/assets/images/web-tools.svg",revision:"389e07c0126ec5656b554aa73a6e45a4"},{url:"/assets/images/web-ui-component-library.gif",revision:"5c06f148a74f21fa5a522b437389fd41"},{url:"/assets/svg-images/about-us.svg",revision:"fe29fb89e9cd328406231129f2040df3"},{url:"/assets/svg-images/blogging.svg",revision:"5c9dfe9c9922db6b51e5f295c3d972dc"},{url:"/assets/svg-images/hero-back-illustration.svg",revision:"7eb920ca0b4ea593a1129dd3ed372b8c"},{url:"/assets/svg-images/hero-top-illustration.svg",revision:"aa0f14cb87e54d157f8fa6dd8b3308f4"},{url:"/assets/svg-images/projects.svg",revision:"b4160568fe8114e6728227a61221b30c"},{url:"/assets/svg-images/tools.svg",revision:"c61c46145d9ce1dd22abb5da656bf91f"},{url:"/favicon.ico",revision:"2e752a0e74c2651b822d5e537377e950"},{url:"/fonts.css",revision:"478c447ceacd389967ec8f0b8223d32c"},{url:"/kkupgrader.svg",revision:"1c1921b11e3a434bc24485d85af047d6"},{url:"/logo192.png",revision:"d91954574ead5a24b8cf81a0b33b14e3"},{url:"/logo512.png",revision:"4aaa45784f8f5acf2cfc522b3693783a"},{url:"/manifest.json",revision:"ec4af12daa21ce164dad4485b481b02b"},{url:"/robots.txt",revision:"6784b8c79883fa5b537296d3cd41dd90"},{url:"/sitemap.xml",revision:"7289d20a223cdfa4c9ce6492d051399d"},{url:"/textLogo.svg",revision:"ba659e8ad5b78da69b4c0e650e7a7343"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
