export default () => {
  $(document).ready(function () {
    $('.slider-second').slick({
      infinite: true,
      dots: true,
      rows: 1,
      slidesPerRow: 2,
      arrows: true,
      draggable: true,
      speed: 300,
      fade: true,
      cssEase: 'linear',
      autoplay: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          rows: 2,
          slidesPerRow: 1
        }
      }]
    });
  });

};
