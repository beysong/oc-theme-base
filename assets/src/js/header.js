(function ($) {
  var $header = $("#site-header"),
    $topbar = $header.siblings(".top-bar");

  var lastScrollTop = 0;
  // Listen for resize events

  window.addEventListener(
    "scroll",
    function (event) {
      var timeout;
      console.log("??");

      // If there's a timer, cancel it
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      // Setup the new requestAnimationFrame()
      timeout = window.requestAnimationFrame(function () {
        let scrollPosition = Math.round(window.scrollY);
        let headerHeight = $topbar.outerHeight();

        let scrollUp = false,
          hiddenHeight = 500;
        let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
          // downscroll code
          scrollUp = false;
        } else {
          // upscroll code
          scrollUp = true;
        }

        if (
          (scrollPosition > headerHeight && scrollPosition < hiddenHeight) ||
          scrollUp
        ) {
          $header.addClass("header--fixed");
        } 
        else {
          $header.removeClass("header--fixed");
        }
        if (scrollPosition >= hiddenHeight && !scrollUp) {
          $header.addClass("header--hidden");
        } else {
          $header.removeClass("header--hidden");
        }

        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      });
    },
    false
  );

  let scrollPosition = Math.round(window.scrollY);

  let headerHeight = $topbar.outerHeight();
  // If we've scrolled 60px, add "sticky" class to the header
  if (scrollPosition > headerHeight) {
    $header.addClass("header--fixed");
  }
  // If not, remove "sticky" class from header
  else {
    $header.removeClass("header--fixed");
  }
})(jQuery);
