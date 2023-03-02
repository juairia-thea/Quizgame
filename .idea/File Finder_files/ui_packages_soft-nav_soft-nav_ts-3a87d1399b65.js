"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_soft-nav_soft-nav_ts"],{15345:(t,e,n)=>{n.d(e,{N:()=>o,x:()=>a});var r=n(86283);function o(t){a(c(t))}function a(t){i(t)}function i(t){let e=r.n4?.querySelector("#js-global-screen-reader-notice");e&&(e.textContent===t?e.textContent=`${t}\u00A0`:e.textContent=t)}function c(t){return(t.getAttribute("aria-label")||t.innerText||"").trim()}},4412:(t,e,n)=>{n.d(e,{C:()=>a,x:()=>o});var r=n(86283);let o=r.n4?.readyState==="interactive"||r.n4?.readyState==="complete"?Promise.resolve():new Promise(t=>{r.n4?.addEventListener("DOMContentLoaded",()=>{t()})}),a=r.n4?.readyState==="complete"?Promise.resolve():new Promise(t=>{r.iG?.addEventListener("load",t)})},53729:(t,e,n)=>{n.d(e,{A7:()=>f,ko:()=>s,q1:()=>c});var r=n(15205),o=n(86283);let a=(0,r.Z)(i);function i(){return o.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}let c=(0,r.Z)(u);function u(){return o.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}let s=(0,r.Z)(l);function l(){return"enterprise"===a()}let f="webpack"},44544:(t,e,n)=>{n.d(e,{Z:()=>i,_:()=>c});var r=n(86283),o=n(71643);let a=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function i(t,e={throwQuotaErrorsOnSet:!1},n=r.iG,i=t=>t,c=t=>t){let u;try{if(!n)throw Error();u=n[t]||new a}catch{u=new a}let{throwQuotaErrorsOnSet:s}=e;function l(t){e.sendCacheStats&&(0,o.b)({incrementKey:t})}function f(t){try{if(u.removeItem(t),e.ttl){let e=`${t}:expiry`;u.removeItem(e)}}catch(t){}}return{getItem:function(t,e=new Date().getTime()){try{let n=u.getItem(t);if(!n)return null;let r=`${t}:expiry`,o=Number(u.getItem(r));if(o&&e>o)return f(t),f(r),l("SAFE_STORAGE_VALUE_EXPIRED"),null;return l("SAFE_STORAGE_VALUE_WITHIN_TTL"),i(n)}catch(t){return null}},setItem:function(t,n,r=new Date().getTime()){try{if(u.setItem(t,c(n)),e.ttl){let n=`${t}:expiry`,o=r+e.ttl;u.setItem(n,o.toString())}}catch(t){if(s&&t instanceof Error&&t.message.toLowerCase().includes("quota"))throw t}},removeItem:f,clear:u.clear,key:u.key,get length(){return u.length}}}function c(t){return i(t,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},39629:(t,e,n)=>{n.d(e,{LS:()=>a,cl:()=>i,rV:()=>o});var r=n(44544);let{getItem:o,setItem:a,removeItem:i}=(0,r.Z)("sessionStorage")},24536:(t,e,n)=>{n.d(e,{CF:()=>c,QE:()=>d,QW:()=>SoftNavErrorEvent,$g:()=>SoftNavSuccessEvent,FP:()=>g,r_:()=>p,Nb:()=>V,Gj:()=>k,wP:()=>G,OE:()=>U,sj:()=>D,Yl:()=>m,TL:()=>w,Ak:()=>B,U6:()=>O,cY:()=>W,LD:()=>S,BT:()=>h,u5:()=>R});var r=n(39629);let o=class SoftNavEvent extends Event{constructor(t,e){super(e),this.mechanism=t}};let SoftNavStartEvent=class SoftNavStartEvent extends o{constructor(t){super(t,d.START)}};let SoftNavSuccessEvent=class SoftNavSuccessEvent extends o{constructor(t,e){super(t,d.SUCCESS),this.visitCount=e}};let SoftNavErrorEvent=class SoftNavErrorEvent extends o{constructor(t,e){super(t,d.ERROR),this.error=e}};let SoftNavEndEvent=class SoftNavEndEvent extends o{constructor(t){super(t,d.END)}};var a=n(71643);let i="stats:soft-nav-duration",c={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME",ui:"UI",hard:"HARD"};function u(){performance.mark(i)}function s(){if(0===performance.getEntriesByName(i).length)return null;performance.measure(i,i);let t=performance.getEntriesByName(i),e=t.pop();return e?e.duration:null}function l(t){(0,a.b)({turboFailureReason:t,turboStartUrl:G(),turboEndUrl:window.location.href})}function f(){let t=s();if(!t)return;let e=c[k()],n=Math.round(t);e===c.react&&document.dispatchEvent(new CustomEvent("staffbar-update",{detail:{duration:n}})),(0,a.b)({requestUrl:window.location.href,softNavigationTiming:{mechanism:e,destination:V()||"rails",duration:n,initiator:j()||"rails"}})}let d=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}}),v="reload",E=0;function m(){E=0,document.dispatchEvent(new Event(d.INITIAL)),x()}function S(t){D()||(N(),document.dispatchEvent(new SoftNavStartEvent(t)),O(t),F(),P(),u())}function h(t={}){y(t)&&(E+=1,document.dispatchEvent(new SoftNavSuccessEvent(k(),E)),g(t))}function p(t={}){if(!y(t))return;E=0;let e=q()||v;document.dispatchEvent(new SoftNavErrorEvent(k(),e)),T(),l(e),x()}function g(t={}){y(t)&&(T(),document.dispatchEvent(new SoftNavEndEvent(k())),_())}function w(t={}){y(t)&&(f(),document.dispatchEvent(new Event(d.RENDER)))}function R(){document.dispatchEvent(new Event(d.FRAME_UPDATE))}function N(){document.dispatchEvent(new Event(d.PROGRESS_BAR.START))}function T(){document.dispatchEvent(new Event(d.PROGRESS_BAR.END))}function y({skipIfGoingToReactApp:t,allowedMechanisms:e=[]}={}){return D()&&(0===e.length||e.includes(k()))&&(!t||!V())}let A="soft-nav:fail",b="soft-nav:fail-referrer",I="soft-nav:referrer",L="soft-nav:marker",C="soft-nav:react-app-name";function x(){(0,r.LS)(L,"0"),(0,r.cl)(I),(0,r.cl)(A),(0,r.cl)(b),(0,r.cl)(C)}function O(t){(0,r.LS)(L,t)}function _(){(0,r.LS)(L,"0")}function D(){let t=(0,r.rV)(L);return t&&"0"!==t}function k(){return(0,r.rV)(L)}function U(){return Boolean(q())}function q(){return(0,r.rV)(A)}function B(t){(0,r.LS)(A,t||v),(0,r.LS)(b,window.location.href)}function P(){(0,r.LS)(I,window.location.href)}function G(){return(0,r.rV)(I)||document.referrer}function F(){let t=V();t?(0,r.LS)(C,t):(0,r.cl)(C)}function j(){return(0,r.rV)(C)}function V(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}var Q=n(15345),$=n(86283);let M=Object.freeze({INITIAL:"soft-nav:external:initial",START:"soft-nav:external:start",SUCCESS:"soft-nav:external:success",ERROR:"soft-nav:external:error",RENDER:"soft-nav:external:render"});function W(){$.n4?.addEventListener(d.SUCCESS,function(t){"turbo"===t.mechanism&&(0,Q.x)(`${document.title}`)}),$.n4?.addEventListener(M.INITIAL,m),$.n4?.addEventListener(M.START,t=>{S(t.detail.mechanism)}),$.n4?.addEventListener(M.SUCCESS,()=>h()),$.n4?.addEventListener(M.ERROR,()=>p()),$.n4?.addEventListener(M.RENDER,()=>w())}},86283:(t,e,n)=>{n.d(e,{Qg:()=>r.Qg,W6:()=>r.W6,cF:()=>r.cF,iG:()=>o.iG,jX:()=>o.jX,n4:()=>o.n4});var r=n(35647),o=n(73614)},73614:(t,e,n)=>{n.d(e,{iG:()=>o,jX:()=>a,n4:()=>r});let r="undefined"==typeof document?void 0:document,o="undefined"==typeof window?void 0:window,a="undefined"==typeof location?{pathname:"",origin:"",search:""}:location},35647:(t,e,n)=>{n.d(e,{Qg:()=>a,W6:()=>o,cF:()=>i});var r=n(73614);let o=void 0===r.n4,a=!o;function i(){return!!o||Boolean(r.n4.querySelector('react-app[data-ssr="true"]'))}},71643:(t,e,n)=>{n.d(e,{B:()=>m,b:()=>c});var r=n(86283),o=n(4412),a=n(53729);let i=[];function c(t,e=!1){void 0===t.timestamp&&(t.timestamp=new Date().getTime()),t.loggedIn=E(),t.staff=m(),t.bundler=a.A7,i.push(t),e?l():s()}let u=null;async function s(){await o.C,null==u&&(u=window.requestIdleCallback(l))}function l(){if(u=null,!i.length)return;let t=r.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!t)return;let e=f(i);for(let n of e)v(t,`{"stats": [${n.join(",")}] }`);i=[]}function f(t){let e=[],n=t.map(t=>JSON.stringify(t));for(;n.length>0;)e.push(d(n));return e}function d(t){let e=t.shift(),n=[e],r=e.length;for(;t.length>0&&r<=65536;){let e=t[0].length;if(r+e<=65536){let o=t.shift();n.push(o),r+=e}else break}return n}function v(t,e){try{navigator.sendBeacon&&navigator.sendBeacon(t,e)}catch{}}function E(){return!!r.n4?.head?.querySelector('meta[name="user-login"]')?.content}function m(){return!!r.n4?.head?.querySelector('meta[name="user-staff"]')?.content}r.n4?.addEventListener("pagehide",l),r.n4?.addEventListener("visibilitychange",l)}}]);
//# sourceMappingURL=ui_packages_soft-nav_soft-nav_ts-e605fc539d2a.js.map