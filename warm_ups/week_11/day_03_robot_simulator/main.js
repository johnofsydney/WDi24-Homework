let robot;

$(document).ready(function(){

  const directions = ["up", "right", "down", "left"];

  const createBoard = function(){
    const $board = $('<table></table>');
    $('body').append($board);
    for ( let i = 0; i < 9; i++ ){
      const $row = $('<tr></tr>');
      $('table').append($row);
      for ( let j = 0; j < 9; j++ ){
        const $square = $('<td></td>');
        $row.append($square);
      }
    }
  };

  const Robot = function(){

    let x = 0;
    let y = 0;
    let dir = "up";

    const $bot = $('<div></div>');
    $bot.addClass('robot up');
    $('body').append($bot);

    const moveRobot = function(){
      $bot.css("top", (window.innerHeight / 2 + y * 40 - 20 ) + 'px');
      $bot.css("left", (window.innerWidth / 2 + x * 40 - 20 ) + 'px');
    };

    moveRobot();

    $(window).resize(function(){
      $bot.css("top", (window.innerHeight / 2 + y * 40 - 20 ) + 'px');
      $bot.css("left", (window.innerWidth / 2 + x * 40 - 20 ) + 'px');
    });

    const turn = function( direction ){

      $('.robot').removeClass('up down left right');

      if ( direction === "left" ){
        if ( directions.indexOf(dir) > 0 ){
          dir = directions[ directions.indexOf(dir) - 1 ];
        } else {
          dir = directions[3];
        }
      } else {
        if ( directions.indexOf(dir) < 3 ){
          dir = directions[directions.indexOf(dir) + 1 ];
        } else {
          dir = directions[0];
        }
      }
      $('.robot').addClass(dir);
    };

    const advance = function( step ){
      step = step || 1;

      if ( dir === 'up'){
        y = y - step;
      } else if ( dir === 'down'){
        y = y + step;
      } else if ( dir === 'left' ){
        x = x - step;
      } else if ( dir === 'right' ){
        x = x + step;
      }
      moveRobot();
    };

    return {
      advance,
      left: function(){
        turn("left");
      },
      right: function(){
        turn("right");
      }
    }

  }

  createBoard();
  robot = new Robot();

});

$(document).keydown(function( e ){
  if (e.keyCode == 38){
    robot.advance(1);
  }else if (e.keyCode == 37){
    robot.left();
  }else if (e.keyCode == 40){
    robot.advance(-1);
  }else if (e.keyCode == 39){
    robot.right();
  }
});
