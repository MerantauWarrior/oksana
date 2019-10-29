$( document ).ready(function() {

  //mobile navigation
  $('.m-nav').on('click', function () {
    $('.navigation').slideToggle();
    $(this).toggleClass('m-nav_opened');
  });

  $('.arrow--navigation').on('click',function () {
    $('.navigation__select').toggleClass('navigation__select_opened');
  });

  //passport table order
  $('.passport-t__link').on('click', function () {
    var textVariants = $(this).data('text');
    $('#mSix').find('input[type="hidden"]').val(textVariants);
  });
  //get-set variant text
  $('.variants-item__link').on('click', function () {
    var textVariants = $(this).parent().siblings('div.variants-item__head').text();
    $('#mSix').find('input[type="hidden"]').val(textVariants);
  });

  //vShop btn
  $('.modal-window-countries__link').on('click', function () {
    var textVariant = $(this).parent().parent().find('div.modal-window-countries__name').text();
    $('#mEight').find('input[type="hidden"]').val(textVariant);
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
    if($(this).hasClass('vShop-close')){
      $('#mEight').hide();
    }else{
      $('.modal').hide();
      $('.modal-window').hide();
      $('body').removeClass('body-ovh');
    }
  });
  //modal form submit
  $("form").submit(function (event) {
    event.preventDefault();
    var $form = $(this);
    var $inputs = $form.find("input, select, button, textarea");
    var submit = $form.find("button");
    var serializedData = $form.serialize();
    console.log(serializedData);
    $inputs.prop("disabled", true);
    request = $.ajax({
      url: "send.php",
      type: "post",
      data: serializedData
    });
    request.done(function (response, textStatus, jqXHR) {
      $inputs.prop("disabled", false);
      $form.find("input, textarea").val('');
      $('body').addClass('body-ovh');
      $('.modal').show();
      $('.modal-window*').hide();
      $('.modal-window#mThanks').show();
    });
    request.fail(function (jqXHR, textStatus, errorThrown) {
      $inputs.prop("disabled", false);
      alert('Ошибка отправки! Попробуйте отправить запрос еще раз!');
    });
  });

});
//Scrollbar
(function($){
  $(window).on("load",function(){
    $(".modal-window-list, .modal-window-countries").mCustomScrollbar();
  });
})(jQuery);