

const mainState = {
 create: function () {
   game.stage.backgroundColor = “#71c5cf ”;
 }
};

const game = new Phaser.Game(400, 490);

game.state.add( ‘main’, mainState );

game.state.start( ‘main’ );
