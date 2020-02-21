export default () => {

  const people = $('.online-people');
  const sold = $('.online-sold');
  const dynamic = $('.online-dynamic');

  function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

    function changeOnlineState() {
      people.fadeOut(1000);
      setTimeout(function () {
         sold.fadeIn(1000);
      }, 1000);
     
        
        setTimeout(function () {
          sold.fadeOut(1000);
          dynamic.html(randomInteger(27, 47));
          setTimeout(function () {
            people.fadeIn(1000);
         }, 1000);
        }, 2000);
    };

  $(document).ready(function () {
    sold.fadeOut(0);
    changeOnlineState();
    setInterval(function () {
        changeOnlineState();
    }, 4000);
  });
};









