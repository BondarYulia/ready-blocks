export default () => {
    $('.nav__menu').on("click", function () {
        $('.nav__menu-open').css('opacity', '1');
        $('.nav__menu-open').css('display', 'block');
    });

    $('.close').on("click", function () {
        $('.nav__menu-open').css('opacity', '0');
        $('.nav__menu-open').css('display', 'none');
    });

    $('.close-menu').on("click", function () {
        $('.nav__menu-open').css('opacity', '0');
        $('.nav__menu-open').css('display', 'none');
    });

    $('.nav__menu-bg').on("click", function () {
        $('.nav__menu-open').css('opacity', '0');
        $('.nav__menu-open').css('display', 'none');
    });

    $( document ).ready(function() {
        
        $( 'input' ).each(function( index ) {
            $(this).val('');

          });
    });
  };
  