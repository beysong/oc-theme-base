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

/***/ "./assets/src/js/theme.js":
/*!********************************!*\
  !*** ./assets/src/js/theme.js ***!
  \********************************/
/***/ (() => {

eval("(function ($) {\n  \"use strict\";\n\n  var nav_offset_top = $(\"header\").height() + 50;\n  /*-------------------------------------------------------------------------------\n\t  Navbar \n\t-------------------------------------------------------------------------------*/\n\n  //* Navbar Fixed\n  function navbarFixed() {\n    if ($(\".header_area\").length) {\n      $(window).on(\"scroll\", function () {\n        var scroll = $(window).scrollTop();\n        if (scroll >= nav_offset_top) {\n          $(\".header_area\").addClass(\"navbar_fixed\");\n        } else {\n          $(\".header_area\").removeClass(\"navbar_fixed\");\n        }\n      });\n    }\n  }\n  navbarFixed();\n\n  /*----------------------------------------------------*/\n  /*  Parallax Effect js\n    /*----------------------------------------------------*/\n  function parallaxEffect() {\n    $(\".bg-parallax\").parallax();\n  }\n  parallaxEffect();\n\n  /*----------------------------------------------------*/\n  /*  MailChimp Slider\n    /*----------------------------------------------------*/\n  function mailChimp() {\n    $(\"#mc_embed_signup\").find(\"form\").ajaxChimp();\n  }\n  mailChimp();\n\n  $(\"select\").niceSelect();\n\n  /*----------------------------------------------------*/\n  /*  Simple LightBox js\n    /*----------------------------------------------------*/\n  $(\".imageGallery1 .light\").simpleLightbox();\n\n  $(\".counter\").counterUp({\n    delay: 10,\n    time: 1000,\n  });\n\n  /*----------------------------------------------------*/\n  /*  Testimonials Slider\n    /*----------------------------------------------------*/\n  function testimonials_slider() {\n    if ($(\".testi_slider\").length) {\n      $(\".testi_slider\").owlCarousel({\n        loop: true,\n        margin: 30,\n        items: 1,\n        nav: false,\n        autoplay: false,\n        smartSpeed: 1500,\n        dots: true,\n        //\t\t\t\tnavContainer: '.testimonials_area',\n        //                navText: ['<i class=\"lnr lnr-arrow-up\"></i>','<i class=\"lnr lnr-arrow-down\"></i>'],\n        responsiveClass: true,\n      });\n    }\n  }\n  testimonials_slider();\n\n  $(function () {\n    $(\".popup-youtube, .popup-vimeo, .popup-gmaps\").magnificPopup({\n      disableOn: 700,\n      type: \"iframe\",\n      mainClass: \"mfp-fade\",\n      removalDelay: 160,\n      preloader: false,\n\n      fixedContentPos: false,\n    });\n\n    var time = 7; // time in seconds\n\n    var $progressBar, $bar, $elem, isPause, tick, percentTime;\n\n    $(\"#project-slider\")\n      .find(\".owl-carousel\")\n      .owlCarousel({\n        autoplaySpeed: 500,\n        navSpeed: 500,\n        responsive: {\n          0: {\n            items: 1,\n          },\n          600: {\n            items: 2,\n          },\n          1024: {\n            items: 3,\n          },\n          1200: {\n            items: 4,\n          },\n        },\n        margin: 10,\n        nav: true,\n        dots: false,\n        loop: true,\n        navText: [\n          \"<i class='fa fa-angle-left'></i>\",\n          \"<i class='fa fa-angle-right'></i>\",\n        ],\n        // onInitialized: progressBar,\n        // onTranslated: moved,\n        // onDrag: pauseOnDragging\n        //autoHeight : true,\n        // transitionStyle: \"fadeUp\"\n      });\n\n    //Init the carousel\n    $(\"#main-slider\")\n      .find(\".owl-carousel\")\n      .owlCarousel({\n        autoplaySpeed: 500,\n        navSpeed: 500,\n        items: 1,\n        nav: true,\n        dots: true,\n        loop: true,\n        navText: [\n          \"<i class='fa fa-angle-left'></i>\",\n          \"<i class='fa fa-angle-right'></i>\",\n        ],\n        onInitialized: progressBar,\n        onTranslate: moved,\n        onDrag: pauseOnDragging,\n        // slideTransition: 'fadeIn',\n        animateOut: \"fadeOut\",\n        animateIn: \"fadeIn\",\n        //autoHeight : true,\n        // animateOut: false,\n        // animateIn: false\n      });\n\n    $(window).on(\"resize\", function () {\n      resize_owl();\n    });\n    function resize_owl() {\n      if ($elem) {\n        $($elem.target).trigger(\"resize.owl\");\n      }\n    }\n\n    //Init progressBar where elem is $(\"#owl-demo\")\n    function progressBar(elem) {\n      $elem = elem;\n      //build progress bar elements\n      buildProgressBar();\n      //start counting\n      start();\n    }\n\n    //create div#progressBar and div#bar then append to $(\".owl-carousel\")\n    function buildProgressBar() {\n      $progressBar = $(\"<div>\", {\n        id: \"progressBar\",\n      });\n      $bar = $(\"<div>\", {\n        id: \"bar\",\n      });\n      $progressBar.append($bar).appendTo($elem.target);\n    }\n\n    function start() {\n      //reset timer\n      percentTime = 0;\n      isPause = false;\n      //run interval every 0.01 second\n      tick = setInterval(interval, 10);\n    }\n\n    function interval() {\n      if (isPause === false) {\n        percentTime += 1 / time;\n        $bar.css({\n          width: percentTime + \"%\",\n        });\n        //if percentTime is equal or greater than 100\n        if (percentTime >= 100) {\n          // console.log(999)\n          //slide to next item\n          $($elem.target).trigger(\"next.owl\");\n        }\n      }\n    }\n\n    //pause while dragging\n    function pauseOnDragging() {\n      isPause = true;\n    }\n\n    //moved callback\n    function moved() {\n      //clear interval\n      clearTimeout(tick);\n      //start again\n      start();\n    }\n\n    //Init the adv carousel\n    $(\".adv-slider\").find(\".owl-carousel\").owlCarousel({\n      autoplaySpeed: 500,\n      navSpeed: 500,\n      items: 1,\n      nav: false,\n      dots: true,\n      loop: true,\n      // onTranslate: moved,\n      // slideTransition: 'fadeIn',\n      animateOut: \"fadeOut\",\n      animateIn: \"fadeIn\",\n      autoHeight: true,\n      // animateOut: false,\n      // animateIn: false\n    });\n  });\n})(jQuery);\n\n// const main = (function ($) {\n//     const init = function () {\n//         console.log(\"???\");\n//     };\n\n//     return { init };\n// })(jQuery);\n\n// export default main;\n\n\n//# sourceURL=webpack://themebase/./assets/src/js/theme.js?");

/***/ }),

/***/ "./assets/src/main.js":
/*!****************************!*\
  !*** ./assets/src/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/theme */ \"./assets/src/js/theme.js\");\n/* harmony import */ var _js_theme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_theme__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/header */ \"./assets/src/js/header.js\");\n/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_header__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// (function () {\n//     const scripts = [theme];\n//     scripts.forEach((script) => script.init());\n// })();\n\n\n//# sourceURL=webpack://themebase/./assets/src/main.js?");

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