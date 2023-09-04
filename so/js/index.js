$('.js-btn-modal').on('click', function(){
    $('#overlay').fadeIn();
    $('.js-modal').fadeIn();
  });
  
  $('.js-close-btn').on('click', function(){
    $('#overlay').fadeOut();
    $('.js-modal').fadeOut();
  });
  $('#overlay').on('click', function(){
    $('#overlay').fadeOut();
    $('.js-modal').fadeOut();
  });
  