/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/header.js":
/*!*********************************!*\
  !*** ./assets/src/js/header.js ***!
  \*********************************/
/***/ (() => {

eval("(function ($) {\n  var $header = $(\"#site-header\"),\n    $topbar = $header.siblings(\".top-bar\");\n\n  $(\".navigation-button-toggler\").on(\"click\", function () {\n    $(\".navigation\").toggleClass(\"is-visible\");\n    $(\".overlay-panel\").toggleClass(\"is-visible\");\n  });\n  $(\".navigation-close-button,.overlay-panel\").on(\"click\", function () {\n    $(\".navigation\").toggleClass(\"is-visible\");\n    $(\".overlay-panel\").toggleClass(\"is-invisible\");\n    if (timer) return;\n    var timer = setTimeout(() => {\n      timer = null;\n      $(\".overlay-panel\").toggleClass(\"is-visible is-invisible\");\n    }, 800);\n  });\n\n  $(\"#top-bar-js\").on(\"click\", function () {\n    $topbar.toggleClass(\"is-visible\");\n    $(\"body\").toggleClass(\"top-bar-visible\");\n  });\n  $(\".top-bar-close\").on(\"click\", function () {\n    $topbar.toggleClass(\"is-visible\");\n    $(\"body\").toggleClass(\"top-bar-visible\");\n  });\n\n  if ($header.hasClass(\"sticky-top\")) {\n    // Listen for resize events\n\n    window.addEventListener(\n      \"scroll\",\n      function (event) {\n        var timeout;\n        // If there's a timer, cancel it\n        if (timeout) {\n          window.cancelAnimationFrame(timeout);\n        }\n\n        // Setup the new requestAnimationFrame()\n        timeout = window.requestAnimationFrame(function () {\n          let scrollPosition = Math.round(window.scrollY);\n\n          let headerHeight = $header.outerHeight();\n          if (scrollPosition > headerHeight) {\n            $header.addClass(\"header--fixed\");\n          }\n          // If not, remove \"sticky\" class from header\n          else {\n            $header.removeClass(\"header--fixed\");\n          }\n        });\n      },\n      false\n    );\n\n    let scrollPosition = Math.round(window.scrollY);\n\n    let headerHeight = $header.outerHeight();\n    // If we've scrolled 60px, add \"sticky\" class to the header\n    if (scrollPosition > headerHeight) {\n      $header.addClass(\"header--fixed\");\n    }\n    // If not, remove \"sticky\" class from header\n    else {\n      $header.removeClass(\"header--fixed\");\n    }\n  }\n})(jQuery);\n\n\n//# sourceURL=webpack://themebase/./assets/src/js/header.js?");

/***/ }),

/***/ "./assets/src/js/swiper.js":
/*!*********************************!*\
  !*** ./assets/src/js/swiper.js ***!
  \*********************************/
/***/ (() => {

eval("(function ($) {\n  var swiper = new Swiper(\".swiper\", { loop: true });\n})(Swiper);\n\n\n//# sourceURL=webpack://themebase/./assets/src/js/swiper.js?");

/***/ }),

/***/ "./assets/src/main.js":
/*!****************************!*\
  !*** ./assets/src/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/header */ \"./assets/src/js/header.js\");\n/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_header__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/swiper */ \"./assets/src/js/swiper.js\");\n/* harmony import */ var _js_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_swiper__WEBPACK_IMPORTED_MODULE_1__);\n// import \"./js/theme\";\n\n\n\n// (function () {\n//     const scripts = [theme];\n//     scripts.forEach((script) => script.init());\n// })();\n\n\n//# sourceURL=webpack://themebase/./assets/src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/main.js");
/******/ 	
/******/ })()
;