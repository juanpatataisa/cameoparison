var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function c(t){t.forEach(o)}function s(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const i="undefined"!=typeof window;let a=i?()=>window.performance.now():()=>Date.now(),u=i?t=>requestAnimationFrame(t):t;const f=new Set;function d(t){f.forEach(e=>{e.c(t)||(f.delete(e),e.f())}),0!==f.size&&u(d)}function p(t){let e;return 0===f.size&&u(d),{promise:new Promise(n=>{f.add(e={c:t,f:n})}),abort(){f.delete(e)}}}function m(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function w(){return $(" ")}function b(){return $("")}function k(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.data!==e&&(t.data=e)}function P(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function j(t,e,n){t.classList[n?"add":"remove"](e)}function E(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const M=new Set;let C,O=0;function S(t,e,n,o,r,c,s,l=0){const i=16.666/o;let a="{\n";for(let t=0;t<=1;t+=i){const o=e+(n-e)*c(t);a+=100*t+`%{${s(o,1-o)}}\n`}const u=a+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,d=t.ownerDocument;M.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(v("style")).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[f]||(m[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${f} ${o}ms linear ${r}ms 1 both`,O+=1,f}function q(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),O-=r,O||u(()=>{O||(M.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),M.clear())}))}function A(t){C=t}function z(){if(!C)throw new Error("Function called outside component initialization");return C}function L(){const t=z();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=E(e,n);o.slice().forEach(e=>{e.call(t,r)})}}}const T=[],N=[],R=[],B=[],F=Promise.resolve();let I=!1;function D(t){R.push(t)}let H=!1;const W=new Set;function Y(){if(!H){H=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];A(e),K(e.$$)}for(T.length=0;N.length;)N.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];W.has(e)||(W.add(e),e())}R.length=0}while(T.length);for(;B.length;)B.pop()();I=!1,H=!1,W.clear()}}function K(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let V;function G(){return V||(V=Promise.resolve(),V.then(()=>{V=null})),V}function J(t,e,n){t.dispatchEvent(E(`${e?"intro":"outro"}${n}`))}const Q=new Set;let U;function X(){U={r:0,c:[],p:U}}function Z(){U.r||c(U.c),U=U.p}function tt(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function et(t,e,n,o){if(t&&t.o){if(Q.has(t))return;Q.add(t),U.c.push(()=>{Q.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const nt={duration:0};function ot(n,o,r){let c,l,i=o(n,r),u=!1,f=0;function d(){c&&q(n,c)}function m(){const{delay:o=0,duration:r=300,easing:s=e,tick:m=t,css:h}=i||nt;h&&(c=S(n,0,1,r,o,s,h,f++)),m(0,1);const g=a()+o,y=g+r;l&&l.abort(),u=!0,D(()=>J(n,!0,"start")),l=p(t=>{if(u){if(t>=y)return m(1,0),J(n,!0,"end"),d(),u=!1;if(t>=g){const e=s((t-g)/r);m(e,1-e)}}return u})}let h=!1;return{start(){h||(q(n),s(i)?(i=i(),G().then(m)):m())},invalidate(){h=!1},end(){u&&(d(),u=!1)}}}function rt(n,o,r){let l,i=o(n,r),u=!0;const f=U;function d(){const{delay:o=0,duration:r=300,easing:s=e,tick:d=t,css:m}=i||nt;m&&(l=S(n,1,0,r,o,s,m));const h=a()+o,g=h+r;D(()=>J(n,!1,"start")),p(t=>{if(u){if(t>=g)return d(0,1),J(n,!1,"end"),--f.r||c(f.c),!1;if(t>=h){const e=s((t-h)/r);d(1-e,e)}}return u})}return f.r+=1,s(i)?G().then(()=>{i=i(),d()}):d(),{end(t){t&&i.tick&&i.tick(1,0),u&&(l&&q(n,l),u=!1)}}}function ct(t,e){const n=e.token={};function o(t,o,r,c){if(e.token!==n)return;e.resolved=c;let s=e.ctx;void 0!==r&&(s=s.slice(),s[r]=c);const l=t&&(e.current=t)(s);let i=!1;e.block&&(e.blocks?e.blocks.forEach((t,n)=>{n!==o&&t&&(X(),et(t,1,1,()=>{e.blocks[n]=null}),Z())}):e.block.d(1),l.c(),tt(l,1),l.m(e.mount(),e.anchor),i=!0),e.block=l,e.blocks&&(e.blocks[o]=l),i&&Y()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=z();if(t.then(t=>{A(n),o(e.then,1,e.value,t),A(null)},t=>{A(n),o(e.catch,2,e.error,t),A(null)}),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}function st(t){t&&t.c()}function lt(t,e,n){const{fragment:r,on_mount:l,on_destroy:i,after_update:a}=t.$$;r&&r.m(e,n),D(()=>{const e=l.map(o).filter(s);i?i.push(...e):c(e),t.$$.on_mount=[]}),a.forEach(D)}function it(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){-1===t.$$.dirty[0]&&(T.push(t),I||(I=!0,F.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ut(e,n,o,s,l,i,a=[-1]){const u=C;A(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:a};let p=!1;if(d.ctx=o?o(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&at(e,t)),n}):[],d.update(),p=!0,c(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(g)}else d.fragment&&d.fragment.c();n.intro&&tt(e.$$.fragment),lt(e,n.target,n.anchor),Y()}A(u)}class ft{$destroy(){it(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function dt(t){return t[Math.floor(t.length*Math.random())]}function pt(t){return new Promise(e=>{setTimeout(e,t)})}function mt(t,e){-1!==e&&(t[e]=t[t.length-1],t.pop())}function ht(t,e,n){const o=t.slice();return o[5]=e[n],o}function gt(t){let e,n,o,r,c=t[5].label+"";function s(...e){return t[3](t[5],...e)}return{c(){e=v("button"),n=$(c),e.disabled=t[0],_(e,"class","svelte-jkmoqw")},m(t,c){h(t,e,c),m(e,n),o||(r=k(e,"click",s),o=!0)},p(n,o){t=n,1&o&&(e.disabled=t[0])},d(t){t&&g(e),o=!1,r()}}}function yt(e){let n,o,r,c,s,l=e[1],i=[];for(let t=0;t<l.length;t+=1)i[t]=gt(ht(e,l,t));return{c(){n=v("header"),n.innerHTML='<h1 class="svelte-jkmoqw">\n    CameoP<span class="logo svelte-jkmoqw">a</span>rison\n  </h1> \n\n  <p class="svelte-jkmoqw">\n    On <a href="https://cameo.com">cameo.com</a>, you can buy personalised video\n    clips from everyone from Lindsay Lohan to Ice T.\n  </p> \n\n  <p class="svelte-jkmoqw">But who commands the highest price?</p>',o=w(),r=v("p"),r.textContent="Pick a category to play a game",c=w(),s=v("div");for(let t=0;t<i.length;t+=1)i[t].c();_(r,"class","svelte-jkmoqw"),_(s,"class","categories svelte-jkmoqw")},m(t,e){h(t,n,e),h(t,o,e),h(t,r,e),h(t,c,e),h(t,s,e);for(let t=0;t<i.length;t+=1)i[t].m(s,null)},p(t,[e]){if(7&e){let n;for(l=t[1],n=0;n<l.length;n+=1){const o=ht(t,l,n);i[n]?i[n].p(o,e):(i[n]=gt(o),i[n].c(),i[n].m(s,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=l.length}},i:t,o:t,d(t){t&&g(n),t&&g(o),t&&g(r),t&&g(c),t&&g(s),y(i,t)}}}function vt(t,e,n){const o=L();let r=!1;const c=t=>{n(0,r=!0),o("select",{category:t})};return[r,[{slug:"actors",label:"Actors"},{slug:"athletes",label:"Athletes"},{slug:"comedians",label:"Comedians"},{slug:"creators",label:"Creators"},{slug:"models",label:"Models"},{slug:"musicians",label:"Musicians"},{slug:"reality-tv",label:"Reality TV"}],c,t=>c(t)]}class $t extends ft{constructor(t){super(),ut(this,t,vt,yt,l,{})}}function wt(t){const e=t-1;return e*e*e+1}function bt(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */function kt(t,{delay:e=0,duration:n=400,easing:o=wt,x:r=0,y:c=0,opacity:s=0}){const l=getComputedStyle(t),i=+l.opacity,a="none"===l.transform?"":l.transform,u=i*(1-s);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*r}px, ${(1-t)*c}px);\n\t\t\topacity: ${i-u*e}`}}function _t(t,{delay:e=0,duration:n=400,easing:o=wt,start:r=0,opacity:c=0}){const s=getComputedStyle(t),l=+s.opacity,i="none"===s.transform?"":s.transform,a=1-r,u=l*(1-c);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${i} scale(${1-a*e});\n\t\t\topacity: ${l-u*e}\n\t\t`}}function xt(t){var{fallback:e}=t,o=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n}(t,["fallback"]);const r=new Map,c=new Map;function l(t,r,c){return(l,i)=>(t.set(i.key,{rect:l.getBoundingClientRect()}),()=>{if(r.has(i.key)){const{rect:t}=r.get(i.key);return r.delete(i.key),function(t,e,r){const{delay:c=0,duration:l=(t=>30*Math.sqrt(t)),easing:i=wt}=n(n({},o),r),a=e.getBoundingClientRect(),u=t.left-a.left,f=t.top-a.top,d=t.width/a.width,p=t.height/a.height,m=Math.sqrt(u*u+f*f),h=getComputedStyle(e),g="none"===h.transform?"":h.transform,y=+h.opacity;return{delay:c,duration:s(l)?l(m):l,easing:i,css:(t,e)=>`\n\t\t\t\topacity: ${t*y};\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ${g} translate(${e*u}px,${e*f}px) scale(${t+(1-t)*d}, ${t+(1-t)*p});\n\t\t\t`}}(t,l,i)}return t.delete(i.key),e&&e(l,i,c)})}return[l(c,r,!1),l(r,c,!0)]}function Pt(e){let n,o,r,c,s,l=e[0].price+"";return{c(){n=v("div"),o=v("span"),r=$("$"),c=$(l),_(n,"class","price svelte-14stzkp"),j(n,"large",e[2])},m(t,e){h(t,n,e),m(n,o),m(o,r),m(o,c)},p(t,e){1&e&&l!==(l=t[0].price+"")&&x(c,l),4&e&&j(n,"large",t[2])},i(t){s||D(()=>{s=ot(o,_t,{easing:bt,duration:600}),s.start()})},o:t,d(t){t&&g(n)}}}function jt(e){let n,o,r,c,s,l,i,a,u,f,d,p,y,b=e[0].name+"",j=e[0].type+"",E=e[1]&&Pt(e);return{c(){n=v("div"),o=v("button"),r=v("div"),c=v("h2"),s=v("a"),l=$(b),a=w(),u=v("p"),f=$(j),d=w(),E&&E.c(),_(s,"target","_blank"),_(s,"href",i="https://cameo.com/"+e[0].id),_(c,"class","svelte-14stzkp"),_(u,"class","type svelte-14stzkp"),_(r,"class","details svelte-14stzkp"),_(o,"class","card-inner svelte-14stzkp"),P(o,"background-image","url("+e[0].image+")"),_(n,"class","card-outer svelte-14stzkp")},m(t,i){h(t,n,i),m(n,o),m(o,r),m(r,c),m(c,s),m(s,l),m(r,a),m(r,u),m(u,f),m(o,d),E&&E.m(o,null),p||(y=k(o,"click",e[4]),p=!0)},p(t,[e]){1&e&&b!==(b=t[0].name+"")&&x(l,b),1&e&&i!==(i="https://cameo.com/"+t[0].id)&&_(s,"href",i),1&e&&j!==(j=t[0].type+"")&&x(f,j),t[1]?E?(E.p(t,e),2&e&&tt(E,1)):(E=Pt(t),E.c(),tt(E,1),E.m(o,null)):E&&(E.d(1),E=null),1&e&&P(o,"background-image","url("+t[0].image+")")},i(t){tt(E)},o:t,d(t){t&&g(n),E&&E.d(),p=!1,y()}}}function Et(t,e,n){let{celeb:o}=e,{showPrice:r}=e,{winner:c}=e;const s=L();return t.$set=t=>{"celeb"in t&&n(0,o=t.celeb),"showPrice"in t&&n(1,r=t.showPrice),"winner"in t&&n(2,c=t.winner)},[o,r,c,s,()=>s("select")]}class Mt extends ft{constructor(t){super(),ut(this,t,Et,jt,l,{celeb:0,showPrice:1,winner:2})}}function Ct(t,e,n){const o=t.slice();return o[21]=e[n],o[6]=n,o}function Ot(t){t[23]=t[25][0],t[24]=t[25][1]}function St(t){let e;return{c(){e=$("Tap on the more monetisable celebrity's face, or tap 'same price' if\n      society values them equally.")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function qt(t){let e,n,o,r;const c=[zt,At],s=[];function l(t,e){return t[3]?0:1}return e=l(t),n=s[e]=c[e](t),{c(){n.c(),o=b()},m(t,n){s[e].m(t,n),h(t,o,n),r=!0},p(t,r){let i=e;e=l(t),e===i?s[e].p(t,r):(X(),et(s[i],1,1,()=>{s[i]=null}),Z(),n=s[e],n||(n=s[e]=c[e](t),n.c()),tt(n,1),n.m(o.parentNode,o))},i(t){r||(tt(n),r=!0)},o(t){et(n),r=!1},d(t){s[e].d(t),t&&g(o)}}}function At(t){let e,n,o,r={ctx:t,current:null,token:null,pending:Nt,then:Tt,catch:Lt,value:25,blocks:[,,,]};return ct(n=t[7][t[6]],r),{c(){e=b(),r.block.c()},m(t,n){h(t,e,n),r.block.m(t,r.anchor=n),r.mount=()=>e.parentNode,r.anchor=e,o=!0},p(e,o){if(t=e,r.ctx=t,64&o&&n!==(n=t[7][t[6]])&&ct(n,r));else{const e=t.slice();e[25]=r.resolved,r.block.p(e,o)}},i(t){o||(tt(r.block),o=!0)},o(t){for(let t=0;t<3;t+=1){et(r.blocks[t])}o=!1},d(t){t&&g(e),r.block.d(t),r.token=null,r=null}}}function zt(e){let n,o,r,c,s,l,i,a,u,f,d,p,y,b,P,j=e[4].length+"",E=e[12](e[5],e[4].length)+"";return{c(){n=v("div"),o=v("p"),o.textContent="Your score is...",r=w(),c=v("strong"),s=$(e[5]),l=$("/"),i=$(j),a=w(),u=v("p"),f=$(E),d=w(),p=v("button"),p.textContent="Back to main screen",_(c,"class","svelte-1l5sw70"),_(n,"class","game-end svelte-1l5sw70")},m(t,g){h(t,n,g),m(n,o),m(n,r),m(n,c),m(c,s),m(c,l),m(c,i),m(n,a),m(n,u),m(u,f),m(n,d),m(n,p),b||(P=k(p,"click",e[14]),b=!0)},p(t,e){32&e&&x(s,t[5]),16&e&&j!==(j=t[4].length+"")&&x(i,j),48&e&&E!==(E=t[12](t[5],t[4].length)+"")&&x(f,E)},i(t){y||D(()=>{y=ot(n,_t,{easing:bt,duration:800}),y.start()})},o:t,d(t){t&&g(n),b=!1,P()}}}function Lt(e){let n;return{c(){n=v("p"),n.textContent="Ooops! Failed to load data",_(n,"class","error svelte-1l5sw70")},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}function Tt(t){let e,n,o,r,s,l,i,a,u,f,d,p,y,$;function b(...e){return t[16](t[23],t[24],...e)}return Ot(t),o=new Mt({props:{celeb:t[23],winner:t[23].price>=t[24].price,showPrice:t[2]}}),o.$on("select",(function(...e){return t[15](t[23],t[24],...e)})),u=new Mt({props:{celeb:t[24],winner:t[24].price>=t[23].price,showPrice:t[2]}}),u.$on("select",(function(...e){return t[17](t[23],t[24],...e)})),{c(){e=v("div"),n=v("div"),st(o.$$.fragment),r=w(),s=v("div"),l=v("button"),l.textContent="Same price",i=w(),a=v("div"),st(u.$$.fragment),_(n,"class","card-container svelte-1l5sw70"),_(l,"class","same svelte-1l5sw70"),_(s,"class","svelte-1l5sw70"),_(a,"class","card-container svelte-1l5sw70"),_(e,"class","game svelte-1l5sw70")},m(c,f){h(c,e,f),m(e,n),lt(o,n,null),m(e,r),m(e,s),m(s,l),m(e,i),m(e,a),lt(u,a,null),p=!0,y||($=[k(l,"click",b),k(e,"outrostart",t[18]),k(e,"outroend",t[19])],y=!0)},p(e,n){t=e;const r={};64&n&&(r.celeb=t[23]),64&n&&(r.winner=t[23].price>=t[24].price),4&n&&(r.showPrice=t[2]),o.$set(r);const c={};64&n&&(c.celeb=t[24]),64&n&&(c.winner=t[24].price>=t[23].price),4&n&&(c.showPrice=t[2]),u.$set(c),Ot(t)},i(t){p||(tt(o.$$.fragment,t),tt(u.$$.fragment,t),D(()=>{d&&d.end(1),f||(f=ot(e,kt,{duration:200,y:20})),f.start()}),p=!0)},o(t){et(o.$$.fragment,t),et(u.$$.fragment,t),f&&f.invalidate(),d=rt(e,kt,{duration:200,y:-20}),p=!1},d(t){t&&g(e),it(o),it(u),t&&d&&d.end(),y=!1,c($)}}}function Nt(e){let n;return{c(){n=v("div"),n.innerHTML='<div class="loading-animation svelte-1l5sw70">Loading</div>',_(n,"class","loading svelte-1l5sw70")},m(t,e){h(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}function Rt(t){let e,n,o,r,c,s;return{c(){e=v("img"),_(e,"class","giant-result svelte-1l5sw70"),e.src!==(n="/icons/"+t[1]+".svg")&&_(e,"src",n),_(e,"alt",o=t[1]+" answer")},m(t,n){h(t,e,n),s=!0},p(t,r){(!s||2&r&&e.src!==(n="/icons/"+t[1]+".svg"))&&_(e,"src",n),(!s||2&r&&o!==(o=t[1]+" answer"))&&_(e,"alt",o)},i(t){s||(D(()=>{c&&c.end(1),r||(r=ot(e,kt,{x:100,duration:200})),r.start()}),s=!0)},o(n){r&&r.invalidate(),c=rt(e,t[9],{key:t[6]}),s=!1},d(t){t&&g(e),t&&c&&c.end()}}}function Bt(e){let n,o,r,c;return{c(){n=v("img"),n.src!==(o="/icons/"+e[21]+".svg")&&_(n,"src",o),_(n,"alt",r=e[21]+" answer"),_(n,"class","svelte-1l5sw70")},m(t,e){h(t,n,e)},p(t,e){16&e&&n.src!==(o="/icons/"+t[21]+".svg")&&_(n,"src",o),16&e&&r!==(r=t[21]+" answer")&&_(n,"alt",r)},i(t){c||D(()=>{c=ot(n,e[10],{key:e[6]}),c.start()})},o:t,d(t){t&&g(n)}}}function Ft(e){let n,o,r=e[21]&&Bt(e);return{c(){n=v("span"),r&&r.c(),o=w(),_(n,"class","result svelte-1l5sw70")},m(t,e){h(t,n,e),r&&r.m(n,null),m(n,o)},p(t,e){t[21]?r?(r.p(t,e),16&e&&tt(r,1)):(r=Bt(t),r.c(),tt(r,1),r.m(n,o)):r&&(r.d(1),r=null)},i(t){tt(r)},o:t,d(t){t&&g(n),r&&r.d()}}}function It(t){let e,n,o,r,c,s,l,i,a=!t[3]&&St(),u=t[0]&&qt(t),f=t[2]&&Rt(t),d=t[4],p=[];for(let e=0;e<d.length;e+=1)p[e]=Ft(Ct(t,d,e));return{c(){e=v("header"),n=v("p"),a&&a.c(),o=w(),r=v("div"),u&&u.c(),c=w(),f&&f.c(),s=w(),l=v("div");for(let t=0;t<p.length;t+=1)p[t].c();_(r,"class","game-container svelte-1l5sw70"),_(l,"class","results svelte-1l5sw70"),P(l,"grid-template-columns","repeat("+t[4].length+", 1fr)")},m(t,d){h(t,e,d),m(e,n),a&&a.m(n,null),h(t,o,d),h(t,r,d),u&&u.m(r,null),h(t,c,d),f&&f.m(t,d),h(t,s,d),h(t,l,d);for(let t=0;t<p.length;t+=1)p[t].m(l,null);i=!0},p(t,[e]){if(t[3]?a&&(a.d(1),a=null):a||(a=St(),a.c(),a.m(n,null)),t[0]?u?(u.p(t,e),1&e&&tt(u,1)):(u=qt(t),u.c(),tt(u,1),u.m(r,null)):u&&(X(),et(u,1,1,()=>{u=null}),Z()),t[2]?f?(f.p(t,e),4&e&&tt(f,1)):(f=Rt(t),f.c(),tt(f,1),f.m(s.parentNode,s)):f&&(X(),et(f,1,1,()=>{f=null}),Z()),16&e){let n;for(d=t[4],n=0;n<d.length;n+=1){const o=Ct(t,d,n);p[n]?(p[n].p(o,e),tt(p[n],1)):(p[n]=Ft(o),p[n].c(),tt(p[n],1),p[n].m(l,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=d.length}(!i||16&e)&&P(l,"grid-template-columns","repeat("+t[4].length+", 1fr)")},i(t){if(!i){tt(u),tt(f);for(let t=0;t<d.length;t+=1)tt(p[t]);i=!0}},o(t){et(u),et(f),i=!1},d(t){t&&g(e),a&&a.d(),t&&g(o),t&&g(r),u&&u.d(),t&&g(c),f&&f.d(t),t&&g(s),t&&g(l),y(p,t)}}}function Dt(t,e,n){let{selection:o}=e;const r=async t=>{const e=await fetch(`https://cameo-explorer.netlify.app/celebs/${t}.json`),n=await e.json();var o;return await(o=n.image,new Promise((t,e)=>{const n=new Image;n.onload=()=>t(n),n.onerror=e,n.src=o})),n},c=o.map(t=>Promise.all([r(t.a.id),r(t.b.id)])),s=L(),[l,i]=xt({easing:wt,duration:300});let a,u,f=!0,d=0,p=!1;const m=Array(o.length),h=async(t,e,r)=>{n(1,a=Math.sign(t.price-e.price)===r?"right":"wrong"),n(2,u=!0),await pt(1200),n(2,u=!1),n(4,m[d]=a,m),await pt(400),d<o.length-1?n(6,d+=1):n(3,p=!0)};let g;return t.$set=t=>{"selection"in t&&n(13,o=t.selection)},t.$$.update=()=>{16&t.$$.dirty&&n(5,g=m.filter(t=>"right"===t).length)},[f,a,u,p,m,g,d,c,s,l,i,h,(t,e)=>{const n=t/e;return dt(n<.5?["Ouch","That wasn't very good","Must try harder"]:n<.8?["Not bad!","Keep practicing!"]:n<1?["So close!","Almost there!"]:["You rock!","Flawless victory"])},o,()=>s("restart"),(t,e)=>{h(t,e,1)},(t,e)=>{h(t,e,0)},(t,e)=>{h(t,e,-1)},()=>n(0,f=!1),()=>n(0,f=!0)]}class Ht extends ft{constructor(t){super(),ut(this,t,Dt,It,l,{selection:13})}}function Wt(t){let e,n;return e=new Ht({props:{selection:t[1]}}),e.$on("restart",t[3]),{c(){st(e.$$.fragment)},m(t,o){lt(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.selection=t[1]),e.$set(o)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){it(e,t)}}}function Yt(e){let n,o;return n=new $t({}),n.$on("select",e[2]),{c(){st(n.$$.fragment)},m(t,e){lt(n,t,e),o=!0},p:t,i(t){o||(tt(n.$$.fragment,t),o=!0)},o(t){et(n.$$.fragment,t),o=!1},d(t){it(n,t)}}}function Kt(t){let e,n,o,r;const c=[Yt,Wt],s=[];function l(t,e){return"welcome"===t[0]?0:"playing"===t[0]?1:-1}return~(n=l(t))&&(o=s[n]=c[n](t)),{c(){e=v("main"),o&&o.c(),_(e,"class","svelte-2p147u")},m(t,o){h(t,e,o),~n&&s[n].m(e,null),r=!0},p(t,[r]){let i=n;n=l(t),n===i?~n&&s[n].p(t,r):(o&&(X(),et(s[i],1,1,()=>{s[i]=null}),Z()),~n?(o=s[n],o||(o=s[n]=c[n](t),o.c()),tt(o,1),o.m(e,null)):o=null)},i(t){r||(tt(o),r=!0)},o(t){et(o),r=!1},d(t){t&&g(e),~n&&s[n].d()}}}function Vt(t,e,n){let o,r,c="welcome";var s;s=()=>{o=(async()=>{const t=await fetch("https://cameo-explorer.netlify.app/celebs.json"),e=await t.json(),n=new Map;e.forEach(t=>n.set(t.id,t));const o=new Set;return e.forEach(t=>{t.reviews>=50&&(o.add(t),t.similar.forEach(t=>o.add(n.get(t))))}),{celebs:Array.from(o),lookup:n}})()},z().$$.on_mount.push(s);return[c,r,async t=>{const{celebs:e,lookup:s}=await o;n(1,r=function(t,e,n){const o=t.filter(t=>t.categories.includes(n)),r=new Set,c=[];let s=10;for(;s--;){const t=Math.random(),n=Math.floor(t*o.length),s=o[n];let l;mt(o,n);const i=s.similar.filter(t=>!r.has(t));if(i.length>0&&Math.random()<.75){const t=dt(i);l=e.get(t)}else l=dt(o);c.push({a:s,b:l}),r.add(s.id),r.add(l.id),mt(o,o.indexOf(l))}return c}(e,s,t.detail.category.slug)),n(0,c="playing")},()=>n(0,c="welcome")]}const Gt=new class extends ft{constructor(t){super(),ut(this,t,Vt,Kt,l,{})}}({target:document.body});return"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js"),Gt}();
//# sourceMappingURL=bundle.js.map
