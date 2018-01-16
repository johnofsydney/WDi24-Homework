console.log("connected");


const numberSquares = 8
gameboard = ""

for (var i = 1; i <= numberSquares; i++) {
  for (var j = 1; j <= numberSquares; j++) {
    gameboard = gameboard + `<div class="square row-${i} col-${j}"></div>`
  }
}


class Robot {
  constructor(name, facing) {
    this.name = name,
    this.facing = facing
  }

  turn(direction) {
    console.log(`${this.name} ${direction}`);
  }
}






$(document).ready( function () {
  console.log("ready");

  $('#container').append(gameboard)
})
