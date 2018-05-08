
const fetchBoardGames = function () {
  $.getJSON( 'https://api.magicthegathering.io/v1/cards?random=true&pageSize=20' ).done( function ( info ) {

    info.cards.forEach( function ( card ) {

      const $image = $( '<img>' );
      $image.attr( 'src', card.imageUrl );
      $image.css( 'margin-bottom', '10px' );

      $( '#cards' ).prepend( $image );

    } );
  } );
}

$( document ).ready( function () {
  fetchBoardGames();
  $( 'button' ).first().on( 'click', fetchBoardGames );
} );
