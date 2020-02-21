export default () => {
  $(document).ready(function () {
    $('.line-reviews__slider').slick({
      slidesToShow: 3,
      infinite: true,
      slidesToScroll: 3,
      dots: false,
      arrows: true,
      draggable: false,
      swipe: false,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            draggable: true,
            swipe: true
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            swipe: true
          }
        }
      ]
    });
  });
};
