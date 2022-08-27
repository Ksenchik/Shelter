
// burger
const menuButton = document.querySelector(".header__burger");
const menuButton1 = document.querySelector(".header__menu");
const contentBody = document.querySelector("body");

menuButton.onclick = function () {
   menuButton.classList.toggle("active");
   menuButton1.classList.toggle("active");
   contentBody.classList.toggle("lock");
}
menuButton1.onclick = function () {
   menuButton.classList.remove("active");
   menuButton1.classList.remove("active");
   contentBody.classList.remove("lock");
}
// burger menu finish

// carousel
$(document).ready(function(){
   $('.slider').slick({
      // mobileFirst: true,
      arrows: false,
      slidesToShow: 3,
      speed: 100,
      // variableWidth: true,
      responsive: [
         {
           breakpoint: 1000,
           settings: {
             slidesToShow: 2,
           }
         },
         {
           breakpoint: 730,
           settings: {
             slidesToShow: 1,
           }
         }
      ]
   });
});