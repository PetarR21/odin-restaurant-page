(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(81),o=t.n(r),c=t(645),a=t.n(c)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);"]),a.push([e.id,"* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Lato', 'sans-serif';\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n    background-color: #D7CEC7;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\n#content {\r\n    height: 100%;\r\n}\r\n\r\nheader {\r\n    background-color: white;\r\n    color: #565656;\r\n    height: 95px;\r\n    width: 100%;\r\n}\r\n\r\n#header-container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 20px 40px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 100%;\r\n}\r\n\r\nheader h3 {\r\n    font-size: 32px;\r\n    font-weight: 700;\r\n}\r\n\r\n#right-bar {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 35px;\r\n    align-items: center;\r\n}\r\n\r\n#right-bar li {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\n\r\n#right-bar li:hover {\r\n    color: #C09F80;\r\n}\r\n\r\n.selected {\r\n    color: #C09F80;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    height: 100%;\r\n}\r\n\r\nmain h1 {\r\n    color: #76323F;\r\n    font-size: 66px;\r\n}\r\n\r\nmain h5 {\r\n    color: #565656;\r\n    font-size: 24px;\r\n}\r\n\r\n#main-container>* {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n#orderBtn {\r\n    background-color: #76323F;\r\n    color: #C09F80;\r\n}\r\n\r\n.btn {\r\n    padding: 10px 30px;\r\n    border: none;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    border-radius: 8px;\r\n}\r\n\r\n.btn:hover {\r\n    filter: brightness(95%);\r\n    transform: scale(0.98);\r\n}\r\n\r\n\r\n#menu-container {\r\n    max-width: 1100px;\r\n    margin: 0 auto;\r\n    padding: 30px 0;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#menu-title {\r\n    display: flex;\r\n    gap: 10px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#menu-title h3 {\r\n    font-size: 42px;\r\n    color: #76323F;\r\n}\r\n\r\n\r\n#menu-grid {\r\n    background-color: #C09F80;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    gap: 50px 100px;\r\n    padding: 40px 60px;\r\n    border-radius: 10px;\r\n    width: 100%;\r\n}\r\n\r\n.menu-item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n.menu-item img {\r\n    height: 150px;\r\n    width: 150px;\r\n}\r\n\r\n#chef-img {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.item-content {\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 5px;\r\n    color: #76323F;\r\n    width: 300px;\r\n    font-size: 18px;\r\n}\r\n\r\n.item-content h4 {\r\n    color: black;\r\n}\r\n\r\nform img {\r\n    height: 15px;\r\n    width: 15px;\r\n}\r\n\r\n#contact-page {\r\n    margin-top: 40px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#contact-title {\r\n    font-size: 42px;\r\n    color: #76323F;\r\n    font-weight: 700;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n#contact-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 40px;\r\n    background-color: #C09F80;\r\n    padding: 60px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.contact-element {\r\n    display: flex;\r\n    font-size: 18px;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n.contact-element img {\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 25px;\r\n}\r\n\r\nform h3 {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    font-size: 22px;\r\n}\r\n\r\nform h3 img {\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\n#input-name, #input-mail, #input-message {\r\n    border: 0px solid #000000;\r\n    border-bottom-width: 1px;\r\n    background-color: transparent;\r\n    font-size: 18px;\r\n}\r\n\r\n#input-name:focus, #input-mail:focus, #input-message:focus {\r\n    outline: none;\r\n}\r\n\r\n#submit-btn {\r\n    background-color: #76323F;\r\n    margin-top: 30px;\r\n    font-weight: 700;\r\n}",""]);const d=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var c={},a=[],d=0;d<e.length;d++){var i=e[d],s=r.base?i[0]+r.base:i[0],l=c[s]||0,p="".concat(s," ").concat(l);c[s]=l+1;var m=t(p),u={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=o(u,r);r.byIndex=d,n.splice(d,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var d=t(c[a]);n[d].references--}for(var i=r(e,o),s=0;s<c.length;s++){var l=t(c[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}c=i}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},513:(e,n,t)=>{e.exports=t.p+"3fe199795ffb6f04fbe9.png"},998:(e,n,t)=>{e.exports=t.p+"5def3cdd4cca83c61d05.png"},487:(e,n,t)=>{e.exports=t.p+"e3a52bbab055d85a9f85.png"},281:(e,n,t)=>{e.exports=t.p+"b591fdcaa86f3ea44809.svg"},327:(e,n,t)=>{e.exports=t.p+"37f80343f05d250f968a.png"},951:(e,n,t)=>{e.exports=t.p+"3de4f85c5ae658981ef3.png"},839:(e,n,t)=>{e.exports=t.p+"b36f469354eaa52c6b0c.png"},734:(e,n,t)=>{e.exports=t.p+"c447272b17a7d1327926.png"},819:(e,n,t)=>{e.exports=t.p+"6959f003c1ca50bec2ae.svg"},357:(e,n,t)=>{e.exports=t.p+"782f5102f06c34c1439d.svg"},208:(e,n,t)=>{e.exports=t.p+"e8d89a44538796efff0a.svg"},910:(e,n,t)=>{e.exports=t.p+"90cd73f9a328a3ff716f.png"},476:(e,n,t)=>{e.exports=t.p+"977ecea13cf8136c730a.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var c=n[r]={id:r,exports:{}};return e[r](c,c.exports,t),c.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),c=t(569),a=t.n(c),d=t(565),i=t.n(d),s=t(216),l=t.n(s),p=t(589),m=t.n(p),u=t(426),h={};function f(){const e=document.getElementById("content"),n=document.createElement("main");n.classList.add("second");const t=document.createElement("div");t.id="main-container";const r=document.createElement("h1");r.textContent="Visit us and try one of our delicious meals!";const o=document.createElement("h5");o.textContent="Tastes like dream!";const c=document.createElement("button");c.id="orderBtn",c.classList.add("btn"),c.textContent="Order Now",t.appendChild(r),t.appendChild(o),t.appendChild(c),n.appendChild(t),e.appendChild(n)}h.styleTagTransform=m(),h.setAttributes=i(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;var g=t(487),x=t(734),C=t(998),v=t(327),y=t(476),b=t(910),E=t(839),w=t(513),L=t(951),S=t(281),I=t(819),F=t(357),k=t(208);document.querySelector("#content"),function(){const e=document.createElement("header"),n=document.createElement("div");n.id="header-container",e.appendChild(n);const t=document.createElement("div");t.id="left-bar";const r=document.createElement("h3");r.textContent="Happy Meal",t.appendChild(r),n.appendChild(t);const o=document.createElement("ul");o.id="right-bar";const c=document.createElement("li"),a=document.createElement("li"),d=document.createElement("li");c.textContent="Home",c.id="home",c.classList.add("selected"),a.textContent="Menu",a.id="menu",d.textContent="Contact us",d.id="contact",o.appendChild(c),o.appendChild(a),o.appendChild(d),n.appendChild(o),content.appendChild(e)}(),f(),document.querySelector("#home").addEventListener("click",(()=>{document.querySelector(".second").remove(),f(),document.querySelector("#home").classList.add("selected"),document.querySelector("#menu").classList.remove("selected"),document.querySelector("#contact").classList.remove("selected")})),document.querySelector("#menu").addEventListener("click",(()=>{document.querySelector(".second").remove(),function(){const e=document.getElementById("content"),n=new Image;n.src=g;const t=new Image;t.src=x;const r=new Image;r.src=C;const o=new Image;o.src=v;const c=new Image;c.src=y;const a=new Image;a.src=b;const d=new Image;d.src=E;const i=new Image;i.src=w;const s=new Image;s.src=L;const l=document.createElement("div");l.id="menu-container",l.classList.add("second");const p=document.createElement("div");p.id="menu-title";const m=document.createElement("h3");m.textContent="Menu",p.appendChild(m),n.id="chef-img",p.appendChild(n),l.appendChild(p);const u=document.createElement("div");u.id="menu-grid";const h=document.createElement("div");h.classList.add("menu-item");const f=document.createElement("div");f.classList.add("item-content");const S=document.createElement("h4"),I=document.createElement("p");h.appendChild(t),S.textContent="Hamburger: $2.49",I.textContent="Buns, patty, tomato, onions, lettuce, and our secret family recipe.",f.appendChild(S),f.appendChild(I),h.appendChild(f),u.appendChild(h);const F=document.createElement("div");F.classList.add("menu-item");const k=document.createElement("div");k.classList.add("item-content");const q=document.createElement("h4"),T=document.createElement("p");F.appendChild(r),q.textContent="Cheeseburger: $2.99",T.textContent="Similar to our hamburger, but with cheese.",k.appendChild(q),k.appendChild(T),F.appendChild(k),u.appendChild(F);const j=document.createElement("div");j.classList.add("menu-item");const M=document.createElement("div");M.classList.add("item-content");const z=document.createElement("h4"),$=document.createElement("p");j.appendChild(o),z.textContent="Double Cheeseburger: $3.49",$.textContent="Similar to our cheeseburger, but with an extra patty.",M.appendChild(z),M.appendChild($),j.appendChild(M),u.appendChild(j);const A=document.createElement("div");A.classList.add("menu-item");const B=document.createElement("div");B.classList.add("item-content");const N=document.createElement("h4"),O=document.createElement("p");A.appendChild(c),N.textContent="Steak: $11.99",O.textContent="A juicy steak made just how you like it.",B.appendChild(N),B.appendChild(O),A.appendChild(B),u.appendChild(A);const H=document.createElement("div");H.classList.add("menu-item");const P=document.createElement("div");P.classList.add("item-content");const Z=document.createElement("h4"),D=document.createElement("p");H.appendChild(a),Z.textContent="BBQ Ribs: $8.99",D.textContent="Barbecue ribs with your choice of a add-ons.",P.appendChild(Z),P.appendChild(D),H.appendChild(P),u.appendChild(H);const R=document.createElement("div");R.classList.add("menu-item");const U=document.createElement("div");U.classList.add("item-content");const _=document.createElement("h4"),G=document.createElement("p");R.appendChild(d),_.textContent="Grilled Cheese Sandwich: $4.99",G.textContent="A toasted and grilled cheese sandwich, dipped in our special sauce.",U.appendChild(_),U.appendChild(G),R.appendChild(U),u.appendChild(R);const J=document.createElement("div");J.classList.add("menu-item");const Q=document.createElement("div");Q.classList.add("item-content");const V=document.createElement("h4"),Y=document.createElement("p");J.appendChild(i),V.textContent="Caesar Salad: $7.99",Y.textContent="Your typical caesar salad that comes with your choice of dressings.",Q.appendChild(V),Q.appendChild(Y),J.appendChild(Q),u.appendChild(J);const K=document.createElement("div");K.classList.add("menu-item");const W=document.createElement("div");W.classList.add("item-content");const X=document.createElement("h4"),ee=document.createElement("p");K.appendChild(s),X.textContent="French Fries: $1.99",ee.textContent="Sometimes you don't want to eat your burger alone, why not add some french fries?",W.appendChild(X),W.appendChild(ee),K.appendChild(W),u.appendChild(K),l.appendChild(u),e.appendChild(l)}(),document.querySelector("#home").classList.remove("selected"),document.querySelector("#menu").classList.add("selected"),document.querySelector("#contact").classList.remove("selected")})),document.querySelector("#contact").addEventListener("click",(()=>{document.querySelector(".second").remove(),function(){const e=new Image;e.src=S;const n=new Image;n.src=I;const t=new Image;t.src=F;const r=new Image;r.src=k;const o=document.getElementById("content"),c=document.createElement("div");c.classList.add("second"),c.id="contact-page";const a=document.createElement("h1");a.id="contact-title",a.textContent="Contact us",c.appendChild(a);const d=document.createElement("div");d.id="contact-container";const i=document.createElement("div");i.classList.add("contact-element"),i.appendChild(n);const s=document.createElement("p");s.textContent="1024 Oakwood Ave San Diego, CA 22434",i.appendChild(s),d.appendChild(i);const l=document.createElement("div");l.classList.add("contact-element"),l.appendChild(e);const p=document.createElement("p");p.textContent="Mon-Thurs:8am-8pm Fri-Sun:8am-11pm",l.appendChild(p),d.appendChild(l);const m=document.createElement("div");m.classList.add("contact-element"),m.appendChild(r);const u=document.createElement("p");u.textContent="Mon-Thurs:8am-8pm Fri-Sun:8am-11pm",m.appendChild(u),d.appendChild(m);const h=document.createElement("form"),f=document.createElement("h3");f.appendChild(t),f.appendChild(document.createTextNode("Message us")),h.appendChild(f);const g=document.createElement("input");g.type="text",g.id="input-name",g.placeholder="Full Name",h.appendChild(g);const x=document.createElement("input");x.type="email",x.id="input-mail",x.placeholder="Email",h.appendChild(x);const C=document.createElement("textarea");C.name="message",C.id="input-message",C.cols="30",C.rows="5",C.placeholder="Type your message...",h.appendChild(C);const v=document.createElement("input");v.type="submit",v.id="submit-btn",v.classList.add("btn"),v.value="Send",h.appendChild(v),d.appendChild(h),c.appendChild(d),o.appendChild(c)}(),document.querySelector("#home").classList.remove("selected"),document.querySelector("#menu").classList.remove("selected"),document.querySelector("#contact").classList.add("selected")}))})()})();