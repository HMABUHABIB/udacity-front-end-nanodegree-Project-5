var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function u(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],c=t.base?o[0]+t.base:o[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var s=u(d),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==s?(i[s].references++,i[s].updater(f)):i.push({identifier:d,updater:g(f,t),references:1}),r.push(d)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,s=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function g(e,t){var n,r,a;if(t.singleton){var o=m++;n=h||(h=l(t)),r=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=l(t),r=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=u(n[r]);i[a].references--}for(var o=c(e,t),l=0;l<n.length;l++){var d=u(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";var r=n(1),a=n.n(r)()((function(e){return e[1]}));a.push([e.i,"*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}ul{list-style-type:none}\n",""]),t.a=a},function(e,t,n){"use strict";var r=n(1),a=n.n(r)()((function(e){return e[1]}));a.push([e.i,"body{display:grid;grid-template-columns:auto;grid-template-rows:200px 1fr 100px;grid-template-areas:'header' 'main' 'footer';background:#88cbab;background:linear-gradient(0deg, #88cbab 0%, #000d3c 100%);margin:0;font-family:Georgia, 'Times New Roman', Times, serif;color:#fff}main{grid-area:main}section{max-width:800px;margin:50px auto;background-color:#706d6d;padding:25px}table,th,td{border:1px solid black;border-collapse:collapse}th,td{padding:5px;text-align:left}h1{font-family:'Fira Sans', sans-serif;font-size:3em;margin:2em 1rem;text-align:center;text-shadow:2px 2px 10px #2a77aa;animation:mymove 5s infinite}\n",""]),t.a=a},function(e,t,n){"use strict";var r=n(1),a=n.n(r)()((function(e){return e[1]}));a.push([e.i,"footer{color:azure;grid-area:footer;font-size:30px;text-align:center;background-color:cadetblue;width:fit-content;margin:auto;padding:25px;border-radius:25px}\n",""]),t.a=a},function(e,t,n){"use strict";var r=n(1),a=n.n(r)()((function(e){return e[1]}));a.push([e.i,"form{border:1px solid #545454;border-radius:3px;padding:40px}input{padding:5px 20px;width:100%;line-height:16px;margin:10px 0}#date-field{display:flex}#start-date,#end-date{width:fit-content;margin:auto}#submit{width:fit-content;position:relative;margin:auto}\n",""]),t.a=a},function(e,t,n){"use strict";var r=n(1),a=n.n(r)()((function(e){return e[1]}));a.push([e.i,"header{grid-area:header;align-items:center}\n",""]),t.a=a},function(e,t,n){"use strict";function r(e){let t='<tr><th colspan="5" style="text-align: center;">Sentence list Table</th></tr><tr><th>Nr</th><th>Text</th><th>Confidence</th><th>Score tag</th><th>Agreement</th></tr>';for(let n=0;n<e.sentence_list.length;n++)t+=`<tr><th>${n+1}</th><th>${e.sentence_list[n].text}</th><th>${e.sentence_list[n].confidence}</th><th>${e.sentence_list[n].score_tag}</th><th>${e.sentence_list[n].agreement}</th></tr>`;return`<table style="width:100%">${t}</table>`}function a(e){e.preventDefault(),console.log("handleSubmit")}n.r(t);let o=new Date,i=new Date;i.setDate(o.getDate()+1);const u=document.querySelector("#start-date"),c=document.querySelector("#end-date");function l(e){let t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),a="";return n=n<10?n="0"+n:n,r=r<10?r="0"+r:r,a+=t,a+="-",a+=n,a+="-",a+=r,a}function d(e,t){let n=new Date(e),r=new Date(t);return Math.floor((Date.UTC(r.getFullYear(),r.getMonth(),r.getDate())-Date.UTC(n.getFullYear(),n.getMonth(),n.getDate()))/864e5)}document.addEventListener("DOMContentLoaded",(function(){u.addEventListener("change",(function(){u.value<l(o)&&(u.min=u.value=l(o)),c.min=u.value,c.value=u.value})),c.addEventListener("change",(function(){c.value<u.value&&(c.min=u.value,c.value=u.value)}))}));var s=n(0),f=n.n(s),p=n(2),h={insert:"head",singleton:!1},m=(f()(p.a,h),p.a.locals,n(3)),g={insert:"head",singleton:!1},b=(f()(m.a,g),m.a.locals,n(4)),v={insert:"head",singleton:!1},y=(f()(b.a,v),b.a.locals,n(5)),x={insert:"head",singleton:!1},w=(f()(y.a,x),y.a.locals,n(6)),S={insert:"head",singleton:!1};f()(w.a,S),w.a.locals;n.d(t,"generateTable",(function(){return r})),n.d(t,"handleSubmit",(function(){return a})),n.d(t,"today",(function(){return o})),n.d(t,"tomorrow",(function(){return i})),n.d(t,"changeDateFormat",(function(){return l})),n.d(t,"numberOfDays",(function(){return d}));const D=document.querySelector("#start-date"),M=document.querySelector("#end-date");document.addEventListener("DOMContentLoaded",(e=>{D.min=D.value=l(o),M.min=M.value=l(i)}));document.querySelector("#submit").addEventListener("click",(function(e){a(e)}))}]);