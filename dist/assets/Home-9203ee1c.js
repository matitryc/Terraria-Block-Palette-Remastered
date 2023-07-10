import{_ as el,C as nl,r as xr,F as sl,g as il,a as rl,b as ol,L as je,c as al,S as ul,d as ll,e as Ht,f as cl,h as es,i as Ie,j as V,w as Wt,o as x,k as L,l as I,t as qt,u as Ot,m as lt,n as et,p as No,q as ns,s as Kt,v as ue,x as Pn,y as gt,z as Tt,A as ze,B as le,D as hl,E as dl,G as bo,H as Ro,I as Dr,T as Nr,J as fl,K as pl}from"./index-25238c9b.js";import{s as gl,T as ml}from"./TheNavigation-3f417662.js";var yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,Ti=Ti||{},C=yl||self;function Fn(){}function ss(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function sn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function vl(e){return Object.prototype.hasOwnProperty.call(e,Ps)&&e[Ps]||(e[Ps]=++wl)}var Ps="closure_uid_"+(1e9*Math.random()>>>0),wl=0;function El(e,t,n){return e.call.apply(e.bind,arguments)}function Tl(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function st(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=El:st=Tl,st.apply(null,arguments)}function Sn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function H(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function $t(){this.s=this.s,this.o=this.o}var Sl=0;$t.prototype.s=!1;$t.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),Sl!=0)&&vl(this)};$t.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Mo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Si(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function br(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ss(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function it(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var Il=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{C.addEventListener("test",Fn,t),C.removeEventListener("test",Fn,t)}catch{}return e}();function Vn(e){return/^[\s\xa0]*$/.test(e)}var Rr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Fs(e,t){return e<t?-1:e>t?1:0}function is(){var e=C.navigator;return e&&(e=e.userAgent)?e:""}function wt(e){return is().indexOf(e)!=-1}function Ii(e){return Ii[" "](e),e}Ii[" "]=Fn;function Lo(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}var _l=wt("Opera"),pe=wt("Trident")||wt("MSIE"),Oo=wt("Edge"),Ys=Oo||pe,Po=wt("Gecko")&&!(is().toLowerCase().indexOf("webkit")!=-1&&!wt("Edge"))&&!(wt("Trident")||wt("MSIE"))&&!wt("Edge"),Cl=is().toLowerCase().indexOf("webkit")!=-1&&!wt("Edge");function Fo(){var e=C.document;return e?e.documentMode:void 0}var $n;t:{var Vs="",$s=function(){var e=is();if(Po)return/rv:([^\);]+)(\)|;)/.exec(e);if(Oo)return/Edge\/([\d\.]+)/.exec(e);if(pe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Cl)return/WebKit\/(\S+)/.exec(e);if(_l)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if($s&&(Vs=$s?$s[1]:""),pe){var Us=Fo();if(Us!=null&&Us>parseFloat(Vs)){$n=String(Us);break t}}$n=Vs}var kl={};function Al(){return Lo(kl,9,function(){let e=0;const t=Rr(String($n)).split("."),n=Rr("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Fs(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Fs(i[2].length==0,r[2].length==0)||Fs(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Xs;if(C.document&&pe){var Mr=Fo();Xs=Mr||parseInt($n,10)||void 0}else Xs=void 0;var xl=Xs;function Ke(e,t){if(it.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Po){t:{try{Ii(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Dl[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ke.$.h.call(this)}}H(Ke,it);var Dl={2:"touch",3:"pen",4:"mouse"};Ke.prototype.h=function(){Ke.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var rn="closure_listenable_"+(1e6*Math.random()|0),Nl=0;function bl(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=i,this.key=++Nl,this.fa=this.ia=!1}function rs(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function _i(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Vo(e){const t={};for(const n in e)t[n]=e[n];return t}const Lr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $o(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Lr.length;r++)n=Lr[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function os(e){this.src=e,this.g={},this.h=0}os.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Zs(e,t,s,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new bl(t,this.src,r,!!s,i),t.ia=n,e.push(t)),t};function Js(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Mo(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(rs(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Zs(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==s)return i}return-1}var Ci="closure_lm_"+(1e6*Math.random()|0),qs={};function Uo(e,t,n,s,i){if(s&&s.once)return Bo(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Uo(e,t[r],n,s,i);return null}return n=xi(n),e&&e[rn]?e.O(t,n,sn(s)?!!s.capture:!!s,i):qo(e,t,n,!1,s,i)}function qo(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=sn(i)?!!i.capture:!!i,a=Ai(e);if(a||(e[Ci]=a=new os(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Rl(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Il||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(zo(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Rl(){function e(n){return t.call(e.src,e.listener,n)}const t=Ml;return e}function Bo(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Bo(e,t[r],n,s,i);return null}return n=xi(n),e&&e[rn]?e.P(t,n,sn(s)?!!s.capture:!!s,i):qo(e,t,n,!0,s,i)}function jo(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)jo(e,t[r],n,s,i);else s=sn(s)?!!s.capture:!!s,n=xi(n),e&&e[rn]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Zs(r,n,s,i),-1<n&&(rs(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ai(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Zs(t,n,s,i)),(n=-1<e?t[e]:null)&&ki(n))}function ki(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[rn])Js(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(zo(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ai(t))?(Js(n,e),n.h==0&&(n.src=null,t[Ci]=null)):rs(e)}}}function zo(e){return e in qs?qs[e]:qs[e]="on"+e}function Ml(e,t){if(e.fa)e=!0;else{t=new Ke(t,this);var n=e.listener,s=e.la||e.src;e.ia&&ki(e),e=n.call(s,t)}return e}function Ai(e){return e=e[Ci],e instanceof os?e:null}var Bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function xi(e){return typeof e=="function"?e:(e[Bs]||(e[Bs]=function(t){return e.handleEvent(t)}),e[Bs])}function Q(){$t.call(this),this.i=new os(this),this.S=this,this.J=null}H(Q,$t);Q.prototype[rn]=!0;Q.prototype.removeEventListener=function(e,t,n,s){jo(this,e,t,n,s)};function X(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,typeof t=="string")t=new it(t,e);else if(t instanceof it)t.target=t.target||e;else{var i=t;t=new it(s,e),$o(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=In(o,s,!0,t)&&i}if(o=t.g=e,i=In(o,s,!0,t)&&i,i=In(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=In(o,s,!1,t)&&i}Q.prototype.N=function(){if(Q.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)rs(n[s]);delete e.g[t],e.h--}}this.J=null};Q.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};Q.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function In(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Js(e.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var Di=C.JSON.stringify;function Ll(){var e=Qo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ol{constructor(){this.h=this.g=null}add(t,n){const s=Ko.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ko=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Pl,e=>e.reset());class Pl{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Fl(e){C.setTimeout(()=>{throw e},0)}function Go(e,t){ti||Vl(),ei||(ti(),ei=!0),Qo.add(e,t)}var ti;function Vl(){var e=C.Promise.resolve(void 0);ti=function(){e.then($l)}}var ei=!1,Qo=new Ol;function $l(){for(var e;e=Ll();){try{e.h.call(e.g)}catch(n){Fl(n)}var t=Ko;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ei=!1}function as(e,t){Q.call(this),this.h=e||1,this.g=t||C,this.j=st(this.qb,this),this.l=Date.now()}H(as,Q);y=as.prototype;y.ga=!1;y.T=null;y.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),X(this,"tick"),this.ga&&(Ni(this),this.start()))}};y.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ni(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}y.N=function(){as.$.N.call(this),Ni(this),delete this.g};function bi(e,t,n){if(typeof e=="function")n&&(e=st(e,n));else if(e&&typeof e.handleEvent=="function")e=st(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:C.setTimeout(e,t||0)}function Ho(e){e.g=bi(()=>{e.g=null,e.i&&(e.i=!1,Ho(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Ul extends $t{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ho(this)}N(){super.N(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(e){$t.call(this),this.h=e,this.g={}}H(Ge,$t);var Or=[];function Wo(e,t,n,s){Array.isArray(n)||(n&&(Or[0]=n.toString()),n=Or);for(var i=0;i<n.length;i++){var r=Uo(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Yo(e){_i(e.g,function(t,n){this.g.hasOwnProperty(n)&&ki(t)},e),e.g={}}Ge.prototype.N=function(){Ge.$.N.call(this),Yo(this)};Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function us(){this.g=!0}us.prototype.Ea=function(){this.g=!1};function ql(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Bl(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function ae(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+zl(e,n)+(s?" "+s:"")})}function jl(e,t){e.info(function(){return"TIMEOUT: "+t})}us.prototype.info=function(){};function zl(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Di(n)}catch{return t}}var te={},Pr=null;function ls(){return Pr=Pr||new Q}te.Ta="serverreachability";function Xo(e){it.call(this,te.Ta,e)}H(Xo,it);function Qe(e){const t=ls();X(t,new Xo(t))}te.STAT_EVENT="statevent";function Jo(e,t){it.call(this,te.STAT_EVENT,e),this.stat=t}H(Jo,it);function at(e){const t=ls();X(t,new Jo(t,e))}te.Ua="timingevent";function Zo(e,t){it.call(this,te.Ua,e),this.size=t}H(Zo,it);function on(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){e()},t)}var cs={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ta={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ri(){}Ri.prototype.h=null;function Fr(e){return e.h||(e.h=e.i())}function ea(){}var an={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Mi(){it.call(this,"d")}H(Mi,it);function Li(){it.call(this,"c")}H(Li,it);var ni;function hs(){}H(hs,Ri);hs.prototype.g=function(){return new XMLHttpRequest};hs.prototype.i=function(){return{}};ni=new hs;function un(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new Ge(this),this.P=Kl,e=Ys?125:void 0,this.V=new as(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new na}function na(){this.i=null,this.g="",this.h=!1}var Kl=45e3,si={},Un={};y=un.prototype;y.setTimeout=function(e){this.P=e};function ii(e,t,n){e.L=1,e.v=fs(At(t)),e.s=n,e.S=!0,sa(e,null)}function sa(e,t){e.G=Date.now(),ln(e),e.A=At(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),ha(n.i,"t",s),e.C=0,n=e.l.I,e.h=new na,e.g=Ra(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Ul(st(e.Pa,e,e.g),e.O)),Wo(e.U,e.g,"readystatechange",e.nb),t=e.I?Vo(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Qe(),ql(e.j,e.u,e.A,e.m,e.W,e.s)}y.nb=function(e){e=e.target;const t=this.M;t&&_t(e)==3?t.l():this.Pa(e)};y.Pa=function(e){try{if(e==this.g)t:{const c=_t(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Ys||this.g&&(this.h.h||this.g.ja()||qr(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?Qe(3):Qe(2)),ds(this);var n=this.g.da();this.aa=n;e:if(ia(this)){var s=qr(this.g);e="";var i=s.length,r=_t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bt(this),$e(this);var o="";break e}this.h.i=new C.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Bl(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vn(a)){var l=a;break e}}l=null}if(n=l)ae(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ri(this,n);else{this.i=!1,this.o=3,at(12),Bt(this),$e(this);break t}}this.S?(ra(this,c,o),Ys&&this.i&&c==3&&(Wo(this.U,this.V,"tick",this.mb),this.V.start())):(ae(this.j,this.m,o,null),ri(this,o)),c==4&&Bt(this),this.i&&!this.J&&(c==4?xa(this.l,this):(this.i=!1,ln(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Bt(this),$e(this)}}}catch{}finally{}};function ia(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function ra(e,t,n){let s=!0,i;for(;!e.J&&e.C<n.length;)if(i=Gl(e,n),i==Un){t==4&&(e.o=4,at(14),s=!1),ae(e.j,e.m,null,"[Incomplete Response]");break}else if(i==si){e.o=4,at(15),ae(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else ae(e.j,e.m,i,null),ri(e,i);ia(e)&&i!=Un&&i!=si&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,at(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),qi(t),t.L=!0,at(11))):(ae(e.j,e.m,n,"[Invalid Chunked Response]"),Bt(e),$e(e))}y.mb=function(){if(this.g){var e=_t(this.g),t=this.g.ja();this.C<t.length&&(ds(this),ra(this,e,t),this.i&&e!=4&&ln(this))}};function Gl(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Un:(n=Number(t.substring(n,s)),isNaN(n)?si:(s+=1,s+n>t.length?Un:(t=t.substr(s,n),e.C=s+n,t)))}y.cancel=function(){this.J=!0,Bt(this)};function ln(e){e.Y=Date.now()+e.P,oa(e,e.P)}function oa(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=on(st(e.lb,e),t)}function ds(e){e.B&&(C.clearTimeout(e.B),e.B=null)}y.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(jl(this.j,this.A),this.L!=2&&(Qe(),at(17)),Bt(this),this.o=2,$e(this)):oa(this,this.Y-e)};function $e(e){e.l.H==0||e.J||xa(e.l,e)}function Bt(e){ds(e);var t=e.M;t&&typeof t.ra=="function"&&t.ra(),e.M=null,Ni(e.V),Yo(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function ri(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||oi(n.h,e))){if(!e.K&&oi(n.h,e)&&n.H==3){try{var s=n.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)jn(n),ms(n);else break t;Ui(n),at(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=on(st(n.ib,n),6e3));if(1>=pa(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else jt(n,11)}else if((e.K||n.g==e)&&jn(n),!Vn(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.J=l[1],n.oa=l[2];const c=l[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=l[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=e.g;if(f){const v=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.h;r.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Oi(r,r.h),r.h=null))}if(s.F){const T=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.Da=T,F(s.G,s.F,T))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=e;if(s.wa=ba(s,s.I?s.oa:null,s.Y),o.K){ga(s.h,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(ds(a),ln(a)),s.g=o}else ka(s);0<n.i.length&&ys(n)}else l[0]!="stop"&&l[0]!="close"||jt(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?jt(n,7):$i(n):l[0]!="noop"&&n.l&&n.l.Aa(l),n.A=0)}}Qe(4)}catch{}}function Ql(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ss(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Hl(e){if(e.sa&&typeof e.sa=="function")return e.sa();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ss(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function aa(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ss(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Hl(e),s=Ql(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wl(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Gt){this.h=t!==void 0?t:e.h,qn(this,e.j),this.s=e.s,this.g=e.g,Bn(this,e.m),this.l=e.l,t=e.i;var n=new He;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Vr(this,n),this.o=e.o}else e&&(n=String(e).match(ua))?(this.h=!!t,qn(this,n[1]||"",!0),this.s=Oe(n[2]||""),this.g=Oe(n[3]||"",!0),Bn(this,n[4]),this.l=Oe(n[5]||"",!0),Vr(this,n[6]||"",!0),this.o=Oe(n[7]||"")):(this.h=!!t,this.i=new He(null,this.h))}Gt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Pe(t,$r,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Pe(t,$r,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Pe(n,n.charAt(0)=="/"?Jl:Xl,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Pe(n,tc)),e.join("")};function At(e){return new Gt(e)}function qn(e,t,n){e.j=n?Oe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Bn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Vr(e,t,n){t instanceof He?(e.i=t,ec(e.i,e.h)):(n||(t=Pe(t,Zl)),e.i=new He(t,e.h))}function F(e,t,n){e.i.set(t,n)}function fs(e){return F(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Oe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Pe(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Yl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Yl(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var $r=/[#\/\?@]/g,Xl=/[#\?:]/g,Jl=/[#\?]/g,Zl=/[#\?@]/g,tc=/#/g;function He(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ut(e){e.g||(e.g=new Map,e.h=0,e.i&&Wl(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=He.prototype;y.add=function(e,t){Ut(this),this.i=null,e=_e(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function la(e,t){Ut(e),t=_e(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ca(e,t){return Ut(e),t=_e(e,t),e.g.has(t)}y.forEach=function(e,t){Ut(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};y.sa=function(){Ut(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};y.Z=function(e){Ut(this);let t=[];if(typeof e=="string")ca(this,e)&&(t=t.concat(this.g.get(_e(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};y.set=function(e,t){return Ut(this),this.i=null,e=_e(this,e),ca(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function ha(e,t,n){la(e,t),0<n.length&&(e.i=null,e.g.set(_e(e,t),Si(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function _e(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ec(e,t){t&&!e.j&&(Ut(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(la(this,s),ha(this,i,n))},e)),e.j=t}var nc=class{constructor(e,t){this.h=e,this.g=t}};function da(e){this.l=e||sc,C.PerformanceNavigationTiming?(e=C.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(C.g&&C.g.Ka&&C.g.Ka()&&C.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sc=10;function fa(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function pa(e){return e.h?1:e.g?e.g.size:0}function oi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Oi(e,t){e.g?e.g.add(t):e.h=t}function ga(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}da.prototype.cancel=function(){if(this.i=ma(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ma(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Si(e.i)}function Pi(){}Pi.prototype.stringify=function(e){return C.JSON.stringify(e,void 0)};Pi.prototype.parse=function(e){return C.JSON.parse(e,void 0)};function ic(){this.g=new Pi}function rc(e,t,n){const s=n||"";try{aa(e,function(i,r){let o=i;sn(i)&&(o=Di(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function oc(e,t){const n=new us;if(C.Image){const s=new Image;s.onload=Sn(_n,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Sn(_n,n,s,"TestLoadImage: error",!1,t),s.onabort=Sn(_n,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Sn(_n,n,s,"TestLoadImage: timeout",!1,t),C.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function _n(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function cn(e){this.l=e.fc||null,this.j=e.ob||!1}H(cn,Ri);cn.prototype.g=function(){return new ps(this.l,this.j)};cn.prototype.i=function(e){return function(){return e}}({});function ps(e,t){Q.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Fi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}H(ps,Q);var Fi=0;y=ps.prototype;y.open=function(e,t){if(this.readyState!=Fi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,We(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||C).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hn(this)),this.readyState=Fi};y.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,We(this)),this.g&&(this.readyState=3,We(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ya(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function ya(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}y.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?hn(this):We(this),this.readyState==3&&ya(this)}};y.Za=function(e){this.g&&(this.response=this.responseText=e,hn(this))};y.Ya=function(e){this.g&&(this.response=e,hn(this))};y.ka=function(){this.g&&hn(this)};function hn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,We(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function We(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ac=C.JSON.parse;function U(e){Q.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=va,this.L=this.M=!1}H(U,Q);var va="",uc=/^https?$/i,lc=["POST","PUT"];y=U.prototype;y.Oa=function(e){this.M=e};y.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ni.g(),this.C=this.u?Fr(this.u):Fr(ni),this.g.onreadystatechange=st(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(r){Ur(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=C.FormData&&e instanceof C.FormData,!(0<=Mo(lc,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ta(this),0<this.B&&((this.L=cc(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.ua,this)):this.A=bi(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Ur(this,r)}};function cc(e){return pe&&Al()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}y.ua=function(){typeof Ti<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,X(this,"timeout"),this.abort(8))};function Ur(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,wa(e),gs(e)}function wa(e){e.F||(e.F=!0,X(e,"complete"),X(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,X(this,"complete"),X(this,"abort"),gs(this))};y.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gs(this,!0)),U.$.N.call(this)};y.La=function(){this.s||(this.G||this.v||this.l?Ea(this):this.kb())};y.kb=function(){Ea(this)};function Ea(e){if(e.h&&typeof Ti<"u"&&(!e.C[1]||_t(e)!=4||e.da()!=2)){if(e.v&&_t(e)==4)bi(e.La,0,e);else if(X(e,"readystatechange"),_t(e)==4){e.h=!1;try{const a=e.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.I).match(ua)[1]||null;if(!i&&C.self&&C.self.location){var r=C.self.location.protocol;i=r.substr(0,r.length-1)}s=!uc.test(i?i.toLowerCase():"")}n=s}if(n)X(e,"complete"),X(e,"success");else{e.m=6;try{var o=2<_t(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",wa(e)}}finally{gs(e)}}}}function gs(e,t){if(e.g){Ta(e);const n=e.g,s=e.C[0]?Fn:null;e.g=null,e.C=null,t||X(e,"ready");try{n.onreadystatechange=s}catch{}}}function Ta(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(C.clearTimeout(e.A),e.A=null)}function _t(e){return e.g?e.g.readyState:0}y.da=function(){try{return 2<_t(this)?this.g.status:-1}catch{return-1}};y.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ac(t)}};function qr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case va:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}y.Ia=function(){return this.m};y.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Sa(e){let t="";return _i(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Vi(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Sa(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):F(e,t,n))}function Re(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ia(e){this.Ga=0,this.i=[],this.j=new us,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Re("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Re("baseRetryDelayMs",5e3,e),this.hb=Re("retryDelaySeedMs",1e4,e),this.eb=Re("forwardChannelMaxRetries",2,e),this.xa=Re("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new da(e&&e.concurrentRequestLimit),this.Ja=new ic,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}y=Ia.prototype;y.qa=8;y.H=1;function $i(e){if(_a(e),e.H==3){var t=e.W++,n=At(e.G);F(n,"SID",e.J),F(n,"RID",t),F(n,"TYPE","terminate"),dn(e,n),t=new un(e,e.j,t,void 0),t.L=2,t.v=fs(At(n)),n=!1,C.navigator&&C.navigator.sendBeacon&&(n=C.navigator.sendBeacon(t.v.toString(),"")),!n&&C.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ra(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ln(t)}Na(e)}function ms(e){e.g&&(qi(e),e.g.cancel(),e.g=null)}function _a(e){ms(e),e.u&&(C.clearTimeout(e.u),e.u=null),jn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&C.clearTimeout(e.m),e.m=null)}function ys(e){fa(e.h)||e.m||(e.m=!0,Go(e.Na,e),e.C=0)}function hc(e,t){return pa(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.F.concat(e.i),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=on(st(e.Na,e,t),Da(e,e.C)),e.C++,!0)}y.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new un(this,this.j,e,void 0);let r=this.s;if(this.U&&(r?(r=Vo(r),$o(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ca(this,i,t),n=At(this.G),F(n,"RID",e),F(n,"CVER",22),this.F&&F(n,"X-HTTP-Session-Id",this.F),dn(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(Sa(r)))+"&"+t:this.o&&Vi(n,this.o,r)),Oi(this.h,i),this.bb&&F(n,"TYPE","init"),this.P?(F(n,"$req",t),F(n,"SID","null"),i.ba=!0,ii(i,n,null)):ii(i,n,t),this.H=2}}else this.H==3&&(e?Br(this,e):this.i.length==0||fa(this.h)||Br(this))};function Br(e,t){var n;t?n=t.m:n=e.W++;const s=At(e.G);F(s,"SID",e.J),F(s,"RID",n),F(s,"AID",e.V),dn(e,s),e.o&&e.s&&Vi(s,e.o,e.s),n=new un(e,e.j,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=Ca(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Oi(e.h,n),ii(n,s,t)}function dn(e,t){e.ma&&_i(e.ma,function(n,s){F(t,s,n)}),e.l&&aa({},function(n,s){F(t,s,n)})}function Ca(e,t,n){n=Math.min(e.i.length,n);var s=e.l?st(e.l.Va,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=r,0>l)r=Math.max(0,i[u].h-100),a=!1;else try{rc(c,o,"req"+l+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.F=e,s}function ka(e){e.g||e.u||(e.ba=1,Go(e.Ma,e),e.A=0)}function Ui(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=on(st(e.Ma,e),Da(e,e.A)),e.A++,!0)}y.Ma=function(){if(this.u=null,Aa(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=on(st(this.jb,this),e)}};y.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,at(10),ms(this),Aa(this))};function qi(e){e.B!=null&&(C.clearTimeout(e.B),e.B=null)}function Aa(e){e.g=new un(e,e.j,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=At(e.wa);F(t,"RID","rpc"),F(t,"SID",e.J),F(t,"CI",e.M?"0":"1"),F(t,"AID",e.V),F(t,"TYPE","xmlhttp"),dn(e,t),e.o&&e.s&&Vi(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=fs(At(t)),n.s=null,n.S=!0,sa(n,e)}y.ib=function(){this.v!=null&&(this.v=null,ms(this),Ui(this),at(19))};function jn(e){e.v!=null&&(C.clearTimeout(e.v),e.v=null)}function xa(e,t){var n=null;if(e.g==t){jn(e),qi(e),e.g=null;var s=2}else if(oi(e.h,t))n=t.F,ga(e.h,t),s=1;else return;if(e.H!=0){if(e.ta=t.aa,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;s=ls(),X(s,new Zo(s,n)),ys(e)}else ka(e);else if(i=t.o,i==3||i==0&&0<e.ta||!(s==1&&hc(e,t)||s==2&&Ui(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:jt(e,5);break;case 4:jt(e,10);break;case 3:jt(e,6);break;default:jt(e,2)}}}function Da(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function jt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=st(e.pb,e);n||(n=new Gt("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||qn(n,"https"),fs(n)),oc(n.toString(),s)}else at(2);e.H=0,e.l&&e.l.za(t),Na(e),_a(e)}y.pb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function Na(e){if(e.H=0,e.pa=[],e.l){const t=ma(e.h);(t.length!=0||e.i.length!=0)&&(br(e.pa,t),br(e.pa,e.i),e.h.i.length=0,Si(e.i),e.i.length=0),e.l.ya()}}function ba(e,t,n){var s=n instanceof Gt?At(n):new Gt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),Bn(s,s.m);else{var i=C.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new Gt(null,void 0);s&&qn(r,s),t&&(r.g=t),i&&Bn(r,i),n&&(r.l=n),s=r}return n=e.F,t=e.Da,n&&t&&F(s,n,t),F(s,"VER",e.qa),dn(e,s),s}function Ra(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new U(new cn({ob:!0})):new U(e.va),t.Oa(e.I),t}function Ma(){}y=Ma.prototype;y.Ba=function(){};y.Aa=function(){};y.za=function(){};y.ya=function(){};y.Va=function(){};function zn(){if(pe&&!(10<=Number(xl)))throw Error("Environmental error: no available transport.")}zn.prototype.g=function(e,t){return new ht(e,t)};function ht(e,t){Q.call(this),this.g=new Ia(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Vn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Vn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ce(this)}H(ht,Q);ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=ba(e,null,e.Y),ys(e)};ht.prototype.close=function(){$i(this.g)};ht.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Di(e),e=n);t.i.push(new nc(t.fb++,e)),t.H==3&&ys(t)};ht.prototype.N=function(){this.g.l=null,delete this.j,$i(this.g),delete this.g,ht.$.N.call(this)};function La(e){Mi.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}H(La,Mi);function Oa(){Li.call(this),this.status=1}H(Oa,Li);function Ce(e){this.g=e}H(Ce,Ma);Ce.prototype.Ba=function(){X(this.g,"a")};Ce.prototype.Aa=function(e){X(this.g,new La(e))};Ce.prototype.za=function(e){X(this.g,new Oa)};Ce.prototype.ya=function(){X(this.g,"b")};function dc(){this.blockSize=-1}function mt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}H(mt,dc);mt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function js(e,t,n){n||(n=0);var s=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)s[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var r=e.g[3],o=t+(r^n&(i^r))+s[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(r^n&(i^r))+s[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(i^t&(n^i))+s[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(n^r&(t^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(t^i&(r^t))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^r&(n^i))+s[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(n^i))+s[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(t^n))+s[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(r^t))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^r)+s[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^r)+s[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^i)+s[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^t)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~r))+s[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~r))+s[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~i))+s[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+r&4294967295}mt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,s=this.m,i=this.h,r=0;r<t;){if(i==0)for(;r<=n;)js(this,e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[i++]=e.charCodeAt(r++),i==this.blockSize){js(this,s),i=0;break}}else for(;r<t;)if(s[i++]=e[r++],i==this.blockSize){js(this,s),i=0;break}}this.h=i,this.i+=t};mt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};function R(e,t){this.h=t;for(var n=[],s=!0,i=e.length-1;0<=i;i--){var r=e[i]|0;s&&r==t||(n[i]=r,s=!1)}this.g=n}var fc={};function Bi(e){return-128<=e&&128>e?Lo(fc,e,function(t){return new R([t|0],0>t?-1:0)}):new R([e|0],0>e?-1:0)}function Et(e){if(isNaN(e)||!isFinite(e))return ce;if(0>e)return Y(Et(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=ai;return new R(t,0)}function Pa(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Y(Pa(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Et(Math.pow(t,8)),s=ce,i=0;i<e.length;i+=8){var r=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+r),t);8>r?(r=Et(Math.pow(t,r)),s=s.R(r).add(Et(o))):(s=s.R(n),s=s.add(Et(o)))}return s}var ai=4294967296,ce=Bi(0),ui=Bi(1),jr=Bi(16777216);y=R.prototype;y.ea=function(){if(dt(this))return-Y(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:ai+s)*t,t*=ai}return e};y.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Ct(this))return"0";if(dt(this))return"-"+Y(this).toString(e);for(var t=Et(Math.pow(e,6)),n=this,s="";;){var i=Gn(n,t).g;n=Kn(n,i.R(t));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Ct(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};y.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Ct(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function dt(e){return e.h==-1}y.X=function(e){return e=Kn(this,e),dt(e)?-1:Ct(e)?0:1};function Y(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new R(n,~e.h).add(ui)}y.abs=function(){return dt(this)?Y(this):this};y.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,i=0;i<=t;i++){var r=s+(this.D(i)&65535)+(e.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new R(n,n[n.length-1]&-2147483648?-1:0)};function Kn(e,t){return e.add(Y(t))}y.R=function(e){if(Ct(this)||Ct(e))return ce;if(dt(this))return dt(e)?Y(this).R(Y(e)):Y(Y(this).R(e));if(dt(e))return Y(this.R(Y(e)));if(0>this.X(jr)&&0>e.X(jr))return Et(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<e.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*s+2*i]+=o*u,Cn(n,2*s+2*i),n[2*s+2*i+1]+=r*u,Cn(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Cn(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Cn(n,2*s+2*i+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new R(n,0)};function Cn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Me(e,t){this.g=e,this.h=t}function Gn(e,t){if(Ct(t))throw Error("division by zero");if(Ct(e))return new Me(ce,ce);if(dt(e))return t=Gn(Y(e),t),new Me(Y(t.g),Y(t.h));if(dt(t))return t=Gn(e,Y(t)),new Me(Y(t.g),t.h);if(30<e.g.length){if(dt(e)||dt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ui,s=t;0>=s.X(e);)n=zr(n),s=zr(s);var i=ie(n,1),r=ie(s,1);for(s=ie(s,2),n=ie(n,2);!Ct(s);){var o=r.add(s);0>=o.X(e)&&(i=i.add(n),r=o),s=ie(s,1),n=ie(n,1)}return t=Kn(e,i.R(t)),new Me(i,t)}for(i=ce;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Et(n),o=r.R(t);dt(o)||0<o.X(e);)n-=s,r=Et(n),o=r.R(t);Ct(r)&&(r=ui),i=i.add(r),e=Kn(e,o)}return new Me(i,e)}y.gb=function(e){return Gn(this,e).h};y.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new R(n,this.h&e.h)};y.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new R(n,this.h|e.h)};y.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new R(n,this.h^e.h)};function zr(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new R(n,e.h)}function ie(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,i=[],r=0;r<s;r++)i[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new R(i,e.h)}zn.prototype.createWebChannel=zn.prototype.g;ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;cs.NO_ERROR=0;cs.TIMEOUT=8;cs.HTTP_ERROR=6;ta.COMPLETE="complete";ea.EventType=an;an.OPEN="a";an.CLOSE="b";an.ERROR="c";an.MESSAGE="d";Q.prototype.listen=Q.prototype.O;U.prototype.listenOnce=U.prototype.P;U.prototype.getLastError=U.prototype.Sa;U.prototype.getLastErrorCode=U.prototype.Ia;U.prototype.getStatus=U.prototype.da;U.prototype.getResponseJson=U.prototype.Wa;U.prototype.getResponseText=U.prototype.ja;U.prototype.send=U.prototype.ha;U.prototype.setWithCredentials=U.prototype.Oa;mt.prototype.digest=mt.prototype.l;mt.prototype.reset=mt.prototype.reset;mt.prototype.update=mt.prototype.j;R.prototype.add=R.prototype.add;R.prototype.multiply=R.prototype.R;R.prototype.modulo=R.prototype.gb;R.prototype.compare=R.prototype.X;R.prototype.toNumber=R.prototype.ea;R.prototype.toString=R.prototype.toString;R.prototype.getBits=R.prototype.D;R.fromNumber=Et;R.fromString=Pa;var pc=function(){return new zn},gc=function(){return ls()},zs=cs,mc=ta,yc=te,Kr={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},vc=cn,kn=ea,wc=U,Ec=mt,he=R;const Gr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Z.UNAUTHENTICATED=new Z(null),Z.GOOGLE_CREDENTIALS=new Z("google-credentials-uid"),Z.FIRST_PARTY=new Z("first-party-uid"),Z.MOCK_USER=new Z("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ke="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new ll("@firebase/firestore");function Qr(){return Yt.logLevel}function w(e,...t){if(Yt.logLevel<=je.DEBUG){const n=t.map(ji);Yt.debug(`Firestore (${ke}): ${e}`,...n)}}function xt(e,...t){if(Yt.logLevel<=je.ERROR){const n=t.map(ji);Yt.error(`Firestore (${ke}): ${e}`,...n)}}function ge(e,...t){if(Yt.logLevel<=je.WARN){const n=t.map(ji);Yt.warn(`Firestore (${ke}): ${e}`,...n)}}function ji(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e="Unexpected state"){const t=`FIRESTORE (${ke}) INTERNAL ASSERTION FAILED: `+e;throw xt(t),new Error(t)}function P(e,t){e||_()}function A(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class m extends sl{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Tc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Z.UNAUTHENTICATED))}shutdown(){}}class Sc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ic{constructor(t){this.t=t,this.currentUser=Z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new Mt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Mt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Mt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(P(typeof s.accessToken=="string"),new Fa(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return P(t===null||typeof t=="string"),new Z(t)}}class _c{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=Z.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Cc{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new _c(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ac{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=r=>{r.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(P(typeof n.token=="string"),this.T=n.token,new kc(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=xc(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function b(e,t){return e<t?-1:e>t?1:0}function me(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new m(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new m(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new m(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new m(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return K.fromMillis(Date.now())}static fromDate(t){return K.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new K(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?b(this.nanoseconds,t.nanoseconds):b(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.timestamp=t}static fromTimestamp(t){return new k(t)}static min(){return new k(new K(0,0))}static max(){return new k(new K(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,n,s){n===void 0?n=0:n>t.length&&_(),s===void 0?s=t.length-n:s>t.length-n&&_(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ye.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ye?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class O extends Ye{construct(t,n,s){return new O(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new m(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new O(n)}static emptyPath(){return new O([])}}const Dc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Ye{construct(t,n,s){return new nt(t,n,s)}static isValidIdentifier(t){return Dc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new m(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new m(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new m(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new m(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(O.fromString(t))}static fromName(t){return new E(O.fromString(t).popFirst(5))}static empty(){return new E(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return O.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new O(t.slice()))}}function Nc(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=k.fromTimestamp(s===1e9?new K(n+1,0):new K(n,s));return new Pt(i,E.empty(),t)}function bc(e){return new Pt(e.readTime,e.key,-1)}class Pt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Pt(k.min(),E.empty(),-1)}static max(){return new Pt(k.max(),E.empty(),-1)}}function Rc(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:b(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Mc)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&_(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,s)=>{n(t)})}static reject(t){return new g((n,s)=>{s(t)})}static waitFor(t){return new g((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(t){let n=g.resolve(!1);for(const s of t)n=n.next(i=>i?g.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new g((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const l=u;n(t[l]).next(c=>{o[l]=c,++a,a===r&&s(o)},c=>i(c))}})}static doWhile(t,n){return new g((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function pn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}zi.ct=-1;function vs(e){return e==null}function Qn(e){return e===0&&1/e==-1/0}function Oc(e){return typeof e=="number"&&Number.isInteger(e)&&!Qn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ae(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function $a(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,n){this.comparator=t,this.root=n||W.EMPTY}insert(t,n){return new $(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,W.BLACK,null,null))}remove(t){return new $(this.comparator,this.root.remove(t,this.comparator).copy(null,null,W.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new An(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new An(this.root,t,this.comparator,!1)}getReverseIterator(){return new An(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new An(this.root,t,this.comparator,!0)}}class An{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class W{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s??W.RED,this.left=i??W.EMPTY,this.right=r??W.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new W(t??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return W.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return W.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,W.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,W.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _();const t=this.left.check();if(t!==this.right.check())throw _();return t+(this.isRed()?0:1)}}W.EMPTY=null,W.RED=!0,W.BLACK=!1;W.EMPTY=new class{constructor(){this.size=0}get key(){throw _()}get value(){throw _()}get color(){throw _()}get left(){throw _()}get right(){throw _()}copy(e,t,n,s,i){return this}insert(e,t,n){return new W(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.comparator=t,this.data=new $(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wr(this.data.getIterator())}getIteratorFrom(t){return new Wr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new rt(this.comparator);return n.data=t,n}}class Wr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.fields=t,t.sort(nt.comparator)}static empty(){return new pt([])}unionWith(t){let n=new rt(nt.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new pt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return me(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ua("Invalid base64 string: "+i):i}}(t);return new ot(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new ot(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return b(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const Pc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ft(e){if(P(!!e),typeof e=="string"){let t=0;const n=Pc.exec(e);if(P(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:j(e.seconds),nanos:j(e.nanos)}}function j(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Xt(e){return typeof e=="string"?ot.fromBase64String(e):ot.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ki(e){const t=e.mapValue.fields.__previous_value__;return ws(t)?Ki(t):t}function Xe(e){const t=Ft(e.mapValue.fields.__local_write_time__.timestampValue);return new K(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t,n,s,i,r,o,a,u,l){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class Je{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Je("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Je&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ws(e)?4:Vc(e)?9007199254740991:10:_()}function It(e,t){if(e===t)return!0;const n=Jt(e);if(n!==Jt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Xe(e).isEqual(Xe(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Ft(s.timestampValue),o=Ft(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Xt(s.bytesValue).isEqual(Xt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return j(s.geoPointValue.latitude)===j(i.geoPointValue.latitude)&&j(s.geoPointValue.longitude)===j(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return j(s.integerValue)===j(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=j(s.doubleValue),o=j(i.doubleValue);return r===o?Qn(r)===Qn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return me(e.arrayValue.values||[],t.arrayValue.values||[],It);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Hr(r)!==Hr(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!It(r[a],o[a])))return!1;return!0}(e,t);default:return _()}}function Ze(e,t){return(e.values||[]).find(n=>It(n,t))!==void 0}function ye(e,t){if(e===t)return 0;const n=Jt(e),s=Jt(t);if(n!==s)return b(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return b(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=j(i.integerValue||i.doubleValue),a=j(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Yr(e.timestampValue,t.timestampValue);case 4:return Yr(Xe(e),Xe(t));case 5:return b(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Xt(i),a=Xt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=b(o[u],a[u]);if(l!==0)return l}return b(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=b(j(i.latitude),j(r.latitude));return o!==0?o:b(j(i.longitude),j(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=ye(o[u],a[u]);if(l)return l}return b(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===xn.mapValue&&r===xn.mapValue)return 0;if(i===xn.mapValue)return 1;if(r===xn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=b(a[c],l[c]);if(h!==0)return h;const p=ye(o[a[c]],u[l[c]]);if(p!==0)return p}return b(a.length,l.length)}(e.mapValue,t.mapValue);default:throw _()}}function Yr(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return b(e,t);const n=Ft(e),s=Ft(t),i=b(n.seconds,s.seconds);return i!==0?i:b(n.nanos,s.nanos)}function ve(e){return li(e)}function li(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=Ft(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Xt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=li(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${li(s.fields[a])}`;return r+"}"}(e.mapValue):_();var t,n}function Hn(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ci(e){return!!e&&"integerValue"in e}function Gi(e){return!!e&&"arrayValue"in e}function Xr(e){return!!e&&"nullValue"in e}function Jr(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Rn(e){return!!e&&"mapValue"in e}function Ue(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ae(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Ue(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ue(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Vc(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.value=t}static empty(){return new ft({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Rn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ue(n)}setAll(t){let n=nt.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Ue(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Rn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return It(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Rn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Ae(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new ft(Ue(this.value))}}function qa(e){const t=[];return Ae(e.fields,(n,s)=>{const i=new nt([n]);if(Rn(s)){const r=qa(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new pt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new tt(t,0,k.min(),k.min(),k.min(),ft.empty(),0)}static newFoundDocument(t,n,s,i){return new tt(t,1,n,k.min(),s,i,0)}static newNoDocument(t,n){return new tt(t,2,n,k.min(),k.min(),ft.empty(),0)}static newUnknownDocument(t,n){return new tt(t,3,n,k.min(),k.min(),ft.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(k.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=k.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,n){this.position=t,this.inclusive=n}}function Zr(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=ye(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function to(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!It(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,n="asc"){this.field=t,this.dir=n}}function $c(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{}class z extends Ba{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new qc(t,n,s):n==="array-contains"?new zc(t,s):n==="in"?new Kc(t,s):n==="not-in"?new Gc(t,s):n==="array-contains-any"?new Qc(t,s):new z(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Bc(t,s):new jc(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ye(n,this.value)):n!==null&&Jt(this.value)===Jt(n)&&this.matchesComparison(ye(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return _()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class yt extends Ba{constructor(t,n){super(),this.filters=t,this.op=n,this.lt=null}static create(t,n){return new yt(t,n)}matches(t){return ja(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft(n=>n.isInequality());return t!==null?t.field:null}ft(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function ja(e){return e.op==="and"}function za(e){return Uc(e)&&ja(e)}function Uc(e){for(const t of e.filters)if(t instanceof yt)return!1;return!0}function hi(e){if(e instanceof z)return e.field.canonicalString()+e.op.toString()+ve(e.value);if(za(e))return e.filters.map(t=>hi(t)).join(",");{const t=e.filters.map(n=>hi(n)).join(",");return`${e.op}(${t})`}}function Ka(e,t){return e instanceof z?function(n,s){return s instanceof z&&n.op===s.op&&n.field.isEqual(s.field)&&It(n.value,s.value)}(e,t):e instanceof yt?function(n,s){return s instanceof yt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Ka(r,s.filters[o]),!0):!1}(e,t):void _()}function Ga(e){return e instanceof z?function(t){return`${t.field.canonicalString()} ${t.op} ${ve(t.value)}`}(e):e instanceof yt?function(t){return t.op.toString()+" {"+t.getFilters().map(Ga).join(" ,")+"}"}(e):"Filter"}class qc extends z{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class Bc extends z{constructor(t,n){super(t,"in",n),this.keys=Qa("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class jc extends z{constructor(t,n){super(t,"not-in",n),this.keys=Qa("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Qa(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class zc extends z{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Gi(n)&&Ze(n.arrayValue,this.value)}}class Kc extends z{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ze(this.value.arrayValue,n)}}class Gc extends z{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ze(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ze(this.value.arrayValue,n)}}class Qc extends z{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Gi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ze(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function eo(e,t=null,n=[],s=[],i=null,r=null,o=null){return new Hc(e,t,n,s,i,r,o)}function Qi(e){const t=A(e);if(t.dt===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>hi(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),vs(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ve(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ve(s)).join(",")),t.dt=n}return t.dt}function Hi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!$c(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ka(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!to(e.startAt,t.startAt)&&to(e.endAt,t.endAt)}function di(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function Wc(e,t,n,s,i,r,o,a){return new ee(e,t,n,s,i,r,o,a)}function Ha(e){return new ee(e)}function no(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Wi(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Es(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Yi(e){return e.collectionGroup!==null}function Qt(e){const t=A(e);if(t.wt===null){t.wt=[];const n=Es(t),s=Wi(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new de(n)),t.wt.push(new de(nt.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new de(nt.keyField(),r))}}}return t.wt}function Dt(e){const t=A(e);if(!t._t)if(t.limitType==="F")t._t=eo(t.path,t.collectionGroup,Qt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Qt(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new de(r.field,o))}const s=t.endAt?new we(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new we(t.startAt.position,t.startAt.inclusive):null;t._t=eo(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t._t}function fi(e,t){t.getFirstInequalityField(),Es(e);const n=e.filters.concat([t]);return new ee(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Wn(e,t,n){return new ee(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ts(e,t){return Hi(Dt(e),Dt(t))&&e.limitType===t.limitType}function Wa(e){return`${Qi(Dt(e))}|lt:${e.limitType}`}function pi(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Ga(s)).join(", ")}]`),vs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ve(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ve(s)).join(",")),`Target(${n})`}(Dt(e))}; limitType=${e.limitType})`}function Ss(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of Qt(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Zr(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Qt(n),s)||n.endAt&&!function(i,r,o){const a=Zr(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Qt(n),s))}(e,t)}function Yc(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ya(e){return(t,n)=>{let s=!1;for(const i of Qt(e)){const r=Xc(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Xc(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?ye(a,u):_()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return _()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ae(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return $a(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=new $(E.comparator);function Nt(){return Jc}const Xa=new $(E.comparator);function Fe(...e){let t=Xa;for(const n of e)t=t.insert(n.key,n);return t}function Ja(e){let t=Xa;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function zt(){return qe()}function Za(){return qe()}function qe(){return new xe(e=>e.toString(),(e,t)=>e.isEqual(t))}const Zc=new $(E.comparator),th=new rt(E.comparator);function D(...e){let t=th;for(const n of e)t=t.add(n);return t}const eh=new rt(b);function nh(){return eh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qn(t)?"-0":t}}function eu(e){return{integerValue:""+e}}function sh(e,t){return Oc(t)?eu(t):tu(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this._=void 0}}function ih(e,t,n){return e instanceof Yn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ws(i)&&(i=Ki(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof tn?su(e,t):e instanceof en?iu(e,t):function(s,i){const r=nu(s,i),o=so(r)+so(s.gt);return ci(r)&&ci(s.gt)?eu(o):tu(s.serializer,o)}(e,t)}function rh(e,t,n){return e instanceof tn?su(e,t):e instanceof en?iu(e,t):n}function nu(e,t){return e instanceof Xn?ci(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Yn extends Is{}class tn extends Is{constructor(t){super(),this.elements=t}}function su(e,t){const n=ru(t);for(const s of e.elements)n.some(i=>It(i,s))||n.push(s);return{arrayValue:{values:n}}}class en extends Is{constructor(t){super(),this.elements=t}}function iu(e,t){let n=ru(t);for(const s of e.elements)n=n.filter(i=>!It(i,s));return{arrayValue:{values:n}}}class Xn extends Is{constructor(t,n){super(),this.serializer=t,this.gt=n}}function so(e){return j(e.integerValue||e.doubleValue)}function ru(e){return Gi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function oh(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof tn&&s instanceof tn||n instanceof en&&s instanceof en?me(n.elements,s.elements,It):n instanceof Xn&&s instanceof Xn?It(n.gt,s.gt):n instanceof Yn&&s instanceof Yn}(e.transform,t.transform)}class ah{constructor(t,n){this.version=t,this.transformResults=n}}class kt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new kt}static exists(t){return new kt(void 0,t)}static updateTime(t){return new kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class _s{}function ou(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new uu(e.key,kt.none()):new gn(e.key,e.data,kt.none());{const n=e.data,s=ft.empty();let i=new rt(nt.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new ne(e.key,s,new pt(i.toArray()),kt.none())}}function uh(e,t,n){e instanceof gn?function(s,i,r){const o=s.value.clone(),a=ro(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof ne?function(s,i,r){if(!Mn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=ro(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(au(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function Be(e,t,n,s){return e instanceof gn?function(i,r,o,a){if(!Mn(i.precondition,r))return o;const u=i.value.clone(),l=oo(i.fieldTransforms,a,r);return u.setAll(l),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof ne?function(i,r,o,a){if(!Mn(i.precondition,r))return o;const u=oo(i.fieldTransforms,a,r),l=r.data;return l.setAll(au(i)),l.setAll(u),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(e,t,n,s):function(i,r,o){return Mn(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function lh(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=nu(s.transform,i||null);r!=null&&(n===null&&(n=ft.empty()),n.set(s.field,r))}return n||null}function io(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&me(n,s,(i,r)=>oh(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class gn extends _s{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ne extends _s{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function au(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function ro(e,t,n){const s=new Map;P(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,rh(o,a,n[i]))}return s}function oo(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,ih(r,o,t))}return s}class uu extends _s{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ch extends _s{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&uh(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Be(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Be(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Za();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=ou(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(k.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),D())}isEqual(t){return this.batchId===t.batchId&&me(this.mutations,t.mutations,(n,s)=>io(n,s))&&me(this.baseMutations,t.baseMutations,(n,s)=>io(n,s))}}class Xi{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){P(t.mutations.length===s.length);let i=Zc;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Xi(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B,N;function ph(e){switch(e){default:return _();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function lu(e){if(e===void 0)return xt("GRPC error has no .code"),d.UNKNOWN;switch(e){case B.OK:return d.OK;case B.CANCELLED:return d.CANCELLED;case B.UNKNOWN:return d.UNKNOWN;case B.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case B.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case B.INTERNAL:return d.INTERNAL;case B.UNAVAILABLE:return d.UNAVAILABLE;case B.UNAUTHENTICATED:return d.UNAUTHENTICATED;case B.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case B.NOT_FOUND:return d.NOT_FOUND;case B.ALREADY_EXISTS:return d.ALREADY_EXISTS;case B.PERMISSION_DENIED:return d.PERMISSION_DENIED;case B.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case B.ABORTED:return d.ABORTED;case B.OUT_OF_RANGE:return d.OUT_OF_RANGE;case B.UNIMPLEMENTED:return d.UNIMPLEMENTED;case B.DATA_LOSS:return d.DATA_LOSS;default:return _()}}(N=B||(B={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Dn}static getOrCreateInstance(){return Dn===null&&(Dn=new Ji),Dn}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Dn=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=new he([4294967295,4294967295],0);function ao(e){const t=gh().encode(e),n=new Ec;return n.update(t),new Uint8Array(n.digest())}function uo(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new he([n,s],0),new he([i,r],0)]}class Zi{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ve(`Invalid padding: ${n}`);if(s<0)throw new Ve(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Ve(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Ve(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*t.length-n,this.Tt=he.fromNumber(this.It)}Et(t,n,s){let i=t.add(n.multiply(he.fromNumber(s)));return i.compare(mh)===1&&(i=new he([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}vt(t){if(this.It===0)return!1;const n=ao(t),[s,i]=uo(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);if(!this.At(o))return!1}return!0}static create(t,n,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new Zi(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.It===0)return;const n=ao(t),[s,i]=uo(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);this.Rt(o)}}Rt(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Ve extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,mn.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Cs(k.min(),i,new $(b),Nt(),D())}}class mn{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new mn(s,n,D(),D(),D())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,n,s,i){this.Pt=t,this.removedTargetIds=n,this.key=s,this.bt=i}}class cu{constructor(t,n){this.targetId=t,this.Vt=n}}class hu{constructor(t,n,s=ot.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class lo{constructor(){this.St=0,this.Dt=ho(),this.Ct=ot.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=D(),n=D(),s=D();return this.Dt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:_()}}),new mn(this.Ct,this.xt,t,n,s)}Ft(){this.Nt=!1,this.Dt=ho()}Bt(t,n){this.Nt=!0,this.Dt=this.Dt.insert(t,n)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class yh{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=Nt(),this.zt=co(),this.Wt=new $(b)}Ht(t){for(const n of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(n,t.bt):this.Yt(n,t.key,t.bt);for(const n of t.removedTargetIds)this.Yt(n,t.key,t.bt)}Xt(t){this.forEachTarget(t,n=>{const s=this.Zt(n);switch(t.state){case 0:this.te(n)&&s.$t(t.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(t.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(t.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(t.resumeToken));break;default:_()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qt.forEach((s,i)=>{this.te(i)&&n(i)})}ne(t){var n;const s=t.targetId,i=t.Vt.count,r=this.se(s);if(r){const o=r.target;if(di(o))if(i===0){const a=new E(o.path);this.Yt(s,a,tt.newNoDocument(a,k.min()))}else P(i===1);else{const a=this.ie(s);if(a!==i){const u=this.re(t,a);if(u!==0){this.ee(s);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(n=Ji.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,c,h){var p,f,v,T,S,q;const M={localCacheCount:c,existenceFilterCount:h.count},ut=h.unchangedNames;return ut&&(M.bloomFilter={applied:l===0,hashCount:(p=ut==null?void 0:ut.hashCount)!==null&&p!==void 0?p:0,bitmapLength:(T=(v=(f=ut==null?void 0:ut.bits)===null||f===void 0?void 0:f.bitmap)===null||v===void 0?void 0:v.length)!==null&&T!==void 0?T:0,padding:(q=(S=ut==null?void 0:ut.bits)===null||S===void 0?void 0:S.padding)!==null&&q!==void 0?q:0}),M}(u,a,t.Vt))}}}}re(t,n){const{unchangedNames:s,count:i}=t.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=s;let u,l;try{u=Xt(r).toUint8Array()}catch(c){if(c instanceof Ua)return ge("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{l=new Zi(u,o,a)}catch(c){return ge(c instanceof Ve?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return l.It===0?1:i!==n-this.oe(t.targetId,l)?2:0}oe(t,n){const s=this.Gt.getRemoteKeysForTarget(t);let i=0;return s.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.vt(a)||(this.Yt(t,r,null),i++)}),i}ce(t){const n=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&di(a.target)){const u=new E(a.target.path);this.jt.get(u)!==null||this.ae(o,u)||this.Yt(o,u,tt.newNoDocument(u,t))}r.Mt&&(n.set(o,r.Ot()),r.Ft())}});let s=D();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.se(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(t));const i=new Cs(t,n,this.Wt,this.jt,s);return this.jt=Nt(),this.zt=co(),this.Wt=new $(b),i}Jt(t,n){if(!this.te(t))return;const s=this.ae(t,n.key)?2:0;this.Zt(t).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(t))}Yt(t,n,s){if(!this.te(t))return;const i=this.Zt(t);this.ae(t,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(t)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(t){this.Qt.delete(t)}ie(t){const n=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let n=this.Qt.get(t);return n||(n=new lo,this.Qt.set(t,n)),n}he(t){let n=this.zt.get(t);return n||(n=new rt(b),this.zt=this.zt.insert(t,n)),n}te(t){const n=this.se(t)!==null;return n||w("WatchChangeAggregator","Detected inactive target",t),n}se(t){const n=this.Qt.get(t);return n&&n.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new lo),this.Gt.getRemoteKeysForTarget(t).forEach(n=>{this.Yt(t,n,null)})}ae(t,n){return this.Gt.getRemoteKeysForTarget(t).has(n)}}function co(){return new $(E.comparator)}function ho(){return new $(E.comparator)}const vh=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),wh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Eh=(()=>({and:"AND",or:"OR"}))();class Th{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function gi(e,t){return e.useProto3Json||vs(t)?t:{value:t}}function Jn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function du(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Sh(e,t){return Jn(e,t.toTimestamp())}function St(e){return P(!!e),k.fromTimestamp(function(t){const n=Ft(t);return new K(n.seconds,n.nanos)}(e))}function tr(e,t){return function(n){return new O(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function fu(e){const t=O.fromString(e);return P(yu(t)),t}function mi(e,t){return tr(e.databaseId,t.path)}function Ks(e,t){const n=fu(t);if(n.get(1)!==e.databaseId.projectId)throw new m(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new m(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(pu(n))}function yi(e,t){return tr(e.databaseId,t)}function Ih(e){const t=fu(e);return t.length===4?O.emptyPath():pu(t)}function vi(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function pu(e){return P(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function fo(e,t,n){return{name:mi(e,t),fields:n.value.mapValue.fields}}function _h(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:_()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,l){return u.useProto3Json?(P(l===void 0||typeof l=="string"),ot.fromBase64String(l||"")):(P(l===void 0||l instanceof Uint8Array),ot.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?d.UNKNOWN:lu(u.code);return new m(l,u.message||"")}(o);n=new hu(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ks(e,s.document.name),r=St(s.document.updateTime),o=s.document.createTime?St(s.document.createTime):k.min(),a=new ft({mapValue:{fields:s.document.fields}}),u=tt.newFoundDocument(i,r,o,a),l=s.targetIds||[],c=s.removedTargetIds||[];n=new Ln(l,c,u.key,u)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Ks(e,s.document),r=s.readTime?St(s.readTime):k.min(),o=tt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ln([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Ks(e,s.document),r=s.removedTargetIds||[];n=new Ln([],r,i,null)}else{if(!("filter"in t))return _();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new fh(i,r),a=s.targetId;n=new cu(a,o)}}return n}function Ch(e,t){let n;if(t instanceof gn)n={update:fo(e,t.key,t.value)};else if(t instanceof uu)n={delete:mi(e,t.key)};else if(t instanceof ne)n={update:fo(e,t.key,t.data),updateMask:Lh(t.fieldMask)};else{if(!(t instanceof ch))return _();n={verify:mi(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Yn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof tn)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof en)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Xn)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw _()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Sh(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:_()}(e,t.precondition)),n}function kh(e,t){return e&&e.length>0?(P(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?St(s.updateTime):St(i);return r.isEqual(k.min())&&(r=St(i)),new ah(r,s.transformResults||[])}(n,t))):[]}function Ah(e,t){return{documents:[yi(e,t.path)]}}function xh(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=yi(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=yi(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length!==0)return mu(yt.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:re(c.field),direction:bh(c.dir)}}(l))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=gi(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Dh(e){let t=Ih(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){P(s===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let r=[];n.where&&(r=function(c){const h=gu(c);return h instanceof yt&&za(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new de(oe(h.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,vs(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,p=c.values||[];return new we(p,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,p=c.values||[];return new we(p,h)}(n.endAt)),Wc(t,i,o,r,a,"F",u,l)}function Nh(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function gu(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=oe(t.unaryFilter.field);return z.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=oe(t.unaryFilter.field);return z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=oe(t.unaryFilter.field);return z.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=oe(t.unaryFilter.field);return z.create(r,"!=",{nullValue:"NULL_VALUE"});default:return _()}}(e):e.fieldFilter!==void 0?function(t){return z.create(oe(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return yt.create(t.compositeFilter.filters.map(n=>gu(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return _()}}(t.compositeFilter.op))}(e):_()}function bh(e){return vh[e]}function Rh(e){return wh[e]}function Mh(e){return Eh[e]}function re(e){return{fieldPath:e.canonicalString()}}function oe(e){return nt.fromServerFormat(e.fieldPath)}function mu(e){return e instanceof z?function(t){if(t.op==="=="){if(Jr(t.value))return{unaryFilter:{field:re(t.field),op:"IS_NAN"}};if(Xr(t.value))return{unaryFilter:{field:re(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Jr(t.value))return{unaryFilter:{field:re(t.field),op:"IS_NOT_NAN"}};if(Xr(t.value))return{unaryFilter:{field:re(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:re(t.field),op:Rh(t.op),value:t.value}}}(e):e instanceof yt?function(t){const n=t.getFilters().map(s=>mu(s));return n.length===1?n[0]:{compositeFilter:{op:Mh(t.op),filters:n}}}(e):_()}function Lh(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function yu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,n,s,i,r=k.min(),o=k.min(),a=ot.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Rt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t){this.fe=t}}function Ph(e){const t=Dh({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Wn(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.rn=new Vh}addToCollectionParentIndex(t,n){return this.rn.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.rn.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(Pt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(Pt.min())}updateCollectionGroup(t,n,s){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class Vh{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new rt(O.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new rt(O.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new Ee(0)}static Mn(){return new Ee(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.changes=new xe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,tt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&Be(s.mutation,i,pt.empty(),K.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,D()).next(()=>s))}getLocalViewOfDocuments(t,n,s=D()){const i=zt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=Fe();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=zt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,D()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=Nt();const o=qe(),a=qe();return n.forEach((u,l)=>{const c=s.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof ne)?r=r.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),Be(c.mutation,l,c.mutation.getFieldMask(),K.now())):o.set(l.key,pt.empty())}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new Uh(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=qe();let i=new $((o,a)=>o-a),r=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=s.get(u)||pt.empty();c=a.applyToLocalView(l,c),s.set(u,c);const h=(i.get(a.batchId)||D()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=Za();c.forEach(p=>{if(!r.has(p)){const f=ou(n.get(p),s.get(p));f!==null&&h.set(p,f),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Yi(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):g.resolve(zt());let a=-1,u=r;return o.next(l=>g.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(c)?g.resolve():this.remoteDocumentCache.getEntry(t,c).next(p=>{u=u.insert(c,p)}))).next(()=>this.populateOverlays(t,l,r)).next(()=>this.computeViews(t,u,l,D())).next(c=>({batchId:a,changes:Ja(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(s=>{let i=Fe();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=Fe();return this.indexManager.getCollectionParents(t,i).next(o=>g.forEach(o,a=>{const u=function(l,c){return new ee(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(l=>{l.forEach((c,h)=>{r=r.insert(c,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,i))).next(r=>{i.forEach((a,u)=>{const l=u.getKey();r.get(l)===null&&(r=r.insert(l,tt.newInvalidDocument(l)))});let o=Fe();return r.forEach((a,u)=>{const l=i.get(a);l!==void 0&&Be(l.mutation,u,pt.empty(),K.now()),Ss(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,n){return g.resolve(this.cs.get(n))}saveBundleMetadata(t,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:St(s.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.hs.get(n))}saveNamedQuery(t,n){return this.hs.set(n.name,function(s){return{name:s.name,query:Ph(s.bundledQuery),readTime:St(s.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.overlays=new $(E.comparator),this.ls=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const s=zt();return g.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.we(t,n,r)}),g.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),g.resolve()}getOverlaysForCollection(t,n,s){const i=zt(),r=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return g.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new $((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let c=r.get(l.largestBatchId);c===null&&(c=zt(),r=r.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=zt(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return g.resolve(a)}we(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new dh(n,s));let r=this.ls.get(n);r===void 0&&(r=D(),this.ls.set(n,r)),this.ls.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.fs=new rt(G.ds),this.ws=new rt(G._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,n){const s=new G(t,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ys(new G(t,n))}ps(t,n){t.forEach(s=>this.removeReference(s,n))}Is(t){const n=new E(new O([])),s=new G(n,t),i=new G(n,t+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const n=new E(new O([])),s=new G(n,t),i=new G(n,t+1);let r=D();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new G(t,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class G{constructor(t,n){this.key=t,this.As=n}static ds(t,n){return E.comparator(t.key,n.key)||b(t.As,n.As)}static _s(t,n){return b(t.As,n.As)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new rt(G.ds)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hh(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new G(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.bs(s),r=i<0?0:i;return g.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new G(n,0),i=new G(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const a=this.Ps(o.As);r.push(a)}),g.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new rt(b);return n.forEach(i=>{const r=new G(i,0),o=new G(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{s=s.add(a.As)})}),g.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new G(new E(r),0);let a=new rt(b);return this.Rs.forEachWhile(u=>{const l=u.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.As)),!0)},o),g.resolve(this.Vs(a))}Vs(t){const n=[];return t.forEach(s=>{const i=this.Ps(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){P(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return g.forEach(n.mutations,i=>{const r=new G(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=s})}Cn(t){}containsKey(t,n){const s=new G(n,0),i=this.Rs.firstAfterOrEqual(s);return g.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Ss(t,n){return this.bs(t)}bs(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Ps(t){const n=this.bs(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t){this.Ds=t,this.docs=new $(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(t,n){let s=Nt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():tt.newInvalidDocument(i))}),g.resolve(s)}getDocumentsMatchingQuery(t,n,s,i){let r=Nt();const o=n.path,a=new E(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Rc(bc(c),s)<=0||(i.has(c.key)||Ss(n,c))&&(r=r.insert(c.key,c.mutableCopy()))}return g.resolve(r)}getAllFromCollectionGroup(t,n,s,i){_()}Cs(t,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Gh(this)}getSize(t){return g.resolve(this.size)}}class Gh extends $h{constructor(t){super(),this.os=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.os.addEntry(t,i)):this.os.removeEntry(s)}),g.waitFor(n)}getFromCache(t,n){return this.os.getEntry(t,n)}getAllFromCache(t,n){return this.os.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t){this.persistence=t,this.xs=new xe(n=>Qi(n),Hi),this.lastRemoteSnapshotVersion=k.min(),this.highestTargetId=0,this.Ns=0,this.ks=new er,this.targetCount=0,this.Ms=Ee.kn()}forEachTarget(t,n){return this.xs.forEach((s,i)=>n(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),g.resolve()}Fn(t){this.xs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ms=new Ee(n),this.highestTargetId=n),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,n){return this.Fn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.Fn(n),g.resolve()}removeTargetData(t,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(r).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const s=this.xs.get(n)||null;return g.resolve(s)}addMatchingKeys(t,n,s){return this.ks.gs(n,s),g.resolve()}removeMatchingKeys(t,n,s){this.ks.ps(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.ks.Is(n),g.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ks.Es(n);return g.resolve(s)}containsKey(t,n){return g.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t,n){this.$s={},this.overlays={},this.Os=new zi(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Qh(this),this.indexManager=new Fh,this.remoteDocumentCache=function(s){return new Kh(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new Oh(n),this.qs=new Bh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new jh,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.$s[t.toKey()];return s||(s=new zh(n,this.referenceDelegate),this.$s[t.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,n,s){w("MemoryPersistence","Starting transaction:",t);const i=new Wh(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(t,n){return g.or(Object.values(this.$s).map(s=>()=>s.containsKey(t,n)))}}class Wh extends Lc{constructor(t){super(),this.currentSequenceNumber=t}}class nr{constructor(t){this.persistence=t,this.Qs=new er,this.js=null}static zs(t){return new nr(t)}get Ws(){if(this.js)return this.js;throw _()}addReference(t,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),g.resolve()}removeReference(t,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Ws.add(n.toString()),g.resolve()}removeTarget(t,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Us(){this.js=new Set}Ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ws,s=>{const i=E.fromPath(s);return this.Hs(t,i).next(r=>{r||n.removeEntry(i,k.min())})}).next(()=>(this.js=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hs(t,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(t){return 0}Hs(t,n){return g.or([()=>g.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gs(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Fi=s,this.Bi=i}static Li(t,n){let s=D(),i=D();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new sr(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this.qi=!1}initialize(t,n){this.Ui=t,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Ki(t,n).next(r=>r||this.Gi(t,n,i,s)).next(r=>r||this.Qi(t,n))}Ki(t,n){if(no(n))return g.resolve(null);let s=Dt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wn(n,null,"F"),s=Dt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=D(...r);return this.Ui.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(u=>{const l=this.ji(n,a);return this.zi(n,l,o,u.readTime)?this.Ki(t,Wn(n,null,"F")):this.Wi(t,l,n,u)}))})))}Gi(t,n,s,i){return no(n)||i.isEqual(k.min())?this.Qi(t,n):this.Ui.getDocuments(t,s).next(r=>{const o=this.ji(n,r);return this.zi(n,o,s,i)?this.Qi(t,n):(Qr()<=je.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pi(n)),this.Wi(t,o,n,Nc(i,-1)))})}ji(t,n){let s=new rt(Ya(t));return n.forEach((i,r)=>{Ss(t,r)&&(s=s.add(r))}),s}zi(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(t,n){return Qr()<=je.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",pi(n)),this.Ui.getDocumentsMatchingQuery(t,n,Pt.min())}Wi(t,n,s,i){return this.Ui.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,n,s,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new $(b),this.Yi=new xe(r=>Qi(r),Hi),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(s)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new qh(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function Jh(e,t,n,s){return new Xh(e,t,n,s)}async function vu(e,t){const n=A(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.tr(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=D();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of r){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(s,u).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function Zh(e,t){const n=A(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let p=g.resolve();return h.forEach(f=>{p=p.next(()=>l.getEntry(a,f)).next(v=>{const T=u.docVersions.get(f);P(T!==null),v.version.compareTo(T)<0&&(c.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),l.addEntry(v)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=D();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function wu(e){const t=A(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Bs.getLastRemoteSnapshotVersion(n))}function td(e,t){const n=A(e),s=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];t.targetChanges.forEach((c,h)=>{const p=i.get(h);if(!p)return;a.push(n.Bs.removeMatchingKeys(r,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(r,c.addedDocuments,h)));let f=p.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(ot.EMPTY_BYTE_STRING,k.min()).withLastLimboFreeSnapshotVersion(k.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,s)),i=i.insert(h,f),function(v,T,S){return v.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,f,c)&&a.push(n.Bs.updateTargetData(r,f))});let u=Nt(),l=D();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(ed(r,o,t.documentUpdates).next(c=>{u=c.nr,l=c.sr})),!s.isEqual(k.min())){const c=n.Bs.getLastRemoteSnapshotVersion(r).next(h=>n.Bs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(c)}return g.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,l)).next(()=>u)}).then(r=>(n.Ji=i,r))}function ed(e,t,n){let s=D(),i=D();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=Nt();return n.forEach((a,u)=>{const l=r.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(k.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{nr:o,sr:i}})}function nd(e,t){const n=A(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function sd(e,t){const n=A(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Bs.getTargetData(s,t).next(r=>r?(i=r,g.resolve(i)):n.Bs.allocateTargetId(s).next(o=>(i=new Rt(t,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(t,s.targetId)),s})}async function wi(e,t,n){const s=A(e),i=s.Ji.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!pn(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(i.target)}function po(e,t,n){const s=A(e);let i=k.min(),r=D();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=A(a),h=c.Yi.get(l);return h!==void 0?g.resolve(c.Ji.get(h)):c.Bs.getTargetData(u,l)}(s,o,Dt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,t,n?i:k.min(),n?r:D())).next(a=>(id(s,Yc(t),a),{documents:a,ir:r})))}function id(e,t,n){let s=e.Xi.get(t)||k.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Xi.set(t,s)}class go{constructor(){this.activeTargetIds=nh()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rd{constructor(){this.Hr=new go,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,n,s){this.Jr[t]=n}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new go,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{Yr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn=null;function Gs(){return Nn===null?Nn=268435456+Math.round(2147483648*Math.random()):Nn++,"0x"+Nn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J="WebChannelConnection";class ld extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.mo=n+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,n,s,i,r){const o=Gs(),a=this.To(t,n);w("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const u={};return this.Eo(u,i,r),this.Ao(t,a,u,s).then(l=>(w("RestConnection",`Received RPC '${t}' ${o}: `,l),l),l=>{throw ge("RestConnection",`RPC '${t}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(t,n,s,i,r,o){return this.Io(t,n,s,i,r)}Eo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+ke,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}To(t,n){const s=ad[t];return`${this.mo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,n,s,i){const r=Gs();return new Promise((o,a)=>{const u=new wc;u.setWithCredentials(!0),u.listenOnce(mc.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case zs.NO_ERROR:const c=u.getResponseJson();w(J,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(c)),o(c);break;case zs.TIMEOUT:w(J,`RPC '${t}' ${r} timed out`),a(new m(d.DEADLINE_EXCEEDED,"Request time out"));break;case zs.HTTP_ERROR:const h=u.getStatus();if(w(J,`RPC '${t}' ${r} failed with status:`,h,"response text:",u.getResponseText()),h>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const f=p==null?void 0:p.error;if(f&&f.status&&f.message){const v=function(T){const S=T.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(S)>=0?S:d.UNKNOWN}(f.status);a(new m(v,f.message))}else a(new m(d.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new m(d.UNAVAILABLE,"Connection failed."));break;default:_()}}finally{w(J,`RPC '${t}' ${r} completed.`)}});const l=JSON.stringify(i);w(J,`RPC '${t}' ${r} sending request:`,i),u.send(n,"POST",l,s,15)})}Ro(t,n,s){const i=Gs(),r=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=pc(),a=gc(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.xmlHttpFactory=new vc({})),this.Eo(u.initMessageHeaders,n,s),u.encodeInitMessageHeaders=!0;const c=r.join("");w(J,`Creating RPC '${t}' stream ${i}: ${c}`,u);const h=o.createWebChannel(c,u);let p=!1,f=!1;const v=new ud({ro:S=>{f?w(J,`Not sending because RPC '${t}' stream ${i} is closed:`,S):(p||(w(J,`Opening RPC '${t}' stream ${i} transport.`),h.open(),p=!0),w(J,`RPC '${t}' stream ${i} sending:`,S),h.send(S))},oo:()=>h.close()}),T=(S,q,M)=>{S.listen(q,ut=>{try{M(ut)}catch(vt){setTimeout(()=>{throw vt},0)}})};return T(h,kn.EventType.OPEN,()=>{f||w(J,`RPC '${t}' stream ${i} transport opened.`)}),T(h,kn.EventType.CLOSE,()=>{f||(f=!0,w(J,`RPC '${t}' stream ${i} transport closed`),v.wo())}),T(h,kn.EventType.ERROR,S=>{f||(f=!0,ge(J,`RPC '${t}' stream ${i} transport errored:`,S),v.wo(new m(d.UNAVAILABLE,"The operation could not be completed")))}),T(h,kn.EventType.MESSAGE,S=>{var q;if(!f){const M=S.data[0];P(!!M);const ut=M,vt=ut.error||((q=ut[0])===null||q===void 0?void 0:q.error);if(vt){w(J,`RPC '${t}' stream ${i} received error:`,vt);const Tn=vt.status;let Os=function(tl){const Ar=B[tl];if(Ar!==void 0)return lu(Ar)}(Tn),kr=vt.message;Os===void 0&&(Os=d.INTERNAL,kr="Unknown error status: "+Tn+" with message "+vt.message),f=!0,v.wo(new m(Os,kr)),h.close()}else w(J,`RPC '${t}' stream ${i} received:`,M),v._o(M)}}),T(a,yc.STAT_EVENT,S=>{S.stat===Kr.PROXY?w(J,`RPC '${t}' stream ${i} detected buffering proxy`):S.stat===Kr.NOPROXY&&w(J,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function Qs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(e){return new Th(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,n,s=1e3,i=1.5,r=6e4){this.ii=t,this.timerId=n,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-s);i>0&&w("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t,n,s,i,r,o,a,u){this.ii=t,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Eu(t,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,t!==4?this.qo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(xt(n.toString()),xt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===n&&this.Zo(s,i)},s=>{t(()=>{const i=new m(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(t,n){const s=this.Xo(this.Fo);this.stream=this.eu(t,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return w("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.Fo===t?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cd extends Tu{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}eu(t,n){return this.connection.Ro("Listen",t,n)}onMessage(t){this.qo.reset();const n=_h(this.serializer,t),s=function(i){if(!("targetChange"in i))return k.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?k.min():r.readTime?St(r.readTime):k.min()}(t);return this.listener.nu(n,s)}su(t){const n={};n.database=vi(this.serializer),n.addTarget=function(i,r){let o;const a=r.target;if(o=di(a)?{documents:Ah(i,a)}:{query:xh(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=du(i,r.resumeToken);const u=gi(i,r.expectedCount);u!==null&&(o.expectedCount=u)}else if(r.snapshotVersion.compareTo(k.min())>0){o.readTime=Jn(i,r.snapshotVersion.toTimestamp());const u=gi(i,r.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,t);const s=Nh(this.serializer,t);s&&(n.labels=s),this.Wo(n)}iu(t){const n={};n.database=vi(this.serializer),n.removeTarget=t,this.Wo(n)}}class hd extends Tu{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,n){return this.connection.Ro("Write",t,n)}onMessage(t){if(P(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const n=kh(t.writeResults,t.commitTime),s=St(t.commitTime);return this.listener.cu(s,n)}return P(!t.writeResults||t.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const t={};t.database=vi(this.serializer),this.Wo(t)}uu(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Ch(this.serializer,s))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new m(d.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new m(d.UNKNOWN,i.toString())})}vo(t,n,s,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new m(d.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class fd{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,t==="Online"&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(xt(n),this.mu=!1):w("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{se(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=A(a);u.vu.add(4),await yn(u),u.bu.set("Unknown"),u.vu.delete(4),await As(u)}(this))})}),this.bu=new fd(s,i)}}async function As(e){if(se(e))for(const t of e.Ru)await t(!0)}async function yn(e){for(const t of e.Ru)await t(!1)}function Su(e,t){const n=A(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),or(n)?rr(n):De(n).Ko()&&ir(n,t))}function Iu(e,t){const n=A(e),s=De(n);n.Au.delete(t),s.Ko()&&_u(n,t),n.Au.size===0&&(s.Ko()?s.jo():se(n)&&n.bu.set("Unknown"))}function ir(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(k.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}De(e).su(t)}function _u(e,t){e.Vu.qt(t),De(e).iu(t)}function rr(e){e.Vu=new yh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),De(e).start(),e.bu.gu()}function or(e){return se(e)&&!De(e).Uo()&&e.Au.size>0}function se(e){return A(e).vu.size===0}function Cu(e){e.Vu=void 0}async function gd(e){e.Au.forEach((t,n)=>{ir(e,t)})}async function md(e,t){Cu(e),or(e)?(e.bu.Iu(t),rr(e)):e.bu.set("Unknown")}async function yd(e,t,n){if(e.bu.set("Online"),t instanceof hu&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Au.delete(o),s.Vu.removeTarget(o))}(e,t)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Zn(e,s)}else if(t instanceof Ln?e.Vu.Ht(t):t instanceof cu?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(k.min()))try{const s=await wu(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Vu.ce(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Au.get(u);l&&i.Au.set(u,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,u)=>{const l=i.Au.get(a);if(!l)return;i.Au.set(a,l.withResumeToken(ot.EMPTY_BYTE_STRING,l.snapshotVersion)),_u(i,a);const c=new Rt(l.target,a,u,l.sequenceNumber);ir(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await Zn(e,s)}}async function Zn(e,t,n){if(!pn(t))throw t;e.vu.add(1),await yn(e),e.bu.set("Offline"),n||(n=()=>wu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await As(e)})}function ku(e,t){return t().catch(n=>Zn(e,n,t))}async function xs(e){const t=A(e),n=Vt(t);let s=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;vd(t);)try{const i=await nd(t.localStore,s);if(i===null){t.Eu.length===0&&n.jo();break}s=i.batchId,wd(t,i)}catch(i){await Zn(t,i)}Au(t)&&xu(t)}function vd(e){return se(e)&&e.Eu.length<10}function wd(e,t){e.Eu.push(t);const n=Vt(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Au(e){return se(e)&&!Vt(e).Uo()&&e.Eu.length>0}function xu(e){Vt(e).start()}async function Ed(e){Vt(e).hu()}async function Td(e){const t=Vt(e);for(const n of e.Eu)t.uu(n.mutations)}async function Sd(e,t,n){const s=e.Eu.shift(),i=Xi.from(s,t,n);await ku(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await xs(e)}async function Id(e,t){t&&Vt(e).ou&&await async function(n,s){if(i=s.code,ph(i)&&i!==d.ABORTED){const r=n.Eu.shift();Vt(n).Qo(),await ku(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await xs(n)}var i}(e,t),Au(e)&&xu(e)}async function yo(e,t){const n=A(e);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=se(n);n.vu.add(3),await yn(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await As(n)}async function _d(e,t){const n=A(e);t?(n.vu.delete(2),await As(n)):t||(n.vu.add(2),await yn(n),n.bu.set("Unknown"))}function De(e){return e.Su||(e.Su=function(t,n,s){const i=A(t);return i.fu(),new cd(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:gd.bind(null,e),ao:md.bind(null,e),nu:yd.bind(null,e)}),e.Ru.push(async t=>{t?(e.Su.Qo(),or(e)?rr(e):e.bu.set("Unknown")):(await e.Su.stop(),Cu(e))})),e.Su}function Vt(e){return e.Du||(e.Du=function(t,n,s){const i=A(t);return i.fu(),new hd(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{uo:Ed.bind(null,e),ao:Id.bind(null,e),au:Td.bind(null,e),cu:Sd.bind(null,e)}),e.Ru.push(async t=>{t?(e.Du.Qo(),await xs(e)):(await e.Du.stop(),e.Eu.length>0&&(w("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new ar(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new m(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ur(e,t){if(xt("AsyncQueue",`${t}: ${e}`),pn(e))return new m(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=Fe(),this.sortedSet=new $(this.comparator)}static emptySet(t){return new fe(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof fe)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new fe;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.Cu=new $(E.comparator)}track(t){const n=t.doc.key,s=this.Cu.get(n);s?t.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,t):t.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Cu=this.Cu.remove(n):t.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:t.doc}):_():this.Cu=this.Cu.insert(n,t)}xu(){const t=[];return this.Cu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Te{constructor(t,n,s,i,r,o,a,u,l){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Te(t,n,fe.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ts(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.Nu=void 0,this.listeners=[]}}class kd{constructor(){this.queries=new xe(t=>Wa(t),Ts),this.onlineState="Unknown",this.ku=new Set}}async function Ad(e,t){const n=A(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Cd),i)try{r.Nu=await n.onListen(s)}catch(o){const a=ur(o,`Initialization of query '${pi(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Mu(n.onlineState),r.Nu&&t.$u(r.Nu)&&lr(n)}async function xd(e,t){const n=A(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Dd(e,t){const n=A(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.$u(i)&&(s=!0);o.Nu=i}}s&&lr(n)}function Nd(e,t,n){const s=A(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function lr(e){e.ku.forEach(t=>{t.next()})}class bd{constructor(t,n,s){this.query=t,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Te(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),n=!0):this.qu(t,this.onlineState)&&(this.Uu(t),n=!0),this.Bu=t,n}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),n=!0),n}qu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Lu(t){if(t.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(t){t=Te.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t){this.key=t}}class Nu{constructor(t){this.key=t}}class Rd{constructor(t,n){this.query=t,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=D(),this.mutatedKeys=D(),this.tc=Ya(t),this.ec=new fe(this.tc)}get nc(){return this.Yu}sc(t,n){const s=n?n.ic:new vo,i=n?n.ec:this.ec;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,h)=>{const p=i.get(c),f=Ss(this.query,h)?h:null,v=!!p&&this.mutatedKeys.has(p.key),T=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let S=!1;p&&f?p.data.isEqual(f.data)?v!==T&&(s.track({type:3,doc:f}),S=!0):this.rc(p,f)||(s.track({type:2,doc:f}),S=!0,(u&&this.tc(f,u)>0||l&&this.tc(f,l)<0)&&(a=!0)):!p&&f?(s.track({type:0,doc:f}),S=!0):p&&!f&&(s.track({type:1,doc:p}),S=!0,(u||l)&&(a=!0)),S&&(f?(o=o.add(f),r=T?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),s.track({type:1,doc:c})}return{ec:o,ic:s,zi:a,mutatedKeys:r}}rc(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const r=t.ic.xu();r.sort((l,c)=>function(h,p){const f=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _()}};return f(h)-f(p)}(l.type,c.type)||this.tc(l.doc,c.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,u=a!==this.Xu;return this.Xu=a,r.length!==0||u?{snapshot:new Te(this.query,t.ec,i,r,t.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new vo,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=D(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return t.forEach(s=>{this.Zu.has(s)||n.push(new Nu(s))}),this.Zu.forEach(s=>{t.has(s)||n.push(new Du(s))}),n}hc(t){this.Yu=t.ir,this.Zu=D();const n=this.sc(t.documents);return this.applyChanges(n,!0)}lc(){return Te.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class Md{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Ld{constructor(t){this.key=t,this.fc=!1}}class Od{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new xe(a=>Wa(a),Ts),this._c=new Map,this.mc=new Set,this.gc=new $(E.comparator),this.yc=new Map,this.Ic=new er,this.Tc={},this.Ec=new Map,this.Ac=Ee.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Pd(e,t){const n=Gd(e);let s,i;const r=n.wc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const o=await sd(n.localStore,Dt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Fd(n,t,s,a==="current",o.resumeToken),n.isPrimaryClient&&Su(n.remoteStore,o)}return i}async function Fd(e,t,n,s,i){e.Rc=(h,p,f)=>async function(v,T,S,q){let M=T.view.sc(S);M.zi&&(M=await po(v.localStore,T.query,!1).then(({documents:Tn})=>T.view.sc(Tn,M)));const ut=q&&q.targetChanges.get(T.targetId),vt=T.view.applyChanges(M,v.isPrimaryClient,ut);return Eo(v,T.targetId,vt.cc),vt.snapshot}(e,h,p,f);const r=await po(e.localStore,t,!0),o=new Rd(t,r.ir),a=o.sc(r.documents),u=mn.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),l=o.applyChanges(a,e.isPrimaryClient,u);Eo(e,n,l.cc);const c=new Md(t,n,o);return e.wc.set(t,c),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),l.snapshot}async function Vd(e,t){const n=A(e),s=n.wc.get(t),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter(r=>!Ts(r,t))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await wi(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Iu(n.remoteStore,s.targetId),Ei(n,s.targetId)}).catch(fn)):(Ei(n,s.targetId),await wi(n.localStore,s.targetId,!0))}async function $d(e,t,n){const s=Qd(e);try{const i=await function(r,o){const a=A(r),u=K.now(),l=o.reduce((p,f)=>p.add(f.key),D());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let f=Nt(),v=D();return a.Zi.getEntries(p,l).next(T=>{f=T,f.forEach((S,q)=>{q.isValidDocument()||(v=v.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,f)).next(T=>{c=T;const S=[];for(const q of o){const M=lh(q,c.get(q.key).overlayedDocument);M!=null&&S.push(new ne(q.key,M,qa(M.value.mapValue),kt.exists(!0)))}return a.mutationQueue.addMutationBatch(p,u,S,o)}).next(T=>{h=T;const S=T.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(p,T.batchId,S)})}).then(()=>({batchId:h.batchId,changes:Ja(c)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.Tc[r.currentUser.toKey()];u||(u=new $(b)),u=u.insert(o,a),r.Tc[r.currentUser.toKey()]=u}(s,i.batchId,n),await vn(s,i.changes),await xs(s.remoteStore)}catch(i){const r=ur(i,"Failed to persist write");n.reject(r)}}async function bu(e,t){const n=A(e);try{const s=await td(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.yc.get(r);o&&(P(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?P(o.fc):i.removedDocuments.size>0&&(P(o.fc),o.fc=!1))}),await vn(n,s,t)}catch(s){await fn(s)}}function wo(e,t,n){const s=A(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.wc.forEach((r,o)=>{const a=o.view.Mu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=A(r);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.Mu(o)&&(u=!0)}),u&&lr(a)}(s.eventManager,t),i.length&&s.dc.nu(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Ud(e,t,n){const s=A(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.yc.get(t),r=i&&i.key;if(r){let o=new $(E.comparator);o=o.insert(r,tt.newNoDocument(r,k.min()));const a=D().add(r),u=new Cs(k.min(),new Map,new $(b),o,a);await bu(s,u),s.gc=s.gc.remove(r),s.yc.delete(t),cr(s)}else await wi(s.localStore,t,!1).then(()=>Ei(s,t,n)).catch(fn)}async function qd(e,t){const n=A(e),s=t.batch.batchId;try{const i=await Zh(n.localStore,t);Mu(n,s,null),Ru(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await vn(n,i)}catch(i){await fn(i)}}async function Bd(e,t,n){const s=A(e);try{const i=await function(r,o){const a=A(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(P(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(s.localStore,t);Mu(s,t,n),Ru(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await vn(s,i)}catch(i){await fn(i)}}function Ru(e,t){(e.Ec.get(t)||[]).forEach(n=>{n.resolve()}),e.Ec.delete(t)}function Mu(e,t,n){const s=A(e);let i=s.Tc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.Tc[s.currentUser.toKey()]=i}}function Ei(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.wc.delete(s),n&&e.dc.Pc(s,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach(s=>{e.Ic.containsKey(s)||Lu(e,s)})}function Lu(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);n!==null&&(Iu(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),cr(e))}function Eo(e,t,n){for(const s of n)s instanceof Du?(e.Ic.addReference(s.key,t),jd(e,s)):s instanceof Nu?(w("SyncEngine","Document no longer in limbo: "+s.key),e.Ic.removeReference(s.key,t),e.Ic.containsKey(s.key)||Lu(e,s.key)):_()}function jd(e,t){const n=t.key,s=n.path.canonicalString();e.gc.get(n)||e.mc.has(s)||(w("SyncEngine","New document in limbo: "+n),e.mc.add(s),cr(e))}function cr(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new E(O.fromString(t)),s=e.Ac.next();e.yc.set(s,new Ld(n)),e.gc=e.gc.insert(n,s),Su(e.remoteStore,new Rt(Dt(Ha(n.path)),s,"TargetPurposeLimboResolution",zi.ct))}}async function vn(e,t,n){const s=A(e),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,u)=>{o.push(s.Rc(u,t,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=sr.Li(u.targetId,l);r.push(c)}}))}),await Promise.all(o),s.dc.nu(i),await async function(a,u){const l=A(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>g.forEach(u,h=>g.forEach(h.Fi,p=>l.persistence.referenceDelegate.addReference(c,h.targetId,p)).next(()=>g.forEach(h.Bi,p=>l.persistence.referenceDelegate.removeReference(c,h.targetId,p)))))}catch(c){if(!pn(c))throw c;w("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const p=l.Ji.get(h),f=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(f);l.Ji=l.Ji.insert(h,v)}}}(s.localStore,r))}async function zd(e,t){const n=A(e);if(!n.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());const s=await vu(n.localStore,t);n.currentUser=t,function(i,r){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new m(d.CANCELLED,r))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await vn(n,s.er)}}function Kd(e,t){const n=A(e),s=n.yc.get(t);if(s&&s.fc)return D().add(s.key);{let i=D();const r=n._c.get(t);if(!r)return i;for(const o of r){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function Gd(e){const t=A(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=bu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ud.bind(null,t),t.dc.nu=Dd.bind(null,t.eventManager),t.dc.Pc=Nd.bind(null,t.eventManager),t}function Qd(e){const t=A(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=qd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Bd.bind(null,t),t}class To{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ks(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Jh(this.persistence,new Yh,t.initialUser,this.serializer)}createPersistence(t){return new Hh(nr.zs,this.serializer)}createSharedClientState(t){return new rd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Hd{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>wo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=zd.bind(null,this.syncEngine),await _d(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new kd}createDatastore(t){const n=ks(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new ld(i));var i;return function(r,o,a,u){return new dd(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>wo(this.syncEngine,a,0),o=mo.D()?new mo:new od,new pd(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,u,l){const c=new Od(s,i,r,o,a,u);return l&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=A(t);w("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await yn(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):xt("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Z.UNAUTHENTICATED,this.clientId=Va.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{w("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(w("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new m(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ur(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Hs(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await vu(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function So(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Jd(e);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>yo(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>yo(t.remoteStore,r)),e._onlineComponents=t}function Xd(e){return e.name==="FirebaseError"?e.code===d.FAILED_PRECONDITION||e.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Jd(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){w("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hs(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Xd(n))throw n;ge("Error using user provided cache. Falling back to memory cache: "+n),await Hs(e,new To)}}else w("FirestoreClient","Using default OfflineComponentProvider"),await Hs(e,new To);return e._offlineComponents}async function Ou(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(w("FirestoreClient","Using user provided OnlineComponentProvider"),await So(e,e._uninitializedComponentsProvider._online)):(w("FirestoreClient","Using default OnlineComponentProvider"),await So(e,new Hd))),e._onlineComponents}function Zd(e){return Ou(e).then(t=>t.syncEngine)}async function tf(e){const t=await Ou(e),n=t.eventManager;return n.onListen=Pd.bind(null,t.syncEngine),n.onUnlisten=Vd.bind(null,t.syncEngine),n}function ef(e,t,n={}){const s=new Mt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const l=new Wd({next:h=>{r.enqueueAndForget(()=>xd(i,c)),h.fromCache&&a.source==="server"?u.reject(new m(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new bd(o,l,{includeMetadataChanges:!0,Ku:!0});return Ad(i,c)}(await tf(e),e.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(e,t,n){if(!n)throw new m(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function nf(e,t,n,s){if(t===!0&&s===!0)throw new m(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function _o(e){if(!E.isDocumentKey(e))throw new m(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Co(e){if(E.isDocumentKey(e))throw new m(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ds(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":_()}function nn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new m(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ds(e);throw new m(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function sf(e,t){if(t<=0)throw new m(d.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new m(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new m(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}nf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pu((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new m(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new m(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new m(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=t.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,s}}class Ns{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ko({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new m(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new m(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ko(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Tc;switch(n.type){case"firstParty":return new Cc(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new m(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Io.get(t);n&&(w("ComponentProvider","Removing Datastore"),Io.delete(t),n.terminate())}(this),Promise.resolve()}}function rf(e,t,n,s={}){var i;const r=(e=nn(e,Ns))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&ge("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Z.MOCK_USER;else{o=al(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new m(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Z(u)}e._authCredentials=new Sc(new Fa(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ct(this.firestore,t,this._key)}}class bt{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new bt(this.firestore,t,this._query)}}class Lt extends bt{constructor(t,n,s){super(t,n,Ha(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ct(this.firestore,null,new E(t))}withConverter(t){return new Lt(this.firestore,t,this._path)}}function hr(e,t,...n){if(e=Ht(e),Fu("collection","path",t),e instanceof Ns){const s=O.fromString(t,...n);return Co(s),new Lt(e,null,s)}{if(!(e instanceof ct||e instanceof Lt))throw new m(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(O.fromString(t,...n));return Co(s),new Lt(e.firestore,null,s)}}function of(e,t,...n){if(e=Ht(e),arguments.length===1&&(t=Va.A()),Fu("doc","path",t),e instanceof Ns){const s=O.fromString(t,...n);return _o(s),new ct(e,null,new E(s))}{if(!(e instanceof ct||e instanceof Lt))throw new m(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(O.fromString(t,...n));return _o(s),new ct(e.firestore,e instanceof Lt?e.converter:null,new E(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Eu(this,"async_queue_retry"),this.Xc=()=>{const n=Qs();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=Qs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=Qs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Mt;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!pn(t))throw t;w("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw xt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(t,n,s){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const i=ar.createAndSchedule(this,t,n,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&_()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}class dr extends Ns{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new af,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$u(this),this._firestoreClient.terminate()}}function uf(e,t){const n=typeof e=="object"?e:il(),s=typeof e=="string"?e:t||"(default)",i=rl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=ol("firestore");r&&rf(i,...r)}return i}function Vu(e){return e._firestoreClient||$u(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function $u(e){var t,n,s;const i=e._freezeSettings(),r=function(o,a,u,l){return new Fc(o,a,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Pu(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Yd(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Se(ot.fromBase64String(t))}catch(n){throw new m(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Se(ot.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new m(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new m(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new m(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return b(this._lat,t._lat)||b(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=/^__.*__$/;class cf{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new ne(t,this.data,this.fieldMask,n,this.fieldTransforms):new gn(t,this.data,n,this.fieldTransforms)}}function qu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _()}}class gr{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new gr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.aa({path:s,la:!1});return i.fa(t),i}da(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.aa({path:s,la:!1});return i.ua(),i}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return ts(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(t.length===0)throw this._a("Document fields must not be empty");if(qu(this.ca)&&lf.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class hf{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||ks(t)}ya(t,n,s,i=!1){return new gr({ca:t,methodName:n,ga:s,path:nt.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mr(e){const t=e._freezeSettings(),n=ks(e._databaseId);return new hf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function df(e,t,n,s,i,r={}){const o=e.ya(r.merge||r.mergeFields?2:0,t,n,i);Ku("Data must be an object, but it was:",o,s);const a=ju(s,o);let u,l;if(r.merge)u=new pt(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const h of r.mergeFields){const p=ff(t,h,n);if(!o.contains(p))throw new m(d.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);gf(c,p)||c.push(p)}u=new pt(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new cf(new ft(a),u,l)}function Bu(e,t,n,s=!1){return yr(n,e.ya(s?4:3,t))}function yr(e,t){if(zu(e=Ht(e)))return Ku("Unsupported field value:",t,e),ju(e,t);if(e instanceof Uu)return function(n,s){if(!qu(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&t.ca!==4)throw t._a("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=yr(o,s.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=Ht(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return sh(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=K.fromDate(n);return{timestampValue:Jn(s.serializer,i)}}if(n instanceof K){const i=new K(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Jn(s.serializer,i)}}if(n instanceof pr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Se)return{bytesValue:du(s.serializer,n._byteString)};if(n instanceof ct){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Ds(n)}`)}(e,t)}function ju(e,t){const n={};return $a(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ae(e,(s,i)=>{const r=yr(i,t.ha(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function zu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof K||e instanceof pr||e instanceof Se||e instanceof ct||e instanceof Uu)}function Ku(e,t,n){if(!zu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ds(n);throw s==="an object"?t._a(e+" a custom object"):t._a(e+" "+s)}}function ff(e,t,n){if((t=Ht(t))instanceof fr)return t._internalPath;if(typeof t=="string")return Gu(e,t);throw ts("Field path arguments must be of type string or ",e,!1,void 0,n)}const pf=new RegExp("[~\\*/\\[\\]]");function Gu(e,t,n){if(t.search(pf)>=0)throw ts(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new fr(...t.split("."))._internalPath}catch{throw ts(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ts(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new m(d.INVALID_ARGUMENT,a+e+u)}function gf(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new mf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(bs("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mf extends vr{data(){return super.data()}}function bs(e,t){return typeof t=="string"?Gu(e,t):t instanceof fr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new m(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wr{}class Rs extends wr{}function vf(e,t,...n){let s=[];t instanceof wr&&s.push(t),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Ne).length,o=i.filter(a=>a instanceof wn).length;if(r>1||r>0&&o>0)throw new m(d.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)e=i._apply(e);return e}class wn extends Rs{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new wn(t,n,s)}_apply(t){const n=this._parse(t);return Qu(t._query,n),new bt(t.firestore,t.converter,fi(t._query,n))}_parse(t){const n=mr(t.firestore);return function(i,r,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new m(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){xo(c,l);const p=[];for(const f of c)p.push(Ao(a,i,f));h={arrayValue:{values:p}}}else h=Ao(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||xo(c,l),h=Bu(o,r,c,l==="in"||l==="not-in");return z.create(u,l,h)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Ws(e,t,n){const s=t,i=bs("where",e);return wn._create(i,s,n)}class Ne extends wr{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Ne(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:yt.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)Qu(r,a),r=fi(r,a)}(t._query,n),new bt(t.firestore,t.converter,fi(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function wf(...e){return e.forEach(t=>Wu("or",t)),Ne._create("or",e)}function Ef(...e){return e.forEach(t=>Wu("and",t)),Ne._create("and",e)}class Er extends Rs{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Er(t,n)}_apply(t){const n=function(s,i,r){if(s.startAt!==null)throw new m(d.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new m(d.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new de(i,r);return function(a,u){if(Wi(a)===null){const l=Es(a);l!==null&&Hu(a,l,u.field)}}(s,o),o}(t._query,this._field,this._direction);return new bt(t.firestore,t.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new ee(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function Tf(e,t="asc"){const n=t,s=bs("orderBy",e);return Er._create(s,n)}class Tr extends Rs{constructor(t,n,s){super(),this.type=t,this._limit=n,this._limitType=s}static _create(t,n,s){return new Tr(t,n,s)}_apply(t){return new bt(t.firestore,t.converter,Wn(t._query,this._limit,this._limitType))}}function Sf(e){return sf("limit",e),Tr._create("limit",e,"F")}class Sr extends Rs{constructor(t,n,s){super(),this.type=t,this._docOrFields=n,this._inclusive=s}static _create(t,n,s){return new Sr(t,n,s)}_apply(t){const n=_f(t,this.type,this._docOrFields,this._inclusive);return new bt(t.firestore,t.converter,function(s,i){return new ee(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(t._query,n))}}function If(...e){return Sr._create("startAfter",e,!1)}function _f(e,t,n,s){if(n[0]=Ht(n[0]),n[0]instanceof vr)return function(i,r,o,a,u){if(!a)throw new m(d.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of Qt(i))if(c.field.isKeyField())l.push(Hn(r,a.key));else{const h=a.data.field(c.field);if(ws(h))throw new m(d.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const p=c.field.canonicalString();throw new m(d.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${p}' (used as the orderBy) does not exist.`)}l.push(h)}return new we(l,u)}(e._query,e.firestore._databaseId,t,n[0]._document,s);{const i=mr(e.firestore);return function(r,o,a,u,l,c){const h=r.explicitOrderBy;if(l.length>h.length)throw new m(d.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const p=[];for(let f=0;f<l.length;f++){const v=l[f];if(h[f].field.isKeyField()){if(typeof v!="string")throw new m(d.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof v}`);if(!Yi(r)&&v.indexOf("/")!==-1)throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${v}' contains a slash.`);const T=r.path.child(O.fromString(v));if(!E.isDocumentKey(T))throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${T}' is not because it contains an odd number of segments.`);const S=new E(T);p.push(Hn(o,S))}else{const T=Bu(a,u,v);p.push(T)}}return new we(p,c)}(e._query,e.firestore._databaseId,i,t,n,s)}}function Ao(e,t,n){if(typeof(n=Ht(n))=="string"){if(n==="")throw new m(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yi(t)&&n.indexOf("/")!==-1)throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(O.fromString(n));if(!E.isDocumentKey(s))throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Hn(e,new E(s))}if(n instanceof ct)return Hn(e,n._key);throw new m(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ds(n)}.`)}function xo(e,t){if(!Array.isArray(e)||e.length===0)throw new m(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Qu(e,t){if(t.isInequality()){const s=Es(e),i=t.field;if(s!==null&&!s.isEqual(i))throw new m(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Wi(e);r!==null&&Hu(e,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new m(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new m(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Hu(e,t,n){if(!n.isEqual(t))throw new m(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}function Wu(e,t){if(!(t instanceof wn||t instanceof Ne))throw new m(d.INVALID_ARGUMENT,`Function ${e}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Cf{convertValue(t,n="none"){switch(Jt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return j(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Xt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw _()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Ae(t,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new pr(j(t.latitude),j(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Ki(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Xe(t));default:return null}}convertTimestamp(t){const n=Ft(t);return new K(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=O.fromString(t);P(yu(s));const i=new Je(s.get(1),s.get(3)),r=new E(s.popFirst(5));return i.isEqual(n)||xt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Af extends vr{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new On(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(bs("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class On extends Af{data(t={}){return super.data(t)}}class xf{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new bn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new On(this._firestore,this._userDataWriter,s.key,s,new bn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new m(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new On(s._firestore,s._userDataWriter,o.doc.key,o.doc,new bn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new On(s._firestore,s._userDataWriter,o.doc.key,o.doc,new bn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:Df(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Df(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _()}}class Nf extends Cf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Se(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function Yu(e){e=nn(e,bt);const t=nn(e.firestore,dr),n=Vu(t),s=new Nf(t);return yf(e._query),ef(n,e._query).then(i=>new xf(t,s,e,i))}function bf(e,t,n){e=nn(e,ct);const s=nn(e.firestore,dr),i=kf(e.converter,t,n);return Rf(s,[df(mr(s),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,kt.none())])}function Rf(e,t){return function(n,s){const i=new Mt;return n.asyncQueue.enqueueAndForget(async()=>$d(await Zd(n),s,i)),i.promise}(Vu(e),t)}(function(e,t=!0){(function(n){ke=n})(ul),el(new nl("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new dr(new Ic(n.getProvider("auth-internal")),new Ac(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new m(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Je(a.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),xr(Gr,"3.12.0",e),xr(Gr,"3.12.0","esm2017")})();const Ir=uf(cl),Ms=async e=>await Yu(hr(Ir,e)),Mf=async(e,t)=>{const n=of(hr(Ir,e));await bf(n,t)},Ls=async(e,t)=>{let n=[];const s={...t};if(s.andConditions){const r=[];s.andConditions.forEach(o=>{r.push(Ws(o[0],o[1],o[2]))}),n.push(Ef(...r))}if(s.orConditions){const r=[];s.orConditions.forEach(o=>{console.log(o),r.push(Ws(o[0],o[1],o[2]))}),n.push(wf(...r))}s.where&&n.push(Ws(...s.where)),s.limit&&n.push(Sf(s.limit)),s.orderBy&&n.push(Tf(s.orderBy)),s.startAfter&&n.push(If(s.startAfter));const i=vf(hr(Ir,e),...n);return await Yu(i)},En=es("PaletteStore",{state:()=>({palettes:[]}),actions:{setOne(e){this.palettes.find(n=>n.id===e.id)||this.palettes.push(e)},async addToDatabase(e){await Mf("palettesToVerify",e)},async fetchAll(){(await Ms("palettes")).forEach(t=>{this.setOne({id:t.id,...t.data()})})},async fetchOnConditions(e){this.clearPalettes(),(await Ls("palettes",e)).forEach(n=>{this.setOne({id:n.id,...n.data()})})},clearPalettes(){this.palettes=[]}}}),Xu="/assets/filter-f7cc94fe.svg",Lf=e=>{let t="";return e.split(/(?=[A-Z])/).forEach(s=>t+=`${s} `),t.trim()},Le=e=>{if(e){const t=e.split(" ");t.forEach((i,r)=>{i===""&&t.splice(r,1)});const n=t.map(i=>i=i[0].toUpperCase()+i.slice(1,i.length));let s="";return n.forEach(i=>{s+=i}),s}return""};const Of={key:0},Pf={key:1},Ff={__name:"BlockListElementTooltip",props:{block:{type:Object,required:!0},isActive:{type:Boolean,default:!1},cursorPosition:{type:Object,default:null}},setup(e){const t=e,n=V(null),s=i=>{const r=i.closest(".block"),o=r.getBoundingClientRect(),a=document.body.clientWidth-o.right;o.left>=a?i.setAttribute("data-horizontal-direction","left"):i.setAttribute("data-horizontal-direction","right");const u=r.closest(".main-style-inner-container");if(u){const l=u.getBoundingClientRect(),c=o.top-l.top;l.height/2>c?i.setAttribute("data-vertical-direction","down"):i.setAttribute("data-vertical-direction","up")}};return Wt(n,()=>{n.value&&s(n.value)}),Wt(t,i=>{if(n.value){const r=n.value.getAttribute("data-horizontal-direction"),o=n.value.getAttribute("data-vertical-direction");let a="";r==="right"?a+=`Calc(0px + ${i.cursorPosition.x}px)`:a+=`Calc(-97% + ${Math.floor(i.cursorPosition.x)}px)`,a+=", ",o==="up"?a+=`Calc(-60px + ${Math.floor(i.cursorPosition.y)}px)`:a+=`Calc(23px + ${Math.floor(i.cursorPosition.y)}px)`,n.value.style.transform=`translate(${a})`}}),(i,r)=>e.isActive?(x(),L("div",{key:0,ref_key:"tooltip",ref:n,class:"tooltip-content text-center flex flex-col"},[I("span",null,qt(Ot(Lf)(e.block.name)),1),e.block.paint?(x(),L("span",Of,qt(`and ${e.block.paint} Paint`),1)):(x(),L("span",Pf," without Paint "))],512)):lt("",!0)}},Vf=Ie(Ff,[["__scopeId","data-v-185c0139"]]);const $f={class:"block-box relative bg-transparent"},Uf=["src"],qf=["src"],_r={__name:"BlockListElement",props:{block:{type:Object,default:null}},setup(e){const t=V(null),n=V(null),s=r=>{const o=t.value.getBoundingClientRect(),a=r.clientX-o.left,u=r.clientY-o.top;n.value={x:a,y:u}},i=V(!1);return(r,o)=>e.block?(x(),L("div",{key:0,ref_key:"blockRef",ref:t,class:No(["block relative",{"flex-center":!e.block.paint}]),onMouseover:o[0]||(o[0]=a=>i.value=!0),onMousemove:s,onMouseout:o[1]||(o[1]=a=>i.value=!1)},[I("div",$f,[I("img",{src:`https://firebasestorage.googleapis.com/v0/b/terraria-block-palette.appspot.com/o/blocks%2F${e.block.name}.png?alt=media&.png`,alt:"",class:"block-image"},null,8,Uf),e.block.paint?(x(),L("img",{key:0,src:`https://firebasestorage.googleapis.com/v0/b/terraria-block-palette.appspot.com/o/blocks%2F${e.block.paint}Paint.png?alt=media&.png`,alt:"",class:"block-paint absolute -bottom-2 -right-2"},null,8,qf)):lt("",!0)]),et(Vf,{"is-active":i.value,"cursor-position":n.value,block:e.block,class:"block-tooltip"},null,8,["is-active","cursor-position","block"])],34)):lt("",!0)}};const Bf={class:"palette-list md:grid md:grid-cols-2 md:auto-rows lg:grid-cols-3 xl:grid-cols-4 md:gap-7"},jf={class:"palette-info mb-4"},zf={class:"palette-title"},Kf={class:"palette-obtainability flex flex-col justify-center text-center mb-2"},Gf=["data-obtainability"],Qf={key:0,class:"text-center text-lg text-gray-800 mb-4"},Hf={class:"text-green-700"},Wf={class:"palette-tags flex flex-wrap justify-center text-center gap-2"},Yf={class:"palette-blocks relative flex items-center flex-wrap gap-5"},Xf={__name:"PaletteList",props:{palettes:{type:Array,required:!0}},setup(e){const t=En();return ns(()=>{t.fetchAll()}),(n,s)=>(x(),L("div",Bf,[(x(!0),L(Kt,null,ue(e.palettes,i=>(x(),L("div",{key:i.id,class:"palette h-max"},[I("div",jf,[I("h3",zf,qt(i.title),1),I("p",Kf,[Pn(" Obtainability: "),I("span",{"data-obtainability":i.obtainability,class:No({obtainable:i.obtainability=="Super easy",easily_obtainable:i.obtainability=="Easy",semi_obtainable:i.obtainability=="Medium",hardly_obtainable:i.obtainability=="Hard"})},qt(i.obtainability),11,Gf)]),i.username?(x(),L("p",Qf,[Pn(" submitted by: "),I("span",Hf,qt(i.username),1)])):lt("",!0),I("div",Wf,[(x(!0),L(Kt,null,ue(i.tags,(r,o)=>(x(),L("em",{key:o,class:"tag text-xl"},qt(`${r}`),1))),128))])]),I("div",Yf,[(x(!0),L(Kt,null,ue(i.blocks,(r,o)=>(x(),gt(_r,{key:o,block:r},null,8,["block"]))),128))])]))),128))]))}},Jf=Ie(Xf,[["__scopeId","data-v-f67319d8"]]),Zt=V([]),Cr=V([]),Zf=e=>{Zt.value.push(e)},tp=e=>{const t=Zt.value.findIndex(n=>n==e);t!==-1&&Zt.value.splice(t,1)},ep=e=>{Cr.value.push(e)},np=e=>{const t=Zt.value.findIndex(n=>n==e);t!==-1&&Zt.value.splice(t,1)},sp=()=>{Zt.value=[],Cr.value=[]},Ju=()=>({checkedTags:Zt,checkedObtainabilities:Cr,addTag:Zf,addObtainability:ep,removeTag:tp,removeObtainability:np,clearOptions:sp});const ip={class:"flex justify-start items-center gap-2"},rp=["id","type","name","value"],op=["for"],ap={__name:"PaletteListModalInput",props:{value:{type:String,required:!0},type:{type:String,required:!0},name:{type:String,required:!0}},setup(e){const{addTag:t,removeTag:n,addObtainability:s,removeObtainability:i}=Ju(),r=o=>{o.target.checked?o.target.name=="tag"?t(o.target.value):s(o.target.value):o.target.name=="tag"?n(o.target.value):i(o.target.value)};return(o,a)=>(x(),L("div",ip,[I("input",{id:e.value,type:e.type,name:e.name,value:e.value,onInput:r},null,40,rp),I("label",{for:e.value},qt(e.value),9,op)]))}},Do=Ie(ap,[["__scopeId","data-v-2d026dfc"]]),Zu=es("TagStore",{state:()=>({tags:[]}),getters:{getTagsContainingPhrase:e=>t=>{const n=[];return e.tags.forEach(s=>{s.includes(t)&&n.push(s)}),n}},actions:{setOne(e){this.tags.find(n=>n.id===e.id)||this.tags.push(e)},async fetchAll(){(await Ms("tags")).forEach(t=>{this.setOne({id:t.id,name:t.data().name})})},async fetchOnConditions(e){(await Ls("tags",e)).forEach(n=>{this.setOne({id:n.id,name:n.data().name})})},clearTags(){this.tags=[]}}}),up=["onSubmit"],lp={class:"flex flex-col sm:flex-row gap-6 w-full"},cp={class:"modal-option obtainability"},hp=I("h3",{class:"text-2xl sm:text-3xl"}," Obtainability ",-1),dp={key:0,class:"modal-option tags"},fp=I("h3",{class:"text-2xl sm:text-3xl"}," Tags ",-1),pp={__name:"PaletteListModal",emits:["close"],setup(e,{emit:t}){const{tags:n}=Zu(),s=En(),{checkedTags:i,checkedObtainabilities:r,clearOptions:o}=Ju(),a=["Super easy","Easy","Medium","Hard"],u=async()=>{s.clearPalettes();const l=[];i.value.length>0&&l.push(["tags","array-contains-any",i.value]),r.value.forEach(c=>{l.push(["obtainability","==",c])}),await s.fetchOnConditions({andConditions:l}),o(),t("close")};return(l,c)=>{const h=Tt("AppButton"),p=Tt("AppModal");return x(),gt(p,{toggler:".filter-button",onClose:c[0]||(c[0]=f=>t("close"))},{default:ze(()=>[I("form",{class:"modal-form",onSubmit:le(u,["prevent"])},[et(h,{secondary:"",text:"Save",type:"submit"}),I("div",lp,[I("div",cp,[hp,(x(),L(Kt,null,ue(a,f=>et(Do,{key:f,value:f,type:"radio",name:"obtainability"},null,8,["value"])),64))]),Ot(n)?(x(),L("div",dp,[fp,(x(!0),L(Kt,null,ue(Ot(n),f=>(x(),gt(Do,{key:f.id,value:f.name,type:"checkbox",name:"tag"},null,8,["value"]))),128))])):lt("",!0)])],40,up)]),_:1},8,["toggler"])}}},gp={class:"wrapper"},mp=I("h2",{class:"section-title"}," Palettes ",-1),yp={class:"main-style-outer-container w-full"},vp={class:"main-style-inner-container w-full"},wp={class:"palettes-header flex flex-col sm:flex-row gap-2"},Ep={class:"palettes-option-box flex gap-2 justify-between items-center opacity-75"},Tp=I("span",{class:"sm:hidden"},"More options",-1),Sp=I("img",{src:Xu,alt:"",class:"icon default h-14 p-1 md:p-0 z-0"},null,-1),Ip=I("img",{src:Xu,alt:"",class:"icon focus absolute w-full h-full top-0 p-1 md:p-0"},null,-1),_p=[Sp,Ip],Cp={key:1,class:"text-black text-3xl"},kp={__name:"SectionPalettes",props:{palettes:{type:Array,required:!0}},setup(e){const t=e,n=Zu(),s=En(),i=V(null),r=V(!1),o=V(""),a=V([]);return Wt(o,async()=>{o.value==""?a.value=[]:a.value=n.getTagsContainingPhrase(o.value.toLowerCase())}),Wt(t,()=>{console.log(t.palettes)}),ns(()=>{n.fetchAll()}),(u,l)=>{const c=Tt("AppSearch");return x(),L("section",{id:"palettes",ref_key:"section",ref:i,class:"palettes section"},[I("div",gp,[mp,I("div",yp,[I("div",vp,[I("div",wp,[et(c,{placeholder:"Search tags",class:"w-full",results:a.value,onValueChange:l[0]||(l[0]=h=>o.value=h),onSearchSuccess:l[1]||(l[1]=h=>Ot(s).fetchOnConditions({where:[`tags.${h}`,"==",!0]}))},null,8,["results"]),I("div",Ep,[Tp,I("button",{class:"filter-button relative z-10",onClick:l[2]||(l[2]=h=>r.value=!0)},_p)])]),e.palettes?(x(),gt(Jf,{key:0,palettes:e.palettes},null,8,["palettes"])):lt("",!0),e.palettes.length===0?(x(),L("p",Cp," Oops, no palettes found. Try again later or reset filter options. ")):lt("",!0)]),r.value?(x(),gt(pp,{key:0,onClose:l[3]||(l[3]=h=>r.value=!1)})):lt("",!0)])])],512)}}},Ap="/assets/question-mark-83e2bd73.svg",xp="/assets/plus-sign-circle-64e86dee.svg";const Dp=e=>(bo("data-v-b2a603d9"),e=e(),Ro(),e),Np=["onSubmit"],bp={class:"submit-modal-header flex flex-col gap-3"},Rp=Dp(()=>I("span",{class:"submit-modal-title"}," Enter your nickname! ",-1)),Mp={key:0,class:"text-2xl text-red-700"},Lp={__name:"IdeaSubmitModal",props:{palette:{type:Array,required:!0}},emits:["close","success"],setup(e,{emit:t}){const n=e,s=En(),i=V(""),r=V(!1);Wt(i,()=>{i.value&&(r.value=!1)});const o=()=>{t("close"),t("success")},a=async u=>{!i.value||i.value.length<3?(r.value=!0,u.preventDefault()):await s.addToDatabase({blocks:[...n.palette],username:i.value})};return(u,l)=>{const c=Tt("AppButton"),h=Tt("AppModal");return x(),gt(h,{toggler:".finish-button",onClose:l[1]||(l[1]=p=>t("close"))},{default:ze(()=>[I("form",{class:"form-modal h-full",onSubmit:le(o,["prevent"])},[I("div",bp,[Rp,r.value?(x(),L("span",Mp," Your username should be at least 3 characters long. ")):lt("",!0),hl(I("input",{"onUpdate:modelValue":l[0]||(l[0]=p=>i.value=p),type:"text",class:"w-full"},null,512),[[dl,i.value]])]),et(c,{secondary:"",text:"Submit",class:"mt-8",onClick:a})],40,Np)]),_:1})}}},Op=Ie(Lp,[["__scopeId","data-v-b2a603d9"]]),Pp=es("PaintStore",{state:()=>({paints:[]}),getters:{getOnesContainingPhrase:e=>t=>e.paints.filter(n=>n.name.toLowerCase().includes(t.toLowerCase()))},actions:{setOne(e){this.paints.find(n=>n.id===e.id)||this.paints.push(e)},async fetchAll(){(await Ms("paint")).forEach(t=>{this.setOne({id:t.id,name:t.data().name})})},async fetchOnConditions(e){(await Ls("paint",e)).forEach(n=>{this.setOne({id:n.id,name:n.data().name})})},clearPaint(){this.paint=[]}}}),Fp=es("BlockStore",{state:()=>({blocks:[]}),getters:{getOnesContainingPhrase:e=>t=>e.blocks.filter(n=>n.name.toLowerCase().includes(t))},actions:{setOne(e){this.blocks.find(n=>n.id===e.id)||this.blocks.push(e)},async fetchAll(){(await Ms("blocks")).forEach(t=>{this.setOne({id:t.id,name:t.data().name})})},async fetchOnConditions(e){(await Ls("blocks",e)).forEach(n=>{this.setOne({id:n.id,name:n.data().name})})},clearBlocks(){this.blocks=[]}}}),Vp={class:"flex gap-6 items-center justify-start w-full"},$p={class:"block-preview"},Up={key:0,class:"border-dashed border-2 border-neutral-900 w-14 h-14"},qp={key:0,class:"text-2xl text-red-800"},Bp={__name:"IdeaBlockModal",props:{editedBlock:{type:Object,default:()=>({name:"",paint:""})}},emits:["close","addBlock","editBlock"],setup(e,{emit:t}){const n=e,s=Pp(),i=Fp(),r=V(n.editedBlock.paint),o=V(n.editedBlock.name),a=V(!1);Wt(o,()=>{o.value&&(a.value=!1)});const u=V("");Wt(u,async()=>{const f=Le(u.value),v=3;f.length>=v&&await i.fetchOnConditions({andConditions:[["name",">=",f],["name","<=",f+""]]})});const l=Dr(()=>i.getOnesContainingPhrase(u.value.toLowerCase())),c=V(""),h=Dr(()=>s.getOnesContainingPhrase(c.value.toLowerCase())),p=()=>{o.value?(a.value=!1,n.editedBlock.name?t("editBlock",{id:n.editedBlock.id,name:Le(o.value),paint:Le(r.value)}):(console.log(o.value),t("addBlock",{name:Le(o.value),paint:Le(r.value)}))):a.value=!0};return ns(async()=>{s.fetchAll()}),(f,v)=>{const T=Tt("AppSearch"),S=Tt("AppButton"),q=Tt("AppModal");return x(),gt(q,{toggler:".modal-toggler",onClose:v[5]||(v[5]=M=>t("close"))},{default:ze(()=>[I("form",{class:"modal-form h-full",onSubmit:v[4]||(v[4]=le(M=>t("close"),["prevent"]))},[et(T,{placeholder:"Search for a block",results:Ot(l),onValueChange:v[0]||(v[0]=M=>u.value=M),onSearchSuccess:v[1]||(v[1]=M=>o.value=M)},null,8,["results"]),et(T,{placeholder:"Search for paint",results:Ot(h),onValueChange:v[2]||(v[2]=M=>c.value=M),onSearchSuccess:v[3]||(v[3]=M=>r.value=M)},null,8,["results"]),I("div",Vp,[et(S,{secondary:"",text:`${e.editedBlock.name?"Edit":"Add"}`,onClick:p},null,8,["text"]),I("div",$p,[o.value?(x(),gt(_r,{key:1,block:{name:o.value,paint:r.value}},null,8,["block"])):(x(),L("div",Up))]),a.value?(x(),L("span",qp," Block must be provided ")):lt("",!0)])],32)]),_:1})}}};const be=e=>(bo("data-v-f8b49b74"),e=e(),Ro(),e),jp={id:"your_ideas",class:"your-ideas section"},zp={class:"wrapper"},Kp=be(()=>I("h2",{class:"section-title"}," Your Ideas ",-1)),Gp=be(()=>I("p",{class:"section-text"}," Here you can suggest your own palette. Add blocks with or without paint, and then submit! We'll verify it and eventually put it on this site :) ",-1)),Qp={class:"main-style-outer-container w-full"},Hp={class:"main-style-inner-container flex flex-row"},Wp=be(()=>I("div",{class:"question-mark-box"},[I("img",{class:"question-mark",src:Ap,alt:""})],-1)),Yp=be(()=>I("img",{class:"plus-sign",src:xp,alt:""},null,-1)),Xp=be(()=>I("div",{class:"plus-sign-fill"},null,-1)),Jp=[Wp,Yp,Xp],Zp={key:0,class:"absolute bottom-0 w-full text-red-800 text-2xl text-center p-5"},tg=be(()=>I("span",{class:"font-bold"},"at least 3",-1)),eg={key:0,class:"absolute bottom-0 w-full text-green-900 text-2xl text-center p-5"},ng={__name:"SectionYourIdeas",setup(e){const t=V(!1),n=V(!1),s=V([]),i=V({}),r=f=>{s.value.push({...f,id:Math.random()})},o=V(!1),a=V(!1),u=f=>{const v=s.value.findIndex(T=>T.id===f.id);s[v]=f},l=()=>{i.value={},n.value=!1},c=f=>{i.value=f,n.value=!0},h=()=>{s.value.length>=3?(t.value=!0,o.value=!1):o.value=!0},p=()=>{s.value=[],a.value=!0,setTimeout(()=>{a.value=!1},5e3)};return(f,v)=>{const T=Tt("AppButton");return x(),L("section",jp,[I("div",zp,[Kp,Gp,I("form",{class:"w-full",onSubmit:v[2]||(v[2]=le((...S)=>f.submitPalette&&f.submitPalette(...S),["prevent"]))},[I("div",Qp,[I("div",Hp,[(x(!0),L(Kt,null,ue(s.value,S=>(x(),gt(_r,{key:S.id,block:S,class:"cursor-pointer modal-toggler",onClick:()=>c(S)},null,8,["block","onClick"]))),128)),I("button",{class:"add-block relative modal-toggler",onClick:v[0]||(v[0]=le(S=>n.value=!0,["prevent"]))},Jp)]),n.value?(x(),gt(Bp,{key:0,class:"block-modal","edited-block":i.value,onClose:l,onAddBlock:r,onEditBlock:u},null,8,["edited-block"])):lt("",!0),t.value&&!o.value?(x(),gt(Op,{key:1,palette:s.value,onClose:v[1]||(v[1]=S=>t.value=!1),onSuccess:p},null,8,["palette"])):lt("",!0),et(Nr,{name:"show"},{default:ze(()=>[o.value&&!a.value?(x(),L("p",Zp,[Pn(" To submit a palette, you need "),tg,Pn(" different blocks. ")])):lt("",!0)]),_:1}),et(Nr,{name:"show"},{default:ze(()=>[a.value?(x(),L("p",eg," Thanks for your contribution Terrarian! Check out the page soon and be ready to see the palette you submitted : ) ")):lt("",!0)]),_:1})]),et(T,{primary:"",text:"Finish",class:"finish-button mt-10 md:mt-12",onClick:le(h,["prevent"])},null,8,["onClick"])],32)])])}}},sg=Ie(ng,[["__scopeId","data-v-f8b49b74"]]);const ig={id:"abtus",class:"about-us section"},rg={class:"wrapper"},og=pl('<h2 class="section-title" data-v-fd9a3a12> About the Project </h2><p class="section-text" data-v-fd9a3a12> Welcome Terrarians, this site has been built to make building cool projects a little bit easier. We prepared many palettes for you to look up and use. Each palette has fitting <span data-v-fd9a3a12>tags</span> (in terms of style usage) and <span data-v-fd9a3a12>obtainability</span> - an attribute deciding how hard it is to get all the neccessary items. </p><p class="section-text" data-v-fd9a3a12> Additionally, <span data-v-fd9a3a12>YOU</span> can also help the community by <a href="#your_ideas" data-v-fd9a3a12>submitting your own ideas!</a></p><p class="section-text" data-v-fd9a3a12> Also, if you are curious of the creators, click the button below :) </p>',4),ag={__name:"Home",setup(e){const t=En(),n=fl(),s=[{text:"About Us",href:"abtus",isSamePage:!0},{text:"Team",componentName:"Team",href:"",isSamePage:!1},{text:"Palettes",href:"palettes",isSamePage:!0},{text:"Your Ideas",href:"your_ideas",isSamePage:!0}];return ns(async()=>{gl()}),(i,r)=>{const o=Tt("AppButton");return x(),L(Kt,null,[et(ml,{"nav-links":s}),et(o,{primary:"",text:"Get Started",class:"header-button",link:"#palettes"}),I("main",null,[I("section",ig,[I("div",rg,[og,et(o,{secondary:"",text:"Meet the Team",class:"w-max mt-7",onClick:r[0]||(r[0]=a=>Ot(n).push({name:"Team"}))})])]),et(kp,{ref:"palettesSection",palettes:Ot(t).palettes},null,8,["palettes"]),et(sg)])],64)}}},cg=Ie(ag,[["__scopeId","data-v-fd9a3a12"]]);export{cg as default};
