$(function(){
$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.top-header').addClass("sticky");
}
else{
$('.top-header').removeClass("sticky");
}
});

$('.slider').slick({
prevArrow: $('.prev'),
nextArrow: $('.next'),
dots: true,
slidesToShow: 2,
responsive: [
{ 
  breakpoint: 768,
  settings: {
  slidesToShow: 1
  }

}
]
});
});
$(function(){
  $('.btn').click(function(){
    $('.popup').addClass('active')
  });
  $('.close').click(function(){
    $('.popup').removeClass('active')
  });



  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".popup.active"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.removeClass('active'); // скрываем его
    }
  });



  $('.btn_menu').click(function(){
    //$('.menu ul').toggleClass('active');
    $('.menu ul').slideToggle();
    $('.btn_menu').toggleClass('active');

  });

  $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
// $('.box').click(function(){
//     $('.box__button').addClass('active')
//   });

});





// document.getElementById("file").onchange = function() {
//     $form.trigger('submit');
     
// };




// var isAdvancedUpload = function() {
//   var div = document.createElement('div');
//   return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
// }();

// var $form = $('.box');

// if (isAdvancedUpload) {
//   $form.addClass('has-advanced-upload');
// }
