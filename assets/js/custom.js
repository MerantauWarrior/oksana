$( document ).ready(function() {

  //mobile navigation
  $('.m-nav').on('click', function () {
    $('.navigation').slideToggle();
    $(this).toggleClass('m-nav_opened');
  });
  //contacts tabs
  $('.contacts-tabs__link').on('click', function (e) {
    e.preventDefault();
    var c2show = $(this).attr('href');
    $('.contacts-tabs__link').removeClass('contacts-tabs__link_active');
    $(this).addClass('contacts-tabs__link_active');
    $('.contacts-tabs__content').hide();
    $('.contacts-tabs__content'+c2show).show();
  });
  //phone mask
  $('input[type="tel"]').mask("+7(999) 999-9999");
  //modal windows
  $('.js-modal').on('click', function (e) {
    e.preventDefault();
    var mName = $(this).attr('href');
    $('body').addClass('body-ovh');
    $('.modal').show();
    $('.modal-window'+mName).show();
  });
  $('.modal-window__close').on('click', function () {
    $('.modal').hide();
    $('.modal-window').hide();
    $('body').removeClass('body-ovh');
  })

});

(function($){
  $(window).on("load",function(){
    $(".modal-window-list, .modal-window-countries").mCustomScrollbar();
  });
})(jQuery);