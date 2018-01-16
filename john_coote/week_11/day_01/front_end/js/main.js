console.log("connected");




$(document).ready( ()=> {
  console.log("ready");

  // parralax effets
  const $bill = $('.bill');
  const $body = $('body');


  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    $bill.css('background-position-y', -(scrollTop / 3))
  })


  $(window).on('mouseover', function (e) {
    console.log(e.pageX, e.pageY);

    const size = (Math.random() * 10) + "em";
    const {pageX: x, pageY: y} = e;

    const $bubble = $('<div class="bubble"</div>').css({
      left: x,
      top: y,
      width: size,
      height:size
    }).appendTo($body);

    $bubble.animate({top: -200}, 2000, function () {
      $bubble.remove();
    });

    // setTimeout ( function () {
    //   $bubble.remove();
    // },1000)


  })


})
