export default () => {
   function randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
   }
   let timerIdOnline = setInterval(function() {
      $('.online').html(randomInteger(40, 50));
   }, 7000);
   let timerIdBusy = setInterval(function() {
      $('.busy').html(randomInteger(20, 30));
   }, 3000);
};