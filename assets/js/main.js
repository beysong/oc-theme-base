/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/header.js":
/*!*********************************!*\
  !*** ./assets/src/js/header.js ***!
  \*********************************/
/***/ (() => {

(function ($) {
  $(".navigation-button-toggler").on("click", function () {
    $(".navigation").toggleClass("is-visible");
    $(".overlay-panel").toggleClass("is-visible");
  });
  $(".navigation-close-button,.overlay-panel").on("click", function () {
    $(".navigation").toggleClass("is-visible");
    $(".overlay-panel").toggleClass("is-invisible");
    if (timer) return;
    var timer = setTimeout(function () {
      timer = null;
      $(".overlay-panel").removeClass("is-visible is-invisible");
    }, 800);
  });
  $("#top-bar-js").on("click", function () {
    $("#top-bar").toggleClass("is-visible");
    $("body").toggleClass("top-bar-visible");
  });
  $(".top-bar-close").on("click", function () {
    $("#top-bar").toggleClass("is-visible");
    $("body").toggleClass("top-bar-visible");
  });
})(jQuery);

/***/ }),

/***/ "./assets/src/js/theme.js":
/*!********************************!*\
  !*** ./assets/src/js/theme.js ***!
  \********************************/
/***/ (() => {

(function ($) {
  "use strict";

  var nav_offset_top = $("header").height() + 50;
  /*-------------------------------------------------------------------------------
   Navbar 
  -------------------------------------------------------------------------------*/
  //* Navbar Fixed

  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();

        if (scroll >= nav_offset_top) {
          $(".header_area").addClass("navbar_fixed");
        } else {
          $(".header_area").removeClass("navbar_fixed");
        }
      });
    }
  }

  navbarFixed();
  /*----------------------------------------------------*/

  /*  Parallax Effect js
    /*----------------------------------------------------*/

  function parallaxEffect() {
    $(".bg-parallax").parallax();
  }

  parallaxEffect();
  /*----------------------------------------------------*/

  /*  MailChimp Slider
    /*----------------------------------------------------*/

  function mailChimp() {
    $("#mc_embed_signup").find("form").ajaxChimp();
  }

  mailChimp();
  $("select").niceSelect();
  /*----------------------------------------------------*/

  /*  Simple LightBox js
    /*----------------------------------------------------*/

  $(".imageGallery1 .light").simpleLightbox();
  $(".counter").counterUp({
    delay: 10,
    time: 1000
  });
  /*----------------------------------------------------*/

  /*  Testimonials Slider
    /*----------------------------------------------------*/

  function testimonials_slider() {
    if ($(".testi_slider").length) {
      $(".testi_slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: false,
        autoplay: false,
        smartSpeed: 1500,
        dots: true,
        //				navContainer: '.testimonials_area',
        //                navText: ['<i class="lnr lnr-arrow-up"></i>','<i class="lnr lnr-arrow-down"></i>'],
        responsiveClass: true
      });
    }
  }

  testimonials_slider();
  $(function () {
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
    var time = 7; // time in seconds

    var $progressBar, $bar, $elem, isPause, tick, percentTime;
    $("#project-slider").find(".owl-carousel").owlCarousel({
      autoplaySpeed: 500,
      navSpeed: 500,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1024: {
          items: 3
        },
        1200: {
          items: 4
        }
      },
      margin: 10,
      nav: true,
      dots: false,
      loop: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] // onInitialized: progressBar,
      // onTranslated: moved,
      // onDrag: pauseOnDragging
      //autoHeight : true,
      // transitionStyle: "fadeUp"

    }); //Init the carousel

    $("#main-slider").find(".owl-carousel").owlCarousel({
      autoplaySpeed: 500,
      navSpeed: 500,
      items: 1,
      nav: true,
      dots: true,
      loop: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      onInitialized: progressBar,
      onTranslate: moved,
      onDrag: pauseOnDragging,
      // slideTransition: 'fadeIn',
      animateOut: "fadeOut",
      animateIn: "fadeIn" //autoHeight : true,
      // animateOut: false,
      // animateIn: false

    });
    $(window).on("resize", function () {
      resize_owl();
    });

    function resize_owl() {
      if ($elem) {
        $($elem.target).trigger("resize.owl");
      }
    } //Init progressBar where elem is $("#owl-demo")


    function progressBar(elem) {
      $elem = elem; //build progress bar elements

      buildProgressBar(); //start counting

      start();
    } //create div#progressBar and div#bar then append to $(".owl-carousel")


    function buildProgressBar() {
      $progressBar = $("<div>", {
        id: "progressBar"
      });
      $bar = $("<div>", {
        id: "bar"
      });
      $progressBar.append($bar).appendTo($elem.target);
    }

    function start() {
      //reset timer
      percentTime = 0;
      isPause = false; //run interval every 0.01 second

      tick = setInterval(interval, 10);
    }

    function interval() {
      if (isPause === false) {
        percentTime += 1 / time;
        $bar.css({
          width: percentTime + "%"
        }); //if percentTime is equal or greater than 100

        if (percentTime >= 100) {
          // console.log(999)
          //slide to next item
          $($elem.target).trigger("next.owl");
        }
      }
    } //pause while dragging


    function pauseOnDragging() {
      isPause = true;
    } //moved callback


    function moved() {
      //clear interval
      clearTimeout(tick); //start again

      start();
    } //Init the adv carousel


    $(".adv-slider").find(".owl-carousel").owlCarousel({
      autoplaySpeed: 500,
      navSpeed: 500,
      items: 1,
      nav: false,
      dots: true,
      loop: true,
      // onTranslate: moved,
      // slideTransition: 'fadeIn',
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoHeight: true // animateOut: false,
      // animateIn: false

    });
  });
})(jQuery); // const main = (function ($) {
//     const init = function () {
//         console.log("???");
//     };
//     return { init };
// })(jQuery);
// export default main;

/***/ }),

/***/ "./assets/src/main.js":
/*!****************************!*\
  !*** ./assets/src/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/theme */ "./assets/src/js/theme.js");
/* harmony import */ var _js_theme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_theme__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/header */ "./assets/src/js/header.js");
/* harmony import */ var _js_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_header__WEBPACK_IMPORTED_MODULE_1__);

 // (function () {
//     const scripts = [theme];
//     scripts.forEach((script) => script.init());
// })();

/***/ }),

/***/ "./assets/src/style.css":
/*!******************************!*\
  !*** ./assets/src/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjcsasia"] = self["webpackChunkjcsasia"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./assets/src/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./assets/src/style.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;