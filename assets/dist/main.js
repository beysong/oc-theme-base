/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 930:
/***/ (() => {

(function ($) {
  var $header = $("#site-header"),
    $topbar = $header.siblings(".top-bar");

  $(".navigation-button-toggler").on("click", function () {
    $(".navigation").toggleClass("is-visible");
    $(".overlay-panel").toggleClass("is-visible");
  });
  $(".navigation-close-button,.overlay-panel").on("click", function () {
    $(".navigation").toggleClass("is-visible");
    $(".overlay-panel").toggleClass("is-invisible");
    if (timer) return;
    var timer = setTimeout(() => {
      timer = null;
      $(".overlay-panel").toggleClass("is-visible is-invisible");
    }, 800);
  });

  $("#top-bar-js").on("click", function () {
    $topbar.toggleClass("is-visible");
    $("body").toggleClass("top-bar-visible");
  });
  $(".top-bar-close").on("click", function () {
    $topbar.toggleClass("is-visible");
    $("body").toggleClass("top-bar-visible");
  });

  if ($header.hasClass("sticky-top")) {
    // Listen for resize events

    window.addEventListener(
      "scroll",
      function (event) {
        var timeout;
        // If there's a timer, cancel it
        if (timeout) {
          window.cancelAnimationFrame(timeout);
        }

        // Setup the new requestAnimationFrame()
        timeout = window.requestAnimationFrame(function () {
          let scrollPosition = Math.round(window.scrollY);

          let headerHeight = $header.outerHeight();
          if (scrollPosition > headerHeight) {
            $header.addClass("header--fixed");
          }
          // If not, remove "sticky" class from header
          else {
            $header.removeClass("header--fixed");
          }
        });
      },
      false
    );

    let scrollPosition = Math.round(window.scrollY);

    let headerHeight = $header.outerHeight();
    // If we've scrolled 60px, add "sticky" class to the header
    if (scrollPosition > headerHeight) {
      $header.addClass("header--fixed");
    }
    // If not, remove "sticky" class from header
    else {
      $header.removeClass("header--fixed");
    }
  }
})(jQuery);


/***/ }),

/***/ 693:
/***/ (() => {

(function ($) {
  var swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
  });
})(Swiper);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(693);
/* harmony import */ var _js_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_swiper__WEBPACK_IMPORTED_MODULE_1__);
// import "./js/theme";



// (function () {
//     const scripts = [theme];
//     scripts.forEach((script) => script.init());
// })();

})();

/******/ })()
;