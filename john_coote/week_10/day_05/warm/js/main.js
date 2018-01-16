console.log("connected");

// h = window.innerHeight;
// w = window.innerWidth;


const drawRectangle = function (x, y) {
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");

  ctx.fillRect(x, y,100,100);
}


const move = {
  up: function() {
    console.log("up");
    drawRectangle(20,10)
  },
  down: function() {
    console.log("down");
  },
  left: function() {
    console.log("left");
  },
  right: function() {
    console.log("right");
  }
}


$(document).ready( function() {
  console.log("ready");

  drawRectangle(20, 20)


  document.addEventListener('keypress', (event) => {
    const keyName = event.key;

    console.log(keyName);
    if (keyName === "w") {
      move.up()
    } else if (keyName === "s") {
      move.down()
    } else if (keyName === "a") {
      move.left()
    } else if (keyName === "d") {
      move.right()
    } else {
      // do nothing
    }

  });



})
