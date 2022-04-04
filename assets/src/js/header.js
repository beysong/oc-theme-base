(function ($) {
  var $header = $("#site-header"),
    $topbar = $header.siblings(".top-bar");

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

          let headerHeight = $topbar.outerHeight();
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

    let headerHeight = $topbar.outerHeight();
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
