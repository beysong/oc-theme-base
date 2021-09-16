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
