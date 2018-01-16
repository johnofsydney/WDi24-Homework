$(document).ready( function () {
  $('#add-color').on('click', function() {
    const color = $('#color').val();
    const $swatch = $('<div />').addClass('swatch').css('background-color', color);
    $swatch.appendTo('.pallette');

  })




  $('.pallette').on('click', '.swatch', function () {
    $('.selected').removeClass('selected');
    $(this).addClass('selected');

  })


  $('.canvas').on('mouseover', '.pixel', function (event) {
    console.log(event);
    if (event.shiftKey) {
      return
    }
    
    const color = $('.swatch.selected').css('background-color');
    $(this).css('background-color', color)
  })
  console.log("hello");
})
