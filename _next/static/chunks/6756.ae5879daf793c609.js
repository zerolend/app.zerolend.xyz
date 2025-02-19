(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6756],{20640:function(e,n,t){"use strict";var o=t(11742),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,n){var t,i,s,a,f,c,l,p,g=!1;n||(n={}),s=n.debug||!1;try{if(f=o(),c=document.createRange(),l=document.getSelection(),(p=document.createElement("span")).textContent=e,p.ariaHidden="true",p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",function(t){if(t.stopPropagation(),n.format){if(t.preventDefault(),void 0===t.clipboardData){s&&console.warn("unable to use e.clipboardData"),s&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=r[n.format]||r.default;window.clipboardData.setData(o,e)}else t.clipboardData.clearData(),t.clipboardData.setData(n.format,e)}n.onCopy&&(t.preventDefault(),n.onCopy(t.clipboardData))}),document.body.appendChild(p),c.selectNodeContents(p),l.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");g=!0}catch(o){s&&console.error("unable to copy using execCommand: ",o),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",e),n.onCopy&&n.onCopy(window.clipboardData),g=!0}catch(o){s&&console.error("unable to copy using clipboardData: ",o),s&&console.error("falling back to prompt"),t="message"in n?n.message:"Copy to clipboard: #{key}, Enter",i=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",a=t.replace(/#{\s*key\s*}/g,i),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),p&&document.body.removeChild(p),f()}return g}},18552:function(e,n,t){var o=t(10852)(t(55639),"DataView");e.exports=o},1989:function(e,n,t){var o=t(51789),r=t(38792),i=t(57667),s=t(21327),a=t(81866);function f(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}f.prototype.clear=o,f.prototype.delete=r,f.prototype.get=i,f.prototype.has=s,f.prototype.set=a,e.exports=f},38407:function(e,n,t){var o=t(27040),r=t(14125),i=t(82117),s=t(67518),a=t(54705);function f(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}f.prototype.clear=o,f.prototype.delete=r,f.prototype.get=i,f.prototype.has=s,f.prototype.set=a,e.exports=f},57071:function(e,n,t){var o=t(10852)(t(55639),"Map");e.exports=o},83369:function(e,n,t){var o=t(24785),r=t(11285),i=t(96e3),s=t(49916),a=t(95265);function f(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}f.prototype.clear=o,f.prototype.delete=r,f.prototype.get=i,f.prototype.has=s,f.prototype.set=a,e.exports=f},53818:function(e,n,t){var o=t(10852)(t(55639),"Promise");e.exports=o},58525:function(e,n,t){var o=t(10852)(t(55639),"Set");e.exports=o},46384:function(e,n,t){var o=t(38407),r=t(37465),i=t(63779),s=t(67599),a=t(44758),f=t(34309);function c(e){var n=this.__data__=new o(e);this.size=n.size}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=s,c.prototype.has=a,c.prototype.set=f,e.exports=c},11149:function(e,n,t){var o=t(55639).Uint8Array;e.exports=o},70577:function(e,n,t){var o=t(10852)(t(55639),"WeakMap");e.exports=o},77412:function(e){e.exports=function(e,n){for(var t=-1,o=null==e?0:e.length;++t<o&&!1!==n(e[t],t,e););return e}},34963:function(e){e.exports=function(e,n){for(var t=-1,o=null==e?0:e.length,r=0,i=[];++t<o;){var s=e[t];n(s,t,e)&&(i[r++]=s)}return i}},14636:function(e,n,t){var o=t(22545),r=t(35694),i=t(1469),s=t(44144),a=t(65776),f=t(36719),c=Object.prototype.hasOwnProperty;e.exports=function(e,n){var t=i(e),l=!t&&r(e),p=!t&&!l&&s(e),g=!t&&!l&&!p&&f(e),u=t||l||p||g,m=u?o(e.length,String):[],d=m.length;for(var b in e)(n||c.call(e,b))&&!(u&&("length"==b||p&&("offset"==b||"parent"==b)||g&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||a(b,d)))&&m.push(b);return m}},62488:function(e){e.exports=function(e,n){for(var t=-1,o=n.length,r=e.length;++t<o;)e[r+t]=n[t];return e}},34865:function(e,n,t){var o=t(89465),r=t(77813),i=Object.prototype.hasOwnProperty;e.exports=function(e,n,t){var s=e[n];i.call(e,n)&&r(s,t)&&(void 0!==t||n in e)||o(e,n,t)}},18470:function(e,n,t){var o=t(77813);e.exports=function(e,n){for(var t=e.length;t--;)if(o(e[t][0],n))return t;return -1}},44037:function(e,n,t){var o=t(5135),r=t(3674);e.exports=function(e,n){return e&&o(n,r(n),e)}},63886:function(e,n,t){var o=t(5135),r=t(81704);e.exports=function(e,n){return e&&o(n,r(n),e)}},89465:function(e,n,t){var o=t(38777);e.exports=function(e,n,t){"__proto__"==n&&o?o(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}},85990:function(e,n,t){var o=t(46384),r=t(77412),i=t(34865),s=t(44037),a=t(63886),f=t(64626),c=t(278),l=t(18805),p=t(1911),g=t(58234),u=t(46904),m=t(64160),d=t(43824),b=t(29148),v=t(38517),x=t(1469),h=t(44144),w=t(56688),_=t(13218),y=t(72928),Z=t(3674),C=t(81704),E="[object Arguments]",k="[object Function]",P="[object Object]",j={};j[E]=j["[object Array]"]=j["[object ArrayBuffer]"]=j["[object DataView]"]=j["[object Boolean]"]=j["[object Date]"]=j["[object Float32Array]"]=j["[object Float64Array]"]=j["[object Int8Array]"]=j["[object Int16Array]"]=j["[object Int32Array]"]=j["[object Map]"]=j["[object Number]"]=j[P]=j["[object RegExp]"]=j["[object Set]"]=j["[object String]"]=j["[object Symbol]"]=j["[object Uint8Array]"]=j["[object Uint8ClampedArray]"]=j["[object Uint16Array]"]=j["[object Uint32Array]"]=!0,j["[object Error]"]=j[k]=j["[object WeakMap]"]=!1,e.exports=function e(n,t,N,S,O,I){var R,M=1&t,A=2&t,z=4&t;if(N&&(R=O?N(n,S,O,I):N(n)),void 0!==R)return R;if(!_(n))return n;var T=x(n);if(T){if(R=d(n),!M)return c(n,R)}else{var D=m(n),K=D==k||"[object GeneratorFunction]"==D;if(h(n))return f(n,M);if(D==P||D==E||K&&!O){if(R=A||K?{}:v(n),!M)return A?p(n,a(R,n)):l(n,s(R,n))}else{if(!j[D])return O?n:{};R=b(n,D,M)}}I||(I=new o);var L=I.get(n);if(L)return L;I.set(n,R),y(n)?n.forEach(function(o){R.add(e(o,t,N,o,n,I))}):w(n)&&n.forEach(function(o,r){R.set(r,e(o,t,N,r,n,I))});var B=z?A?u:g:A?C:Z,V=T?void 0:B(n);return r(V||n,function(o,r){V&&(o=n[r=o]),i(R,r,e(o,t,N,r,n,I))}),R}},3118:function(e,n,t){var o=t(13218),r=Object.create,i=function(){function e(){}return function(n){if(!o(n))return{};if(r)return r(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();e.exports=i},68866:function(e,n,t){var o=t(62488),r=t(1469);e.exports=function(e,n,t){var i=n(e);return r(e)?i:o(i,t(e))}},9454:function(e,n,t){var o=t(44239),r=t(37005);e.exports=function(e){return r(e)&&"[object Arguments]"==o(e)}},25588:function(e,n,t){var o=t(64160),r=t(37005);e.exports=function(e){return r(e)&&"[object Map]"==o(e)}},28458:function(e,n,t){var o=t(23560),r=t(15346),i=t(13218),s=t(80346),a=/^\[object .+?Constructor\]$/,f=Object.prototype,c=Function.prototype.toString,l=f.hasOwnProperty,p=RegExp("^"+c.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!i(e)||r(e))&&(o(e)?p:a).test(s(e))}},29221:function(e,n,t){var o=t(64160),r=t(37005);e.exports=function(e){return r(e)&&"[object Set]"==o(e)}},38749:function(e,n,t){var o=t(44239),r=t(41780),i=t(37005),s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Arguments]"]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s["[object Map]"]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s["[object Set]"]=s["[object String]"]=s["[object WeakMap]"]=!1,e.exports=function(e){return i(e)&&r(e.length)&&!!s[o(e)]}},280:function(e,n,t){var o=t(25726),r=t(86916),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!o(e))return r(e);var n=[];for(var t in Object(e))i.call(e,t)&&"constructor"!=t&&n.push(t);return n}},10313:function(e,n,t){var o=t(13218),r=t(25726),i=t(33498),s=Object.prototype.hasOwnProperty;e.exports=function(e){if(!o(e))return i(e);var n=r(e),t=[];for(var a in e)"constructor"==a&&(n||!s.call(e,a))||t.push(a);return t}},22545:function(e){e.exports=function(e,n){for(var t=-1,o=Array(e);++t<e;)o[t]=n(t);return o}},7518:function(e){e.exports=function(e){return function(n){return e(n)}}},74318:function(e,n,t){var o=t(11149);e.exports=function(e){var n=new e.constructor(e.byteLength);return new o(n).set(new o(e)),n}},64626:function(e,n,t){e=t.nmd(e);var o=t(55639),r=n&&!n.nodeType&&n,i=r&&e&&!e.nodeType&&e,s=i&&i.exports===r?o.Buffer:void 0,a=s?s.allocUnsafe:void 0;e.exports=function(e,n){if(n)return e.slice();var t=e.length,o=a?a(t):new e.constructor(t);return e.copy(o),o}},57157:function(e,n,t){var o=t(74318);e.exports=function(e,n){var t=n?o(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}},93147:function(e){var n=/\w*$/;e.exports=function(e){var t=new e.constructor(e.source,n.exec(e));return t.lastIndex=e.lastIndex,t}},40419:function(e,n,t){var o=t(62705),r=o?o.prototype:void 0,i=r?r.valueOf:void 0;e.exports=function(e){return i?Object(i.call(e)):{}}},77133:function(e,n,t){var o=t(74318);e.exports=function(e,n){var t=n?o(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}},278:function(e){e.exports=function(e,n){var t=-1,o=e.length;for(n||(n=Array(o));++t<o;)n[t]=e[t];return n}},5135:function(e,n,t){var o=t(34865),r=t(89465);e.exports=function(e,n,t,i){var s=!t;t||(t={});for(var a=-1,f=n.length;++a<f;){var c=n[a],l=i?i(t[c],e[c],c,t,e):void 0;void 0===l&&(l=e[c]),s?r(t,c,l):o(t,c,l)}return t}},18805:function(e,n,t){var o=t(5135),r=t(99551);e.exports=function(e,n){return o(e,r(e),n)}},1911:function(e,n,t){var o=t(5135),r=t(51442);e.exports=function(e,n){return o(e,r(e),n)}},14429:function(e,n,t){var o=t(55639)["__core-js_shared__"];e.exports=o},38777:function(e,n,t){var o=t(10852),r=function(){try{var e=o(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=r},58234:function(e,n,t){var o=t(68866),r=t(99551),i=t(3674);e.exports=function(e){return o(e,i,r)}},46904:function(e,n,t){var o=t(68866),r=t(51442),i=t(81704);e.exports=function(e){return o(e,i,r)}},45050:function(e,n,t){var o=t(37019);e.exports=function(e,n){var t=e.__data__;return o(n)?t["string"==typeof n?"string":"hash"]:t.map}},10852:function(e,n,t){var o=t(28458),r=t(47801);e.exports=function(e,n){var t=r(e,n);return o(t)?t:void 0}},85924:function(e,n,t){var o=t(5569)(Object.getPrototypeOf,Object);e.exports=o},99551:function(e,n,t){var o=t(34963),r=t(70479),i=Object.prototype.propertyIsEnumerable,s=Object.getOwnPropertySymbols,a=s?function(e){return null==e?[]:o(s(e=Object(e)),function(n){return i.call(e,n)})}:r;e.exports=a},51442:function(e,n,t){var o=t(62488),r=t(85924),i=t(99551),s=t(70479),a=Object.getOwnPropertySymbols?function(e){for(var n=[];e;)o(n,i(e)),e=r(e);return n}:s;e.exports=a},64160:function(e,n,t){var o=t(18552),r=t(57071),i=t(53818),s=t(58525),a=t(70577),f=t(44239),c=t(80346),l="[object Map]",p="[object Promise]",g="[object Set]",u="[object WeakMap]",m="[object DataView]",d=c(o),b=c(r),v=c(i),x=c(s),h=c(a),w=f;(o&&w(new o(new ArrayBuffer(1)))!=m||r&&w(new r)!=l||i&&w(i.resolve())!=p||s&&w(new s)!=g||a&&w(new a)!=u)&&(w=function(e){var n=f(e),t="[object Object]"==n?e.constructor:void 0,o=t?c(t):"";if(o)switch(o){case d:return m;case b:return l;case v:return p;case x:return g;case h:return u}return n}),e.exports=w},47801:function(e){e.exports=function(e,n){return null==e?void 0:e[n]}},51789:function(e,n,t){var o=t(94536);e.exports=function(){this.__data__=o?o(null):{},this.size=0}},38792:function(e){e.exports=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}},57667:function(e,n,t){var o=t(94536),r=Object.prototype.hasOwnProperty;e.exports=function(e){var n=this.__data__;if(o){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return r.call(n,e)?n[e]:void 0}},21327:function(e,n,t){var o=t(94536),r=Object.prototype.hasOwnProperty;e.exports=function(e){var n=this.__data__;return o?void 0!==n[e]:r.call(n,e)}},81866:function(e,n,t){var o=t(94536);e.exports=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=o&&void 0===n?"__lodash_hash_undefined__":n,this}},43824:function(e){var n=Object.prototype.hasOwnProperty;e.exports=function(e){var t=e.length,o=new e.constructor(t);return t&&"string"==typeof e[0]&&n.call(e,"index")&&(o.index=e.index,o.input=e.input),o}},29148:function(e,n,t){var o=t(74318),r=t(57157),i=t(93147),s=t(40419),a=t(77133);e.exports=function(e,n,t){var f=e.constructor;switch(n){case"[object ArrayBuffer]":return o(e);case"[object Boolean]":case"[object Date]":return new f(+e);case"[object DataView]":return r(e,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return a(e,t);case"[object Map]":case"[object Set]":return new f;case"[object Number]":case"[object String]":return new f(e);case"[object RegExp]":return i(e);case"[object Symbol]":return s(e)}}},38517:function(e,n,t){var o=t(3118),r=t(85924),i=t(25726);e.exports=function(e){return"function"!=typeof e.constructor||i(e)?{}:o(r(e))}},65776:function(e){var n=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var o=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==o||"symbol"!=o&&n.test(e))&&e>-1&&e%1==0&&e<t}},37019:function(e){e.exports=function(e){var n=typeof e;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e}},15346:function(e,n,t){var o,r=t(14429),i=(o=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";e.exports=function(e){return!!i&&i in e}},25726:function(e){var n=Object.prototype;e.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}},27040:function(e){e.exports=function(){this.__data__=[],this.size=0}},14125:function(e,n,t){var o=t(18470),r=Array.prototype.splice;e.exports=function(e){var n=this.__data__,t=o(n,e);return!(t<0)&&(t==n.length-1?n.pop():r.call(n,t,1),--this.size,!0)}},82117:function(e,n,t){var o=t(18470);e.exports=function(e){var n=this.__data__,t=o(n,e);return t<0?void 0:n[t][1]}},67518:function(e,n,t){var o=t(18470);e.exports=function(e){return o(this.__data__,e)>-1}},54705:function(e,n,t){var o=t(18470);e.exports=function(e,n){var t=this.__data__,r=o(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this}},24785:function(e,n,t){var o=t(1989),r=t(38407),i=t(57071);e.exports=function(){this.size=0,this.__data__={hash:new o,map:new(i||r),string:new o}}},11285:function(e,n,t){var o=t(45050);e.exports=function(e){var n=o(this,e).delete(e);return this.size-=n?1:0,n}},96e3:function(e,n,t){var o=t(45050);e.exports=function(e){return o(this,e).get(e)}},49916:function(e,n,t){var o=t(45050);e.exports=function(e){return o(this,e).has(e)}},95265:function(e,n,t){var o=t(45050);e.exports=function(e,n){var t=o(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this}},94536:function(e,n,t){var o=t(10852)(Object,"create");e.exports=o},86916:function(e,n,t){var o=t(5569)(Object.keys,Object);e.exports=o},33498:function(e){e.exports=function(e){var n=[];if(null!=e)for(var t in Object(e))n.push(t);return n}},31167:function(e,n,t){e=t.nmd(e);var o=t(31957),r=n&&!n.nodeType&&n,i=r&&e&&!e.nodeType&&e,s=i&&i.exports===r&&o.process,a=function(){try{var e=i&&i.require&&i.require("util").types;if(e)return e;return s&&s.binding&&s.binding("util")}catch(e){}}();e.exports=a},5569:function(e){e.exports=function(e,n){return function(t){return e(n(t))}}},37465:function(e,n,t){var o=t(38407);e.exports=function(){this.__data__=new o,this.size=0}},63779:function(e){e.exports=function(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}},67599:function(e){e.exports=function(e){return this.__data__.get(e)}},44758:function(e){e.exports=function(e){return this.__data__.has(e)}},34309:function(e,n,t){var o=t(38407),r=t(57071),i=t(83369);e.exports=function(e,n){var t=this.__data__;if(t instanceof o){var s=t.__data__;if(!r||s.length<199)return s.push([e,n]),this.size=++t.size,this;t=this.__data__=new i(s)}return t.set(e,n),this.size=t.size,this}},80346:function(e){var n=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},50361:function(e,n,t){var o=t(85990);e.exports=function(e){return o(e,5)}},77813:function(e){e.exports=function(e,n){return e===n||e!=e&&n!=n}},35694:function(e,n,t){var o=t(9454),r=t(37005),i=Object.prototype,s=i.hasOwnProperty,a=i.propertyIsEnumerable,f=o(function(){return arguments}())?o:function(e){return r(e)&&s.call(e,"callee")&&!a.call(e,"callee")};e.exports=f},98612:function(e,n,t){var o=t(23560),r=t(41780);e.exports=function(e){return null!=e&&r(e.length)&&!o(e)}},44144:function(e,n,t){e=t.nmd(e);var o=t(55639),r=t(95062),i=n&&!n.nodeType&&n,s=i&&e&&!e.nodeType&&e,a=s&&s.exports===i?o.Buffer:void 0,f=a?a.isBuffer:void 0;e.exports=f||r},23560:function(e,n,t){var o=t(44239),r=t(13218);e.exports=function(e){if(!r(e))return!1;var n=o(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},41780:function(e){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},56688:function(e,n,t){var o=t(25588),r=t(7518),i=t(31167),s=i&&i.isMap,a=s?r(s):o;e.exports=a},72928:function(e,n,t){var o=t(29221),r=t(7518),i=t(31167),s=i&&i.isSet,a=s?r(s):o;e.exports=a},36719:function(e,n,t){var o=t(38749),r=t(7518),i=t(31167),s=i&&i.isTypedArray,a=s?r(s):o;e.exports=a},3674:function(e,n,t){var o=t(14636),r=t(280),i=t(98612);e.exports=function(e){return i(e)?o(e):r(e)}},81704:function(e,n,t){var o=t(14636),r=t(10313),i=t(98612);e.exports=function(e){return i(e)?o(e,!0):r(e)}},70479:function(e){e.exports=function(){return[]}},95062:function(e){e.exports=function(){return!1}},75325:function(e,n,t){"use strict";t.d(n,{default:function(){return nD}});var o=t(4942),r=t(87462),i=t(30482),s=t(1413),a=t(67294),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},c=t(44192),l=a.forwardRef(function(e,n){return a.createElement(c.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:n,icon:f}))}),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},g=a.forwardRef(function(e,n){return a.createElement(c.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:n,icon:p}))}),u=t(93967),m=t.n(u),d=t(97685),b=t(71002),v=t(45987),x=t(31131),h=t(21770),w=t(29372),_=(0,a.createContext)(null),y=a.forwardRef(function(e,n){var t=e.prefixCls,o=e.className,r=e.style,i=e.id,s=e.active,f=e.tabKey,c=e.children;return a.createElement("div",{id:i&&"".concat(i,"-panel-").concat(f),role:"tabpanel",tabIndex:s?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(f),"aria-hidden":!s,style:r,className:m()(t,s&&"".concat(t,"-active"),o),ref:n},c)}),Z=["key","forceRender","style","className"];function C(e){var n=e.id,t=e.activeKey,i=e.animated,f=e.tabPosition,c=e.destroyInactiveTabPane,l=a.useContext(_),p=l.prefixCls,g=l.tabs,u=i.tabPane,d="".concat(p,"-tabpane");return a.createElement("div",{className:m()("".concat(p,"-content-holder"))},a.createElement("div",{className:m()("".concat(p,"-content"),"".concat(p,"-content-").concat(f),(0,o.Z)({},"".concat(p,"-content-animated"),u))},g.map(function(e){var o=e.key,f=e.forceRender,l=e.style,p=e.className,g=(0,v.Z)(e,Z),b=o===t;return a.createElement(w.ZP,(0,r.Z)({key:o,visible:b,forceRender:f,removeOnLeave:!!c,leavedClassName:"".concat(d,"-hidden")},i.tabPaneMotion),function(e,t){var i=e.style,f=e.className;return a.createElement(y,(0,r.Z)({},g,{prefixCls:d,id:n,tabKey:o,animated:u,active:b,style:(0,s.Z)((0,s.Z)({},l),i),className:m()(p,f),ref:t}))})})))}var E=t(74902),k=t(48555),P=t(66680),j=t(75164),N=t(42550),S={width:0,height:0,left:0,top:0};function O(e,n){var t=a.useRef(e),o=a.useState({}),r=(0,d.Z)(o,2)[1];return[t.current,function(e){var o="function"==typeof e?e(t.current):e;o!==t.current&&n(o,t.current),t.current=o,r({})}]}var I=t(8410);function R(e){var n=(0,a.useState)(0),t=(0,d.Z)(n,2),o=t[0],r=t[1],i=(0,a.useRef)(0),s=(0,a.useRef)();return s.current=e,(0,I.o)(function(){var e;null===(e=s.current)||void 0===e||e.call(s)},[o]),function(){i.current===o&&(i.current+=1,r(i.current))}}var M={width:0,height:0,left:0,top:0,right:0};function A(e){var n;return e instanceof Map?(n={},e.forEach(function(e,t){n[t]=e})):n=e,JSON.stringify(n)}function z(e){return String(e).replace(/"/g,"TABS_DQ")}var T=a.forwardRef(function(e,n){var t=e.prefixCls,o=e.editable,r=e.locale,i=e.style;return o&&!1!==o.showAdd?a.createElement("button",{ref:n,type:"button",className:"".concat(t,"-nav-add"),style:i,"aria-label":(null==r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){o.onEdit("add",{event:e})}},o.addIcon||"+"):null}),D=a.forwardRef(function(e,n){var t,o=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var s={};return"object"!==(0,b.Z)(i)||a.isValidElement(i)?s.right=i:s=i,"right"===o&&(t=s.right),"left"===o&&(t=s.left),t?a.createElement("div",{className:"".concat(r,"-extra-content"),ref:n},t):null}),K=t(81263),L={adjustX:1,adjustY:1},B=[0,0],V={topLeft:{points:["bl","tl"],overflow:L,offset:[0,-4],targetOffset:B},topCenter:{points:["bc","tc"],overflow:L,offset:[0,-4],targetOffset:B},topRight:{points:["br","tr"],overflow:L,offset:[0,-4],targetOffset:B},bottomLeft:{points:["tl","bl"],overflow:L,offset:[0,4],targetOffset:B},bottomCenter:{points:["tc","bc"],overflow:L,offset:[0,4],targetOffset:B},bottomRight:{points:["tr","br"],overflow:L,offset:[0,4],targetOffset:B}},F=t(15105),W=t(5110);function q(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,W.Z)(e)){var t=e.nodeName.toLowerCase(),o=["input","select","textarea","button"].includes(t)||e.isContentEditable||"a"===t&&!!e.getAttribute("href"),r=e.getAttribute("tabindex"),i=Number(r),s=null;return r&&!Number.isNaN(i)?s=i:o&&null===s&&(s=0),o&&e.disabled&&(s=null),null!==s&&(s>=0||n&&s<0)}return!1}function U(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=(0,E.Z)(e.querySelectorAll("*")).filter(function(e){return q(e,n)});return q(e,n)&&t.unshift(e),t}var $=F.Z.ESC,G=F.Z.TAB,H=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"],Y=a.forwardRef(function(e,n){var t,r,i,f,c,l,p,g,u,b,x,h,w,_,y,Z,C=e.arrow,E=void 0!==C&&C,k=e.prefixCls,P=void 0===k?"rc-dropdown":k,N=e.transitionName,S=e.animation,O=e.align,I=e.placement,R=e.placements,M=e.getPopupContainer,A=e.showAction,z=e.hideAction,T=e.overlayClassName,D=e.overlayStyle,L=e.visible,B=e.trigger,F=void 0===B?["hover"]:B,W=e.autoFocus,q=(0,v.Z)(e,H),Y=a.useState(),X=(0,d.Z)(Y,2),J=X[0],Q=X[1],ee="visible"in e?L:J,en=a.useRef(null);a.useImperativeHandle(n,function(){return en.current}),i=(r={visible:ee,setTriggerVisible:Q,triggerRef:en,onVisibleChange:e.onVisibleChange,autoFocus:W}).visible,f=r.setTriggerVisible,c=r.triggerRef,l=r.onVisibleChange,p=r.autoFocus,g=a.useRef(!1),u=function(){if(i&&c.current){var e,n,t,o;null===(e=c.current)||void 0===e||null===(n=e.triggerRef)||void 0===n||null===(t=n.current)||void 0===t||null===(o=t.focus)||void 0===o||o.call(t),f(!1),"function"==typeof l&&l(!1)}},b=function(){var e,n,t,o,r=U(null===(e=c.current)||void 0===e?void 0:null===(n=e.popupRef)||void 0===n?void 0:null===(t=n.current)||void 0===t?void 0:null===(o=t.getElement)||void 0===o?void 0:o.call(t))[0];return null!=r&&!!r.focus&&(r.focus(),g.current=!0,!0)},x=function(e){switch(e.keyCode){case $:u();break;case G:var n=!1;g.current||(n=b()),n?e.preventDefault():u()}},a.useEffect(function(){return i?(window.addEventListener("keydown",x),p&&(0,j.Z)(b,3),function(){window.removeEventListener("keydown",x),g.current=!1}):function(){g.current=!1}},[i]);var et=function(){var n=e.overlay;return"function"==typeof n?n():n},eo=function(){var e=et();return a.createElement(a.Fragment,null,E&&a.createElement("div",{className:"".concat(P,"-arrow")}),e)},er=z;return er||-1===F.indexOf("contextMenu")||(er=["click"]),a.createElement(K.Z,(0,s.Z)((0,s.Z)({builtinPlacements:void 0===R?V:R},q),{},{prefixCls:P,ref:en,popupClassName:m()(T,(0,o.Z)({},"".concat(P,"-show-arrow"),E)),popupStyle:D,action:F,showAction:A,hideAction:er||[],popupPlacement:void 0===I?"bottomLeft":I,popupAlign:O,popupTransitionName:N,popupAnimation:S,popupVisible:ee,stretch:(h=e.minOverlayWidthMatchTrigger,w=e.alignPoint,"minOverlayWidthMatchTrigger"in e?h:!w)?"minWidth":"",popup:"function"==typeof e.overlay?eo:eo(),onPopupVisibleChange:function(n){var t=e.onVisibleChange;Q(n),"function"==typeof t&&t(n)},onPopupClick:function(n){var t=e.onOverlayClick;Q(!1),t&&t(n)},getPopupContainer:M}),(y=(_=e.children).props?_.props:{},Z=m()(y.className,void 0!==(t=e.openClassName)?t:"".concat(P,"-open")),ee&&_?a.cloneElement(_,{className:Z}):_))}),X=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],J=void 0,Q=a.forwardRef(function(e,n){var t,o=e.prefixCls,i=e.invalidate,f=e.item,c=e.renderItem,l=e.responsive,p=e.responsiveDisabled,g=e.registerSize,u=e.itemKey,d=e.className,b=e.style,x=e.children,h=e.display,w=e.order,_=e.component,y=(0,v.Z)(e,X),Z=l&&!h;a.useEffect(function(){return function(){g(u,null)}},[]);var C=c&&f!==J?c(f,{index:w}):x;i||(t={opacity:Z?0:1,height:Z?0:J,overflowY:Z?"hidden":J,order:l?w:J,pointerEvents:Z?"none":J,position:Z?"absolute":J});var E={};Z&&(E["aria-hidden"]=!0);var P=a.createElement(void 0===_?"div":_,(0,r.Z)({className:m()(!i&&o,d),style:(0,s.Z)((0,s.Z)({},t),b)},E,y,{ref:n}),C);return l&&(P=a.createElement(k.Z,{onResize:function(e){g(u,e.offsetWidth)},disabled:p},P)),P});Q.displayName="Item";var ee=t(73935);function en(e,n){var t=a.useState(n),o=(0,d.Z)(t,2),r=o[0],i=o[1];return[r,(0,P.Z)(function(n){e(function(){i(n)})})]}var et=a.createContext(null),eo=["component"],er=["className"],ei=["className"],es=a.forwardRef(function(e,n){var t=a.useContext(et);if(!t){var o=e.component,i=(0,v.Z)(e,eo);return a.createElement(void 0===o?"div":o,(0,r.Z)({},i,{ref:n}))}var s=t.className,f=(0,v.Z)(t,er),c=e.className,l=(0,v.Z)(e,ei);return a.createElement(et.Provider,{value:null},a.createElement(Q,(0,r.Z)({ref:n,className:m()(s,c)},f,l)))});es.displayName="RawItem";var ea=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],ef="responsive",ec="invalidate";function el(e){return"+ ".concat(e.length," ...")}var ep=a.forwardRef(function(e,n){var t,o=e.prefixCls,i=void 0===o?"rc-overflow":o,f=e.data,c=void 0===f?[]:f,l=e.renderItem,p=e.renderRawItem,g=e.itemKey,u=e.itemWidth,b=void 0===u?10:u,x=e.ssr,h=e.style,w=e.className,_=e.maxCount,y=e.renderRest,Z=e.renderRawRest,C=e.suffix,E=e.component,P=e.itemComponent,N=e.onVisibleChange,S=(0,v.Z)(e,ea),O="full"===x,R=(t=a.useRef(null),function(e){t.current||(t.current=[],function(e){if("undefined"==typeof MessageChannel)(0,j.Z)(e);else{var n=new MessageChannel;n.port1.onmessage=function(){return e()},n.port2.postMessage(void 0)}}(function(){(0,ee.unstable_batchedUpdates)(function(){t.current.forEach(function(e){e()}),t.current=null})})),t.current.push(e)}),M=en(R,null),A=(0,d.Z)(M,2),z=A[0],T=A[1],D=z||0,K=en(R,new Map),L=(0,d.Z)(K,2),B=L[0],V=L[1],F=en(R,0),W=(0,d.Z)(F,2),q=W[0],U=W[1],$=en(R,0),G=(0,d.Z)($,2),H=G[0],Y=G[1],X=en(R,0),J=(0,d.Z)(X,2),eo=J[0],er=J[1],ei=(0,a.useState)(null),es=(0,d.Z)(ei,2),ep=es[0],eg=es[1],eu=(0,a.useState)(null),em=(0,d.Z)(eu,2),ed=em[0],eb=em[1],ev=a.useMemo(function(){return null===ed&&O?Number.MAX_SAFE_INTEGER:ed||0},[ed,z]),ex=(0,a.useState)(!1),eh=(0,d.Z)(ex,2),ew=eh[0],e_=eh[1],ey="".concat(i,"-item"),eZ=Math.max(q,H),eC=_===ef,eE=c.length&&eC,ek=_===ec,eP=eE||"number"==typeof _&&c.length>_,ej=(0,a.useMemo)(function(){var e=c;return eE?e=null===z&&O?c:c.slice(0,Math.min(c.length,D/b)):"number"==typeof _&&(e=c.slice(0,_)),e},[c,b,z,_,eE]),eN=(0,a.useMemo)(function(){return eE?c.slice(ev+1):c.slice(ej.length)},[c,ej,eE,ev]),eS=(0,a.useCallback)(function(e,n){var t;return"function"==typeof g?g(e):null!==(t=g&&(null==e?void 0:e[g]))&&void 0!==t?t:n},[g]),eO=(0,a.useCallback)(l||function(e){return e},[l]);function eI(e,n,t){(ed!==e||void 0!==n&&n!==ep)&&(eb(e),t||(e_(e<c.length-1),null==N||N(e)),void 0!==n&&eg(n))}function eR(e,n){V(function(t){var o=new Map(t);return null===n?o.delete(e):o.set(e,n),o})}function eM(e){return B.get(eS(ej[e],e))}(0,I.Z)(function(){if(D&&"number"==typeof eZ&&ej){var e=eo,n=ej.length,t=n-1;if(!n){eI(0,null);return}for(var o=0;o<n;o+=1){var r=eM(o);if(O&&(r=r||0),void 0===r){eI(o-1,void 0,!0);break}if(e+=r,0===t&&e<=D||o===t-1&&e+eM(t)<=D){eI(t,null);break}if(e+eZ>D){eI(o-1,e-r-eo+H);break}}C&&eM(0)+eo>D&&eg(null)}},[D,B,H,eo,eS,ej]);var eA=ew&&!!eN.length,ez={};null!==ep&&eE&&(ez={position:"absolute",left:ep,top:0});var eT={prefixCls:ey,responsive:eE,component:P,invalidate:ek},eD=p?function(e,n){var t=eS(e,n);return a.createElement(et.Provider,{key:t,value:(0,s.Z)((0,s.Z)({},eT),{},{order:n,item:e,itemKey:t,registerSize:eR,display:n<=ev})},p(e,n))}:function(e,n){var t=eS(e,n);return a.createElement(Q,(0,r.Z)({},eT,{order:n,key:t,item:e,renderItem:eO,itemKey:t,registerSize:eR,display:n<=ev}))},eK={order:eA?ev:Number.MAX_SAFE_INTEGER,className:"".concat(ey,"-rest"),registerSize:function(e,n){Y(n),U(H)},display:eA},eL=y||el,eB=Z?a.createElement(et.Provider,{value:(0,s.Z)((0,s.Z)({},eT),eK)},Z(eN)):a.createElement(Q,(0,r.Z)({},eT,eK),"function"==typeof eL?eL(eN):eL),eV=a.createElement(void 0===E?"div":E,(0,r.Z)({className:m()(!ek&&i,w),style:h,ref:n},S),ej.map(eD),eP?eB:null,C&&a.createElement(Q,(0,r.Z)({},eT,{responsive:eC,responsiveDisabled:!eE,order:ev,className:"".concat(ey,"-suffix"),registerSize:function(e,n){er(n)},display:!0,style:ez}),C));return eC?a.createElement(k.Z,{onResize:function(e,n){T(n.clientWidth)},disabled:!eE},eV):eV});ep.displayName="Overflow",ep.Item=es,ep.RESPONSIVE=ef,ep.INVALIDATE=ec;var eg=t(80334),eu=t(36748),em=a.createContext(null);function ed(e,n){return void 0===e?null:"".concat(e,"-").concat(n)}function eb(e){return ed(a.useContext(em),e)}var ev=t(56982),ex=["children","locked"],eh=a.createContext(null);function ew(e){var n=e.children,t=e.locked,o=(0,v.Z)(e,ex),r=a.useContext(eh),i=(0,ev.Z)(function(){var e;return e=(0,s.Z)({},r),Object.keys(o).forEach(function(n){var t=o[n];void 0!==t&&(e[n]=t)}),e},[r,o],function(e,n){return!t&&(e[0]!==n[0]||!(0,eu.Z)(e[1],n[1],!0))});return a.createElement(eh.Provider,{value:i},n)}var e_=a.createContext(null);function ey(){return a.useContext(e_)}var eZ=a.createContext([]);function eC(e){var n=a.useContext(eZ);return a.useMemo(function(){return void 0!==e?[].concat((0,E.Z)(n),[e]):n},[n,e])}var eE=a.createContext(null),ek=a.createContext({}),eP=F.Z.LEFT,ej=F.Z.RIGHT,eN=F.Z.UP,eS=F.Z.DOWN,eO=F.Z.ENTER,eI=F.Z.ESC,eR=F.Z.HOME,eM=F.Z.END,eA=[eN,eS,eP,ej];function ez(e,n){return U(e,!0).filter(function(e){return n.has(e)})}function eT(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!e)return null;var r=ez(e,n),i=r.length,s=r.findIndex(function(e){return t===e});return o<0?-1===s?s=i-1:s-=1:o>0&&(s+=1),r[s=(s+i)%i]}var eD="__RC_UTIL_PATH_SPLIT__",eK=function(e){return e.join(eD)},eL="rc-menu-more";function eB(e){var n=a.useRef(e);n.current=e;var t=a.useCallback(function(){for(var e,t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(o))},[]);return e?t:void 0}var eV=Math.random().toFixed(5).toString().slice(2),eF=0,eW=t(15671),eq=t(43144),eU=t(60136),e$=t(29388),eG=t(98423);function eH(e,n,t,o){var r=a.useContext(eh),i=r.activeKey,s=r.onActive,f=r.onInactive,c={active:i===e};return n||(c.onMouseEnter=function(n){null==t||t({key:e,domEvent:n}),s(e)},c.onMouseLeave=function(n){null==o||o({key:e,domEvent:n}),f(e)}),c}function eY(e){var n=a.useContext(eh),t=n.mode,o=n.rtl,r=n.inlineIndent;return"inline"!==t?null:o?{paddingRight:e*r}:{paddingLeft:e*r}}function eX(e){var n=e.icon,t=e.props,o=e.children;return("function"==typeof n?a.createElement(n,(0,s.Z)({},t)):n)||o||null}var eJ=["item"];function eQ(e){var n=e.item,t=(0,v.Z)(e,eJ);return Object.defineProperty(t,"item",{get:function(){return(0,eg.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),t}var e0=["title","attribute","elementRef"],e1=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],e2=["active"],e5=function(e){(0,eU.Z)(t,e);var n=(0,e$.Z)(t);function t(){return(0,eW.Z)(this,t),n.apply(this,arguments)}return(0,eq.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.title,t=e.attribute,o=e.elementRef,i=(0,v.Z)(e,e0),s=(0,eG.Z)(i,["eventKey","popupClassName","popupOffset","onTitleClick"]);return(0,eg.ZP)(!t,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),a.createElement(ep.Item,(0,r.Z)({},t,{title:"string"==typeof n?n:void 0},s,{ref:o}))}}]),t}(a.Component),e4=a.forwardRef(function(e,n){var t,i=e.style,f=e.className,c=e.eventKey,l=(e.warnKey,e.disabled),p=e.itemIcon,g=e.children,u=e.role,d=e.onMouseEnter,b=e.onMouseLeave,x=e.onClick,h=e.onKeyDown,w=e.onFocus,_=(0,v.Z)(e,e1),y=eb(c),Z=a.useContext(eh),C=Z.prefixCls,k=Z.onItemClick,P=Z.disabled,j=Z.overflowDisabled,S=Z.itemIcon,O=Z.selectedKeys,I=Z.onActive,R=a.useContext(ek)._internalRenderMenuItem,M="".concat(C,"-item"),A=a.useRef(),z=a.useRef(),T=P||l,D=(0,N.x1)(n,z),K=eC(c),L=function(e){return{key:c,keyPath:(0,E.Z)(K).reverse(),item:A.current,domEvent:e}},B=eH(c,T,d,b),V=B.active,W=(0,v.Z)(B,e2),q=O.includes(c),U=eY(K.length),$={};"option"===e.role&&($["aria-selected"]=q);var G=a.createElement(e5,(0,r.Z)({ref:A,elementRef:D,role:null===u?"none":u||"menuitem",tabIndex:l?null:-1,"data-menu-id":j&&y?null:y},_,W,$,{component:"li","aria-disabled":l,style:(0,s.Z)((0,s.Z)({},U),i),className:m()(M,(t={},(0,o.Z)(t,"".concat(M,"-active"),V),(0,o.Z)(t,"".concat(M,"-selected"),q),(0,o.Z)(t,"".concat(M,"-disabled"),T),t),f),onClick:function(e){if(!T){var n=L(e);null==x||x(eQ(n)),k(n)}},onKeyDown:function(e){if(null==h||h(e),e.which===F.Z.ENTER){var n=L(e);null==x||x(eQ(n)),k(n)}},onFocus:function(e){I(c),null==w||w(e)}}),g,a.createElement(eX,{props:(0,s.Z)((0,s.Z)({},e),{},{isSelected:q}),icon:p||S}));return R&&(G=R(G,e,{selected:q})),G}),e3=a.forwardRef(function(e,n){var t=e.eventKey,o=ey(),i=eC(t);return(a.useEffect(function(){if(o)return o.registerPath(t,i),function(){o.unregisterPath(t,i)}},[i]),o)?null:a.createElement(e4,(0,r.Z)({},e,{ref:n}))}),e7=["className","children"],e6=a.forwardRef(function(e,n){var t=e.className,o=e.children,i=(0,v.Z)(e,e7),s=a.useContext(eh),f=s.prefixCls,c=s.mode,l=s.rtl;return a.createElement("ul",(0,r.Z)({className:m()(f,l&&"".concat(f,"-rtl"),"".concat(f,"-sub"),"".concat(f,"-").concat("inline"===c?"inline":"vertical"),t),role:"menu"},i,{"data-menu-list":!0,ref:n}),o)});e6.displayName="SubMenuList";var e8=t(50344),e9=["label","children","key","type"];function ne(e,n){return(0,e8.Z)(e).map(function(e,t){if(a.isValidElement(e)){var o,r,i=e.key,s=null!==(o=null===(r=e.props)||void 0===r?void 0:r.eventKey)&&void 0!==o?o:i;null==s&&(s="tmp_key-".concat([].concat((0,E.Z)(n),[t]).join("-")));var f={key:s,eventKey:s};return a.cloneElement(e,f)}return e})}var nn={adjustX:1,adjustY:1},nt={topLeft:{points:["bl","tl"],overflow:nn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:nn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:nn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:nn,offset:[4,0]}},no={topLeft:{points:["bl","tl"],overflow:nn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:nn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:nn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:nn,offset:[4,0]}};function nr(e,n,t){return n||(t?t[e]||t.other:void 0)}var ni={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function ns(e){var n=e.prefixCls,t=e.visible,r=e.children,i=e.popup,f=e.popupClassName,c=e.popupOffset,l=e.disabled,p=e.mode,g=e.onVisibleChange,u=a.useContext(eh),b=u.getPopupContainer,v=u.rtl,x=u.subMenuOpenDelay,h=u.subMenuCloseDelay,w=u.builtinPlacements,_=u.triggerSubMenuAction,y=u.forceSubMenuRender,Z=u.rootClassName,C=u.motion,E=u.defaultMotions,k=a.useState(!1),P=(0,d.Z)(k,2),N=P[0],S=P[1],O=v?(0,s.Z)((0,s.Z)({},no),w):(0,s.Z)((0,s.Z)({},nt),w),I=ni[p],R=nr(p,C,E),M=a.useRef(R);"inline"!==p&&(M.current=R);var A=(0,s.Z)((0,s.Z)({},M.current),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),z=a.useRef();return a.useEffect(function(){return z.current=(0,j.Z)(function(){S(t)}),function(){j.Z.cancel(z.current)}},[t]),a.createElement(K.Z,{prefixCls:n,popupClassName:m()("".concat(n,"-popup"),(0,o.Z)({},"".concat(n,"-rtl"),v),f,Z),stretch:"horizontal"===p?"minWidth":null,getPopupContainer:b,builtinPlacements:O,popupPlacement:I,popupVisible:N,popup:i,popupAlign:c&&{offset:c},action:l?[]:[_],mouseEnterDelay:x,mouseLeaveDelay:h,onPopupVisibleChange:g,forceRender:y,popupMotion:A},r)}function na(e){var n=e.id,t=e.open,o=e.keyPath,i=e.children,f="inline",c=a.useContext(eh),l=c.prefixCls,p=c.forceSubMenuRender,g=c.motion,u=c.defaultMotions,m=c.mode,b=a.useRef(!1);b.current=m===f;var v=a.useState(!b.current),x=(0,d.Z)(v,2),h=x[0],_=x[1],y=!!b.current&&t;a.useEffect(function(){b.current&&_(!1)},[m]);var Z=(0,s.Z)({},nr(f,g,u));o.length>1&&(Z.motionAppear=!1);var C=Z.onVisibleChanged;return(Z.onVisibleChanged=function(e){return b.current||e||_(!0),null==C?void 0:C(e)},h)?null:a.createElement(ew,{mode:f,locked:!b.current},a.createElement(w.ZP,(0,r.Z)({visible:y},Z,{forceRender:p,removeOnLeave:!1,leavedClassName:"".concat(l,"-hidden")}),function(e){var t=e.className,o=e.style;return a.createElement(e6,{id:n,className:t,style:o},i)}))}var nf=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],nc=["active"],nl=function(e){var n,t=e.style,i=e.className,f=e.title,c=e.eventKey,l=(e.warnKey,e.disabled),p=e.internalPopupClose,g=e.children,u=e.itemIcon,b=e.expandIcon,x=e.popupClassName,h=e.popupOffset,w=e.onClick,_=e.onMouseEnter,y=e.onMouseLeave,Z=e.onTitleClick,C=e.onTitleMouseEnter,E=e.onTitleMouseLeave,k=(0,v.Z)(e,nf),P=eb(c),j=a.useContext(eh),N=j.prefixCls,S=j.mode,O=j.openKeys,I=j.disabled,R=j.overflowDisabled,M=j.activeKey,A=j.selectedKeys,z=j.itemIcon,T=j.expandIcon,D=j.onItemClick,K=j.onOpenChange,L=j.onActive,B=a.useContext(ek)._internalRenderSubMenuItem,V=a.useContext(eE).isSubPathKey,F=eC(),W="".concat(N,"-submenu"),q=I||l,U=a.useRef(),$=a.useRef(),G=b||T,H=O.includes(c),Y=!R&&H,X=V(A,c),J=eH(c,q,C,E),Q=J.active,ee=(0,v.Z)(J,nc),en=a.useState(!1),et=(0,d.Z)(en,2),eo=et[0],er=et[1],ei=function(e){q||er(e)},es=a.useMemo(function(){return Q||"inline"!==S&&(eo||V([M],c))},[S,Q,M,eo,c,V]),ea=eY(F.length),ef=eB(function(e){null==w||w(eQ(e)),D(e)}),ec=P&&"".concat(P,"-popup"),el=a.createElement("div",(0,r.Z)({role:"menuitem",style:ea,className:"".concat(W,"-title"),tabIndex:q?null:-1,ref:U,title:"string"==typeof f?f:null,"data-menu-id":R&&P?null:P,"aria-expanded":Y,"aria-haspopup":!0,"aria-controls":ec,"aria-disabled":q,onClick:function(e){q||(null==Z||Z({key:c,domEvent:e}),"inline"===S&&K(c,!H))},onFocus:function(){L(c)}},ee),f,a.createElement(eX,{icon:"horizontal"!==S?G:null,props:(0,s.Z)((0,s.Z)({},e),{},{isOpen:Y,isSubMenu:!0})},a.createElement("i",{className:"".concat(W,"-arrow")}))),eg=a.useRef(S);if("inline"!==S&&F.length>1?eg.current="vertical":eg.current=S,!R){var eu=eg.current;el=a.createElement(ns,{mode:eu,prefixCls:W,visible:!p&&Y&&"inline"!==S,popupClassName:x,popupOffset:h,popup:a.createElement(ew,{mode:"horizontal"===eu?"vertical":eu},a.createElement(e6,{id:ec,ref:$},g)),disabled:q,onVisibleChange:function(e){"inline"!==S&&K(c,e)}},el)}var em=a.createElement(ep.Item,(0,r.Z)({role:"none"},k,{component:"li",style:t,className:m()(W,"".concat(W,"-").concat(S),i,(n={},(0,o.Z)(n,"".concat(W,"-open"),Y),(0,o.Z)(n,"".concat(W,"-active"),es),(0,o.Z)(n,"".concat(W,"-selected"),X),(0,o.Z)(n,"".concat(W,"-disabled"),q),n)),onMouseEnter:function(e){ei(!0),null==_||_({key:c,domEvent:e})},onMouseLeave:function(e){ei(!1),null==y||y({key:c,domEvent:e})}}),el,!R&&a.createElement(na,{id:ec,open:Y,keyPath:F},g));return B&&(em=B(em,e,{selected:X,active:es,open:Y,disabled:q})),a.createElement(ew,{onItemClick:ef,mode:"horizontal"===S?"vertical":S,itemIcon:u||z,expandIcon:G},em)};function np(e){var n,t=e.eventKey,o=e.children,r=eC(t),i=ne(o,r),s=ey();return a.useEffect(function(){if(s)return s.registerPath(t,r),function(){s.unregisterPath(t,r)}},[r]),n=s?i:a.createElement(nl,e,i),a.createElement(eZ.Provider,{value:r},n)}var ng=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],nu=[],nm=a.forwardRef(function(e,n){var t,i,f,c,l,p,g,u,x,w,_,y,Z,C,k,P,N,S,O,I,R,M,A,z,T,D,K,L=e.prefixCls,B=void 0===L?"rc-menu":L,V=e.rootClassName,F=e.style,W=e.className,q=e.tabIndex,U=e.items,$=e.children,G=e.direction,H=e.id,Y=e.mode,X=void 0===Y?"vertical":Y,J=e.inlineCollapsed,Q=e.disabled,en=e.disabledOverflow,et=e.subMenuOpenDelay,eo=e.subMenuCloseDelay,er=e.forceSubMenuRender,ei=e.defaultOpenKeys,es=e.openKeys,ea=e.activeKey,ef=e.defaultActiveFirst,ec=e.selectable,el=void 0===ec||ec,eg=e.multiple,eb=void 0!==eg&&eg,ev=e.defaultSelectedKeys,ex=e.selectedKeys,eh=e.onSelect,ey=e.onDeselect,eZ=e.inlineIndent,eC=e.motion,eW=e.defaultMotions,eq=e.triggerSubMenuAction,eU=e.builtinPlacements,e$=e.itemIcon,eG=e.expandIcon,eH=e.overflowedIndicator,eY=void 0===eH?"...":eH,eX=e.overflowedIndicatorPopupClassName,eJ=e.getPopupContainer,e0=e.onClick,e1=e.onOpenChange,e2=e.onKeyDown,e5=(e.openAnimation,e.openTransitionName,e._internalRenderMenuItem),e4=e._internalRenderSubMenuItem,e7=(0,v.Z)(e,ng),e6=a.useMemo(function(){var e;return e=$,U&&(e=function e(n){return(n||[]).map(function(n,t){if(n&&"object"===(0,b.Z)(n)){var o=n.label,i=n.children,s=n.key,f=n.type,c=(0,v.Z)(n,e9),l=null!=s?s:"tmp-".concat(t);return i||"group"===f?"group"===f?a.createElement(nx,(0,r.Z)({key:l},c,{title:o}),e(i)):a.createElement(np,(0,r.Z)({key:l},c,{title:o}),e(i)):"divider"===f?a.createElement(nh,(0,r.Z)({key:l},c)):a.createElement(e3,(0,r.Z)({key:l},c),o)}return null}).filter(function(e){return e})}(U)),ne(e,nu)},[$,U]),e8=a.useState(!1),nn=(0,d.Z)(e8,2),nt=nn[0],no=nn[1],nr=a.useRef(),ni=(t=(0,h.Z)(H,{value:H}),f=(i=(0,d.Z)(t,2))[0],c=i[1],a.useEffect(function(){eF+=1;var e="".concat(eV,"-").concat(eF);c("rc-menu-uuid-".concat(e))},[]),f),ns="rtl"===G,na=(0,h.Z)(ei,{value:es,postState:function(e){return e||nu}}),nf=(0,d.Z)(na,2),nc=nf[0],nl=nf[1],nm=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function t(){nl(e),null==e1||e1(e)}n?(0,ee.flushSync)(t):t()},nd=a.useState(nc),nb=(0,d.Z)(nd,2),nv=nb[0],nw=nb[1],n_=a.useRef(!1),ny=a.useMemo(function(){return("inline"===X||"vertical"===X)&&J?["vertical",J]:[X,!1]},[X,J]),nZ=(0,d.Z)(ny,2),nC=nZ[0],nE=nZ[1],nk="inline"===nC,nP=a.useState(nC),nj=(0,d.Z)(nP,2),nN=nj[0],nS=nj[1],nO=a.useState(nE),nI=(0,d.Z)(nO,2),nR=nI[0],nM=nI[1];a.useEffect(function(){nS(nC),nM(nE),n_.current&&(nk?nl(nv):nm(nu))},[nC,nE]);var nA=a.useState(0),nz=(0,d.Z)(nA,2),nT=nz[0],nD=nz[1],nK=nT>=e6.length-1||"horizontal"!==nN||en;a.useEffect(function(){nk&&nw(nc)},[nc]),a.useEffect(function(){return n_.current=!0,function(){n_.current=!1}},[]);var nL=(l=a.useState({}),p=(0,d.Z)(l,2)[1],g=(0,a.useRef)(new Map),u=(0,a.useRef)(new Map),x=a.useState([]),_=(w=(0,d.Z)(x,2))[0],y=w[1],Z=(0,a.useRef)(0),C=(0,a.useRef)(!1),k=function(){C.current||p({})},P=(0,a.useCallback)(function(e,n){var t,o=eK(n);u.current.set(o,e),g.current.set(e,o),Z.current+=1;var r=Z.current;t=function(){r===Z.current&&k()},Promise.resolve().then(t)},[]),N=(0,a.useCallback)(function(e,n){var t=eK(n);u.current.delete(t),g.current.delete(e)},[]),S=(0,a.useCallback)(function(e){y(e)},[]),O=(0,a.useCallback)(function(e,n){var t=(g.current.get(e)||"").split(eD);return n&&_.includes(t[0])&&t.unshift(eL),t},[_]),I=(0,a.useCallback)(function(e,n){return e.some(function(e){return O(e,!0).includes(n)})},[O]),R=(0,a.useCallback)(function(e){var n="".concat(g.current.get(e)).concat(eD),t=new Set;return(0,E.Z)(u.current.keys()).forEach(function(e){e.startsWith(n)&&t.add(u.current.get(e))}),t},[]),a.useEffect(function(){return function(){C.current=!0}},[]),{registerPath:P,unregisterPath:N,refreshOverflowKeys:S,isSubPathKey:I,getKeyPath:O,getKeys:function(){var e=(0,E.Z)(g.current.keys());return _.length&&e.push(eL),e},getSubPathKeys:R}),nB=nL.registerPath,nV=nL.unregisterPath,nF=nL.refreshOverflowKeys,nW=nL.isSubPathKey,nq=nL.getKeyPath,nU=nL.getKeys,n$=nL.getSubPathKeys,nG=a.useMemo(function(){return{registerPath:nB,unregisterPath:nV}},[nB,nV]),nH=a.useMemo(function(){return{isSubPathKey:nW}},[nW]);a.useEffect(function(){nF(nK?nu:e6.slice(nT+1).map(function(e){return e.key}))},[nT,nK]);var nY=(0,h.Z)(ea||ef&&(null===(D=e6[0])||void 0===D?void 0:D.key),{value:ea}),nX=(0,d.Z)(nY,2),nJ=nX[0],nQ=nX[1],n0=eB(function(e){nQ(e)}),n1=eB(function(){nQ(void 0)});(0,a.useImperativeHandle)(n,function(){return{list:nr.current,focus:function(e){var n,t,o,r,i=null!=nJ?nJ:null===(n=e6.find(function(e){return!e.props.disabled}))||void 0===n?void 0:n.key;i&&(null===(t=nr.current)||void 0===t||null===(o=t.querySelector("li[data-menu-id='".concat(ed(ni,i),"']")))||void 0===o||null===(r=o.focus)||void 0===r||r.call(o,e))}}});var n2=(0,h.Z)(ev||[],{value:ex,postState:function(e){return Array.isArray(e)?e:null==e?nu:[e]}}),n5=(0,d.Z)(n2,2),n4=n5[0],n3=n5[1],n7=function(e){if(el){var n,t=e.key,o=n4.includes(t);n3(n=eb?o?n4.filter(function(e){return e!==t}):[].concat((0,E.Z)(n4),[t]):[t]);var r=(0,s.Z)((0,s.Z)({},e),{},{selectedKeys:n});o?null==ey||ey(r):null==eh||eh(r)}!eb&&nc.length&&"inline"!==nN&&nm(nu)},n6=eB(function(e){null==e0||e0(eQ(e)),n7(e)}),n8=eB(function(e,n){var t=nc.filter(function(n){return n!==e});if(n)t.push(e);else if("inline"!==nN){var o=n$(e);t=t.filter(function(e){return!o.has(e)})}(0,eu.Z)(nc,t,!0)||nm(t,!0)}),n9=eB(eJ),te=(M=function(e,n){var t=null!=n?n:!nc.includes(e);n8(e,t)},A=a.useRef(),(z=a.useRef()).current=nJ,T=function(){j.Z.cancel(A.current)},a.useEffect(function(){return function(){T()}},[]),function(e){var n=e.which;if([].concat(eA,[eO,eI,eR,eM]).includes(n)){var t=function(){return f=new Set,c=new Map,l=new Map,nU().forEach(function(e){var n=document.querySelector("[data-menu-id='".concat(ed(ni,e),"']"));n&&(f.add(n),l.set(n,e),c.set(e,n))}),f};t();var r=function(e,n){for(var t=e||document.activeElement;t;){if(n.has(t))return t;t=t.parentElement}return null}(c.get(nJ),f),i=l.get(r),s=function(e,n,t,r){var i,s,a,f,c="prev",l="next",p="children",g="parent";if("inline"===e&&r===eO)return{inlineTrigger:!0};var u=(i={},(0,o.Z)(i,eN,c),(0,o.Z)(i,eS,l),i),m=(s={},(0,o.Z)(s,eP,t?l:c),(0,o.Z)(s,ej,t?c:l),(0,o.Z)(s,eS,p),(0,o.Z)(s,eO,p),s),d=(a={},(0,o.Z)(a,eN,c),(0,o.Z)(a,eS,l),(0,o.Z)(a,eO,p),(0,o.Z)(a,eI,g),(0,o.Z)(a,eP,t?p:g),(0,o.Z)(a,ej,t?g:p),a);switch(null===(f=({inline:u,horizontal:m,vertical:d,inlineSub:u,horizontalSub:d,verticalSub:d})["".concat(e).concat(n?"":"Sub")])||void 0===f?void 0:f[r]){case c:return{offset:-1,sibling:!0};case l:return{offset:1,sibling:!0};case g:return{offset:-1,sibling:!1};case p:return{offset:1,sibling:!1};default:return null}}(nN,1===nq(i,!0).length,ns,n);if(!s&&n!==eR&&n!==eM)return;(eA.includes(n)||[eR,eM].includes(n))&&e.preventDefault();var a=function(e){if(e){var n=e,t=e.querySelector("a");null!=t&&t.getAttribute("href")&&(n=t);var o=l.get(e);nQ(o),T(),A.current=(0,j.Z)(function(){z.current===o&&n.focus()})}};if([eR,eM].includes(n)||s.sibling||!r){var f,c,l,p,g=ez(p=r&&"inline"!==nN?function(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}(r):nr.current,f);a(n===eR?g[0]:n===eM?g[g.length-1]:eT(p,f,r,s.offset))}else if(s.inlineTrigger)M(i);else if(s.offset>0)M(i,!0),T(),A.current=(0,j.Z)(function(){t();var e=r.getAttribute("aria-controls");a(eT(document.getElementById(e),f))},5);else if(s.offset<0){var u=nq(i,!0),m=u[u.length-2],d=c.get(m);M(m,!1),a(d)}}null==e2||e2(e)});a.useEffect(function(){no(!0)},[]);var tn=a.useMemo(function(){return{_internalRenderMenuItem:e5,_internalRenderSubMenuItem:e4}},[e5,e4]),tt="horizontal"!==nN||en?e6:e6.map(function(e,n){return a.createElement(ew,{key:e.key,overflowDisabled:n>nT},e)}),to=a.createElement(ep,(0,r.Z)({id:H,ref:nr,prefixCls:"".concat(B,"-overflow"),component:"ul",itemComponent:e3,className:m()(B,"".concat(B,"-root"),"".concat(B,"-").concat(nN),W,(K={},(0,o.Z)(K,"".concat(B,"-inline-collapsed"),nR),(0,o.Z)(K,"".concat(B,"-rtl"),ns),K),V),dir:G,style:F,role:"menu",tabIndex:void 0===q?0:q,data:tt,renderRawItem:function(e){return e},renderRawRest:function(e){var n=e.length,t=n?e6.slice(-n):null;return a.createElement(np,{eventKey:eL,title:eY,disabled:nK,internalPopupClose:0===n,popupClassName:eX},t)},maxCount:"horizontal"!==nN||en?ep.INVALIDATE:ep.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(e){nD(e)},onKeyDown:te},e7));return a.createElement(ek.Provider,{value:tn},a.createElement(em.Provider,{value:ni},a.createElement(ew,{prefixCls:B,rootClassName:V,mode:nN,openKeys:nc,rtl:ns,disabled:Q,motion:nt?eC:null,defaultMotions:nt?eW:null,activeKey:nJ,onActive:n0,onInactive:n1,selectedKeys:n4,inlineIndent:void 0===eZ?24:eZ,subMenuOpenDelay:void 0===et?.1:et,subMenuCloseDelay:void 0===eo?.1:eo,forceSubMenuRender:er,builtinPlacements:eU,triggerSubMenuAction:void 0===eq?"hover":eq,getPopupContainer:n9,itemIcon:e$,expandIcon:eG,onItemClick:n6,onOpenChange:n8},a.createElement(eE.Provider,{value:nH},to),a.createElement("div",{style:{display:"none"},"aria-hidden":!0},a.createElement(e_.Provider,{value:nG},e6)))))}),nd=["className","title","eventKey","children"],nb=["children"],nv=function(e){var n=e.className,t=e.title,o=(e.eventKey,e.children),i=(0,v.Z)(e,nd),s=a.useContext(eh).prefixCls,f="".concat(s,"-item-group");return a.createElement("li",(0,r.Z)({role:"presentation"},i,{onClick:function(e){return e.stopPropagation()},className:m()(f,n)}),a.createElement("div",{role:"presentation",className:"".concat(f,"-title"),title:"string"==typeof t?t:void 0},t),a.createElement("ul",{role:"group",className:"".concat(f,"-list")},o))};function nx(e){var n=e.children,t=(0,v.Z)(e,nb),o=ne(n,eC(t.eventKey));return ey()?o:a.createElement(nv,(0,eG.Z)(t,["warnKey"]),o)}function nh(e){var n=e.className,t=e.style,o=a.useContext(eh).prefixCls;return ey()?null:a.createElement("li",{className:m()("".concat(o,"-item-divider"),n),style:t})}nm.Item=e3,nm.SubMenu=np,nm.ItemGroup=nx,nm.Divider=nh;var nw=a.memo(a.forwardRef(function(e,n){var t=e.prefixCls,r=e.id,i=e.tabs,s=e.locale,f=e.mobile,c=e.moreIcon,l=e.moreTransitionName,p=e.style,g=e.className,u=e.editable,b=e.tabBarGutter,v=e.rtl,x=e.removeAriaLabel,h=e.onTabClick,w=e.getPopupContainer,_=e.popupClassName,y=(0,a.useState)(!1),Z=(0,d.Z)(y,2),C=Z[0],E=Z[1],k=(0,a.useState)(null),P=(0,d.Z)(k,2),j=P[0],N=P[1],S="".concat(r,"-more-popup"),O="".concat(t,"-dropdown"),I=null!==j?"".concat(S,"-").concat(j):null,R=null==s?void 0:s.dropdownAriaLabel,M=a.createElement(nm,{onClick:function(e){h(e.key,e.domEvent),E(!1)},prefixCls:"".concat(O,"-menu"),id:S,tabIndex:-1,role:"listbox","aria-activedescendant":I,selectedKeys:[j],"aria-label":void 0!==R?R:"expanded dropdown"},i.map(function(e){var n=u&&!1!==e.closable&&!e.disabled;return a.createElement(e3,{key:e.key,id:"".concat(S,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},a.createElement("span",null,e.label),n&&a.createElement("button",{type:"button","aria-label":x||"remove",tabIndex:0,className:"".concat(O,"-menu-item-remove"),onClick:function(n){var t;n.stopPropagation(),t=e.key,n.preventDefault(),n.stopPropagation(),u.onEdit("remove",{key:t,event:n})}},e.closeIcon||u.removeIcon||"\xd7"))}));function A(e){for(var n=i.filter(function(e){return!e.disabled}),t=n.findIndex(function(e){return e.key===j})||0,o=n.length,r=0;r<o;r+=1){var s=n[t=(t+e+o)%o];if(!s.disabled){N(s.key);return}}}(0,a.useEffect)(function(){var e=document.getElementById(I);e&&e.scrollIntoView&&e.scrollIntoView(!1)},[j]),(0,a.useEffect)(function(){C||N(null)},[C]);var z=(0,o.Z)({},v?"marginRight":"marginLeft",b);i.length||(z.visibility="hidden",z.order=1);var D=m()((0,o.Z)({},"".concat(O,"-rtl"),v)),K=f?null:a.createElement(Y,{prefixCls:O,overlay:M,trigger:["hover"],visible:!!i.length&&C,transitionName:l,onVisibleChange:E,overlayClassName:m()(D,_),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:w},a.createElement("button",{type:"button",className:"".concat(t,"-nav-more"),style:z,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":S,id:"".concat(r,"-more"),"aria-expanded":C,onKeyDown:function(e){var n=e.which;if(!C){[F.Z.DOWN,F.Z.SPACE,F.Z.ENTER].includes(n)&&(E(!0),e.preventDefault());return}switch(n){case F.Z.UP:A(-1),e.preventDefault();break;case F.Z.DOWN:A(1),e.preventDefault();break;case F.Z.ESC:E(!1);break;case F.Z.SPACE:case F.Z.ENTER:null!==j&&h(j,e)}}},void 0===c?"More":c));return a.createElement("div",{className:m()("".concat(t,"-nav-operations"),g),style:p,ref:n},K,a.createElement(T,{prefixCls:t,locale:s,editable:u}))}),function(e,n){return n.tabMoving}),n_=function(e){var n,t=e.prefixCls,r=e.id,i=e.active,s=e.tab,f=s.key,c=s.label,l=s.disabled,p=s.closeIcon,g=e.closable,u=e.renderWrapper,d=e.removeAriaLabel,b=e.editable,v=e.onClick,x=e.onFocus,h=e.style,w="".concat(t,"-tab"),_=b&&!1!==g&&!l;function y(e){l||v(e)}var Z=a.createElement("div",{key:f,"data-node-key":z(f),className:m()(w,(n={},(0,o.Z)(n,"".concat(w,"-with-remove"),_),(0,o.Z)(n,"".concat(w,"-active"),i),(0,o.Z)(n,"".concat(w,"-disabled"),l),n)),style:h,onClick:y},a.createElement("div",{role:"tab","aria-selected":i,id:r&&"".concat(r,"-tab-").concat(f),className:"".concat(w,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(f),"aria-disabled":l,tabIndex:l?null:0,onClick:function(e){e.stopPropagation(),y(e)},onKeyDown:function(e){[F.Z.SPACE,F.Z.ENTER].includes(e.which)&&(e.preventDefault(),y(e))},onFocus:x},c),_&&a.createElement("button",{type:"button","aria-label":d||"remove",tabIndex:0,className:"".concat(w,"-remove"),onClick:function(e){e.stopPropagation(),e.preventDefault(),e.stopPropagation(),b.onEdit("remove",{key:f,event:e})}},p||b.removeIcon||"\xd7"));return u?u(Z):Z},ny=function(e){var n=e.current||{},t=n.offsetWidth,o=n.offsetHeight;return[void 0===t?0:t,void 0===o?0:o]},nZ=function(e,n){return e[n?0:1]},nC=a.forwardRef(function(e,n){var t,i,f,c,l,p,g,u,b,v,x,h,w,y,Z,C,I,K,L,B,V,F,W,q,U,$,G,H,Y,X,J,Q,ee,en,et,eo,er,ei,es,ea,ef=a.useContext(_),ec=ef.prefixCls,el=ef.tabs,ep=e.className,eg=e.style,eu=e.id,em=e.animated,ed=e.activeKey,eb=e.rtl,ev=e.extra,ex=e.editable,eh=e.locale,ew=e.tabPosition,e_=e.tabBarGutter,ey=e.children,eZ=e.onTabClick,eC=e.onTabScroll,eE=(0,a.useRef)(),ek=(0,a.useRef)(),eP=(0,a.useRef)(),ej=(0,a.useRef)(),eN=(0,a.useRef)(),eS=(0,a.useRef)(),eO=(0,a.useRef)(),eI="top"===ew||"bottom"===ew,eR=O(0,function(e,n){eI&&eC&&eC({direction:e>n?"left":"right"})}),eM=(0,d.Z)(eR,2),eA=eM[0],ez=eM[1],eT=O(0,function(e,n){!eI&&eC&&eC({direction:e>n?"top":"bottom"})}),eD=(0,d.Z)(eT,2),eK=eD[0],eL=eD[1],eB=(0,a.useState)([0,0]),eV=(0,d.Z)(eB,2),eF=eV[0],eW=eV[1],eq=(0,a.useState)([0,0]),eU=(0,d.Z)(eq,2),e$=eU[0],eG=eU[1],eH=(0,a.useState)([0,0]),eY=(0,d.Z)(eH,2),eX=eY[0],eJ=eY[1],eQ=(0,a.useState)([0,0]),e0=(0,d.Z)(eQ,2),e1=e0[0],e2=e0[1],e5=(t=new Map,i=(0,a.useRef)([]),f=(0,a.useState)({}),c=(0,d.Z)(f,2)[1],l=(0,a.useRef)("function"==typeof t?t():t),p=R(function(){var e=l.current;i.current.forEach(function(n){e=n(e)}),i.current=[],l.current=e,c({})}),[l.current,function(e){i.current.push(e),p()}]),e4=(0,d.Z)(e5,2),e3=e4[0],e7=e4[1],e6=(g=e$[0],(0,a.useMemo)(function(){for(var e=new Map,n=e3.get(null===(r=el[0])||void 0===r?void 0:r.key)||S,t=n.left+n.width,o=0;o<el.length;o+=1){var r,i,a=el[o].key,f=e3.get(a);f||(f=e3.get(null===(i=el[o-1])||void 0===i?void 0:i.key)||S);var c=e.get(a)||(0,s.Z)({},f);c.right=t-c.left-c.width,e.set(a,c)}return e},[el.map(function(e){return e.key}).join("_"),e3,g])),e8=nZ(eF,eI),e9=nZ(e$,eI),ne=nZ(eX,eI),nn=nZ(e1,eI),nt=e8<e9+ne,no=nt?e8-nn:e8-ne,nr="".concat(ec,"-nav-operations-hidden"),ni=0,ns=0;function na(e){return e<ni?ni:e>ns?ns:e}eI&&eb?(ni=0,ns=Math.max(0,e9-no)):(ni=Math.min(0,no-e9),ns=0);var nf=(0,a.useRef)(),nc=(0,a.useState)(),nl=(0,d.Z)(nc,2),np=nl[0],ng=nl[1];function nu(){ng(Date.now())}function nm(){window.clearTimeout(nf.current)}u=function(e,n){function t(e,n){e(function(e){return na(e+n)})}return!!nt&&(eI?t(ez,e):t(eL,n),nm(),nu(),!0)},b=(0,a.useState)(),x=(v=(0,d.Z)(b,2))[0],h=v[1],w=(0,a.useState)(0),Z=(y=(0,d.Z)(w,2))[0],C=y[1],I=(0,a.useState)(0),L=(K=(0,d.Z)(I,2))[0],B=K[1],V=(0,a.useState)(),W=(F=(0,d.Z)(V,2))[0],q=F[1],U=(0,a.useRef)(),$=(0,a.useRef)(),(G=(0,a.useRef)(null)).current={onTouchStart:function(e){var n=e.touches[0];h({x:n.screenX,y:n.screenY}),window.clearInterval(U.current)},onTouchMove:function(e){if(x){e.preventDefault();var n=e.touches[0],t=n.screenX,o=n.screenY;h({x:t,y:o});var r=t-x.x,i=o-x.y;u(r,i);var s=Date.now();C(s),B(s-Z),q({x:r,y:i})}},onTouchEnd:function(){if(x&&(h(null),q(null),W)){var e=W.x/L,n=W.y/L;if(!(.1>Math.max(Math.abs(e),Math.abs(n)))){var t=e,o=n;U.current=window.setInterval(function(){if(.01>Math.abs(t)&&.01>Math.abs(o)){window.clearInterval(U.current);return}t*=.9046104802746175,o*=.9046104802746175,u(20*t,20*o)},20)}}},onWheel:function(e){var n=e.deltaX,t=e.deltaY,o=0,r=Math.abs(n),i=Math.abs(t);r===i?o="x"===$.current?n:t:r>i?(o=n,$.current="x"):(o=t,$.current="y"),u(-o,-o)&&e.preventDefault()}},a.useEffect(function(){function e(e){G.current.onTouchMove(e)}function n(e){G.current.onTouchEnd(e)}return document.addEventListener("touchmove",e,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),ej.current.addEventListener("touchstart",function(e){G.current.onTouchStart(e)},{passive:!1}),ej.current.addEventListener("wheel",function(e){G.current.onWheel(e)}),function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",n)}},[]),(0,a.useEffect)(function(){return nm(),np&&(nf.current=window.setTimeout(function(){ng(0)},100)),nm},[np]);var nd=(H=eI?eA:eK,ee=(Y=(0,s.Z)((0,s.Z)({},e),{},{tabs:el})).tabs,en=Y.tabPosition,et=Y.rtl,["top","bottom"].includes(en)?(X="width",J=et?"right":"left",Q=Math.abs(H)):(X="height",J="top",Q=-H),(0,a.useMemo)(function(){if(!ee.length)return[0,0];for(var e=ee.length,n=e,t=0;t<e;t+=1){var o=e6.get(ee[t].key)||M;if(o[J]+o[X]>Q+no){n=t-1;break}}for(var r=0,i=e-1;i>=0;i-=1)if((e6.get(ee[i].key)||M)[J]<Q){r=i+1;break}return[r,n]},[e6,no,e9,ne,nn,Q,en,ee.map(function(e){return e.key}).join("_"),et])),nb=(0,d.Z)(nd,2),nv=nb[0],nx=nb[1],nh=(0,P.Z)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ed,n=e6.get(e)||{width:0,height:0,left:0,right:0,top:0};if(eI){var t=eA;eb?n.right<eA?t=n.right:n.right+n.width>eA+no&&(t=n.right+n.width-no):n.left<-eA?t=-n.left:n.left+n.width>-eA+no&&(t=-(n.left+n.width-no)),eL(0),ez(na(t))}else{var o=eK;n.top<-eK?o=-n.top:n.top+n.height>-eK+no&&(o=-(n.top+n.height-no)),ez(0),eL(na(o))}}),nC={};"top"===ew||"bottom"===ew?nC[eb?"marginRight":"marginLeft"]=e_:nC.marginTop=e_;var nE=el.map(function(e,n){var t=e.key;return a.createElement(n_,{id:eu,prefixCls:ec,key:t,tab:e,style:0===n?void 0:nC,closable:e.closable,editable:ex,active:t===ed,renderWrapper:ey,removeAriaLabel:null==eh?void 0:eh.removeAriaLabel,onClick:function(e){eZ(t,e)},onFocus:function(){nh(t),nu(),ej.current&&(eb||(ej.current.scrollLeft=0),ej.current.scrollTop=0)}})}),nk=function(){return e7(function(){var e=new Map;return el.forEach(function(n){var t,o=n.key,r=null===(t=eN.current)||void 0===t?void 0:t.querySelector('[data-node-key="'.concat(z(o),'"]'));r&&e.set(o,{width:r.offsetWidth,height:r.offsetHeight,left:r.offsetLeft,top:r.offsetTop})}),e})};(0,a.useEffect)(function(){nk()},[el.map(function(e){return e.key}).join("_")]);var nP=R(function(){var e=ny(eE),n=ny(ek),t=ny(eP);eW([e[0]-n[0]-t[0],e[1]-n[1]-t[1]]);var o=ny(eO);eJ(o),e2(ny(eS));var r=ny(eN);eG([r[0]-o[0],r[1]-o[1]]),nk()}),nj=el.slice(0,nv),nN=el.slice(nx+1),nS=[].concat((0,E.Z)(nj),(0,E.Z)(nN)),nO=(0,a.useState)(),nI=(0,d.Z)(nO,2),nR=nI[0],nM=nI[1],nA=e6.get(ed),nz=(0,a.useRef)();function nT(){j.Z.cancel(nz.current)}(0,a.useEffect)(function(){var e={};return nA&&(eI?(eb?e.right=nA.right:e.left=nA.left,e.width=nA.width):(e.top=nA.top,e.height=nA.height)),nT(),nz.current=(0,j.Z)(function(){nM(e)}),nT},[nA,eI,eb]),(0,a.useEffect)(function(){nh()},[ed,ni,ns,A(nA),A(e6),eI]),(0,a.useEffect)(function(){nP()},[eb]);var nD=!!nS.length,nK="".concat(ec,"-nav-wrap");return eI?eb?(ei=eA>0,er=eA!==ns):(er=eA<0,ei=eA!==ni):(es=eK<0,ea=eK!==ni),a.createElement(k.Z,{onResize:nP},a.createElement("div",{ref:(0,N.x1)(n,eE),role:"tablist",className:m()("".concat(ec,"-nav"),ep),style:eg,onKeyDown:function(){nu()}},a.createElement(D,{ref:ek,position:"left",extra:ev,prefixCls:ec}),a.createElement("div",{className:m()(nK,(eo={},(0,o.Z)(eo,"".concat(nK,"-ping-left"),er),(0,o.Z)(eo,"".concat(nK,"-ping-right"),ei),(0,o.Z)(eo,"".concat(nK,"-ping-top"),es),(0,o.Z)(eo,"".concat(nK,"-ping-bottom"),ea),eo)),ref:ej},a.createElement(k.Z,{onResize:nP},a.createElement("div",{ref:eN,className:"".concat(ec,"-nav-list"),style:{transform:"translate(".concat(eA,"px, ").concat(eK,"px)"),transition:np?"none":void 0}},nE,a.createElement(T,{ref:eO,prefixCls:ec,locale:eh,editable:ex,style:(0,s.Z)((0,s.Z)({},0===nE.length?void 0:nC),{},{visibility:nD?"hidden":null})}),a.createElement("div",{className:m()("".concat(ec,"-ink-bar"),(0,o.Z)({},"".concat(ec,"-ink-bar-animated"),em.inkBar)),style:nR})))),a.createElement(nw,(0,r.Z)({},e,{removeAriaLabel:null==eh?void 0:eh.removeAriaLabel,ref:eS,prefixCls:ec,tabs:nS,className:!nD&&nr,tabMoving:!!np})),a.createElement(D,{ref:eP,position:"right",extra:ev,prefixCls:ec})))}),nE=["renderTabBar"],nk=["label","key"];function nP(e){var n=e.renderTabBar,t=(0,v.Z)(e,nE),o=a.useContext(_).tabs;return n?n((0,s.Z)((0,s.Z)({},t),{},{panes:o.map(function(e){var n=e.label,t=e.key,o=(0,v.Z)(e,nk);return a.createElement(y,(0,r.Z)({tab:n,key:t,tabKey:t},o))})}),nC):a.createElement(nC,t)}var nj=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],nN=0,nS=a.forwardRef(function(e,n){var t,i,f=e.id,c=e.prefixCls,l=void 0===c?"rc-tabs":c,p=e.className,g=e.items,u=e.direction,w=e.activeKey,y=e.defaultActiveKey,Z=e.editable,E=e.animated,k=e.tabPosition,P=void 0===k?"top":k,j=e.tabBarGutter,N=e.tabBarStyle,S=e.tabBarExtraContent,O=e.locale,I=e.moreIcon,R=e.moreTransitionName,M=e.destroyInactiveTabPane,A=e.renderTabBar,z=e.onChange,T=e.onTabClick,D=e.onTabScroll,K=e.getPopupContainer,L=e.popupClassName,B=(0,v.Z)(e,nj),V=a.useMemo(function(){return(g||[]).filter(function(e){return e&&"object"===(0,b.Z)(e)&&"key"in e})},[g]),F="rtl"===u,W=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!1}:(0,s.Z)({inkBar:!0},"object"===(0,b.Z)(n)?n:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(E),q=(0,a.useState)(!1),U=(0,d.Z)(q,2),$=U[0],G=U[1];(0,a.useEffect)(function(){G((0,x.Z)())},[]);var H=(0,h.Z)(function(){var e;return null===(e=V[0])||void 0===e?void 0:e.key},{value:w,defaultValue:y}),Y=(0,d.Z)(H,2),X=Y[0],J=Y[1],Q=(0,a.useState)(function(){return V.findIndex(function(e){return e.key===X})}),ee=(0,d.Z)(Q,2),en=ee[0],et=ee[1];(0,a.useEffect)(function(){var e,n=V.findIndex(function(e){return e.key===X});-1===n&&(n=Math.max(0,Math.min(en,V.length-1)),J(null===(e=V[n])||void 0===e?void 0:e.key)),et(n)},[V.map(function(e){return e.key}).join("_"),X,en]);var eo=(0,h.Z)(null,{value:f}),er=(0,d.Z)(eo,2),ei=er[0],es=er[1];(0,a.useEffect)(function(){f||(es("rc-tabs-".concat(nN)),nN+=1)},[]);var ea={id:ei,activeKey:X,animated:W,tabPosition:P,rtl:F,mobile:$},ef=(0,s.Z)((0,s.Z)({},ea),{},{editable:Z,locale:O,moreIcon:I,moreTransitionName:R,tabBarGutter:j,onTabClick:function(e,n){null==T||T(e,n);var t=e!==X;J(e),t&&(null==z||z(e))},onTabScroll:D,extra:S,style:N,panes:null,getPopupContainer:K,popupClassName:L});return a.createElement(_.Provider,{value:{tabs:V,prefixCls:l}},a.createElement("div",(0,r.Z)({ref:n,id:f,className:m()(l,"".concat(l,"-").concat(P),(t={},(0,o.Z)(t,"".concat(l,"-mobile"),$),(0,o.Z)(t,"".concat(l,"-editable"),Z),(0,o.Z)(t,"".concat(l,"-rtl"),F),t),p)},B),i,a.createElement(nP,(0,r.Z)({},ef,{renderTabBar:A})),a.createElement(C,(0,r.Z)({destroyInactiveTabPane:M},ea,{animated:W}))))}),nO=t(17399),nI=t(23173),nR=t(99293),nM={motionAppear:!1,motionEnter:!0,motionLeave:!0},nA=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>n.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t},nz=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>n.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t};function nT(e){var n,t=e.type,s=e.className,f=e.size,c=e.onEdit,p=e.hideAdd,u=e.centered,d=e.addIcon,v=e.children,x=e.items,h=e.animated,w=nz(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),_=w.prefixCls,y=w.moreIcon,Z=void 0===y?a.createElement(l,null):y,C=a.useContext(nO.E_),E=C.getPrefixCls,k=C.direction,P=C.getPopupContainer,j=E("tabs",_);"editable-card"===t&&(n={onEdit:function(e,n){var t=n.key,o=n.event;null==c||c("add"===e?o:t,e)},removeIcon:a.createElement(i.Z,null),addIcon:d||a.createElement(g,null),showAdd:!0!==p});var N=E(),S=x||(0,e8.Z)(v).map(function(e){if(a.isValidElement(e)){var n=e.key,t=e.props||{},o=t.tab,i=nA(t,["tab"]);return(0,r.Z)((0,r.Z)({key:String(n)},i),{label:o})}return null}).filter(function(e){return e}),O=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(n=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!0}:(0,r.Z)({inkBar:!0},"object"===(0,b.Z)(t)?t:{})).tabPane&&(n.tabPaneMotion=(0,r.Z)((0,r.Z)({},nM),{motionName:(0,nR.mL)(e,"switch")})),n}(j,h);return a.createElement(nI.Z.Consumer,null,function(e){var i=void 0!==f?f:e;return a.createElement(nS,(0,r.Z)({direction:k,getPopupContainer:P,moreTransitionName:"".concat(N,"-slide-up")},w,{items:S,className:m()((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},"".concat(j,"-").concat(i),i),"".concat(j,"-card"),["card","editable-card"].includes(t)),"".concat(j,"-editable-card"),"editable-card"===t),"".concat(j,"-centered"),u),s),editable:n,moreIcon:Z,prefixCls:j,animated:O}))})}nT.TabPane=function(){return null};var nD=nT},74300:function(e,n,t){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.CopyToClipboard=void 0;var r=a(t(67294)),i=a(t(20640)),s=["text","onCopy","options","children"];function a(e){return e&&e.__esModule?e:{default:e}}function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach(function(n){u(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function l(e,n){return(l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function p(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&l(e,n)}(f,e);var n,t,a=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=g(f);return e=n?Reflect.construct(t,arguments,g(this).constructor):t.apply(this,arguments),function(e,n){if(n&&("object"===o(n)||"function"==typeof n))return n;if(void 0!==n)throw TypeError("Derived constructors may only return object or undefined");return p(e)}(this,e)});function f(){var e;!function(e,n){if(!(e instanceof n))throw TypeError("Cannot call a class as a function")}(this,f);for(var n=arguments.length,t=Array(n),o=0;o<n;o++)t[o]=arguments[o];return u(p(e=a.call.apply(a,[this].concat(t))),"onClick",function(n){var t=e.props,o=t.text,s=t.onCopy,a=t.children,f=t.options,c=r.default.Children.only(a),l=(0,i.default)(o,f);s&&s(o,l),c&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(n)}),e}return t=[{key:"render",value:function(){var e=this.props,n=(e.text,e.onCopy,e.options,e.children),t=function(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,s),o=r.default.Children.only(n);return r.default.cloneElement(o,c(c({},t),{},{onClick:this.onClick}))}}],function(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(f.prototype,t),Object.defineProperty(f,"prototype",{writable:!1}),f}(r.default.PureComponent);n.CopyToClipboard=m,u(m,"defaultProps",{onCopy:void 0,options:void 0})},80594:function(e,n,t){"use strict";var o=t(74300).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,t=[],o=0;o<e.rangeCount;o++)t.push(e.getRangeAt(o));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach(function(n){e.addRange(n)}),n&&n.focus()}}},42700:function(e,n,t){"use strict";t.d(n,{a:function(){return P},b:function(){return j},c:function(){return N},d:function(){return S}});var o=t(17566),r=t(86727),i=t(53224),s=t(67294),a=t(68376),f=t(4942),c=t(71002),l=t(87462),p=t(93967),g=t.n(p),u=t(29372),m=t(17399),d=t(84476),b=t(22781);function v(e){return b.Y.includes(e)}var x=t(97685);function h(e){var n,t=e.prefixCls,o=e.value,r=e.current,i=e.offset,a=void 0===i?0:i;return a&&(n={position:"absolute",top:"".concat(a,"00%"),left:0}),s.createElement("span",{style:n,className:g()("".concat(t,"-only-unit"),{current:r})},o)}function w(e){var n,t,o=e.prefixCls,r=e.count,i=Number(e.value),a=Math.abs(r),f=s.useState(i),c=(0,x.Z)(f,2),p=c[0],g=c[1],u=s.useState(a),m=(0,x.Z)(u,2),d=m[0],b=m[1],v=function(){g(i),b(a)};if(s.useEffect(function(){var e=setTimeout(function(){v()},1e3);return function(){clearTimeout(e)}},[i]),p===i||Number.isNaN(i)||Number.isNaN(p))n=[s.createElement(h,(0,l.Z)({},e,{key:i,current:!0}))],t={transition:"none"};else{n=[];for(var w=i+10,_=[],y=i;y<=w;y+=1)_.push(y);var Z=_.findIndex(function(e){return e%10===p});n=_.map(function(n,t){return s.createElement(h,(0,l.Z)({},e,{key:n,value:n%10,offset:t-Z,current:t===Z}))}),t={transform:"translateY(".concat(-function(e,n,t){for(var o=e,r=0;(o+10)%10!==n;)o+=t,r+=t;return r}(p,i,d<a?1:-1),"00%)")}}return s.createElement("span",{className:"".concat(o,"-only"),style:t,onTransitionEnd:v},n)}var _=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>n.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t},y=function(e){var n=e.prefixCls,t=e.count,o=e.className,r=e.motionClassName,i=e.style,a=e.title,f=e.show,c=e.component,p=e.children,u=_(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),b=(0,s.useContext(m.E_).getPrefixCls)("scroll-number",n),v=(0,l.Z)((0,l.Z)({},u),{"data-show":f,style:i,className:g()(b,o,r),title:a}),x=t;if(t&&Number(t)%1==0){var h=String(t).split("");x=h.map(function(e,n){return s.createElement(w,{prefixCls:b,count:Number(t),value:e,key:h.length-n})})}return(i&&i.borderColor&&(v.style=(0,l.Z)((0,l.Z)({},i),{boxShadow:"0 0 0 1px ".concat(i.borderColor," inset")})),p)?(0,d.Tm)(p,function(e){return{className:g()("".concat(b,"-custom-component"),null==e?void 0:e.className,r)}}):s.createElement(void 0===c?"sup":c,v,x)},Z=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>n.indexOf(o)&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>n.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t},C=function(e){var n=e.prefixCls,t=e.scrollNumberPrefixCls,o=e.children,r=e.status,i=e.text,a=e.color,p=e.count,b=void 0===p?null:p,x=e.overflowCount,h=void 0===x?99:x,w=e.dot,_=e.size,C=void 0===_?"default":_,E=e.title,k=e.offset,P=e.style,j=e.className,N=e.showZero,S=void 0!==N&&N,O=Z(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),I=s.useContext(m.E_),R=I.getPrefixCls,M=I.direction,A=R("badge",n),z=b>h?"".concat(h,"+"):b,T="0"===z||0===z,D=(null!=r||null!=a)&&(null===b||T&&!S),K=void 0!==w&&w&&!T,L=K?"":z,B=(0,s.useMemo)(function(){return(null==L||""===L||T&&!S)&&!K},[L,T,S,K]),V=(0,s.useRef)(b);B||(V.current=b);var F=V.current,W=(0,s.useRef)(L);B||(W.current=L);var q=W.current,U=(0,s.useRef)(K);B||(U.current=K);var $=(0,s.useMemo)(function(){if(!k)return(0,l.Z)({},P);var e={marginTop:k[1]};return"rtl"===M?e.left=parseInt(k[0],10):e.right=-parseInt(k[0],10),(0,l.Z)((0,l.Z)({},e),P)},[M,k,P]),G=null!=E?E:"string"==typeof F||"number"==typeof F?F:void 0,H=B||!i?null:s.createElement("span",{className:"".concat(A,"-status-text")},i),Y=F&&"object"===(0,c.Z)(F)?(0,d.Tm)(F,function(e){return{style:(0,l.Z)((0,l.Z)({},$),e.style)}}):void 0,X=g()((0,f.Z)((0,f.Z)((0,f.Z)({},"".concat(A,"-status-dot"),D),"".concat(A,"-status-").concat(r),!!r),"".concat(A,"-status-").concat(a),v(a))),J={};a&&!v(a)&&(J.background=a);var Q=g()(A,(0,f.Z)((0,f.Z)((0,f.Z)({},"".concat(A,"-status"),D),"".concat(A,"-not-a-wrapper"),!o),"".concat(A,"-rtl"),"rtl"===M),j);if(!o&&D){var ee=$.color;return s.createElement("span",(0,l.Z)({},O,{className:Q,style:$}),s.createElement("span",{className:X,style:J}),i&&s.createElement("span",{style:{color:ee},className:"".concat(A,"-status-text")},i))}return s.createElement("span",(0,l.Z)({},O,{className:Q}),o,s.createElement(u.ZP,{visible:!B,motionName:"".concat(A,"-zoom"),motionAppear:!1,motionDeadline:1e3},function(e){var n=e.className,o=R("scroll-number",t),i=U.current,c=g()((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)({},"".concat(A,"-dot"),i),"".concat(A,"-count"),!i),"".concat(A,"-count-sm"),"small"===C),"".concat(A,"-multiple-words"),!i&&q&&q.toString().length>1),"".concat(A,"-status-").concat(r),!!r),"".concat(A,"-status-").concat(a),v(a))),p=(0,l.Z)({},$);return a&&!v(a)&&((p=p||{}).background=a),s.createElement(y,{prefixCls:o,show:!B,motionClassName:n,className:c,count:q,title:G,style:p,key:"scrollNumber"},Y)}),H)};C.Ribbon=function(e){var n=e.className,t=e.prefixCls,o=e.style,r=e.color,i=e.children,a=e.text,c=e.placement,p=s.useContext(m.E_),u=p.getPrefixCls,d=p.direction,b=u("ribbon",t),x=v(r),h=g()(b,"".concat(b,"-placement-").concat(void 0===c?"end":c),(0,f.Z)((0,f.Z)({},"".concat(b,"-rtl"),"rtl"===d),"".concat(b,"-color-").concat(r),x),n),w={},_={};return r&&!x&&(w.background=r,_.color=r),s.createElement("div",{className:"".concat(b,"-wrapper")},i,s.createElement("div",{className:h,style:(0,l.Z)((0,l.Z)({},w),o)},s.createElement("span",{className:"".concat(b,"-text")},a),s.createElement("div",{className:"".concat(b,"-corner"),style:_})))};var E=t(68214),k=t(50361),P=({className:e="",...n})=>s.createElement(i.Z,{className:e,component:o.a,...n}),j=()=>{let[e,n]=(0,s.useState)((0,a.Vf)()),{setPaymentPassword:t,userInfo:o,modalOptions:i,showAccountTipModal:f}=(0,r.ta)();return(0,s.useEffect)(()=>{var e;n(!!(null==(e=null==o?void 0:o.security_account)?void 0:e.has_set_payment_password))},[o]),{hasSetPaymentPassword:e,setPaymentPassword:t,showSetPaymentPasswordOrConfirm:n=>{var t,o,s,c;e?n():(null==(t=i.promptSettingConfig)?void 0:t.promptPaymentPasswordSettingWhenSign)===2||(null==(o=i.promptSettingConfig)?void 0:o.promptPaymentPasswordSettingWhenSign)===3?f({visible:!0,confirm:n}):((null==(s=i.promptSettingConfig)?void 0:s.promptPaymentPasswordSettingWhenSign)||(0,a.Rw)(null==(c=i.promptSettingConfig)?void 0:c.promptPaymentPasswordSettingWhenSign))&&!(0,r.d)(r.e.PN_OPEN_SET_PAYMENT_PASSWORD)?((0,r.c)(r.e.PN_OPEN_SET_PAYMENT_PASSWORD,"1"),f({visible:!0,confirm:n})):n()}}},N=`.info-sign {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 290px;
  height: 100%;
}
.info-sign .pending-warning-modal {
  top: 100px;
  display: block;
  margin: auto;
}
.info-sign .pending-warning-modal .ant-modal-body {
  padding: 18px;
}
.info-sign .pending-warning-modal .ant-modal-confirm-btns {
  display: none;
}
.info-sign .pending-warning-modal .content {
  margin-top: 26px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: var(--text-color);
}
.info-sign .pending-warning-modal .anticon-exclamation-circle {
  display: none;
}
.info-sign .pending-warning-modal .anticon-close {
  color: var(--secondary-text-color);
}
.info-sign .pending-warning-modal .footer-btns {
  column-gap: 18px;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
.info-sign .pending-warning-modal .footer-btns .ant-btn {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 47px;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  color: var(--background-color);
}
.info-sign .pending-warning-modal .footer-btns .ant-btn:first-child {
  color: var(--secondary-btn-color);
  background-color: var(--secondary-btn-background-color);
}
.info-sign .pending-warning-modal .footer-btns .ant-btn:hover,
.info-sign .pending-warning-modal .footer-btns .ant-btn:focus,
.info-sign .pending-warning-modal .footer-btns .ant-btn:active {
  color: var(--primary-btn-color);
  background-color: var(--primary-btn-background-color);
}
.info-sign .continue-btn:hover {
  color: var(--secondary-btn-color) !important;
  background-color: var(--secondary-btn-background-color) !important;
}
.info-sign .has-payment-password {
  z-index: 100;
  top: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: var(--set-payment-password-bar-height);
  padding: 0 16px;
  padding-right: 52px;
  background-color: var(--tips-background-color);
  opacity: 1;
}
.info-sign .has-payment-password .has-payment-password-icon {
  width: 18px;
  height: 18px;
  border: 1px solid #f7af5d;
  border-radius: 50%;
  overflow: hidden;
  background-image: var(--icon-warning);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-color: white;
}
.info-sign .has-payment-password .has-payment-password-tip {
  flex: 1;
  margin: 0 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  color: var(--text-color);
}
@media screen and (max-width: 350px) {
  .info-sign .has-payment-password .has-payment-password-tip {
    letter-spacing: -1px;
  }
}
.info-sign .has-payment-password .has-payment-password-set {
  min-width: 44px;
  height: 22px;
  padding: 0 8px;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  cursor: pointer;
}
.info-sign .has-payment-password .has-payment-password-set:hover {
  opacity: var(--hover-opacity);
}
@media (max-width: 600px) {
  .info-sign .has-payment-password {
    padding-right: 16px;
    margin-top: 15px;
  }
  .info-sign .has-payment-password[data-telegram='true'] {
    padding-right: 52px !important;
    margin-top: 0 !important;
  }
}
.info-sign .ant-tabs {
  width: calc(100% - 36px);
  min-width: 230px;
}
.info-sign .ant-tabs-nav .ant-tabs-tab {
  padding-bottom: 4px;
  color: var(--secondary-text-color);
}
.info-sign .ant-tabs-nav .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: var(--text-color);
}
.info-sign .ant-tabs-nav::before {
  display: none;
}
.info-sign .ant-tabs-nav .ant-tabs-nav-wrap .ant-tabs-ink-bar {
  background: var(--text-color);
}
.info-sign .scroll-part {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 10px;
  margin: 0;
  overflow: auto;
}
.info-sign .scroll-part .top-menu-list {
  position: absolute;
  z-index: 99;
  top: 12px;
  left: 15px;
  column-gap: 5px;
  display: flex;
  justify-content: flex-start;
}
.info-sign .scroll-part .top-menu-list .item {
  cursor: pointer;
}
.info-sign .scroll-part .top-menu-list .item .anticon {
  font-size: 26px;
}
.info-sign .scroll-part .top-menu-list .item .ant-badge-dot {
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border: none;
  box-shadow: none;
}
.info-sign .scroll-part .menu-entry {
  position: absolute;
  z-index: 99;
  top: 16px;
  left: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.info-sign .scroll-part .menu-entry .menu-icon {
  cursor: pointer;
}
.info-sign .scroll-part .menu-entry .wallet-entry {
  margin-left: 8px;
  font-size: 28px;
}
.info-sign .scroll-part .menu-entry .ant-popover {
  padding: 0;
}
.info-sign .scroll-part .menu-entry .ant-popover .ant-popover-arrow {
  display: none;
}
.info-sign .scroll-part .menu-entry .ant-popover .ant-popover-inner {
  border-radius: var(--primary-btn-border-radius);
  background: var(--modal-background-color);
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list {
  display: flex;
  flex-direction: column;
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list .item {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 2;
  white-space: nowrap;
  cursor: pointer;
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list .item .ant-badge {
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list .item .ant-badge .ant-badge-dot {
  top: -1px;
  right: -4px;
}
.info-sign .scroll-part .menu-entry .ant-badge {
  column-gap: 8px;
  display: flex;
  align-items: center;
}
.info-sign .scroll-part .menu-entry .ant-badge .ant-badge-dot {
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border: none;
  box-shadow: none;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content {
  padding: 0;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list {
  padding-top: 6px;
  padding-bottom: 6px;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list .item {
  height: 45px;
  padding: 0 17px;
  border-bottom: 1px solid var(--keyword-border-color);
  font-weight: 500;
  font-size: 14px;
  line-height: 45px;
  color: #000;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list .item:last-child {
  border-bottom: none;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list .item .anticon {
  font-size: 26px;
  color: var(--text-color);
}
.info-sign .scroll-part .info-title {
  height: 19px;
  padding-top: 0;
  margin-top: 10px;
  margin-bottom: 2px;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: var(--text-color);
}
.info-sign .scroll-part .info-title img {
  width: 13px;
  height: 13px;
  margin-right: 4px;
  margin-bottom: 3px;
}
.info-sign .scroll-part .info-address {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 23px;
  padding: 0 5px 0 8px;
  margin-top: 5px;
  border-radius: var(--primary-btn-border-radius);
  font-size: 12px;
  line-height: 23px;
  color: var(--secondary-text-color);
  background: var(--tag-background-color);
  cursor: pointer;
}
.info-sign .scroll-part .info-address .copy-icon {
  position: relative;
  width: 14px;
  height: 100%;
  margin-left: 5px;
}
.info-sign .scroll-part .info-address .copy-icon .anticon {
  position: absolute;
  top: 5px;
}
.info-sign .scroll-part .info-request {
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  max-height: 20px;
  padding-top: 0;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: var(--text-color);
  gap: 6px;
}
.info-sign .scroll-part .info-request .aa-icon {
  display: flex;
  align-items: center;
}
.info-sign .scroll-part .info-request .aa-icon .ant-image {
  width: 22px;
  height: 22px;
}
.info-sign .scroll-part .info-request .aa-icon .ant-image img {
  position: absolute;
  left: 0;
  top: 0;
}
.info-sign .scroll-part .info-request .aa-tag {
  padding: 0 4px;
  margin-right: 5px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 12px;
  color: var(--background-color);
  background-color: var(--text-color);
}
.info-sign .scroll-part .info-des {
  max-width: 300px;
  margin: 9px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .apart-line {
  display: none;
  width: 100%;
  border-top: 1px solid var(--card-unclickable-border-color);
}
.info-sign .scroll-part .balance-change {
  width: 100%;
  min-width: 230px;
  padding: 15px 12px;
  border: 1px solid var(--card-unclickable-border-color);
  border-width: 1px;
  border-style: solid;
  border-radius: var(--card-border-radius);
  background: var(--card-unclickable-background-color);
}
.info-sign .scroll-part .balance-change .title {
  padding-bottom: 1px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .balance-change .change-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info-sign .scroll-part .balance-change .change-body .change-title {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .balance-change .change-body .change-title .change-val {
  font-weight: 500;
  font-size: 14px;
  color: var(--green-color);
}
.info-sign .scroll-part .balance-change .change-body .mt20 {
  margin-top: 20px;
}
.info-sign .scroll-part .balance-change .change-body .message-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--text-color);
}
.info-sign .scroll-part .from-to {
  width: 100%;
  min-width: 230px;
  padding: 20px 12px;
  margin-top: 15px;
  border: none;
  border-radius: var(--card-border-radius);
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
  background: var(--card-unclickable-background-color);
}
.info-sign .scroll-part .from-to .address-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-sign .scroll-part .from-to .mt10 {
  margin-top: 10px;
}
.info-sign .scroll-part .no-gas-fee {
  width: 100%;
  min-width: 230px;
  padding: 20px 12px;
  margin-top: 15px;
  border-radius: var(--card-border-radius);
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
  background: rgba(234, 67, 53, 0.09);
}
.info-sign .scroll-part .no-gas-fee img {
  width: 18.5px;
  height: 18.5px;
  margin-top: 3px;
  margin-right: 10px;
}
.info-sign .scroll-part .no-gas-fee .no-title {
  font-weight: 500;
}
.info-sign .scroll-part .no-gas-fee .no-warning {
  display: flex;
  padding-bottom: 9px;
  margin-top: 10px;
  border-bottom: 1px solid var(--card-divider-color);
  line-height: 15px;
}
.info-sign .scroll-part .no-gas-fee .data-title {
  margin-top: 15px;
  font-weight: bold;
}
.info-sign .scroll-part .no-gas-fee .data-item {
  margin-top: 10px;
  line-height: 14px;
}
.info-sign .scroll-part .net-fee {
  width: 100%;
  min-width: 230px;
  padding: 15px 12px;
  margin-top: 15px;
  border: 1px solid var(--card-unclickable-border-color);
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
  cursor: pointer;
}
.info-sign .scroll-part .net-fee .title {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .title .fee-val {
  font-weight: 400;
  font-size: 16px;
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .evm-fee {
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-title {
  font-weight: 500;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-title span {
  font-weight: 500;
  font-size: 14px;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row img {
  width: 9.19px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .approximately {
  font-weight: 400;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-standard {
  width: 70px;
  margin-right: 10px;
  font-weight: normal;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-time {
  width: 70px;
  margin-right: 19.19px;
  font-weight: 500;
  color: var(--green-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .row-right {
  display: flex;
  align-items: center;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .row-right .right-icon {
  width: 9.19px;
  margin-left: 15px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-right {
  display: flex;
  text-align: right;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-right .arrow-right-icon {
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-right .arrow-right-icon svg {
  width: 13px;
  height: 13px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .right-time {
  margin-right: 55px;
  font-weight: bold;
  font-size: 12px;
  color: var(--green-color);
}
.info-sign .scroll-part .total {
  width: 100%;
  min-width: 230px;
  padding: 15px 12px;
  margin-top: 15px;
  border: 1px solid var(--card-unclickable-border-color);
  border-radius: var(--card-border-radius);
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .total .total-title {
  font-weight: bold;
}
.info-sign .scroll-part .total .mt8 {
  margin-top: 8px;
}
.info-sign .scroll-part .total .total-content span {
  font-weight: 400;
  word-break: break-all;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .show-btn {
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
}
.info-sign .scroll-part .program-details {
  margin-top: 30px;
  font-weight: 500;
  text-align: center;
  color: var(--text-color);
}
.info-sign .scroll-part .inner-instruction {
  width: 100%;
  min-width: 230px;
  margin-bottom: 15px;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item {
  margin-top: 0;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item {
  padding: 13px 11px;
  border: none;
  border-width: 1px;
  border-style: solid;
  border-color: var(--card-unclickable-border-color) !important;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color) !important;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-0 {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  word-break: break-all;
  color: var(--text-color);
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .mt10 {
  margin-top: 10px;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .mt15 {
  margin-top: 15px;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-1 {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: var(--text-color);
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-1 span {
  max-width: 220px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: right;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-1 .data {
  max-width: calc(85 * var(--vw));
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: left;
  word-wrap: break-word;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message {
  width: calc(100% - 36px);
  min-width: 230px;
  padding: 0;
  margin-top: 18px;
  border: none;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
}
.info-sign .scroll-part .sign-message .s-row {
  display: flex;
  margin-top: 6px;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 1.3;
  color: var(--text-color);
}
.info-sign .scroll-part .sign-message .s-row[data-index='0'] ::after {
  display: none;
}
.info-sign .scroll-part .sign-message .s-row [data-type='title'],
.info-sign .scroll-part .sign-message .s-row [data-type='index'],
.info-sign .scroll-part .sign-message .s-row .label[data-type='title'],
.info-sign .scroll-part .sign-message .s-row .title[data-type='title'],
.info-sign .scroll-part .sign-message .s-row .value[data-type='index'] {
  position: relative;
  font-weight: bold;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .sign-message .s-row .label {
  font-weight: 400;
  font-size: 14px;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message .s-row .value {
  flex: 1;
  overflow: hidden;
  font-weight: 400;
  font-size: 14px;
  word-break: break-all;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message .message {
  position: relative;
  max-height: calc(var(--doc-height) - 300px);
  padding: 8px 12px;
  overflow: auto;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  word-wrap: break-word;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message .message .personal-message {
  position: relative;
}
.info-sign .scroll-part .sign-message .message pre {
  padding-bottom: 2px;
}
.info-sign .scroll-part .sign-message .message.no-password-tip {
  max-height: calc(var(--doc-height) - 300px - var(--set-payment-password-bar-height) - var(--risk-bar-height)) !important;
}
.info-sign .btn-box {
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 290px;
  height: var(--sign-bottom-menu-height);
  background: var(--theme-background-color);
  box-shadow: 0 -2px 3px 1px rgba(0, 0, 0, 0.08);
}
.info-sign .btn-box > div {
  display: flex;
  width: calc(100% - 36px);
  gap: 18px;
}
.info-sign .btn-box .footer-box {
  margin-top: 10px;
}
.info-sign .btn-box .btn-cancel {
  flex: 1;
  max-width: calc(300 * var(--vw));
  height: 47px;
  padding: 0;
  margin-top: 10px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  color: var(--secondary-btn-color);
  background: var(--secondary-btn-background-color);
}
.info-sign .btn-box .btn-cancel:hover {
  opacity: var(--hover-opacity);
}
.info-sign .btn-box .btn-cancel span {
  font-weight: 500;
}
.info-sign .btn-box .btn-approve {
  flex: 1;
  max-width: calc(300 * var(--vw));
  height: 47px;
  padding: 0;
  margin-top: 10px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: var(--primary-btn-font-size);
  text-align: center;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
.info-sign .btn-box .btn-approve:hover {
  opacity: var(--hover-opacity);
}
.info-sign .btn-box .btn-approve img {
  width: 12.75px;
  height: 18.29px;
  margin-right: 12px;
}
.info-sign.info-sign-erc20_transfer .fee-row,
.info-sign.info-sign-erc1155_transfer .fee-row,
.info-sign.info-sign-erc20_approve .fee-row,
.info-sign.info-sign-native_transfer .fee-row,
.info-sign.info-sign-erc721_transfer .fee-row,
.info-sign.info-sign-seaport_cancel_order .fee-row,
.info-sign.info-sign-seaport_nft_listing .fee-row,
.info-sign.info-sign-seaport_fulfill_order .fee-row {
  align-items: center;
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row {
  flex-wrap: wrap;
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .left,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .left,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .left,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .left {
  margin-bottom: 10px;
  font-weight: 500;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .right,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .right,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .right,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .right {
  color: var(--secondary-text-color);
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .gas-warning {
  display: flex;
  align-items: center;
  line-height: 1.3;
  color: var(--secondary-text-color);
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .gas-warning span {
  line-height: 1.4;
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .gas-warning img {
  flex: 1;
  align-self: flex-start;
  width: 19px;
  height: 19px;
  margin-top: 4px;
  margin-right: 10px;
}
.info-sign.info-sign-erc20_transfer .info-request,
.info-sign.info-sign-erc1155_transfer .info-request,
.info-sign.info-sign-erc20_approve .info-request,
.info-sign.info-sign-native_transfer .info-request,
.info-sign.info-sign-erc721_transfer .info-request,
.info-sign.info-sign-seaport_cancel_order .info-request,
.info-sign.info-sign-seaport_nft_listing .info-request,
.info-sign.info-sign-seaport_fulfill_order .info-request {
  display: none;
}
.info-sign.info-sign-erc20_transfer .info-title,
.info-sign.info-sign-erc1155_transfer .info-title,
.info-sign.info-sign-erc20_approve .info-title,
.info-sign.info-sign-native_transfer .info-title,
.info-sign.info-sign-erc721_transfer .info-title,
.info-sign.info-sign-seaport_cancel_order .info-title,
.info-sign.info-sign-seaport_nft_listing .info-title,
.info-sign.info-sign-seaport_fulfill_order .info-title {
  height: 20px;
  max-height: 20px;
  line-height: 20px;
  padding: 0;
  margin: 0;
}
.info-sign.info-sign-erc20_transfer .apart-line,
.info-sign.info-sign-erc1155_transfer .apart-line,
.info-sign.info-sign-erc20_approve .apart-line,
.info-sign.info-sign-native_transfer .apart-line,
.info-sign.info-sign-erc721_transfer .apart-line,
.info-sign.info-sign-seaport_cancel_order .apart-line,
.info-sign.info-sign-seaport_nft_listing .apart-line,
.info-sign.info-sign-seaport_fulfill_order .apart-line {
  display: none;
}
.info-sign.info-sign-erc20_transfer .info-address,
.info-sign.info-sign-erc1155_transfer .info-address,
.info-sign.info-sign-erc20_approve .info-address,
.info-sign.info-sign-native_transfer .info-address,
.info-sign.info-sign-erc721_transfer .info-address,
.info-sign.info-sign-seaport_cancel_order .info-address,
.info-sign.info-sign-seaport_nft_listing .info-address,
.info-sign.info-sign-seaport_fulfill_order .info-address {
  margin-top: 10px;
  margin-bottom: 10px;
}
.info-sign.info-sign-erc20_transfer .info-des,
.info-sign.info-sign-erc1155_transfer .info-des,
.info-sign.info-sign-erc20_approve .info-des,
.info-sign.info-sign-native_transfer .info-des,
.info-sign.info-sign-erc721_transfer .info-des,
.info-sign.info-sign-seaport_cancel_order .info-des,
.info-sign.info-sign-seaport_nft_listing .info-des,
.info-sign.info-sign-seaport_fulfill_order .info-des {
  display: none;
}
.info-sign.info-sign-erc20_transfer .transfer-content,
.info-sign.info-sign-erc1155_transfer .transfer-content,
.info-sign.info-sign-erc20_approve .transfer-content,
.info-sign.info-sign-native_transfer .transfer-content,
.info-sign.info-sign-erc721_transfer .transfer-content,
.info-sign.info-sign-seaport_cancel_order .transfer-content,
.info-sign.info-sign-seaport_nft_listing .transfer-content,
.info-sign.info-sign-seaport_fulfill_order .transfer-content {
  width: calc(100% - 36px);
  min-width: 230px;
  margin: auto;
  margin-top: 18px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-erc1155_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-erc20_approve .transfer-content .mg-bottom-15,
.info-sign.info-sign-native_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-erc721_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-seaport_cancel_order .transfer-content .mg-bottom-15,
.info-sign.info-sign-seaport_nft_listing .transfer-content .mg-bottom-15,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .mg-bottom-15 {
  margin-bottom: 15px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-erc1155_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-erc20_approve .transfer-content .flex-sp-row,
.info-sign.info-sign-native_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-erc721_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-seaport_cancel_order .transfer-content .flex-sp-row,
.info-sign.info-sign-seaport_nft_listing .transfer-content .flex-sp-row,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .flex-sp-row {
  display: flex;
  justify-content: space-between;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box,
.info-sign.info-sign-erc20_approve .transfer-content .less-box,
.info-sign.info-sign-native_transfer .transfer-content .less-box,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box {
  padding: 13px;
  padding-bottom: 3px;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .pn-row,
.info-sign.info-sign-native_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .pn-row,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .pn-row,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .pn-row {
  width: 100%;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item {
  padding-top: 14px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--card-divider-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item:last-child {
  border-bottom: none;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row1 .left {
  font-weight: 800;
  font-size: 18px;
  line-height: 19px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row1 .right {
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 22px;
  line-height: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon {
  width: 32px;
  min-width: 32px;
  height: 32px;
  margin-right: 6px;
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount {
  line-height: 1.2;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: var(--accent-color);
  cursor: pointer;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon {
  width: 12px;
  height: 12px;
  margin-left: 6px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3 {
  margin-top: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 {
  align-items: flex-start;
  margin-top: 20px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .left {
  display: flex;
  align-items: center;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon {
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 100%;
  overflow: hidden;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  overflow-x: auto;
  overflow-y: hidden;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: var(--secondary-text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  height: 32px;
  line-height: 32px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val {
  margin-right: 4px;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  white-space: nowrap;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol {
  position: relative;
  margin-left: 2px;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  white-space: nowrap;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd {
  height: 32px;
  line-height: 32px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 {
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .left {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .left img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .right {
  display: -webkit-box;
  flex: 1;
  overflow: hidden;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  text-overflow: ellipsis;
  color: var(--text-color);
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .right .name {
  line-height: 1.2;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row4 {
  margin-top: 10px;
  font-weight: 500;
  font-size: 14px;
  color: var(--accent-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row5 {
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row6 {
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2-0 {
  padding-top: 24px;
  padding-bottom: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 {
  padding-top: 24px;
  padding-bottom: 22px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .flex-sp-row {
  height: 44px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .right .pn-row1 {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .right .pn-row2 {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .right {
  text-align: right;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .pn-row2 {
  margin-top: 10px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .middle {
  position: relative;
  width: 34px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .middle .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 13px;
  transform: translate(-50%, -50%);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item5 {
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item5 .price-sub {
  position: relative;
  padding-left: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item5 .price-sub::before {
  position: absolute;
  top: 50%;
  left: 4px;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background: var(--accent-color);
  transform: translateY(-50%);
  content: '';
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content,
.info-sign.info-sign-native_transfer .transfer-content .fold-content,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 13px;
  line-height: 30px;
  color: var(--accent-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content img,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content img,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content img,
.info-sign.info-sign-native_transfer .transfer-content .fold-content img,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content img,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content img,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content img,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content img {
  width: 10px;
  height: 6px;
  margin-left: 5px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .wrap > div {
  display: flex;
  align-items: center;
  gap: 6px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .arrow-icon {
  color: var(--accent-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .arrow-icon svg {
  width: 11px;
  height: 11px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .fold,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .fold,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .fold,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .fold {
  cursor: pointer;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .unfold,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .unfold,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .unfold,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .unfold {
  cursor: pointer;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .unfold .arrow-icon {
  transform: rotate(180deg);
}
.edit-approve-amount-modal .ant-modal-content {
  overflow: hidden;
  background-color: var(--modal-background-color) !important;
}
.edit-approve-amount-modal .ant-modal-header {
  border: none;
}
.edit-approve-amount-modal .ant-modal-header .ant-modal-title {
  text-align: center;
  color: var(--text-color);
}
.edit-approve-amount-modal .ant-modal-body {
  padding-bottom: 16px;
}
.edit-approve-amount-modal .ant-form {
  display: flex;
  align-items: flex-start;
  width: 100%;
}
.edit-approve-amount-modal .ant-form .ant-row {
  flex: 1;
}
.edit-approve-amount-modal .ant-form .ant-form-item-control-input-content .ant-input {
  height: 40px;
  border: 1px solid var(--input-border-color);
  color: var(--text-color);
  background: var(--input-background-color-3);
}
.edit-approve-amount-modal .ant-form .ant-form-item-control-input-content .ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input,
.edit-approve-amount-modal .ant-form .ant-form-item-control-input-content .ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input:hover {
  background: var(--input-background-color-3);
}
.edit-approve-amount-modal .ant-form .icon {
  width: 30px;
  min-width: 30px;
  height: 30px;
  margin: 0 8px;
  margin-top: 5px;
}
.edit-approve-amount-modal .ant-form .icon img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
}
.edit-approve-amount-modal .ant-form .symbol {
  font-weight: 500;
  font-size: 14px;
  line-height: 40px;
  color: var(--text-color);
}
.edit-approve-amount-modal .ant-modal-footer {
  display: flex !important;
  justify-content: center;
  padding-bottom: 30px;
  border: none;
}
.edit-approve-amount-modal .ant-modal-footer .ant-btn-default {
  display: none;
}
.edit-approve-amount-modal .ant-modal-footer .ant-btn-primary {
  width: 100%;
  max-width: 300px;
  height: 47px;
  margin-left: 0;
  border-radius: var(--primary-btn-border-radius);
  font-size: var(--primary-btn-font-size);
  line-height: 22px;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
`,S=e=>{var n;let{userInfo:t}=e,i=(0,r.sa)(),{modalOptions:a}=(0,r.ta)(),f=(0,s.useMemo)(()=>{let e=`${a.appId}_${null==t?void 0:t.uuid}`;return`account_security_${E(e)}`},[a.appId,null==t?void 0:t.uuid]),[c,l]=(0,s.useState)({account:{name:"Account & Security",display:!0,badge:!1}});(0,s.useEffect)(()=>{if((null==t?void 0:t.security_account)&&f&&!localStorage.getItem(f)){let{has_set_master_password:e,has_set_payment_password:n}=(null==t?void 0:t.security_account)||{};e&&n?c.account.badge=!1:c.account.badge=!0}else c.account.badge=!1;l(k(c))},[null==t?void 0:t.security_account,f]);let p=s.createElement("div",{className:"item",onClick:()=>{c.account.badge=!1,l(k(c)),i("/account/security"),localStorage.setItem(f,"true")}},s.createElement(C,{dot:!!c.account.badge},s.createElement(o.b,{className:"wallet-icon",name:"security_icon"})));return s.createElement("div",{className:"top-menu-list"},!!(null!=(n=null==c?void 0:c.account)&&n.display)&&p)}},19279:function(e,n,t){"use strict";t.d(n,{a:function(){return a}});var o=t(63728),r=t(86727),i=t(68376),s=t(54117),a=()=>{let{authCoreModal:e}=(0,r.qa)(),n=(0,o.a)();return{errorHandle:function(t){var o;let r=null!=(o=t.error_code)?o:t.code;if(r&&"number"==typeof r){if(!(r===i.MS.InvalidCode||r===i.MS.ResendCode||r===i.MS.SecurityAccountFrozen||r===i.MS.WrongPaymentPassword)){let n=function(e){var n,t,o;if(!e||!e.error_code)return null==e?void 0:e.message;{let r=null==(t=null==(n=null==window?void 0:window.particleI18n)?void 0:n.t)?void 0:t.call(n,`error.server_${e.error_code}`);return r&&r.startsWith("error.server_")&&(r=(r=(null==e?void 0:e.extra)&&Array.isArray(null==e?void 0:e.extra)&&(null==e?void 0:e.extra.length)?null==e?void 0:e.extra[0]:null!=(o=null==e?void 0:e.extra)?o:e.message).charAt(0).toUpperCase()+r.slice(1)),r}}(t);n&&s.Z.error({title:n,wrapClassName:"auth-core-modal-error",getContainer:()=>e.rootBody})}}else if("ECONNABORTED"===t.code)t.message?n.error(t.message):n.error("Network Error");else switch(t.status){case 401:case 403:case 404:case 500:n.error("Http Error: "+t.status);break;default:t.message&&"string"==typeof t.message&&n.error(t.message)}}}}}}]);