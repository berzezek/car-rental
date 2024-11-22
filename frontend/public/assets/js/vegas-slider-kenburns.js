$(document).ready(function () {
  $('#kenburnsSliderContainer').vegas({
    slides: [{
      src: "/assets/img/slider/1.jpg"
    }, {
      src: "/assets/img/slider/3.jpg"
    }, {
      src: "/assets/img/slider/11.jpg"
    }],
    overlay: true,
    transition: 'fade2',
    animation: 'kenburnsUpRight',
    transitionDuration: 1000,
    delay: 10000,
    animationDuration: 20000
  });
});