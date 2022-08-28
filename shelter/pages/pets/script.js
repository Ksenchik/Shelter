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
      arrows: false,
      rows: 2,
      slidesToShow: 4,
      speed: 100,      
      responsive: [
         {
           breakpoint: 1160,
           settings: {
             rows: 3,
             slidesToShow: 3,
           }
         },
         {
           breakpoint: 880,
           settings: {
             rows: 3,
             slidesToShow: 2,
           }           
         },
         {
            breakpoint: 640,
            settings: {
              rows: 3,
              slidesToShow: 1,
            }           
          }
      ]
   });

   $('.prev').click(function(event){
      $('.slider').slick('slickPrev')
   });
   $('.next').click(function(event){
      $('.slider').slick('slickNext')
   });
});