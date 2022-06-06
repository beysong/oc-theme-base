(function (Swiper) {
  var swiper = new Swiper(".commonSwiper", {
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
  });

  var mainSlider = new Swiper(".mainSwiper", {
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
  });

})(Swiper);
