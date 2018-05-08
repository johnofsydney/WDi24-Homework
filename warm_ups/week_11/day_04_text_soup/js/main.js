$(document).ready(function(){

  const words = $('#words').text().split(/[ ;\-,.\n]+/);

  const $body = $('body');

  const rand = function( max ){
    return Math.floor( Math.random() * max );
  };

  const putWord = function(){
    const randomIndex = rand( words.length );
    const text = words[ randomIndex ];
    const $div = $('<div class="word">').html(text);

    $div.css({
      top: rand( window.innerHeight ) + 'px',
      left: rand( window.innerWidth ) + 'px',
      fontSize: (40 + rand(80) ) + 'px',
      color: 'rgb( ' + rand(255) + ', ' + rand(255) + ', ' + rand(255) + ')'
    });

    $div.appendTo( $body );

    $div.fadeIn(1000).fadeOut(2000), function(){
      $(this).remove();
    }
  };

  setInterval(putWord, 100);

});
