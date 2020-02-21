export default () => {
  $('.composition__element').on('click', function () {
      if ($(this).find('.composition__element--btn').html() === '+') {
          $('.composition__element').removeClass('active');
          $('.composition__element').find('.composition__element--btn').html('+');
          $(this).find('.composition__element--btn').html('−');
          
      } else {
          $(this).find('.composition__element--btn').html('+');
          
      }

      $(this).toggleClass('active');
  });


 };

  
