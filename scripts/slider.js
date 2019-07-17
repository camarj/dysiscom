
//Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  speed: 600,
  parallax: true,
  spaceBetween: 30,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true;
  },
  autoplay: {
    delay: 3000,
  },
});
