var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],s=n[c]||0,u="".concat(c," ").concat(s);n[c]=s+1;var d=l(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:g(f,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function g(e,t){var n,r,i;if(t.singleton){var o=m++;n=h||(h=s(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=s(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=l(n[r]);a[i].references--}for(var o=c(e,t),s=0;s<n.length;s++){var u=l(n[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";var r=n(1),i=n.n(r)()((function(e){return e[1]}));i.push([e.i,"*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}ul{list-style-type:none}\n",""]),t.a=i},function(e,t,n){"use strict";var r=n(1),i=n.n(r)()((function(e){return e[1]}));i.push([e.i,"body{display:grid;grid-template-columns:auto;grid-template-rows:200px 1fr 100px;grid-template-areas:'header' 'main' 'footer';background:#88cbab;background:linear-gradient(0deg, #88cbab 0%, #000d3c 100%);margin:0;font-family:Georgia, 'Times New Roman', Times, serif;color:#fff}main{grid-area:main}section{max-width:800px;margin:50px auto;background-color:#706d6d;padding:25px}table,th,td{border:1px solid black;border-collapse:collapse}th,td{padding:5px;text-align:left}h1{font-family:'Fira Sans', sans-serif;font-size:3em;margin:2em 1rem;text-align:center;text-shadow:2px 2px 10px #2a77aa;animation:mymove 5s infinite}\n",""]),t.a=i},function(e,t,n){"use strict";var r=n(1),i=n.n(r)()((function(e){return e[1]}));i.push([e.i,"footer{color:azure;grid-area:footer;font-size:30px;text-align:center;background-color:cadetblue;width:fit-content;margin:auto;padding:25px;border-radius:25px}\n",""]),t.a=i},function(e,t,n){"use strict";var r=n(1),i=n.n(r)()((function(e){return e[1]}));i.push([e.i,"form{border:1px solid #545454;border-radius:3px;padding:40px}input{padding:5px 20px;width:100%;line-height:16px;margin:10px 0}\n",""]),t.a=i},function(e,t,n){"use strict";var r=n(1),i=n.n(r)()((function(e){return e[1]}));i.push([e.i,"header{grid-area:header;align-items:center}\n",""]),t.a=i},function(e,t,n){"use strict";function r(e){let t='<tr><th colspan="5" style="text-align: center;">Sentence list Table</th></tr><tr><th>Nr</th><th>Text</th><th>Confidence</th><th>Score tag</th><th>Agreement</th></tr>';for(let n=0;n<e.sentence_list.length;n++)t+=`<tr><th>${n+1}</th><th>${e.sentence_list[n].text}</th><th>${e.sentence_list[n].confidence}</th><th>${e.sentence_list[n].score_tag}</th><th>${e.sentence_list[n].agreement}</th></tr>`;return`<table style="width:100%">${t}</table>`}n.r(t);var i=new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi);function o(e){e.preventDefault(),console.log("Test"),document.getElementById("results").innerHTML="loading ...";let t=document.getElementById("link").value;!function(e){return!!e.match(i)}(t)?document.getElementById("results").innerHTML="invalid URL":fetch("http://localhost:8081/meaningCloud?url="+t).then((e=>e.json())).then((function(e){0==e.status.code?document.getElementById("results").innerHTML=Client.generateTable(e):document.getElementById("results").innerHTML=e.status.msg})),document.getElementById("link").value=null}var a=n(0),l=n.n(a),c=n(2),s={insert:"head",singleton:!1},u=(l()(c.a,s),c.a.locals,n(3)),d={insert:"head",singleton:!1},f=(l()(u.a,d),u.a.locals,n(4)),p={insert:"head",singleton:!1},h=(l()(f.a,p),f.a.locals,n(5)),m={insert:"head",singleton:!1},g=(l()(h.a,m),h.a.locals,n(6)),b={insert:"head",singleton:!1};l()(g.a,b),g.a.locals;n.d(t,"handleSubmit",(function(){return o})),n.d(t,"generateTable",(function(){return r}))}]);