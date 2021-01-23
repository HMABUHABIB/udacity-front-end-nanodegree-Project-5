var Client=function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){"use strict";var a,r=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function u(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},a=[],r=0;r<t.length;r++){var i=t[r],l=e.base?i[0]+e.base:i[0],c=n[l]||0,s="".concat(l," ").concat(c);n[l]=c+1;var d=u(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:s,updater:g(f,e),references:1}),a.push(s)}return a}function c(t){var e=document.createElement("style"),a=t.attributes||{};if(void 0===a.nonce){var r=n.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(t){e.setAttribute(t,a[t])})),"function"==typeof t.insert)t.insert(e);else{var o=i(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var s,d=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function f(t,e,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(t.styleSheet)t.styleSheet.cssText=d(e,r);else{var i=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}function h(t,e,n){var a=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var m=null,p=0;function g(t,e){var n,a,r;if(e.singleton){var i=p++;n=m||(m=c(e)),a=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=c(e),a=h.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var a=0;a<n.length;a++){var r=u(n[a]);o[r].references--}for(var i=l(t,e),c=0;c<n.length;c++){var s=u(n[c]);0===o[s].references&&(o[s].updater(),o.splice(s,1))}n=i}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,a){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);a&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},function(t,e,n){"use strict";var a=n(1),r=n.n(a)()((function(t){return t[1]}));r.push([t.i,"*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}ul{list-style-type:none}\n",""]),e.a=r},function(t,e,n){"use strict";var a=n(1),r=n.n(a)()((function(t){return t[1]}));r.push([t.i,"body{display:grid;grid-template-columns:auto;grid-template-rows:200px 1fr 100px;grid-template-areas:'header' 'main' 'footer';background:#88cbab;background:linear-gradient(0deg, #88cbab 0%, #000d3c 100%);margin:0;font-family:Georgia, 'Times New Roman', Times, serif;color:#fff}main{grid-area:main}section{max-width:800px;margin:50px auto;background-color:#706d6d;padding:25px}table,th,td{border:1px solid black;border-collapse:collapse}th,td{padding:5px;text-align:left}h1{font-family:'Fira Sans', sans-serif;font-size:3em;margin:2em 1rem;text-align:center;text-shadow:2px 2px 10px #2a77aa;animation:mymove 5s infinite}\n",""]),e.a=r},function(t,e,n){"use strict";var a=n(1),r=n.n(a)()((function(t){return t[1]}));r.push([t.i,"footer{color:azure;grid-area:footer;font-size:30px;text-align:center;background-color:cadetblue;width:fit-content;margin:auto;padding:25px;border-radius:25px}\n",""]),e.a=r},function(t,e,n){"use strict";var a=n(1),r=n.n(a)()((function(t){return t[1]}));r.push([t.i,"form{border:1px solid #545454;border-radius:3px;padding:40px}input{padding:5px 20px;width:100%;line-height:16px;margin:10px 0}#date-field{display:flex}#start-date,#end-date{width:fit-content;margin:auto}#submit{width:fit-content;position:relative;margin:auto}\n",""]),e.a=r},function(t,e,n){"use strict";var a=n(1),r=n.n(a)()((function(t){return t[1]}));r.push([t.i,"header{grid-area:header;align-items:center}\n",""]),e.a=r},function(t,e,n){"use strict";var a=n(1),r=n.n(a)()((function(t){return t[1]}));r.push([t.i,"#card{background-color:#444}#cards{background-color:blueviolet}\n",""]),e.a=r},function(t,e,n){"use strict";n.r(e);const a=document.getElementById("search_input"),r=document.getElementById("cards");let i="",o="",u="";function l(t){i=t.geonames,o=t.pixabay,u=t.weatherbit,r.innerHTML=`<section id="card" data-id="1">\n           <h2 id="results">${i.name}</h2>\n           <button class="remove" type="button">remove!</button>\n           <p>The trip start within :${t.howManyDaysWillStart} day/s in:${t.startDate} till:${t.endDate} for:${t.longOfTheTrip} day/s</p>\n           <p>Enjoy your stay in :${i.countryName}</p>\n           <p>Temp:${u.temp} Max temp: ${u.max_temp} Low temp: ${u.low_temp} </p>\n           <img src="${o.hits[0].previewURL}" alt="Girl in a jacket" width="500" height="600">\n          \n         </section>`+r.innerHTML,a.value="",Client.startDate.value=Client.changeDateFormat(Client.today),Client.endDate.value=Client.changeDateFormat(Client.tomorrow),Client.generateBtn.value="submit",Client.generateBtn.disabled=!1,Client.luckBtn.value="I'm Feeling Lucky",Client.luckBtn.disabled=!1}const c=document.getElementById("search_input");async function s(t){t.preventDefault(),c.value?Client.appfunction(t):alert("please the city field cannot be empty")}let d,f="https://travel-app.glitch.me";const h=document.getElementById("search_input");async function m(t){d={startDate:"",endDate:"",longOfTheTrip:"",howManyDaysWillStart:"numberOfDays(today, startDate.value)",city:"",geonames:"",pixabay:"",weatherbit:""},async function(){fetch(f+"/geonames?city="+h.value).then((t=>t.json())).then((function(t){return t.geonames.length>0?(Client.generateBtn.value="Loading ...",Client.generateBtn.disabled=!0,Client.luckBtn.value="Loading ...",Client.luckBtn.disabled=!0,d.city=h.value,d.geonames=t.geonames[0],d.startDate=Client.startDate.value,d.endDate=Client.endDate.value,d.howManyDaysWillStart=Client.numberOfDays(Client.today,Client.startDate.value),d.longOfTheTrip=Client.numberOfDays(Client.startDate.value,Client.endDate.value),1):(alert("City not found"),1)})).then(p)}()}async function p(){fetch(f+"/weatherbit?lat="+d.geonames.lat+"&lon="+d.geonames.lng+"&days="+d.howManyDaysWillStart).then((t=>t.json())).then((function(t){d.weatherbit=t})).then(g(d.city))}async function g(t){fetch(f+"/pixabay?place="+t).then((t=>t.json())).then((function(t){0==t.total?g(d.geonames.countryName):(d.pixabay=t,Client.tripsList.push(d),b())}))}async function b(){d.weatherbit.max_temp?Client.generateTripCard(Client.tripsList[Client.tripsList.length-1]):setTimeout(b,2e3)}let y=new Date,v=new Date;v.setDate(y.getDate()+1);let C=new Date;C.setDate(y.getDate()+15),C=x(C);const D=document.querySelector("#start-date"),S=document.querySelector("#end-date");function x(t){let e=t.getFullYear(),n=t.getMonth()+1,a=t.getDate(),r="";return n=n<10?n="0"+n:n,a=a<10?a="0"+a:a,r+=e,r+="-",r+=n,r+="-",r+=a,r}function w(t,e){let n=new Date(t),a=new Date(e);return Math.floor((Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())-Date.UTC(n.getFullYear(),n.getMonth(),n.getDate()))/864e5)}document.addEventListener("DOMContentLoaded",(function(){D.addEventListener("change",(function(){D.value<x(y)&&(alert("Sorry till now we can't travel to the past!"),D.min=D.value=x(y)),D.value>S.value&&(S.min=D.value,S.value=D.value),console.log(w(x(y),D.value)),w(x(y),D.value)>15&&(alert("Please choose a start date for the trip within 16 days max."),D.min=D.value=x(y))})),S.addEventListener("change",(function(){S.value<D.value&&(S.min=D.value,S.value=D.value)}))}));const k=["\tHong Kong\t","\tBangkok\t","\tLondon\t","\tMacau\t","\tSingapore\t","\tParis\t","\tDubai\t","\tNew York City\t","\tKuala Lumpur\t","\tIstanbul\t","\tDelhi\t","\tAntalya\t","\tShenzhen\t","\tMumbai\t","\tPhuket\t","\tRome\t","\tTokyo\t","\tPattaya\t","\tTaipei\t","\tMecca\t","\tGuangzhou\t","\tPrague\t","\tMedina\t","\tSeoul\t","\tAmsterdam\t","\tAgra\t","\tMiami\t","\tOsaka\t","\tLas Vegas\t","\tShanghai\t","\tHo Chi Minh City\t","\tDenpasar\t","\tBarcelona\t","\tLos Angeles\t","\tMilan\t","\tChennai\t","\tVienna\t","\tJohor Bahru\t","\tJaipur\t","\tCancún\t","\tBerlin\t","\tCairo\t","\tAthens\t","\tOrlando\t","\tMoscow\t","\tVenice\t","\tMadrid\t","\tHa Long\t","\tRiyadh\t","\tDublin\t","\tFlorence\t","\tHanoi\t","\tToronto\t","\tJohannesburg\t","\tSydney\t","\tMunich\t","\tJakarta\t","\tBeijing\t","\tSaint Petersburg\t","\tBrussels\t","\tJerusalem\t","\tBudapest\t","\tLisbon\t","\tDammam\t","\tPenang Island\t","\tHeraklion\t","\tKyoto\t","\tZhuhai\t","\tVancouver\t","\tChiang Mai\t","\tCopenhagen\t","\tSan Francisco\t","\tMelbourne\t","\tWarsaw\t","\tMarrakesh\t","\tKolkata\t","\tCebu City\t","\tAuckland\t","\tGuilin\t","\tHonolulu\t","\tHurghada\t","\tKraków\t","\tMuğla\t","\tBuenos Aires\t","\tChiba\t","\tFrankfurt am Main\t","\tStockholm\t","\tLima\t","\tDa Nang\t","\tBatam\t","\tNice\t","\tFukuoka\t","\tAbu Dhabi\t","\tJeju\t","\tPorto\t","\tRhodes\t","\tRio de Janeiro\t","\tKrabi\t","\tBangalore\t","\tMexico\t","\tDominican Republic\t","\tBrazil\t","\tSwitzerland\t","\tCanada\t","\tUnited States\t","\tUnited States\t","\tGermany\t","\tUnited States\t","\tChina\t","\tUnited Kingdom\t","\tUnited States\t","\tIran\t","\tUnited States\t","\tGermany\t","\tSouth Africa\t","\tPhilippines\t","\tColombia\t","\tChina\t","\tLebanon\t","\tSwitzerland\t","\tSri Lanka\t","\tChina\t","\tRomania\t","\tMorocco\t","\tUnited States\t","\tBulgaria\t","\tChina\t","\tUruguay\t","\tJordan\t","\tChina\t","\tIndia\t","\tSouth Africa\t","\tUnited States\t","\tGhana\t","\tEcuador\t","\tChina\t","\tChina\t","\tUnited States\t"];function M(){return k[(t=k.length,Math.floor(Math.random()*Math.floor(t)))];var t}var L=n(0),B=n.n(L),T=n(2),O={insert:"head",singleton:!1},j=(B()(T.a,O),T.a.locals,n(3)),E={insert:"head",singleton:!1},q=(B()(j.a,E),j.a.locals,n(4)),P={insert:"head",singleton:!1},U=(B()(q.a,P),q.a.locals,n(5)),A={insert:"head",singleton:!1},F=(B()(U.a,A),U.a.locals,n(6)),I={insert:"head",singleton:!1},N=(B()(F.a,I),F.a.locals,n(7)),_={insert:"head",singleton:!1};B()(N.a,_),N.a.locals;n.d(e,"startDate",(function(){return H})),n.d(e,"endDate",(function(){return R})),n.d(e,"tripsList",(function(){return $})),n.d(e,"generateBtn",(function(){return G})),n.d(e,"luckBtn",(function(){return J})),n.d(e,"generateTripCard",(function(){return l})),n.d(e,"handleSubmit",(function(){return s})),n.d(e,"today",(function(){return y})),n.d(e,"tomorrow",(function(){return v})),n.d(e,"maxStartDate",(function(){return C})),n.d(e,"changeDateFormat",(function(){return x})),n.d(e,"numberOfDays",(function(){return w})),n.d(e,"appfunction",(function(){return m})),n.d(e,"nameOfRandomePlace",(function(){return M}));const H=document.querySelector("#start-date"),R=document.querySelector("#end-date"),z=document.getElementById("search_input");let $=[];document.addEventListener("DOMContentLoaded",(t=>{document.cookie="Secure",document.cookie="SameSite=None;",H.min=H.value=x(y),H.max=C,R.min=R.value=x(v),$=[]}));const J=document.querySelector("#luck");J.addEventListener("click",(function(t){t.preventDefault(),z.value=M(),s(t)}));const G=document.querySelector("#submit");G.addEventListener("click",(function(t){s(t)}))}]);