if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Logo.svg",revision:"238cfa3aa782702a4c393468370b5506"},{url:"/Profile.svg",revision:"b2b543dd1125a829f17ee13a5508db4b"},{url:"/_next/static/NIEB8YswffRQxazg85Obp/_buildManifest.js",revision:"9a69df677854eb7ed2d0c817d850107d"},{url:"/_next/static/NIEB8YswffRQxazg85Obp/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1bfc9850-4b3f4fcb98e5ad49.js",revision:"4b3f4fcb98e5ad49"},{url:"/_next/static/chunks/238-968fafbc1090fd94.js",revision:"968fafbc1090fd94"},{url:"/_next/static/chunks/252f366e-6d1f0c5c2292bcc8.js",revision:"6d1f0c5c2292bcc8"},{url:"/_next/static/chunks/506-9645263af25a72c1.js",revision:"9645263af25a72c1"},{url:"/_next/static/chunks/664-860d4fb5fc32e7d0.js",revision:"860d4fb5fc32e7d0"},{url:"/_next/static/chunks/675-c53794ad9e9ca32b.js",revision:"c53794ad9e9ca32b"},{url:"/_next/static/chunks/78e521c3-91ec748d55e400a9.js",revision:"91ec748d55e400a9"},{url:"/_next/static/chunks/814c6784-809cb9fce7e89832.js",revision:"809cb9fce7e89832"},{url:"/_next/static/chunks/839-d6869ac257504794.js",revision:"d6869ac257504794"},{url:"/_next/static/chunks/922-d02a070bf6763b93.js",revision:"d02a070bf6763b93"},{url:"/_next/static/chunks/9b380ffa-8265a47a82380319.js",revision:"8265a47a82380319"},{url:"/_next/static/chunks/ae51ba48-b551da767378a091.js",revision:"b551da767378a091"},{url:"/_next/static/chunks/d64684d8-f731b25edfbdaefe.js",revision:"f731b25edfbdaefe"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-e55facac5149a613.js",revision:"e55facac5149a613"},{url:"/_next/static/chunks/pages/404-2ab86e869ca6299d.js",revision:"2ab86e869ca6299d"},{url:"/_next/static/chunks/pages/_app-af66ebff810c229e.js",revision:"af66ebff810c229e"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/admin-2b70d83e18c174ec.js",revision:"2b70d83e18c174ec"},{url:"/_next/static/chunks/pages/blog-8ce08c5d228256fe.js",revision:"8ce08c5d228256fe"},{url:"/_next/static/chunks/pages/index-633ec40730d2d1a2.js",revision:"633ec40730d2d1a2"},{url:"/_next/static/chunks/pages/privacy-policy-395b961022adbbea.js",revision:"395b961022adbbea"},{url:"/_next/static/chunks/pages/tools-620e79dcffc4f7a3.js",revision:"620e79dcffc4f7a3"},{url:"/_next/static/chunks/pages/tools/%5BtoolName%5D-37f95fe18bab6d5b.js",revision:"37f95fe18bab6d5b"},{url:"/_next/static/chunks/pages/tools/category/%5Bcategory%5D-60b6a137155d9fc1.js",revision:"60b6a137155d9fc1"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f164db4954bac6ec.js",revision:"f164db4954bac6ec"},{url:"/_next/static/css/443c51af7f4de4d2.css",revision:"443c51af7f4de4d2"},{url:"/_next/static/css/48acfd63962d7d68.css",revision:"48acfd63962d7d68"},{url:"/_next/static/css/6584b583adf3821e.css",revision:"6584b583adf3821e"},{url:"/_next/static/css/8140eb5e7f1d728c.css",revision:"8140eb5e7f1d728c"},{url:"/_next/static/css/f97b2e3a0205a22e.css",revision:"f97b2e3a0205a22e"},{url:"/_next/static/media/dashboard.64369a5b.jpg",revision:"b5f593c89f21e0f0305c4c64e662ad30"},{url:"/assets/backgrounds/dashboard.jpg",revision:"b5f593c89f21e0f0305c4c64e662ad30"},{url:"/assets/images/Blog.svg",revision:"2962e4aa54064f2de318bd279f5d695c"},{url:"/assets/images/Thumbs.db",revision:"05e59e39f49acc13786671a1a0948b2d"},{url:"/assets/images/blob.svg",revision:"2962e4aa54064f2de318bd279f5d695c"},{url:"/assets/images/chevron-down.svg",revision:"c66b213d1dfff391c61146727032f068"},{url:"/assets/images/chevron-right.svg",revision:"9c59704b1de34c9fbb54c100b907ac85"},{url:"/assets/images/hero-banner.jpg",revision:"7565f46c11ebf33f284ef55335912f65"},{url:"/assets/images/hero-shape.svg",revision:"2a7289cb82c29faa9e7bb1b23b19dfd0"},{url:"/assets/images/icon-1.svg",revision:"b012e26a5320d5aaca5e6578f90eac95"},{url:"/assets/images/icon-2.svg",revision:"5cc38778bd356441c8942a88686bac36"},{url:"/assets/images/icon-3.svg",revision:"b956a5a273d9b3ddb2a7c29740ddb756"},{url:"/assets/images/icon-4.svg",revision:"a283cf23dc8257dcddcac41c85daaf1e"},{url:"/assets/images/icon-5.svg",revision:"d11975f3e3e75869000b813768d6c6c8"},{url:"/assets/images/illustration_dashboard.png",revision:"e5e83bd3d3d0c3c5846d159c4369fc60"},{url:"/assets/images/metaverse-technology.webp",revision:"904062f272f84b84d6f3a5c73d9e3545"},{url:"/assets/images/project-1.png",revision:"5c490b599263d6dc7581cb1d66ed8e20"},{url:"/assets/images/project-2.png",revision:"b34b60cd423b4184fbc4ec7a27577307"},{url:"/assets/images/project-3.png",revision:"5329136f13cfec5602696e65f4f49bd4"},{url:"/assets/images/project-4.png",revision:"8883d5a2f89d04a1b079e352a0904c0f"},{url:"/assets/images/result-site.png",revision:"5d0c1184d5e23993a1ce9c5e7f8f2066"},{url:"/assets/images/result-site.webp",revision:"0ebbb2dbc2aaf58fec096abac64b4093"},{url:"/assets/images/web-design.svg",revision:"eaf9806077d8713a04f94f2bcd4d539e"},{url:"/assets/images/web-tools.svg",revision:"389e07c0126ec5656b554aa73a6e45a4"},{url:"/assets/images/web-ui-component-library.gif",revision:"5c06f148a74f21fa5a522b437389fd41"},{url:"/assets/svg-images/about-us.svg",revision:"704939575f3c093f45d690bb70e89946"},{url:"/assets/svg-images/blogging.svg",revision:"5c9dfe9c9922db6b51e5f295c3d972dc"},{url:"/assets/svg-images/firebase.svg",revision:"007bad50400405f896843d18f305d894"},{url:"/assets/svg-images/hero-back-illustration.svg",revision:"7eb920ca0b4ea593a1129dd3ed372b8c"},{url:"/assets/svg-images/hero-top-illustration.svg",revision:"aa0f14cb87e54d157f8fa6dd8b3308f4"},{url:"/assets/svg-images/meta-tag-generator.svg",revision:"6f1b6e4757e46b7bd5af29bcfd382e82"},{url:"/assets/svg-images/projects.svg",revision:"b4160568fe8114e6728227a61221b30c"},{url:"/assets/svg-images/tools.svg",revision:"c61c46145d9ce1dd22abb5da656bf91f"},{url:"/favicon.ico",revision:"2e752a0e74c2651b822d5e537377e950"},{url:"/fonts.css",revision:"c9838ae39bb455a09e172151fd85062a"},{url:"/kkupgrader.svg",revision:"b2b543dd1125a829f17ee13a5508db4b"},{url:"/logo192.png",revision:"d91954574ead5a24b8cf81a0b33b14e3"},{url:"/logo512.png",revision:"4aaa45784f8f5acf2cfc522b3693783a"},{url:"/manifest.json",revision:"aa39a68548ffa62897eaeb748f89faf8"},{url:"/robots.txt",revision:"94f99b8a672f161ce256a9c2abb61a6d"},{url:"/sitemap.xml",revision:"e840ad0856a01dd3512e60e691ce28fe"},{url:"/textLogo.svg",revision:"ba1458dea00434390225bf419f44d440"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
