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
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto 1fr 100px;\n  grid-template-areas: 'header' 'main' 'footer';\n  margin: 0;\n  font-family: 'Poppins', sans-serif;\n  color: #fff;\n  min-height: 100vh;\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n  background-size: 200% 200%;\n  animation: background-animation 15s ease infinite; }\n\n@keyframes background-animation {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n.glass {\n  color: black;\n  margin: auto;\n  margin-bottom: 75px;\n  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));\n  border-radius: 2rem;\n  backdrop-filter: blur(2rem);\n  padding: 25px; }\n\nmain {\n  grid-area: main; }\n\ntable,\nth,\ntd {\n  border: 1px solid black;\n  border-collapse: collapse; }\n\nth,\ntd {\n  padding: 5px;\n  text-align: left; }\n\nh1 {\n  font-family: 'Fira Sans', sans-serif;\n  font-size: 3em;\n  margin: auto;\n  text-align: center;\n  text-shadow: 2px 2px 10px #2a77aa;\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);\n  font-weight: 600;\n  opacity: 0.8;\n  border-radius: 1rem;\n  padding: 40px;\n  width: 400px;\n  height: fit-content; }\n", "",{"version":3,"sources":["webpack://./src/client/styles/base.scss"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;AAExB;EACE,aAAa;EACb,2BAA2B;EAC3B,kCAAkC;EAClC,6CAGU;EACV,SAAS;EACT,kCAAkC;EAClC,WAAW;EACX,iBAAiB;EACjB,uEAAuE;EACvE,0BAA0B;EAC1B,iDAAiD,EAAA;;AAGnD;EACE;IACE,2BAA2B,EAAA;EAE7B;IACE,6BAA6B,EAAA;EAE/B;IACE,2BAA2B,EAAA,EAAA;;AAI/B;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EAEnB,gGAIC;EACD,mBAAmB;EACnB,2BAA2B;EAC3B,aAAa,EAAA;;AAGf;EACE,eAAe,EAAA;;AAGjB;;;EAGE,uBAAuB;EACvB,yBAAyB,EAAA;;AAE3B;;EAEE,YAAY;EACZ,gBAAgB,EAAA;;AAGlB;EACE,oCAAoC;EACpC,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,iCAAiC;EACjC,mDAAmD;EACnD,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,mBAAmB,EAAA","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto 1fr 100px;\n  grid-template-areas:\n    'header'\n    'main'\n    'footer';\n  margin: 0;\n  font-family: 'Poppins', sans-serif;\n  color: #fff;\n  min-height: 100vh;\n  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n  background-size: 200% 200%;\n  animation: background-animation 15s ease infinite;\n}\n\n@keyframes background-animation {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n.glass {\n  color: black;\n  margin: auto;\n  margin-bottom: 75px;\n\n  background: linear-gradient(\n    to right bottom,\n    rgba(255, 255, 255, 0.7),\n    rgba(255, 255, 255, 0.3)\n  );\n  border-radius: 2rem;\n  backdrop-filter: blur(2rem);\n  padding: 25px;\n}\n\nmain {\n  grid-area: main;\n}\n\ntable,\nth,\ntd {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\nth,\ntd {\n  padding: 5px;\n  text-align: left;\n}\n\nh1 {\n  font-family: 'Fira Sans', sans-serif;\n  font-size: 3em;\n  margin: auto;\n  text-align: center;\n  text-shadow: 2px 2px 10px #2a77aa;\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);\n  font-weight: 600;\n  opacity: 0.8;\n  border-radius: 1rem;\n  padding: 40px;\n  width: 400px;\n  height: fit-content;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "#cards {\n  margin: auto;\n  width: fit-content;\n  height: fit-content; }\n\n#card {\n  width: fit-content;\n  height: fit-content;\n  border-radius: 1rem;\n  margin: 2rem 0rem;\n  padding: 2rem;\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212); }\n\n.img-flage,\n.img-pixabay {\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);\n  border-radius: 1rem;\n  opacity: 80%; }\n\n.img-pixabay {\n  width: 65vw;\n  height: auto; }\n\n.img-pixabay-div {\n  width: fit-content;\n  border-radius: 1rem;\n  margin: 25px; }\n\n.trip-data-div {\n  margin: 25px;\n  width: 65vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.img-flage {\n  width: 20vw;\n  height: auto;\n  border-radius: 1rem;\n  margin: auto; }\n\n.trip-data-text {\n  width: 42vw;\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);\n  border-radius: 1rem;\n  margin: auto;\n  padding: 25px; }\n\n.trip-data-text > p,\n.trip-data-text > h3 {\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  color: #444;\n  line-height: 1.6; }\n\n.remove {\n  margin: auto;\n  font-size: 2rem;\n  color: #444; }\n\n.remove:hover {\n  color: whitesmoke; }\n\n#card-head > h2 {\n  color: #444;\n  flex-grow: 1;\n  margin: auto;\n  text-align: center;\n  font-size: 2.5em;\n  padding: 25px;\n  font-family: 'Fira Sans', sans-serif;\n  text-shadow: 2px 2px 10px #2a77aa;\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212); }\n\n#card-head {\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);\n  border-radius: 1rem;\n  width: 65vw;\n  margin: auto;\n  display: flex;\n  justify-content: space-between; }\n\n@media only screen and (max-width: 768px) {\n  .trip-data-div {\n    flex-direction: column-reverse; }\n  .img-flage {\n    margin-bottom: 20px; }\n  footer {\n    font-size: 20px; } }\n", "",{"version":3,"sources":["webpack://./src/client/styles/cards.scss"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,kBAAkB;EAClB,mBAAmB,EAAA;;AAErB;EACE,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,mDAAmD,EAAA;;AAGrD;;EAEE,mDAAmD;EACnD,mBAAmB;EACnB,YAAY,EAAA;;AAEd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,kBAAkB;EAClB,mBAAmB;EACnB,YAAY,EAAA;;AAGd;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,8BAA8B,EAAA;;AAEhC;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,YAAY,EAAA;;AAEd;EACE,WAAW;EACX,mDAAmD;EACnD,mBAAmB;EACnB,YAAY;EACZ,aAAa,EAAA;;AAGf;;EAEE,kCAAkC;EAClC,gBAAgB;EAChB,WAAW;EACX,gBAAgB,EAAA;;AAGlB;EACE,YAAY;EACZ,eAAe;EACf,WAAW,EAAA;;AAGb;EACE,iBAAiB,EAAA;;AAEnB;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,oCAAoC;EACpC,iCAAiC;EACjC,mDAAmD,EAAA;;AAErD;EACE,mDAAmD;EACnD,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,8BAA8B,EAAA;;AAGhC;EACE;IACE,8BAA8B,EAAA;EAEhC;IACE,mBAAmB,EAAA;EAErB;IACE,eAAe,EAAA,EAChB","sourcesContent":["#cards {\n  margin: auto;\n  width: fit-content;\n  height: fit-content;\n}\n#card {\n  width: fit-content;\n  height: fit-content;\n  border-radius: 1rem;\n  margin: 2rem 0rem;\n  padding: 2rem;\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);\n}\n\n.img-flage,\n.img-pixabay {\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);\n  border-radius: 1rem;\n  opacity: 80%;\n}\n.img-pixabay {\n  width: 65vw;\n  height: auto;\n}\n\n.img-pixabay-div {\n  width: fit-content;\n  border-radius: 1rem;\n  margin: 25px;\n}\n\n.trip-data-div {\n  margin: 25px;\n  width: 65vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.img-flage {\n  width: 20vw;\n  height: auto;\n  border-radius: 1rem;\n  margin: auto;\n}\n.trip-data-text {\n  width: 42vw;\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);\n  border-radius: 1rem;\n  margin: auto;\n  padding: 25px;\n}\n\n.trip-data-text > p,\n.trip-data-text > h3 {\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  color: #444;\n  line-height: 1.6;\n}\n\n.remove {\n  margin: auto;\n  font-size: 2rem;\n  color: #444;\n}\n\n.remove:hover {\n  color: whitesmoke;\n}\n#card-head > h2 {\n  color: #444;\n  flex-grow: 1;\n  margin: auto;\n  text-align: center;\n  font-size: 2.5em;\n  padding: 25px;\n  font-family: 'Fira Sans', sans-serif;\n  text-shadow: 2px 2px 10px #2a77aa;\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);\n}\n#card-head {\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);\n  border-radius: 1rem;\n  width: 65vw;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 768px) {\n  .trip-data-div {\n    flex-direction: column-reverse;\n  }\n  .img-flage {\n    margin-bottom: 20px;\n  }\n  footer {\n    font-size: 20px;\n  }\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "footer {\n  color: azure;\n  grid-area: footer;\n  font-size: 30px;\n  text-align: center;\n  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));\n  width: fit-content;\n  height: fit-content;\n  margin: auto;\n  border-top-right-radius: 25px;\n  border-top-left-radius: 25px;\n  padding: 20px; }\n", "",{"version":3,"sources":["webpack://./src/client/styles/footer.scss"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,gGAIC;EACD,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,6BAA6B;EAC7B,4BAA4B;EAC5B,aAAa,EAAA","sourcesContent":["footer {\n  color: azure;\n  grid-area: footer;\n  font-size: 30px;\n  text-align: center;\n  background: linear-gradient(\n    to right bottom,\n    rgba(255, 255, 255, 0.7),\n    rgba(255, 255, 255, 0.3)\n  );\n  width: fit-content;\n  height: fit-content;\n  margin: auto;\n  border-top-right-radius: 25px;\n  border-top-left-radius: 25px;\n  padding: 20px;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "form {\n  border-radius: 1rem;\n  padding: 40px;\n  width: 400px;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212); }\n\n#date-field {\n  display: flex;\n  flex-direction: column; }\n\n#start-date,\n#end-date,\nlabel {\n  border-radius: 10px;\n  width: 200px;\n  margin: auto;\n  margin-top: 10px;\n  font-size: 1.5em;\n  border-width: 0px;\n  padding: 5px; }\n\nlabel {\n  text-align: center; }\n\n.city-input {\n  border-radius: 10px;\n  font-size: 1.5em;\n  width: 300px;\n  margin: auto; }\n\n#submit,\n#luck {\n  border-radius: 10px;\n  font-size: 1.5em;\n  width: fit-content;\n  margin: auto;\n  margin-top: 10px; }\n", "",{"version":3,"sources":["webpack://./src/client/styles/form.scss"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mDAAmD,EAAA;;AAGrD;EACE,aAAa;EACb,sBAAsB,EAAA;;AAExB;;;EAGE,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,YAAY,EAAA;;AAGd;EACE,kBAAkB,EAAA;;AAGpB;EACE,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,YAAY,EAAA;;AAGd;;EAEE,mBAAmB;EAEnB,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB,EAAA","sourcesContent":["form {\n  border-radius: 1rem;\n  padding: 40px;\n  width: 400px;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);\n}\n\n#date-field {\n  display: flex;\n  flex-direction: column;\n}\n#start-date,\n#end-date,\nlabel {\n  border-radius: 10px;\n  width: 200px;\n  margin: auto;\n  margin-top: 10px;\n  font-size: 1.5em;\n  border-width: 0px;\n  padding: 5px;\n}\n\nlabel {\n  text-align: center;\n}\n\n.city-input {\n  border-radius: 10px;\n  font-size: 1.5em;\n  width: 300px;\n  margin: auto;\n}\n\n#submit,\n#luck {\n  border-radius: 10px;\n\n  font-size: 1.5em;\n  width: fit-content;\n  margin: auto;\n  margin-top: 10px;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "header {\n  grid-area: header;\n  align-items: center;\n  margin-top: 100px;\n  margin-bottom: 100px; }\n", "",{"version":3,"sources":["webpack://./src/client/styles/header.scss"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB,EAAA","sourcesContent":["header {\n  grid-area: header;\n  align-items: center;\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n"],"sourceRoot":""}]);
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
/*! exports provided: serverLink, generateTripCard, getTripData, handleSubmit, today, tomorrow, dayAfterTomorrow, maxStartDate, changeDateFormat, numberOfDays, startDate, endDate, tripsList, generateBtn, luckBtn, appfunction, nameOfRandomePlace, restDate, note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverLink", function() { return serverLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startDate", function() { return startDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endDate", function() { return endDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripsList", function() { return tripsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBtn", function() { return generateBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "luckBtn", function() { return luckBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restDate", function() { return restDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "note", function() { return note; });
/* harmony import */ var _js_generateTripCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/generateTripCard */ "./src/client/js/generateTripCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateTripCard", function() { return _js_generateTripCard__WEBPACK_IMPORTED_MODULE_0__["generateTripCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTripData", function() { return _js_generateTripCard__WEBPACK_IMPORTED_MODULE_0__["getTripData"]; });

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













let serverLink = 'https://travel-app.glitch.me'
//let serverLink = 'http://localhost:8081'

const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');
const cityInput = document.getElementById('search_input');
const note = document.getElementById('note');
let tripsList = []
document.addEventListener('DOMContentLoaded', (event) => {
 //document.getElementById("cards").innerHTML = localStorage.getItem("sectioninnerHTML");
 restDate()
 tripsList = []
});

function restDate() {
 startDate.min = startDate.value = Object(_js_date__WEBPACK_IMPORTED_MODULE_3__["changeDateFormat"])(_js_date__WEBPACK_IMPORTED_MODULE_3__["tomorrow"])
 startDate.max = _js_date__WEBPACK_IMPORTED_MODULE_3__["maxStartDate"]
 endDate.min = endDate.value = Object(_js_date__WEBPACK_IMPORTED_MODULE_3__["changeDateFormat"])(_js_date__WEBPACK_IMPORTED_MODULE_3__["dayAfterTomorrow"])
}

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
  event.target.parentNode.parentNode.remove();
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


const cityInput = document.getElementById('search_input');

async function appfunction(event) {
  tripInfo = { startDate: '', endDate: '', longOfTheTrip: '', howManyDaysWillStart: 'numberOfDays(today, startDate.value)', city: '', geonames: '', pixabay: '', weatherbit: '', restcountries: '' }
  geonames()

};

async function geonames() {
  try {

    fetch('' + Client.serverLink + '/geonames?city=' + cityInput.value + '')
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


  } catch (error) {
    alert("Error in geonames function");
    console.log("Error in geonames function", error);
  }

}



async function weatherbit() {

  try {

    fetch('' + Client.serverLink + '/weatherbit?lat=' + tripInfo.geonames.lat + '&lon=' + tripInfo.geonames.lng + '&days=' + tripInfo.howManyDaysWillStart + '')
      .then(res => res.json())
      .then(function (res) {
        tripInfo.weatherbit = res
      })
      .then(pixabay(tripInfo.city))

  } catch (error) {
    alert("Error in weatherbit function");
    console.log("Error in weatherbit function", error);

  }

}

async function pixabay(query) {
  try {
    fetch('' + Client.serverLink + '/pixabay?place=' + query + '')
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

  } catch (error) {
    alert("Error in pixabay function");
    console.log("Error in pixabay function", error);

  }
}

async function restcountries(query) {
  try {
    fetch('' + Client.serverLink + '/restcountries?name=' + query + '')
      .then(res => res.json())
      .then(function (res) {
        tripInfo.restcountries = res
        Client.tripsList.push(tripInfo)

        printtripInfo()
      }
      )

  } catch (error) {
    alert("Error in restcountries function");
    console.log("Error in restcountries function", error);

  }
}



async function printtripInfo() {
  try {
    if (!(tripInfo.weatherbit.max_temp)) {

      setTimeout(printtripInfo, 2000)

    }
    else {
      postData()
      //Client.getTripData()
      Client.generateTripCard(tripInfo)
    }
  } catch (error) {
    alert("Error in printtripInfo function");
    console.log("Error in printtripInfo function", error);

  }

}


// Post the trip data to server side
async function postData() {
  const response = await fetch('' + Client.serverLink + '/creatNewTrip', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tripInfo),
  });

  try {
    const newData = await response.json();

    return newData;
  } catch (error) {
    console.log("error", error);
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
/*! exports provided: generateTripCard, getRandomInt, getTripData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTripCard", function() { return generateTripCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTripData", function() { return getTripData; });
const cityInput = document.getElementById('search_input');
const section = document.getElementById('cards');
let geonames = '', weatherbit = '', randomImg = '', restcountries = '';
let i = 0

function generateTripCard(card) {

  geonames = card.geonames
  randomImg = card.pixabay.hits[getRandomInt(card.pixabay.hits.length)]
  weatherbit = card.weatherbit
  restcountries = card.restcountries[0]

  section.innerHTML = `<section id="card" class="glass" data-id="1">
           <div id="card-head">
           <h2 id="results">${geonames.name}</h2>
           <button class="remove btn fas fa-trash-alt" type="button"></button>
           </div>
           <div class="trip-data-div">
           <div class="trip-data-text">
           <h3>Here are the details for your trip to: <strong>${geonames.name}</strong></h3>
           <p>The trip start within :${card.howManyDaysWillStart} day/s in: ${card.startDate} <br>For: ${card.longOfTheTrip} day/s till: ${card.endDate}</p>
           <p>The temperature is: ${weatherbit.temp} with max: ${weatherbit.max_temp}  and min: ${weatherbit.low_temp}</p>
           <p>Enjoy your stay in: ${geonames.countryName} and dont forget to have some ${restcountries.currencies[0].name} with you it's their currencies.</p>
           </div>
           <img class="img-flage" src="${restcountries.flag}">
           </div>
           <div class="img-pixabay-div">
           <a href="${randomImg.pageURL}">
           <img src="${randomImg.webformatURL}" alt="${randomImg.tags}" class="img-pixabay">
        </a>
        </div>
         </section>`+ section.innerHTML;


  cityInput.value = ''
  Client.restDate()
  Client.generateBtn.value = 'submit'
  Client.generateBtn.disabled = false;
  Client.luckBtn.value = "I'm Feeling Lucky"
  Client.luckBtn.disabled = false;
  i++
}

// To get the trip data from the server
async function getTripData() {

  const res = await fetch('' + Client.serverLink + '/getTripData')

  try {
    const data = await res.json();

    //generateTripCard(data)
    return data;
  } catch (error) {
    console.log("Error in getAlldata", error);
    // appropriately handle the error
  }
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
const places = ["Hong Kong", "Bangkok", "London", "Macau", "Singapore", "Paris", "Dubai", "New York City", "Kuala Lumpur", "Istanbul", "Delhi", "Antalya", "Shenzhen", "Mumbai", "Phuket", "Rome", "Tokyo", "Pattaya", "Taipei", "Mecca", "Guangzhou", "Prague", "Medina", "Seoul", "Amsterdam", "Agra", "Miami", "Osaka", "Las Vegas", "Shanghai", "Ho Chi Minh City", "Denpasar", "Barcelona", "Los Angeles", "Milan", "Chennai", "Vienna", "Johor Bahru", "Jaipur", "Berlin", "Cairo", "Athens", "Orlando", "Moscow", "Venice", "Madrid", "Ha Long", "Riyadh", "Dublin", "Florence", "Hanoi", "Toronto", "Johannesburg", "Sydney", "Munich", "Jakarta", "Beijing", "Saint Petersburg", "Brussels", "Bielefeld", "Budapest", "Lisbon", "Dammam", "Penang Island", "Heraklion", "Kyoto", "Zhuhai", "Vancouver", "Chiang Mai", "Copenhagen", "San Francisco", "Melbourne", "Warsaw", "Marrakesh", "Kolkata", "Cebu City", "Auckland", "Guilin", "Honolulu", "Hurghada", "Buenos Aires", "Chiba", "Frankfurt am Main", "Stockholm", "Lima", "Da Nang", "Batam", "Nice", "Fukuoka", "Abu Dhabi", "Jeju", "Porto", "Rhodes", "Rio de Janeiro", "Krabi", "Bangalore", "Mexico", "Dominican Republic", "Brazil", "Switzerland", "Canada", "Germany", "United Kingdom", "Iran", "Philippines", "Colombia", "Lebanon", "Sri Lanka", "Romania", "Morocco", "Bulgaria", "Uruguay", "Jordan", "China", "India", "South Africa", "Ghana", "Ecuador"]
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