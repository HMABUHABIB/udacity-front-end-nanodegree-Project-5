var Client =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/base.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/base.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 200px 1fr 100px;\n  grid-template-areas: 'header' 'main' 'footer';\n  background: #88cbab;\n  background: linear-gradient(0deg, #88cbab 0%, #000d3c 100%);\n  margin: 0;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  color: #fff; }\n\nmain {\n  grid-area: main; }\n\nsection {\n  max-width: 800px;\n  margin: 50px auto;\n  background-color: #706d6d;\n  padding: 25px; }\n\ntable,\nth,\ntd {\n  border: 1px solid black;\n  border-collapse: collapse; }\n\nth,\ntd {\n  padding: 5px;\n  text-align: left; }\n\nh1 {\n  font-family: 'Fira Sans', sans-serif;\n  font-size: 3em;\n  margin: 2em 1rem;\n  text-align: center;\n  text-shadow: 2px 2px 10px #2a77aa;\n  animation: mymove 5s infinite; }\n", "",{"version":3,"sources":["webpack://./src/client/styles/base.scss"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,2BAA2B;EAC3B,mCAAmC;EACnC,6CAGU;EACV,mBAA8B;EAC9B,2DAIC;EACD,SAAS;EACT,qDAAqD;EACrD,WAAW,EAAA;;AAGb;EACE,eAAe,EAAA;;AAGjB;EACE,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;EACzB,aAAa,EAAA;;AAGf;;;EAGE,uBAAuB;EACvB,yBAAyB,EAAA;;AAE3B;;EAEE,YAAY;EACZ,gBAAgB,EAAA;;AAGlB;EACE,oCAAoC;EACpC,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,iCAAiC;EACjC,6BAA6B,EAAA","sourcesContent":["body {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: 200px 1fr 100px;\n  grid-template-areas:\n    'header'\n    'main'\n    'footer';\n  background: rgb(136, 203, 171);\n  background: linear-gradient(\n    0deg,\n    rgba(136, 203, 171, 1) 0%,\n    rgba(0, 13, 60, 1) 100%\n  );\n  margin: 0;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  color: #fff;\n}\n\nmain {\n  grid-area: main;\n}\n\nsection {\n  max-width: 800px;\n  margin: 50px auto;\n  background-color: #706d6d;\n  padding: 25px;\n}\n\ntable,\nth,\ntd {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\nth,\ntd {\n  padding: 5px;\n  text-align: left;\n}\n\nh1 {\n  font-family: 'Fira Sans', sans-serif;\n  font-size: 3em;\n  margin: 2em 1rem;\n  text-align: center;\n  text-shadow: 2px 2px 10px #2a77aa;\n  animation: mymove 5s infinite;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/cards.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/cards.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#card {\n  background-color: #444; }\n\n#cards {\n  background-color: blueviolet; }\n", "",{"version":3,"sources":["webpack://./src/client/styles/cards.scss"],"names":[],"mappings":"AAAA;EACE,sBAAsB,EAAA;;AAExB;EACE,4BAA4B,EAAA","sourcesContent":["#card {\n  background-color: #444;\n}\n#cards {\n  background-color: blueviolet;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/footer.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/footer.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "footer {\n  color: azure;\n  grid-area: footer;\n  font-size: 30px;\n  text-align: center;\n  background-color: cadetblue;\n  width: fit-content;\n  margin: auto;\n  padding: 25px;\n  border-radius: 25px; }\n", "",{"version":3,"sources":["webpack://./src/client/styles/footer.scss"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,2BAA2B;EAC3B,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,mBAAmB,EAAA","sourcesContent":["footer {\n  color: azure;\n  grid-area: footer;\n  font-size: 30px;\n  text-align: center;\n  background-color: cadetblue;\n  width: fit-content;\n  margin: auto;\n  padding: 25px;\n  border-radius: 25px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/form.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/form.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "form {\n  border: 1px solid #545454;\n  border-radius: 3px;\n  padding: 40px; }\n\ninput {\n  padding: 5px 20px;\n  width: 100%;\n  line-height: 16px;\n  margin: 10px 0; }\n\n#date-field {\n  display: flex; }\n\n#start-date,\n#end-date {\n  width: fit-content;\n  margin: auto; }\n\n#submit {\n  width: fit-content;\n  position: relative;\n  margin: auto; }\n", "",{"version":3,"sources":["webpack://./src/client/styles/form.scss"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,aAAa,EAAA;;AAGf;EACE,iBAAiB;EACjB,WAAW;EACX,iBAAiB;EACjB,cAAc,EAAA;;AAGhB;EACE,aAAa,EAAA;;AAGf;;EAEE,kBAAkB;EAClB,YAAY,EAAA;;AAEd;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY,EAAA","sourcesContent":["form {\n  border: 1px solid #545454;\n  border-radius: 3px;\n  padding: 40px;\n}\n\ninput {\n  padding: 5px 20px;\n  width: 100%;\n  line-height: 16px;\n  margin: 10px 0;\n}\n\n#date-field {\n  display: flex;\n}\n\n#start-date,\n#end-date {\n  width: fit-content;\n  margin: auto;\n}\n#submit {\n  width: fit-content;\n  position: relative;\n  margin: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/header.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/header.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "header {\n  grid-area: header;\n  align-items: center; }\n", "",{"version":3,"sources":["webpack://./src/client/styles/header.scss"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,mBAAmB,EAAA","sourcesContent":["header {\n  grid-area: header;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/resets.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/resets.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n* {\n  box-sizing: border-box; }\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nul {\n  list-style-type: none; }\n", "",{"version":3,"sources":["webpack://./src/client/styles/resets.scss"],"names":[],"mappings":"AAAA;;;CAGC;AAED;EACE,sBAAsB,EAAA;;AAGxB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB,EAAA;;AAE1B,gDAAA;AACA;;;;;;;;;;;EAWE,cAAc,EAAA;;AAEhB;EACE,cAAc,EAAA;;AAEhB;;EAEE,gBAAgB,EAAA;;AAElB;;EAEE,YAAY,EAAA;;AAEd;;;;EAIE,WAAW;EACX,aAAa,EAAA;;AAEf;EACE,yBAAyB;EACzB,iBAAiB,EAAA;;AAEnB;EACE,qBAAqB,EAAA","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nul {\n  list-style-type: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: generateTripCard, handleSubmit, today, tomorrow, dayAfterTomorrow, maxStartDate, changeDateFormat, numberOfDays, startDate, endDate, tripsList, generateBtn, luckBtn, appfunction, nameOfRandomePlace, note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startDate", function() { return startDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endDate", function() { return endDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripsList", function() { return tripsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBtn", function() { return generateBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "luckBtn", function() { return luckBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "note", function() { return note; });
/* harmony import */ var _js_generateTripCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/generateTripCard */ "./src/client/js/generateTripCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateTripCard", function() { return _js_generateTripCard__WEBPACK_IMPORTED_MODULE_0__["generateTripCard"]; });

/* harmony import */ var _js_formHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/formHandler */ "./src/client/js/formHandler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleSubmit", function() { return _js_formHandler__WEBPACK_IMPORTED_MODULE_1__["handleSubmit"]; });

/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/app */ "./src/client/js/app.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appfunction", function() { return _js_app__WEBPACK_IMPORTED_MODULE_2__["appfunction"]; });

/* harmony import */ var _js_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/date */ "./src/client/js/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "today", function() { return _js_date__WEBPACK_IMPORTED_MODULE_3__["today"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tomorrow", function() { return _js_date__WEBPACK_IMPORTED_MODULE_3__["tomorrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dayAfterTomorrow", function() { return _js_date__WEBPACK_IMPORTED_MODULE_3__["dayAfterTomorrow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxStartDate", function() { return _js_date__WEBPACK_IMPORTED_MODULE_3__["maxStartDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeDateFormat", function() { return _js_date__WEBPACK_IMPORTED_MODULE_3__["changeDateFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberOfDays", function() { return _js_date__WEBPACK_IMPORTED_MODULE_3__["numberOfDays"]; });

/* harmony import */ var _js_luckPlace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/luckPlace */ "./src/client/js/luckPlace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nameOfRandomePlace", function() { return _js_luckPlace__WEBPACK_IMPORTED_MODULE_4__["nameOfRandomePlace"]; });

/* harmony import */ var _media_facebook_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/facebook.png */ "./src/client/media/facebook.png");
/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/resets.scss */ "./src/client/styles/resets.scss");
/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/base.scss */ "./src/client/styles/base.scss");
/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/footer.scss */ "./src/client/styles/footer.scss");
/* harmony import */ var _styles_form_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/form.scss */ "./src/client/styles/form.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/header.scss */ "./src/client/styles/header.scss");
/* harmony import */ var _styles_cards_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/cards.scss */ "./src/client/styles/cards.scss");













const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');
const cityInput = document.getElementById('search_input');
const note = document.getElementById('note');
let tripsList = []
document.addEventListener('DOMContentLoaded', (event) => {
 document.getElementById("cards").innerHTML = localStorage.getItem("sectioninnerHTML");
 startDate.min = startDate.value = Object(_js_date__WEBPACK_IMPORTED_MODULE_3__["changeDateFormat"])(_js_date__WEBPACK_IMPORTED_MODULE_3__["tomorrow"])
 startDate.max = _js_date__WEBPACK_IMPORTED_MODULE_3__["maxStartDate"]
 endDate.min = endDate.value = Object(_js_date__WEBPACK_IMPORTED_MODULE_3__["changeDateFormat"])(_js_date__WEBPACK_IMPORTED_MODULE_3__["dayAfterTomorrow"])
 tripsList = []
});


const luckBtn = document.querySelector('#luck');
luckBtn.addEventListener('click', function (event) {
 event.preventDefault()
 cityInput.value = Object(_js_luckPlace__WEBPACK_IMPORTED_MODULE_4__["nameOfRandomePlace"])()
 Object(_js_formHandler__WEBPACK_IMPORTED_MODULE_1__["handleSubmit"])(event)
});
const generateBtn = document.querySelector('#submit');
generateBtn.addEventListener('click', function (event) {
 Object(_js_formHandler__WEBPACK_IMPORTED_MODULE_1__["handleSubmit"])(event)
});

document.addEventListener("click", removeListener);
function removeListener(event) {
 if (event.target.classList.contains("remove")) {
  event.target.parentNode.remove();
  localStorage.setItem("sectioninnerHTML", document.getElementById("cards").innerHTML);
 }

}



/***/ }),

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/*! exports provided: appfunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appfunction", function() { return appfunction; });

let tripInfo;
let serverLink = 'https://travel-app.glitch.me'
//let serverLink = 'http://localhost:8081'

const cityInput = document.getElementById('search_input');

async function appfunction(event) {
 tripInfo = { startDate: '', endDate: '', longOfTheTrip: '', howManyDaysWillStart: 'numberOfDays(today, startDate.value)', city: '', geonames: '', pixabay: '', weatherbit: '', restcountries: '' }
 geonames()
};

async function geonames() {

 fetch('' + serverLink + '/geonames?city=' + cityInput.value + '')
  .then(res => res.json())
  .then(function (res) {
   if (res.geonames.length > 0) {
    Client.generateBtn.value = 'Loading ...'
    Client.generateBtn.disabled = true;
    Client.luckBtn.value = 'Loading ...'
    Client.luckBtn.disabled = true;
    tripInfo.city = cityInput.value
    tripInfo.geonames = res.geonames[0]
    tripInfo.startDate = Client.startDate.value
    tripInfo.endDate = Client.endDate.value
    tripInfo.howManyDaysWillStart = Client.numberOfDays(Client.today, Client.startDate.value)
    tripInfo.longOfTheTrip = Client.numberOfDays(Client.startDate.value, Client.endDate.value)
    return 1;
   }
   else {
    alert('City not found')
    return 1;
   }

  })
  .then(weatherbit)

}


async function weatherbit() {

 fetch('' + serverLink + '/weatherbit?lat=' + tripInfo.geonames.lat + '&lon=' + tripInfo.geonames.lng + '&days=' + tripInfo.howManyDaysWillStart + '')
  .then(res => res.json())
  .then(function (res) {
   tripInfo.weatherbit = res
  })
  .then(pixabay(tripInfo.city))

}

async function pixabay(query) {

 fetch('' + serverLink + '/pixabay?place=' + query + '')
  .then(res => res.json())
  .then(function (res) {
   if (res.total == 0) {
    pixabay(tripInfo.geonames.countryName)
   }
   else {
    tripInfo.pixabay = res
    restcountries(tripInfo.geonames.countryName)
   }
  })
}

async function restcountries(query) {

 fetch('' + serverLink + '/restcountries?name=' + query + '')
  .then(res => res.json())
  .then(function (res) {
   tripInfo.restcountries = res
   Client.tripsList.push(tripInfo)
   printtripInfo()
  }
  )
}



async function printtripInfo() {

 if (!(tripInfo.weatherbit.max_temp)) {

  setTimeout(printtripInfo, 2000)

 }
 else {

  Client.generateTripCard(Client.tripsList[Client.tripsList.length - 1])
 }

}



/***/ }),

/***/ "./src/client/js/date.js":
/*!*******************************!*\
  !*** ./src/client/js/date.js ***!
  \*******************************/
/*! exports provided: today, tomorrow, dayAfterTomorrow, maxStartDate, changeDateFormat, numberOfDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "today", function() { return today; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tomorrow", function() { return tomorrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayAfterTomorrow", function() { return dayAfterTomorrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxStartDate", function() { return maxStartDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeDateFormat", function() { return changeDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfDays", function() { return numberOfDays; });
let today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
let dayAfterTomorrow = new Date();
dayAfterTomorrow.setDate(today.getDate() + 2);
let maxStartDate = new Date();
maxStartDate.setDate(today.getDate() + 15);
maxStartDate = changeDateFormat(maxStartDate);

const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');
document.addEventListener('DOMContentLoaded', function () {

 startDate.addEventListener("change", function () {
  if (startDate.value < changeDateFormat(today)) {
   alert("Sorry till now we can't travel to the past!")
   startDate.min = startDate.value = changeDateFormat(tomorrow)
  }
  if (startDate.value > endDate.value || startDate.value < endDate.value) {
   endDate.min = startDate.value
   endDate.value = startDate.value


  }

  if (numberOfDays(changeDateFormat(today), startDate.value) > 15) {
   alert('Please choose a start date for the trip within 16 days max.')
   startDate.min = startDate.value = changeDateFormat(today)
  }


 });

 endDate.addEventListener("change", function () {
  if (endDate.value < startDate.value) {
   endDate.min = startDate.value
   endDate.value = startDate.value
  }
 });

});


function changeDateFormat(date) {
 let year = date.getFullYear();
 let month = date.getMonth() + 1;
 let day = date.getDate();
 let formatedDate = "";
 month = month < 10 ? month = "0" + month : month;
 day = day < 10 ? day = "0" + day : day;
 formatedDate += year;
 formatedDate += "-";
 formatedDate += month;
 formatedDate += "-";
 formatedDate += day;
 return formatedDate
}

function numberOfDays(startDate, endDate) {
 let dt1 = new Date(startDate);
 let dt2 = new Date(endDate);
 return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
}




/***/ }),

/***/ "./src/client/js/formHandler.js":
/*!**************************************!*\
  !*** ./src/client/js/formHandler.js ***!
  \**************************************/
/*! exports provided: handleSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSubmit", function() { return handleSubmit; });

const cityInput = document.getElementById('search_input');
async function handleSubmit(event) {
    event.preventDefault()
    if (cityInput.value) {
        Client.appfunction(event)

    } else {
        alert(`please the city field cannot be empty`)

        return;
    }

}







/***/ }),

/***/ "./src/client/js/generateTripCard.js":
/*!*******************************************!*\
  !*** ./src/client/js/generateTripCard.js ***!
  \*******************************************/
/*! exports provided: generateTripCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTripCard", function() { return generateTripCard; });
const cityInput = document.getElementById('search_input');
const section = document.getElementById('cards');
let geonames = '', pixabay = '', weatherbit = '', randomImg = '', restcountries = '';
let i = 0
function generateTripCard(card) {
  //console.log(card);
  geonames = card.geonames
  randomImg = card.pixabay.hits[getRandomInt(card.pixabay.hits.length)]
  weatherbit = card.weatherbit
  restcountries = card.restcountries[0]

  section.innerHTML = `<section id="card" data-id="1">
  
           <h2 id="results">${geonames.name}</h2>
           <button class="remove" type="button">remove!</button>
           <p>The trip start within :${card.howManyDaysWillStart} day/s in:${card.startDate} till:${card.endDate} for:${card.longOfTheTrip} day/s</p>
           <p>Enjoy your stay in :${geonames.countryName}</p>
           <p>Temp:${weatherbit.temp} Max temp: ${weatherbit.max_temp} Low temp: ${weatherbit.low_temp} </p>
           <img src="${restcountries.flag}" width="300" height="auto">
           <a href="${randomImg.pageURL}">
           <img src="${randomImg.webformatURL}" alt="${randomImg.tags}" width="500" height="600">
        </a>
         </section>`+ section.innerHTML;
  localStorage.setItem("sectioninnerHTML", section.innerHTML);

  cityInput.value = ''
  Client.startDate.value = Client.changeDateFormat(Client.today)
  Client.endDate.value = Client.changeDateFormat(Client.tomorrow)
  Client.generateBtn.value = 'submit'
  Client.generateBtn.disabled = false;
  Client.luckBtn.value = "I'm Feeling Lucky"
  Client.luckBtn.disabled = false;

  i++
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}




/***/ }),

/***/ "./src/client/js/luckPlace.js":
/*!************************************!*\
  !*** ./src/client/js/luckPlace.js ***!
  \************************************/
/*! exports provided: nameOfRandomePlace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameOfRandomePlace", function() { return nameOfRandomePlace; });
const places = ["Hong Kong", "Bangkok", "London", "Macau", "Singapore", "Paris", "Dubai", "New York City", "Kuala Lumpur", "Istanbul", "Delhi", "Antalya", "Shenzhen", "Mumbai", "Phuket", "Rome", "Tokyo", "Pattaya", "Taipei", "Mecca", "Guangzhou", "Prague", "Medina", "Seoul", "Amsterdam", "Agra", "Miami", "Osaka", "Las Vegas", "Shanghai", "Ho Chi Minh City", "Denpasar", "Barcelona", "Los Angeles", "Milan", "Chennai", "Vienna", "Johor Bahru", "Jaipur", "Berlin", "Cairo", "Athens", "Orlando", "Moscow", "Venice", "Madrid", "Ha Long", "Riyadh", "Dublin", "Florence", "Hanoi", "Toronto", "Johannesburg", "Sydney", "Munich", "Jakarta", "Beijing", "Saint Petersburg", "Brussels", "Bielefeld", "Budapest", "Lisbon", "Dammam", "Penang Island", "Heraklion", "Kyoto", "Zhuhai", "Vancouver", "Chiang Mai", "Copenhagen", "San Francisco", "Melbourne", "Warsaw", "Marrakesh", "Kolkata", "Cebu City", "Auckland", "Guilin", "Honolulu", "Hurghada", "Kraków", "Muğla", "Buenos Aires", "Chiba", "Frankfurt am Main", "Stockholm", "Lima", "Da Nang", "Batam", "Nice", "Fukuoka", "Abu Dhabi", "Jeju", "Porto", "Rhodes", "Rio de Janeiro", "Krabi", "Bangalore", "Mexico", "Dominican Republic", "Brazil", "Switzerland", "Canada", "Germany", "United Kingdom", "Iran", "Philippines", "Colombia", "Lebanon", "Sri Lanka", "Romania", "Morocco", "United States", "Bulgaria", "Uruguay", "Jordan", "China", "India", "South Africa", "Ghana", "Ecuador"]
function nameOfRandomePlace() {
 return places[getRandomInt(places.length)]
}

function getRandomInt(max) {
 return Math.floor(Math.random() * Math.floor(max));
}



/***/ }),

/***/ "./src/client/media/facebook.png":
/*!***************************************!*\
  !*** ./src/client/media/facebook.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("imgs/facebook.png");

/***/ }),

/***/ "./src/client/styles/base.scss":
/*!*************************************!*\
  !*** ./src/client/styles/base.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/client/styles/cards.scss":
/*!**************************************!*\
  !*** ./src/client/styles/cards.scss ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cards_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./cards.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/cards.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cards_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cards_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/client/styles/footer.scss":
/*!***************************************!*\
  !*** ./src/client/styles/footer.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/footer.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/client/styles/form.scss":
/*!*************************************!*\
  !*** ./src/client/styles/form.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./form.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/form.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/client/styles/header.scss":
/*!***************************************!*\
  !*** ./src/client/styles/header.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/header.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/client/styles/resets.scss":
/*!***************************************!*\
  !*** ./src/client/styles/resets.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_resets_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./resets.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/resets.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_resets_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_resets_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map