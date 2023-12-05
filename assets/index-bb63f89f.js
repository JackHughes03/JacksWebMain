(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Xa(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const lt={},ss=[],gn=()=>{},yp=()=>!1,Sp=/^on[^a-z]/,ho=n=>Sp.test(n),qa=n=>n.startsWith("onUpdate:"),Pt=Object.assign,ja=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ep=Object.prototype.hasOwnProperty,$e=(n,e)=>Ep.call(n,e),Ve=Array.isArray,rs=n=>po(n)==="[object Map]",fd=n=>po(n)==="[object Set]",Ke=n=>typeof n=="function",yt=n=>typeof n=="string",Ya=n=>typeof n=="symbol",ft=n=>n!==null&&typeof n=="object",hd=n=>ft(n)&&Ke(n.then)&&Ke(n.catch),pd=Object.prototype.toString,po=n=>pd.call(n),Ap=n=>po(n).slice(8,-1),md=n=>po(n)==="[object Object]",Ka=n=>yt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Qr=Xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Tp=/-(\w)/g,us=mo(n=>n.replace(Tp,(e,t)=>t?t.toUpperCase():"")),Cp=/\B([A-Z])/g,vs=mo(n=>n.replace(Cp,"-$1").toLowerCase()),gd=mo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Bo=mo(n=>n?`on${gd(n)}`:""),Ys=(n,e)=>!Object.is(n,e),Ho=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},io=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Rp=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let nc;const Ea=()=>nc||(nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qa(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=yt(i)?Ip(i):Qa(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(yt(n))return n;if(ft(n))return n}}const Lp=/;(?![^(]*\))/g,Pp=/:([^]+)/,Dp=/\/\*[^]*?\*\//g;function Ip(n){const e={};return n.replace(Dp,"").split(Lp).forEach(t=>{if(t){const i=t.split(Pp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function go(n){let e="";if(yt(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const i=go(n[t]);i&&(e+=i+" ")}else if(ft(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Up="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fp=Xa(Up);function _d(n){return!!n||n===""}const xr=n=>yt(n)?n:n==null?"":Ve(n)||ft(n)&&(n.toString===pd||!Ke(n.toString))?JSON.stringify(n,vd,2):String(n),vd=(n,e)=>e&&e.__v_isRef?vd(n,e.value):rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:fd(e)?{[`Set(${e.size})`]:[...e.values()]}:ft(e)&&!Ve(e)&&!md(e)?String(e):e;let cn;class Np{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=cn,!e&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=cn;try{return cn=this,e()}finally{cn=t}}}on(){cn=this}off(){cn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Op(n,e=cn){e&&e.active&&e.effects.push(n)}function Bp(){return cn}const Za=n=>{const e=new Set(n);return e.w=0,e.n=0,e},xd=n=>(n.w&ci)>0,wd=n=>(n.n&ci)>0,Hp=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=ci},zp=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];xd(s)&&!wd(s)?s.delete(n):e[t++]=s,s.w&=~ci,s.n&=~ci}e.length=t}},Aa=new WeakMap;let Hs=0,ci=1;const Ta=30;let fn;const yi=Symbol(""),Ca=Symbol("");class Ja{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Op(this,i)}run(){if(!this.active)return this.fn();let e=fn,t=si;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=fn,fn=this,si=!0,ci=1<<++Hs,Hs<=Ta?Hp(this):ic(this),this.fn()}finally{Hs<=Ta&&zp(this),ci=1<<--Hs,fn=this.parent,si=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){fn===this?this.deferStop=!0:this.active&&(ic(this),this.onStop&&this.onStop(),this.active=!1)}}function ic(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let si=!0;const bd=[];function xs(){bd.push(si),si=!1}function ws(){const n=bd.pop();si=n===void 0?!0:n}function Kt(n,e,t){if(si&&fn){let i=Aa.get(n);i||Aa.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Za()),Md(s)}}function Md(n,e){let t=!1;Hs<=Ta?wd(n)||(n.n|=ci,t=!xd(n)):t=!n.has(fn),t&&(n.add(fn),fn.deps.push(n))}function Wn(n,e,t,i,s,r){const a=Aa.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Ve(n)){const l=Number(i);a.forEach((u,f)=>{(f==="length"||f>=l)&&o.push(u)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Ve(n)?Ka(t)&&o.push(a.get("length")):(o.push(a.get(yi)),rs(n)&&o.push(a.get(Ca)));break;case"delete":Ve(n)||(o.push(a.get(yi)),rs(n)&&o.push(a.get(Ca)));break;case"set":rs(n)&&o.push(a.get(yi));break}if(o.length===1)o[0]&&Ra(o[0]);else{const l=[];for(const u of o)u&&l.push(...u);Ra(Za(l))}}function Ra(n,e){const t=Ve(n)?n:[...n];for(const i of t)i.computed&&sc(i);for(const i of t)i.computed||sc(i)}function sc(n,e){(n!==fn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const kp=Xa("__proto__,__v_isRef,__isVue"),yd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ya)),Gp=$a(),Vp=$a(!1,!0),Wp=$a(!0),rc=Xp();function Xp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=tt(this);for(let r=0,a=this.length;r<a;r++)Kt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(tt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){xs();const i=tt(this)[e].apply(this,t);return ws(),i}}),n}function qp(n){const e=tt(this);return Kt(e,"has",n),e.hasOwnProperty(n)}function $a(n=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(n?e?lm:Cd:e?Td:Ad).get(i))return i;const a=Ve(i);if(!n){if(a&&$e(rc,s))return Reflect.get(rc,s,r);if(s==="hasOwnProperty")return qp}const o=Reflect.get(i,s,r);return(Ya(s)?yd.has(s):kp(s))||(n||Kt(i,"get",s),e)?o:Nt(o)?a&&Ka(s)?o:o.value:ft(o)?n?Rd(o):nl(o):o}}const jp=Sd(),Yp=Sd(!0);function Sd(n=!1){return function(t,i,s,r){let a=t[i];if(ds(a)&&Nt(a)&&!Nt(s))return!1;if(!n&&(!so(s)&&!ds(s)&&(a=tt(a),s=tt(s)),!Ve(t)&&Nt(a)&&!Nt(s)))return a.value=s,!0;const o=Ve(t)&&Ka(i)?Number(i)<t.length:$e(t,i),l=Reflect.set(t,i,s,r);return t===tt(r)&&(o?Ys(s,a)&&Wn(t,"set",i,s):Wn(t,"add",i,s)),l}}function Kp(n,e){const t=$e(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Wn(n,"delete",e,void 0),i}function Qp(n,e){const t=Reflect.has(n,e);return(!Ya(e)||!yd.has(e))&&Kt(n,"has",e),t}function Zp(n){return Kt(n,"iterate",Ve(n)?"length":yi),Reflect.ownKeys(n)}const Ed={get:Gp,set:jp,deleteProperty:Kp,has:Qp,ownKeys:Zp},Jp={get:Wp,set(n,e){return!0},deleteProperty(n,e){return!0}},$p=Pt({},Ed,{get:Vp,set:Yp}),el=n=>n,_o=n=>Reflect.getPrototypeOf(n);function wr(n,e,t=!1,i=!1){n=n.__v_raw;const s=tt(n),r=tt(e);t||(e!==r&&Kt(s,"get",e),Kt(s,"get",r));const{has:a}=_o(s),o=i?el:t?sl:Ks;if(a.call(s,e))return o(n.get(e));if(a.call(s,r))return o(n.get(r));n!==s&&n.get(e)}function br(n,e=!1){const t=this.__v_raw,i=tt(t),s=tt(n);return e||(n!==s&&Kt(i,"has",n),Kt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Mr(n,e=!1){return n=n.__v_raw,!e&&Kt(tt(n),"iterate",yi),Reflect.get(n,"size",n)}function oc(n){n=tt(n);const e=tt(this);return _o(e).has.call(e,n)||(e.add(n),Wn(e,"add",n,n)),this}function ac(n,e){e=tt(e);const t=tt(this),{has:i,get:s}=_o(t);let r=i.call(t,n);r||(n=tt(n),r=i.call(t,n));const a=s.call(t,n);return t.set(n,e),r?Ys(e,a)&&Wn(t,"set",n,e):Wn(t,"add",n,e),this}function lc(n){const e=tt(this),{has:t,get:i}=_o(e);let s=t.call(e,n);s||(n=tt(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&Wn(e,"delete",n,void 0),r}function cc(){const n=tt(this),e=n.size!==0,t=n.clear();return e&&Wn(n,"clear",void 0,void 0),t}function yr(n,e){return function(i,s){const r=this,a=r.__v_raw,o=tt(a),l=e?el:n?sl:Ks;return!n&&Kt(o,"iterate",yi),a.forEach((u,f)=>i.call(s,l(u),l(f),r))}}function Sr(n,e,t){return function(...i){const s=this.__v_raw,r=tt(s),a=rs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,u=s[n](...i),f=t?el:e?sl:Ks;return!e&&Kt(r,"iterate",l?Ca:yi),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:o?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Kn(n){return function(...e){return n==="delete"?!1:this}}function em(){const n={get(r){return wr(this,r)},get size(){return Mr(this)},has:br,add:oc,set:ac,delete:lc,clear:cc,forEach:yr(!1,!1)},e={get(r){return wr(this,r,!1,!0)},get size(){return Mr(this)},has:br,add:oc,set:ac,delete:lc,clear:cc,forEach:yr(!1,!0)},t={get(r){return wr(this,r,!0)},get size(){return Mr(this,!0)},has(r){return br.call(this,r,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:yr(!0,!1)},i={get(r){return wr(this,r,!0,!0)},get size(){return Mr(this,!0)},has(r){return br.call(this,r,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:yr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Sr(r,!1,!1),t[r]=Sr(r,!0,!1),e[r]=Sr(r,!1,!0),i[r]=Sr(r,!0,!0)}),[n,t,e,i]}const[tm,nm,im,sm]=em();function tl(n,e){const t=e?n?sm:im:n?nm:tm;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get($e(t,s)&&s in i?t:i,s,r)}const rm={get:tl(!1,!1)},om={get:tl(!1,!0)},am={get:tl(!0,!1)},Ad=new WeakMap,Td=new WeakMap,Cd=new WeakMap,lm=new WeakMap;function cm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function um(n){return n.__v_skip||!Object.isExtensible(n)?0:cm(Ap(n))}function nl(n){return ds(n)?n:il(n,!1,Ed,rm,Ad)}function dm(n){return il(n,!1,$p,om,Td)}function Rd(n){return il(n,!0,Jp,am,Cd)}function il(n,e,t,i,s){if(!ft(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const a=um(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function os(n){return ds(n)?os(n.__v_raw):!!(n&&n.__v_isReactive)}function ds(n){return!!(n&&n.__v_isReadonly)}function so(n){return!!(n&&n.__v_isShallow)}function Ld(n){return os(n)||ds(n)}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function Pd(n){return io(n,"__v_skip",!0),n}const Ks=n=>ft(n)?nl(n):n,sl=n=>ft(n)?Rd(n):n;function Dd(n){si&&fn&&(n=tt(n),Md(n.dep||(n.dep=Za())))}function Id(n,e){n=tt(n);const t=n.dep;t&&Ra(t)}function Nt(n){return!!(n&&n.__v_isRef===!0)}function gt(n){return fm(n,!1)}function fm(n,e){return Nt(n)?n:new hm(n,e)}class hm{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:tt(e),this._value=t?e:Ks(e)}get value(){return Dd(this),this._value}set value(e){const t=this.__v_isShallow||so(e)||ds(e);e=t?e:tt(e),Ys(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ks(e),Id(this))}}function pm(n){return Nt(n)?n.value:n}const mm={get:(n,e,t)=>pm(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Nt(s)&&!Nt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Ud(n){return os(n)?n:new Proxy(n,mm)}class gm{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ja(e,()=>{this._dirty||(this._dirty=!0,Id(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=tt(this);return Dd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function _m(n,e,t=!1){let i,s;const r=Ke(n);return r?(i=n,s=gn):(i=n.get,s=n.set),new gm(i,s,r||!s,t)}function ri(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){vo(r,e,t)}return s}function _n(n,e,t,i){if(Ke(n)){const r=ri(n,e,t,i);return r&&hd(r)&&r.catch(a=>{vo(a,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(_n(n[r],e,t,i));return s}function vo(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const a=e.proxy,o=t;for(;r;){const u=r.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,a,o)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ri(l,null,10,[n,a,o]);return}}vm(n,t,s,i)}function vm(n,e,t,i=!0){console.error(n)}let Qs=!1,La=!1;const Ut=[];let En=0;const as=[];let kn=null,wi=0;const Fd=Promise.resolve();let rl=null;function xm(n){const e=rl||Fd;return n?e.then(this?n.bind(this):n):e}function wm(n){let e=En+1,t=Ut.length;for(;e<t;){const i=e+t>>>1;Zs(Ut[i])<n?e=i+1:t=i}return e}function ol(n){(!Ut.length||!Ut.includes(n,Qs&&n.allowRecurse?En+1:En))&&(n.id==null?Ut.push(n):Ut.splice(wm(n.id),0,n),Nd())}function Nd(){!Qs&&!La&&(La=!0,rl=Fd.then(Bd))}function bm(n){const e=Ut.indexOf(n);e>En&&Ut.splice(e,1)}function Mm(n){Ve(n)?as.push(...n):(!kn||!kn.includes(n,n.allowRecurse?wi+1:wi))&&as.push(n),Nd()}function uc(n,e=Qs?En+1:0){for(;e<Ut.length;e++){const t=Ut[e];t&&t.pre&&(Ut.splice(e,1),e--,t())}}function Od(n){if(as.length){const e=[...new Set(as)];if(as.length=0,kn){kn.push(...e);return}for(kn=e,kn.sort((t,i)=>Zs(t)-Zs(i)),wi=0;wi<kn.length;wi++)kn[wi]();kn=null,wi=0}}const Zs=n=>n.id==null?1/0:n.id,ym=(n,e)=>{const t=Zs(n)-Zs(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Bd(n){La=!1,Qs=!0,Ut.sort(ym);const e=gn;try{for(En=0;En<Ut.length;En++){const t=Ut[En];t&&t.active!==!1&&ri(t,null,14)}}finally{En=0,Ut.length=0,Od(),Qs=!1,rl=null,(Ut.length||as.length)&&Bd()}}function Sm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||lt;let s=t;const r=e.startsWith("update:"),a=r&&e.slice(7);if(a&&a in i){const f=`${a==="modelValue"?"model":a}Modifiers`,{number:p,trim:m}=i[f]||lt;m&&(s=t.map(_=>yt(_)?_.trim():_)),p&&(s=t.map(Rp))}let o,l=i[o=Bo(e)]||i[o=Bo(us(e))];!l&&r&&(l=i[o=Bo(vs(e))]),l&&_n(l,n,6,s);const u=i[o+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,_n(u,n,6,s)}}function Hd(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Ke(n)){const l=u=>{const f=Hd(u,e,!0);f&&(o=!0,Pt(a,f))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(ft(n)&&i.set(n,null),null):(Ve(r)?r.forEach(l=>a[l]=null):Pt(a,r),ft(n)&&i.set(n,a),a)}function xo(n,e){return!n||!ho(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(n,e[0].toLowerCase()+e.slice(1))||$e(n,vs(e))||$e(n,e))}let An=null,zd=null;function ro(n){const e=An;return An=n,zd=n&&n.type.__scopeId||null,e}function Em(n,e=An,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&bc(-1);const r=ro(e);let a;try{a=n(...s)}finally{ro(r),i._d&&bc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function zo(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[a],slots:o,attrs:l,emit:u,render:f,renderCache:p,data:m,setupState:_,ctx:M,inheritAttrs:b}=n;let h,g;const T=ro(n);try{if(t.shapeFlag&4){const E=s||i;h=yn(f.call(E,E,p,r,_,m,M)),g=l}else{const E=e;h=yn(E.length>1?E(r,{attrs:l,slots:o,emit:u}):E(r,null)),g=e.props?l:Am(l)}}catch(E){Xs.length=0,vo(E,n,1),h=Tn(Ri)}let y=h;if(g&&b!==!1){const E=Object.keys(g),{shapeFlag:P}=y;E.length&&P&7&&(a&&E.some(qa)&&(g=Tm(g,a)),y=fs(y,g))}return t.dirs&&(y=fs(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),h=y,ro(T),h}const Am=n=>{let e;for(const t in n)(t==="class"||t==="style"||ho(t))&&((e||(e={}))[t]=n[t]);return e},Tm=(n,e)=>{const t={};for(const i in n)(!qa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Cm(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?dc(i,a,u):!!a;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(a[m]!==i[m]&&!xo(u,m))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?dc(i,a,u):!0:!!a;return!1}function dc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!xo(t,r))return!0}return!1}function Rm({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Lm=n=>n.__isSuspense;function Pm(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):Mm(n)}const Er={};function ko(n,e,t){return kd(n,e,t)}function kd(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:a}=lt){var o;const l=Bp()===((o=Ft)==null?void 0:o.scope)?Ft:null;let u,f=!1,p=!1;if(Nt(n)?(u=()=>n.value,f=so(n)):os(n)?(u=()=>n,i=!0):Ve(n)?(p=!0,f=n.some(E=>os(E)||so(E)),u=()=>n.map(E=>{if(Nt(E))return E.value;if(os(E))return ns(E);if(Ke(E))return ri(E,l,2)})):Ke(n)?e?u=()=>ri(n,l,2):u=()=>{if(!(l&&l.isUnmounted))return m&&m(),_n(n,l,3,[_])}:u=gn,e&&i){const E=u;u=()=>ns(E())}let m,_=E=>{m=T.onStop=()=>{ri(E,l,4)}},M;if($s)if(_=gn,e?t&&_n(e,l,3,[u(),p?[]:void 0,_]):u(),s==="sync"){const E=Sg();M=E.__watcherHandles||(E.__watcherHandles=[])}else return gn;let b=p?new Array(n.length).fill(Er):Er;const h=()=>{if(T.active)if(e){const E=T.run();(i||f||(p?E.some((P,D)=>Ys(P,b[D])):Ys(E,b)))&&(m&&m(),_n(e,l,3,[E,b===Er?void 0:p&&b[0]===Er?[]:b,_]),b=E)}else T.run()};h.allowRecurse=!!e;let g;s==="sync"?g=h:s==="post"?g=()=>Xt(h,l&&l.suspense):(h.pre=!0,l&&(h.id=l.uid),g=()=>ol(h));const T=new Ja(u,g);e?t?h():b=T.run():s==="post"?Xt(T.run.bind(T),l&&l.suspense):T.run();const y=()=>{T.stop(),l&&l.scope&&ja(l.scope.effects,T)};return M&&M.push(y),y}function Dm(n,e,t){const i=this.proxy,s=yt(n)?n.includes(".")?Gd(i,n):()=>i[n]:n.bind(i,i);let r;Ke(e)?r=e:(r=e.handler,t=e);const a=Ft;hs(this);const o=kd(s,r.bind(i),t);return a?hs(a):Si(),o}function Gd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function ns(n,e){if(!ft(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Nt(n))ns(n.value,e);else if(Ve(n))for(let t=0;t<n.length;t++)ns(n[t],e);else if(fd(n)||rs(n))n.forEach(t=>{ns(t,e)});else if(md(n))for(const t in n)ns(n[t],e);return n}function fi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(xs(),_n(l,t,8,[n.el,o,n,e]),ws())}}const Zr=n=>!!n.type.__asyncLoader,Vd=n=>n.type.__isKeepAlive;function Im(n,e){Wd(n,"a",e)}function Um(n,e){Wd(n,"da",e)}function Wd(n,e,t=Ft){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(wo(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Vd(s.parent.vnode)&&Fm(i,e,t,s),s=s.parent}}function Fm(n,e,t,i){const s=wo(e,n,i,!0);qd(()=>{ja(i[e],s)},t)}function wo(n,e,t=Ft,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;xs(),hs(t);const o=_n(e,t,n,a);return Si(),ws(),o});return i?s.unshift(r):s.push(r),r}}const qn=n=>(e,t=Ft)=>(!$s||n==="sp")&&wo(n,(...i)=>e(...i),t),Nm=qn("bm"),Xd=qn("m"),Om=qn("bu"),Bm=qn("u"),Hm=qn("bum"),qd=qn("um"),zm=qn("sp"),km=qn("rtg"),Gm=qn("rtc");function Vm(n,e=Ft){wo("ec",n,e)}const Wm=Symbol.for("v-ndc");function fc(n,e,t,i){let s;const r=t&&t[i];if(Ve(n)||yt(n)){s=new Array(n.length);for(let a=0,o=n.length;a<o;a++)s[a]=e(n[a],a,void 0,r&&r[a])}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(ft(n))if(n[Symbol.iterator])s=Array.from(n,(a,o)=>e(a,o,void 0,r&&r[o]));else{const a=Object.keys(n);s=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const u=a[o];s[o]=e(n[u],u,o,r&&r[o])}}else s=[];return t&&(t[i]=s),s}const Pa=n=>n?rf(n)?fl(n)||n.proxy:Pa(n.parent):null,Ws=Pt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pa(n.parent),$root:n=>Pa(n.root),$emit:n=>n.emit,$options:n=>al(n),$forceUpdate:n=>n.f||(n.f=()=>ol(n.update)),$nextTick:n=>n.n||(n.n=xm.bind(n.proxy)),$watch:n=>Dm.bind(n)}),Go=(n,e)=>n!==lt&&!n.__isScriptSetup&&$e(n,e),Xm={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;let u;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Go(i,e))return a[e]=1,i[e];if(s!==lt&&$e(s,e))return a[e]=2,s[e];if((u=n.propsOptions[0])&&$e(u,e))return a[e]=3,r[e];if(t!==lt&&$e(t,e))return a[e]=4,t[e];Da&&(a[e]=0)}}const f=Ws[e];let p,m;if(f)return e==="$attrs"&&Kt(n,"get",e),f(n);if((p=o.__cssModules)&&(p=p[e]))return p;if(t!==lt&&$e(t,e))return a[e]=4,t[e];if(m=l.config.globalProperties,$e(m,e))return m[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Go(s,e)?(s[e]=t,!0):i!==lt&&$e(i,e)?(i[e]=t,!0):$e(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},a){let o;return!!t[a]||n!==lt&&$e(n,a)||Go(e,a)||(o=r[0])&&$e(o,a)||$e(i,a)||$e(Ws,a)||$e(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:$e(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function hc(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Da=!0;function qm(n){const e=al(n),t=n.proxy,i=n.ctx;Da=!1,e.beforeCreate&&pc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:M,activated:b,deactivated:h,beforeDestroy:g,beforeUnmount:T,destroyed:y,unmounted:E,render:P,renderTracked:D,renderTriggered:I,errorCaptured:J,serverPrefetch:A,expose:L,inheritAttrs:pe,components:me,directives:V,filters:j}=e;if(u&&jm(u,i,null),a)for(const O in a){const Q=a[O];Ke(Q)&&(i[O]=Q.bind(t))}if(s){const O=s.call(t,t);ft(O)&&(n.data=nl(O))}if(Da=!0,r)for(const O in r){const Q=r[O],ge=Ke(Q)?Q.bind(t,t):Ke(Q.get)?Q.get.bind(t,t):gn,ue=!Ke(Q)&&Ke(Q.set)?Q.set.bind(t):gn,W=Mg({get:ge,set:ue});Object.defineProperty(i,O,{enumerable:!0,configurable:!0,get:()=>W.value,set:Y=>W.value=Y})}if(o)for(const O in o)jd(o[O],i,t,O);if(l){const O=Ke(l)?l.call(t):l;Reflect.ownKeys(O).forEach(Q=>{$m(Q,O[Q])})}f&&pc(f,n,"c");function ie(O,Q){Ve(Q)?Q.forEach(ge=>O(ge.bind(t))):Q&&O(Q.bind(t))}if(ie(Nm,p),ie(Xd,m),ie(Om,_),ie(Bm,M),ie(Im,b),ie(Um,h),ie(Vm,J),ie(Gm,D),ie(km,I),ie(Hm,T),ie(qd,E),ie(zm,A),Ve(L))if(L.length){const O=n.exposed||(n.exposed={});L.forEach(Q=>{Object.defineProperty(O,Q,{get:()=>t[Q],set:ge=>t[Q]=ge})})}else n.exposed||(n.exposed={});P&&n.render===gn&&(n.render=P),pe!=null&&(n.inheritAttrs=pe),me&&(n.components=me),V&&(n.directives=V)}function jm(n,e,t=gn){Ve(n)&&(n=Ia(n));for(const i in n){const s=n[i];let r;ft(s)?"default"in s?r=Jr(s.from||i,s.default,!0):r=Jr(s.from||i):r=Jr(s),Nt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function pc(n,e,t){_n(Ve(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function jd(n,e,t,i){const s=i.includes(".")?Gd(t,i):()=>t[i];if(yt(n)){const r=e[n];Ke(r)&&ko(s,r)}else if(Ke(n))ko(s,n.bind(t));else if(ft(n))if(Ve(n))n.forEach(r=>jd(r,e,t,i));else{const r=Ke(n.handler)?n.handler.bind(t):e[n.handler];Ke(r)&&ko(s,r,n)}}function al(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(u=>oo(l,u,a,!0)),oo(l,e,a)),ft(e)&&r.set(e,l),l}function oo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&oo(n,r,t,!0),s&&s.forEach(a=>oo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Ym[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Ym={data:mc,props:gc,emits:gc,methods:zs,computed:zs,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:zs,directives:zs,watch:Qm,provide:mc,inject:Km};function mc(n,e){return e?n?function(){return Pt(Ke(n)?n.call(this,this):n,Ke(e)?e.call(this,this):e)}:e:n}function Km(n,e){return zs(Ia(n),Ia(e))}function Ia(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Bt(n,e){return n?[...new Set([].concat(n,e))]:e}function zs(n,e){return n?Pt(Object.create(null),n,e):e}function gc(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:Pt(Object.create(null),hc(n),hc(e??{})):e}function Qm(n,e){if(!n)return e;if(!e)return n;const t=Pt(Object.create(null),n);for(const i in e)t[i]=Bt(n[i],e[i]);return t}function Yd(){return{app:null,config:{isNativeTag:yp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zm=0;function Jm(n,e){return function(i,s=null){Ke(i)||(i=Pt({},i)),s!=null&&!ft(s)&&(s=null);const r=Yd(),a=new Set;let o=!1;const l=r.app={_uid:Zm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Eg,get config(){return r.config},set config(u){},use(u,...f){return a.has(u)||(u&&Ke(u.install)?(a.add(u),u.install(l,...f)):Ke(u)&&(a.add(u),u(l,...f))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,f){return f?(r.components[u]=f,l):r.components[u]},directive(u,f){return f?(r.directives[u]=f,l):r.directives[u]},mount(u,f,p){if(!o){const m=Tn(i,s);return m.appContext=r,f&&e?e(m,u):n(m,u,p),o=!0,l._container=u,u.__vue_app__=l,fl(m.component)||m.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(u,f){return r.provides[u]=f,l},runWithContext(u){ao=l;try{return u()}finally{ao=null}}};return l}}let ao=null;function $m(n,e){if(Ft){let t=Ft.provides;const i=Ft.parent&&Ft.parent.provides;i===t&&(t=Ft.provides=Object.create(i)),t[n]=e}}function Jr(n,e,t=!1){const i=Ft||An;if(i||ao){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ao._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ke(e)?e.call(i&&i.proxy):e}}function eg(n,e,t,i=!1){const s={},r={};io(r,Mo,1),n.propsDefaults=Object.create(null),Kd(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:dm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function tg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=tt(s),[l]=n.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(xo(n.emitsOptions,m))continue;const _=e[m];if(l)if($e(r,m))_!==r[m]&&(r[m]=_,u=!0);else{const M=us(m);s[M]=Ua(l,o,M,_,n,!1)}else _!==r[m]&&(r[m]=_,u=!0)}}}else{Kd(n,e,s,r)&&(u=!0);let f;for(const p in o)(!e||!$e(e,p)&&((f=vs(p))===p||!$e(e,f)))&&(l?t&&(t[p]!==void 0||t[f]!==void 0)&&(s[p]=Ua(l,o,p,void 0,n,!0)):delete s[p]);if(r!==o)for(const p in r)(!e||!$e(e,p))&&(delete r[p],u=!0)}u&&Wn(n,"set","$attrs")}function Kd(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Qr(l))continue;const u=e[l];let f;s&&$e(s,f=us(l))?!r||!r.includes(f)?t[f]=u:(o||(o={}))[f]=u:xo(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(r){const l=tt(t),u=o||lt;for(let f=0;f<r.length;f++){const p=r[f];t[p]=Ua(s,l,p,u[p],n,!$e(u,p))}}return a}function Ua(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=$e(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ke(l)){const{propsDefaults:u}=s;t in u?i=u[t]:(hs(s),i=u[t]=l.call(null,e),Si())}else i=l}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===vs(t))&&(i=!0))}return i}function Qd(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Ke(n)){const f=p=>{l=!0;const[m,_]=Qd(p,e,!0);Pt(a,m),_&&o.push(..._)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!r&&!l)return ft(n)&&i.set(n,ss),ss;if(Ve(r))for(let f=0;f<r.length;f++){const p=us(r[f]);_c(p)&&(a[p]=lt)}else if(r)for(const f in r){const p=us(f);if(_c(p)){const m=r[f],_=a[p]=Ve(m)||Ke(m)?{type:m}:Pt({},m);if(_){const M=wc(Boolean,_.type),b=wc(String,_.type);_[0]=M>-1,_[1]=b<0||M<b,(M>-1||$e(_,"default"))&&o.push(p)}}}const u=[a,o];return ft(n)&&i.set(n,u),u}function _c(n){return n[0]!=="$"}function vc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function xc(n,e){return vc(n)===vc(e)}function wc(n,e){return Ve(e)?e.findIndex(t=>xc(t,n)):Ke(e)&&xc(e,n)?0:-1}const Zd=n=>n[0]==="_"||n==="$stable",ll=n=>Ve(n)?n.map(yn):[yn(n)],ng=(n,e,t)=>{if(e._n)return e;const i=Em((...s)=>ll(e(...s)),t);return i._c=!1,i},Jd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Zd(s))continue;const r=n[s];if(Ke(r))e[s]=ng(s,r,i);else if(r!=null){const a=ll(r);e[s]=()=>a}}},$d=(n,e)=>{const t=ll(e);n.slots.default=()=>t},ig=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=tt(e),io(e,"_",t)):Jd(e,n.slots={})}else n.slots={},e&&$d(n,e);io(n.slots,Mo,1)},sg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=lt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:(Pt(s,e),!t&&o===1&&delete s._):(r=!e.$stable,Jd(e,s)),a=e}else e&&($d(n,e),a={default:1});if(r)for(const o in s)!Zd(o)&&!(o in a)&&delete s[o]};function Fa(n,e,t,i,s=!1){if(Ve(n)){n.forEach((m,_)=>Fa(m,e&&(Ve(e)?e[_]:e),t,i,s));return}if(Zr(i)&&!s)return;const r=i.shapeFlag&4?fl(i.component)||i.component.proxy:i.el,a=s?null:r,{i:o,r:l}=n,u=e&&e.r,f=o.refs===lt?o.refs={}:o.refs,p=o.setupState;if(u!=null&&u!==l&&(yt(u)?(f[u]=null,$e(p,u)&&(p[u]=null)):Nt(u)&&(u.value=null)),Ke(l))ri(l,o,12,[a,f]);else{const m=yt(l),_=Nt(l);if(m||_){const M=()=>{if(n.f){const b=m?$e(p,l)?p[l]:f[l]:l.value;s?Ve(b)&&ja(b,r):Ve(b)?b.includes(r)||b.push(r):m?(f[l]=[r],$e(p,l)&&(p[l]=f[l])):(l.value=[r],n.k&&(f[n.k]=l.value))}else m?(f[l]=a,$e(p,l)&&(p[l]=a)):_&&(l.value=a,n.k&&(f[n.k]=a))};a?(M.id=-1,Xt(M,t)):M()}}}const Xt=Pm;function rg(n){return og(n)}function og(n,e){const t=Ea();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=gn,insertStaticContent:M}=n,b=(x,U,B,K=null,X=null,de=null,he=!1,Z=null,le=!!U.dynamicChildren)=>{if(x===U)return;x&&!Is(x,U)&&(K=Ue(x),Y(x,X,de,!0),x=null),U.patchFlag===-2&&(le=!1,U.dynamicChildren=null);const{type:ce,ref:_e,shapeFlag:S}=U;switch(ce){case bo:h(x,U,B,K);break;case Ri:g(x,U,B,K);break;case $r:x==null&&T(U,B,K,he);break;case un:me(x,U,B,K,X,de,he,Z,le);break;default:S&1?P(x,U,B,K,X,de,he,Z,le):S&6?V(x,U,B,K,X,de,he,Z,le):(S&64||S&128)&&ce.process(x,U,B,K,X,de,he,Z,le,Ge)}_e!=null&&X&&Fa(_e,x&&x.ref,de,U||x,!U)},h=(x,U,B,K)=>{if(x==null)i(U.el=o(U.children),B,K);else{const X=U.el=x.el;U.children!==x.children&&u(X,U.children)}},g=(x,U,B,K)=>{x==null?i(U.el=l(U.children||""),B,K):U.el=x.el},T=(x,U,B,K)=>{[x.el,x.anchor]=M(x.children,U,B,K,x.el,x.anchor)},y=({el:x,anchor:U},B,K)=>{let X;for(;x&&x!==U;)X=m(x),i(x,B,K),x=X;i(U,B,K)},E=({el:x,anchor:U})=>{let B;for(;x&&x!==U;)B=m(x),s(x),x=B;s(U)},P=(x,U,B,K,X,de,he,Z,le)=>{he=he||U.type==="svg",x==null?D(U,B,K,X,de,he,Z,le):A(x,U,X,de,he,Z,le)},D=(x,U,B,K,X,de,he,Z)=>{let le,ce;const{type:_e,props:S,shapeFlag:w,transition:N,dirs:z}=x;if(le=x.el=a(x.type,de,S&&S.is,S),w&8?f(le,x.children):w&16&&J(x.children,le,null,K,X,de&&_e!=="foreignObject",he,Z),z&&fi(x,null,K,"created"),I(le,x,x.scopeId,he,K),S){for(const ae in S)ae!=="value"&&!Qr(ae)&&r(le,ae,null,S[ae],de,x.children,K,X,Le);"value"in S&&r(le,"value",null,S.value),(ce=S.onVnodeBeforeMount)&&Mn(ce,K,x)}z&&fi(x,null,K,"beforeMount");const ne=(!X||X&&!X.pendingBranch)&&N&&!N.persisted;ne&&N.beforeEnter(le),i(le,U,B),((ce=S&&S.onVnodeMounted)||ne||z)&&Xt(()=>{ce&&Mn(ce,K,x),ne&&N.enter(le),z&&fi(x,null,K,"mounted")},X)},I=(x,U,B,K,X)=>{if(B&&_(x,B),K)for(let de=0;de<K.length;de++)_(x,K[de]);if(X){let de=X.subTree;if(U===de){const he=X.vnode;I(x,he,he.scopeId,he.slotScopeIds,X.parent)}}},J=(x,U,B,K,X,de,he,Z,le=0)=>{for(let ce=le;ce<x.length;ce++){const _e=x[ce]=Z?ti(x[ce]):yn(x[ce]);b(null,_e,U,B,K,X,de,he,Z)}},A=(x,U,B,K,X,de,he)=>{const Z=U.el=x.el;let{patchFlag:le,dynamicChildren:ce,dirs:_e}=U;le|=x.patchFlag&16;const S=x.props||lt,w=U.props||lt;let N;B&&hi(B,!1),(N=w.onVnodeBeforeUpdate)&&Mn(N,B,U,x),_e&&fi(U,x,B,"beforeUpdate"),B&&hi(B,!0);const z=X&&U.type!=="foreignObject";if(ce?L(x.dynamicChildren,ce,Z,B,K,z,de):he||Q(x,U,Z,null,B,K,z,de,!1),le>0){if(le&16)pe(Z,U,S,w,B,K,X);else if(le&2&&S.class!==w.class&&r(Z,"class",null,w.class,X),le&4&&r(Z,"style",S.style,w.style,X),le&8){const ne=U.dynamicProps;for(let ae=0;ae<ne.length;ae++){const ve=ne[ae],fe=S[ve],H=w[ve];(H!==fe||ve==="value")&&r(Z,ve,fe,H,X,x.children,B,K,Le)}}le&1&&x.children!==U.children&&f(Z,U.children)}else!he&&ce==null&&pe(Z,U,S,w,B,K,X);((N=w.onVnodeUpdated)||_e)&&Xt(()=>{N&&Mn(N,B,U,x),_e&&fi(U,x,B,"updated")},K)},L=(x,U,B,K,X,de,he)=>{for(let Z=0;Z<U.length;Z++){const le=x[Z],ce=U[Z],_e=le.el&&(le.type===un||!Is(le,ce)||le.shapeFlag&70)?p(le.el):B;b(le,ce,_e,null,K,X,de,he,!0)}},pe=(x,U,B,K,X,de,he)=>{if(B!==K){if(B!==lt)for(const Z in B)!Qr(Z)&&!(Z in K)&&r(x,Z,B[Z],null,he,U.children,X,de,Le);for(const Z in K){if(Qr(Z))continue;const le=K[Z],ce=B[Z];le!==ce&&Z!=="value"&&r(x,Z,ce,le,he,U.children,X,de,Le)}"value"in K&&r(x,"value",B.value,K.value)}},me=(x,U,B,K,X,de,he,Z,le)=>{const ce=U.el=x?x.el:o(""),_e=U.anchor=x?x.anchor:o("");let{patchFlag:S,dynamicChildren:w,slotScopeIds:N}=U;N&&(Z=Z?Z.concat(N):N),x==null?(i(ce,B,K),i(_e,B,K),J(U.children,B,_e,X,de,he,Z,le)):S>0&&S&64&&w&&x.dynamicChildren?(L(x.dynamicChildren,w,B,X,de,he,Z),(U.key!=null||X&&U===X.subTree)&&ef(x,U,!0)):Q(x,U,B,_e,X,de,he,Z,le)},V=(x,U,B,K,X,de,he,Z,le)=>{U.slotScopeIds=Z,x==null?U.shapeFlag&512?X.ctx.activate(U,B,K,he,le):j(U,B,K,X,de,he,le):ee(x,U,le)},j=(x,U,B,K,X,de,he)=>{const Z=x.component=gg(x,K,X);if(Vd(x)&&(Z.ctx.renderer=Ge),_g(Z),Z.asyncDep){if(X&&X.registerDep(Z,ie),!x.el){const le=Z.subTree=Tn(Ri);g(null,le,U,B)}return}ie(Z,x,U,B,X,de,he)},ee=(x,U,B)=>{const K=U.component=x.component;if(Cm(x,U,B))if(K.asyncDep&&!K.asyncResolved){O(K,U,B);return}else K.next=U,bm(K.update),K.update();else U.el=x.el,K.vnode=U},ie=(x,U,B,K,X,de,he)=>{const Z=()=>{if(x.isMounted){let{next:_e,bu:S,u:w,parent:N,vnode:z}=x,ne=_e,ae;hi(x,!1),_e?(_e.el=z.el,O(x,_e,he)):_e=z,S&&Ho(S),(ae=_e.props&&_e.props.onVnodeBeforeUpdate)&&Mn(ae,N,_e,z),hi(x,!0);const ve=zo(x),fe=x.subTree;x.subTree=ve,b(fe,ve,p(fe.el),Ue(fe),x,X,de),_e.el=ve.el,ne===null&&Rm(x,ve.el),w&&Xt(w,X),(ae=_e.props&&_e.props.onVnodeUpdated)&&Xt(()=>Mn(ae,N,_e,z),X)}else{let _e;const{el:S,props:w}=U,{bm:N,m:z,parent:ne}=x,ae=Zr(U);if(hi(x,!1),N&&Ho(N),!ae&&(_e=w&&w.onVnodeBeforeMount)&&Mn(_e,ne,U),hi(x,!0),S&&ke){const ve=()=>{x.subTree=zo(x),ke(S,x.subTree,x,X,null)};ae?U.type.__asyncLoader().then(()=>!x.isUnmounted&&ve()):ve()}else{const ve=x.subTree=zo(x);b(null,ve,B,K,x,X,de),U.el=ve.el}if(z&&Xt(z,X),!ae&&(_e=w&&w.onVnodeMounted)){const ve=U;Xt(()=>Mn(_e,ne,ve),X)}(U.shapeFlag&256||ne&&Zr(ne.vnode)&&ne.vnode.shapeFlag&256)&&x.a&&Xt(x.a,X),x.isMounted=!0,U=B=K=null}},le=x.effect=new Ja(Z,()=>ol(ce),x.scope),ce=x.update=()=>le.run();ce.id=x.uid,hi(x,!0),ce()},O=(x,U,B)=>{U.component=x;const K=x.vnode.props;x.vnode=U,x.next=null,tg(x,U.props,K,B),sg(x,U.children,B),xs(),uc(),ws()},Q=(x,U,B,K,X,de,he,Z,le=!1)=>{const ce=x&&x.children,_e=x?x.shapeFlag:0,S=U.children,{patchFlag:w,shapeFlag:N}=U;if(w>0){if(w&128){ue(ce,S,B,K,X,de,he,Z,le);return}else if(w&256){ge(ce,S,B,K,X,de,he,Z,le);return}}N&8?(_e&16&&Le(ce,X,de),S!==ce&&f(B,S)):_e&16?N&16?ue(ce,S,B,K,X,de,he,Z,le):Le(ce,X,de,!0):(_e&8&&f(B,""),N&16&&J(S,B,K,X,de,he,Z,le))},ge=(x,U,B,K,X,de,he,Z,le)=>{x=x||ss,U=U||ss;const ce=x.length,_e=U.length,S=Math.min(ce,_e);let w;for(w=0;w<S;w++){const N=U[w]=le?ti(U[w]):yn(U[w]);b(x[w],N,B,null,X,de,he,Z,le)}ce>_e?Le(x,X,de,!0,!1,S):J(U,B,K,X,de,he,Z,le,S)},ue=(x,U,B,K,X,de,he,Z,le)=>{let ce=0;const _e=U.length;let S=x.length-1,w=_e-1;for(;ce<=S&&ce<=w;){const N=x[ce],z=U[ce]=le?ti(U[ce]):yn(U[ce]);if(Is(N,z))b(N,z,B,null,X,de,he,Z,le);else break;ce++}for(;ce<=S&&ce<=w;){const N=x[S],z=U[w]=le?ti(U[w]):yn(U[w]);if(Is(N,z))b(N,z,B,null,X,de,he,Z,le);else break;S--,w--}if(ce>S){if(ce<=w){const N=w+1,z=N<_e?U[N].el:K;for(;ce<=w;)b(null,U[ce]=le?ti(U[ce]):yn(U[ce]),B,z,X,de,he,Z,le),ce++}}else if(ce>w)for(;ce<=S;)Y(x[ce],X,de,!0),ce++;else{const N=ce,z=ce,ne=new Map;for(ce=z;ce<=w;ce++){const ye=U[ce]=le?ti(U[ce]):yn(U[ce]);ye.key!=null&&ne.set(ye.key,ce)}let ae,ve=0;const fe=w-z+1;let H=!1,Ie=0;const Pe=new Array(fe);for(ce=0;ce<fe;ce++)Pe[ce]=0;for(ce=N;ce<=S;ce++){const ye=x[ce];if(ve>=fe){Y(ye,X,de,!0);continue}let Te;if(ye.key!=null)Te=ne.get(ye.key);else for(ae=z;ae<=w;ae++)if(Pe[ae-z]===0&&Is(ye,U[ae])){Te=ae;break}Te===void 0?Y(ye,X,de,!0):(Pe[Te-z]=ce+1,Te>=Ie?Ie=Te:H=!0,b(ye,U[Te],B,null,X,de,he,Z,le),ve++)}const Ce=H?ag(Pe):ss;for(ae=Ce.length-1,ce=fe-1;ce>=0;ce--){const ye=z+ce,Te=U[ye],We=ye+1<_e?U[ye+1].el:K;Pe[ce]===0?b(null,Te,B,We,X,de,he,Z,le):H&&(ae<0||ce!==Ce[ae]?W(Te,B,We,2):ae--)}}},W=(x,U,B,K,X=null)=>{const{el:de,type:he,transition:Z,children:le,shapeFlag:ce}=x;if(ce&6){W(x.component.subTree,U,B,K);return}if(ce&128){x.suspense.move(U,B,K);return}if(ce&64){he.move(x,U,B,Ge);return}if(he===un){i(de,U,B);for(let S=0;S<le.length;S++)W(le[S],U,B,K);i(x.anchor,U,B);return}if(he===$r){y(x,U,B);return}if(K!==2&&ce&1&&Z)if(K===0)Z.beforeEnter(de),i(de,U,B),Xt(()=>Z.enter(de),X);else{const{leave:S,delayLeave:w,afterLeave:N}=Z,z=()=>i(de,U,B),ne=()=>{S(de,()=>{z(),N&&N()})};w?w(de,z,ne):ne()}else i(de,U,B)},Y=(x,U,B,K=!1,X=!1)=>{const{type:de,props:he,ref:Z,children:le,dynamicChildren:ce,shapeFlag:_e,patchFlag:S,dirs:w}=x;if(Z!=null&&Fa(Z,null,B,x,!0),_e&256){U.ctx.deactivate(x);return}const N=_e&1&&w,z=!Zr(x);let ne;if(z&&(ne=he&&he.onVnodeBeforeUnmount)&&Mn(ne,U,x),_e&6)Ee(x.component,B,K);else{if(_e&128){x.suspense.unmount(B,K);return}N&&fi(x,null,U,"beforeUnmount"),_e&64?x.type.remove(x,U,B,X,Ge,K):ce&&(de!==un||S>0&&S&64)?Le(ce,U,B,!1,!0):(de===un&&S&384||!X&&_e&16)&&Le(le,U,B),K&&we(x)}(z&&(ne=he&&he.onVnodeUnmounted)||N)&&Xt(()=>{ne&&Mn(ne,U,x),N&&fi(x,null,U,"unmounted")},B)},we=x=>{const{type:U,el:B,anchor:K,transition:X}=x;if(U===un){Ae(B,K);return}if(U===$r){E(x);return}const de=()=>{s(B),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(x.shapeFlag&1&&X&&!X.persisted){const{leave:he,delayLeave:Z}=X,le=()=>he(B,de);Z?Z(x.el,de,le):le()}else de()},Ae=(x,U)=>{let B;for(;x!==U;)B=m(x),s(x),x=B;s(U)},Ee=(x,U,B)=>{const{bum:K,scope:X,update:de,subTree:he,um:Z}=x;K&&Ho(K),X.stop(),de&&(de.active=!1,Y(he,x,U,B)),Z&&Xt(Z,U),Xt(()=>{x.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},Le=(x,U,B,K=!1,X=!1,de=0)=>{for(let he=de;he<x.length;he++)Y(x[he],U,B,K,X)},Ue=x=>x.shapeFlag&6?Ue(x.component.subTree):x.shapeFlag&128?x.suspense.next():m(x.anchor||x.el),Ne=(x,U,B)=>{x==null?U._vnode&&Y(U._vnode,null,null,!0):b(U._vnode||null,x,U,null,null,null,B),uc(),Od(),U._vnode=x},Ge={p:b,um:Y,m:W,r:we,mt:j,mc:J,pc:Q,pbc:L,n:Ue,o:n};let ot,ke;return e&&([ot,ke]=e(Ge)),{render:Ne,hydrate:ot,createApp:Jm(Ne,ot)}}function hi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function ef(n,e,t=!1){const i=n.children,s=e.children;if(Ve(i)&&Ve(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=ti(s[r]),o.el=a.el),t||ef(a,o)),o.type===bo&&(o.el=a.el)}}function ag(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(s=t[t.length-1],n[s]<u){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<u?r=o+1:a=o;u<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}const lg=n=>n.__isTeleport,un=Symbol.for("v-fgt"),bo=Symbol.for("v-txt"),Ri=Symbol.for("v-cmt"),$r=Symbol.for("v-stc"),Xs=[];let mn=null;function dt(n=!1){Xs.push(mn=n?null:[])}function cg(){Xs.pop(),mn=Xs[Xs.length-1]||null}let Js=1;function bc(n){Js+=n}function tf(n){return n.dynamicChildren=Js>0?mn||ss:null,cg(),Js>0&&mn&&mn.push(n),n}function _t(n,e,t,i,s,r){return tf(oe(n,e,t,i,s,r,!0))}function nf(n,e,t,i,s){return tf(Tn(n,e,t,i,s,!0))}function ug(n){return n?n.__v_isVNode===!0:!1}function Is(n,e){return n.type===e.type&&n.key===e.key}const Mo="__vInternal",sf=({key:n})=>n??null,eo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?yt(n)||Nt(n)||Ke(n)?{i:An,r:n,k:e,f:!!t}:n:null);function oe(n,e=null,t=null,i=0,s=null,r=n===un?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&sf(e),ref:e&&eo(e),scopeId:zd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:An};return o?(ul(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=yt(t)?8:16),Js>0&&!a&&mn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&mn.push(l),l}const Tn=dg;function dg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Wm)&&(n=Ri),ug(n)){const o=fs(n,e,!0);return t&&ul(o,t),Js>0&&!r&&mn&&(o.shapeFlag&6?mn[mn.indexOf(n)]=o:mn.push(o)),o.patchFlag|=-2,o}if(bg(n)&&(n=n.__vccOpts),e){e=fg(e);let{class:o,style:l}=e;o&&!yt(o)&&(e.class=go(o)),ft(l)&&(Ld(l)&&!Ve(l)&&(l=Pt({},l)),e.style=Qa(l))}const a=yt(n)?1:Lm(n)?128:lg(n)?64:ft(n)?4:Ke(n)?2:0;return oe(n,e,t,i,s,a,r,!0)}function fg(n){return n?Ld(n)||Mo in n?Pt({},n):n:null}function fs(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:a}=n,o=e?hg(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&sf(o),ref:e&&e.ref?t&&s?Ve(s)?s.concat(eo(e)):[s,eo(e)]:eo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==un?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fs(n.ssContent),ssFallback:n.ssFallback&&fs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function qs(n=" ",e=0){return Tn(bo,null,n,e)}function cl(n,e){const t=Tn($r,null,n);return t.staticCount=e,t}function Mc(n="",e=!1){return e?(dt(),nf(Ri,null,n)):Tn(Ri,null,n)}function yn(n){return n==null||typeof n=="boolean"?Tn(Ri):Ve(n)?Tn(un,null,n.slice()):typeof n=="object"?ti(n):Tn(bo,null,String(n))}function ti(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fs(n)}function ul(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ul(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Mo in e)?e._ctx=An:s===3&&An&&(An.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ke(e)?(e={default:e,_ctx:An},t=32):(e=String(e),i&64?(t=16,e=[qs(e)]):t=8);n.children=e,n.shapeFlag|=t}function hg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=go([e.class,i.class]));else if(s==="style")e.style=Qa([e.style,i.style]);else if(ho(s)){const r=e[s],a=i[s];a&&r!==a&&!(Ve(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function Mn(n,e,t,i=null){_n(n,e,7,[t,i])}const pg=Yd();let mg=0;function gg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||pg,r={uid:mg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Np(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qd(i,s),emitsOptions:Hd(i,s),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:i.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Sm.bind(null,r),n.ce&&n.ce(r),r}let Ft=null,dl,Bi,yc="__VUE_INSTANCE_SETTERS__";(Bi=Ea()[yc])||(Bi=Ea()[yc]=[]),Bi.push(n=>Ft=n),dl=n=>{Bi.length>1?Bi.forEach(e=>e(n)):Bi[0](n)};const hs=n=>{dl(n),n.scope.on()},Si=()=>{Ft&&Ft.scope.off(),dl(null)};function rf(n){return n.vnode.shapeFlag&4}let $s=!1;function _g(n,e=!1){$s=e;const{props:t,children:i}=n.vnode,s=rf(n);eg(n,t,s,e),ig(n,i);const r=s?vg(n,e):void 0;return $s=!1,r}function vg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Pd(new Proxy(n.ctx,Xm));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?wg(n):null;hs(n),xs();const r=ri(i,n,0,[n.props,s]);if(ws(),Si(),hd(r)){if(r.then(Si,Si),e)return r.then(a=>{Sc(n,a,e)}).catch(a=>{vo(a,n,0)});n.asyncDep=r}else Sc(n,r,e)}else of(n,e)}function Sc(n,e,t){Ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ft(e)&&(n.setupState=Ud(e)),of(n,t)}let Ec;function of(n,e,t){const i=n.type;if(!n.render){if(!e&&Ec&&!i.render){const s=i.template||al(n).template;if(s){const{isCustomElement:r,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,u=Pt(Pt({isCustomElement:r,delimiters:o},a),l);i.render=Ec(s,u)}}n.render=i.render||gn}hs(n),xs(),qm(n),ws(),Si()}function xg(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Kt(n,"get","$attrs"),e[t]}}))}function wg(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return xg(n)},slots:n.slots,emit:n.emit,expose:e}}function fl(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Ud(Pd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ws)return Ws[t](n)},has(e,t){return t in e||t in Ws}}))}function bg(n){return Ke(n)&&"__vccOpts"in n}const Mg=(n,e)=>_m(n,e,$s),yg=Symbol.for("v-scx"),Sg=()=>Jr(yg),Eg="3.3.4",Ag="http://www.w3.org/2000/svg",bi=typeof document<"u"?document:null,Ac=bi&&bi.createElement("template"),Tg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?bi.createElementNS(Ag,n):bi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>bi.createTextNode(n),createComment:n=>bi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>bi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Ac.innerHTML=i?`<svg>${n}</svg>`:n;const o=Ac.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Cg(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Rg(n,e,t){const i=n.style,s=yt(t);if(t&&!s){if(e&&!yt(e))for(const r in e)t[r]==null&&Na(i,r,"");for(const r in t)Na(i,r,t[r])}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const Tc=/\s*!important$/;function Na(n,e,t){if(Ve(t))t.forEach(i=>Na(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Lg(n,e);Tc.test(t)?n.setProperty(vs(i),t.replace(Tc,""),"important"):n[i]=t}}const Cc=["Webkit","Moz","ms"],Vo={};function Lg(n,e){const t=Vo[e];if(t)return t;let i=us(e);if(i!=="filter"&&i in n)return Vo[e]=i;i=gd(i);for(let s=0;s<Cc.length;s++){const r=Cc[s]+i;if(r in n)return Vo[e]=r}return e}const Rc="http://www.w3.org/1999/xlink";function Pg(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Rc,e.slice(6,e.length)):n.setAttributeNS(Rc,e,t);else{const r=Fp(e);t==null||r&&!_d(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function Dg(n,e,t,i,s,r,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,s,r),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const u=o==="OPTION"?n.getAttribute("value"):n.value,f=t??"";u!==f&&(n.value=f),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const u=typeof n[e];u==="boolean"?t=_d(t):t==null&&u==="string"?(t="",l=!0):u==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Ig(n,e,t,i){n.addEventListener(e,t,i)}function Ug(n,e,t,i){n.removeEventListener(e,t,i)}function Fg(n,e,t,i,s=null){const r=n._vei||(n._vei={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=Ng(e);if(i){const u=r[e]=Hg(i,s);Ig(n,o,u,l)}else a&&(Ug(n,o,a,l),r[e]=void 0)}}const Lc=/(?:Once|Passive|Capture)$/;function Ng(n){let e;if(Lc.test(n)){e={};let i;for(;i=n.match(Lc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):vs(n.slice(2)),e]}let Wo=0;const Og=Promise.resolve(),Bg=()=>Wo||(Og.then(()=>Wo=0),Wo=Date.now());function Hg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;_n(zg(i,t.value),e,5,[i])};return t.value=n,t.attached=Bg(),t}function zg(n,e){if(Ve(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Pc=/^on[a-z]/,kg=(n,e,t,i,s=!1,r,a,o,l)=>{e==="class"?Cg(n,i,s):e==="style"?Rg(n,t,i):ho(e)?qa(e)||Fg(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gg(n,e,i,s))?Dg(n,e,i,r,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Pg(n,e,i,s))};function Gg(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Pc.test(e)&&Ke(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Pc.test(e)&&yt(t)?!1:e in n}const Vg=Pt({patchProp:kg},Tg);let Dc;function Wg(){return Dc||(Dc=rg(Vg))}const Xg=(...n)=>{const e=Wg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=qg(i);if(!s)return;const r=e._component;!Ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function qg(n){return yt(n)?document.querySelector(n):n}const jg="/Website/assets/favicon-9a311dcb.png",Yg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAABgUlEQVR4nO3XP4jPYRzA8ce/krrz74pzi4zIZLSYTM7ApJyynBtks1huvmQxGRSLRUmRulHUlXIkFGVgkCtJHSZ56amnGHDP71d3931+fV7Tb/y869vv83xSCiGEEEIIoU+YxCLmsD+1Dp/89g2nU8v83RWsSwMUlM1iOA1QUPYYW9MABWVPMZJaoc6zZqLUe4XRlR5uPXZgLw7hGM7gAmZwDXfwsAy4oDfPsaXf4TZiF/aV4Y5iAucxjau4i0d4iQ/4Yfk9yLP1ErITb3XbLaytDbqkDZdrg/Ln04pTNUHfteN1TVB+ILbifU3QC234ifGaoLwvWjC9ZEwJGsVH3XYda6qCStQm7MZBHMFJnCsLNd8qN8vzfh7v8HUFY2axIS238rIYwwEcxglM4WLeGbiBe+XUfoPPfcTMYyh1Vb5Ke4zZnrpuoGKyipgn2JZasUTMHDanlvwn5nb+t02t+UfMTPV50DX48kdI/n08tQxny2K+jz2rPU8IIYQQQkir5heZhVZR83erZAAAAABJRU5ErkJggg==",Kg="/Website/assets/facebook-ae63e442.png",Qg="/Website/assets/tiktokwhite-a5e93b39.png",Zg="/Website/assets/insta-ea65fa29.png",Jg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAL6UlEQVR4nO2da2wT2RXHp6/t7n5q2S1qt1VbqXxY8WUlZvwY24lf8/A8siF0w+MDQjwLpBsB7QJBSAHxCCJCkE2zJBJvtkJAQVAKEo+CChQ+IUQgCwQSQoAQKSQ4DQkkdnKrM5trDVESe8aTeMbMXzqKFdvJ+Pzmnvs655ogbNmyZcuWLVu2bNmyZctEYll2YiAQ4AOBQHEoFKoKBoMXgsFgbSAQaAgEAh1+v78XbPBxg9/vr83NzT2fk5NT5ff7v8zJyeF8Pt8vMv05LCNZlj8Mh8P5oVCoIhQK1YbD4YFQKISwBYPBhAUCgbfM7/cnLDc3N2E5OTkDPp+v1ufz7cjNzf3c7XZ/kOnPaSqVlpb+kGEYH8MwNeFwuDMcDiO1GQDgLfP5fD0+n++I1+vNKyws/BHxrsrv97/PsuxShmEaGYZB2MYBQMI8Hk+Dx+NZAtdCvEthhuO4vzIM08KyLALLFACv16uYx+NpoWn6LyRJfkhks1iWzWNZ9hHHcYrjWZMAGIQA9pSm6UIi28Tz/O9Zlj0FjsdmUgAIjKbpkzRN/47IBnEcN5XjuA61880OwPM9hE6XyzWDsKoikchPOY6r4HkegVkQAAJzu9018FkIKykcDn/E8/x17HwrA6BpGrlcrv+63e4JhBXEMMwnPM/XRiIRlC0A3G432Hder/e3hJnFcdynkUikGZyfhQCQ2+1upmn6U8KMkiTp15FIpAk7P0sBIKfT+dR0IySI+ZFI5DtBEFC2A3C5XAChnqbpiYQZBCMEQRCug/NHA6B2+FBjTABA7fChNhTAoF0zxegoEon8DTt/JADgZLUDsUPD4fBbzs/AWlDCwU6nUzGHw6H8BCcnAQCv+zrTzv9C7fyRAIBjwUlbt25FZWVlaNmyZUoY8vv9yu8xlPECgB2PHQ7vKSoqQuvXr0dr165FFEWlBGDQ/pix5QVRFKPJAICjwZELFy5Ear158wZdvHgRlZSUJByHnTscALXThzp5qIGjhwOAQw12Lvzvy5cvo1gslriugYEB5XMAnFQAOJ3OlxnplEVR/KcoiigZABx+9u7di0ZSU1MT2rRpU8KxuFWAqe9qdQhRx291J4ofD/c8OBAcWlpaipqbm0e8HrgWaAX49UkAQCs6Oa7OFwRhKjg/FQAQVsCRt27dQsl0//59NG/evMQdjO/avLw8VFxcjDZs2ICqqqrQwYMH0fHjx9GJEycUO3bsGDpw4ACqrKxUwsiSJUuU/42dhB23ePFi9Pjx46TXce7cOUSSZKKlJAMARlFU3rit5wuC0KQVQHd3N0pF8XgcHT58GFVXV6Nr166hzs5OpFcvX75UQkxFRQU6efKkEl5SEbQOrQAcDkfjuGx3iqL4FXZ+MgA4/s+aNQtZSQMDA0rIwv1AKgDASJJcPqbOh3GvKIrPtAJYtGgRspp4ntcMgKKo52PaCkRRXCpJEtIKAOK61RQMBjUDgCGtw+FYPGbZC6IoNmoBAHcRAJg6dSqykmKxmDIK0gmggSCIHxgOQBTFIDhfKwA8CWtra0NWUV1dneZOWAUA4PnHAsAePQBgHgDN+fTp08gq2r1791uzYR0Adhnq/MLCwg8kSYrqbQEA4NChQ8gqqq6uTrcFdBraGefl5eVj52sBgGfBMInq7+9HVlE8Hkdz585VnIkncloAgE2ZMkU2DIAkSRVaAeAOWJZlS8V/rOfPnyszcbwyqhUARVHbDAMgy3KtVgA49o+2BmR2wdIGHg1pBUCS5E1DnF9QUDBRluUBLQBw7Ief0WgUWVXRaFRZ+AOH6mgB/SRJfpw2AEmSeAgjWgDgCdiOHTuQ1bV58+ZEh6wRABiTNgBZlou1AsDh5/r168jqunTpEnSoiTCkEUCRES2gSg8AsJ6eHmR1dXd3J5yrA0D6W5ayLJ/XAgDHf1h7zxbNnj07MTHTCOCsEQBuawUA8X/NmjUoW1RSUqIXwC0jADTpAVBeXo6yReXl5boAkCTZaASAdi0A8AgIpvPZosrKysRISGMLaEsbgCRJvXpaQDYB2L59u94Q9MaIFtCnBwDsw2aLysrK9ALoMwJAVM8oaN26dShbtHLlSr0AXhoBoEUPAMg0yxbNmTNHbyf8NG0AkiTd1TMRg9elmgZiZsFngBwlPRMxkiTrjABwVu9SxJMnT5DV1dzcrHspgiTJM2kDkGW5Rs9iHGzEQPaa1XXkyBFlCKpzLegbI1rAKq0A8Eho+fLlyOoqKipKxH8dAL4yogVwWgGow9BoSbBmF4RQ7FAd+wEQukJpA+A4boLWDRl1GNqyZQuyqjYNZknr2RGjKGrgs88++xlhhCRJeqBnTxiGowABsp6tpgcPHiQcq2dTnqKou4RRkmX5m3SyImA59/Xr18gq6u3tRTNmzEgrK4KiqArDAIiiKOkBoM4LWrVqlZLuYXb19/cr15pOXtCgRQxNzBJFsVsPAOgLcHoi7BGYuSX09vYq16ilRmwEAK8MPwRKFMVvRwOgdri6PFVdJwYQ5s+fjx49eoTMOOKZo1pywOVJOjPj9hFGS5bl8EgAcA6ousoRl51iIPA8/B7CETyuqalBr169yrTflRa5a9cuJQkLDzeTFWpnJDl3pPR03NkCCHDqnj170MaNGxVQuOIRnscV8nhkBIV3oiiinTt3osbGxnF3/LNnz5TrhWtTZ7+lUik/GgCKourHJD0dJEnSn0cCMHTWC/VdZ86cUQrscA2w+pgC3BoCgYBy982cOVMpwLt582bK9WRa4/udO3cU4FAyNVxBdqpHFYwGgCTJPxFjJehYJElqGRqC8KQLErGg/hd09uxZ1NHRoZSg5ufnDwuBGQxZGAS0ClzTO3369EQdr17Be1evXq38LVwfPDS+q0tb0wVAUVTrmBfqDVekp86Gg44Mr4LCnQxV8XBX46JrHI6GnhURHnwew4Al4IKCAgWiXkFSMFwjDi3qGuJ0DusYpQWsIMZahYWF7wmCUD/cKAhDgLWjhoYGxQk4LR1qeeEOx33CaId1BAbD0oULF1C6gppfcBQ41ajTUkYA8HDSpEnjc3iHJEkFybIiIM7iGl8IBVD2A3mW4Fw8SmKHAYA7aHi/ERs6cAPA3wJHqp1vNIBxK9TGEgThX6NtyIAjt23bpjihtbUV3b59W+kfli5dqkBQn5YSVp0NASEIws++ffuQUYKRGTgPhx6jAYz7UQUgnud/JQjCi5H2A/CdDYUOWOfPn0e1tbVK56o+EyKgOvUEh4lUjjZIVTD6AWeNEYAXDofjl0QmJAjCjGTL0TC0VK8w3rhxQwkt8LOiokIZvi5YsEAp5obsAyjoMHqm3N7ertyp4FijATgcjukZcb4KwtfJSpSGznghLq9YsUJpDSD4+fDhQ+UxhB41NCME/2+MAGwnMi2/3//jSCRycbjFOLwSCjPjoR0qDBH7+vqUx0ePHkWnTp1SHsPdX19fj4yW0QCcTucVkiR/QphBsix/PNyhfXjpASDA7lImV0KdxgKoczgcHxFmO7ZSEITG0ZajYZI2Fnf3OAN4TJKkOQ9w5ThuEs/zibNDhy5H4xEP1A3v379fmWhB/IeRUktLC7p37x66cuWKEpJMCuCRx+P5A2FmwfCU5/lbw50bql5yUB+0lzO4/qM+lszorDoDANQ5nc7fEFYQZFLwPP+fkQ5uxauhYdXkS30aogkBXPL5fD8nrCQYHfE8v0XrybkBkwGA4+tNM9rRI57np/M8/8KCANpomv6CyJYvZGNZ9h8WAnDK4/F8QmSbeJ7P5zjuvlkB0DR9D75fjMhmQTxlWbZ4pK+xCmQGwDOPx/OlpWO9nhMYWZadzzDMXfVmDAxLp02bhowW7E1Dp6peEfV6vfCtGPMmT578HvEui2EYKhgMVubm5nbApv/Vq1cNBwCbQhD6XC7X/2ia/rvX62XHLHvBqkIIvd/W1pbX1dVVHYvFvl8eNUDwt7q6umra2to+RwjZX+aZqqLR6IT29nYxGo2WdnV17evp6fl3X1/f/Xg83hqPx+EgIkg2jcPjWCzWCs/Ba7q6uvbDe+C9nZ2d5lo0s2XLli1btmzZsmXLFvGu6//3GWrOKsOZEwAAAABJRU5ErkJggg==",$g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFp0lEQVR4nO2caYhcRRDHO10zMUZJEFHjQfwk6hePDyqoIMEzoqIgIgQURY3iDSoqwuoHL4wHijEratSYnep2IxiSFUSNR7wPRAkSjYaIUXLiTtXbJKubln6T6G52nezMvve6Z6Z+ULCwMN397+rjVXe1UoIgCIIgCIIgCIIgCIIgCIIgCIIgtDJ9bh+o8GwwtEAbXglIPwPSABjaBki/a8MrwNCjgDRLdTkdurrtw+I/D6gJy1Uw7MZntFYjX9VQR9j+ozXyfbm2pX4F3GS1aPM0FRHaVm8Aw1vHL/xI04a+KWH1tHpllDA5CZAXAdJfGvkaFQqNyVyN/K4f6iqG6QbpxWaFH2FeWEO3jPh9OzBTG7pdI30+bNSsV9btG6bBzk3yw7bmNdyrrIOQI1EbficT8Ud0BM8HpOcAeRUg7Rz1/wpfEKzNJVs9fY85dIHvlBB1AaQXMhd/72vGSyHaOrzRj4wxdF9W3a5cZD20Ta4rWnxtaHm6/g2n4HYrP/ePWTmkt5TdsH8hlbBbp4PhTYWKj7RMLXRTdleh3MMnguF5fn1QRQJI6+p4yJdqCR+aex0MPVTglDOoLd+tevuP0khz0rXhvzVwpVrhSnm3d2Tj97bHRt4AyOfnVoEVrgTImwvrgLS9tG2MjllbhLONAgzx3itNOwH5qTy2qYA0q8ip5386ZYuqVI/Num3jFeC38c+b/F3JVs/ItHzDTwYWf6Of/1UoNPL7TVTaqN6BIzMp3/g4TijxaZ3qrR6jQgLITzRZ+QG/hVU9yWETKt/wmhDia8PvqSV0cHZKNisA0lkT9KIdYOiVMvLxTZb/R+Hi+7BL0budursQQ+sz8qoPNdLNyiaHj7f43VvAgq2iYkIbviPbBtKQNvSx/91Spf/UeoEubeiLwjvAr2FRsdRNBaRf8ms0DWqkr8Dws9rSrWCrl9Y6ZmAmGH6t4+I/YwGWzvaeG2A6cAHsaRUj/hM9AnFc7ob0oIqCRZungU0uGh5+LjYuw0Es3ShEwUI3ZVelVoOh+0s9ySnpoYg/DkTaHlooyMsqPFvFAhju32N47qjdOuCNwYUy+ZiPhKpY8CHn0IJAoUaDhR+61MMvSOFF4cJMG/pMxcToM+E2N+THVWx01DRkk0tUbPgv087wfvpb2epBKjqcm+QPqYMLZAqIgkaL5RntvPWE2gJ8o4qZ9GoG8pbQQkEuRkMTPTwqBP81XPQdHSjG+5erlqGHDtGG+kKLBlka8rmqpehyunZxiVe1gfg/hLrvOnG6nAbL5/nDFDD0a3AxTeOmTXK9aiUA+RlARn8Za9ffi33Cg4+jhBYTGrc1oy7gxo42fG0EwrlMvB/pctVyvOr2a+TGHERq2tDXLTv3a0OXhRYQJmQ05AONqpUB5J7wQnKzNk+1PAvdFI30SQRiugZtdbiku6yxW6fnkjhncjKk7enZdlth3eR0S9oC94Z0yHzfvPGelT4VEK3383zVCZRscjIgPZ/vdUZu1PPfjuqwvTCWJEf4JwE00pvBxPd3/Ze6qaojeaP/QDBsA4r/gf9wVB1HGi1N5haa4ThKfOorLJc5qugoJhfWgnMB532k7niyXIrA8gyNfE96bTGs8Dvaeqv5L92u7N/T0ch3aeSP/JWOoMKbdMr5ttlctKiACp2pDd+rLd3kvck/lKEt3wlID/tzgFra0FjZ5KGMBgHpgbbaZgImF4dKEYXGvL6v3EPHqbak25U18hWA/FOEwn+aPsLXEaQdQXOCRz4xXWBf9/lqqlMpWz7Bx9LrPWOTvbfz9z6lNYrM9WhwbpKP+fjnHP2nfsaL8qbaYs9X+1BG6Ka2BtZN9qNDG74SkB7zyc67IqNr0ucld787hEz+MVVA/tHnBvsgWfrgKtJtUOFz0kc+WvWcVhAEQRAEQRAEQRAEQRAEQRAEQRAEQVCdxj/A/ardACSDyAAAAABJRU5ErkJggg==",af="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAOfSURBVGhD7ZldSFNhGMf36dxQ19GzzamsCyW88KOLJaTRLMQbCykTQsFBhkgMLLwwUArmTd1Y2IVoTqLdOCdYF1pCXojEGGpIqAycG2LSFoagFaiM9bzuqZvtrB33dYLzg8N5nr8T3/85e9/neV8FPDw8PDw8PIlDjPdUIMzKyrqWkZFx7ujoaAvyQEhOLEK8Jx29Xv+ypaXlLok3Nze9o6OjrYeHh46THyaQlL0hk8k0KZFITv5ebm4uZTAYjB6PR7C3t/cRpCDRE4EI70knMzMzA8MTpFKpBEyaGxsbPwiFQhXKcZMyQ0zAm6rt6ur6BHNLj1JcpN0QQafTFfX19c0rlcpbKJ0aThgiwAqoAFMThYWF91E6FZwxRBCLxcLu7u5npaWlT1BiDacM/aGjo6OnsrLyBYSsx8dJQwSj0Wiqrq5+DaE0pMRGPIVVBMutGmqLWiaTFcClksvlKpgLapjcmpycHBrqjQrQqAEyR/D3WDE9Pf12bm6uGcLjkBKdqIZgwEoYiAEGWAIDK4Fx6Wia1mo0mny41KSW4EeTytTUlG1hYaEVwn+2S9EMiZqamuZramouYZ5WbDbbK6fTeQfCqF0FY+uTnZ19va2trQfTtFNWVnbe7/erfD7fO5QiwrgolJeXk+8tp4AHfK+4uPgRphFhNFRRUXERQ07R2dn5mKKo25iGwWhIq9XmY8gpSPFtb29/jmkYnK1D0YDyIMMwDEZDMAH9GHKOmZkZO4ZhMBpaXV1dwpBTLC4uLi0vLz/ANAxGQ+vr6+8x5AwwJtf4+HgDhD9DSjiMhnZ3dyfg2sM07WxsbLgtFktdMBj8hlJEop0pHMMT+Qpdbx1snxknYSrwer1bQ0NDV8DMF5QYiaU5FYtEogLYIp+F1aWINKAKhYKGTkIF9SAf+jw6Ly+PhjtFDj+irUCnYXt7e2dwcNAQCAQ2UYpKMo6x5NDUUlAvKOjEKWhgKXgYZ3p7e8lWgBVut9szPDxcH6sZQjIMRWRgYIDVUdXa2tr62NhYPXzNdlCKCU4WVuiqnWDmMlszBM4Zmp2dnYatwlUw8x0lVnDKkN1ut4KhGxD+Cins4YQhmPTBkZGRpw6HwwhpTFttJtJu6ODg4Ed/f/9Nl8v1ENK4z7hTZoi8BQz/srKy8tlsNl/Y399/g1LcpOy/DzRNNxQCmAqsVusQzJdmmPw+lP4voNhqq6qqLLW1tZPkvAJlHh4eHh4eHu4iEPwGUeoBBUIFKA4AAAAASUVORK5CYII=",ir="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEGElEQVR4nO2Y2U8TURTGjya+aXxEUdFQAQULLW3tNkilDQItncQnY6KPGjXRxO3BaAz6z7hvkRhZfDCoQeO+VIwJGDVuEW1dCTM95kxvJy0ti7TMXJj5ki80p3du7/nNuefOAGDKlClT0xDuPVoh7zvWKx068Tt5+CRmef9xlAWxIEtCdEQSxHsP1gjHgcvkD55I5CTOLO84VDCAtE+VWPH2am8n8CR537He8ZJXAIS3FRUA+Va55zrwIilf2aeT37KraMlnAuAKQpIlizf6EEdHlb/yniNFvfP5AJD7LJ4efgBIEiqSJJQDm4uefD4AXEBIpgFkaCaSHw+A7hCSHADQFUJSQwDnltZNCOG2xdM1pwHctHgmBKCcDhZ395wF8N3dhhcmqQIG4fqcBCALIv7whGm/4/lJQDysaujQ7xgURN1N7w76PQgJPACIjmgKIJn5CMwBALIJQAslzQo4mb0FDnQYewvIOw8bHED7duMCkLfu1j1p7QEc6EiVPUd3XlMAMgeJcgUg7m7DWE0gKyb5RYzVNGLCHcbPzhZ8XtOY45frAjjia8fBuiB+dDTjRPPSHPnGcAHg8doG5WWE3tzSsa+uFiX2rLoR71X68768nF1Sq4y7WGrD86V1+NvbnjVv90qXMo4gdpU58eryej4BPFyTAjC8vlWNfWEAnlRvUGN/fBEldqfCl3X9haU2JX6/SlBjb2whFRRVwrUyB15ZZucbQKwmoCycTCX+PwCoGs6U1CrJjvqj2LnCrv43aNYAOJXHUwVAMSrxPosXB9YFFCCP2LyzBsB7e7OyWPJbVsJTBdBf4VfLnvoB9ZUB68bZBWC4gB5AAOhzzyoXXiq14V9few6Ay8vsKmBqjNwAeFK9QV1oOkYwKEa9IB2jI+90SS32V2YDoITvVvpVSAlPap7X1qbUKeBpU0+ETD/NgKsrgF/eiFK+Y+NvbMGco+2dPZRz9z7Up7bO2OsJxpAtqHym79MNNu1fnggfAGSObEgAcW8Yh1zNOOAMGQ/AJ3crxhxB1YYCEPeGs5I3HIAhV7OxAQw4Q8YGEBuTvAnAYVYAmltAC8kc7P+fvsjc6gHxjKe5fIlN1ZoAkAQxMZNPc9P1i/pgQhMAsj96sZh3vhjJk185gpc1AYC+aJUkiMMz9TQ3TX8bdG9apQkAEjaIK2RBPCMJYrwQAIXu+Zgj+IPuvKbJmzJlypQpU1laAACLAaAEAMoAoBIArADgAgABABoAIAAATQAQAoBNANACABHmFhYLsTEBdo3A5rCyOcvYbyxmv6mbFgGABQDWs0VHdHKIrYHWslCLxOcDgFPHhCezk63R0ADmgQZaCADlbH/quQWCbA3lWm0BGEcTNUE/a2iNrMHRosdrgvQdjaGxdA1dO6NN8B+73L4BjeKSlQAAAABJRU5ErkJggg==",bs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVUlEQVR4nO2ZOUyUQRTHBxTEQgtNNOHGBKNyFCZedFYUWFsYbazksLMx0cbCCgqgsDCLlQ2gxAZi1CgxsRETwcIGFSnsrMSDQ37mhZns5GO+Y9f5lt1k/wkN+97M/33zjnlvlCqjjOIDsAdoATqBDuAIUKOKFcBB4CKQAT4Bf9kO+d8X4BHQDzQUA/HTwGNgg9whBj0HLgAVhSZ+EngRQW4d+Aq8BxaAJWAtQn4O6CoE8d3AbQcZ+ZqvgVvAKaDKoVsFtAF9wLTj1DaBUYmftMjvB94ENl0FxoDjeaxXCwwCK47TqE3DgEuBjV5JdvGwbgMwFVhbgr3VD/PsRo3AN+AXcAOo9Lx+rz5R2wi/J6H9OLV8DnQHXOptajGRshGrlhHDqtTAVqayM9w5VWoAngRcKXmxA84A88A4UJ0q0+ik8dMyoicXZUmRBudVCpAvClzWf86vCwxZPJ4lXbhJV0VzJTiUAvlKffEzuBIiV2dVbImF+qT52GC6AORDDdDyT8miN8kG4vcG1wtAPhNVFIEBS3YiySaLlkKnZ5+/FyA/FlfRdUNk8DlukxrL59Z9VcF8yQskC2ouJg5q4lKXwXKoYFb+LvBbqmUYmXzcJgjdWxg0RQm2W4IfQgWz8itRpHyQFwgXS79dJfS3hVDBrPxIGDlf5AW6qzPoUGEAmi3BpVDBeN/ela/Pu6BbUoOWKMG91kRhzdUaOnRcX3rRx5e32ljTwm7GXud1I2HQFikcbcR/k3fE5XIShUlLoS9WIavnzedtANes9SZVHPTQyWAmVmG7EcNxqTXHNWdyuhnoJtvEgRS1OrWDAH5Y/p9smqcnZgaDqbOMgM5egge5KMm4z2Blp+eYwL5cFSS/v7OMmFKlBqDLamyS3cWLDWzNKg1k1NGtSvChYi4QDyVnRG2gOktZ7/e8RwVwFXgInPW5ttmgNWAEem7T6GHto8Cste68H9buk7DdCT23Gcqn2AEngPvAn8Ca46kYYMXEiOMNbENPDwZ0T1EdMhiWJ6mbwMtAhjNJ4k5Bhrkyq3Scho11fYeXTuoj8J1ozEZ2WikZIYHXIxOzkFfJOIiR46kEbR7G1OuB2ETEM+uq/i2jX3sOq2KFjpVm3YwcAw7sNKcyylBu/AMBkex5eMS43QAAAABJRU5ErkJggg==",Ms="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADhUlEQVR4nO2ZTUgVURTHx++ihEpb9EGbMAiihRn2YZugwiSiArOFIBjVMlr0HS3SglYGlRtJNxKRmpCtFVq2iKygBKHvT0slyBTqFzfvxOny3syd67znC94fHm+YOf9zzr1z77nnnPG8LLLIYsYAcoENwGmgG3gCfAWmgO/AW+AxcBM4Bqz1MgHAcuAS8IZo+Alsm03HS4BWYBJ3HJ4t5+uAkQQOvQPagHqgXA+yAJgLLNX3DgHXgcvqvpdmx/P1rJvoB2qAPC9TwfQs3jUcHwK2e5kOpmfedL4DmJcieweBUeCWWoJxKDSXzblYPE1u74Gw1RrHhk2b8wrAUcNmrecCHUVktOlwUuR2KPYJu1+A0pkunaGgNa8Ps2/q30Kvkh0HmgJkFgEvhP2rLiesPKR2hMgrh3xUB8jtFHKjITr3CVnly7IoA1Cz5KPfQr5dyL8EihPIFAOvhNyNEJ05wEMhH/p2fWKekdvUWHBKgY9Br1zdE8+VbImF3j2CowafYzMAlVXK9CA/lDTNO2Aka1XiWZW+56POUmeBsTwrbUhnBKHNxpDg3hHc58AcoAh4Ku73RdTZLbgnohLqHTb/mOA365+PsUib0fujs1Hwu20IqhjxUR7FmOYfEfwp/XNOoYEKwR+0IaiDw0foRksSPQZInLXmOOhbLHSM2BBk/C+MalDrKNOlpA91Xeaoq1DombQhyFfulA0Cq4wB/ABWO+oqknpmcwkNxLCEPtsQVPfAx7oM2MTro27iHkFodAij4zGH0QbBv21DOCUIXRGN9QrusyQH2b2IOjsE97gNYaMgjNtGohSlEvlGjlVhW1C8FqRNlsncp4jJXGiRAuwystzc0AFo4llNmrKJ38ZrDkqn1TMf7RZ67wv5pAVQspS6GlhjKT+WgoKmRshOqOaYlyqo2dGDaLaQbdayFwJk5gPDYgBXvP8JQKexXxZ6/wuA8/yLvXEqrwS2xKYw3PkWLy4AW4FfWnGPU68meM13Gs73xtowBvYbBtRXl90uCVqCaDOcwPl42+/6gGsRb8GHan3URpktfcKqQ0rG+b8RJ6WtetXkAt4nMKw6yl36I8ZmYKXq5umCpFSXhg360JPpgY8PsW5Yixz9mpEqu2JCz/qCtDhvDGQFcNHhIx86rWgClqTd8YDPrCd1W2ZQV3ZTusZW149UPq96O7pIsUvMssgiCy8IvwHt17k7D5kv1AAAAABJRU5ErkJggg==",e_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAH7ElEQVR4nO2da2xURRTHRwnKFxK+oMSon0h2eRjfQItAK4RGEJ8RETRgQIiiWAUNpPKwRm2VIopPwAYMiHwAbqG8CpRuX9vHyhba0tLH0i3bsn3u3rstbaHlmHOzvb1797Z7l625pXv+yUnI0jPT/f9m5szMhyljJBKJRCKRSCQSiUQikUgkEolEIpFIJNJQFQDcw/N8JM/ziYIg5PI8X8vzfJcgCEAhAHqBngiCkMPzfALP8xHo2f8Cwwsim4wXgh18BR6PJ3qwZ8UWAiGEugr8CAAjQoUxguf5wwRDGJQl2el0poYERRCEJIIhDGp9tFqtexljwdcVj8czu79GCwtK4csvkuGNlzfBnJmfQFTEGoqINaIX6Al6Yym43C+Ubdu2fRQUFKwbgiBYlA25XG7YmvA3REd+TAAiBh6E6FFS4gFwu91+QGw2W9XIkSOfDGapmqFG9vtv9xOIiOBWg60JB1RnSWxs7GbG2AN3XDvyzcU+HU1blgiTdx4F46HzYOBMFJxJ9GLyrhSYtjTBZ6YU5Jf6AUlLSzvGGIvRCqRQ2cCmDbtlML4Dw5EMgsD1MxCPZIgDttevzXF/+gGprq6uYoy9xRgbGxAIz/P1ygZeX/CF1MGk3ccIBjfwqjBp11HJrzde3qi2BW7xAnlCC5BuZQPPT4+VOjDS7ICAy/ThDMmv2c/F+gFxu93dXiBztSxZfg3I6wfVDJMmD+SeqXnqBfIKAeGGFJBFBIQbUkAwaMkyEJDwO6tE0Qwx6Q6BgHD6G09AOP3NJiCc/gYTEE5/UwkIp7+RBGQImGcgIPobZiAgA5vw+LEsmHumAF5Kt8Czx3M0GfZUajbMO1cIC4LIwZh6IhdeTLfA/HOFYr80Q2TmfFp4GQqa3HAbfOVo74CfympUjX47qwhyG13Qfds3q6mzC/ZWOyDypNkvx+jtq8Tl8eurpu0G/HD56qDCuetO6vjlTzgaIZDMTS6fvI1FFX6GKlUptPv1t89WF7Cv1GsN4QvkYE29jxm1bR1w8Go9JFdeg5N1jdB2q1v83NrCSzmzTudBV0+PlJPX5IKvL1XBRmsF/FJuh1K3R/y8nG/z6WtZzkUpB2GmOhoh/mIlbLlYCbsrr4G97Yb4f1ytMzyBLDRZfWAghIkpmT4/83RqNsQWXoYZp8w+s6NX+U0ucRlStv18Wj48o1jm5LMD/632O2Etmnw0MzyB/HO1b3bgqJ6Qoi3vu5JqKQ9nkdb+UmobpDysFYNl+rABUsG3SQbtKKvRnLc895LP0nOqrgnWWspgzpn8AfMSZSBxycMB8X5eCTwnm31hDYS/eUsy6DNLmeY8I2eCnMZW1YLc0nkTDtmvw+KsIr+8J1OzxRqlpmvtHbCnygEvnC0MXyCCDAiO8GByHzuaBX9U1EJz501Vg3Hm/HrFrnr2QGDt3s2CUp09PUENjmEFBLelvdp+h2v6xJRMWJRphW+Kq8Tts7vrlg8UtZnSu91+N+eSWEvOO1ugo7tv13ajuxumq5xhhj2QI7VOyYQLsm2tIYRAo3Eb3Cs8VGrJizyZC3XtfcvZ6vyS8AOyNLvvXIBKKrWpzoA3M60+J3U0fUVusXhlEmj3Jp95eHLHs8ikfra1Ra28lIfFPuyAYOAOSa5LLgF+Lq+BhJJq8axw/Uan+HlRqyDlHPAajkvLYbtTPNityiuGD/NLxSsT+VXKQtMFKQ9nIQrrzl/VDoizXoH3zMXiVYr8tgDbnXYiNzyB4MiXLzH9SX7q1nL9gdqvOPwVNrsD5iDKTUUVg/b97jogvcsSFuVqT1+R7xUWW6w1UafzpJ/HkzRelSCk/raweJo3qsD/7YpdvLBUEx5OccYM5ne7K4EorzwWZxWJhz88E+D2NtAMwyt0NPKd7Ivi1b3WIv7q+X9hpbkYlmQVwcxTfcAJyDCOqLt9hhiGWRAQTn8IBITT33gCwulvNgHh9DeYgHD6m0pAOP2NJCBDwDwDAdHfMAMB0d8kAwHR3xgDAdHfDMNwujrheb5HmRw9ve+NLHp4xhQYyJG+pzXQO6Wfbrf7djBAnMoGXp0fJ3UwMfm47qPPMMRjUnKq5Ndr8+P8gDidTlcwQC4oG9iw7nepgymrtun+hQ1DPKauTJL8ivt8px8Qm81mC+ZpjR3KBjIzLvisiVM+2A4T9p/W/YsbhlhM3HcKpry/3ccr9E7pZ3p6+knNj894PJ45akUIH+KSd4QxM2otzIpeRxG9TvRC6Q8+iKnm5fr167/yAonR+l5vqbKR5uYW2Lhhl1+nFGtUPcBX+NAzpY92u7121KhRS7xAngoIxFtHXlIji3H2dAHErv4JYlRGRLhHTNRa0ZuzaQWq3mHEx8cnygr6g5qAeKHs7K9RabdwvRHq6xso6htELwL5lZeXZ5LBmBfs+733NzQ05AbqhELQ5EF5eXnpmDFj3pEBeUgzDDmUsrKyY2S6ENLAs1gs2ePGjVsqgzGNhaB79+zZE+9wOPwOjBTCgB44HI7rSUlJ22UgMGajp6EAEaGMHTt2emJiYpLZbDbV1dU1tLa23iQggg8A9AS9MZvNGQkJCVtHjx79tgJGJGMstD9bodCjjLEXezsYP378cqPRuILCuAK9UJgvD/TsEfY/Cafbw4yxqYyxBYyxhQP8IuEaC73eTPV6FfISFaxGMsbuo2D3eb0gkUgkEolEIpFIJBKJRCKRSCQSC1f9B8GU1jHQzyiCAAAAAElFTkSuQmCC",t_="/Website/assets/htmlpage-a6760f98.png",n_="/Website/assets/csspage-e0c0c35e.png",i_="/Website/assets/jspage-a13f6e73.png",s_="/Website/assets/designpage-974c2073.png",r_="/Website/assets/packagepage-394d1d28.png",o_="/Website/assets/vuepage-935798b0.png",a_="/Website/assets/tailwindpage-c361d86c.png",l_="/Website/assets/mainpage-7f3e359b.png",c_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAICklEQVR4nO2dW4gkVx3Gj+6lb1XV16rqLGIS4y0EdSXGXUgUISvmZfHF3YjCigQXfNAEFPdJyeMgRlkVYlAQVwm4BmNcMTvdM9PdVX2d6Znurp5WnEQxqy4BxSx7cTfMnPqkqnq6a6Z7pu8zVb3ng+9xpovf959v6lSdqiaEiYmJiYmJiYmJiYmJiakfYfXIUTTky6jLr6IufqSvH2IajwByAPX4a1iNw3Q9voaL5ADju0dCI36qBb/tz7EA9iqA1XjeNv2WNTnHAtgL+PX4Ix3w67LlmnSchTD5AC624ctta2YAv2YBTBL+n+X7UI+vd4VveQOa9B4WwqQC0OQf7ALfclX8PgtgEvDXIgLq8rUdwWuSUUFAVbqOcjjIQhh3AHXxmz3hb7oqfYMFME74KXIQmvRGV/h28K0AxL8bP8NCGFcAdfnzPae+Pf1GAEA19iQLYFwBaFKxJ/yqHb7pJRbAOOBXxcd6V04HfKBi+lEWwqgB1OTf9lc5W8A3HXuJBTDS9Mv3NxdXg0y9PYANlMUHWAhDT7/0wwErp+2VmOXl6HkWwDDwK8EQqtKNwSrHnPo2fCuAm1gVIiyEQQPQxHNDVM5W+GYAZgjfYgEMAr9MDqEqXhmqcjrgx4By9J/G72Qh9D390heHrpzt8JejlsvRL7AA+g2gJi6OVjk28BZ8YClSZgH0A78if2rkyrGDt3s59kkWQs8AxFfGVDmdXgz/jgWwG/yV2PtQEelYKsfupYjlxYiOcvSDLISdAqiKPxlr5djht0N4/q4LAGvv9WA5egRa7GFU5ZPQpLOoSjOoSRdQFZOoig1UYjcGn/qB4VsuRd5GKXQVi+EyiuFLKIVeQCl8DsXQGSxGTqAUfgjZKE/cIOTf5TNuhEOTTqAunoEmGwuo89Cki9CkMmryVdQkOuS1HIxUOd3gL4bbLm21XgxtMS0Gb9N86K+0EErSfPACzQdnUAg9jXzwFIrBh5GNHgHIOyd7J6ohH0NDPo36Pc+gLj+HevxF1GUFq/HXocm3e94kH/VazsqIldMNfqk3fNOFTQct5ztNc8JtmuNfpzlBoVn+RZoTnoPKPwNVOA2FPzb0nTmzNhr3LKHRsQXQtilqF/BDXT4Wh5/63SpnUPiF/uDrOWGrs3bzpqnKlfBH4hk8gNX4E13h14eE74LK0btNfaEP8LlO8KZVy1CFTw8eQD3+IFbjGwPDn/LK0fuBr7ZNVX4DWf4DAwdghSA/1QqBVQ76qZwO+BnuqaHg20I4ibp8ayKVszJFlaN2wL8DhRvPlnnzTEiT/s0qR+gTPvdfpLlPjAX+lv8JNekNdpYj7A4/w/8LSuDDY4XfCsFYzdbkKqscvgN8E34DqvfdE4HfCkELhlGVFHaWw2+DHygixcUmCn/LIq0q/eZuXFjp2ydf4UGVwCvIE9+ewG+FcJEcQEV8/m49y9Hb8H++rxuBURHPdU69ixdW2X7hc0btzBAnCBXxy6iI63dP5XAbULivEicJK9JnsRL933RXDmfAv4N04DRxolCOHMdK7D9TWzlK4C1kOGff2Ecl/BCWY1d6V85u4J1VOc3Jv4qs/yhxg8wF23JUm4bK0a3J/9PEF1gTWbCVo6qbK0e34JegcCJxo5C614ty9KV9qZzcaJXTPM28hDLxEzfLXLAtRV5wU+XoJnzuF1OzoRcg78BS+Fk3VI5uwT9vHDOZNmExkndy5ehW5+fJNMr8KyhF3nJq5ejt3r820b0++yUUIg86tXJ0w5m2keKmb/8oSqEvObFy9G3w9UwASPvPkGkTSuEf79fWEH2XyrGDN50OgKb9PyLTJhTDS06tHN0G3wwgFVgk0ySsEQ+K4TtOrRzdBr8ZwNtDbSd0qlCMHHdy5ejbnQoAC75jZFqEUujrTq4cfQt8v2mkfF8j0yJaDP7KyZWjN6d+E75huuD7JZkW0WJozemVo9vgWwH4/0KmQcgLEVoI6RO9aaKOXjktL1im834dST5K3C7kw0+4oXJ0G3zLPmDB/xnidiEf+o4bKkffBl+f9wHz3m8Tt4sWgpfcUDn6JvgmfMN03vt74nbRfPDNSVQOVbh147p90+vjqBw7/GYAbxI3C8Xg/ZOoHJrh5pAOfKj1OQr/fpoO/KHvqd+hcjo85wNSnvuIW4WC8OSY9+W8BpU7tePnpQInaMrfGLZy7OD1Oa9pJLzO3ITVj4xnZsdROVQJ3KSZwLP9XJ8xX/aUDjxNU/5rw079JnzDNOn5HnGraE5QR6kcmuEozXAXMBeQB/1s4xyepvznacq/MSx8PekFTXgU4tbdEDQn3By2cqjxwIPKj/yNGEj7P0oX/Jl+K8cO3wwg6b3lyvdQIxs8Ogx8qvD/gOo/M+5dCZjznaTzvr8NAt+yB7h8yH1fk4Vc8OwglUMV7pax3x4pkZvYMeWJD3Pec3TOd32nytkOX094gITnK8RtojnhZ31PvcpdQs57714dGxK+IzTpuUCTXn2nqd+Eb5jOHv4pcZtoVtB6P0nOLUPlHtuvY0TS9wid8+S7Tb3ddNZTI24SZuUAzQrruzzCfxUqd9YJ335n7ldK+E7RpOdKN/jNADaQIhOrxrELCvdoN/jG4/tU5Wec+DYqZAlPZz0zNOG504I/a/iwacwedM+r8JEXPt4F/svICo5/kznmPQ/QhOdlO3wzgMTBjxE3iarcd6nCXTdfWKQEHicuExKex+ns4RK9fPgGffWQM56GZGJiYmJiYmJiYmIi06D/Ay93udC5kNc0AAAAAElFTkSuQmCC",u_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAN+SURBVGhD7ZhdSFNhGMe3nDT6uJBwI0YT2UhRGDOyoRcGsSCcoxAyZRTihTLYYCFSpoTrQuumJcS8CikIFo66yBHIECdhF3XlnTKGTV3uQ8fMbe67553PTc2j+2xHOD94Oc//2Xs4+++c87zPOxYDAwMDAwPDCYDD4SglEolZLBa/AXnxIFt62HgsJlyhUPhyeHhYjZo1Ozv73WKxXENZUopqiM1m13d2dn6Qy+USTKWJx+MprVZ7CmVJKdpF4BG7o9frv/9rhgCfleJJOJRiGGLz+fznBoPhY3V19TnMlY1CDVXW1dW9HRsbe/Q/78JRFGLoTHNz8yedTncfNS3I19CF9vb2+b6+PgVq2pCPIUF3d/eiUqmUoaYVFXjMFhHclfnW1tbLqLPGarU6oKzXQMiDcR5GJYw4jqKRy4ss0mg0tsbGRgHqorC3txfZ3Nz0u91uMnzb29s+v9+/FQqFvOFw2AdrmDcWi20kk8mfMN0FI5E+kYJsDQkHBgYWpVIp+YXLhsfj+T0+Pq6JRCLvMJVBNoYEvb29CzKZTIy6rDidTv/ExMQlCIMHmb85rijwenp6rHQxQ4A+sYrL5XahzOAoQ2c7OjosbW1t9ahpg0gkuoVhBpSGamtrDQqF4ipKWgFPDOX3ojSkUqnuYkg74A7xMcyA0lAwGIxgeKKgNGQ0GnVkH4OSVtjt9i0MM6A0BLXeBF20HiWtWFpa+oZhBpSGCLBqP4Oab0RJGxwOxwyGGRzbywUCgS+rq6s1LS0tUkyVFbPZ/BUeuScQHvo6ZNv6VDQ0NLzXarX3UJeUaDQahy/tga5gy+Vy/YIezwn9nX1/f98OfZ0NpgQOZmaSS3Na2dTUNNPf338bdU7s7OyE1tbWPNCIuqEn88Kd9+3u7rqhCfWAAW8ikSDDlUqlPDCdjGT6xBzJxRCBbLmnYZeqQp01arU612vlxZFF4RBiKysrD6DjfY2aduRqiJBcX1/XQkl/gZpW5GMoDbyoj4eGhh7SbfHN2xABdpuvBgcHu8gLj6myU5AhAlQo8+jo6PXl5eUNTJWVgg0RoNT+mJqaumIymRYwVTaKYgjx2mw2+cjIyFOyMGIuDXTuUQxLTq5/Yx1HKhwOL87NzVl5PN4NgUBQRZKTk5PTsNJ/Ts8oMaVc7E5zOJybJIBKaIEDLbciDAwMDAwMDJSwWH8Ab6xMXb1orQEAAAAASUVORK5CYII=";var Qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},d_={exports:{}};/*!
* sweetalert2 v11.7.27
* Released under the MIT License.
*/(function(n,e){(function(t,i){n.exports=i()})(Qn,function(){function t(c,d){var v=s(c,d,"get");return r(c,v)}function i(c,d,v){var R=s(c,d,"set");return a(c,R,v),v}function s(c,d,v){if(!d.has(c))throw new TypeError("attempted to "+v+" private field on non-instance");return d.get(c)}function r(c,d){return d.get?d.get.call(c):d.value}function a(c,d,v){if(d.set)d.set.call(c,v);else{if(!d.writable)throw new TypeError("attempted to set read only private field");d.value=v}}function o(c,d){if(d.has(c))throw new TypeError("Cannot initialize the same private elements twice on an object")}function l(c,d,v){o(c,d),d.set(c,v)}const u=100,f={},p=()=>{f.previousActiveElement instanceof HTMLElement?(f.previousActiveElement.focus(),f.previousActiveElement=null):document.body&&document.body.focus()},m=c=>new Promise(d=>{if(!c)return d();const v=window.scrollX,R=window.scrollY;f.restoreFocusTimeout=setTimeout(()=>{p(),d()},u),window.scrollTo(v,R)});var _={innerParams:new WeakMap,domCache:new WeakMap};const M="swal2-",h=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((c,d)=>(c[d]=M+d,c),{}),T=["success","warning","info","question","error"].reduce((c,d)=>(c[d]=M+d,c),{}),y="SweetAlert2:",E=c=>c.charAt(0).toUpperCase()+c.slice(1),P=c=>{console.warn("".concat(y," ").concat(typeof c=="object"?c.join(" "):c))},D=c=>{console.error("".concat(y," ").concat(c))},I=[],J=c=>{I.includes(c)||(I.push(c),P(c))},A=(c,d)=>{J('"'.concat(c,'" is deprecated and will be removed in the next major release. Please use "').concat(d,'" instead.'))},L=c=>typeof c=="function"?c():c,pe=c=>c&&typeof c.toPromise=="function",me=c=>pe(c)?c.toPromise():Promise.resolve(c),V=c=>c&&Promise.resolve(c)===c,j=()=>document.body.querySelector(".".concat(h.container)),ee=c=>{const d=j();return d?d.querySelector(c):null},ie=c=>ee(".".concat(c)),O=()=>ie(h.popup),Q=()=>ie(h.icon),ge=()=>ie(h["icon-content"]),ue=()=>ie(h.title),W=()=>ie(h["html-container"]),Y=()=>ie(h.image),we=()=>ie(h["progress-steps"]),Ae=()=>ie(h["validation-message"]),Ee=()=>ee(".".concat(h.actions," .").concat(h.confirm)),Le=()=>ee(".".concat(h.actions," .").concat(h.cancel)),Ue=()=>ee(".".concat(h.actions," .").concat(h.deny)),Ne=()=>ie(h["input-label"]),Ge=()=>ee(".".concat(h.loader)),ot=()=>ie(h.actions),ke=()=>ie(h.footer),x=()=>ie(h["timer-progress-bar"]),U=()=>ie(h.close),B=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,K=()=>{const c=O();if(!c)return[];const d=c.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),v=Array.from(d).sort((De,Qe)=>{const bt=parseInt(De.getAttribute("tabindex")||"0"),xt=parseInt(Qe.getAttribute("tabindex")||"0");return bt>xt?1:bt<xt?-1:0}),R=c.querySelectorAll(B),te=Array.from(R).filter(De=>De.getAttribute("tabindex")!=="-1");return[...new Set(v.concat(te))].filter(De=>Ce(De))},X=()=>le(document.body,h.shown)&&!le(document.body,h["toast-shown"])&&!le(document.body,h["no-backdrop"]),de=()=>{const c=O();return c?le(c,h.toast):!1},he=()=>{const c=O();return c?c.hasAttribute("data-loading"):!1},Z=(c,d)=>{if(c.textContent="",d){const R=new DOMParser().parseFromString(d,"text/html"),te=R.querySelector("head");te&&Array.from(te.childNodes).forEach(Qe=>{c.appendChild(Qe)});const De=R.querySelector("body");De&&Array.from(De.childNodes).forEach(Qe=>{Qe instanceof HTMLVideoElement||Qe instanceof HTMLAudioElement?c.appendChild(Qe.cloneNode(!0)):c.appendChild(Qe)})}},le=(c,d)=>{if(!d)return!1;const v=d.split(/\s+/);for(let R=0;R<v.length;R++)if(!c.classList.contains(v[R]))return!1;return!0},ce=(c,d)=>{Array.from(c.classList).forEach(v=>{!Object.values(h).includes(v)&&!Object.values(T).includes(v)&&!Object.values(d.showClass||{}).includes(v)&&c.classList.remove(v)})},_e=(c,d,v)=>{if(ce(c,d),d.customClass&&d.customClass[v]){if(typeof d.customClass[v]!="string"&&!d.customClass[v].forEach){P("Invalid type of customClass.".concat(v,'! Expected string or iterable object, got "').concat(typeof d.customClass[v],'"'));return}z(c,d.customClass[v])}},S=(c,d)=>{if(!d)return null;switch(d){case"select":case"textarea":case"file":return c.querySelector(".".concat(h.popup," > .").concat(h[d]));case"checkbox":return c.querySelector(".".concat(h.popup," > .").concat(h.checkbox," input"));case"radio":return c.querySelector(".".concat(h.popup," > .").concat(h.radio," input:checked"))||c.querySelector(".".concat(h.popup," > .").concat(h.radio," input:first-child"));case"range":return c.querySelector(".".concat(h.popup," > .").concat(h.range," input"));default:return c.querySelector(".".concat(h.popup," > .").concat(h.input))}},w=c=>{if(c.focus(),c.type!=="file"){const d=c.value;c.value="",c.value=d}},N=(c,d,v)=>{!c||!d||(typeof d=="string"&&(d=d.split(/\s+/).filter(Boolean)),d.forEach(R=>{Array.isArray(c)?c.forEach(te=>{v?te.classList.add(R):te.classList.remove(R)}):v?c.classList.add(R):c.classList.remove(R)}))},z=(c,d)=>{N(c,d,!0)},ne=(c,d)=>{N(c,d,!1)},ae=(c,d)=>{const v=Array.from(c.children);for(let R=0;R<v.length;R++){const te=v[R];if(te instanceof HTMLElement&&le(te,d))return te}},ve=(c,d,v)=>{v==="".concat(parseInt(v))&&(v=parseInt(v)),v||parseInt(v)===0?c.style[d]=typeof v=="number"?"".concat(v,"px"):v:c.style.removeProperty(d)},fe=function(c){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";c&&(c.style.display=d)},H=c=>{c&&(c.style.display="none")},Ie=(c,d,v,R)=>{const te=c.querySelector(d);te&&(te.style[v]=R)},Pe=function(c,d){let v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";d?fe(c,v):H(c)},Ce=c=>!!(c&&(c.offsetWidth||c.offsetHeight||c.getClientRects().length)),ye=()=>!Ce(Ee())&&!Ce(Ue())&&!Ce(Le()),Te=c=>c.scrollHeight>c.clientHeight,We=c=>{const d=window.getComputedStyle(c),v=parseFloat(d.getPropertyValue("animation-duration")||"0"),R=parseFloat(d.getPropertyValue("transition-duration")||"0");return v>0||R>0},nt=function(c){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const v=x();v&&Ce(v)&&(d&&(v.style.transition="none",v.style.width="100%"),setTimeout(()=>{v.style.transition="width ".concat(c/1e3,"s linear"),v.style.width="0%"},10))},F=()=>{const c=x();if(!c)return;const d=parseInt(window.getComputedStyle(c).width);c.style.removeProperty("transition"),c.style.width="100%";const v=parseInt(window.getComputedStyle(c).width),R=d/v*100;c.style.width="".concat(R,"%")},Se=()=>typeof window>"u"||typeof document>"u",$=`
 <div aria-labelledby="`.concat(h.title,'" aria-describedby="').concat(h["html-container"],'" class="').concat(h.popup,`" tabindex="-1">
   <button type="button" class="`).concat(h.close,`"></button>
   <ul class="`).concat(h["progress-steps"],`"></ul>
   <div class="`).concat(h.icon,`"></div>
   <img class="`).concat(h.image,`" />
   <h2 class="`).concat(h.title,'" id="').concat(h.title,`"></h2>
   <div class="`).concat(h["html-container"],'" id="').concat(h["html-container"],`"></div>
   <input class="`).concat(h.input,'" id="').concat(h.input,`" />
   <input type="file" class="`).concat(h.file,`" />
   <div class="`).concat(h.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(h.select,'" id="').concat(h.select,`"></select>
   <div class="`).concat(h.radio,`"></div>
   <label class="`).concat(h.checkbox,`">
     <input type="checkbox" id="`).concat(h.checkbox,`" />
     <span class="`).concat(h.label,`"></span>
   </label>
   <textarea class="`).concat(h.textarea,'" id="').concat(h.textarea,`"></textarea>
   <div class="`).concat(h["validation-message"],'" id="').concat(h["validation-message"],`"></div>
   <div class="`).concat(h.actions,`">
     <div class="`).concat(h.loader,`"></div>
     <button type="button" class="`).concat(h.confirm,`"></button>
     <button type="button" class="`).concat(h.deny,`"></button>
     <button type="button" class="`).concat(h.cancel,`"></button>
   </div>
   <div class="`).concat(h.footer,`"></div>
   <div class="`).concat(h["timer-progress-bar-container"],`">
     <div class="`).concat(h["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),xe=()=>{const c=j();return c?(c.remove(),ne([document.documentElement,document.body],[h["no-backdrop"],h["toast-shown"],h["has-column"]]),!0):!1},be=()=>{f.currentInstance.resetValidationMessage()},Je=()=>{const c=O(),d=ae(c,h.input),v=ae(c,h.file),R=c.querySelector(".".concat(h.range," input")),te=c.querySelector(".".concat(h.range," output")),De=ae(c,h.select),Qe=c.querySelector(".".concat(h.checkbox," input")),bt=ae(c,h.textarea);d.oninput=be,v.onchange=be,De.onchange=be,Qe.onchange=be,bt.oninput=be,R.oninput=()=>{be(),te.value=R.value},R.onchange=()=>{be(),te.value=R.value}},st=c=>typeof c=="string"?document.querySelector(c):c,ht=c=>{const d=O();d.setAttribute("role",c.toast?"alert":"dialog"),d.setAttribute("aria-live",c.toast?"polite":"assertive"),c.toast||d.setAttribute("aria-modal","true")},xn=c=>{window.getComputedStyle(c).direction==="rtl"&&z(j(),h.rtl)},it=c=>{const d=xe();if(Se()){D("SweetAlert2 requires document to initialize");return}const v=document.createElement("div");v.className=h.container,d&&z(v,h["no-transition"]),Z(v,$);const R=st(c.target);R.appendChild(v),ht(c),xn(R),Je()},Gt=(c,d)=>{c instanceof HTMLElement?d.appendChild(c):typeof c=="object"?Rt(c,d):c&&Z(d,c)},Rt=(c,d)=>{c.jquery?cr(d,c):Z(d,c.toString())},cr=(c,d)=>{if(c.textContent="",0 in d)for(let v=0;v in d;v++)c.appendChild(d[v].cloneNode(!0));else c.appendChild(d.cloneNode(!0))},wn=(()=>{if(Se())return!1;const c=document.createElement("div");return typeof c.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof c.style.animation<"u"?"animationend":!1})(),Co=(c,d)=>{const v=ot(),R=Ge();!v||!R||(!d.showConfirmButton&&!d.showDenyButton&&!d.showCancelButton?H(v):fe(v),_e(v,d,"actions"),Di(v,R,d),Z(R,d.loaderHtml||""),_e(R,d,"loader"))};function Di(c,d,v){const R=Ee(),te=Ue(),De=Le();!R||!te||!De||(jn(R,"confirm",v),jn(te,"deny",v),jn(De,"cancel",v),ur(R,te,De,v),v.reverseButtons&&(v.toast?(c.insertBefore(De,R),c.insertBefore(te,R)):(c.insertBefore(De,d),c.insertBefore(te,d),c.insertBefore(R,d))))}function ur(c,d,v,R){if(!R.buttonsStyling){ne([c,d,v],h.styled);return}z([c,d,v],h.styled),R.confirmButtonColor&&(c.style.backgroundColor=R.confirmButtonColor,z(c,h["default-outline"])),R.denyButtonColor&&(d.style.backgroundColor=R.denyButtonColor,z(d,h["default-outline"])),R.cancelButtonColor&&(v.style.backgroundColor=R.cancelButtonColor,z(v,h["default-outline"]))}function jn(c,d,v){const R=E(d);Pe(c,v["show".concat(R,"Button")],"inline-block"),Z(c,v["".concat(d,"ButtonText")]||""),c.setAttribute("aria-label",v["".concat(d,"ButtonAriaLabel")]||""),c.className=h[d],_e(c,v,"".concat(d,"Button"))}const dr=(c,d)=>{const v=U();v&&(Z(v,d.closeButtonHtml||""),_e(v,d,"closeButton"),Pe(v,d.showCloseButton),v.setAttribute("aria-label",d.closeButtonAriaLabel||""))},Ro=(c,d)=>{const v=j();v&&(Lo(v,d.backdrop),Po(v,d.position),C(v,d.grow),_e(v,d,"container"))};function Lo(c,d){typeof d=="string"?c.style.background=d:d||z([document.documentElement,document.body],h["no-backdrop"])}function Po(c,d){d&&(d in h?z(c,h[d]):(P('The "position" parameter is not valid, defaulting to "center"'),z(c,h.center)))}function C(c,d){d&&z(c,h["grow-".concat(d)])}const G=["input","file","range","select","radio","checkbox","textarea"],se=(c,d)=>{const v=O();if(!v)return;const R=_.innerParams.get(c),te=!R||d.input!==R.input;G.forEach(De=>{const Qe=ae(v,h[De]);Qe&&(Re(De,d.inputAttributes),Qe.className=h[De],te&&H(Qe))}),d.input&&(te&&q(d),Oe(d))},q=c=>{if(!c.input)return;if(!Fe[c.input]){D('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input,'"'));return}const d=Xe(c.input),v=Fe[c.input](d,c);fe(d),c.inputAutoFocus&&setTimeout(()=>{w(v)})},re=c=>{for(let d=0;d<c.attributes.length;d++){const v=c.attributes[d].name;["id","type","value","style"].includes(v)||c.removeAttribute(v)}},Re=(c,d)=>{const v=S(O(),c);if(v){re(v);for(const R in d)v.setAttribute(R,d[R])}},Oe=c=>{const d=Xe(c.input);typeof c.customClass=="object"&&z(d,c.customClass.input)},ze=(c,d)=>{(!c.placeholder||d.inputPlaceholder)&&(c.placeholder=d.inputPlaceholder)},Be=(c,d,v)=>{if(v.inputLabel){const R=document.createElement("label"),te=h["input-label"];R.setAttribute("for",c.id),R.className=te,typeof v.customClass=="object"&&z(R,v.customClass.inputLabel),R.innerText=v.inputLabel,d.insertAdjacentElement("beforebegin",R)}},Xe=c=>ae(O(),h[c]||h.input),He=(c,d)=>{["string","number"].includes(typeof d)?c.value="".concat(d):V(d)||P('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof d,'"'))},Fe={};Fe.text=Fe.email=Fe.password=Fe.number=Fe.tel=Fe.url=(c,d)=>(He(c,d.inputValue),Be(c,c,d),ze(c,d),c.type=d.input,c),Fe.file=(c,d)=>(Be(c,c,d),ze(c,d),c),Fe.range=(c,d)=>{const v=c.querySelector("input"),R=c.querySelector("output");return He(v,d.inputValue),v.type=d.input,He(R,d.inputValue),Be(v,c,d),c},Fe.select=(c,d)=>{if(c.textContent="",d.inputPlaceholder){const v=document.createElement("option");Z(v,d.inputPlaceholder),v.value="",v.disabled=!0,v.selected=!0,c.appendChild(v)}return Be(c,c,d),c},Fe.radio=c=>(c.textContent="",c),Fe.checkbox=(c,d)=>{const v=S(O(),"checkbox");v.value="1",v.checked=!!d.inputValue;const R=c.querySelector("span");return Z(R,d.inputPlaceholder),v},Fe.textarea=(c,d)=>{He(c,d.inputValue),ze(c,d),Be(c,c,d);const v=R=>parseInt(window.getComputedStyle(R).marginLeft)+parseInt(window.getComputedStyle(R).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const R=parseInt(window.getComputedStyle(O()).width),te=()=>{if(!document.body.contains(c))return;const De=c.offsetWidth+v(c);De>R?O().style.width="".concat(De,"px"):ve(O(),"width",d.width)};new MutationObserver(te).observe(c,{attributes:!0,attributeFilter:["style"]})}}),c};const at=(c,d)=>{const v=W();v&&(_e(v,d,"htmlContainer"),d.html?(Gt(d.html,v),fe(v,"block")):d.text?(v.textContent=d.text,fe(v,"block")):H(v),se(c,d))},ct=(c,d)=>{const v=ke();v&&(Pe(v,d.footer,"block"),d.footer&&Gt(d.footer,v),_e(v,d,"footer"))},Vt=(c,d)=>{const v=_.innerParams.get(c),R=Q();if(R){if(v&&d.icon===v.icon){ut(R,d),Jt(R,d);return}if(!d.icon&&!d.iconHtml){H(R);return}if(d.icon&&Object.keys(T).indexOf(d.icon)===-1){D('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(d.icon,'"')),H(R);return}fe(R),ut(R,d),Jt(R,d),z(R,d.showClass&&d.showClass.icon)}},Jt=(c,d)=>{for(const[v,R]of Object.entries(T))d.icon!==v&&ne(c,R);z(c,d.icon&&T[d.icon]),Pn(c,d),pt(),_e(c,d,"icon")},pt=()=>{const c=O();if(!c)return;const d=window.getComputedStyle(c).getPropertyValue("background-color"),v=c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let R=0;R<v.length;R++)v[R].style.backgroundColor=d},je=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,As=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,ut=(c,d)=>{if(!d.icon&&!d.iconHtml)return;let v=c.innerHTML,R="";d.iconHtml?R=Ts(d.iconHtml):d.icon==="success"?(R=je,v=v.replace(/ style=".*?"/g,"")):d.icon==="error"?R=As:d.icon&&(R=Ts({question:"?",warning:"!",info:"i"}[d.icon])),v.trim()!==R.trim()&&Z(c,R)},Pn=(c,d)=>{if(d.iconColor){c.style.color=d.iconColor,c.style.borderColor=d.iconColor;for(const v of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Ie(c,v,"backgroundColor",d.iconColor);Ie(c,".swal2-success-ring","borderColor",d.iconColor)}},Ts=c=>'<div class="'.concat(h["icon-content"],'">').concat(c,"</div>"),ui=(c,d)=>{const v=Y();if(v){if(!d.imageUrl){H(v);return}fe(v,""),v.setAttribute("src",d.imageUrl),v.setAttribute("alt",d.imageAlt||""),ve(v,"width",d.imageWidth),ve(v,"height",d.imageHeight),v.className=h.image,_e(v,d,"image")}},Cs=(c,d)=>{const v=j(),R=O();if(!(!v||!R)){if(d.toast){ve(v,"width",d.width),R.style.width="100%";const te=Ge();te&&R.insertBefore(te,Q())}else ve(R,"width",d.width);ve(R,"padding",d.padding),d.color&&(R.style.color=d.color),d.background&&(R.style.background=d.background),H(Ae()),Lt(R,d)}},Lt=(c,d)=>{const v=d.showClass||{};c.className="".concat(h.popup," ").concat(Ce(c)?v.popup:""),d.toast?(z([document.documentElement,document.body],h["toast-shown"]),z(c,h.toast)):z(c,h.modal),_e(c,d,"popup"),typeof d.customClass=="string"&&z(c,d.customClass),d.icon&&z(c,h["icon-".concat(d.icon)])},Dn=(c,d)=>{const v=we();if(!v)return;const{progressSteps:R,currentProgressStep:te}=d;if(!R||R.length===0||te===void 0){H(v);return}fe(v),v.textContent="",te>=R.length&&P("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),R.forEach((De,Qe)=>{const bt=Rs(De);if(v.appendChild(bt),Qe===te&&z(bt,h["active-progress-step"]),Qe!==R.length-1){const xt=Ot(d);v.appendChild(xt)}})},Rs=c=>{const d=document.createElement("li");return z(d,h["progress-step"]),Z(d,c),d},Ot=c=>{const d=document.createElement("li");return z(d,h["progress-step-line"]),c.progressStepsDistance&&ve(d,"width",c.progressStepsDistance),d},Ls=(c,d)=>{const v=ue();v&&(Pe(v,d.title||d.titleText,"block"),d.title&&Gt(d.title,v),d.titleText&&(v.innerText=d.titleText),_e(v,d,"title"))},fr=(c,d)=>{Cs(c,d),Ro(c,d),Dn(c,d),Vt(c,d),ui(c,d),Ls(c,d),dr(c,d),at(c,d),Co(c,d),ct(c,d);const v=O();typeof d.didRender=="function"&&v&&d.didRender(v)},hr=()=>Ce(O()),bl=()=>{var c;return(c=Ee())===null||c===void 0?void 0:c.click()},kf=()=>{var c;return(c=Ue())===null||c===void 0?void 0:c.click()},Gf=()=>{var c;return(c=Le())===null||c===void 0?void 0:c.click()},Ii=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Ml=c=>{c.keydownTarget&&c.keydownHandlerAdded&&(c.keydownTarget.removeEventListener("keydown",c.keydownHandler,{capture:c.keydownListenerCapture}),c.keydownHandlerAdded=!1)},Vf=(c,d,v,R)=>{Ml(d),v.toast||(d.keydownHandler=te=>Xf(c,te,R),d.keydownTarget=v.keydownListenerCapture?window:O(),d.keydownListenerCapture=v.keydownListenerCapture,d.keydownTarget.addEventListener("keydown",d.keydownHandler,{capture:d.keydownListenerCapture}),d.keydownHandlerAdded=!0)},Do=(c,d)=>{const v=K();if(v.length){c=c+d,c===v.length?c=0:c===-1&&(c=v.length-1),v[c].focus();return}O().focus()},yl=["ArrowRight","ArrowDown"],Wf=["ArrowLeft","ArrowUp"],Xf=(c,d,v)=>{const R=_.innerParams.get(c);R&&(d.isComposing||d.keyCode===229||(R.stopKeydownPropagation&&d.stopPropagation(),d.key==="Enter"?qf(c,d,R):d.key==="Tab"?jf(d):[...yl,...Wf].includes(d.key)?Yf(d.key):d.key==="Escape"&&Kf(d,R,v)))},qf=(c,d,v)=>{if(L(v.allowEnterKey)&&d.target&&c.getInput()&&d.target instanceof HTMLElement&&d.target.outerHTML===c.getInput().outerHTML){if(["textarea","file"].includes(v.input))return;bl(),d.preventDefault()}},jf=c=>{const d=c.target,v=K();let R=-1;for(let te=0;te<v.length;te++)if(d===v[te]){R=te;break}c.shiftKey?Do(R,-1):Do(R,1),c.stopPropagation(),c.preventDefault()},Yf=c=>{const d=Ee(),v=Ue(),R=Le(),te=[d,v,R];if(document.activeElement instanceof HTMLElement&&!te.includes(document.activeElement))return;const De=yl.includes(c)?"nextElementSibling":"previousElementSibling";let Qe=document.activeElement;for(let bt=0;bt<ot().children.length;bt++){if(Qe=Qe[De],!Qe)return;if(Qe instanceof HTMLButtonElement&&Ce(Qe))break}Qe instanceof HTMLButtonElement&&Qe.focus()},Kf=(c,d,v)=>{L(d.allowEscapeKey)&&(c.preventDefault(),v(Ii.esc))};var Ps={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Qf=()=>{Array.from(document.body.children).forEach(d=>{d===j()||d.contains(j())||(d.hasAttribute("aria-hidden")&&d.setAttribute("data-previous-aria-hidden",d.getAttribute("aria-hidden")||""),d.setAttribute("aria-hidden","true"))})},Sl=()=>{Array.from(document.body.children).forEach(d=>{d.hasAttribute("data-previous-aria-hidden")?(d.setAttribute("aria-hidden",d.getAttribute("data-previous-aria-hidden")||""),d.removeAttribute("data-previous-aria-hidden")):d.removeAttribute("aria-hidden")})},El=typeof window<"u"&&!!window.GestureEvent,Zf=()=>{if(El&&!le(document.body,h.iosfix)){const c=document.body.scrollTop;document.body.style.top="".concat(c*-1,"px"),z(document.body,h.iosfix),Jf()}},Jf=()=>{const c=j();if(!c)return;let d;c.ontouchstart=v=>{d=$f(v)},c.ontouchmove=v=>{d&&(v.preventDefault(),v.stopPropagation())}},$f=c=>{const d=c.target,v=j(),R=W();return!v||!R||eh(c)||th(c)?!1:d===v||!Te(v)&&d instanceof HTMLElement&&d.tagName!=="INPUT"&&d.tagName!=="TEXTAREA"&&!(Te(R)&&R.contains(d))},eh=c=>c.touches&&c.touches.length&&c.touches[0].touchType==="stylus",th=c=>c.touches&&c.touches.length>1,nh=()=>{if(le(document.body,h.iosfix)){const c=parseInt(document.body.style.top,10);ne(document.body,h.iosfix),document.body.style.top="",document.body.scrollTop=c*-1}},ih=()=>{const c=document.createElement("div");c.className=h["scrollbar-measure"],document.body.appendChild(c);const d=c.getBoundingClientRect().width-c.clientWidth;return document.body.removeChild(c),d};let Ui=null;const sh=c=>{Ui===null&&(document.body.scrollHeight>window.innerHeight||c==="scroll")&&(Ui=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Ui+ih(),"px"))},rh=()=>{Ui!==null&&(document.body.style.paddingRight="".concat(Ui,"px"),Ui=null)};function Al(c,d,v,R){de()?Cl(c,R):(m(v).then(()=>Cl(c,R)),Ml(f)),El?(d.setAttribute("style","display:none !important"),d.removeAttribute("class"),d.innerHTML=""):d.remove(),X()&&(rh(),nh(),Sl()),oh()}function oh(){ne([document.documentElement,document.body],[h.shown,h["height-auto"],h["no-backdrop"],h["toast-shown"]])}function Yn(c){c=lh(c);const d=Ps.swalPromiseResolve.get(this),v=ah(this);this.isAwaitingPromise?c.isDismissed||(Ds(this),d(c)):v&&d(c)}const ah=c=>{const d=O();if(!d)return!1;const v=_.innerParams.get(c);if(!v||le(d,v.hideClass.popup))return!1;ne(d,v.showClass.popup),z(d,v.hideClass.popup);const R=j();return ne(R,v.showClass.backdrop),z(R,v.hideClass.backdrop),ch(c,d,v),!0};function Tl(c){const d=Ps.swalPromiseReject.get(this);Ds(this),d&&d(c)}const Ds=c=>{c.isAwaitingPromise&&(delete c.isAwaitingPromise,_.innerParams.get(c)||c._destroy())},lh=c=>typeof c>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},c),ch=(c,d,v)=>{const R=j(),te=wn&&We(d);typeof v.willClose=="function"&&v.willClose(d),te?uh(c,d,R,v.returnFocus,v.didClose):Al(c,R,v.returnFocus,v.didClose)},uh=(c,d,v,R,te)=>{wn&&(f.swalCloseEventFinishedCallback=Al.bind(null,c,v,R,te),d.addEventListener(wn,function(De){De.target===d&&(f.swalCloseEventFinishedCallback(),delete f.swalCloseEventFinishedCallback)}))},Cl=(c,d)=>{setTimeout(()=>{typeof d=="function"&&d.bind(c.params)(),c._destroy&&c._destroy()})},Fi=c=>{let d=O();if(d||new vr,d=O(),!d)return;const v=Ge();de()?H(Q()):dh(d,c),fe(v),d.setAttribute("data-loading","true"),d.setAttribute("aria-busy","true"),d.focus()},dh=(c,d)=>{const v=ot(),R=Ge();!v||!R||(!d&&Ce(Ee())&&(d=Ee()),fe(v),d&&(H(d),R.setAttribute("data-button-to-replace",d.className),v.insertBefore(R,d)),z([c,v],h.loading))},fh=(c,d)=>{d.input==="select"||d.input==="radio"?_h(c,d):["text","email","number","tel","textarea"].some(v=>v===d.input)&&(pe(d.inputValue)||V(d.inputValue))&&(Fi(Ee()),vh(c,d))},hh=(c,d)=>{const v=c.getInput();if(!v)return null;switch(d.input){case"checkbox":return ph(v);case"radio":return mh(v);case"file":return gh(v);default:return d.inputAutoTrim?v.value.trim():v.value}},ph=c=>c.checked?1:0,mh=c=>c.checked?c.value:null,gh=c=>c.files&&c.files.length?c.getAttribute("multiple")!==null?c.files:c.files[0]:null,_h=(c,d)=>{const v=O();if(!v)return;const R=te=>{d.input==="select"?xh(v,pr(te),d):d.input==="radio"&&wh(v,pr(te),d)};pe(d.inputOptions)||V(d.inputOptions)?(Fi(Ee()),me(d.inputOptions).then(te=>{c.hideLoading(),R(te)})):typeof d.inputOptions=="object"?R(d.inputOptions):D("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof d.inputOptions))},vh=(c,d)=>{const v=c.getInput();v&&(H(v),me(d.inputValue).then(R=>{v.value=d.input==="number"?"".concat(parseFloat(R)||0):"".concat(R),fe(v),v.focus(),c.hideLoading()}).catch(R=>{D("Error in inputValue promise: ".concat(R)),v.value="",fe(v),v.focus(),c.hideLoading()}))};function xh(c,d,v){const R=ae(c,h.select);if(!R)return;const te=(De,Qe,bt)=>{const xt=document.createElement("option");xt.value=bt,Z(xt,Qe),xt.selected=Rl(bt,v.inputValue),De.appendChild(xt)};d.forEach(De=>{const Qe=De[0],bt=De[1];if(Array.isArray(bt)){const xt=document.createElement("optgroup");xt.label=Qe,xt.disabled=!1,R.appendChild(xt),bt.forEach(Oi=>te(xt,Oi[1],Oi[0]))}else te(R,bt,Qe)}),R.focus()}function wh(c,d,v){const R=ae(c,h.radio);if(!R)return;d.forEach(De=>{const Qe=De[0],bt=De[1],xt=document.createElement("input"),Oi=document.createElement("label");xt.type="radio",xt.name=h.radio,xt.value=Qe,Rl(Qe,v.inputValue)&&(xt.checked=!0);const Oo=document.createElement("span");Z(Oo,bt),Oo.className=h.label,Oi.appendChild(xt),Oi.appendChild(Oo),R.appendChild(Oi)});const te=R.querySelectorAll("input");te.length&&te[0].focus()}const pr=c=>{const d=[];return c instanceof Map?c.forEach((v,R)=>{let te=v;typeof te=="object"&&(te=pr(te)),d.push([R,te])}):Object.keys(c).forEach(v=>{let R=c[v];typeof R=="object"&&(R=pr(R)),d.push([v,R])}),d},Rl=(c,d)=>!!d&&d.toString()===c.toString(),bh=c=>{const d=_.innerParams.get(c);c.disableButtons(),d.input?Ll(c,"confirm"):Uo(c,!0)},Mh=c=>{const d=_.innerParams.get(c);c.disableButtons(),d.returnInputValueOnDeny?Ll(c,"deny"):Io(c,!1)},yh=(c,d)=>{c.disableButtons(),d(Ii.cancel)},Ll=(c,d)=>{const v=_.innerParams.get(c);if(!v.input){D('The "input" parameter is needed to be set when using returnInputValueOn'.concat(E(d)));return}const R=c.getInput(),te=hh(c,v);v.inputValidator?Sh(c,te,d):R&&!R.checkValidity()?(c.enableButtons(),c.showValidationMessage(v.validationMessage)):d==="deny"?Io(c,te):Uo(c,te)},Sh=(c,d,v)=>{const R=_.innerParams.get(c);c.disableInput(),Promise.resolve().then(()=>me(R.inputValidator(d,R.validationMessage))).then(De=>{c.enableButtons(),c.enableInput(),De?c.showValidationMessage(De):v==="deny"?Io(c,d):Uo(c,d)})},Io=(c,d)=>{const v=_.innerParams.get(c||void 0);v.showLoaderOnDeny&&Fi(Ue()),v.preDeny?(c.isAwaitingPromise=!0,Promise.resolve().then(()=>me(v.preDeny(d,v.validationMessage))).then(te=>{te===!1?(c.hideLoading(),Ds(c)):c.close({isDenied:!0,value:typeof te>"u"?d:te})}).catch(te=>Dl(c||void 0,te))):c.close({isDenied:!0,value:d})},Pl=(c,d)=>{c.close({isConfirmed:!0,value:d})},Dl=(c,d)=>{c.rejectPromise(d)},Uo=(c,d)=>{const v=_.innerParams.get(c||void 0);v.showLoaderOnConfirm&&Fi(),v.preConfirm?(c.resetValidationMessage(),c.isAwaitingPromise=!0,Promise.resolve().then(()=>me(v.preConfirm(d,v.validationMessage))).then(te=>{Ce(Ae())||te===!1?(c.hideLoading(),Ds(c)):Pl(c,typeof te>"u"?d:te)}).catch(te=>Dl(c||void 0,te))):Pl(c,d)};function mr(){const c=_.innerParams.get(this);if(!c)return;const d=_.domCache.get(this);H(d.loader),de()?c.icon&&fe(Q()):Eh(d),ne([d.popup,d.actions],h.loading),d.popup.removeAttribute("aria-busy"),d.popup.removeAttribute("data-loading"),d.confirmButton.disabled=!1,d.denyButton.disabled=!1,d.cancelButton.disabled=!1}const Eh=c=>{const d=c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));d.length?fe(d[0],"inline-block"):ye()&&H(c.actions)};function Il(){const c=_.innerParams.get(this),d=_.domCache.get(this);return d?S(d.popup,c.input):null}function Ul(c,d,v){const R=_.domCache.get(c);d.forEach(te=>{R[te].disabled=v})}function Fl(c,d){const v=O();if(!(!v||!c))if(c.type==="radio"){const R=v.querySelectorAll('[name="'.concat(h.radio,'"]'));for(let te=0;te<R.length;te++)R[te].disabled=d}else c.disabled=d}function Nl(){Ul(this,["confirmButton","denyButton","cancelButton"],!1)}function Ol(){Ul(this,["confirmButton","denyButton","cancelButton"],!0)}function Bl(){Fl(this.getInput(),!1)}function Hl(){Fl(this.getInput(),!0)}function zl(c){const d=_.domCache.get(this),v=_.innerParams.get(this);Z(d.validationMessage,c),d.validationMessage.className=h["validation-message"],v.customClass&&v.customClass.validationMessage&&z(d.validationMessage,v.customClass.validationMessage),fe(d.validationMessage);const R=this.getInput();R&&(R.setAttribute("aria-invalid",!0),R.setAttribute("aria-describedby",h["validation-message"]),w(R),z(R,h.inputerror))}function kl(){const c=_.domCache.get(this);c.validationMessage&&H(c.validationMessage);const d=this.getInput();d&&(d.removeAttribute("aria-invalid"),d.removeAttribute("aria-describedby"),ne(d,h.inputerror))}const Ni={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Ah=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Th={},Ch=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Gl=c=>Object.prototype.hasOwnProperty.call(Ni,c),Vl=c=>Ah.indexOf(c)!==-1,Wl=c=>Th[c],Rh=c=>{Gl(c)||P('Unknown parameter "'.concat(c,'"'))},Lh=c=>{Ch.includes(c)&&P('The parameter "'.concat(c,'" is incompatible with toasts'))},Ph=c=>{const d=Wl(c);d&&A(c,d)},Dh=c=>{c.backdrop===!1&&c.allowOutsideClick&&P('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const d in c)Rh(d),c.toast&&Lh(d),Ph(d)};function Xl(c){const d=O(),v=_.innerParams.get(this);if(!d||le(d,v.hideClass.popup)){P("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const R=Ih(c),te=Object.assign({},v,R);fr(this,te),_.innerParams.set(this,te),Object.defineProperties(this,{params:{value:Object.assign({},this.params,c),writable:!1,enumerable:!0}})}const Ih=c=>{const d={};return Object.keys(c).forEach(v=>{Vl(v)?d[v]=c[v]:P("Invalid parameter to update: ".concat(v))}),d};function ql(){const c=_.domCache.get(this),d=_.innerParams.get(this);if(!d){jl(this);return}c.popup&&f.swalCloseEventFinishedCallback&&(f.swalCloseEventFinishedCallback(),delete f.swalCloseEventFinishedCallback),typeof d.didDestroy=="function"&&d.didDestroy(),Uh(this)}const Uh=c=>{jl(c),delete c.params,delete f.keydownHandler,delete f.keydownTarget,delete f.currentInstance},jl=c=>{c.isAwaitingPromise?(Fo(_,c),c.isAwaitingPromise=!0):(Fo(Ps,c),Fo(_,c),delete c.isAwaitingPromise,delete c.disableButtons,delete c.enableButtons,delete c.getInput,delete c.disableInput,delete c.enableInput,delete c.hideLoading,delete c.disableLoading,delete c.showValidationMessage,delete c.resetValidationMessage,delete c.close,delete c.closePopup,delete c.closeModal,delete c.closeToast,delete c.rejectPromise,delete c.update,delete c._destroy)},Fo=(c,d)=>{for(const v in c)c[v].delete(d)};var Fh=Object.freeze({__proto__:null,_destroy:ql,close:Yn,closeModal:Yn,closePopup:Yn,closeToast:Yn,disableButtons:Ol,disableInput:Hl,disableLoading:mr,enableButtons:Nl,enableInput:Bl,getInput:Il,handleAwaitingPromise:Ds,hideLoading:mr,rejectPromise:Tl,resetValidationMessage:kl,showValidationMessage:zl,update:Xl});const Nh=(c,d,v)=>{_.innerParams.get(c).toast?Oh(c,d,v):(Hh(d),zh(d),kh(c,d,v))},Oh=(c,d,v)=>{d.popup.onclick=()=>{const R=_.innerParams.get(c);R&&(Bh(R)||R.timer||R.input)||v(Ii.close)}},Bh=c=>c.showConfirmButton||c.showDenyButton||c.showCancelButton||c.showCloseButton;let gr=!1;const Hh=c=>{c.popup.onmousedown=()=>{c.container.onmouseup=function(d){c.container.onmouseup=void 0,d.target===c.container&&(gr=!0)}}},zh=c=>{c.container.onmousedown=()=>{c.popup.onmouseup=function(d){c.popup.onmouseup=void 0,(d.target===c.popup||c.popup.contains(d.target))&&(gr=!0)}}},kh=(c,d,v)=>{d.container.onclick=R=>{const te=_.innerParams.get(c);if(gr){gr=!1;return}R.target===d.container&&L(te.allowOutsideClick)&&v(Ii.backdrop)}},Gh=c=>typeof c=="object"&&c.jquery,Yl=c=>c instanceof Element||Gh(c),Vh=c=>{const d={};return typeof c[0]=="object"&&!Yl(c[0])?Object.assign(d,c[0]):["title","html","icon"].forEach((v,R)=>{const te=c[R];typeof te=="string"||Yl(te)?d[v]=te:te!==void 0&&D("Unexpected type of ".concat(v,'! Expected "string" or "Element", got ').concat(typeof te))}),d};function Wh(){const c=this;for(var d=arguments.length,v=new Array(d),R=0;R<d;R++)v[R]=arguments[R];return new c(...v)}function Xh(c){class d extends this{_main(R,te){return super._main(R,Object.assign({},c,te))}}return d}const qh=()=>f.timeout&&f.timeout.getTimerLeft(),Kl=()=>{if(f.timeout)return F(),f.timeout.stop()},Ql=()=>{if(f.timeout){const c=f.timeout.start();return nt(c),c}},jh=()=>{const c=f.timeout;return c&&(c.running?Kl():Ql())},Yh=c=>{if(f.timeout){const d=f.timeout.increase(c);return nt(d,!0),d}},Kh=()=>!!(f.timeout&&f.timeout.isRunning());let Zl=!1;const No={};function Qh(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";No[c]=this,Zl||(document.body.addEventListener("click",Zh),Zl=!0)}const Zh=c=>{for(let d=c.target;d&&d!==document;d=d.parentNode)for(const v in No){const R=d.getAttribute(v);if(R){No[v].fire({template:R});return}}};var Jh=Object.freeze({__proto__:null,argsToParams:Vh,bindClickHandler:Qh,clickCancel:Gf,clickConfirm:bl,clickDeny:kf,enableLoading:Fi,fire:Wh,getActions:ot,getCancelButton:Le,getCloseButton:U,getConfirmButton:Ee,getContainer:j,getDenyButton:Ue,getFocusableElements:K,getFooter:ke,getHtmlContainer:W,getIcon:Q,getIconContent:ge,getImage:Y,getInputLabel:Ne,getLoader:Ge,getPopup:O,getProgressSteps:we,getTimerLeft:qh,getTimerProgressBar:x,getTitle:ue,getValidationMessage:Ae,increaseTimer:Yh,isDeprecatedParameter:Wl,isLoading:he,isTimerRunning:Kh,isUpdatableParameter:Vl,isValidParameter:Gl,isVisible:hr,mixin:Xh,resumeTimer:Ql,showLoading:Fi,stopTimer:Kl,toggleTimer:jh});class $h{constructor(d,v){this.callback=d,this.remaining=v,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(d){const v=this.running;return v&&this.stop(),this.remaining+=d,v&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Jl=["swal-title","swal-html","swal-footer"],ep=c=>{const d=typeof c.template=="string"?document.querySelector(c.template):c.template;if(!d)return{};const v=d.content;return lp(v),Object.assign(tp(v),np(v),ip(v),sp(v),rp(v),op(v),ap(v,Jl))},tp=c=>{const d={};return Array.from(c.querySelectorAll("swal-param")).forEach(R=>{di(R,["name","value"]);const te=R.getAttribute("name"),De=R.getAttribute("value");typeof Ni[te]=="boolean"?d[te]=De!=="false":typeof Ni[te]=="object"?d[te]=JSON.parse(De):d[te]=De}),d},np=c=>{const d={};return Array.from(c.querySelectorAll("swal-function-param")).forEach(R=>{const te=R.getAttribute("name"),De=R.getAttribute("value");d[te]=new Function("return ".concat(De))()}),d},ip=c=>{const d={};return Array.from(c.querySelectorAll("swal-button")).forEach(R=>{di(R,["type","color","aria-label"]);const te=R.getAttribute("type");d["".concat(te,"ButtonText")]=R.innerHTML,d["show".concat(E(te),"Button")]=!0,R.hasAttribute("color")&&(d["".concat(te,"ButtonColor")]=R.getAttribute("color")),R.hasAttribute("aria-label")&&(d["".concat(te,"ButtonAriaLabel")]=R.getAttribute("aria-label"))}),d},sp=c=>{const d={},v=c.querySelector("swal-image");return v&&(di(v,["src","width","height","alt"]),v.hasAttribute("src")&&(d.imageUrl=v.getAttribute("src")),v.hasAttribute("width")&&(d.imageWidth=v.getAttribute("width")),v.hasAttribute("height")&&(d.imageHeight=v.getAttribute("height")),v.hasAttribute("alt")&&(d.imageAlt=v.getAttribute("alt"))),d},rp=c=>{const d={},v=c.querySelector("swal-icon");return v&&(di(v,["type","color"]),v.hasAttribute("type")&&(d.icon=v.getAttribute("type")),v.hasAttribute("color")&&(d.iconColor=v.getAttribute("color")),d.iconHtml=v.innerHTML),d},op=c=>{const d={},v=c.querySelector("swal-input");v&&(di(v,["type","label","placeholder","value"]),d.input=v.getAttribute("type")||"text",v.hasAttribute("label")&&(d.inputLabel=v.getAttribute("label")),v.hasAttribute("placeholder")&&(d.inputPlaceholder=v.getAttribute("placeholder")),v.hasAttribute("value")&&(d.inputValue=v.getAttribute("value")));const R=Array.from(c.querySelectorAll("swal-input-option"));return R.length&&(d.inputOptions={},R.forEach(te=>{di(te,["value"]);const De=te.getAttribute("value"),Qe=te.innerHTML;d.inputOptions[De]=Qe})),d},ap=(c,d)=>{const v={};for(const R in d){const te=d[R],De=c.querySelector(te);De&&(di(De,[]),v[te.replace(/^swal-/,"")]=De.innerHTML.trim())}return v},lp=c=>{const d=Jl.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(c.children).forEach(v=>{const R=v.tagName.toLowerCase();d.includes(R)||P("Unrecognized element <".concat(R,">"))})},di=(c,d)=>{Array.from(c.attributes).forEach(v=>{d.indexOf(v.name)===-1&&P(['Unrecognized attribute "'.concat(v.name,'" on <').concat(c.tagName.toLowerCase(),">."),"".concat(d.length?"Allowed attributes are: ".concat(d.join(", ")):"To set the value, use HTML within the element.")])})},$l=10,cp=c=>{const d=j(),v=O();typeof c.willOpen=="function"&&c.willOpen(v);const te=window.getComputedStyle(document.body).overflowY;fp(d,v,c),setTimeout(()=>{up(d,v)},$l),X()&&(dp(d,c.scrollbarPadding,te),Qf()),!de()&&!f.previousActiveElement&&(f.previousActiveElement=document.activeElement),typeof c.didOpen=="function"&&setTimeout(()=>c.didOpen(v)),ne(d,h["no-transition"])},ec=c=>{const d=O();if(c.target!==d||!wn)return;const v=j();d.removeEventListener(wn,ec),v.style.overflowY="auto"},up=(c,d)=>{wn&&We(d)?(c.style.overflowY="hidden",d.addEventListener(wn,ec)):c.style.overflowY="auto"},dp=(c,d,v)=>{Zf(),d&&v!=="hidden"&&sh(v),setTimeout(()=>{c.scrollTop=0})},fp=(c,d,v)=>{z(c,v.showClass.backdrop),d.style.setProperty("opacity","0","important"),fe(d,"grid"),setTimeout(()=>{z(d,v.showClass.popup),d.style.removeProperty("opacity")},$l),z([document.documentElement,document.body],h.shown),v.heightAuto&&v.backdrop&&!v.toast&&z([document.documentElement,document.body],h["height-auto"])};var tc={email:(c,d)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(c)?Promise.resolve():Promise.resolve(d||"Invalid email address"),url:(c,d)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c)?Promise.resolve():Promise.resolve(d||"Invalid URL")};function hp(c){c.inputValidator||(c.input==="email"&&(c.inputValidator=tc.email),c.input==="url"&&(c.inputValidator=tc.url))}function pp(c){(!c.target||typeof c.target=="string"&&!document.querySelector(c.target)||typeof c.target!="string"&&!c.target.appendChild)&&(P('Target parameter is not valid, defaulting to "body"'),c.target="body")}function mp(c){hp(c),c.showLoaderOnConfirm&&!c.preConfirm&&P(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),pp(c),typeof c.title=="string"&&(c.title=c.title.split(`
`).join("<br />")),it(c)}let bn;var _r=new WeakMap;class mt{constructor(){if(l(this,_r,{writable:!0,value:void 0}),typeof window>"u")return;bn=this;for(var d=arguments.length,v=new Array(d),R=0;R<d;R++)v[R]=arguments[R];const te=Object.freeze(this.constructor.argsToParams(v));this.params=te,this.isAwaitingPromise=!1,i(this,_r,this._main(bn.params))}_main(d){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Dh(Object.assign({},v,d)),f.currentInstance&&(f.currentInstance._destroy(),X()&&Sl()),f.currentInstance=bn;const R=_p(d,v);mp(R),Object.freeze(R),f.timeout&&(f.timeout.stop(),delete f.timeout),clearTimeout(f.restoreFocusTimeout);const te=vp(bn);return fr(bn,R),_.innerParams.set(bn,R),gp(bn,te,R)}then(d){return t(this,_r).then(d)}finally(d){return t(this,_r).finally(d)}}const gp=(c,d,v)=>new Promise((R,te)=>{const De=Qe=>{c.close({isDismissed:!0,dismiss:Qe})};Ps.swalPromiseResolve.set(c,R),Ps.swalPromiseReject.set(c,te),d.confirmButton.onclick=()=>{bh(c)},d.denyButton.onclick=()=>{Mh(c)},d.cancelButton.onclick=()=>{yh(c,De)},d.closeButton.onclick=()=>{De(Ii.close)},Nh(c,d,De),Vf(c,f,v,De),fh(c,v),cp(v),xp(f,v,De),wp(d,v),setTimeout(()=>{d.container.scrollTop=0})}),_p=(c,d)=>{const v=ep(c),R=Object.assign({},Ni,d,v,c);return R.showClass=Object.assign({},Ni.showClass,R.showClass),R.hideClass=Object.assign({},Ni.hideClass,R.hideClass),R},vp=c=>{const d={popup:O(),container:j(),actions:ot(),confirmButton:Ee(),denyButton:Ue(),cancelButton:Le(),loader:Ge(),closeButton:U(),validationMessage:Ae(),progressSteps:we()};return _.domCache.set(c,d),d},xp=(c,d,v)=>{const R=x();H(R),d.timer&&(c.timeout=new $h(()=>{v("timer"),delete c.timeout},d.timer),d.timerProgressBar&&(fe(R),_e(R,d,"timerProgressBar"),setTimeout(()=>{c.timeout&&c.timeout.running&&nt(d.timer)})))},wp=(c,d)=>{if(!d.toast){if(!L(d.allowEnterKey)){Mp();return}bp(c,d)||Do(-1,1)}},bp=(c,d)=>d.focusDeny&&Ce(c.denyButton)?(c.denyButton.focus(),!0):d.focusCancel&&Ce(c.cancelButton)?(c.cancelButton.focus(),!0):d.focusConfirm&&Ce(c.confirmButton)?(c.confirmButton.focus(),!0):!1,Mp=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const c=new Date,d=localStorage.getItem("swal-initiation");d?(c.getTime()-Date.parse(d))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const v=document.createElement("audio");v.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",v.loop=!0,document.body.appendChild(v),setTimeout(()=>{v.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation","".concat(c))}mt.prototype.disableButtons=Ol,mt.prototype.enableButtons=Nl,mt.prototype.getInput=Il,mt.prototype.disableInput=Hl,mt.prototype.enableInput=Bl,mt.prototype.hideLoading=mr,mt.prototype.disableLoading=mr,mt.prototype.showValidationMessage=zl,mt.prototype.resetValidationMessage=kl,mt.prototype.close=Yn,mt.prototype.closePopup=Yn,mt.prototype.closeModal=Yn,mt.prototype.closeToast=Yn,mt.prototype.rejectPromise=Tl,mt.prototype.update=Xl,mt.prototype._destroy=ql,Object.assign(mt,Jh),Object.keys(Fh).forEach(c=>{mt[c]=function(){return bn&&bn[c]?bn[c](...arguments):null}}),mt.DismissReason=Ii,mt.version="11.7.27";const vr=mt;return vr.default=vr,vr}),typeof Qn<"u"&&Qn.Sweetalert2&&(Qn.swal=Qn.sweetAlert=Qn.Swal=Qn.SweetAlert=Qn.Sweetalert2),typeof document<"u"&&function(t,i){var s=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(s),s.styleSheet)s.styleSheet.disabled||(s.styleSheet.cssText=i);else try{s.innerHTML=i}catch{s.innerText=i}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(d_);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hl="156",f_=0,Ic=1,h_=2,lf=1,p_=2,zn=3,Xn=0,jt=1,Gn=2,oi=0,ls=1,Uc=2,Fc=3,Nc=4,m_=5,ts=100,g_=101,__=102,Oc=103,Bc=104,v_=200,x_=201,w_=202,b_=203,cf=204,uf=205,M_=206,y_=207,S_=208,E_=209,A_=210,T_=0,C_=1,R_=2,Oa=3,L_=4,P_=5,D_=6,I_=7,pl=0,U_=1,F_=2,ai=0,N_=1,O_=2,B_=3,H_=4,z_=5,df=300,ps=301,ms=302,lo=303,Ba=304,yo=306,co=1e3,hn=1001,Ha=1002,zt=1003,Hc=1004,Xo=1005,tn=1006,k_=1007,er=1008,li=1009,G_=1010,V_=1011,ml=1012,ff=1013,ni=1014,ii=1015,tr=1016,hf=1017,pf=1018,Ei=1020,W_=1021,pn=1023,X_=1024,q_=1025,Ai=1026,gs=1027,j_=1028,mf=1029,Y_=1030,gf=1031,_f=1033,qo=33776,jo=33777,Yo=33778,Ko=33779,zc=35840,kc=35841,Gc=35842,Vc=35843,K_=36196,Wc=37492,Xc=37496,qc=37808,jc=37809,Yc=37810,Kc=37811,Qc=37812,Zc=37813,Jc=37814,$c=37815,eu=37816,tu=37817,nu=37818,iu=37819,su=37820,ru=37821,Qo=36492,ou=36494,au=36495,Q_=36283,lu=36284,cu=36285,uu=36286,vf=3e3,Ti=3001,Z_=3200,J_=3201,gl=0,$_=1,Ci="",rt="srgb",Rn="srgb-linear",So="display-p3",Zo=7680,ev=519,tv=512,nv=513,iv=514,sv=515,rv=516,ov=517,av=518,lv=519,du=35044,fu="300 es",za=1035,Vn=2e3,uo=2001;class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jo=Math.PI/180,ka=180/Math.PI;function sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function qt(n,e,t){return Math.max(e,Math.min(t,n))}function cv(n,e){return(n%e+e)%e}function $o(n,e,t){return(1-t)*n+t*e}function hu(n){return(n&n-1)===0&&n!==0}function Ga(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Us(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,s,r,a,o,l,u){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,u)}set(e,t,i,s,r,a,o,l,u){const f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=l,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],f=i[4],p=i[7],m=i[2],_=i[5],M=i[8],b=s[0],h=s[3],g=s[6],T=s[1],y=s[4],E=s[7],P=s[2],D=s[5],I=s[8];return r[0]=a*b+o*T+l*P,r[3]=a*h+o*y+l*D,r[6]=a*g+o*E+l*I,r[1]=u*b+f*T+p*P,r[4]=u*h+f*y+p*D,r[7]=u*g+f*E+p*I,r[2]=m*b+_*T+M*P,r[5]=m*h+_*y+M*D,r[8]=m*g+_*E+M*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return t*a*f-t*o*u-i*r*f+i*o*l+s*r*u-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=f*a-o*u,m=o*l-f*r,_=u*r-a*l,M=t*p+i*m+s*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=p*b,e[1]=(s*u-f*i)*b,e[2]=(o*i-s*a)*b,e[3]=m*b,e[4]=(f*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=_*b,e[7]=(i*l-u*t)*b,e[8]=(a*t-i*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-s*u,s*l,-s*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ea.makeScale(e,t)),this}rotate(e){return this.premultiply(ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new Ye;function xf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uv(){const n=nr("canvas");return n.style.display="block",n}const pu={};function js(n){n in pu||(pu[n]=!0,console.warn(n))}function cs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ta(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const dv=new Ye().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),fv=new Ye().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function hv(n){return n.convertSRGBToLinear().applyMatrix3(fv)}function pv(n){return n.applyMatrix3(dv).convertLinearToSRGB()}const mv={[Rn]:n=>n,[rt]:n=>n.convertSRGBToLinear(),[So]:hv},gv={[Rn]:n=>n,[rt]:n=>n.convertLinearToSRGB(),[So]:pv},rn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Rn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=mv[e],s=gv[t];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Hi;class wf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hi===void 0&&(Hi=nr("canvas")),Hi.width=e.width,Hi.height=e.height;const i=Hi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=cs(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cs(t[i]/255)*255):t[i]=cs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _v=0;class bf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=sr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(na(s[a].image)):r.push(na(s[a]))}else r=na(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vv=0;class Yt extends ys{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=hn,s=hn,r=tn,a=er,o=pn,l=li,u=Yt.DEFAULT_ANISOTROPY,f=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=sr(),this.name="",this.source=new bf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Ti?rt:Ci),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==df)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case co:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case co:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===rt?Ti:vf}set encoding(e){js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ti?rt:Ci}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=df;Yt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,s=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,u=l[0],f=l[4],p=l[8],m=l[1],_=l[5],M=l[9],b=l[2],h=l[6],g=l[10];if(Math.abs(f-m)<.01&&Math.abs(p-b)<.01&&Math.abs(M-h)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+b)<.1&&Math.abs(M+h)<.1&&Math.abs(u+_+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,E=(_+1)/2,P=(g+1)/2,D=(f+m)/4,I=(p+b)/4,J=(M+h)/4;return y>E&&y>P?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=D/i,r=I/i):E>P?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=D/s,r=J/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=I/r,s=J/r),this.set(i,s,r,t),this}let T=Math.sqrt((h-M)*(h-M)+(p-b)*(p-b)+(m-f)*(m-f));return Math.abs(T)<.001&&(T=1),this.x=(h-M)/T,this.y=(p-b)/T,this.z=(m-f)/T,this.w=Math.acos((u+_+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xv extends ys{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(js("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ti?rt:Ci),this.texture=new Yt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:tn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends xv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Mf extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wv extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],u=i[s+1],f=i[s+2],p=i[s+3];const m=r[a+0],_=r[a+1],M=r[a+2],b=r[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=f,e[t+3]=p;return}if(o===1){e[t+0]=m,e[t+1]=_,e[t+2]=M,e[t+3]=b;return}if(p!==b||l!==m||u!==_||f!==M){let h=1-o;const g=l*m+u*_+f*M+p*b,T=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const P=Math.sqrt(y),D=Math.atan2(P,g*T);h=Math.sin(h*D)/P,o=Math.sin(o*D)/P}const E=o*T;if(l=l*h+m*E,u=u*h+_*E,f=f*h+M*E,p=p*h+b*E,h===1-o){const P=1/Math.sqrt(l*l+u*u+f*f+p*p);l*=P,u*=P,f*=P,p*=P}}e[t]=l,e[t+1]=u,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],u=i[s+2],f=i[s+3],p=r[a],m=r[a+1],_=r[a+2],M=r[a+3];return e[t]=o*M+f*p+l*_-u*m,e[t+1]=l*M+f*m+u*p-o*_,e[t+2]=u*M+f*_+o*m-l*p,e[t+3]=f*M-o*p-l*m-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(s/2),p=o(r/2),m=l(i/2),_=l(s/2),M=l(r/2);switch(a){case"XYZ":this._x=m*f*p+u*_*M,this._y=u*_*p-m*f*M,this._z=u*f*M+m*_*p,this._w=u*f*p-m*_*M;break;case"YXZ":this._x=m*f*p+u*_*M,this._y=u*_*p-m*f*M,this._z=u*f*M-m*_*p,this._w=u*f*p+m*_*M;break;case"ZXY":this._x=m*f*p-u*_*M,this._y=u*_*p+m*f*M,this._z=u*f*M+m*_*p,this._w=u*f*p-m*_*M;break;case"ZYX":this._x=m*f*p-u*_*M,this._y=u*_*p+m*f*M,this._z=u*f*M-m*_*p,this._w=u*f*p+m*_*M;break;case"YZX":this._x=m*f*p+u*_*M,this._y=u*_*p+m*f*M,this._z=u*f*M-m*_*p,this._w=u*f*p-m*_*M;break;case"XZY":this._x=m*f*p-u*_*M,this._y=u*_*p-m*f*M,this._z=u*f*M+m*_*p,this._w=u*f*p+m*_*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],u=t[2],f=t[6],p=t[10],m=i+o+p;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(f-l)*_,this._y=(r-u)*_,this._z=(a-s)*_}else if(i>o&&i>p){const _=2*Math.sqrt(1+i-o-p);this._w=(f-l)/_,this._x=.25*_,this._y=(s+a)/_,this._z=(r+u)/_}else if(o>p){const _=2*Math.sqrt(1+o-i-p);this._w=(r-u)/_,this._x=(s+a)/_,this._y=.25*_,this._z=(l+f)/_}else{const _=2*Math.sqrt(1+p-i-o);this._w=(a-s)/_,this._x=(r+u)/_,this._y=(l+f)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,u=t._z,f=t._w;return this._x=i*f+a*o+s*u-r*l,this._y=s*f+a*l+r*o-i*u,this._z=r*f+a*u+i*l-s*o,this._w=a*f-i*o-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*i+t*this._x,this._y=_*s+t*this._y,this._z=_*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,o),p=Math.sin((1-t)*f)/u,m=Math.sin(t*f)/u;return this._w=a*p+this._w*m,this._x=i*p+this._x*m,this._y=s*p+this._y*m,this._z=r*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,u=l*t+a*s-o*i,f=l*i+o*t-r*s,p=l*s+r*i-a*t,m=-r*t-a*i-o*s;return this.x=u*l+m*-r+f*-o-p*-a,this.y=f*l+m*-a+p*-r-u*-o,this.z=p*l+m*-o+u*-a-f*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ia.copy(this).projectOnVector(e),this.sub(ia)}reflect(e){return this.sub(ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ia=new k,mu=new rr;class or{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),zi.copy(e.boundingBox),zi.applyMatrix4(e.matrixWorld),this.union(zi);else{const s=e.geometry;if(s!==void 0)if(t&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let a=0,o=r.count;a<o;a++)Un.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Un)}else s.boundingBox===null&&s.computeBoundingBox(),zi.copy(s.boundingBox),zi.applyMatrix4(e.matrixWorld),this.union(zi)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Ar.subVectors(this.max,Fs),ki.subVectors(e.a,Fs),Gi.subVectors(e.b,Fs),Vi.subVectors(e.c,Fs),Zn.subVectors(Gi,ki),Jn.subVectors(Vi,Gi),pi.subVectors(ki,Vi);let t=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-pi.z,pi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,pi.z,0,-pi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-pi.y,pi.x,0];return!sa(t,ki,Gi,Vi,Ar)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,ki,Gi,Vi,Ar))?!1:(Tr.crossVectors(Zn,Jn),t=[Tr.x,Tr.y,Tr.z],sa(t,ki,Gi,Vi,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new k,new k,new k,new k,new k,new k,new k,new k],Un=new k,zi=new or,ki=new k,Gi=new k,Vi=new k,Zn=new k,Jn=new k,pi=new k,Fs=new k,Ar=new k,Tr=new k,mi=new k;function sa(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){mi.fromArray(n,r);const o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=e.dot(mi),u=t.dot(mi),f=i.dot(mi);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const bv=new or,Ns=new k,ra=new k;class ar{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ns,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(ra)),this.expandByPoint(Ns.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new k,oa=new k,Cr=new k,$n=new k,aa=new k,Rr=new k,la=new k;class _l{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){oa.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(oa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Cr),o=$n.dot(this.direction),l=-$n.dot(Cr),u=$n.lengthSq(),f=Math.abs(1-a*a);let p,m,_,M;if(f>0)if(p=a*l-o,m=a*o-l,M=r*f,p>=0)if(m>=-M)if(m<=M){const b=1/f;p*=b,m*=b,_=p*(p+a*m+2*o)+m*(a*p+m+2*l)+u}else m=r,p=Math.max(0,-(a*m+o)),_=-p*p+m*(m+2*l)+u;else m=-r,p=Math.max(0,-(a*m+o)),_=-p*p+m*(m+2*l)+u;else m<=-M?(p=Math.max(0,-(-a*r+o)),m=p>0?-r:Math.min(Math.max(-r,-l),r),_=-p*p+m*(m+2*l)+u):m<=M?(p=0,m=Math.min(Math.max(-r,-l),r),_=m*(m+2*l)+u):(p=Math.max(0,-(a*r+o)),m=p>0?r:Math.min(Math.max(-r,-l),r),_=-p*p+m*(m+2*l)+u);else m=a>0?-r:r,p=Math.max(0,-(a*m+o)),_=-p*p+m*(m+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(oa).addScaledVector(Cr,m),_}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const i=Fn.dot(this.direction),s=Fn.dot(Fn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(i=(e.min.x-m.x)*u,s=(e.max.x-m.x)*u):(i=(e.max.x-m.x)*u,s=(e.min.x-m.x)*u),f>=0?(r=(e.min.y-m.y)*f,a=(e.max.y-m.y)*f):(r=(e.max.y-m.y)*f,a=(e.min.y-m.y)*f),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-m.z)*p,l=(e.max.z-m.z)*p):(o=(e.max.z-m.z)*p,l=(e.min.z-m.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,i,s,r){aa.subVectors(t,e),Rr.subVectors(i,e),la.crossVectors(aa,Rr);let a=this.direction.dot(la),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,e);const l=o*this.direction.dot(Rr.crossVectors($n,Rr));if(l<0)return null;const u=o*this.direction.dot(aa.cross($n));if(u<0||l+u>a)return null;const f=-o*$n.dot(la);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,i,s,r,a,o,l,u,f,p,m,_,M,b,h){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,u,f,p,m,_,M,b,h)}set(e,t,i,s,r,a,o,l,u,f,p,m,_,M,b,h){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=u,g[6]=f,g[10]=p,g[14]=m,g[3]=_,g[7]=M,g[11]=b,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),a=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),u=Math.sin(s),f=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const m=a*f,_=a*p,M=o*f,b=o*p;t[0]=l*f,t[4]=-l*p,t[8]=u,t[1]=_+M*u,t[5]=m-b*u,t[9]=-o*l,t[2]=b-m*u,t[6]=M+_*u,t[10]=a*l}else if(e.order==="YXZ"){const m=l*f,_=l*p,M=u*f,b=u*p;t[0]=m+b*o,t[4]=M*o-_,t[8]=a*u,t[1]=a*p,t[5]=a*f,t[9]=-o,t[2]=_*o-M,t[6]=b+m*o,t[10]=a*l}else if(e.order==="ZXY"){const m=l*f,_=l*p,M=u*f,b=u*p;t[0]=m-b*o,t[4]=-a*p,t[8]=M+_*o,t[1]=_+M*o,t[5]=a*f,t[9]=b-m*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const m=a*f,_=a*p,M=o*f,b=o*p;t[0]=l*f,t[4]=M*u-_,t[8]=m*u+b,t[1]=l*p,t[5]=b*u+m,t[9]=_*u-M,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const m=a*l,_=a*u,M=o*l,b=o*u;t[0]=l*f,t[4]=b-m*p,t[8]=M*p+_,t[1]=p,t[5]=a*f,t[9]=-o*f,t[2]=-u*f,t[6]=_*p+M,t[10]=m-b*p}else if(e.order==="XZY"){const m=a*l,_=a*u,M=o*l,b=o*u;t[0]=l*f,t[4]=-p,t[8]=u*f,t[1]=m*p+b,t[5]=a*f,t[9]=_*p-M,t[2]=M*p-_,t[6]=o*f,t[10]=b*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mv,e,yv)}lookAt(e,t,i){const s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ei.crossVectors(i,Qt),ei.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ei.crossVectors(i,Qt)),ei.normalize(),Lr.crossVectors(Qt,ei),s[0]=ei.x,s[4]=Lr.x,s[8]=Qt.x,s[1]=ei.y,s[5]=Lr.y,s[9]=Qt.y,s[2]=ei.z,s[6]=Lr.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],f=i[1],p=i[5],m=i[9],_=i[13],M=i[2],b=i[6],h=i[10],g=i[14],T=i[3],y=i[7],E=i[11],P=i[15],D=s[0],I=s[4],J=s[8],A=s[12],L=s[1],pe=s[5],me=s[9],V=s[13],j=s[2],ee=s[6],ie=s[10],O=s[14],Q=s[3],ge=s[7],ue=s[11],W=s[15];return r[0]=a*D+o*L+l*j+u*Q,r[4]=a*I+o*pe+l*ee+u*ge,r[8]=a*J+o*me+l*ie+u*ue,r[12]=a*A+o*V+l*O+u*W,r[1]=f*D+p*L+m*j+_*Q,r[5]=f*I+p*pe+m*ee+_*ge,r[9]=f*J+p*me+m*ie+_*ue,r[13]=f*A+p*V+m*O+_*W,r[2]=M*D+b*L+h*j+g*Q,r[6]=M*I+b*pe+h*ee+g*ge,r[10]=M*J+b*me+h*ie+g*ue,r[14]=M*A+b*V+h*O+g*W,r[3]=T*D+y*L+E*j+P*Q,r[7]=T*I+y*pe+E*ee+P*ge,r[11]=T*J+y*me+E*ie+P*ue,r[15]=T*A+y*V+E*O+P*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],u=e[13],f=e[2],p=e[6],m=e[10],_=e[14],M=e[3],b=e[7],h=e[11],g=e[15];return M*(+r*l*p-s*u*p-r*o*m+i*u*m+s*o*_-i*l*_)+b*(+t*l*_-t*u*m+r*a*m-s*a*_+s*u*f-r*l*f)+h*(+t*u*p-t*o*_-r*a*p+i*a*_+r*o*f-i*u*f)+g*(-s*o*f-t*l*p+t*o*m+s*a*p-i*a*m+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=e[9],m=e[10],_=e[11],M=e[12],b=e[13],h=e[14],g=e[15],T=p*h*u-b*m*u+b*l*_-o*h*_-p*l*g+o*m*g,y=M*m*u-f*h*u-M*l*_+a*h*_+f*l*g-a*m*g,E=f*b*u-M*p*u+M*o*_-a*b*_-f*o*g+a*p*g,P=M*p*l-f*b*l-M*o*m+a*b*m+f*o*h-a*p*h,D=t*T+i*y+s*E+r*P;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=T*I,e[1]=(b*m*r-p*h*r-b*s*_+i*h*_+p*s*g-i*m*g)*I,e[2]=(o*h*r-b*l*r+b*s*u-i*h*u-o*s*g+i*l*g)*I,e[3]=(p*l*r-o*m*r-p*s*u+i*m*u+o*s*_-i*l*_)*I,e[4]=y*I,e[5]=(f*h*r-M*m*r+M*s*_-t*h*_-f*s*g+t*m*g)*I,e[6]=(M*l*r-a*h*r-M*s*u+t*h*u+a*s*g-t*l*g)*I,e[7]=(a*m*r-f*l*r+f*s*u-t*m*u-a*s*_+t*l*_)*I,e[8]=E*I,e[9]=(M*p*r-f*b*r-M*i*_+t*b*_+f*i*g-t*p*g)*I,e[10]=(a*b*r-M*o*r+M*i*u-t*b*u-a*i*g+t*o*g)*I,e[11]=(f*o*r-a*p*r-f*i*u+t*p*u+a*i*_-t*o*_)*I,e[12]=P*I,e[13]=(f*b*s-M*p*s+M*i*m-t*b*m-f*i*h+t*p*h)*I,e[14]=(M*o*s-a*b*s-M*i*l+t*b*l+a*i*h-t*o*h)*I,e[15]=(a*p*s-f*o*s+f*i*l-t*p*l-a*i*m+t*o*m)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,u=r*a,f=r*o;return this.set(u*a+i,u*o-s*l,u*l+s*o,0,u*o+s*l,f*o+i,f*l-s*a,0,u*l-s*o,f*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,u=r+r,f=a+a,p=o+o,m=r*u,_=r*f,M=r*p,b=a*f,h=a*p,g=o*p,T=l*u,y=l*f,E=l*p,P=i.x,D=i.y,I=i.z;return s[0]=(1-(b+g))*P,s[1]=(_+E)*P,s[2]=(M-y)*P,s[3]=0,s[4]=(_-E)*D,s[5]=(1-(m+g))*D,s[6]=(h+T)*D,s[7]=0,s[8]=(M+y)*I,s[9]=(h-T)*I,s[10]=(1-(m+b))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Wi.set(s[0],s[1],s[2]).length();const a=Wi.set(s[4],s[5],s[6]).length(),o=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],on.copy(this);const u=1/r,f=1/a,p=1/o;return on.elements[0]*=u,on.elements[1]*=u,on.elements[2]*=u,on.elements[4]*=f,on.elements[5]*=f,on.elements[6]*=f,on.elements[8]*=p,on.elements[9]*=p,on.elements[10]*=p,t.setFromRotationMatrix(on),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Vn){const l=this.elements,u=2*r/(t-e),f=2*r/(i-s),p=(t+e)/(t-e),m=(i+s)/(i-s);let _,M;if(o===Vn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===uo)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Vn){const l=this.elements,u=1/(t-e),f=1/(i-s),p=1/(a-r),m=(t+e)*u,_=(i+s)*f;let M,b;if(o===Vn)M=(a+r)*p,b=-2*p;else if(o===uo)M=r*p,b=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=b,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wi=new k,on=new vt,Mv=new k(0,0,0),yv=new k(1,1,1),ei=new k,Lr=new k,Qt=new k,gu=new vt,_u=new rr;class Eo{constructor(e=0,t=0,i=0,s=Eo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],f=s[9],p=s[2],m=s[6],_=s[10];switch(t){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,_),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _u.setFromEuler(this),this.setFromQuaternion(_u,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Eo.DEFAULT_ORDER="XYZ";class yf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sv=0;const vu=new k,Xi=new rr,Nn=new vt,Pr=new k,Os=new k,Ev=new k,Av=new rr,xu=new k(1,0,0),wu=new k(0,1,0),bu=new k(0,0,1),Tv={type:"added"},Cv={type:"removed"};class Ct extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new k,t=new Eo,i=new rr,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ye}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new yf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(wu,e)}rotateZ(e){return this.rotateOnAxis(bu,e)}translateOnAxis(e,t){return vu.copy(e).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(wu,e)}translateZ(e){return this.translateOnAxis(bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pr.copy(e):Pr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Os,Pr,this.up):Nn.lookAt(Pr,Os,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,Ev),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Av,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const p=l[u];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),f=a(e.images),p=a(e.shapes),m=a(e.skeletons),_=a(e.animations),M=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),_.length>0&&(i.animations=_),M.length>0&&(i.nodes=M)}return i.object=s,i;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ct.DEFAULT_UP=new k(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new k,On=new k,ca=new k,Bn=new k,qi=new k,ji=new k,Mu=new k,ua=new k,da=new k,fa=new k;let Dr=!1;class dn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),an.subVectors(e,t),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){an.subVectors(s,t),On.subVectors(i,t),ca.subVectors(e,t);const a=an.dot(an),o=an.dot(On),l=an.dot(ca),u=On.dot(On),f=On.dot(ca),p=a*u-o*o;if(p===0)return r.set(-2,-1,-1);const m=1/p,_=(u*l-o*f)*m,M=(a*f-o*l)*m;return r.set(1-_-M,M,_)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,i,s,r,a,o,l){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Bn),l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l}static isFrontFacing(e,t,i,s){return an.subVectors(i,t),On.subVectors(e,t),an.cross(On).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),On.subVectors(this.a,this.b),an.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;qi.subVectors(s,i),ji.subVectors(r,i),ua.subVectors(e,i);const l=qi.dot(ua),u=ji.dot(ua);if(l<=0&&u<=0)return t.copy(i);da.subVectors(e,s);const f=qi.dot(da),p=ji.dot(da);if(f>=0&&p<=f)return t.copy(s);const m=l*p-f*u;if(m<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(i).addScaledVector(qi,a);fa.subVectors(e,r);const _=qi.dot(fa),M=ji.dot(fa);if(M>=0&&_<=M)return t.copy(r);const b=_*u-l*M;if(b<=0&&u>=0&&M<=0)return o=u/(u-M),t.copy(i).addScaledVector(ji,o);const h=f*M-_*p;if(h<=0&&p-f>=0&&_-M>=0)return Mu.subVectors(r,s),o=(p-f)/(p-f+(_-M)),t.copy(s).addScaledVector(Mu,o);const g=1/(h+b+m);return a=b*g,o=m*g,t.copy(i).addScaledVector(qi,a).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Rv=0;class Ln extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=ls,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cf,this.blendDst=uf,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ev,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==Xn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ln={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function ha(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=rn.workingColorSpace){return this.r=e,this.g=t,this.b=i,rn.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=rn.workingColorSpace){if(e=cv(e,1),t=qt(t,0,1),i=qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ha(a,r,e+1/3),this.g=ha(a,r,e),this.b=ha(a,r,e-1/3)}return rn.toWorkingColorSpace(this,s),this}setStyle(e,t=rt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rt){const i=Sf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rt){return rn.fromWorkingColorSpace(It.copy(this),e),Math.round(qt(It.r*255,0,255))*65536+Math.round(qt(It.g*255,0,255))*256+Math.round(qt(It.b*255,0,255))}getHexString(e=rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rn.workingColorSpace){rn.fromWorkingColorSpace(It.copy(this),t);const i=It.r,s=It.g,r=It.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const p=a-o;switch(u=f<=.5?p/(a+o):p/(2-a-o),a){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,t=rn.workingColorSpace){return rn.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=rt){rn.fromWorkingColorSpace(It.copy(this),e);const t=It.r,i=It.g,s=It.b;return e!==rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ln),ln.h+=e,ln.s+=t,ln.l+=i,this.setHSL(ln.h,ln.s,ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ln),e.getHSL(Ir);const i=$o(ln.h,Ir.h,t),s=$o(ln.s,Ir.s,t),r=$o(ln.l,Ir.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ze;Ze.NAMES=Sf;class vl extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new k,Ur=new et;class Cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=du,this.updateRange={offset:0,count:-1},this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Us(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Us(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Us(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Us(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),s=Wt(s,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==du&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ef extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Af extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class kt extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Lv=0;const $t=new vt,pa=new Ct,Yi=new k,Zt=new or,Bs=new or,At=new k;class vn extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xf(e)?Af:Ef)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,i){return $t.makeTranslation(e,t,i),this.applyMatrix4($t),this}scale(e,t,i){return $t.makeScale(e,t,i),this.applyMatrix4($t),this}lookAt(e){return pa.lookAt(e),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Zt.min,Bs.min),Zt.expandByPoint(At),At.addVectors(Zt.max,Bs.max),Zt.expandByPoint(At)):(Zt.expandByPoint(Bs.min),Zt.expandByPoint(Bs.max))}Zt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)At.fromBufferAttribute(o,u),l&&(Yi.fromBufferAttribute(e,u),At.add(Yi)),s=Math.max(s,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let L=0;L<o;L++)u[L]=new k,f[L]=new k;const p=new k,m=new k,_=new k,M=new et,b=new et,h=new et,g=new k,T=new k;function y(L,pe,me){p.fromArray(s,L*3),m.fromArray(s,pe*3),_.fromArray(s,me*3),M.fromArray(a,L*2),b.fromArray(a,pe*2),h.fromArray(a,me*2),m.sub(p),_.sub(p),b.sub(M),h.sub(M);const V=1/(b.x*h.y-h.x*b.y);isFinite(V)&&(g.copy(m).multiplyScalar(h.y).addScaledVector(_,-b.y).multiplyScalar(V),T.copy(_).multiplyScalar(b.x).addScaledVector(m,-h.x).multiplyScalar(V),u[L].add(g),u[pe].add(g),u[me].add(g),f[L].add(T),f[pe].add(T),f[me].add(T))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let L=0,pe=E.length;L<pe;++L){const me=E[L],V=me.start,j=me.count;for(let ee=V,ie=V+j;ee<ie;ee+=3)y(i[ee+0],i[ee+1],i[ee+2])}const P=new k,D=new k,I=new k,J=new k;function A(L){I.fromArray(r,L*3),J.copy(I);const pe=u[L];P.copy(pe),P.sub(I.multiplyScalar(I.dot(pe))).normalize(),D.crossVectors(J,pe);const V=D.dot(f[L])<0?-1:1;l[L*4]=P.x,l[L*4+1]=P.y,l[L*4+2]=P.z,l[L*4+3]=V}for(let L=0,pe=E.length;L<pe;++L){const me=E[L],V=me.start,j=me.count;for(let ee=V,ie=V+j;ee<ie;ee+=3)A(i[ee+0]),A(i[ee+1]),A(i[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,_=i.count;m<_;m++)i.setXYZ(m,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,u=new k,f=new k,p=new k;if(e)for(let m=0,_=e.count;m<_;m+=3){const M=e.getX(m+0),b=e.getX(m+1),h=e.getX(m+2);s.fromBufferAttribute(t,M),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,h),f.subVectors(a,r),p.subVectors(s,r),f.cross(p),o.fromBufferAttribute(i,M),l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,h),o.add(f),l.add(f),u.add(f),i.setXYZ(M,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let m=0,_=t.count;m<_;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),f.subVectors(a,r),p.subVectors(s,r),f.cross(p),i.setXYZ(m+0,f.x,f.y,f.z),i.setXYZ(m+1,f.x,f.y,f.z),i.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const u=o.array,f=o.itemSize,p=o.normalized,m=new u.constructor(l.length*f);let _=0,M=0;for(let b=0,h=l.length;b<h;b++){o.isInterleavedBufferAttribute?_=l[b]*o.data.stride+o.offset:_=l[b]*f;for(let g=0;g<f;g++)m[M++]=u[_++]}return new Cn(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],u=e(l,i);t.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let f=0,p=u.length;f<p;f++){const m=u[f],_=e(m,i);l.push(_)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let p=0,m=u.length;p<m;p++){const _=u[p];f.push(_.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const u in s){const f=s[u];this.setAttribute(u,f.clone(t))}const r=e.morphAttributes;for(const u in r){const f=[],p=r[u];for(let m=0,_=p.length;m<_;m++)f.push(p[m].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new vt,gi=new _l,Fr=new ar,Su=new k,Ki=new k,Qi=new k,Zi=new k,ma=new k,Nr=new k,Or=new et,Br=new et,Hr=new et,Eu=new k,Au=new k,Tu=new k,zr=new k,kr=new k;class sn extends Ct{constructor(e=new vn,t=new vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Nr.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const f=o[l],p=r[l];f!==0&&(ma.fromBufferAttribute(p,e),a?Nr.addScaledVector(ma,f):Nr.addScaledVector(ma.sub(t),f))}t.add(Nr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(Fr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Fr,Su)===null||gi.origin.distanceToSquared(Su)>(e.far-e.near)**2))&&(yu.copy(r).invert(),gi.copy(e.ray).applyMatrix4(yu),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,p=r.attributes.normal,m=r.groups,_=r.drawRange;if(o!==null)if(Array.isArray(a))for(let M=0,b=m.length;M<b;M++){const h=m[M],g=a[h.materialIndex],T=Math.max(h.start,_.start),y=Math.min(o.count,Math.min(h.start+h.count,_.start+_.count));for(let E=T,P=y;E<P;E+=3){const D=o.getX(E),I=o.getX(E+1),J=o.getX(E+2);s=Gr(this,g,e,i,u,f,p,D,I,J),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const M=Math.max(0,_.start),b=Math.min(o.count,_.start+_.count);for(let h=M,g=b;h<g;h+=3){const T=o.getX(h),y=o.getX(h+1),E=o.getX(h+2);s=Gr(this,a,e,i,u,f,p,T,y,E),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let M=0,b=m.length;M<b;M++){const h=m[M],g=a[h.materialIndex],T=Math.max(h.start,_.start),y=Math.min(l.count,Math.min(h.start+h.count,_.start+_.count));for(let E=T,P=y;E<P;E+=3){const D=E,I=E+1,J=E+2;s=Gr(this,g,e,i,u,f,p,D,I,J),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const M=Math.max(0,_.start),b=Math.min(l.count,_.start+_.count);for(let h=M,g=b;h<g;h+=3){const T=h,y=h+1,E=h+2;s=Gr(this,a,e,i,u,f,p,T,y,E),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}}}function Pv(n,e,t,i,s,r,a,o){let l;if(e.side===jt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Xn,o),l===null)return null;kr.copy(o),kr.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(kr);return u<t.near||u>t.far?null:{distance:u,point:kr.clone(),object:n}}function Gr(n,e,t,i,s,r,a,o,l,u){n.getVertexPosition(o,Ki),n.getVertexPosition(l,Qi),n.getVertexPosition(u,Zi);const f=Pv(n,e,t,i,Ki,Qi,Zi,zr);if(f){s&&(Or.fromBufferAttribute(s,o),Br.fromBufferAttribute(s,l),Hr.fromBufferAttribute(s,u),f.uv=dn.getInterpolation(zr,Ki,Qi,Zi,Or,Br,Hr,new et)),r&&(Or.fromBufferAttribute(r,o),Br.fromBufferAttribute(r,l),Hr.fromBufferAttribute(r,u),f.uv1=dn.getInterpolation(zr,Ki,Qi,Zi,Or,Br,Hr,new et),f.uv2=f.uv1),a&&(Eu.fromBufferAttribute(a,o),Au.fromBufferAttribute(a,l),Tu.fromBufferAttribute(a,u),f.normal=dn.getInterpolation(zr,Ki,Qi,Zi,Eu,Au,Tu,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a:o,b:l,c:u,normal:new k,materialIndex:0};dn.getNormal(Ki,Qi,Zi,p.normal),f.face=p}return f}class lr extends vn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],u=[],f=[],p=[];let m=0,_=0;M("z","y","x",-1,-1,i,t,e,a,r,0),M("z","y","x",1,-1,i,t,-e,a,r,1),M("x","z","y",1,1,e,i,t,s,a,2),M("x","z","y",1,-1,e,i,-t,s,a,3),M("x","y","z",1,-1,e,t,i,s,r,4),M("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(p,2));function M(b,h,g,T,y,E,P,D,I,J,A){const L=E/I,pe=P/J,me=E/2,V=P/2,j=D/2,ee=I+1,ie=J+1;let O=0,Q=0;const ge=new k;for(let ue=0;ue<ie;ue++){const W=ue*pe-V;for(let Y=0;Y<ee;Y++){const we=Y*L-me;ge[b]=we*T,ge[h]=W*y,ge[g]=j,u.push(ge.x,ge.y,ge.z),ge[b]=0,ge[h]=0,ge[g]=D>0?1:-1,f.push(ge.x,ge.y,ge.z),p.push(Y/I),p.push(1-ue/J),O+=1}}for(let ue=0;ue<J;ue++)for(let W=0;W<I;W++){const Y=m+W+ee*ue,we=m+W+ee*(ue+1),Ae=m+(W+1)+ee*(ue+1),Ee=m+(W+1)+ee*ue;l.push(Y,we,Ee),l.push(we,Ae,Ee),Q+=6}o.addGroup(_,Q,A),_+=Q,m+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=_s(n[t]);for(const s in i)e[s]=i[s]}return e}function Dv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tf(n){return n.getRenderTarget()===null?n.outputColorSpace:Rn}const Iv={clone:_s,merge:Ht};var Uv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uv,this.fragmentShader=Fv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=Dv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Cf extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends Cf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/u,s*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,$i=1;class Nv extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const s=new nn(Ji,$i,e,t);s.layers=this.layers,this.add(s);const r=new nn(Ji,$i,e,t);r.layers=this.layers,this.add(r);const a=new nn(Ji,$i,e,t);a.layers=this.layers,this.add(a);const o=new nn(Ji,$i,e,t);o.layers=this.layers,this.add(o);const l=new nn(Ji,$i,e,t);l.layers=this.layers,this.add(l);const u=new nn(Ji,$i,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const u of t)this.remove(u);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,o,l,u]=this.children,f=e.getRenderTarget(),p=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Rf extends Yt{constructor(e,t,i,s,r,a,o,l,u,f){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,i,s,r,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ov extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(js("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ti?rt:Ci),this.texture=new Rf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new lr(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:oi});r.uniforms.tEquirect.value=t;const a=new sn(s,r),o=t.minFilter;return t.minFilter===er&&(t.minFilter=tn),new Nv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const ga=new k,Bv=new k,Hv=new Ye;class vi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ga.subVectors(i,t).cross(Bv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ga),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hv.getNormalMatrix(e),s=this.coplanarPoint(ga).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new ar,Vr=new k;class xl{constructor(e=new vi,t=new vi,i=new vi,s=new vi,r=new vi,a=new vi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],u=s[4],f=s[5],p=s[6],m=s[7],_=s[8],M=s[9],b=s[10],h=s[11],g=s[12],T=s[13],y=s[14],E=s[15];if(i[0].setComponents(l-r,m-u,h-_,E-g).normalize(),i[1].setComponents(l+r,m+u,h+_,E+g).normalize(),i[2].setComponents(l+a,m+f,h+M,E+T).normalize(),i[3].setComponents(l-a,m-f,h-M,E-T).normalize(),i[4].setComponents(l-o,m-p,h-b,E-y).normalize(),t===Vn)i[5].setComponents(l+o,m+p,h+b,E+y).normalize();else if(t===uo)i[5].setComponents(o,p,b,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Vr.x=s.normal.x>0?e.max.x:e.min.x,Vr.y=s.normal.y>0?e.max.y:e.min.y,Vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lf(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function zv(n,e){const t=e.isWebGL2,i=new WeakMap;function s(u,f){const p=u.array,m=u.usage,_=n.createBuffer();n.bindBuffer(f,_),n.bufferData(f,p,m),u.onUploadCallback();let M;if(p instanceof Float32Array)M=n.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)M=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=n.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=n.SHORT;else if(p instanceof Uint32Array)M=n.UNSIGNED_INT;else if(p instanceof Int32Array)M=n.INT;else if(p instanceof Int8Array)M=n.BYTE;else if(p instanceof Uint8Array)M=n.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version}}function r(u,f,p){const m=f.array,_=f.updateRange;n.bindBuffer(p,u),_.count===-1?n.bufferSubData(p,0,m):(t?n.bufferSubData(p,_.offset*m.BYTES_PER_ELEMENT,m,_.offset,_.count):n.bufferSubData(p,_.offset*m.BYTES_PER_ELEMENT,m.subarray(_.offset,_.offset+_.count)),_.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(n.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const m=i.get(u);(!m||m.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=i.get(u);p===void 0?i.set(u,s(u,f)):p.version<u.version&&(r(p.buffer,u,f),p.version=u.version)}return{get:a,remove:o,update:l}}class Ao extends vn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),u=o+1,f=l+1,p=e/o,m=t/l,_=[],M=[],b=[],h=[];for(let g=0;g<f;g++){const T=g*m-a;for(let y=0;y<u;y++){const E=y*p-r;M.push(E,-T,0),b.push(0,0,1),h.push(y/o),h.push(1-g/l)}}for(let g=0;g<l;g++)for(let T=0;T<o;T++){const y=T+u*g,E=T+u*(g+1),P=T+1+u*(g+1),D=T+1+u*g;_.push(y,E,D),_.push(E,P,D)}this.setIndex(_),this.setAttribute("position",new kt(M,3)),this.setAttribute("normal",new kt(b,3)),this.setAttribute("uv",new kt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.widthSegments,e.heightSegments)}}var kv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$v=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,l0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,u0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m0="gl_FragColor = linearToOutputTexel( gl_FragColor );",g0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,T0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,C0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,D0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,B0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,G0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,X0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ex=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ax=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Px=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ix=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jx=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ew=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ow=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_w=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:kv,alphahash_pars_fragment:Gv,alphamap_fragment:Vv,alphamap_pars_fragment:Wv,alphatest_fragment:Xv,alphatest_pars_fragment:qv,aomap_fragment:jv,aomap_pars_fragment:Yv,begin_vertex:Kv,beginnormal_vertex:Qv,bsdfs:Zv,iridescence_fragment:Jv,bumpmap_pars_fragment:$v,clipping_planes_fragment:e0,clipping_planes_pars_fragment:t0,clipping_planes_pars_vertex:n0,clipping_planes_vertex:i0,color_fragment:s0,color_pars_fragment:r0,color_pars_vertex:o0,color_vertex:a0,common:l0,cube_uv_reflection_fragment:c0,defaultnormal_vertex:u0,displacementmap_pars_vertex:d0,displacementmap_vertex:f0,emissivemap_fragment:h0,emissivemap_pars_fragment:p0,colorspace_fragment:m0,colorspace_pars_fragment:g0,envmap_fragment:_0,envmap_common_pars_fragment:v0,envmap_pars_fragment:x0,envmap_pars_vertex:w0,envmap_physical_pars_fragment:D0,envmap_vertex:b0,fog_vertex:M0,fog_pars_vertex:y0,fog_fragment:S0,fog_pars_fragment:E0,gradientmap_pars_fragment:A0,lightmap_fragment:T0,lightmap_pars_fragment:C0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:L0,lights_pars_begin:P0,lights_toon_fragment:I0,lights_toon_pars_fragment:U0,lights_phong_fragment:F0,lights_phong_pars_fragment:N0,lights_physical_fragment:O0,lights_physical_pars_fragment:B0,lights_fragment_begin:H0,lights_fragment_maps:z0,lights_fragment_end:k0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:V0,logdepthbuf_pars_vertex:W0,logdepthbuf_vertex:X0,map_fragment:q0,map_pars_fragment:j0,map_particle_fragment:Y0,map_particle_pars_fragment:K0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:Z0,morphcolor_vertex:J0,morphnormal_vertex:$0,morphtarget_pars_vertex:ex,morphtarget_vertex:tx,normal_fragment_begin:nx,normal_fragment_maps:ix,normal_pars_fragment:sx,normal_pars_vertex:rx,normal_vertex:ox,normalmap_pars_fragment:ax,clearcoat_normal_fragment_begin:lx,clearcoat_normal_fragment_maps:cx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:dx,opaque_fragment:fx,packing:hx,premultiplied_alpha_fragment:px,project_vertex:mx,dithering_fragment:gx,dithering_pars_fragment:_x,roughnessmap_fragment:vx,roughnessmap_pars_fragment:xx,shadowmap_pars_fragment:wx,shadowmap_pars_vertex:bx,shadowmap_vertex:Mx,shadowmask_pars_fragment:yx,skinbase_vertex:Sx,skinning_pars_vertex:Ex,skinning_vertex:Ax,skinnormal_vertex:Tx,specularmap_fragment:Cx,specularmap_pars_fragment:Rx,tonemapping_fragment:Lx,tonemapping_pars_fragment:Px,transmission_fragment:Dx,transmission_pars_fragment:Ix,uv_pars_fragment:Ux,uv_pars_vertex:Fx,uv_vertex:Nx,worldpos_vertex:Ox,background_vert:Bx,background_frag:Hx,backgroundCube_vert:zx,backgroundCube_frag:kx,cube_vert:Gx,cube_frag:Vx,depth_vert:Wx,depth_frag:Xx,distanceRGBA_vert:qx,distanceRGBA_frag:jx,equirect_vert:Yx,equirect_frag:Kx,linedashed_vert:Qx,linedashed_frag:Zx,meshbasic_vert:Jx,meshbasic_frag:$x,meshlambert_vert:ew,meshlambert_frag:tw,meshmatcap_vert:nw,meshmatcap_frag:iw,meshnormal_vert:sw,meshnormal_frag:rw,meshphong_vert:ow,meshphong_frag:aw,meshphysical_vert:lw,meshphysical_frag:cw,meshtoon_vert:uw,meshtoon_frag:dw,points_vert:fw,points_frag:hw,shadow_vert:pw,shadow_frag:mw,sprite_vert:gw,sprite_frag:_w},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Sn={basic:{uniforms:Ht([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ht([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ht([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ht([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ht([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ht([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ht([Me.points,Me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ht([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ht([Me.common,Me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ht([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ht([Me.sprite,Me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Ht([Me.common,Me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Ht([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Sn.physical={uniforms:Ht([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Wr={r:0,b:0,g:0};function vw(n,e,t,i,s,r,a){const o=new Ze(0);let l=r===!0?0:1,u,f,p=null,m=0,_=null;function M(h,g){let T=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y===null?b(o,l):y&&y.isColor&&(b(y,1),T=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===yo)?(f===void 0&&(f=new sn(new lr(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:_s(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=y.colorSpace!==rt,(p!==y||m!==y.version||_!==n.toneMapping)&&(f.material.needsUpdate=!0,p=y,m=y.version,_=n.toneMapping),f.layers.enableAll(),h.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new sn(new Ao(2,2),new Pi({name:"BackgroundMaterial",uniforms:_s(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=y.colorSpace!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||m!==y.version||_!==n.toneMapping)&&(u.material.needsUpdate=!0,p=y,m=y.version,_=n.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null))}function b(h,g){h.getRGB(Wr,Tf(n)),i.buffers.color.setClear(Wr.r,Wr.g,Wr.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(h,g=1){o.set(h),l=g,b(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,b(o,l)},render:M}}function xw(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=h(null);let u=l,f=!1;function p(j,ee,ie,O,Q){let ge=!1;if(a){const ue=b(O,ie,ee);u!==ue&&(u=ue,_(u.object)),ge=g(j,O,ie,Q),ge&&T(j,O,ie,Q)}else{const ue=ee.wireframe===!0;(u.geometry!==O.id||u.program!==ie.id||u.wireframe!==ue)&&(u.geometry=O.id,u.program=ie.id,u.wireframe=ue,ge=!0)}Q!==null&&t.update(Q,n.ELEMENT_ARRAY_BUFFER),(ge||f)&&(f=!1,J(j,ee,ie,O),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function _(j){return i.isWebGL2?n.bindVertexArray(j):r.bindVertexArrayOES(j)}function M(j){return i.isWebGL2?n.deleteVertexArray(j):r.deleteVertexArrayOES(j)}function b(j,ee,ie){const O=ie.wireframe===!0;let Q=o[j.id];Q===void 0&&(Q={},o[j.id]=Q);let ge=Q[ee.id];ge===void 0&&(ge={},Q[ee.id]=ge);let ue=ge[O];return ue===void 0&&(ue=h(m()),ge[O]=ue),ue}function h(j){const ee=[],ie=[],O=[];for(let Q=0;Q<s;Q++)ee[Q]=0,ie[Q]=0,O[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:ie,attributeDivisors:O,object:j,attributes:{},index:null}}function g(j,ee,ie,O){const Q=u.attributes,ge=ee.attributes;let ue=0;const W=ie.getAttributes();for(const Y in W)if(W[Y].location>=0){const Ae=Q[Y];let Ee=ge[Y];if(Ee===void 0&&(Y==="instanceMatrix"&&j.instanceMatrix&&(Ee=j.instanceMatrix),Y==="instanceColor"&&j.instanceColor&&(Ee=j.instanceColor)),Ae===void 0||Ae.attribute!==Ee||Ee&&Ae.data!==Ee.data)return!0;ue++}return u.attributesNum!==ue||u.index!==O}function T(j,ee,ie,O){const Q={},ge=ee.attributes;let ue=0;const W=ie.getAttributes();for(const Y in W)if(W[Y].location>=0){let Ae=ge[Y];Ae===void 0&&(Y==="instanceMatrix"&&j.instanceMatrix&&(Ae=j.instanceMatrix),Y==="instanceColor"&&j.instanceColor&&(Ae=j.instanceColor));const Ee={};Ee.attribute=Ae,Ae&&Ae.data&&(Ee.data=Ae.data),Q[Y]=Ee,ue++}u.attributes=Q,u.attributesNum=ue,u.index=O}function y(){const j=u.newAttributes;for(let ee=0,ie=j.length;ee<ie;ee++)j[ee]=0}function E(j){P(j,0)}function P(j,ee){const ie=u.newAttributes,O=u.enabledAttributes,Q=u.attributeDivisors;ie[j]=1,O[j]===0&&(n.enableVertexAttribArray(j),O[j]=1),Q[j]!==ee&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,ee),Q[j]=ee)}function D(){const j=u.newAttributes,ee=u.enabledAttributes;for(let ie=0,O=ee.length;ie<O;ie++)ee[ie]!==j[ie]&&(n.disableVertexAttribArray(ie),ee[ie]=0)}function I(j,ee,ie,O,Q,ge,ue){ue===!0?n.vertexAttribIPointer(j,ee,ie,Q,ge):n.vertexAttribPointer(j,ee,ie,O,Q,ge)}function J(j,ee,ie,O){if(i.isWebGL2===!1&&(j.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const Q=O.attributes,ge=ie.getAttributes(),ue=ee.defaultAttributeValues;for(const W in ge){const Y=ge[W];if(Y.location>=0){let we=Q[W];if(we===void 0&&(W==="instanceMatrix"&&j.instanceMatrix&&(we=j.instanceMatrix),W==="instanceColor"&&j.instanceColor&&(we=j.instanceColor)),we!==void 0){const Ae=we.normalized,Ee=we.itemSize,Le=t.get(we);if(Le===void 0)continue;const Ue=Le.buffer,Ne=Le.type,Ge=Le.bytesPerElement,ot=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||we.gpuType===ff);if(we.isInterleavedBufferAttribute){const ke=we.data,x=ke.stride,U=we.offset;if(ke.isInstancedInterleavedBuffer){for(let B=0;B<Y.locationSize;B++)P(Y.location+B,ke.meshPerAttribute);j.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let B=0;B<Y.locationSize;B++)E(Y.location+B);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let B=0;B<Y.locationSize;B++)I(Y.location+B,Ee/Y.locationSize,Ne,Ae,x*Ge,(U+Ee/Y.locationSize*B)*Ge,ot)}else{if(we.isInstancedBufferAttribute){for(let ke=0;ke<Y.locationSize;ke++)P(Y.location+ke,we.meshPerAttribute);j.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let ke=0;ke<Y.locationSize;ke++)E(Y.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let ke=0;ke<Y.locationSize;ke++)I(Y.location+ke,Ee/Y.locationSize,Ne,Ae,Ee*Ge,Ee/Y.locationSize*ke*Ge,ot)}}else if(ue!==void 0){const Ae=ue[W];if(Ae!==void 0)switch(Ae.length){case 2:n.vertexAttrib2fv(Y.location,Ae);break;case 3:n.vertexAttrib3fv(Y.location,Ae);break;case 4:n.vertexAttrib4fv(Y.location,Ae);break;default:n.vertexAttrib1fv(Y.location,Ae)}}}}D()}function A(){me();for(const j in o){const ee=o[j];for(const ie in ee){const O=ee[ie];for(const Q in O)M(O[Q].object),delete O[Q];delete ee[ie]}delete o[j]}}function L(j){if(o[j.id]===void 0)return;const ee=o[j.id];for(const ie in ee){const O=ee[ie];for(const Q in O)M(O[Q].object),delete O[Q];delete ee[ie]}delete o[j.id]}function pe(j){for(const ee in o){const ie=o[ee];if(ie[j.id]===void 0)continue;const O=ie[j.id];for(const Q in O)M(O[Q].object),delete O[Q];delete ie[j.id]}}function me(){V(),f=!0,u!==l&&(u=l,_(u.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:me,resetDefaultState:V,dispose:A,releaseStatesOfGeometry:L,releaseStatesOfProgram:pe,initAttributes:y,enableAttribute:E,disableUnusedAttributes:D}}function ww(n,e,t,i){const s=i.isWebGL2;let r;function a(u){r=u}function o(u,f){n.drawArrays(r,u,f),t.update(f,r,1)}function l(u,f,p){if(p===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,u,f,p),t.update(f,r,p)}this.setMode=a,this.render=o,this.renderInstances=l}function bw(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),b=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),g=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,E=a||e.has("OES_texture_float"),P=y&&E,D=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:M,maxAttributes:b,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:T,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:D}}function Mw(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new vi,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const _=p.length!==0||m||i!==0||s;return s=m,i=p.length,_},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,_){const M=p.clippingPlanes,b=p.clipIntersection,h=p.clipShadows,g=n.get(p);if(!s||M===null||M.length===0||r&&!h)r?f(null):u();else{const T=r?0:i,y=T*4;let E=g.clippingState||null;l.value=E,E=f(M,m,y,_);for(let P=0;P!==y;++P)E[P]=t[P];g.clippingState=E,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,m,_,M){const b=p!==null?p.length:0;let h=null;if(b!==0){if(h=l.value,M!==!0||h===null){const g=_+b*4,T=m.matrixWorldInverse;o.getNormalMatrix(T),(h===null||h.length<g)&&(h=new Float32Array(g));for(let y=0,E=_;y!==b;++y,E+=4)a.copy(p[y]).applyMatrix4(T,o),a.normal.toArray(h,E),h[E+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,h}}function yw(n){let e=new WeakMap;function t(a,o){return o===lo?a.mapping=ps:o===Ba&&(a.mapping=ms),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===lo||o===Ba)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Ov(l.height/2);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",s),t(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Pf extends Cf{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const is=4,Cu=[.125,.215,.35,.446,.526,.582],Mi=20,_a=new Pf,Ru=new Ze;let va=null;const xi=(1+Math.sqrt(5))/2,es=1/xi,Lu=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,xi,es),new k(0,xi,-es),new k(es,0,xi),new k(-es,0,xi),new k(xi,es,0),new k(-xi,es,0)];class Pu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){va=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(va),e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),va=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:tr,format:pn,colorSpace:Rn,depthBuffer:!1},s=Du(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sw(r)),this._blurMaterial=Ew(r,e,t)}return s}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,i,s){const o=new nn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(Ru),f.toneMapping=ai,f.autoClear=!1;const _=new vl({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),M=new sn(new lr,_);let b=!1;const h=e.background;h?h.isColor&&(_.color.copy(h),e.background=null,b=!0):(_.color.copy(Ru),b=!0);for(let g=0;g<6;g++){const T=g%3;T===0?(o.up.set(0,l[g],0),o.lookAt(u[g],0,0)):T===1?(o.up.set(0,0,l[g]),o.lookAt(0,u[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,u[g]));const y=this._cubeSize;Xr(s,T*y,g>2?y:0,y,y),f.setRenderTarget(s),b&&f.render(M,o),f.render(e,o)}M.geometry.dispose(),M.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ps||e.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new sn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Xr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,_a)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Lu[(s-1)%Lu.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new sn(this._lodPlanes[s],u),m=u.uniforms,_=this._sizeLods[i]-1,M=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*Mi-1),b=r/M,h=isFinite(r)?1+Math.floor(f*b):Mi;h>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Mi}`);const g=[];let T=0;for(let I=0;I<Mi;++I){const J=I/b,A=Math.exp(-J*J/2);g.push(A),I===0?T+=A:I<h&&(T+=2*A)}for(let I=0;I<g.length;I++)g[I]=g[I]/T;m.envMap.value=e.texture,m.samples.value=h,m.weights.value=g,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:y}=this;m.dTheta.value=M,m.mipInt.value=y-i;const E=this._sizeLods[s],P=3*E*(s>y-is?s-y+is:0),D=4*(this._cubeSize-E);Xr(t,P,D,3*E,2*E),l.setRenderTarget(t),l.render(p,_a)}}function Sw(n){const e=[],t=[],i=[];let s=n;const r=n-is+1+Cu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-is?l=Cu[a-n+is-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),f=-u,p=1+u,m=[f,f,p,f,p,p,f,f,p,p,f,p],_=6,M=6,b=3,h=2,g=1,T=new Float32Array(b*M*_),y=new Float32Array(h*M*_),E=new Float32Array(g*M*_);for(let D=0;D<_;D++){const I=D%3*2/3-1,J=D>2?0:-1,A=[I,J,0,I+2/3,J,0,I+2/3,J+1,0,I,J,0,I+2/3,J+1,0,I,J+1,0];T.set(A,b*M*D),y.set(m,h*M*D);const L=[D,D,D,D,D,D];E.set(L,g*M*D)}const P=new vn;P.setAttribute("position",new Cn(T,b)),P.setAttribute("uv",new Cn(y,h)),P.setAttribute("faceIndex",new Cn(E,g)),e.push(P),s>is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Du(n,e,t){const i=new Li(n,e,t);return i.texture.mapping=yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Ew(n,e,t){const i=new Float32Array(Mi),s=new k(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Iu(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Uu(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function wl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Aw(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===lo||l===Ba,f=l===ps||l===ms;if(u||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new Pu(n)),p=u?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(u&&p&&p.height>0||f&&p&&s(p)){t===null&&(t=new Pu(n));const m=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,m),o.addEventListener("dispose",r),m.texture}else return null}}}return o}function s(o){let l=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&l++;return l===u}function r(o){const l=o.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Tw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Cw(n,e,t,i){const s={},r=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);for(const M in m.morphAttributes){const b=m.morphAttributes[M];for(let h=0,g=b.length;h<g;h++)e.remove(b[h])}m.removeEventListener("dispose",a),delete s[m.id];const _=r.get(m);_&&(e.remove(_),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(p,m){return s[m.id]===!0||(m.addEventListener("dispose",a),s[m.id]=!0,t.memory.geometries++),m}function l(p){const m=p.attributes;for(const M in m)e.update(m[M],n.ARRAY_BUFFER);const _=p.morphAttributes;for(const M in _){const b=_[M];for(let h=0,g=b.length;h<g;h++)e.update(b[h],n.ARRAY_BUFFER)}}function u(p){const m=[],_=p.index,M=p.attributes.position;let b=0;if(_!==null){const T=_.array;b=_.version;for(let y=0,E=T.length;y<E;y+=3){const P=T[y+0],D=T[y+1],I=T[y+2];m.push(P,D,D,I,I,P)}}else if(M!==void 0){const T=M.array;b=M.version;for(let y=0,E=T.length/3-1;y<E;y+=3){const P=y+0,D=y+1,I=y+2;m.push(P,D,D,I,I,P)}}else return;const h=new(xf(m)?Af:Ef)(m,1);h.version=b;const g=r.get(p);g&&e.remove(g),r.set(p,h)}function f(p){const m=r.get(p);if(m){const _=p.index;_!==null&&m.version<_.version&&u(p)}else u(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function Rw(n,e,t,i){const s=i.isWebGL2;let r;function a(m){r=m}let o,l;function u(m){o=m.type,l=m.bytesPerElement}function f(m,_){n.drawElements(r,_,o,m*l),t.update(_,r,1)}function p(m,_,M){if(M===0)return;let b,h;if(s)b=n,h="drawElementsInstanced";else if(b=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[h](r,_,o,m*l,M),t.update(_,r,M)}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=p}function Lw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Pw(n,e){return n[0]-e[0]}function Dw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Iw(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,a=new Tt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,f,p){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const M=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,b=M!==void 0?M.length:0;let h=r.get(f);if(h===void 0||h.count!==b){let ee=function(){V.dispose(),r.delete(f),f.removeEventListener("dispose",ee)};var _=ee;h!==void 0&&h.texture.dispose();const y=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,P=f.morphAttributes.color!==void 0,D=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],J=f.morphAttributes.color||[];let A=0;y===!0&&(A=1),E===!0&&(A=2),P===!0&&(A=3);let L=f.attributes.position.count*A,pe=1;L>e.maxTextureSize&&(pe=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const me=new Float32Array(L*pe*4*b),V=new Mf(me,L,pe,b);V.type=ii,V.needsUpdate=!0;const j=A*4;for(let ie=0;ie<b;ie++){const O=D[ie],Q=I[ie],ge=J[ie],ue=L*pe*4*ie;for(let W=0;W<O.count;W++){const Y=W*j;y===!0&&(a.fromBufferAttribute(O,W),me[ue+Y+0]=a.x,me[ue+Y+1]=a.y,me[ue+Y+2]=a.z,me[ue+Y+3]=0),E===!0&&(a.fromBufferAttribute(Q,W),me[ue+Y+4]=a.x,me[ue+Y+5]=a.y,me[ue+Y+6]=a.z,me[ue+Y+7]=0),P===!0&&(a.fromBufferAttribute(ge,W),me[ue+Y+8]=a.x,me[ue+Y+9]=a.y,me[ue+Y+10]=a.z,me[ue+Y+11]=ge.itemSize===4?a.w:1)}}h={count:b,texture:V,size:new et(L,pe)},r.set(f,h),f.addEventListener("dispose",ee)}let g=0;for(let y=0;y<m.length;y++)g+=m[y];const T=f.morphTargetsRelative?1:1-g;p.getUniforms().setValue(n,"morphTargetBaseInfluence",T),p.getUniforms().setValue(n,"morphTargetInfluences",m),p.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),p.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}else{const M=m===void 0?0:m.length;let b=i[f.id];if(b===void 0||b.length!==M){b=[];for(let E=0;E<M;E++)b[E]=[E,0];i[f.id]=b}for(let E=0;E<M;E++){const P=b[E];P[0]=E,P[1]=m[E]}b.sort(Dw);for(let E=0;E<8;E++)E<M&&b[E][1]?(o[E][0]=b[E][0],o[E][1]=b[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(Pw);const h=f.morphAttributes.position,g=f.morphAttributes.normal;let T=0;for(let E=0;E<8;E++){const P=o[E],D=P[0],I=P[1];D!==Number.MAX_SAFE_INTEGER&&I?(h&&f.getAttribute("morphTarget"+E)!==h[D]&&f.setAttribute("morphTarget"+E,h[D]),g&&f.getAttribute("morphNormal"+E)!==g[D]&&f.setAttribute("morphNormal"+E,g[D]),s[E]=I,T+=I):(h&&f.hasAttribute("morphTarget"+E)===!0&&f.deleteAttribute("morphTarget"+E),g&&f.hasAttribute("morphNormal"+E)===!0&&f.deleteAttribute("morphNormal"+E),s[E]=0)}const y=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(n,"morphTargetBaseInfluence",y),p.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Uw(n,e,t,i){let s=new WeakMap;function r(l){const u=i.render.frame,f=l.geometry,p=e.get(l,f);if(s.get(p)!==u&&(e.update(p),s.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return p}function a(){s=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:a}}const Df=new Yt,If=new Mf,Uf=new wv,Ff=new Rf,Fu=[],Nu=[],Ou=new Float32Array(16),Bu=new Float32Array(9),Hu=new Float32Array(4);function Ss(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Fu[s];if(r===void 0&&(r=new Float32Array(s),Fu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function To(n,e){let t=Nu[e];t===void 0&&(t=new Int32Array(e),Nu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Fw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Nw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function Ow(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function Bw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function Hw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Hu.set(i),n.uniformMatrix2fv(this.addr,!1,Hu),Et(t,i)}}function zw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Bu.set(i),n.uniformMatrix3fv(this.addr,!1,Bu),Et(t,i)}}function kw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;Ou.set(i),n.uniformMatrix4fv(this.addr,!1,Ou),Et(t,i)}}function Gw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Vw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function Ww(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function Xw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function qw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function Yw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function Kw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function Qw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||Df,s)}function Zw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Uf,s)}function Jw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ff,s)}function $w(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||If,s)}function eb(n){switch(n){case 5126:return Fw;case 35664:return Nw;case 35665:return Ow;case 35666:return Bw;case 35674:return Hw;case 35675:return zw;case 35676:return kw;case 5124:case 35670:return Gw;case 35667:case 35671:return Vw;case 35668:case 35672:return Ww;case 35669:case 35673:return Xw;case 5125:return qw;case 36294:return jw;case 36295:return Yw;case 36296:return Kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return Jw;case 36289:case 36303:case 36311:case 36292:return $w}}function tb(n,e){n.uniform1fv(this.addr,e)}function nb(n,e){const t=Ss(e,this.size,2);n.uniform2fv(this.addr,t)}function ib(n,e){const t=Ss(e,this.size,3);n.uniform3fv(this.addr,t)}function sb(n,e){const t=Ss(e,this.size,4);n.uniform4fv(this.addr,t)}function rb(n,e){const t=Ss(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ob(n,e){const t=Ss(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ab(n,e){const t=Ss(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lb(n,e){n.uniform1iv(this.addr,e)}function cb(n,e){n.uniform2iv(this.addr,e)}function ub(n,e){n.uniform3iv(this.addr,e)}function db(n,e){n.uniform4iv(this.addr,e)}function fb(n,e){n.uniform1uiv(this.addr,e)}function hb(n,e){n.uniform2uiv(this.addr,e)}function pb(n,e){n.uniform3uiv(this.addr,e)}function mb(n,e){n.uniform4uiv(this.addr,e)}function gb(n,e,t){const i=this.cache,s=e.length,r=To(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Df,r[a])}function _b(n,e,t){const i=this.cache,s=e.length,r=To(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Uf,r[a])}function vb(n,e,t){const i=this.cache,s=e.length,r=To(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ff,r[a])}function xb(n,e,t){const i=this.cache,s=e.length,r=To(t,s);St(i,r)||(n.uniform1iv(this.addr,r),Et(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||If,r[a])}function wb(n){switch(n){case 5126:return tb;case 35664:return nb;case 35665:return ib;case 35666:return sb;case 35674:return rb;case 35675:return ob;case 35676:return ab;case 5124:case 35670:return lb;case 35667:case 35671:return cb;case 35668:case 35672:return ub;case 35669:case 35673:return db;case 5125:return fb;case 36294:return hb;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return xb}}class bb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=eb(t.type)}}class Mb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=wb(t.type)}}class yb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function zu(n,e){n.seq.push(e),n.map[e.id]=e}function Sb(n,e,t){const i=n.name,s=i.length;for(xa.lastIndex=0;;){const r=xa.exec(i),a=xa.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){zu(t,u===void 0?new bb(o,n,e):new Mb(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new yb(o),zu(t,p)),t=p}}}class to{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Sb(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function ku(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Eb=0;function Ab(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Tb(n){switch(n){case Rn:return["Linear","( value )"];case rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Gu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ab(n.getShaderSource(e),a)}else return s}function Cb(n,e){const t=Tb(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Rb(n,e){let t;switch(e){case N_:t="Linear";break;case O_:t="Reinhard";break;case B_:t="OptimizedCineon";break;case H_:t="ACESFilmic";break;case z_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Lb(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ks).join(`
`)}function Pb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Db(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ks(n){return n!==""}function Vu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(n){return n.replace(Ib,Fb)}const Ub=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Fb(n,e){let t=qe[e];if(t===void 0){const i=Ub.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Va(t)}const Nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(n){return n.replace(Nb,Ob)}function Ob(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===lf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===p_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function kb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pl:e="ENVMAP_BLENDING_MULTIPLY";break;case U_:e="ENVMAP_BLENDING_MIX";break;case F_:e="ENVMAP_BLENDING_ADD";break}return e}function Gb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Vb(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Bb(t),u=Hb(t),f=zb(t),p=kb(t),m=Gb(t),_=t.isWebGL2?"":Lb(t),M=Pb(r),b=s.createProgram();let h,g,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ks).join(`
`),h.length>0&&(h+=`
`),g=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ks).join(`
`),g.length>0&&(g+=`
`)):(h=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),g=[_,qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?qe.tonemapping_pars_fragment:"",t.toneMapping!==ai?Rb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Cb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),a=Va(a),a=Vu(a,t),a=Wu(a,t),o=Va(o),o=Vu(o,t),o=Wu(o,t),a=Xu(a),o=Xu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["#define varying in",t.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=T+h+a,E=T+g+o,P=ku(s,s.VERTEX_SHADER,y),D=ku(s,s.FRAGMENT_SHADER,E);if(s.attachShader(b,P),s.attachShader(b,D),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b),n.debug.checkShaderErrors){const A=s.getProgramInfoLog(b).trim(),L=s.getShaderInfoLog(P).trim(),pe=s.getShaderInfoLog(D).trim();let me=!0,V=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(me=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,P,D);else{const j=Gu(s,P,"vertex"),ee=Gu(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Program Info Log: `+A+`
`+j+`
`+ee)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(L===""||pe==="")&&(V=!1);V&&(this.diagnostics={runnable:me,programLog:A,vertexShader:{log:L,prefix:h},fragmentShader:{log:pe,prefix:g}})}s.deleteShader(P),s.deleteShader(D);let I;this.getUniforms=function(){return I===void 0&&(I=new to(s,b)),I};let J;return this.getAttributes=function(){return J===void 0&&(J=Db(s,b)),J},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Eb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=D,this}let Wb=0;class Xb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qb(e),t.set(e,i)),i}}class qb{constructor(e){this.id=Wb++,this.code=e,this.usedTimes=0}}function jb(n,e,t,i,s,r,a){const o=new yf,l=new Xb,u=[],f=s.isWebGL2,p=s.logarithmicDepthBuffer,m=s.vertexTextures;let _=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return A===0?"uv":`uv${A}`}function h(A,L,pe,me,V){const j=me.fog,ee=V.geometry,ie=A.isMeshStandardMaterial?me.environment:null,O=(A.isMeshStandardMaterial?t:e).get(A.envMap||ie),Q=O&&O.mapping===yo?O.image.height:null,ge=M[A.type];A.precision!==null&&(_=s.getMaxPrecision(A.precision),_!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const ue=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,W=ue!==void 0?ue.length:0;let Y=0;ee.morphAttributes.position!==void 0&&(Y=1),ee.morphAttributes.normal!==void 0&&(Y=2),ee.morphAttributes.color!==void 0&&(Y=3);let we,Ae,Ee,Le;if(ge){const it=Sn[ge];we=it.vertexShader,Ae=it.fragmentShader}else we=A.vertexShader,Ae=A.fragmentShader,l.update(A),Ee=l.getVertexShaderID(A),Le=l.getFragmentShaderID(A);const Ue=n.getRenderTarget(),Ne=V.isInstancedMesh===!0,Ge=!!A.map,ot=!!A.matcap,ke=!!O,x=!!A.aoMap,U=!!A.lightMap,B=!!A.bumpMap,K=!!A.normalMap,X=!!A.displacementMap,de=!!A.emissiveMap,he=!!A.metalnessMap,Z=!!A.roughnessMap,le=A.anisotropy>0,ce=A.clearcoat>0,_e=A.iridescence>0,S=A.sheen>0,w=A.transmission>0,N=le&&!!A.anisotropyMap,z=ce&&!!A.clearcoatMap,ne=ce&&!!A.clearcoatNormalMap,ae=ce&&!!A.clearcoatRoughnessMap,ve=_e&&!!A.iridescenceMap,fe=_e&&!!A.iridescenceThicknessMap,H=S&&!!A.sheenColorMap,Ie=S&&!!A.sheenRoughnessMap,Pe=!!A.specularMap,Ce=!!A.specularColorMap,ye=!!A.specularIntensityMap,Te=w&&!!A.transmissionMap,We=w&&!!A.thicknessMap,nt=!!A.gradientMap,F=!!A.alphaMap,Se=A.alphaTest>0,$=!!A.alphaHash,xe=!!A.extensions,be=!!ee.attributes.uv1,Je=!!ee.attributes.uv2,st=!!ee.attributes.uv3;let ht=ai;return A.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(ht=n.toneMapping),{isWebGL2:f,shaderID:ge,shaderType:A.type,shaderName:A.name,vertexShader:we,fragmentShader:Ae,defines:A.defines,customVertexShaderID:Ee,customFragmentShaderID:Le,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,instancing:Ne,instancingColor:Ne&&V.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Ue===null?n.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Rn,map:Ge,matcap:ot,envMap:ke,envMapMode:ke&&O.mapping,envMapCubeUVHeight:Q,aoMap:x,lightMap:U,bumpMap:B,normalMap:K,displacementMap:m&&X,emissiveMap:de,normalMapObjectSpace:K&&A.normalMapType===$_,normalMapTangentSpace:K&&A.normalMapType===gl,metalnessMap:he,roughnessMap:Z,anisotropy:le,anisotropyMap:N,clearcoat:ce,clearcoatMap:z,clearcoatNormalMap:ne,clearcoatRoughnessMap:ae,iridescence:_e,iridescenceMap:ve,iridescenceThicknessMap:fe,sheen:S,sheenColorMap:H,sheenRoughnessMap:Ie,specularMap:Pe,specularColorMap:Ce,specularIntensityMap:ye,transmission:w,transmissionMap:Te,thicknessMap:We,gradientMap:nt,opaque:A.transparent===!1&&A.blending===ls,alphaMap:F,alphaTest:Se,alphaHash:$,combine:A.combine,mapUv:Ge&&b(A.map.channel),aoMapUv:x&&b(A.aoMap.channel),lightMapUv:U&&b(A.lightMap.channel),bumpMapUv:B&&b(A.bumpMap.channel),normalMapUv:K&&b(A.normalMap.channel),displacementMapUv:X&&b(A.displacementMap.channel),emissiveMapUv:de&&b(A.emissiveMap.channel),metalnessMapUv:he&&b(A.metalnessMap.channel),roughnessMapUv:Z&&b(A.roughnessMap.channel),anisotropyMapUv:N&&b(A.anisotropyMap.channel),clearcoatMapUv:z&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:ne&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:H&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&b(A.sheenRoughnessMap.channel),specularMapUv:Pe&&b(A.specularMap.channel),specularColorMapUv:Ce&&b(A.specularColorMap.channel),specularIntensityMapUv:ye&&b(A.specularIntensityMap.channel),transmissionMapUv:Te&&b(A.transmissionMap.channel),thicknessMapUv:We&&b(A.thicknessMap.channel),alphaMapUv:F&&b(A.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(K||le),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:Je,vertexUv3s:st,pointsUvs:V.isPoints===!0&&!!ee.attributes.uv&&(Ge||F),fog:!!j,useFog:A.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:V.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:Y,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&pe.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ge&&A.map.isVideoTexture===!0&&A.map.colorSpace===rt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Gn,flipSided:A.side===jt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:xe&&A.extensions.derivatives===!0,extensionFragDepth:xe&&A.extensions.fragDepth===!0,extensionDrawBuffers:xe&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&A.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:A.customProgramCacheKey()}}function g(A){const L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(const pe in A.defines)L.push(pe),L.push(A.defines[pe]);return A.isRawShaderMaterial===!1&&(T(L,A),y(L,A),L.push(n.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function T(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapCubeUVHeight),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.morphAttributeCount),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function y(A,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.matcap&&o.enable(4),L.envMap&&o.enable(5),L.normalMapObjectSpace&&o.enable(6),L.normalMapTangentSpace&&o.enable(7),L.clearcoat&&o.enable(8),L.iridescence&&o.enable(9),L.alphaTest&&o.enable(10),L.vertexColors&&o.enable(11),L.vertexAlphas&&o.enable(12),L.vertexUv1s&&o.enable(13),L.vertexUv2s&&o.enable(14),L.vertexUv3s&&o.enable(15),L.vertexTangents&&o.enable(16),L.anisotropy&&o.enable(17),A.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.skinning&&o.enable(4),L.morphTargets&&o.enable(5),L.morphNormals&&o.enable(6),L.morphColors&&o.enable(7),L.premultipliedAlpha&&o.enable(8),L.shadowMapEnabled&&o.enable(9),L.useLegacyLights&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),A.push(o.mask)}function E(A){const L=M[A.type];let pe;if(L){const me=Sn[L];pe=Iv.clone(me.uniforms)}else pe=A.uniforms;return pe}function P(A,L){let pe;for(let me=0,V=u.length;me<V;me++){const j=u[me];if(j.cacheKey===L){pe=j,++pe.usedTimes;break}}return pe===void 0&&(pe=new Vb(n,L,A,r),u.push(pe)),pe}function D(A){if(--A.usedTimes===0){const L=u.indexOf(A);u[L]=u[u.length-1],u.pop(),A.destroy()}}function I(A){l.remove(A)}function J(){l.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:E,acquireProgram:P,releaseProgram:D,releaseShaderCache:I,programs:u,dispose:J}}function Yb(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Kb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ju(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(p,m,_,M,b,h){let g=n[e];return g===void 0?(g={id:p.id,object:p,geometry:m,material:_,groupOrder:M,renderOrder:p.renderOrder,z:b,group:h},n[e]=g):(g.id=p.id,g.object=p,g.geometry=m,g.material=_,g.groupOrder=M,g.renderOrder=p.renderOrder,g.z=b,g.group=h),e++,g}function o(p,m,_,M,b,h){const g=a(p,m,_,M,b,h);_.transmission>0?i.push(g):_.transparent===!0?s.push(g):t.push(g)}function l(p,m,_,M,b,h){const g=a(p,m,_,M,b,h);_.transmission>0?i.unshift(g):_.transparent===!0?s.unshift(g):t.unshift(g)}function u(p,m){t.length>1&&t.sort(p||Kb),i.length>1&&i.sort(m||ju),s.length>1&&s.sort(m||ju)}function f(){for(let p=e,m=n.length;p<m;p++){const _=n[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:f,sort:u}}function Qb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Yu,n.set(i,[a])):s>=r.length?(a=new Yu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Zb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ze};break;case"SpotLight":t={position:new k,direction:new k,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function Jb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $b=0;function eM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tM(n,e){const t=new Zb,i=Jb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)s.probe.push(new k);const r=new k,a=new vt,o=new vt;function l(f,p){let m=0,_=0,M=0;for(let pe=0;pe<9;pe++)s.probe[pe].set(0,0,0);let b=0,h=0,g=0,T=0,y=0,E=0,P=0,D=0,I=0,J=0;f.sort(eM);const A=p===!0?Math.PI:1;for(let pe=0,me=f.length;pe<me;pe++){const V=f[pe],j=V.color,ee=V.intensity,ie=V.distance,O=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=j.r*ee*A,_+=j.g*ee*A,M+=j.b*ee*A;else if(V.isLightProbe)for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(V.sh.coefficients[Q],ee);else if(V.isDirectionalLight){const Q=t.get(V);if(Q.color.copy(V.color).multiplyScalar(V.intensity*A),V.castShadow){const ge=V.shadow,ue=i.get(V);ue.shadowBias=ge.bias,ue.shadowNormalBias=ge.normalBias,ue.shadowRadius=ge.radius,ue.shadowMapSize=ge.mapSize,s.directionalShadow[b]=ue,s.directionalShadowMap[b]=O,s.directionalShadowMatrix[b]=V.shadow.matrix,E++}s.directional[b]=Q,b++}else if(V.isSpotLight){const Q=t.get(V);Q.position.setFromMatrixPosition(V.matrixWorld),Q.color.copy(j).multiplyScalar(ee*A),Q.distance=ie,Q.coneCos=Math.cos(V.angle),Q.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),Q.decay=V.decay,s.spot[g]=Q;const ge=V.shadow;if(V.map&&(s.spotLightMap[I]=V.map,I++,ge.updateMatrices(V),V.castShadow&&J++),s.spotLightMatrix[g]=ge.matrix,V.castShadow){const ue=i.get(V);ue.shadowBias=ge.bias,ue.shadowNormalBias=ge.normalBias,ue.shadowRadius=ge.radius,ue.shadowMapSize=ge.mapSize,s.spotShadow[g]=ue,s.spotShadowMap[g]=O,D++}g++}else if(V.isRectAreaLight){const Q=t.get(V);Q.color.copy(j).multiplyScalar(ee),Q.halfWidth.set(V.width*.5,0,0),Q.halfHeight.set(0,V.height*.5,0),s.rectArea[T]=Q,T++}else if(V.isPointLight){const Q=t.get(V);if(Q.color.copy(V.color).multiplyScalar(V.intensity*A),Q.distance=V.distance,Q.decay=V.decay,V.castShadow){const ge=V.shadow,ue=i.get(V);ue.shadowBias=ge.bias,ue.shadowNormalBias=ge.normalBias,ue.shadowRadius=ge.radius,ue.shadowMapSize=ge.mapSize,ue.shadowCameraNear=ge.camera.near,ue.shadowCameraFar=ge.camera.far,s.pointShadow[h]=ue,s.pointShadowMap[h]=O,s.pointShadowMatrix[h]=V.shadow.matrix,P++}s.point[h]=Q,h++}else if(V.isHemisphereLight){const Q=t.get(V);Q.skyColor.copy(V.color).multiplyScalar(ee*A),Q.groundColor.copy(V.groundColor).multiplyScalar(ee*A),s.hemi[y]=Q,y++}}T>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_FLOAT_1,s.rectAreaLTC2=Me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_HALF_1,s.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=m,s.ambient[1]=_,s.ambient[2]=M;const L=s.hash;(L.directionalLength!==b||L.pointLength!==h||L.spotLength!==g||L.rectAreaLength!==T||L.hemiLength!==y||L.numDirectionalShadows!==E||L.numPointShadows!==P||L.numSpotShadows!==D||L.numSpotMaps!==I)&&(s.directional.length=b,s.spot.length=g,s.rectArea.length=T,s.point.length=h,s.hemi.length=y,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=D+I-J,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=J,L.directionalLength=b,L.pointLength=h,L.spotLength=g,L.rectAreaLength=T,L.hemiLength=y,L.numDirectionalShadows=E,L.numPointShadows=P,L.numSpotShadows=D,L.numSpotMaps=I,s.version=$b++)}function u(f,p){let m=0,_=0,M=0,b=0,h=0;const g=p.matrixWorldInverse;for(let T=0,y=f.length;T<y;T++){const E=f[T];if(E.isDirectionalLight){const P=s.directional[m];P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(g),m++}else if(E.isSpotLight){const P=s.spot[M];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(g),P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(g),M++}else if(E.isRectAreaLight){const P=s.rectArea[b];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(g),o.identity(),a.copy(E.matrixWorld),a.premultiply(g),o.extractRotation(a),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),b++}else if(E.isPointLight){const P=s.point[_];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(g),_++}else if(E.isHemisphereLight){const P=s.hemi[h];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(g),h++}}}return{setup:l,setupView:u,state:s}}function Ku(n,e){const t=new tM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(p){i.push(p)}function o(p){s.push(p)}function l(p){t.setup(i,p)}function u(p){t.setupView(i,p)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function nM(n,e){let t=new WeakMap;function i(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Ku(n,e),t.set(r,[l])):a>=o.length?(l=new Ku(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class iM extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sM extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aM(n,e,t){let i=new xl;const s=new et,r=new et,a=new Tt,o=new iM({depthPacking:J_}),l=new sM,u={},f=t.maxTextureSize,p={[Xn]:jt,[jt]:Xn,[Gn]:Gn},m=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:rM,fragmentShader:oM}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const M=new vn;M.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new sn(M,m),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lf;let g=this.type;this.render=function(P,D,I){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||P.length===0)return;const J=n.getRenderTarget(),A=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),pe=n.state;pe.setBlending(oi),pe.buffers.color.setClear(1,1,1,1),pe.buffers.depth.setTest(!0),pe.setScissorTest(!1);const me=g!==zn&&this.type===zn,V=g===zn&&this.type!==zn;for(let j=0,ee=P.length;j<ee;j++){const ie=P[j],O=ie.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const Q=O.getFrameExtents();if(s.multiply(Q),r.copy(O.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/Q.x),s.x=r.x*Q.x,O.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/Q.y),s.y=r.y*Q.y,O.mapSize.y=r.y)),O.map===null||me===!0||V===!0){const ue=this.type!==zn?{minFilter:zt,magFilter:zt}:{};O.map!==null&&O.map.dispose(),O.map=new Li(s.x,s.y,ue),O.map.texture.name=ie.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const ge=O.getViewportCount();for(let ue=0;ue<ge;ue++){const W=O.getViewport(ue);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),pe.viewport(a),O.updateMatrices(ie,ue),i=O.getFrustum(),E(D,I,O.camera,ie,this.type)}O.isPointLightShadow!==!0&&this.type===zn&&T(O,I),O.needsUpdate=!1}g=this.type,h.needsUpdate=!1,n.setRenderTarget(J,A,L)};function T(P,D){const I=e.update(b);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Li(s.x,s.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,I,m,b,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,I,_,b,null)}function y(P,D,I,J){let A=null;const L=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)A=L;else if(A=I.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const pe=A.uuid,me=D.uuid;let V=u[pe];V===void 0&&(V={},u[pe]=V);let j=V[me];j===void 0&&(j=A.clone(),V[me]=j),A=j}if(A.visible=D.visible,A.wireframe=D.wireframe,J===zn?A.side=D.shadowSide!==null?D.shadowSide:D.side:A.side=D.shadowSide!==null?D.shadowSide:p[D.side],A.alphaMap=D.alphaMap,A.alphaTest=D.alphaTest,A.map=D.map,A.clipShadows=D.clipShadows,A.clippingPlanes=D.clippingPlanes,A.clipIntersection=D.clipIntersection,A.displacementMap=D.displacementMap,A.displacementScale=D.displacementScale,A.displacementBias=D.displacementBias,A.wireframeLinewidth=D.wireframeLinewidth,A.linewidth=D.linewidth,I.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const pe=n.properties.get(A);pe.light=I}return A}function E(P,D,I,J,A){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&A===zn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const me=e.update(P),V=P.material;if(Array.isArray(V)){const j=me.groups;for(let ee=0,ie=j.length;ee<ie;ee++){const O=j[ee],Q=V[O.materialIndex];if(Q&&Q.visible){const ge=y(P,Q,J,A);n.renderBufferDirect(I,null,me,ge,P,O)}}}else if(V.visible){const j=y(P,V,J,A);n.renderBufferDirect(I,null,me,j,P,null)}}const pe=P.children;for(let me=0,V=pe.length;me<V;me++)E(pe[me],D,I,J,A)}}function lM(n,e,t){const i=t.isWebGL2;function s(){let F=!1;const Se=new Tt;let $=null;const xe=new Tt(0,0,0,0);return{setMask:function(be){$!==be&&!F&&(n.colorMask(be,be,be,be),$=be)},setLocked:function(be){F=be},setClear:function(be,Je,st,ht,xn){xn===!0&&(be*=ht,Je*=ht,st*=ht),Se.set(be,Je,st,ht),xe.equals(Se)===!1&&(n.clearColor(be,Je,st,ht),xe.copy(Se))},reset:function(){F=!1,$=null,xe.set(-1,0,0,0)}}}function r(){let F=!1,Se=null,$=null,xe=null;return{setTest:function(be){be?Ue(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(be){Se!==be&&!F&&(n.depthMask(be),Se=be)},setFunc:function(be){if($!==be){switch(be){case T_:n.depthFunc(n.NEVER);break;case C_:n.depthFunc(n.ALWAYS);break;case R_:n.depthFunc(n.LESS);break;case Oa:n.depthFunc(n.LEQUAL);break;case L_:n.depthFunc(n.EQUAL);break;case P_:n.depthFunc(n.GEQUAL);break;case D_:n.depthFunc(n.GREATER);break;case I_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=be}},setLocked:function(be){F=be},setClear:function(be){xe!==be&&(n.clearDepth(be),xe=be)},reset:function(){F=!1,Se=null,$=null,xe=null}}}function a(){let F=!1,Se=null,$=null,xe=null,be=null,Je=null,st=null,ht=null,xn=null;return{setTest:function(it){F||(it?Ue(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(it){Se!==it&&!F&&(n.stencilMask(it),Se=it)},setFunc:function(it,Gt,Rt){($!==it||xe!==Gt||be!==Rt)&&(n.stencilFunc(it,Gt,Rt),$=it,xe=Gt,be=Rt)},setOp:function(it,Gt,Rt){(Je!==it||st!==Gt||ht!==Rt)&&(n.stencilOp(it,Gt,Rt),Je=it,st=Gt,ht=Rt)},setLocked:function(it){F=it},setClear:function(it){xn!==it&&(n.clearStencil(it),xn=it)},reset:function(){F=!1,Se=null,$=null,xe=null,be=null,Je=null,st=null,ht=null,xn=null}}}const o=new s,l=new r,u=new a,f=new WeakMap,p=new WeakMap;let m={},_={},M=new WeakMap,b=[],h=null,g=!1,T=null,y=null,E=null,P=null,D=null,I=null,J=null,A=!1,L=null,pe=null,me=null,V=null,j=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,O=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ie=O>=1):Q.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ie=O>=2);let ge=null,ue={};const W=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),we=new Tt().fromArray(W),Ae=new Tt().fromArray(Y);function Ee(F,Se,$,xe){const be=new Uint8Array(4),Je=n.createTexture();n.bindTexture(F,Je),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<$;st++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(Se,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Se+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return Je}const Le={};Le[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ue(n.DEPTH_TEST),l.setFunc(Oa),X(!1),de(Ic),Ue(n.CULL_FACE),B(oi);function Ue(F){m[F]!==!0&&(n.enable(F),m[F]=!0)}function Ne(F){m[F]!==!1&&(n.disable(F),m[F]=!1)}function Ge(F,Se){return _[F]!==Se?(n.bindFramebuffer(F,Se),_[F]=Se,i&&(F===n.DRAW_FRAMEBUFFER&&(_[n.FRAMEBUFFER]=Se),F===n.FRAMEBUFFER&&(_[n.DRAW_FRAMEBUFFER]=Se)),!0):!1}function ot(F,Se){let $=b,xe=!1;if(F)if($=M.get(Se),$===void 0&&($=[],M.set(Se,$)),F.isWebGLMultipleRenderTargets){const be=F.texture;if($.length!==be.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Je=0,st=be.length;Je<st;Je++)$[Je]=n.COLOR_ATTACHMENT0+Je;$.length=be.length,xe=!0}}else $[0]!==n.COLOR_ATTACHMENT0&&($[0]=n.COLOR_ATTACHMENT0,xe=!0);else $[0]!==n.BACK&&($[0]=n.BACK,xe=!0);xe&&(t.isWebGL2?n.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function ke(F){return h!==F?(n.useProgram(F),h=F,!0):!1}const x={[ts]:n.FUNC_ADD,[g_]:n.FUNC_SUBTRACT,[__]:n.FUNC_REVERSE_SUBTRACT};if(i)x[Oc]=n.MIN,x[Bc]=n.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(x[Oc]=F.MIN_EXT,x[Bc]=F.MAX_EXT)}const U={[v_]:n.ZERO,[x_]:n.ONE,[w_]:n.SRC_COLOR,[cf]:n.SRC_ALPHA,[A_]:n.SRC_ALPHA_SATURATE,[S_]:n.DST_COLOR,[M_]:n.DST_ALPHA,[b_]:n.ONE_MINUS_SRC_COLOR,[uf]:n.ONE_MINUS_SRC_ALPHA,[E_]:n.ONE_MINUS_DST_COLOR,[y_]:n.ONE_MINUS_DST_ALPHA};function B(F,Se,$,xe,be,Je,st,ht){if(F===oi){g===!0&&(Ne(n.BLEND),g=!1);return}if(g===!1&&(Ue(n.BLEND),g=!0),F!==m_){if(F!==T||ht!==A){if((y!==ts||D!==ts)&&(n.blendEquation(n.FUNC_ADD),y=ts,D=ts),ht)switch(F){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uc:n.blendFunc(n.ONE,n.ONE);break;case Fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,P=null,I=null,J=null,T=F,A=ht}return}be=be||Se,Je=Je||$,st=st||xe,(Se!==y||be!==D)&&(n.blendEquationSeparate(x[Se],x[be]),y=Se,D=be),($!==E||xe!==P||Je!==I||st!==J)&&(n.blendFuncSeparate(U[$],U[xe],U[Je],U[st]),E=$,P=xe,I=Je,J=st),T=F,A=!1}function K(F,Se){F.side===Gn?Ne(n.CULL_FACE):Ue(n.CULL_FACE);let $=F.side===jt;Se&&($=!$),X($),F.blending===ls&&F.transparent===!1?B(oi):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const xe=F.stencilWrite;u.setTest(xe),xe&&(u.setMask(F.stencilWriteMask),u.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),u.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Z(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function X(F){L!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),L=F)}function de(F){F!==f_?(Ue(n.CULL_FACE),F!==pe&&(F===Ic?n.cullFace(n.BACK):F===h_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),pe=F}function he(F){F!==me&&(ie&&n.lineWidth(F),me=F)}function Z(F,Se,$){F?(Ue(n.POLYGON_OFFSET_FILL),(V!==Se||j!==$)&&(n.polygonOffset(Se,$),V=Se,j=$)):Ne(n.POLYGON_OFFSET_FILL)}function le(F){F?Ue(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function ce(F){F===void 0&&(F=n.TEXTURE0+ee-1),ge!==F&&(n.activeTexture(F),ge=F)}function _e(F,Se,$){$===void 0&&(ge===null?$=n.TEXTURE0+ee-1:$=ge);let xe=ue[$];xe===void 0&&(xe={type:void 0,texture:void 0},ue[$]=xe),(xe.type!==F||xe.texture!==Se)&&(ge!==$&&(n.activeTexture($),ge=$),n.bindTexture(F,Se||Le[F]),xe.type=F,xe.texture=Se)}function S(){const F=ue[ge];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function w(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(F){we.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),we.copy(F))}function ye(F){Ae.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ae.copy(F))}function Te(F,Se){let $=p.get(Se);$===void 0&&($=new WeakMap,p.set(Se,$));let xe=$.get(F);xe===void 0&&(xe=n.getUniformBlockIndex(Se,F.name),$.set(F,xe))}function We(F,Se){const xe=p.get(Se).get(F);f.get(Se)!==xe&&(n.uniformBlockBinding(Se,xe,F.__bindingPointIndex),f.set(Se,xe))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},ge=null,ue={},_={},M=new WeakMap,b=[],h=null,g=!1,T=null,y=null,E=null,P=null,D=null,I=null,J=null,A=!1,L=null,pe=null,me=null,V=null,j=null,we.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Ue,disable:Ne,bindFramebuffer:Ge,drawBuffers:ot,useProgram:ke,setBlending:B,setMaterial:K,setFlipSided:X,setCullFace:de,setLineWidth:he,setPolygonOffset:Z,setScissorTest:le,activeTexture:ce,bindTexture:_e,unbindTexture:S,compressedTexImage2D:w,compressedTexImage3D:N,texImage2D:Ie,texImage3D:Pe,updateUBOMapping:Te,uniformBlockBinding:We,texStorage2D:fe,texStorage3D:H,texSubImage2D:z,texSubImage3D:ne,compressedTexSubImage2D:ae,compressedTexSubImage3D:ve,scissor:Ce,viewport:ye,reset:nt}}function cM(n,e,t,i,s,r,a){const o=s.isWebGL2,l=s.maxTextures,u=s.maxCubemapSize,f=s.maxTextureSize,p=s.maxSamples,m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new WeakMap;let b;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(S,w){return g?new OffscreenCanvas(S,w):nr("canvas")}function y(S,w,N,z){let ne=1;if((S.width>z||S.height>z)&&(ne=z/Math.max(S.width,S.height)),ne<1||w===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ae=w?Ga:Math.floor,ve=ae(ne*S.width),fe=ae(ne*S.height);b===void 0&&(b=T(ve,fe));const H=N?T(ve,fe):b;return H.width=ve,H.height=fe,H.getContext("2d").drawImage(S,0,0,ve,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ve+"x"+fe+")."),H}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function E(S){return hu(S.width)&&hu(S.height)}function P(S){return o?!1:S.wrapS!==hn||S.wrapT!==hn||S.minFilter!==zt&&S.minFilter!==tn}function D(S,w){return S.generateMipmaps&&w&&S.minFilter!==zt&&S.minFilter!==tn}function I(S){n.generateMipmap(S)}function J(S,w,N,z,ne=!1){if(o===!1)return w;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ae=w;return w===n.RED&&(N===n.FLOAT&&(ae=n.R32F),N===n.HALF_FLOAT&&(ae=n.R16F),N===n.UNSIGNED_BYTE&&(ae=n.R8)),w===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(ae=n.R8UI),N===n.UNSIGNED_SHORT&&(ae=n.R16UI),N===n.UNSIGNED_INT&&(ae=n.R32UI),N===n.BYTE&&(ae=n.R8I),N===n.SHORT&&(ae=n.R16I),N===n.INT&&(ae=n.R32I)),w===n.RG&&(N===n.FLOAT&&(ae=n.RG32F),N===n.HALF_FLOAT&&(ae=n.RG16F),N===n.UNSIGNED_BYTE&&(ae=n.RG8)),w===n.RGBA&&(N===n.FLOAT&&(ae=n.RGBA32F),N===n.HALF_FLOAT&&(ae=n.RGBA16F),N===n.UNSIGNED_BYTE&&(ae=z===rt&&ne===!1?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)),(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function A(S,w,N){return D(S,N)===!0||S.isFramebufferTexture&&S.minFilter!==zt&&S.minFilter!==tn?Math.log2(Math.max(w.width,w.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?w.mipmaps.length:1}function L(S){return S===zt||S===Hc||S===Xo?n.NEAREST:n.LINEAR}function pe(S){const w=S.target;w.removeEventListener("dispose",pe),V(w),w.isVideoTexture&&M.delete(w)}function me(S){const w=S.target;w.removeEventListener("dispose",me),ee(w)}function V(S){const w=i.get(S);if(w.__webglInit===void 0)return;const N=S.source,z=h.get(N);if(z){const ne=z[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&j(S),Object.keys(z).length===0&&h.delete(N)}i.remove(S)}function j(S){const w=i.get(S);n.deleteTexture(w.__webglTexture);const N=S.source,z=h.get(N);delete z[w.__cacheKey],a.memory.textures--}function ee(S){const w=S.texture,N=i.get(S),z=i.get(w);if(z.__webglTexture!==void 0&&(n.deleteTexture(z.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(N.__webglFramebuffer[ne]))for(let ae=0;ae<N.__webglFramebuffer[ne].length;ae++)n.deleteFramebuffer(N.__webglFramebuffer[ne][ae]);else n.deleteFramebuffer(N.__webglFramebuffer[ne]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[ne])}else{if(Array.isArray(N.__webglFramebuffer))for(let ne=0;ne<N.__webglFramebuffer.length;ne++)n.deleteFramebuffer(N.__webglFramebuffer[ne]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let ne=0;ne<N.__webglColorRenderbuffer.length;ne++)N.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[ne]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ne=0,ae=w.length;ne<ae;ne++){const ve=i.get(w[ne]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),a.memory.textures--),i.remove(w[ne])}i.remove(w),i.remove(S)}let ie=0;function O(){ie=0}function Q(){const S=ie;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),ie+=1,S}function ge(S){const w=[];return w.push(S.wrapS),w.push(S.wrapT),w.push(S.wrapR||0),w.push(S.magFilter),w.push(S.minFilter),w.push(S.anisotropy),w.push(S.internalFormat),w.push(S.format),w.push(S.type),w.push(S.generateMipmaps),w.push(S.premultiplyAlpha),w.push(S.flipY),w.push(S.unpackAlignment),w.push(S.colorSpace),w.join()}function ue(S,w){const N=i.get(S);if(S.isVideoTexture&&ce(S),S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){const z=S.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(N,S,w);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+w)}function W(S,w){const N=i.get(S);if(S.version>0&&N.__version!==S.version){Ge(N,S,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+w)}function Y(S,w){const N=i.get(S);if(S.version>0&&N.__version!==S.version){Ge(N,S,w);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+w)}function we(S,w){const N=i.get(S);if(S.version>0&&N.__version!==S.version){ot(N,S,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+w)}const Ae={[co]:n.REPEAT,[hn]:n.CLAMP_TO_EDGE,[Ha]:n.MIRRORED_REPEAT},Ee={[zt]:n.NEAREST,[Hc]:n.NEAREST_MIPMAP_NEAREST,[Xo]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[k_]:n.LINEAR_MIPMAP_NEAREST,[er]:n.LINEAR_MIPMAP_LINEAR},Le={[tv]:n.NEVER,[lv]:n.ALWAYS,[nv]:n.LESS,[sv]:n.LEQUAL,[iv]:n.EQUAL,[av]:n.GEQUAL,[rv]:n.GREATER,[ov]:n.NOTEQUAL};function Ue(S,w,N){if(N?(n.texParameteri(S,n.TEXTURE_WRAP_S,Ae[w.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,Ae[w.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,Ae[w.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Ee[w.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Ee[w.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==hn||w.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,L(w.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,L(w.minFilter)),w.minFilter!==zt&&w.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===zt||w.minFilter!==Xo&&w.minFilter!==er||w.type===ii&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===tr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(S,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Ne(S,w){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,w.addEventListener("dispose",pe));const z=w.source;let ne=h.get(z);ne===void 0&&(ne={},h.set(z,ne));const ae=ge(w);if(ae!==S.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),ne[ae].usedTimes++;const ve=ne[S.__cacheKey];ve!==void 0&&(ne[S.__cacheKey].usedTimes--,ve.usedTimes===0&&j(w)),S.__cacheKey=ae,S.__webglTexture=ne[ae].texture}return N}function Ge(S,w,N){let z=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(z=n.TEXTURE_3D);const ne=Ne(S,w),ae=w.source;t.bindTexture(z,S.__webglTexture,n.TEXTURE0+N);const ve=i.get(ae);if(ae.version!==ve.__version||ne===!0){t.activeTexture(n.TEXTURE0+N),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const fe=P(w)&&E(w.image)===!1;let H=y(w.image,fe,!1,f);H=_e(w,H);const Ie=E(H)||o,Pe=r.convert(w.format,w.colorSpace);let Ce=r.convert(w.type),ye=J(w.internalFormat,Pe,Ce,w.colorSpace,w.isVideoTexture);Ue(z,w,Ie);let Te;const We=w.mipmaps,nt=o&&w.isVideoTexture!==!0,F=ve.__version===void 0||ne===!0,Se=A(w,H,Ie);if(w.isDepthTexture)ye=n.DEPTH_COMPONENT,o?w.type===ii?ye=n.DEPTH_COMPONENT32F:w.type===ni?ye=n.DEPTH_COMPONENT24:w.type===Ei?ye=n.DEPTH24_STENCIL8:ye=n.DEPTH_COMPONENT16:w.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ai&&ye===n.DEPTH_COMPONENT&&w.type!==ml&&w.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ni,Ce=r.convert(w.type)),w.format===gs&&ye===n.DEPTH_COMPONENT&&(ye=n.DEPTH_STENCIL,w.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ei,Ce=r.convert(w.type))),F&&(nt?t.texStorage2D(n.TEXTURE_2D,1,ye,H.width,H.height):t.texImage2D(n.TEXTURE_2D,0,ye,H.width,H.height,0,Pe,Ce,null));else if(w.isDataTexture)if(We.length>0&&Ie){nt&&F&&t.texStorage2D(n.TEXTURE_2D,Se,ye,We[0].width,We[0].height);for(let $=0,xe=We.length;$<xe;$++)Te=We[$],nt?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Te.width,Te.height,Pe,Ce,Te.data):t.texImage2D(n.TEXTURE_2D,$,ye,Te.width,Te.height,0,Pe,Ce,Te.data);w.generateMipmaps=!1}else nt?(F&&t.texStorage2D(n.TEXTURE_2D,Se,ye,H.width,H.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,H.width,H.height,Pe,Ce,H.data)):t.texImage2D(n.TEXTURE_2D,0,ye,H.width,H.height,0,Pe,Ce,H.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&F&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,ye,We[0].width,We[0].height,H.depth);for(let $=0,xe=We.length;$<xe;$++)Te=We[$],w.format!==pn?Pe!==null?nt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Te.width,Te.height,H.depth,Pe,Te.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,ye,Te.width,Te.height,H.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Te.width,Te.height,H.depth,Pe,Ce,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,ye,Te.width,Te.height,H.depth,0,Pe,Ce,Te.data)}else{nt&&F&&t.texStorage2D(n.TEXTURE_2D,Se,ye,We[0].width,We[0].height);for(let $=0,xe=We.length;$<xe;$++)Te=We[$],w.format!==pn?Pe!==null?nt?t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Te.width,Te.height,Pe,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,$,ye,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Te.width,Te.height,Pe,Ce,Te.data):t.texImage2D(n.TEXTURE_2D,$,ye,Te.width,Te.height,0,Pe,Ce,Te.data)}else if(w.isDataArrayTexture)nt?(F&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,ye,H.width,H.height,H.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,Pe,Ce,H.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,H.width,H.height,H.depth,0,Pe,Ce,H.data);else if(w.isData3DTexture)nt?(F&&t.texStorage3D(n.TEXTURE_3D,Se,ye,H.width,H.height,H.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,Pe,Ce,H.data)):t.texImage3D(n.TEXTURE_3D,0,ye,H.width,H.height,H.depth,0,Pe,Ce,H.data);else if(w.isFramebufferTexture){if(F)if(nt)t.texStorage2D(n.TEXTURE_2D,Se,ye,H.width,H.height);else{let $=H.width,xe=H.height;for(let be=0;be<Se;be++)t.texImage2D(n.TEXTURE_2D,be,ye,$,xe,0,Pe,Ce,null),$>>=1,xe>>=1}}else if(We.length>0&&Ie){nt&&F&&t.texStorage2D(n.TEXTURE_2D,Se,ye,We[0].width,We[0].height);for(let $=0,xe=We.length;$<xe;$++)Te=We[$],nt?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Pe,Ce,Te):t.texImage2D(n.TEXTURE_2D,$,ye,Pe,Ce,Te);w.generateMipmaps=!1}else nt?(F&&t.texStorage2D(n.TEXTURE_2D,Se,ye,H.width,H.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Ce,H)):t.texImage2D(n.TEXTURE_2D,0,ye,Pe,Ce,H);D(w,Ie)&&I(z),ve.__version=ae.version,w.onUpdate&&w.onUpdate(w)}S.__version=w.version}function ot(S,w,N){if(w.image.length!==6)return;const z=Ne(S,w),ne=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+N);const ae=i.get(ne);if(ne.version!==ae.__version||z===!0){t.activeTexture(n.TEXTURE0+N),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ve=w.isCompressedTexture||w.image[0].isCompressedTexture,fe=w.image[0]&&w.image[0].isDataTexture,H=[];for(let $=0;$<6;$++)!ve&&!fe?H[$]=y(w.image[$],!1,!0,u):H[$]=fe?w.image[$].image:w.image[$],H[$]=_e(w,H[$]);const Ie=H[0],Pe=E(Ie)||o,Ce=r.convert(w.format,w.colorSpace),ye=r.convert(w.type),Te=J(w.internalFormat,Ce,ye,w.colorSpace),We=o&&w.isVideoTexture!==!0,nt=ae.__version===void 0||z===!0;let F=A(w,Ie,Pe);Ue(n.TEXTURE_CUBE_MAP,w,Pe);let Se;if(ve){We&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,F,Te,Ie.width,Ie.height);for(let $=0;$<6;$++){Se=H[$].mipmaps;for(let xe=0;xe<Se.length;xe++){const be=Se[xe];w.format!==pn?Ce!==null?We?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe,0,0,be.width,be.height,Ce,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe,Te,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe,0,0,be.width,be.height,Ce,ye,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe,Te,be.width,be.height,0,Ce,ye,be.data)}}}else{Se=w.mipmaps,We&&nt&&(Se.length>0&&F++,t.texStorage2D(n.TEXTURE_CUBE_MAP,F,Te,H[0].width,H[0].height));for(let $=0;$<6;$++)if(fe){We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,H[$].width,H[$].height,Ce,ye,H[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Te,H[$].width,H[$].height,0,Ce,ye,H[$].data);for(let xe=0;xe<Se.length;xe++){const Je=Se[xe].image[$].image;We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe+1,0,0,Je.width,Je.height,Ce,ye,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe+1,Te,Je.width,Je.height,0,Ce,ye,Je.data)}}else{We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,ye,H[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Te,Ce,ye,H[$]);for(let xe=0;xe<Se.length;xe++){const be=Se[xe];We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe+1,0,0,Ce,ye,be.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,xe+1,Te,Ce,ye,be.image[$])}}}D(w,Pe)&&I(n.TEXTURE_CUBE_MAP),ae.__version=ne.version,w.onUpdate&&w.onUpdate(w)}S.__version=w.version}function ke(S,w,N,z,ne,ae){const ve=r.convert(N.format,N.colorSpace),fe=r.convert(N.type),H=J(N.internalFormat,ve,fe,N.colorSpace);if(!i.get(w).__hasExternalTextures){const Pe=Math.max(1,w.width>>ae),Ce=Math.max(1,w.height>>ae);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,ae,H,Pe,Ce,w.depth,0,ve,fe,null):t.texImage2D(ne,ae,H,Pe,Ce,0,ve,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),le(w)?m.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,ne,i.get(N).__webglTexture,0,Z(w)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,ne,i.get(N).__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function x(S,w,N){if(n.bindRenderbuffer(n.RENDERBUFFER,S),w.depthBuffer&&!w.stencilBuffer){let z=n.DEPTH_COMPONENT16;if(N||le(w)){const ne=w.depthTexture;ne&&ne.isDepthTexture&&(ne.type===ii?z=n.DEPTH_COMPONENT32F:ne.type===ni&&(z=n.DEPTH_COMPONENT24));const ae=Z(w);le(w)?m.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,z,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,z,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,z,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(w.depthBuffer&&w.stencilBuffer){const z=Z(w);N&&le(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,w.width,w.height):le(w)?m.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{const z=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0;ne<z.length;ne++){const ae=z[ne],ve=r.convert(ae.format,ae.colorSpace),fe=r.convert(ae.type),H=J(ae.internalFormat,ve,fe,ae.colorSpace),Ie=Z(w);N&&le(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,H,w.width,w.height):le(w)?m.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,H,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,H,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function U(S,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ue(w.depthTexture,0);const z=i.get(w.depthTexture).__webglTexture,ne=Z(w);if(w.depthTexture.format===Ai)le(w)?m.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0);else if(w.depthTexture.format===gs)le(w)?m.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function B(S){const w=i.get(S),N=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!w.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");U(w.__webglFramebuffer,S)}else if(N){w.__webglDepthbuffer=[];for(let z=0;z<6;z++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[z]),w.__webglDepthbuffer[z]=n.createRenderbuffer(),x(w.__webglDepthbuffer[z],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),x(w.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function K(S,w,N){const z=i.get(S);w!==void 0&&ke(z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&B(S)}function X(S){const w=S.texture,N=i.get(S),z=i.get(w);S.addEventListener("dispose",me),S.isWebGLMultipleRenderTargets!==!0&&(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=w.version,a.memory.textures++);const ne=S.isWebGLCubeRenderTarget===!0,ae=S.isWebGLMultipleRenderTargets===!0,ve=E(S)||o;if(ne){N.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&w.mipmaps&&w.mipmaps.length>0){N.__webglFramebuffer[fe]=[];for(let H=0;H<w.mipmaps.length;H++)N.__webglFramebuffer[fe][H]=n.createFramebuffer()}else N.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){N.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)N.__webglFramebuffer[fe]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(ae)if(s.drawBuffers){const fe=S.texture;for(let H=0,Ie=fe.length;H<Ie;H++){const Pe=i.get(fe[H]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&le(S)===!1){const fe=ae?w:[w];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let H=0;H<fe.length;H++){const Ie=fe[H];N.__webglColorRenderbuffer[H]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[H]);const Pe=r.convert(Ie.format,Ie.colorSpace),Ce=r.convert(Ie.type),ye=J(Ie.internalFormat,Pe,Ce,Ie.colorSpace,S.isXRRenderTarget===!0),Te=Z(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,ye,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+H,n.RENDERBUFFER,N.__webglColorRenderbuffer[H])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),x(N.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,w,ve);for(let fe=0;fe<6;fe++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let H=0;H<w.mipmaps.length;H++)ke(N.__webglFramebuffer[fe][H],S,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,H);else ke(N.__webglFramebuffer[fe],S,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);D(w,ve)&&I(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){const fe=S.texture;for(let H=0,Ie=fe.length;H<Ie;H++){const Pe=fe[H],Ce=i.get(Pe);t.bindTexture(n.TEXTURE_2D,Ce.__webglTexture),Ue(n.TEXTURE_2D,Pe,ve),ke(N.__webglFramebuffer,S,Pe,n.COLOR_ATTACHMENT0+H,n.TEXTURE_2D,0),D(Pe,ve)&&I(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?fe=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,z.__webglTexture),Ue(fe,w,ve),o&&w.mipmaps&&w.mipmaps.length>0)for(let H=0;H<w.mipmaps.length;H++)ke(N.__webglFramebuffer[H],S,w,n.COLOR_ATTACHMENT0,fe,H);else ke(N.__webglFramebuffer,S,w,n.COLOR_ATTACHMENT0,fe,0);D(w,ve)&&I(fe),t.unbindTexture()}S.depthBuffer&&B(S)}function de(S){const w=E(S)||o,N=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let z=0,ne=N.length;z<ne;z++){const ae=N[z];if(D(ae,w)){const ve=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=i.get(ae).__webglTexture;t.bindTexture(ve,fe),I(ve),t.unbindTexture()}}}function he(S){if(o&&S.samples>0&&le(S)===!1){const w=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],N=S.width,z=S.height;let ne=n.COLOR_BUFFER_BIT;const ae=[],ve=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(S),H=S.isWebGLMultipleRenderTargets===!0;if(H)for(let Ie=0;Ie<w.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ie=0;Ie<w.length;Ie++){ae.push(n.COLOR_ATTACHMENT0+Ie),S.depthBuffer&&ae.push(ve);const Pe=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Pe===!1&&(S.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),H&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Ie]),Pe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ve]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ve])),H){const Ce=i.get(w[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ce,0)}n.blitFramebuffer(0,0,N,z,0,0,N,z,ne,n.NEAREST),_&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),H)for(let Ie=0;Ie<w.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Ie]);const Pe=i.get(w[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Z(S){return Math.min(p,S.samples)}function le(S){const w=i.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ce(S){const w=a.render.frame;M.get(S)!==w&&(M.set(S,w),S.update())}function _e(S,w){const N=S.colorSpace,z=S.format,ne=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===za||N!==Rn&&N!==Ci&&(N===rt||N===So?o===!1?e.has("EXT_sRGB")===!0&&z===pn?(S.format=za,S.minFilter=tn,S.generateMipmaps=!1):w=wf.sRGBToLinear(w):(z!==pn||ne!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),w}this.allocateTextureUnit=Q,this.resetTextureUnits=O,this.setTexture2D=ue,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=we,this.rebindTextures=K,this.setupRenderTarget=X,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=le}const uM=0,Mt=1;function dM(n,e,t){const i=t.isWebGL2;function s(r,a=Ci){let o;const l=a===rt||a===So?Mt:uM;if(r===li)return n.UNSIGNED_BYTE;if(r===hf)return n.UNSIGNED_SHORT_4_4_4_4;if(r===pf)return n.UNSIGNED_SHORT_5_5_5_1;if(r===G_)return n.BYTE;if(r===V_)return n.SHORT;if(r===ml)return n.UNSIGNED_SHORT;if(r===ff)return n.INT;if(r===ni)return n.UNSIGNED_INT;if(r===ii)return n.FLOAT;if(r===tr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===W_)return n.ALPHA;if(r===pn)return n.RGBA;if(r===X_)return n.LUMINANCE;if(r===q_)return n.LUMINANCE_ALPHA;if(r===Ai)return n.DEPTH_COMPONENT;if(r===gs)return n.DEPTH_STENCIL;if(r===za)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===j_)return n.RED;if(r===mf)return n.RED_INTEGER;if(r===Y_)return n.RG;if(r===gf)return n.RG_INTEGER;if(r===_f)return n.RGBA_INTEGER;if(r===qo||r===jo||r===Yo||r===Ko)if(l===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===qo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===qo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ko)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zc||r===kc||r===Gc||r===Vc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===zc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===K_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wc||r===Xc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Wc)return l===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Xc)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qc||r===jc||r===Yc||r===Kc||r===Qc||r===Zc||r===Jc||r===$c||r===eu||r===tu||r===nu||r===iu||r===su||r===ru)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===qc)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jc)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yc)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kc)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qc)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zc)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jc)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$c)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===eu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===iu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===su)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ru)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qo||r===ou||r===au)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Qo)return l===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ou)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===au)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Q_||r===lu||r===cu||r===uu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Qo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===lu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ei?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class fM extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gs extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hM={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const b of e.hand.values()){const h=t.getJointPose(b,i),g=this._getHandJoint(u,b);h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=h.radius),g.visible=h!==null}const f=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=f.position.distanceTo(p.position),_=.02,M=.005;u.inputState.pinching&&m>_+M?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=_-M&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class pM extends Yt{constructor(e,t,i,s,r,a,o,l,u,f){if(f=f!==void 0?f:Ai,f!==Ai&&f!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ai&&(i=ni),i===void 0&&f===gs&&(i=Ei),super(null,s,r,a,o,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class mM extends ys{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,u=null,f=null,p=null,m=null,_=null,M=null;const b=t.getContextAttributes();let h=null,g=null;const T=[],y=[],E=new nn;E.layers.enable(1),E.viewport=new Tt;const P=new nn;P.layers.enable(2),P.viewport=new Tt;const D=[E,P],I=new fM;I.layers.enable(1),I.layers.enable(2);let J=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Y=T[W];return Y===void 0&&(Y=new wa,T[W]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(W){let Y=T[W];return Y===void 0&&(Y=new wa,T[W]=Y),Y.getGripSpace()},this.getHand=function(W){let Y=T[W];return Y===void 0&&(Y=new wa,T[W]=Y),Y.getHandSpace()};function L(W){const Y=y.indexOf(W.inputSource);if(Y===-1)return;const we=T[Y];we!==void 0&&(we.update(W.inputSource,W.frame,u||a),we.dispatchEvent({type:W.type,data:W.inputSource}))}function pe(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",pe),s.removeEventListener("inputsourceschange",me);for(let W=0;W<T.length;W++){const Y=y[W];Y!==null&&(y[W]=null,T[W].disconnect(Y))}J=null,A=null,e.setRenderTarget(h),_=null,m=null,p=null,s=null,g=null,ue.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return p},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",pe),s.addEventListener("inputsourceschange",me),b.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:s.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,t,Y),s.updateRenderState({baseLayer:_}),g=new Li(_.framebufferWidth,_.framebufferHeight,{format:pn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let Y=null,we=null,Ae=null;b.depth&&(Ae=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=b.stencil?gs:Ai,we=b.stencil?Ei:ni);const Ee={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};p=new XRWebGLBinding(s,t),m=p.createProjectionLayer(Ee),s.updateRenderState({layers:[m]}),g=new Li(m.textureWidth,m.textureHeight,{format:pn,type:li,depthTexture:new pM(m.textureWidth,m.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});const Le=e.properties.get(g);Le.__ignoreDepthValues=m.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function me(W){for(let Y=0;Y<W.removed.length;Y++){const we=W.removed[Y],Ae=y.indexOf(we);Ae>=0&&(y[Ae]=null,T[Ae].disconnect(we))}for(let Y=0;Y<W.added.length;Y++){const we=W.added[Y];let Ae=y.indexOf(we);if(Ae===-1){for(let Le=0;Le<T.length;Le++)if(Le>=y.length){y.push(we),Ae=Le;break}else if(y[Le]===null){y[Le]=we,Ae=Le;break}if(Ae===-1)break}const Ee=T[Ae];Ee&&Ee.connect(we)}}const V=new k,j=new k;function ee(W,Y,we){V.setFromMatrixPosition(Y.matrixWorld),j.setFromMatrixPosition(we.matrixWorld);const Ae=V.distanceTo(j),Ee=Y.projectionMatrix.elements,Le=we.projectionMatrix.elements,Ue=Ee[14]/(Ee[10]-1),Ne=Ee[14]/(Ee[10]+1),Ge=(Ee[9]+1)/Ee[5],ot=(Ee[9]-1)/Ee[5],ke=(Ee[8]-1)/Ee[0],x=(Le[8]+1)/Le[0],U=Ue*ke,B=Ue*x,K=Ae/(-ke+x),X=K*-ke;Y.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(X),W.translateZ(K),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const de=Ue+K,he=Ne+K,Z=U-X,le=B+(Ae-X),ce=Ge*Ne/he*de,_e=ot*Ne/he*de;W.projectionMatrix.makePerspective(Z,le,ce,_e,de,he),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ie(W,Y){Y===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Y.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;I.near=P.near=E.near=W.near,I.far=P.far=E.far=W.far,(J!==I.near||A!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),J=I.near,A=I.far);const Y=W.parent,we=I.cameras;ie(I,Y);for(let Ae=0;Ae<we.length;Ae++)ie(we[Ae],Y);we.length===2?ee(I,E,P):I.projectionMatrix.copy(E.projectionMatrix),O(W,I,Y)};function O(W,Y,we){we===null?W.matrix.copy(Y.matrixWorld):(W.matrix.copy(we.matrixWorld),W.matrix.invert(),W.matrix.multiply(Y.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Y.projectionMatrix),W.projectionMatrixInverse.copy(Y.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ka*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(m===null&&_===null))return l},this.setFoveation=function(W){l=W,m!==null&&(m.fixedFoveation=W),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=W)};let Q=null;function ge(W,Y){if(f=Y.getViewerPose(u||a),M=Y,f!==null){const we=f.views;_!==null&&(e.setRenderTargetFramebuffer(g,_.framebuffer),e.setRenderTarget(g));let Ae=!1;we.length!==I.cameras.length&&(I.cameras.length=0,Ae=!0);for(let Ee=0;Ee<we.length;Ee++){const Le=we[Ee];let Ue=null;if(_!==null)Ue=_.getViewport(Le);else{const Ge=p.getViewSubImage(m,Le);Ue=Ge.viewport,Ee===0&&(e.setRenderTargetTextures(g,Ge.colorTexture,m.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(g))}let Ne=D[Ee];Ne===void 0&&(Ne=new nn,Ne.layers.enable(Ee),Ne.viewport=new Tt,D[Ee]=Ne),Ne.matrix.fromArray(Le.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Le.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Ee===0&&(I.matrix.copy(Ne.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ae===!0&&I.cameras.push(Ne)}}for(let we=0;we<T.length;we++){const Ae=y[we],Ee=T[we];Ae!==null&&Ee!==void 0&&Ee.update(Ae,Y,u||a)}Q&&Q(W,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),M=null}const ue=new Lf;ue.setAnimationLoop(ge),this.setAnimationLoop=function(W){Q=W},this.dispose=function(){}}}function gM(n,e){function t(h,g){h.matrixAutoUpdate===!0&&h.updateMatrix(),g.value.copy(h.matrix)}function i(h,g){g.color.getRGB(h.fogColor.value,Tf(n)),g.isFog?(h.fogNear.value=g.near,h.fogFar.value=g.far):g.isFogExp2&&(h.fogDensity.value=g.density)}function s(h,g,T,y,E){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(h,g):g.isMeshToonMaterial?(r(h,g),p(h,g)):g.isMeshPhongMaterial?(r(h,g),f(h,g)):g.isMeshStandardMaterial?(r(h,g),m(h,g),g.isMeshPhysicalMaterial&&_(h,g,E)):g.isMeshMatcapMaterial?(r(h,g),M(h,g)):g.isMeshDepthMaterial?r(h,g):g.isMeshDistanceMaterial?(r(h,g),b(h,g)):g.isMeshNormalMaterial?r(h,g):g.isLineBasicMaterial?(a(h,g),g.isLineDashedMaterial&&o(h,g)):g.isPointsMaterial?l(h,g,T,y):g.isSpriteMaterial?u(h,g):g.isShadowMaterial?(h.color.value.copy(g.color),h.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(h,g){h.opacity.value=g.opacity,g.color&&h.diffuse.value.copy(g.color),g.emissive&&h.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(h.map.value=g.map,t(g.map,h.mapTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,t(g.alphaMap,h.alphaMapTransform)),g.bumpMap&&(h.bumpMap.value=g.bumpMap,t(g.bumpMap,h.bumpMapTransform),h.bumpScale.value=g.bumpScale,g.side===jt&&(h.bumpScale.value*=-1)),g.normalMap&&(h.normalMap.value=g.normalMap,t(g.normalMap,h.normalMapTransform),h.normalScale.value.copy(g.normalScale),g.side===jt&&h.normalScale.value.negate()),g.displacementMap&&(h.displacementMap.value=g.displacementMap,t(g.displacementMap,h.displacementMapTransform),h.displacementScale.value=g.displacementScale,h.displacementBias.value=g.displacementBias),g.emissiveMap&&(h.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,h.emissiveMapTransform)),g.specularMap&&(h.specularMap.value=g.specularMap,t(g.specularMap,h.specularMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest);const T=e.get(g).envMap;if(T&&(h.envMap.value=T,h.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=g.reflectivity,h.ior.value=g.ior,h.refractionRatio.value=g.refractionRatio),g.lightMap){h.lightMap.value=g.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=g.lightMapIntensity*y,t(g.lightMap,h.lightMapTransform)}g.aoMap&&(h.aoMap.value=g.aoMap,h.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,h.aoMapTransform))}function a(h,g){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,g.map&&(h.map.value=g.map,t(g.map,h.mapTransform))}function o(h,g){h.dashSize.value=g.dashSize,h.totalSize.value=g.dashSize+g.gapSize,h.scale.value=g.scale}function l(h,g,T,y){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,h.size.value=g.size*T,h.scale.value=y*.5,g.map&&(h.map.value=g.map,t(g.map,h.uvTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,t(g.alphaMap,h.alphaMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest)}function u(h,g){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,h.rotation.value=g.rotation,g.map&&(h.map.value=g.map,t(g.map,h.mapTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,t(g.alphaMap,h.alphaMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest)}function f(h,g){h.specular.value.copy(g.specular),h.shininess.value=Math.max(g.shininess,1e-4)}function p(h,g){g.gradientMap&&(h.gradientMap.value=g.gradientMap)}function m(h,g){h.metalness.value=g.metalness,g.metalnessMap&&(h.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,h.metalnessMapTransform)),h.roughness.value=g.roughness,g.roughnessMap&&(h.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,h.roughnessMapTransform)),e.get(g).envMap&&(h.envMapIntensity.value=g.envMapIntensity)}function _(h,g,T){h.ior.value=g.ior,g.sheen>0&&(h.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),h.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(h.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,h.sheenColorMapTransform)),g.sheenRoughnessMap&&(h.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,h.sheenRoughnessMapTransform))),g.clearcoat>0&&(h.clearcoat.value=g.clearcoat,h.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(h.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,h.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(h.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===jt&&h.clearcoatNormalScale.value.negate())),g.iridescence>0&&(h.iridescence.value=g.iridescence,h.iridescenceIOR.value=g.iridescenceIOR,h.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(h.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,h.iridescenceMapTransform)),g.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),g.transmission>0&&(h.transmission.value=g.transmission,h.transmissionSamplerMap.value=T.texture,h.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(h.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,h.transmissionMapTransform)),h.thickness.value=g.thickness,g.thicknessMap&&(h.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=g.attenuationDistance,h.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(h.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(h.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=g.specularIntensity,h.specularColor.value.copy(g.specularColor),g.specularColorMap&&(h.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,h.specularColorMapTransform)),g.specularIntensityMap&&(h.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,h.specularIntensityMapTransform))}function M(h,g){g.matcap&&(h.matcap.value=g.matcap)}function b(h,g){const T=e.get(g).light;h.referencePosition.value.setFromMatrixPosition(T.matrixWorld),h.nearDistance.value=T.shadow.camera.near,h.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _M(n,e,t,i){let s={},r={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,y){const E=y.program;i.uniformBlockBinding(T,E)}function u(T,y){let E=s[T.id];E===void 0&&(M(T),E=f(T),s[T.id]=E,T.addEventListener("dispose",h));const P=y.program;i.updateUBOMapping(T,P);const D=e.render.frame;r[T.id]!==D&&(m(T),r[T.id]=D)}function f(T){const y=p();T.__bindingPointIndex=y;const E=n.createBuffer(),P=T.__size,D=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,P,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function p(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){const y=s[T.id],E=T.uniforms,P=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let D=0,I=E.length;D<I;D++){const J=E[D];if(_(J,D,P)===!0){const A=J.__offset,L=Array.isArray(J.value)?J.value:[J.value];let pe=0;for(let me=0;me<L.length;me++){const V=L[me],j=b(V);typeof V=="number"?(J.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,A+pe,J.__data)):V.isMatrix3?(J.__data[0]=V.elements[0],J.__data[1]=V.elements[1],J.__data[2]=V.elements[2],J.__data[3]=V.elements[0],J.__data[4]=V.elements[3],J.__data[5]=V.elements[4],J.__data[6]=V.elements[5],J.__data[7]=V.elements[0],J.__data[8]=V.elements[6],J.__data[9]=V.elements[7],J.__data[10]=V.elements[8],J.__data[11]=V.elements[0]):(V.toArray(J.__data,pe),pe+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,A,J.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(T,y,E){const P=T.value;if(E[y]===void 0){if(typeof P=="number")E[y]=P;else{const D=Array.isArray(P)?P:[P],I=[];for(let J=0;J<D.length;J++)I.push(D[J].clone());E[y]=I}return!0}else if(typeof P=="number"){if(E[y]!==P)return E[y]=P,!0}else{const D=Array.isArray(E[y])?E[y]:[E[y]],I=Array.isArray(P)?P:[P];for(let J=0;J<D.length;J++){const A=D[J];if(A.equals(I[J])===!1)return A.copy(I[J]),!0}}return!1}function M(T){const y=T.uniforms;let E=0;const P=16;let D=0;for(let I=0,J=y.length;I<J;I++){const A=y[I],L={boundary:0,storage:0},pe=Array.isArray(A.value)?A.value:[A.value];for(let me=0,V=pe.length;me<V;me++){const j=pe[me],ee=b(j);L.boundary+=ee.boundary,L.storage+=ee.storage}if(A.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=E,I>0){D=E%P;const me=P-D;D!==0&&me-L.boundary<0&&(E+=P-D,A.__offset=E)}E+=L.storage}return D=E%P,D>0&&(E+=P-D),T.__size=E,T.__cache={},this}function b(T){const y={boundary:0,storage:0};return typeof T=="number"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function h(T){const y=T.target;y.removeEventListener("dispose",h);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(const T in s)n.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:u,dispose:g}}class Nf{constructor(e={}){const{canvas:t=uv(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;i!==null?m=i.getContextAttributes().alpha:m=a;const _=new Uint32Array(4),M=new Int32Array(4);let b=null,h=null;const g=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=rt,this._useLegacyLights=!1,this.toneMapping=ai,this.toneMappingExposure=1;const y=this;let E=!1,P=0,D=0,I=null,J=-1,A=null;const L=new Tt,pe=new Tt;let me=null;const V=new Ze(0);let j=0,ee=t.width,ie=t.height,O=1,Q=null,ge=null;const ue=new Tt(0,0,ee,ie),W=new Tt(0,0,ee,ie);let Y=!1;const we=new xl;let Ae=!1,Ee=!1,Le=null;const Ue=new vt,Ne=new et,Ge=new k,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return I===null?O:1}let x=i;function U(C,G){for(let se=0;se<C.length;se++){const q=C[se],re=t.getContext(q,G);if(re!==null)return re}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hl}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",xe,!1),x===null){const G=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&G.shift(),x=U(G,C),x===null)throw U(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&x instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),x.getShaderPrecisionFormat===void 0&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let B,K,X,de,he,Z,le,ce,_e,S,w,N,z,ne,ae,ve,fe,H,Ie,Pe,Ce,ye,Te,We;function nt(){B=new Tw(x),K=new bw(x,B,e),B.init(K),ye=new dM(x,B,K),X=new lM(x,B,K),de=new Lw(x),he=new Yb,Z=new cM(x,B,X,he,K,ye,de),le=new yw(y),ce=new Aw(y),_e=new zv(x,K),Te=new xw(x,B,_e,K),S=new Cw(x,_e,de,Te),w=new Uw(x,S,_e,de),Ie=new Iw(x,K,Z),ve=new Mw(he),N=new jb(y,le,ce,B,K,Te,ve),z=new gM(y,he),ne=new Qb,ae=new nM(B,K),H=new vw(y,le,ce,X,w,m,l),fe=new aM(y,w,K),We=new _M(x,de,K,X),Pe=new ww(x,B,de,K),Ce=new Rw(x,B,de,K),de.programs=N.programs,y.capabilities=K,y.extensions=B,y.properties=he,y.renderLists=ne,y.shadowMap=fe,y.state=X,y.info=de}nt();const F=new mM(y,x);this.xr=F,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const C=B.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=B.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(ee,ie,!1))},this.getSize=function(C){return C.set(ee,ie)},this.setSize=function(C,G,se=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=C,ie=G,t.width=Math.floor(C*O),t.height=Math.floor(G*O),se===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(ee*O,ie*O).floor()},this.setDrawingBufferSize=function(C,G,se){ee=C,ie=G,O=se,t.width=Math.floor(C*se),t.height=Math.floor(G*se),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(ue)},this.setViewport=function(C,G,se,q){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,G,se,q),X.viewport(L.copy(ue).multiplyScalar(O).floor())},this.getScissor=function(C){return C.copy(W)},this.setScissor=function(C,G,se,q){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,G,se,q),X.scissor(pe.copy(W).multiplyScalar(O).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(C){X.setScissorTest(Y=C)},this.setOpaqueSort=function(C){Q=C},this.setTransparentSort=function(C){ge=C},this.getClearColor=function(C){return C.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(C=!0,G=!0,se=!0){let q=0;if(C){let re=!1;if(I!==null){const Re=I.texture.format;re=Re===_f||Re===gf||Re===mf}if(re){const Re=I.texture.type,Oe=Re===li||Re===ni||Re===ml||Re===Ei||Re===hf||Re===pf,ze=H.getClearColor(),Be=H.getClearAlpha(),Xe=ze.r,He=ze.g,Fe=ze.b;Oe?(_[0]=Xe,_[1]=He,_[2]=Fe,_[3]=Be,x.clearBufferuiv(x.COLOR,0,_)):(M[0]=Xe,M[1]=He,M[2]=Fe,M[3]=Be,x.clearBufferiv(x.COLOR,0,M))}else q|=x.COLOR_BUFFER_BIT}G&&(q|=x.DEPTH_BUFFER_BIT),se&&(q|=x.STENCIL_BUFFER_BIT),x.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),ne.dispose(),ae.dispose(),he.dispose(),le.dispose(),ce.dispose(),w.dispose(),Te.dispose(),We.dispose(),N.dispose(),F.dispose(),F.removeEventListener("sessionstart",it),F.removeEventListener("sessionend",Gt),Le&&(Le.dispose(),Le=null),Rt.stop()};function Se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=de.autoReset,G=fe.enabled,se=fe.autoUpdate,q=fe.needsUpdate,re=fe.type;nt(),de.autoReset=C,fe.enabled=G,fe.autoUpdate=se,fe.needsUpdate=q,fe.type=re}function xe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function be(C){const G=C.target;G.removeEventListener("dispose",be),Je(G)}function Je(C){st(C),he.remove(C)}function st(C){const G=he.get(C).programs;G!==void 0&&(G.forEach(function(se){N.releaseProgram(se)}),C.isShaderMaterial&&N.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,se,q,re,Re){G===null&&(G=ot);const Oe=re.isMesh&&re.matrixWorld.determinant()<0,ze=Ro(C,G,se,q,re);X.setMaterial(q,Oe);let Be=se.index,Xe=1;if(q.wireframe===!0){if(Be=S.getWireframeAttribute(se),Be===void 0)return;Xe=2}const He=se.drawRange,Fe=se.attributes.position;let at=He.start*Xe,ct=(He.start+He.count)*Xe;Re!==null&&(at=Math.max(at,Re.start*Xe),ct=Math.min(ct,(Re.start+Re.count)*Xe)),Be!==null?(at=Math.max(at,0),ct=Math.min(ct,Be.count)):Fe!=null&&(at=Math.max(at,0),ct=Math.min(ct,Fe.count));const Vt=ct-at;if(Vt<0||Vt===1/0)return;Te.setup(re,q,ze,se,Be);let Jt,pt=Pe;if(Be!==null&&(Jt=_e.get(Be),pt=Ce,pt.setIndex(Jt)),re.isMesh)q.wireframe===!0?(X.setLineWidth(q.wireframeLinewidth*ke()),pt.setMode(x.LINES)):pt.setMode(x.TRIANGLES);else if(re.isLine){let je=q.linewidth;je===void 0&&(je=1),X.setLineWidth(je*ke()),re.isLineSegments?pt.setMode(x.LINES):re.isLineLoop?pt.setMode(x.LINE_LOOP):pt.setMode(x.LINE_STRIP)}else re.isPoints?pt.setMode(x.POINTS):re.isSprite&&pt.setMode(x.TRIANGLES);if(re.isInstancedMesh)pt.renderInstances(at,Vt,re.count);else if(se.isInstancedBufferGeometry){const je=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,As=Math.min(se.instanceCount,je);pt.renderInstances(at,Vt,As)}else pt.render(at,Vt)},this.compile=function(C,G){function se(q,re,Re){q.transparent===!0&&q.side===Gn&&q.forceSinglePass===!1?(q.side=jt,q.needsUpdate=!0,jn(q,re,Re),q.side=Xn,q.needsUpdate=!0,jn(q,re,Re),q.side=Gn):jn(q,re,Re)}h=ae.get(C),h.init(),T.push(h),C.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(h.pushLight(q),q.castShadow&&h.pushShadow(q))}),h.setupLights(y._useLegacyLights),C.traverse(function(q){const re=q.material;if(re)if(Array.isArray(re))for(let Re=0;Re<re.length;Re++){const Oe=re[Re];se(Oe,C,q)}else se(re,C,q)}),T.pop(),h=null};let ht=null;function xn(C){ht&&ht(C)}function it(){Rt.stop()}function Gt(){Rt.start()}const Rt=new Lf;Rt.setAnimationLoop(xn),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(C){ht=C,F.setAnimationLoop(C),C===null?Rt.stop():Rt.start()},F.addEventListener("sessionstart",it),F.addEventListener("sessionend",Gt),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(G),G=F.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,G,I),h=ae.get(C,T.length),h.init(),T.push(h),Ue.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),we.setFromProjectionMatrix(Ue),Ee=this.localClippingEnabled,Ae=ve.init(this.clippingPlanes,Ee),b=ne.get(C,g.length),b.init(),g.push(b),cr(C,G,0,y.sortObjects),b.finish(),y.sortObjects===!0&&b.sort(Q,ge),this.info.render.frame++,Ae===!0&&ve.beginShadows();const se=h.state.shadowsArray;if(fe.render(se,C,G),Ae===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(b,C),h.setupLights(y._useLegacyLights),G.isArrayCamera){const q=G.cameras;for(let re=0,Re=q.length;re<Re;re++){const Oe=q[re];wn(b,C,Oe,Oe.viewport)}}else wn(b,C,G);I!==null&&(Z.updateMultisampleRenderTarget(I),Z.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(y,C,G),Te.resetDefaultState(),J=-1,A=null,T.pop(),T.length>0?h=T[T.length-1]:h=null,g.pop(),g.length>0?b=g[g.length-1]:b=null};function cr(C,G,se,q){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)h.pushLight(C),C.castShadow&&h.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||we.intersectsSprite(C)){q&&Ge.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ue);const Oe=w.update(C),ze=C.material;ze.visible&&b.push(C,Oe,ze,se,Ge.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||we.intersectsObject(C))){const Oe=w.update(C),ze=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ge.copy(C.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ge.copy(Oe.boundingSphere.center)),Ge.applyMatrix4(C.matrixWorld).applyMatrix4(Ue)),Array.isArray(ze)){const Be=Oe.groups;for(let Xe=0,He=Be.length;Xe<He;Xe++){const Fe=Be[Xe],at=ze[Fe.materialIndex];at&&at.visible&&b.push(C,Oe,at,se,Ge.z,Fe)}}else ze.visible&&b.push(C,Oe,ze,se,Ge.z,null)}}const Re=C.children;for(let Oe=0,ze=Re.length;Oe<ze;Oe++)cr(Re[Oe],G,se,q)}function wn(C,G,se,q){const re=C.opaque,Re=C.transmissive,Oe=C.transparent;h.setupLightsView(se),Ae===!0&&ve.setGlobalState(y.clippingPlanes,se),Re.length>0&&Co(re,Re,G,se),q&&X.viewport(L.copy(q)),re.length>0&&Di(re,G,se),Re.length>0&&Di(Re,G,se),Oe.length>0&&Di(Oe,G,se),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Co(C,G,se,q){const re=K.isWebGL2;Le===null&&(Le=new Li(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")?tr:li,minFilter:er,samples:re?4:0})),y.getDrawingBufferSize(Ne),re?Le.setSize(Ne.x,Ne.y):Le.setSize(Ga(Ne.x),Ga(Ne.y));const Re=y.getRenderTarget();y.setRenderTarget(Le),y.getClearColor(V),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear();const Oe=y.toneMapping;y.toneMapping=ai,Di(C,se,q),Z.updateMultisampleRenderTarget(Le),Z.updateRenderTargetMipmap(Le);let ze=!1;for(let Be=0,Xe=G.length;Be<Xe;Be++){const He=G[Be],Fe=He.object,at=He.geometry,ct=He.material,Vt=He.group;if(ct.side===Gn&&Fe.layers.test(q.layers)){const Jt=ct.side;ct.side=jt,ct.needsUpdate=!0,ur(Fe,se,q,at,ct,Vt),ct.side=Jt,ct.needsUpdate=!0,ze=!0}}ze===!0&&(Z.updateMultisampleRenderTarget(Le),Z.updateRenderTargetMipmap(Le)),y.setRenderTarget(Re),y.setClearColor(V,j),y.toneMapping=Oe}function Di(C,G,se){const q=G.isScene===!0?G.overrideMaterial:null;for(let re=0,Re=C.length;re<Re;re++){const Oe=C[re],ze=Oe.object,Be=Oe.geometry,Xe=q===null?Oe.material:q,He=Oe.group;ze.layers.test(se.layers)&&ur(ze,G,se,Be,Xe,He)}}function ur(C,G,se,q,re,Re){C.onBeforeRender(y,G,se,q,re,Re),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),re.onBeforeRender(y,G,se,q,C,Re),re.transparent===!0&&re.side===Gn&&re.forceSinglePass===!1?(re.side=jt,re.needsUpdate=!0,y.renderBufferDirect(se,G,q,re,C,Re),re.side=Xn,re.needsUpdate=!0,y.renderBufferDirect(se,G,q,re,C,Re),re.side=Gn):y.renderBufferDirect(se,G,q,re,C,Re),C.onAfterRender(y,G,se,q,re,Re)}function jn(C,G,se){G.isScene!==!0&&(G=ot);const q=he.get(C),re=h.state.lights,Re=h.state.shadowsArray,Oe=re.state.version,ze=N.getParameters(C,re.state,Re,G,se),Be=N.getProgramCacheKey(ze);let Xe=q.programs;q.environment=C.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(C.isMeshStandardMaterial?ce:le).get(C.envMap||q.environment),Xe===void 0&&(C.addEventListener("dispose",be),Xe=new Map,q.programs=Xe);let He=Xe.get(Be);if(He!==void 0){if(q.currentProgram===He&&q.lightsStateVersion===Oe)return dr(C,ze),He}else ze.uniforms=N.getUniforms(C),C.onBuild(se,ze,y),C.onBeforeCompile(ze,y),He=N.acquireProgram(ze,Be),Xe.set(Be,He),q.uniforms=ze.uniforms;const Fe=q.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Fe.clippingPlanes=ve.uniform),dr(C,ze),q.needsLights=Po(C),q.lightsStateVersion=Oe,q.needsLights&&(Fe.ambientLightColor.value=re.state.ambient,Fe.lightProbe.value=re.state.probe,Fe.directionalLights.value=re.state.directional,Fe.directionalLightShadows.value=re.state.directionalShadow,Fe.spotLights.value=re.state.spot,Fe.spotLightShadows.value=re.state.spotShadow,Fe.rectAreaLights.value=re.state.rectArea,Fe.ltc_1.value=re.state.rectAreaLTC1,Fe.ltc_2.value=re.state.rectAreaLTC2,Fe.pointLights.value=re.state.point,Fe.pointLightShadows.value=re.state.pointShadow,Fe.hemisphereLights.value=re.state.hemi,Fe.directionalShadowMap.value=re.state.directionalShadowMap,Fe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Fe.spotShadowMap.value=re.state.spotShadowMap,Fe.spotLightMatrix.value=re.state.spotLightMatrix,Fe.spotLightMap.value=re.state.spotLightMap,Fe.pointShadowMap.value=re.state.pointShadowMap,Fe.pointShadowMatrix.value=re.state.pointShadowMatrix);const at=He.getUniforms(),ct=to.seqWithValue(at.seq,Fe);return q.currentProgram=He,q.uniformsList=ct,He}function dr(C,G){const se=he.get(C);se.outputColorSpace=G.outputColorSpace,se.instancing=G.instancing,se.instancingColor=G.instancingColor,se.skinning=G.skinning,se.morphTargets=G.morphTargets,se.morphNormals=G.morphNormals,se.morphColors=G.morphColors,se.morphTargetsCount=G.morphTargetsCount,se.numClippingPlanes=G.numClippingPlanes,se.numIntersection=G.numClipIntersection,se.vertexAlphas=G.vertexAlphas,se.vertexTangents=G.vertexTangents,se.toneMapping=G.toneMapping}function Ro(C,G,se,q,re){G.isScene!==!0&&(G=ot),Z.resetTextureUnits();const Re=G.fog,Oe=q.isMeshStandardMaterial?G.environment:null,ze=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Rn,Be=(q.isMeshStandardMaterial?ce:le).get(q.envMap||Oe),Xe=q.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,He=!!se.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Fe=!!se.morphAttributes.position,at=!!se.morphAttributes.normal,ct=!!se.morphAttributes.color;let Vt=ai;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Vt=y.toneMapping);const Jt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,pt=Jt!==void 0?Jt.length:0,je=he.get(q),As=h.state.lights;if(Ae===!0&&(Ee===!0||C!==A)){const Ot=C===A&&q.id===J;ve.setState(q,C,Ot)}let ut=!1;q.version===je.__version?(je.needsLights&&je.lightsStateVersion!==As.state.version||je.outputColorSpace!==ze||re.isInstancedMesh&&je.instancing===!1||!re.isInstancedMesh&&je.instancing===!0||re.isSkinnedMesh&&je.skinning===!1||!re.isSkinnedMesh&&je.skinning===!0||re.isInstancedMesh&&je.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&je.instancingColor===!1&&re.instanceColor!==null||je.envMap!==Be||q.fog===!0&&je.fog!==Re||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ve.numPlanes||je.numIntersection!==ve.numIntersection)||je.vertexAlphas!==Xe||je.vertexTangents!==He||je.morphTargets!==Fe||je.morphNormals!==at||je.morphColors!==ct||je.toneMapping!==Vt||K.isWebGL2===!0&&je.morphTargetsCount!==pt)&&(ut=!0):(ut=!0,je.__version=q.version);let Pn=je.currentProgram;ut===!0&&(Pn=jn(q,G,re));let Ts=!1,ui=!1,Cs=!1;const Lt=Pn.getUniforms(),Dn=je.uniforms;if(X.useProgram(Pn.program)&&(Ts=!0,ui=!0,Cs=!0),q.id!==J&&(J=q.id,ui=!0),Ts||A!==C){Lt.setValue(x,"projectionMatrix",C.projectionMatrix),Lt.setValue(x,"viewMatrix",C.matrixWorldInverse);const Ot=Lt.map.cameraPosition;Ot!==void 0&&Ot.setValue(x,Ge.setFromMatrixPosition(C.matrixWorld)),K.logarithmicDepthBuffer&&Lt.setValue(x,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Lt.setValue(x,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,ui=!0,Cs=!0)}if(re.isSkinnedMesh){Lt.setOptional(x,re,"bindMatrix"),Lt.setOptional(x,re,"bindMatrixInverse");const Ot=re.skeleton;Ot&&(K.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),Lt.setValue(x,"boneTexture",Ot.boneTexture,Z),Lt.setValue(x,"boneTextureSize",Ot.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Rs=se.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0&&K.isWebGL2===!0)&&Ie.update(re,se,Pn),(ui||je.receiveShadow!==re.receiveShadow)&&(je.receiveShadow=re.receiveShadow,Lt.setValue(x,"receiveShadow",re.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Dn.envMap.value=Be,Dn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ui&&(Lt.setValue(x,"toneMappingExposure",y.toneMappingExposure),je.needsLights&&Lo(Dn,Cs),Re&&q.fog===!0&&z.refreshFogUniforms(Dn,Re),z.refreshMaterialUniforms(Dn,q,O,ie,Le),to.upload(x,je.uniformsList,Dn,Z)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(to.upload(x,je.uniformsList,Dn,Z),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Lt.setValue(x,"center",re.center),Lt.setValue(x,"modelViewMatrix",re.modelViewMatrix),Lt.setValue(x,"normalMatrix",re.normalMatrix),Lt.setValue(x,"modelMatrix",re.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ot=q.uniformsGroups;for(let Ls=0,fr=Ot.length;Ls<fr;Ls++)if(K.isWebGL2){const hr=Ot[Ls];We.update(hr,Pn),We.bind(hr,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function Lo(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Po(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,G,se){he.get(C.texture).__webglTexture=G,he.get(C.depthTexture).__webglTexture=se;const q=he.get(C);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=se===void 0,q.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,G){const se=he.get(C);se.__webglFramebuffer=G,se.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,se=0){I=C,P=G,D=se;let q=!0,re=null,Re=!1,Oe=!1;if(C){const Be=he.get(C);Be.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(x.FRAMEBUFFER,null),q=!1):Be.__webglFramebuffer===void 0?Z.setupRenderTarget(C):Be.__hasExternalTextures&&Z.rebindTextures(C,he.get(C.texture).__webglTexture,he.get(C.depthTexture).__webglTexture);const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Oe=!0);const He=he.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(He[G])?re=He[G][se]:re=He[G],Re=!0):K.isWebGL2&&C.samples>0&&Z.useMultisampledRTT(C)===!1?re=he.get(C).__webglMultisampledFramebuffer:Array.isArray(He)?re=He[se]:re=He,L.copy(C.viewport),pe.copy(C.scissor),me=C.scissorTest}else L.copy(ue).multiplyScalar(O).floor(),pe.copy(W).multiplyScalar(O).floor(),me=Y;if(X.bindFramebuffer(x.FRAMEBUFFER,re)&&K.drawBuffers&&q&&X.drawBuffers(C,re),X.viewport(L),X.scissor(pe),X.setScissorTest(me),Re){const Be=he.get(C.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+G,Be.__webglTexture,se)}else if(Oe){const Be=he.get(C.texture),Xe=G||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Be.__webglTexture,se||0,Xe)}J=-1},this.readRenderTargetPixels=function(C,G,se,q,re,Re,Oe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=he.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){X.bindFramebuffer(x.FRAMEBUFFER,ze);try{const Be=C.texture,Xe=Be.format,He=Be.type;if(Xe!==pn&&ye.convert(Xe)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=He===tr&&(B.has("EXT_color_buffer_half_float")||K.isWebGL2&&B.has("EXT_color_buffer_float"));if(He!==li&&ye.convert(He)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===ii&&(K.isWebGL2||B.has("OES_texture_float")||B.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-q&&se>=0&&se<=C.height-re&&x.readPixels(G,se,q,re,ye.convert(Xe),ye.convert(He),Re)}finally{const Be=I!==null?he.get(I).__webglFramebuffer:null;X.bindFramebuffer(x.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(C,G,se=0){const q=Math.pow(2,-se),re=Math.floor(G.image.width*q),Re=Math.floor(G.image.height*q);Z.setTexture2D(G,0),x.copyTexSubImage2D(x.TEXTURE_2D,se,0,0,C.x,C.y,re,Re),X.unbindTexture()},this.copyTextureToTexture=function(C,G,se,q=0){const re=G.image.width,Re=G.image.height,Oe=ye.convert(se.format),ze=ye.convert(se.type);Z.setTexture2D(se,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,se.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,se.unpackAlignment),G.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,q,C.x,C.y,re,Re,Oe,ze,G.image.data):G.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,q,C.x,C.y,G.mipmaps[0].width,G.mipmaps[0].height,Oe,G.mipmaps[0].data):x.texSubImage2D(x.TEXTURE_2D,q,C.x,C.y,Oe,ze,G.image),q===0&&se.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(C,G,se,q,re=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=C.max.x-C.min.x+1,Oe=C.max.y-C.min.y+1,ze=C.max.z-C.min.z+1,Be=ye.convert(q.format),Xe=ye.convert(q.type);let He;if(q.isData3DTexture)Z.setTexture3D(q,0),He=x.TEXTURE_3D;else if(q.isDataArrayTexture)Z.setTexture2DArray(q,0),He=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,q.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,q.unpackAlignment);const Fe=x.getParameter(x.UNPACK_ROW_LENGTH),at=x.getParameter(x.UNPACK_IMAGE_HEIGHT),ct=x.getParameter(x.UNPACK_SKIP_PIXELS),Vt=x.getParameter(x.UNPACK_SKIP_ROWS),Jt=x.getParameter(x.UNPACK_SKIP_IMAGES),pt=se.isCompressedTexture?se.mipmaps[0]:se.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,pt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,pt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,C.min.x),x.pixelStorei(x.UNPACK_SKIP_ROWS,C.min.y),x.pixelStorei(x.UNPACK_SKIP_IMAGES,C.min.z),se.isDataTexture||se.isData3DTexture?x.texSubImage3D(He,re,G.x,G.y,G.z,Re,Oe,ze,Be,Xe,pt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),x.compressedTexSubImage3D(He,re,G.x,G.y,G.z,Re,Oe,ze,Be,pt.data)):x.texSubImage3D(He,re,G.x,G.y,G.z,Re,Oe,ze,Be,Xe,pt),x.pixelStorei(x.UNPACK_ROW_LENGTH,Fe),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,at),x.pixelStorei(x.UNPACK_SKIP_PIXELS,ct),x.pixelStorei(x.UNPACK_SKIP_ROWS,Vt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Jt),re===0&&q.generateMipmaps&&x.generateMipmap(He),X.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Z.setTextureCube(C,0):C.isData3DTexture?Z.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Z.setTexture2DArray(C,0):Z.setTexture2D(C,0),X.unbindTexture()},this.resetState=function(){P=0,D=0,I=null,X.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===rt?Ti:vf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ti?rt:Rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class vM extends Nf{}vM.prototype.isWebGL1Renderer=!0;class xM extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class no extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qu=new k,Zu=new k,Ju=new vt,ba=new _l,qr=new ar;class wM extends Ct{constructor(e=new vn,t=new no){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Qu.fromBufferAttribute(t,s-1),Zu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Qu.distanceTo(Zu);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,e.ray.intersectsSphere(qr)===!1)return;Ju.copy(s).invert(),ba.copy(e.ray).applyMatrix4(Ju);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=new k,f=new k,p=new k,m=new k,_=this.isLineSegments?2:1,M=i.index,h=i.attributes.position;if(M!==null){const g=Math.max(0,a.start),T=Math.min(M.count,a.start+a.count);for(let y=g,E=T-1;y<E;y+=_){const P=M.getX(y),D=M.getX(y+1);if(u.fromBufferAttribute(h,P),f.fromBufferAttribute(h,D),ba.distanceSqToSegment(u,f,m,p)>l)continue;m.applyMatrix4(this.matrixWorld);const J=e.ray.origin.distanceTo(m);J<e.near||J>e.far||t.push({distance:J,point:p.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),T=Math.min(h.count,a.start+a.count);for(let y=g,E=T-1;y<E;y+=_){if(u.fromBufferAttribute(h,y),f.fromBufferAttribute(h,y+1),ba.distanceSqToSegment(u,f,m,p)>l)continue;m.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(m);D<e.near||D>e.far||t.push({distance:D,point:p.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const $u=new k,ed=new k;class td extends wM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)$u.fromBufferAttribute(t,s),ed.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+$u.distanceTo(ed);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vs extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nd=new vt,Wa=new _l,jr=new ar,Yr=new k;class Ma extends Ct{constructor(e=new vn,t=new Vs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;nd.copy(s).invert(),Wa.copy(e.ray).applyMatrix4(nd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,p=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let M=m,b=_;M<b;M++){const h=u.getX(M);Yr.fromBufferAttribute(p,h),id(Yr,h,l,s,e,t,this)}}else{const m=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let M=m,b=_;M<b;M++)Yr.fromBufferAttribute(p,M),id(Yr,M,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function id(n,e,t,i,s,r,a){const o=Wa.distanceSqToPoint(n);if(o<t){const l=new k;Wa.closestPointToPoint(n,l),l.applyMatrix4(i);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class bM extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Of extends Ln{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const fo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class MM{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return u.push(f,p),this},this.removeHandler=function(f){const p=u.indexOf(f);return p!==-1&&u.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=u.length;p<m;p+=2){const _=u[p],M=u[p+1];if(_.global&&(_.lastIndex=0),_.test(f))return M}return null}}}const Bf=new MM;class Es{constructor(e){this.manager=e!==void 0?e:Bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Es.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hn={};class yM extends Error{constructor(e,t){super(e),this.response=t}}class Hf extends Es{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=fo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:i,onError:s});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const f=Hn[e],p=u.body.getReader(),m=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),_=m?parseInt(m):0,M=_!==0;let b=0;const h=new ReadableStream({start(g){T();function T(){p.read().then(({done:y,value:E})=>{if(y)g.close();else{b+=E.byteLength;const P=new ProgressEvent("progress",{lengthComputable:M,loaded:b,total:_});for(let D=0,I=f.length;D<I;D++){const J=f[D];J.onProgress&&J.onProgress(P)}g.enqueue(E),T()}})}}});return new Response(h)}else throw new yM(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return u.json();default:if(o===void 0)return u.text();{const p=/charset="?([^;"\s]*)"?/i.exec(o),m=p&&p[1]?p[1].toLowerCase():void 0,_=new TextDecoder(m);return u.arrayBuffer().then(M=>_.decode(M))}}}).then(u=>{fo.add(e,u);const f=Hn[e];delete Hn[e];for(let p=0,m=f.length;p<m;p++){const _=f[p];_.onLoad&&_.onLoad(u)}}).catch(u=>{const f=Hn[e];if(f===void 0)throw this.manager.itemError(e),u;delete Hn[e];for(let p=0,m=f.length;p<m;p++){const _=f[p];_.onError&&_.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class SM extends Es{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=fo.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=nr("img");function l(){f(),fo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(p){f(),s&&s(p),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class zf extends Es{constructor(e){super(e)}load(e,t,i,s){const r=new Yt,a=new SM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class EM extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ya=new vt,sd=new k,rd=new k;class AM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xl,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;sd.setFromMatrixPosition(e.matrixWorld),t.position.copy(sd),rd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rd),t.updateMatrixWorld(),ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class TM extends AM{constructor(){super(new Pf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class od extends EM{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new TM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CM{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class RM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ad(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ad();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ad(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);const LM=/^[og]\s*(.+)?/,PM=/^mtllib /,DM=/^usemtl /,IM=/^usemap /,ld=/\s+/,cd=new k,Sa=new k,ud=new k,dd=new k,en=new k,Kr=new Ze;function UM(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const u={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return u.clone=this.clone.bind(u),u}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,r=this.object.geometry.normals;cd.fromArray(s,e),Sa.fromArray(s,t),ud.fromArray(s,i),en.subVectors(ud,Sa),dd.subVectors(cd,Sa),en.cross(dd),en.normalize(),r.push(en.x,en.y,en.z),r.push(en.x,en.y,en.z),r.push(en.x,en.y,en.z)},addColor:function(e,t,i){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,r,a,o,l,u){const f=this.vertices.length;let p=this.parseVertexIndex(e,f),m=this.parseVertexIndex(t,f),_=this.parseVertexIndex(i,f);if(this.addVertex(p,m,_),this.addColor(p,m,_),o!==void 0&&o!==""){const M=this.normals.length;p=this.parseNormalIndex(o,M),m=this.parseNormalIndex(l,M),_=this.parseNormalIndex(u,M),this.addNormal(p,m,_)}else this.addFaceNormal(p,m,_);if(s!==void 0&&s!==""){const M=this.uvs.length;p=this.parseUVIndex(s,M),m=this.parseUVIndex(r,M),_=this.parseUVIndex(a,M),this.addUV(p,m,_),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return n.startObject("",!1),n}class FM extends Es{constructor(e){super(e),this.materials=null}load(e,t,i,s){const r=this,a=new Hf(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new UM;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let o=0,l=i.length;o<l;o++){const u=i[o].trimStart();if(u.length===0)continue;const f=u.charAt(0);if(f!=="#")if(f==="v"){const p=u.split(ld);switch(p[0]){case"v":t.vertices.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3])),p.length>=7?(Kr.setRGB(parseFloat(p[4]),parseFloat(p[5]),parseFloat(p[6])).convertSRGBToLinear(),t.colors.push(Kr.r,Kr.g,Kr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3]));break;case"vt":t.uvs.push(parseFloat(p[1]),parseFloat(p[2]));break}}else if(f==="f"){const m=u.slice(1).trim().split(ld),_=[];for(let b=0,h=m.length;b<h;b++){const g=m[b];if(g.length>0){const T=g.split("/");_.push(T)}}const M=_[0];for(let b=1,h=_.length-1;b<h;b++){const g=_[b],T=_[b+1];t.addFace(M[0],g[0],T[0],M[1],g[1],T[1],M[2],g[2],T[2])}}else if(f==="l"){const p=u.substring(1).trim().split(" ");let m=[];const _=[];if(u.indexOf("/")===-1)m=p;else for(let M=0,b=p.length;M<b;M++){const h=p[M].split("/");h[0]!==""&&m.push(h[0]),h[1]!==""&&_.push(h[1])}t.addLineGeometry(m,_)}else if(f==="p"){const m=u.slice(1).trim().split(" ");t.addPointGeometry(m)}else if((s=LM.exec(u))!==null){const p=(" "+s[0].slice(1).trim()).slice(1);t.startObject(p)}else if(DM.test(u))t.object.startMaterial(u.substring(7).trim(),t.materialLibraries);else if(PM.test(u))t.materialLibraries.push(u.substring(7).trim());else if(IM.test(u))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(f==="s"){if(s=u.split(" "),s.length>1){const m=s[1].trim().toLowerCase();t.object.smooth=m!=="0"&&m!=="off"}else t.object.smooth=!0;const p=t.object.currentMaterial();p&&(p.smooth=t.object.smooth)}else{if(u==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+u+'"')}}t.finalize();const r=new Gs;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){const u=t.objects[o],f=u.geometry,p=u.materials,m=f.type==="Line",_=f.type==="Points";let M=!1;if(f.vertices.length===0)continue;const b=new vn;b.setAttribute("position",new kt(f.vertices,3)),f.normals.length>0&&b.setAttribute("normal",new kt(f.normals,3)),f.colors.length>0&&(M=!0,b.setAttribute("color",new kt(f.colors,3))),f.hasUVIndices===!0&&b.setAttribute("uv",new kt(f.uvs,2));const h=[];for(let T=0,y=p.length;T<y;T++){const E=p[T],P=E.name+"_"+E.smooth+"_"+M;let D=t.materials[P];if(this.materials!==null){if(D=this.materials.create(E.name),m&&D&&!(D instanceof no)){const I=new no;Ln.prototype.copy.call(I,D),I.color.copy(D.color),D=I}else if(_&&D&&!(D instanceof Vs)){const I=new Vs({size:10,sizeAttenuation:!1});Ln.prototype.copy.call(I,D),I.color.copy(D.color),I.map=D.map,D=I}}D===void 0&&(m?D=new no:_?D=new Vs({size:1,sizeAttenuation:!1}):D=new Of,D.name=E.name,D.flatShading=!E.smooth,D.vertexColors=M,t.materials[P]=D),h.push(D)}let g;if(h.length>1){for(let T=0,y=p.length;T<y;T++){const E=p[T];b.addGroup(E.groupStart,E.groupCount,T)}m?g=new td(b,h):_?g=new Ma(b,h):g=new sn(b,h)}else m?g=new td(b,h[0]):_?g=new Ma(b,h[0]):g=new sn(b,h[0]);g.name=u.name,r.add(g)}else if(t.vertices.length>0){const o=new Vs({size:1,sizeAttenuation:!1}),l=new vn;l.setAttribute("position",new kt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new kt(t.colors,3)),o.vertexColors=!0);const u=new Ma(l,o);r.add(u)}return r}}class NM extends Es{constructor(e){super(e)}load(e,t,i,s){const r=this,a=this.path===""?CM.extractUrlBase(e):this.path,o=new Hf(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(u){s?s(u):console.error(u),r.manager.itemError(e)}},i,s)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const i=e.split(`
`);let s={};const r=/\s+/,a={};for(let l=0;l<i.length;l++){let u=i[l];if(u=u.trim(),u.length===0||u.charAt(0)==="#")continue;const f=u.indexOf(" ");let p=f>=0?u.substring(0,f):u;p=p.toLowerCase();let m=f>=0?u.substring(f+1):"";if(m=m.trim(),p==="newmtl")s={name:m},a[m]=s;else if(p==="ka"||p==="kd"||p==="ks"||p==="ke"){const _=m.split(r,3);s[p]=[parseFloat(_[0]),parseFloat(_[1]),parseFloat(_[2])]}else s[p]=m}const o=new OM(this.resourcePath||t,this.materialOptions);return o.setCrossOrigin(this.crossOrigin),o.setManager(this.manager),o.setMaterials(a),o}}class OM{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:Xn,this.wrap=this.options.wrap!==void 0?this.options.wrap:co}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const i in e){const s=e[i],r={};t[i]=r;for(const a in s){let o=!0,l=s[a];const u=a.toLowerCase();switch(u){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(o=!1);break}o&&(r[u]=l)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,i=this.materialsInfo[e],s={name:e,side:this.side};function r(o,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:o+l}function a(o,l){if(s[o])return;const u=t.getTextureParams(l,s),f=t.loadTexture(r(t.baseUrl,u.url));f.repeat.copy(u.scale),f.offset.copy(u.offset),f.wrapS=t.wrap,f.wrapT=t.wrap,(o==="map"||o==="emissiveMap")&&(f.colorSpace=rt),s[o]=f}for(const o in i){const l=i[o];let u;if(l!=="")switch(o.toLowerCase()){case"kd":s.color=new Ze().fromArray(l).convertSRGBToLinear();break;case"ks":s.specular=new Ze().fromArray(l).convertSRGBToLinear();break;case"ke":s.emissive=new Ze().fromArray(l).convertSRGBToLinear();break;case"map_kd":a("map",l);break;case"map_ks":a("specularMap",l);break;case"map_ke":a("emissiveMap",l);break;case"norm":a("normalMap",l);break;case"map_bump":case"bump":a("bumpMap",l);break;case"map_d":a("alphaMap",l),s.transparent=!0;break;case"ns":s.shininess=parseFloat(l);break;case"d":u=parseFloat(l),u<1&&(s.opacity=u,s.transparent=!0);break;case"tr":u=parseFloat(l),this.options&&this.options.invertTrProperty&&(u=1-u),u>0&&(s.opacity=1-u,s.transparent=!0);break}}return this.materials[e]=new Of(s),this.materials[e]}getTextureParams(e,t){const i={scale:new et(1,1),offset:new et(0,0)},s=e.split(/\s+/);let r;return r=s.indexOf("-bm"),r>=0&&(t.bumpScale=parseFloat(s[r+1]),s.splice(r,2)),r=s.indexOf("-s"),r>=0&&(i.scale.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),r=s.indexOf("-o"),r>=0&&(i.offset.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),i.url=s.join(" ").trim(),i}loadTexture(e,t,i,s,r){const a=this.manager!==void 0?this.manager:Bf;let o=a.getHandler(e);o===null&&(o=new zf(a)),o.setCrossOrigin&&o.setCrossOrigin(this.crossOrigin);const l=o.load(e,i,s,r);return t!==void 0&&(l.mapping=t),l}}const BM={id:"app",class:"bg-[#111111]"},HM={class:"sidenav -translate-x-[300px] h-full text-white font-bold flex items-center justify-center px-2 flex-col text-center rounded absolute z-[40] top-0 bg-[#222222] p-4 w-[300px] gap-12 text-2xl"},zM=oe("a",{class:"cursor-pointer duration-150 border-custom-blue p-2 hover:border-b-4 hover:mt-1"},"Home",-1),kM=oe("a",{class:"cursor-pointer duration-150 border-custom-blue p-2 hover:border-b-4 hover:mt-1"},"Courses",-1),GM=oe("a",{class:"cursor-pointer duration-150 border-custom-blue p-2 hover:border-b-4 hover:mt-1"},"Course info",-1),VM=oe("a",{class:"cursor-pointer duration-150 border-custom-blue p-2 hover:border-b-4 hover:mt-1"},"About",-1),WM=oe("a",{class:"cursor-pointer duration-150 border-custom-blue p-2 hover:border-b-4 hover:mt-1"},"Sign up",-1),XM={class:"h-[250px] md:h-[350px] w-full"},qM={class:"mainnav duration-500 fixed z-[30] backdrop-blur-lg text-white left-1/2 -translate-x-1/2 flex items-center py-2 w-full bg-[#11111150]"},jM=oe("a",{class:"w-6 opacity-0 sideicon ml-4",href:""},[oe("img",{src:jg,alt:""})],-1),YM=oe("a",{href:"",class:"icon labelsclass sm:left-5 sm:text-sm text-sm left-2 text-white absolute cursor-pointer"},"WebHive",-1),KM=oe("span",null,null,-1),QM=oe("span",null,null,-1),ZM=oe("span",null,null,-1),JM=oe("span",null,null,-1),$M=[KM,QM,ZM,JM],ey={class:"hidden md:flex absolute left-1/2 -translate-x-1/2 gap-3 duration-500 text-sm navlinks"},ty=oe("a",{class:"cursor-pointer"},"home",-1),ny=oe("a",{class:"cursor-pointer"},"courses",-1),iy=oe("a",{class:"cursor-pointer"},"course info",-1),sy=oe("a",{class:"cursor-pointer"},"about",-1),ry=oe("div",{class:"hidden absolute right-4 text-sm gap-3 md:flex items-center"},[oe("div",{class:"cursor-pointer g-signin2","data-onsuccess":"onSignIn"},"Sign in")],-1),oy={class:"backdrop-blur-md md:backdrop-blur-0 absolute scale-[80%] md:scale-100 rounded-md -left-8 top-[35px] md:left-10 md:top-[60px] text-white w-[500px] max-w-md p-4 pt-0 md:pt-4 rounded-lg duration-200 z-20"},ay=oe("h1",{class:"text-[30px] font-black"},"Learn to code websites",-1),ly={class:"opacity-60 text-[15px] mt-0 w-full"},cy={key:0},uy={key:0},dy={key:1},fy=oe("div",{class:"flex w-full mt-4"},[oe("a",{href:"#scrolltocourses",class:"bg-[#646efc] text-[13.5px] font-semibold w-[135px] py-2 text-left pl-3 flex items-center cursor-pointer duration-500 hover:bg-[#3a42b3] hover:scale-105"},[qs("LEARN NOW "),oe("img",{class:"w-5 ml-2",src:Yg,alt:""})]),oe("a",{class:"bg-transparent text-[13.5px] flex items-center justify-center font-semibold w-[135px] py-2 text-center border-[1px] ml-4 cursor-pointer duration-500 hover:bg-white hover:text-black hover:scale-105"},"FIND OUT MORE")],-1),hy={key:0,class:"contactsection pointer-events-none rounded-2xl bg-[#000000f2] w-[400px] h-[450px] fixed right-6 z-10 top-20 grid-cols-2 place-content-center"},py=cl('<div class="w-[130px] h-full left-0 absolute bg-[#222222c0] rounded-l-xl contactbuttonsection"><h2 class="text-white text-2xl font-semibold ml-6 mt-4">Find us</h2><div class="grid grid-rows-5 grid-cols-1 place-items-center gap-2 mt-6 w-full"><div class="h-16 rounded-full w-[64px] bg-[#222222] childdiv hover:cursor-pointer"><img class="mix-blend-lighten w-10 ml-3 mt-3" src="'+Kg+'"></div><div class="h-16 rounded-full w-[64px] bg-[#222222] childdiv hover:cursor-pointer"><img class="mix-blend-lighten w-10 ml-3 mt-3" src="'+Qg+'"></div><div class="h-16 rounded-full w-[64px] bg-[#222222] childdiv hover:cursor-pointer"><img class="mix-blend-lighten w-10 ml-3 mt-3" src="'+Zg+'"></div><div class="h-16 rounded-full w-[64px] bg-[#222222] childdiv hover:cursor-pointer"><img class="mix-blend-lighten w-10 ml-3 mt-3" src="'+Jg+'"></div><div class="h-16 rounded-full w-[64px] bg-[#222222] childdiv hover:cursor-pointer"><img class="mix-blend-lighten w-10 ml-3 mt-3" src="'+$g+'"></div></div></div>',1),my=oe("div",{class:"w-[250px] h-full absolute right-[9px] rounded-r-xl formsection"},[oe("h2",{class:"text-white text-2xl font-semibold ml-6 mt-4"},"Write to us"),oe("form",{class:"grid place-items-center",action:"https://api.staticforms.xyz/submit",method:"post"},[oe("input",{class:"bg-[#222222] text-white rounded w-[90%] mt-6 h-11 p-2",type:"text",name:"name",placeholder:"Your Name"}),oe("input",{class:"bg-[#222222] text-white rounded w-[90%] mt-6 h-11 p-2",type:"text",name:"email",placeholder:"Your Email"}),oe("textarea",{placeholder:"Message",class:"bg-[#222222] text-sm w-[90%] rounded text-white mt-6 h-32 max-h-32 min-h-32 p-2",name:"message"}),oe("input",{type:"text",name:"honeypot",style:{display:"none"}}),oe("input",{type:"hidden",name:"accessKey",value:"aaaaaaaa-bbbb-cccc-dddd-eeee6666kkkk"}),oe("input",{type:"hidden",name:"subject",value:"Contact us from - example.com"}),oe("input",{type:"hidden",name:"replyTo",value:"@"}),oe("input",{type:"hidden",name:"redirectTo",value:"https://example.com/contact/success"}),oe("input",{class:"bg-white cursor-pointer mt-11 w-[60%] p-1 rounded-full font-semibold",type:"submit",value:"Submit"}),oe("img",{class:"submitimg w-6 relative -top-7 right-14 mr-2",src:af})])],-1),gy=[py,my],_y={class:"h-full w-full bg-[#111111]"},vy=cl('<section class="bg-[#111111] text-white items-center justify-center pt-10 flex gap-8 p-4"><section class="w-4/5 max-w-xl"><h2 class="text-lg md:text-2xl font-bold text-[#646efc]">About us</h2><p class="mt-4 text-sm md:text-base">WebHive is a new company, dedicated to bringing easy and enjoyable courses to people wanting to learn how to make websites.</p><p class="mt-4 text-sm md:text-base">We are based in the UK, but we have students from all over the world, and translations for everyone.</p></section><section class="w-4/5 max-w-xl"><h2 class="text-lg md:text-2xl font-bold text-[#646efc]">Our mission</h2><p class="mt-4 text-sm md:text-base">WebHive is a new company, dedicated to bringing easy and enjoyable courses to people wanting to learn how to make websites.</p><p class="mt-4 text-sm md:text-base">We are based in the UK, but we have students from all over the world, and translations for everyone.</p></section></section>',1),xy={id:"scrolltocourses",class:"bg-[#111111] pb-4 text-center grid place-items-center mt-10 mb-10"},wy={class:"max-w-[1500px] w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:p-10 p-2",id:"courses-container"},by={class:"course-cards bg-[#7F7CAF]"},My=oe("img",{src:ir,alt:""},null,-1),yy=oe("h2",null,"Html Course",-1),Sy=oe("p",null,"10 lessons | 3 projects",-1),Ey=oe("p",null,"Learn the fundamentals of the programming language HTML. We start from the very bottom and cover everything.",-1),Ay=oe("span",{class:"savetext"},"Save",-1),Ty={key:0,class:"saveicon",src:bs,alt:"image of an x"},Cy={key:1,class:"saveicon",src:Ms,alt:"image of an x"},Ry=oe("div",null,[oe("button",null,"Learn more"),oe("button",null,"Add to basket")],-1),Ly={class:"course-cards bg-[#36151E]"},Py=oe("img",{src:e_,alt:""},null,-1),Dy=oe("h2",null,"CSS Course",-1),Iy=oe("p",null,"10 lessons | 3 projects",-1),Uy=oe("p",null,"Learn the fundamentals of the programming language CSS. We start from the very bottom and cover everything.",-1),Fy=oe("span",{class:"savetext"},"Save",-1),Ny={key:0,class:"saveicon",src:bs,alt:"image of an x"},Oy={key:1,class:"saveicon",src:Ms,alt:"image of an x"},By=oe("div",null,[oe("button",null,"Learn more"),oe("button",null,"Add to basket")],-1),Hy={class:"course-cards bg-[#113537]"},zy=oe("img",{src:ir,alt:""},null,-1),ky=oe("h2",null,"JavaScript Course",-1),Gy=oe("p",null,"10 lessons | 3 projects",-1),Vy=oe("p",null,"Learn the fundamentals of the programming language JavaScript. We start from the very bottom and cover everything.",-1),Wy=oe("span",{class:"savetext"},"Save",-1),Xy={key:0,class:"saveicon",src:bs,alt:"image of an x"},qy={key:1,class:"saveicon",src:Ms,alt:"image of an x"},jy=oe("div",null,[oe("button",null,"Learn more"),oe("button",null,"Add to basket")],-1),Yy={class:"course-cards bg-[#A4B494]"},Ky=oe("img",{src:ir,alt:""},null,-1),Qy=oe("h2",null,"Tailwind Course",-1),Zy=oe("p",null,"10 lessons | 3 projects",-1),Jy=oe("p",null,"Learn the fundamentals of the programming language Tailwind. We start from the very bottom and cover everything.",-1),$y=oe("span",{class:"savetext"},"Save",-1),eS={key:0,class:"saveicon",src:bs,alt:"image of an x"},tS={key:1,class:"saveicon",src:Ms,alt:"image of an x"},nS=oe("div",null,[oe("button",null,"Learn more"),oe("button",null,"Add to basket")],-1),iS={class:"course-cards bg-[#202030]"},sS=oe("img",{src:ir,alt:""},null,-1),rS=oe("h2",null,"Vue Course",-1),oS=oe("p",null,"10 lessons | 3 projects",-1),aS=oe("p",null,"Learn the fundamentals of the programming language Vue. We start from the very bottom and cover everything.",-1),lS=oe("span",{class:"savetext"},"Save",-1),cS={key:0,class:"saveicon",src:bs,alt:"image of an x"},uS={key:1,class:"saveicon",src:Ms,alt:"image of an x"},dS=oe("div",null,[oe("button",null,"Learn more"),oe("button",null,"Add to basket")],-1),fS={class:"course-cards bg-[#AE9273]"},hS=oe("img",{src:ir,alt:""},null,-1),pS=oe("h2",null,"Design Course",-1),mS=oe("p",null,"10 lessons | 3 projects",-1),gS=oe("p",null,"Learn the fundamentals of the programming language Design. We start from the very bottom and cover everything.",-1),_S=oe("span",{class:"savetext"},"Save",-1),vS={key:0,class:"saveicon",src:bs,alt:"image of an x"},xS={key:1,class:"saveicon",src:Ms,alt:"image of an x"},wS=oe("div",null,[oe("button",null,"Learn more"),oe("button",null,"Add to basket")],-1),bS=cl('<section id="rotate-content" class="w-full overflow-hidden h-[1100px] bg-[#111111]"><div id="image-section" class="w-[1000px] mt-22 h-[1100px] relative left-1/2 transform scale-75 sm:scale-100 -translate-x-1/2 grid grid-cols-4 place-items-center"><img class="first-column border-2 w-[200px] rounded-xl transform rotate-[-15deg] mt-60" src="'+t_+'"><img class="second-column border-2 w-[200px] rounded-xl transform rotate-[-15deg] mr-11 mb-32" src="'+n_+'"><img class="third-column border-2 w-[200px] rounded-xl transform rotate-[-15deg] mb-32" src="'+i_+'"><img class="fourth-column border-2 w-[200px] rounded-xl transform rotate-[-15deg]" src="'+s_+'"><h2 id="middle-title" class="text-white font-bold text-4xl mb-8 absolute ml-20">Create <span class="text-purple-500">real</span> content <br> learning from the <span class="text-purple-500">best</span></h2><img class="first-column border-2 w-[200px] rounded-xl transform -rotate-[15deg] mb-20 ml-28" src="'+r_+'"><img class="second-column border-2 w-[200px] rounded-xl transform -rotate-[15deg] mt-8 ml-40" src="'+o_+'"><img class="third-column border-2 w-[200px] rounded-xl transform -rotate-[15deg] mt-8 ml-40" src="'+a_+'"><img class="fourth-column border-2 w-[190px] object-cover h-[250px] rounded-xl transform -rotate-[15deg] mb-52 ml-40" src="'+l_+'"></div></section>',1),MS={class:"reviewsection bg-no-repeat bg-center bg-cover w-full bg-[#111111]"},yS={id:"expand-words",class:"overflow-x-hidden circle-container text-white font-bold"},SS={class:"mt-20 ml-4 flex flex-row z-10"},ES={class:"text-3xl absolute -mt-10 ml-4"},AS={id:"slidenumber"},TS={id:"slidestotal"},CS={class:"p-8"},RS={class:"text-3xl"},LS={class:"font-normal w-[400px] mt-4 text-md"},PS={class:"flex items -ml-2 w-[50px] mt-4"},DS=oe("img",{class:"w-6 ml-3",src:u_},null,-1),IS=[DS],US=oe("img",{class:"w-6 ml-3",src:af},null,-1),FS=[US],NS={__name:"Home",setup(n){const e=gt(0);gt(!1);const t=gt(!1);gt(!1),gt(!1),gt(!1);const i=gt(!0);gt(""),gt(!1),gt(!1),gt(""),gt(!1),gt(!0),gt(!1);const s=gt(!1),r=gt(!1),a=gt(!1),o=gt(!1),l=gt(!1),u=gt(!1),f=gt([{name:"Antoine Leth",content:"Bought the package course not really knowing what I expect, but I was pleasantly surprised...",stars:[1,2,3,4,5]},{name:"Anonymous",content:"I'm a mum and I wanted to explore different career paths. I found a few courses online but settled on WebHive. I feel like I know more than my son now haha!",stars:[1,2,3,4,5]},{name:"Tim Rock",content:"I am currently a backend developer but wanted to be a full stack developer. I bought the package course and honestly i wasn't disapointed. Everything was so clear and concise. Will most likely purchase another course soon. Thanks.",stars:[1,2,3,4,5]},{name:"Muhammad",content:"I am student and dont have a lot of money. I contacted WebHive and they assisted me in which course would be the best for me. I purchased the javascript course. Thanks WebHive.",stars:[1,2,3,4]},{name:"Josh Humand",content:"Great communication and great education.",stars:[1,2,3,4,5]},{name:"Spencer Hill",content:"I am struggling with my univeristy web developing module at the moment so my parents bought the html and css course from WebHive to help me and in the end i passed with a first! Thank you.",stars:[1,2,3,4,5]}]),p=()=>{const g=document.querySelectorAll(".reviewcards"),T=g[e],y=document.getElementById("expand-words"),E=y.getBoundingClientRect(),P=T.getBoundingClientRect(),D=P.left,I=E.left,J=P.width,A=E.width,L=D+J/2,pe=I+A/2,me=L-pe,V=y.scrollLeft,j=V+me;y.scrollTo({left:j,behavior:"smooth"})},m=()=>{e<f.length-1&&(e++,p())},_=()=>{e>0&&(e--,p())},M=g=>{const T=g.getBoundingClientRect();return T.top>=0&&T.left>=0&&T.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&T.right<=(window.innerWidth||document.documentElement.clientWidth)},b=()=>{document.getElementById("nav-icon3").classList.toggle("open");const T=document.querySelector(".sidenav");T.classList.contains("slidenavin")?(T.classList.remove("slidenavin"),T.classList.add("slidenavinback")):(T.classList.toggle("slidenavin"),T.classList.remove("slidenavinback"))},h=()=>{const g=document.getElementById("middle-title"),T=document.querySelector("nav"),y=document.querySelector(".icon"),E=window.scrollY<1,P=document.querySelector(".sideicon"),D=document.querySelector(".navlinks");g.style.transition="transform 0.5s ease-in-out",M(g)&&(g.style.transform="rotate(-17deg)",document.addEventListener("mousemove",I=>{g.style.transition="transform 0s ease-in-out";const J=I.clientX,A=I.clientY,L=g.getBoundingClientRect(),pe=L.left+L.width/2,me=L.top+L.height/2,V=J-pe,j=A-me,ee=Math.atan2(j,V),ie=50,O=(pe+ie*Math.cos(ee)-J)*.04,Q=(me+ie*Math.sin(ee)-A)*.04;g.style.transform=`translate(${O}px, ${Q}px) rotate(-17deg)`})),T.classList.toggle("ActiveScrollNav",!E),T.classList.toggle("NotActiveScrollNav",E),y.classList.toggle("ActiveScrollIcon",!E),y.classList.toggle("NotActiveScrollIcon",E),P.classList.toggle("ActiveScrollSideicon",!E),P.classList.toggle("NotActiveScrollSideicon",E),D.classList.toggle("gap-8",!E),D.classList.toggle("gap-3",E)};return Xd(()=>{window.addEventListener("scroll",h),document.querySelector(".codingvideo").playbackRate=3;const g=new xM,T=new FM,y=new NM,E=new Ao(20,20),P=new vl({opacity:0,transparent:!0}),D=new sn(E,P);D.rotation.x=-Math.PI*.5,g.add(D);const I={width:window.innerWidth,height:500},J=new nn(50,I.width/I.height);J.position.set(100,0,50),J.lookAt(0,0,0),g.add(J);const A=new zf,L=A.load("../src/webgl/maps/tower.hdr");L.mapping=lo,y.load("../src/webgl/models/iphone.mtl",ie=>{ie.preload(),T.setMaterials(ie),T.load("../src/webgl/models/iphone.obj",O=>{O.scale.set(300,300,300),O.position.set(50,5,-10),O.traverse(Y=>{if(Y instanceof sn){const we=new bM({envMap:L,metalness:1,roughness:.2});Y.material=we}}),g.add(O),setTimeout(()=>{const Y=document.getElementById("loading");Y.style.display="none"},1e3);const Q=new RM,ge=()=>{const Y=Q.getElapsedTime();O.rotation.y=Y*.6,me.render(g,J),window.requestAnimationFrame(ge)};ge();let ue=0,W=!1;document.addEventListener("mousedown",()=>{W=!0}),document.addEventListener("mouseup",()=>{W=!1}),document.addEventListener("mousemove",Y=>{if(W){const we=Y.movementX;ue+=we*.01,O.rotation.y+=ue}})})});const pe=document.querySelector(".webGl"),me=new Nf({canvas:pe,alpha:!0});me.setSize(I.width,I.height),me.render(g,J);const V=()=>{me.render(g,J),window.requestAnimationFrame(V)};V();const j=new od(16777215,.2);j.position.set(100,70,100),g.add(j);const ee=new od(1985480,.2);ee.position.set(0,-30,100),g.add(ee)}),(g,T)=>(dt(),_t("div",BM,[oe("div",HM,[zM,kM,GM,VM,oe("a",{onClick:T[0]||(T[0]=y=>i.value=!i.value),class:"sm:mx-2 mx-1 cursor-pointer duration-150 border-custom-blue p-2 hover:border-b-4 hover:mt-1"},"Contact"),WM]),oe("header",XM,[oe("nav",qM,[jM,YM,oe("div",{onClick:b,class:"block md:hidden",id:"nav-icon3"},$M),oe("div",ey,[ty,ny,iy,sy,oe("a",{onClick:T[1]||(T[1]=y=>i.value=!i.value),class:"cursor-pointer"},"contact")]),ry]),oe("div",oy,[ay,oe("p",ly,[qs("Learn how to make websites through coding HTML, CSS, and JavaScript. Additionally, master your design skills and learn frameworks. "),t.value?(dt(),_t("span",cy," Learn Tailwind, SCSS, and Vue js, key features of front end web development if you want to broaden your skills and advance your websites. ")):Mc("",!0),oe("button",{onClick:T[2]||(T[2]=y=>t.value=!t.value),class:"text-white font-bold underline"},[qs(" See "),t.value?(dt(),_t("span",uy,"less")):(dt(),_t("span",dy,"full"))])]),fy]),i.value?Mc("",!0):(dt(),_t("div",hy,gy))]),oe("main",_y,[vy,oe("section",xy,[oe("div",wy,[oe("div",by,[My,yy,Sy,Ey,oe("button",{onClick:T[3]||(T[3]=y=>s.value=!s.value)},[Ay,s.value?(dt(),_t("img",Ty)):(dt(),_t("img",Cy))]),Ry]),oe("div",Ly,[Py,Dy,Iy,Uy,oe("button",{onClick:T[4]||(T[4]=y=>r.value=!r.value)},[Fy,r.value?(dt(),_t("img",Ny)):(dt(),_t("img",Oy))]),By]),oe("div",Hy,[zy,ky,Gy,Vy,oe("button",{onClick:T[5]||(T[5]=y=>a.value=!a.value)},[Wy,a.value?(dt(),_t("img",Xy)):(dt(),_t("img",qy))]),jy]),oe("div",Yy,[Ky,Qy,Zy,Jy,oe("button",{onClick:T[6]||(T[6]=y=>o.value=!o.value)},[$y,o.value?(dt(),_t("img",eS)):(dt(),_t("img",tS))]),nS]),oe("div",iS,[sS,rS,oS,aS,oe("button",{onClick:T[7]||(T[7]=y=>l.value=!l.value)},[lS,l.value?(dt(),_t("img",cS)):(dt(),_t("img",uS))]),dS]),oe("div",fS,[hS,pS,mS,gS,oe("button",{onClick:T[8]||(T[8]=y=>u.value=!u.value)},[_S,u.value?(dt(),_t("img",vS)):(dt(),_t("img",xS))]),wS])])]),bS,oe("section",MS,[oe("div",yS,[oe("div",SS,[oe("p",ES,[oe("span",AS,xr(e.value+1),1),qs(" / "),oe("span",TS,xr(f.value.length),1)]),(dt(!0),_t(un,null,fc(f.value,(y,E)=>(dt(),_t("div",{key:E,class:go(["reviewcards rounded-lg bg-[#44444430] shadow-lg duration-200 w-[550px]",{"opacity-1":E===e.value,"opacity-50":E!==e.value}]),style:{margin:"4px"}},[oe("div",CS,[oe("h2",RS,xr(y.name),1),oe("p",LS,xr(y.content),1),oe("div",PS,[(dt(!0),_t(un,null,fc(y.stars,P=>(dt(),_t("img",{key:P,src:c_}))),128))])])],2))),128))])]),oe("div",{class:"ml-4 mt-2"},[oe("button",{onClick:_,class:"w-12 h-12 text-white rounded-full m-1 active:border"},IS),oe("button",{onClick:m,class:"w-12 h-12 text-white rounded-full m-1 active:border"},FS)])])])]))}},OS={__name:"App",setup(n){return(e,t)=>(dt(),nf(NS))}};Xg(OS).mount("#app");
