$(function () {
  $('btn_menu_b').on('click', function () {

    $('menu_b').slideToggle(300, function () {

      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    });
  });
});
$(function () {
  $('.btn_menu').on('click', function () {

    $('.menu').slideToggle(300, function () {

      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }

    });

  });
});


var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);
 
function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
