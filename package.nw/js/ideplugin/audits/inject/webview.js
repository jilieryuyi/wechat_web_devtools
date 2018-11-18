!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=49)}({0:function(e,t,n){const o=new(0,n(5).EventEmitter);o.setMaxListeners(100),e.exports=o},1:function(e,t,n){const o=n(4),r=n(0);e.exports.$=function(e,t){return"string"==typeof t&&(t=document.querySelector(t)),(t||document).querySelector(e)},e.exports.$$=function(e){return document.querySelectorAll(e)},e.exports.show=function(e){"string"==typeof e&&(e=document.querySelector(e)),e.style.display=""},e.exports.hide=function(e){"string"==typeof e&&(e=document.querySelector(e)),e.style.display="none"},e.exports.sprintf=function(e,t){for(let n=0;n<t.length;n++)e=e.replace(/%s/,t[n]);return e},e.exports.reportBehavior=function(e){o.invoke("REPORT",{data:JSON.stringify(e)})},e.exports.log=function(){const e=Array.prototype.slice.call(arguments);e.unshift("color: #ea6f5a;"),e.unshift("%c[Audit]"),console.log.apply(console,e)},e.exports.formatSize=function(e){const t=["B","K","M","G"];let n;for(;(n=t.shift())&&e>1024;)e/=1024;return("B"===n?e:e.toFixed(2))+n},e.exports.hash=function(e){let t=5381,n=e.length;for(;n;)t=33*t^e.charCodeAt(--n);return t>>>0},e.exports.byteCount=function(e){return encodeURI(e).split(/%..|./).length-1},e.exports.unique=function(e){var t=[];for(var n in e)-1===t.indexOf(e[n])&&t.push(e[n]);return t},e.exports.getType=function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},e.exports.compareVersion=function(e,t){e=e.split("."),t=t.split(".");const n=Math.max(e.length,t.length);for(;e.length<n;)e.push("0");for(;t.length<n;)t.push("0");for(let o=0;o<n;o++){const n=parseInt(e[o]),r=parseInt(t[o]);if(n>r)return 1;if(n<r)return-1}return 0},o.on("RESP_FS_READ_FILE",e=>{r.emit("_read-file",e.data)}),e.exports.readFile=function(e,t){r.on("_read-file",function n(o){o.path===e&&("function"==typeof t&&t({content:o.fileData,path:e}),r.removeListener("_read-file",n))}),o.invoke("FS_READ_FILE",{path:e})},e.exports.status="running"},3:function(e,t,n){const o=n(0);n(1);var r=function(){const e=window.navigator||window.__global.navigator,t=window.WebSocket||window.__global.WebSocket;var n=e.userAgent.match(/port\/(\d*)/),r=null,i=`ws://127.0.0.1:${n?parseInt(n[1]):9974}`,s=null,c=[],a=[];const l="GET_MESSAGE_TOKEN";function u(e){r&&r.readyState===t.OPEN?r.send(JSON.stringify(e)):a.push(e)}const f=e=>{c.push(e)};return{connect:function e(n){s=n||s;var f=window.prompt?prompt(l):__global.prompt(l);(r=new t(i,`${s}#${f}#`)).onopen=function(e){let t=[].concat(a);a=[],t.forEach(e=>{u(e)})},r.onclose=function(t){r=null,setTimeout(()=>{e(n)})},r.onmessage=function(e){try{let t=JSON.parse(e.data);!function(e){c.forEach(t=>{try{t(e)}catch(e){console.error(e)}})}(t),function(e){if("TRANSFER"===e.command&&e.data){window.navigator.userAgent;const t=e.data.eventName;o.emit(t,e.data.data)}}(t)}catch(e){console.error("ws.onmessage cb error",e)}}},send:u,registerCallback:f,getWs:()=>r,pub:function(e,t={}){u({command:"TRANSFER",data:{eventName:e,data:t,from:window.navigator.userAgent.indexOf("appservice")>-1?"appservice":"webview"}})},sub:function(e,t){f(n=>{"TRANSFER"===n.command&&(n.data?n.data.eventName===e&&t(n.data):console.error("messager sub error: no data field."))})}}}();e.exports=r},4:function(e,t){var n=[],o={};window.addEventListener("wechatideReady",()=>{n.forEach(e=>{window.wechatide.invoke(e.command,e.args,e.callback)}),n=[];for(const e in o)window.wechatide.on(e,o[e])});e.exports={invoke:(e,t,o)=>{window.wechatide?window.wechatide.invoke(e,t,o):n.push({command:e,args:t,callback:o})},on:(e,t)=>{const n=function(...e){try{t.apply(this,e)}catch(e){console.error(e)}};window.wechatide?window.wechatide.on(e,n):o[e]=n}}},49:function(e,t,n){const o=n(3),r=n(50),i=navigator.userAgent.match(/webview\/(\d*)/);parseInt(i[1]);function s(){r.init()}o.connect("DEVTOOLS_EXPERIENCE"),"complete"===document.readyState?s():window.addEventListener("load",s)},5:function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function r(e){return"object"==typeof e&&null!==e}function i(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,s,c,a,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||r(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var u=new Error('Uncaught, unspecified "error" event. ('+t+")");throw u.context=t,u}if(i(n=this._events[e]))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:c=Array.prototype.slice.call(arguments,1),n.apply(this,c)}else if(r(n))for(c=Array.prototype.slice.call(arguments,1),s=(l=n.slice()).length,a=0;a<s;a++)l[a].apply(this,c);return!0},n.prototype.addListener=function(e,t){var s;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?r(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,r(this._events[e])&&!this._events[e].warned&&(s=i(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&s>0&&this._events[e].length>s&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){if(!o(t))throw TypeError("listener must be a function");var n=!1;function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},n.prototype.removeListener=function(e,t){var n,i,s,c;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(s=(n=this._events[e]).length,i=-1,n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(r(n)){for(c=s;c-- >0;)if(n[c]===t||n[c].listener&&n[c].listener===t){i=c;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(o(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},50:function(e,t,n){const o=n(3),r=n(0),i=n(1),s=Array.prototype.slice,c={};let a=null,l=null;const u=Object.keys,f=["surroundThirdByTryCatch","slowReport","speedReport","reportKeyValue","reportIDKey"];function d(){o.pub("all-webview-image",{imgsInfo:c})}function p(e,t,n,o){let r=!1;if(c[e]){const n=c[e][0];t.width*t.height>n.width*n.height&&(c[e][0]={left:t.left,top:t.top,width:t.width,height:t.height},r=!0)}else c[e]=[{left:t.left,top:t.top,width:t.width,height:t.height},n,o,window.__route__],r=!0;r&&(clearTimeout(l),l=setTimeout(d,300))}Object.keys=function(e){const t=u(e);for(let e=0;e<f.length;e++){let n=f[e];if(-1===t.indexOf(n))return t}const n=Array.prototype.forEach;return Array.prototype.forEach=function(e){const t=Object.defineProperty;Object.defineProperty=function(e,n,o){o.configurable=!0,t(e,n,o)},n.call(this,e),Object.defineProperty=t,Array.prototype.forEach=n},Object.keys=u,u(e)},r.on("stop-audit",function(){i.status="stopped"}),document.addEventListener("generateFuncReady",function(){}),document.addEventListener("pageReRender",function(){"running"===i.status&&(clearTimeout(a),a=setTimeout(function(){!function(){const e=document.querySelectorAll("wx-image")||[],t=document.querySelectorAll("wx-cover-image")||[];s.call(e).concat(s.call(t)).forEach(e=>{const t=e.getAttribute("src"),n=e.tagName.toLowerCase();if(!t||e.__resize_observer__)return;if("wx-image"===n&&e.firstElementChild){if(-1===e.firstElementChild.style.backgroundImage.indexOf(t))return}else if("wx-cover-image"===n){const n=e.querySelector("img");if(!n||-1===n.src.indexOf(t))return}let o=e.__resize_observer__=new ResizeObserver(e=>{const n=e[0],r=n.target;if(!document.body.contains(n.target))return o.unobserve(r),void(o=null);const i=n.contentRect;if(r.__wxElement&&r.__wxElement.loaded)p(t,i,r.__wxElement.width,r.__wxElement.height);else{const e=new Image;e.onload=function(){p(t,i,this.width,this.height)},e.src=t}});o.observe(e)})}()},100))}),e.exports.init=function(){n(51).init(),n(52).init(),n(53).init(),n(54).init(),n(55).init(),n(56).init(),n(58).init()}},51:function(e,t,n){const o=n(3),r=n(1);function i(){const e=[];let t=[];try{["ops_set","ops_cached"].forEach(e=>{for(let n in __WXML_GLOBAL__[e])"array"===r.getType(__WXML_GLOBAL__[e][n])&&(t=t.concat(__WXML_GLOBAL__[e][n]))})}catch(e){0}!function e(t,n){for(let o=0,i=t.length;o<i;o++){let i=t[o];"string"==typeof i&&-1===n.indexOf(i)?/^[a-zA-Z\$_][a-zA-Z\d_]*$/.test(i)&&n.push(i):"array"===r.getType(i)&&e(i,n)}}(t,e),function(e){o.pub("set-data-no-binding",{vars:e})}(e)}document.addEventListener("generateFuncReady",i),document.addEventListener("pageReRender",i),e.exports.init=function(){}},52:function(e,t,n){const o=n(3),r=n(1);let i=[];document.addEventListener("generateFuncReady",function(){const e=exparser.Event.addListenerToElement;exparser.Event.addListenerToElement=function(t,n,o,s){e(t,n,o,s),"running"===r.status&&["tap","longpress","longtap"].indexOf(n)>-1&&i.push(t)}}),document.addEventListener("pageReRender",function(){"running"===r.status&&(i.forEach(e=>{const t=e.$$.getBoundingClientRect(),n=getComputedStyle(e.$$),r=parseFloat(n.paddingLeft)+t.width+parseFloat(n.paddingRight),i=parseFloat(n.paddingTop)+t.height+parseFloat(n.paddingBottom);if(t.width>1&&r<20||t.height>1&&i<20){let t=e.is;e.$$.id&&(t+="#"+e.$$.id),e.$$.className&&(t+="."+e.$$.className.replace(" ",".")),function(e,t){o.pub("small-response-area",{identifier:e,rect:t,page:window.__route__})}(t,{width:r,height:i})}}),i=[])}),e.exports.init=function(){}},53:function(e,t,n){const o=n(3),r=n(1),i=500,s=Object.defineProperties;function c(){const e=Reporter.speedReport;s(Reporter,{speedReport:{value:function(t){if(e(t),"running"===r.status&&("firstRenderTime"===t.key||"reRenderTime"===t.key)){const e=t.timeMark.endTime-t.timeMark.startTime;if(e<i)return;!function(e,t){o.pub("render-long-time",{cost:e,type:t,page:window.__route__})}(e,t.key)}},configurable:!0}})}e.exports.init=function(){c()}},54:function(e,t,n){const o=n(3),r=n(0),i=n(1);let s=[],c=[],a=[],l=[],u=[],f=[],d=[],p=[],h=[],g=[];function m(e){if(null===e.match(/(wxcs_fileinfo:=?)(.*?)\d/))return;let t=e.substring(0,e.indexOf("{")).trim(),n=e,o=e.match(/wxcs_style_(\S*)/g);null!==o&&o.forEach((e,t)=>{let o=new RegExp(`${e.substring(11)}(.*?); ;`);n=n.replace(o,"")}),n=n.replace(/;wxcs_originclass(.*?)(?=})/g,"").replace(/wxcs_style_/g,"");let r=i.byteCount(n),s=e.match(/(wxcs_fileinfo:=?)(.*?)\d/)[2].trim().substr(1),c=l.indexOf(s);if(c>-1){let e=f[c].indexOf(t);e>-1?d[c][e]+=r:(f[c].push(t),d[c].push(r)),u[c]+=r}else{l.push(s),u.push(r),p.push(0);var a=[t],h=[r];f.push(a),d[d.length]=h}}function _(e){let t=function(e){if(window.getMatchedCSSRules)return window.getMatchedCSSRules(e);const t=document.styleSheets,n=[];e.matches=e.matches||e.webkitMatchesSelector;for(let o in t){let r=t[o].rules||t[o].cssRules;for(let t in r)e.matches(r[t].selectorText)&&n.push(r[t].cssText)}return n.length?n:null}(e);if(null!==t)for(let e of t){let t=e.selectorText,n=c.indexOf(t);-1!==n&&(c.splice(n,1),a.splice(n,1)),-1===s.indexOf(t)&&s.push(t)}}function v(e){if(_(e),0!==e.childNodes.length)for(childNode of e.childNodes)1===childNode.nodeType&&v(childNode)}let y=null;function w(e){y&&y.disconnect&&y.disconnect(),function(){c=i.unique(c);for(let e of c)for(let t=0;t<f.length;t++){let n=f[t].indexOf(e);n>-1&&(p[t]+=d[t][n])}for(let e=0;e<l.length;e++){let t={file:l[e],original:u[e],savings:p[e]};h.push(t)}}(),o.pub("unused-css",{cssUsage:h,page:window.__route__,type:e}),o.pub("used-css",{page:window.__route__,data:i.unique(s).map(e=>{let t="";for(let n=0;n<f.length;n++){f[n].indexOf(e)>-1&&(t=l[n])}return{sel:e,file:t}})}),s=[],c=[],a=[],l=[],u=[],f=[],d=[],p=[],h=[],g=[]}r.on("stop-audit",function(){w("stop-audit")}),window.addEventListener("unload",function(e){w("unload")}),document.addEventListener("pageReRender",function e(){document.removeEventListener("pageReRender",e),function(){let e=document.getElementsByTagName("style");for(let r=1;r<e.length;r++){var t=0,n=0,o=e[r].innerText.replace(/\/\*(.*?)\*\//g,"");for(let e=0;e<o.length;e++)"{"===o[e]?n++:"}"===o[e]&&0==--n&&(m(o.substring(t,e+1)),t=e+1)}}();let t=document.styleSheets;for(let e=1;e<t.length;e++){let n=t[e];for(let e of n.cssRules){let t=e.selectorText;if(t){let e=t;t.indexOf(":")>-1&&(e=t.replace(/\:\:?[a-z][a-z\-(0-9)+]+/,"")),document.querySelector(e)?s.push(t):c.push(t)}1!==e.type&&g.push(e)}}}),document.addEventListener("generateFuncReady",function(){(y=new MutationObserver(function(e){e.forEach(function(e){if("attributes"===e.type)_(e.target);else if("childList"===e.type&&0!==e.addedNodes.length)for(node of e.addedNodes)v(node)})})).observe(document,{attributes:!0,childList:!0,subtree:!0,attributeFilter:["class","id"]})}),e.exports.init=function(){}},55:function(e,t,n){const o=n(3),r=(n(1),n(0));let i=[];var s,c=null;var a=function(e,t){return function(){var n=this,o=arguments,r=+new Date;s&&r<s+t?(clearTimeout(c),c=setTimeout(function(){s=r,e.apply(n,o)},t)):(s=r,e.apply(n,o))}}(function(){i=[],function e(t,n){let o=getComputedStyle(t);if("none"===o.display||"hidden"===o.visibility||"none"!==o.backgroundImage)return;let r=t.outerHTML.match(/<(.*?)>/)[0].replace(/exparser:info-component-id="(.*?)"/,"").replace(/wx-/,"").replace(/is="(.*?)"/g,"");(r=r.replace(/exparser:info-class-prefix="(.*?)"/g,"").replace(/exparser:info-attr-/g,"")).indexOf("body")>-1&&(r="<page>");let s=o.backgroundColor.match(/[^\(\)]+(?=\))/g)[0].split(",").map(Number),c={};4===s.length?(c.bgColor=function(e,t){let n=[];return n.push(e[0]*(1-t[3])+t[0]*t[3]),n.push(e[1]*(1-t[3])+t[1]*t[3]),n.push(e[2]*(1-t[3])+t[2]*t[3]),n}(n[n.length-1].bgColor,s),0!==s[3]?c.nodeInfo=r:c.nodeInfo=n[n.length-1].nodeInfo):(c.bgColor=s,c.nodeInfo=r),n.push(c);let a=o.color.match(/[^\(\)]+(?=\))/g)[0].split(",").map(Number);if(("WX-INPUT"===t.nodeName||"WX-TEXTAREA"===t.nodeName)&&""!==t.getAttribute("value")){let e={node:t.getAttribute("value"),parent:c.nodeInfo,fontSize:o.fontSize,fontWeight:o.fontWeight,color:a,backgroundColor:c.bgColor};i.push(e)}t.childNodes.forEach(r=>{if(3===r.nodeType){if(""!==t.innerText){let e={node:t.innerText,parent:c.nodeInfo,fontSize:o.fontSize,fontWeight:o.fontWeight,color:a,backgroundColor:c.bgColor};i.push(e)}}else e(r,n)}),n.pop()}(document.body,[{bgColor:[255,255,255],nodeInfo:"<page>"}]),o.pub("color-contrast",{textInfo:i,page:window.__route__})},2e3);r.on("stop-audit",function(){document.removeEventListener("pageReRender",a),clearTimeout(c)}),document.addEventListener("pageReRender",a),e.exports.init=function(){}},56:function(e,t,n){const o=n(3),r=(n(1),n(57)),{getValidVersions:i,getValidItemsWithSpecificVersions:s,getValidItem:c,doesNeedProperty:a}=n(7),l=Object.keys(r),u=wx.version.version;let f=[],d=null;function p(e){-1===f.indexOf(e)&&f.push(e),clearTimeout(d),d=setTimeout(function(){o.pub("deprecated-api",{deprecateds:f,page:window.__route__}),f=[]},500)}const h=(e,t,n,o)=>{const l=r[t];let u,f;if(0===(u=i(e,t,r)).length)return!1;const d=a(u,l);return!(d&&!n)&&(d?(!n||void 0!==(f=((e,t,n)=>s(e,t,n))(u,l,n)))&&(!(f.length&&!o)&&(0===f.length?`${t}.${n}`:(!o||void 0!==c(f,o))&&`${t}.${n}.${o}`)):t)};e.exports.init=function(){const e=exparser.createElement;exparser.createElement=function(t,n,o){const r=e(t,n,o),i=t.replace("wx-",""),s=h(u,i);if(s&&p(i),!s&&l.indexOf(i)>-1){const e=r.__dataProxy.scheduleReplace.bind(r.__dataProxy);r.__dataProxy.scheduleReplace=function(t,n,o){e(t,n,o);const r=h(u,i,t[0],n);r&&p(r)}}return r}}},57:function(e){e.exports={audio:{"1.6.0":[]},"contact-button":{"2.1.0":[]},modal:{"1.0.0":[]},toast:{"1.0.0":[]},mask:{"1.0.0":[]},loading:{"1.0.0":[]},"action-sheet":{"1.0.0":[]},"action-sheet-item":{"1.0.0":[]},"action-sheet-cancel":{"1.0.0":[]},map:{"1.0.0":["covers"],"1.4.0":["controls"],"1.2.0":["include-points"]},video:{"2.4.0":["custom-cache"]}}},58:function(e,t,n){const o=n(3);n(1);let r=null;document.addEventListener("pageReRender",function(){clearTimeout(r),r=setTimeout(function(){const e=function(){let e=0,t=0,n=0;return function o(r){const i=[];e++;for(let e=0,o=r.length;e<o;e++){let o=r[e],s=o.__wxSlotChildren;o instanceof exparser.Element&&(o instanceof exparser.Component&&(t++,o.hasBehavior("wx-base")&&(s=o.childNodes)),i.push.apply(i,s),n=Math.max(n,s.length))}i.length&&o(i)}([window.__DOMTree__]),{depth:e,count:t,maxChildren:n}}();e.page=window.__route__,o.pub("dom-size",e)},500)}),e.exports.init=function(){}},7:function(e,t,n){const{compareVersion:o}=n(1);e.exports.getValidVersions=function(e,t,n){if(!t)return[];const r=Object.keys(n),i=r.indexOf(t);if(-1===i)return[];{const t=n[r[i]];return Object.keys(t).filter(t=>o(t,e)<=0)}},e.exports.doesNeedProperty=function(e,t,n){let o=!1;for(let n=0;n<e.length;n++){if(t[e[n]].length){o=!0;break}}return o},e.exports.getValidItemsWithSpecificVersions=function(e,t,n){let o=void 0;for(let r=0;r<e.length;r++){let i=t[e[r]];for(let e=0;e<i.length;e++){let t=i[e];if("string"==typeof t&&t===n){void 0===o&&(o=[]);break}if("object"==typeof t&&t.hasOwnProperty(n)){o=void 0===o?t[n]:o.concat(t[n]);break}}}return o},e.exports.getValidItem=function(e,t){for(let n=0;n<e.length;n++){if("string"==typeof e[n]&&e[n]===t)return[];if("object"==typeof e[n]&&e[n].hasOwnProperty(t))return e[n][t]}}}});