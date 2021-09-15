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
        time: 1000,
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
                responsiveClass: true,
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

            fixedContentPos: false,
        });

        var time = 7; // time in seconds

        var $progressBar, $bar, $elem, isPause, tick, percentTime;

        $("#project-slider")
            .find(".owl-carousel")
            .owlCarousel({
                autoplaySpeed: 500,
                navSpeed: 500,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1024: {
                        items: 3,
                    },
                    1200: {
                        items: 4,
                    },
                },
                margin: 10,
                nav: true,
                dots: false,
                loop: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>",
                ],
                // onInitialized: progressBar,
                // onTranslated: moved,
                // onDrag: pauseOnDragging
                //autoHeight : true,
                // transitionStyle: "fadeUp"
            });

        //Init the carousel
        $("#main-slider")
            .find(".owl-carousel")
            .owlCarousel({
                autoplaySpeed: 500,
                navSpeed: 500,
                items: 1,
                nav: true,
                dots: true,
                loop: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>",
                ],
                onInitialized: progressBar,
                onTranslate: moved,
                onDrag: pauseOnDragging,
                // slideTransition: 'fadeIn',
                animateOut: "fadeOut",
                animateIn: "fadeIn",
                //autoHeight : true,
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
        }

        //Init progressBar where elem is $("#owl-demo")
        function progressBar(elem) {
            $elem = elem;
            //build progress bar elements
            buildProgressBar();
            //start counting
            start();
        }

        //create div#progressBar and div#bar then append to $(".owl-carousel")
        function buildProgressBar() {
            $progressBar = $("<div>", {
                id: "progressBar",
            });
            $bar = $("<div>", {
                id: "bar",
            });
            $progressBar.append($bar).appendTo($elem.target);
        }

        function start() {
            //reset timer
            percentTime = 0;
            isPause = false;
            //run interval every 0.01 second
            tick = setInterval(interval, 10);
        }

        function interval() {
            if (isPause === false) {
                percentTime += 1 / time;
                $bar.css({
                    width: percentTime + "%",
                });
                //if percentTime is equal or greater than 100
                if (percentTime >= 100) {
                    // console.log(999)
                    //slide to next item
                    $($elem.target).trigger("next.owl");
                }
            }
        }

        //pause while dragging
        function pauseOnDragging() {
            isPause = true;
        }

        //moved callback
        function moved() {
            //clear interval
            clearTimeout(tick);
            //start again
            start();
        }

        //Init the adv carousel
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
            autoHeight: true,
            // animateOut: false,
            // animateIn: false
        });
    });
})(jQuery);

// const main = (function ($) {
//     const init = function () {
//         console.log("???");
//     };

//     return { init };
// })(jQuery);

// export default main;
