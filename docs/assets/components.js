!function(t){function n(n){for(var r,a,s=n[0],l=n[1],u=n[2],h=0,f=[];h<s.length;h++)a=s[h],o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(c&&c(n);f.length;)f.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,s=1;s<e.length;s++){var l=e[s];0!==o[l]&&(r=!1)}r&&(i.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},o={1:0},i=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var c=l;i.push([5,0,4]),e()}([function(t,n,e){},,function(t,n){t.exports='<div class="app-head__inner">\n  <a class="app-logo">NOVA UI</a>\n  <nav class="app-nav">\n    <ul>\n      <li>\n        <a href="/">首页</a>\n      </li>\n      <li>\n        <a class="app-nav--components" href="/components/">组件</a>\n      </li>\n      <li>\n        <a class="app-nav--docs" href="/docs/">开发文档</a>\n      </li>\n      <li>\n        <a href="http://ux.vnnox.net/" target="_blank">设计规范</a>\n      </li>\n    </ul>\n  </nav>\n</div>'},,,function(t,n,e){e(1),e(0),document.getElementById("head").innerHTML=e(2),e(7)},,function(t,n,e){"use strict";e.r(n);class r{constructor(t){this.routers=Object.create(null),this.url="",this.onchange=t}static getPath(t){return t=(t=t||window.location.hash).replace(/^#/,"").replace(/^\/*|\/*$/g,"").trim()}set(t,n){return t=r.getPath(t),this.routers[t]=n&&"function"==typeof n?n:function(){},this}refresh(){let t=this.url;this.url=r.getPath();let n=this.routers[this.url];if(n)return this.onchange&&this.onchange.call(this,this.url,t),setTimeout(()=>{n&&n.call(this,this.url,t)},0),this;window.location.hash="#/"}init(){this.url=r.getPath(),window.addEventListener("load",this.refresh.bind(this),!1),window.addEventListener("hashchange",this.refresh.bind(this),!1)}}var o=r;e.d(n,"router",function(){return u});const i=e(6),a=e(8),s=document.getElementById("container");function l(t,n,e){return function(){s.innerHTML=t,document.title=`${n} | Nova UI Components`,setTimeout(()=>{e&&"function"==typeof e&&e()})}}const u=new o(function(t,n){n!==t&&(window.instances.forEach(t=>{t.destroy&&t.destroy()}),window.instances.length=0,window.scrollTo(0,0))});u.set("/").set("/button",l(i,"Button")).set("/input",l(a,"Input")).init(),document.addEventListener("click",function(t){var n,e=t.target,r=Array.prototype.slice.call(document.querySelectorAll(".code-view__ctrl"));for(let t=0,o=r.length;t<o;t++){const o=r[t];if(o===e||o.contains(e)){n=o;break}}n&&n.parentNode.classList.toggle("source-opened")});n.default=u}]);
//# sourceMappingURL=components.js.map