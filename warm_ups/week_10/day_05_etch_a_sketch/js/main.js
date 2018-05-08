let $canvas, context;

const draw = {

  pixel: {
    x: 150,
    y: 150,
    size: 10,
    hue: 0
  },

  render: function(){

    context.fillStyle = " hsla( " + this.pixel.hue + ", 100%, 50%, 1 ) "

    context.fillRect( draw.pixel.x, draw.pixel.y, draw.pixel.size, draw.pixel.size );

    this.pixel.hue += 3;

  },

  move: function( e ){
    if( e.key === "w" && this.pixel.y - this.pixel.size >= 0 ){
      this.pixel.y -= this.pixel.size;
    } else if ( e.key === "a" && this.pixel.x - this.pixel.size >= 0 ){
      this.pixel.x -= this.pixel.size;
    } else if ( e.key === "s" && this.pixel.y + this.pixel.size < $canvas.height ){
      this.pixel.y += this.pixel.size;
    } else if ( e.key === "d" && this.pixel.x + this.pixel.size < $canvas.width ){
      this.pixel.x += this.pixel.size;
    } else {
      return;
    }
    this.render();
  }

};

window.onload = function(){

  $canvas = document.querySelector( 'canvas' );

  context = $canvas.getContext('2d');

  draw.render();

  document.querySelector('button').onclick = function(){

    context.clearRect( 0, 0, $canvas.width, $canvas.height );

  }

};

window.onkeypress = function( event ){
  draw.move( event )
};
