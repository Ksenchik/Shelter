// burger menu 
const burger = document.querySelector(".burger");
      nav = document.querySelector('.nav-links');
      links = document.querySelectorAll(".nav-links li");

function slider(){
   burger.addEventListener('click', () => {

      nav.classList.toggle('nav-active');

      burger.classList.toggle('toggle');
      links.forEach((link, index) => {
         if(link.style.animation){
            link.style.animation = '';
         }else{
            link.style.animation = `navLinksFade .5s ease forwards ${index/7 + 0.3}s`
         }
      })
   })
}

slider();
// burger menu finish

// carousel
    /* этот код помечает картинки, для удобства разработки */
    let i = 1;
    for(let li of carousel.querySelectorAll('.carousel-item')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;top:0;margin: 0 45px;"></span>`);
      i++;
    }

    /* конфигурация */
    let width = 270; // ширина картинки
    let count = 3; // видимое количество изображений

    let list = carousel.querySelector('.carousel-container');
    let listElems = carousel.querySelectorAll('.carousel-item');

    let position = 0; // положение ленты прокрутки

    carousel.querySelector('.prev').onclick = function() {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };