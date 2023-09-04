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



$('.js-btn-profile-modal').on('click', function(){
    $('#overlay').fadeIn();
    $('.js-profile-modal').fadeIn();
  });
  
  $('.js-profile-close-btn').on('click', function(){
    $('#overlay').fadeOut();
    $('.js-profile-modal').fadeOut();
  });
  $('#overlay').on('click', function(){
    $('#overlay').fadeOut();
    $('.js-profile-modal').fadeOut();
  });
  