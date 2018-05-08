
const fetchBoardGames = function () {
  $.getJSON( 'https://bgg-json.azurewebsites.net/hot' ).done( function ( info ) {
    info.forEach( function ( game ) {
      const $link = $( '<a>');
      $link.attr( 'href', `https://boardgamegeek.com/boardgame/${ game.gameId}/${ game.name }` )
      $link.attr( 'target', '_blank')

      const $image = $( '<img>' );
      $image.attr( 'src', game.thumbnail );
      $image.css( 'margin-bottom', '10px' );

      $link.append( $image )
      $( '#board-games' ).append( $link );
    });
  } );
}

$( document ).ready( fetchBoardGames );
