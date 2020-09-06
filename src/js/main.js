$(function(){

  $('.works__item-btn').on('click', function(){
    $(this).toggleClass('works__item-btn--active');
  });
  
  $('.works__item-btn').click(function(){
    if (!$(this).data('status')) {
      $(this).html('სამსახურის დატოვება');
      $(this).data('status', true);
    }
    else {
      $(this).html('დაწყება');
      $(this).data('status', false);
    }
  });


});