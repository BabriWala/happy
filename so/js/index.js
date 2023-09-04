$('.js-btn-modal').on('click', function(){
    $('#overlay').fadeIn();
    var id = $(this).data('id');
    $('.js-modal[data-id="modal' + id + '"]').fadeIn();
  });
  
  $('.js-close-btn').on('click', function(){
    $('#overlay').fadeOut();
    $('.js-modal').fadeOut();
  });
  $('#overlay').on('click', function(){
    $('#overlay').fadeOut();
    $('.js-modal').fadeOut();
  });
  