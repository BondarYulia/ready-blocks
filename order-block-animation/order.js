export default () => {

  const firstArrow = ".arrow1";
  const secondArrow = ".arrow2";
  const thirdArrow = ".arrow3";

  function arrowsAnimation(arg) {
    $(arg).removeClass("active");
    setTimeout(function () {
      $(arg).addClass("active");
    }, 1000);
  }
  setInterval(function () {
    setTimeout(function () {
      arrowsAnimation(firstArrow)
    }, 1000);

    setTimeout(function () {
      arrowsAnimation(secondArrow)
    }, 1500);

    setTimeout(function () {
      arrowsAnimation(thirdArrow)
    }, 2000);
  }, 2500);


};
