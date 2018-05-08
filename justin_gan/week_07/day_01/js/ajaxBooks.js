const fetchBook = function( e ) {
  e.preventDefault(); // Don't leave this page
  const title = $( '#query' ).val();

  // $.get / $.getJSON
  $.ajax(`https://www.googleapis.com/books/v1/volumes?q=title:${ title }`).done(function (info) {
    console.log( 'working' );
    const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
    const $image = $( '#cover' );
    $image.attr( 'src', cover );
  }).done(function (info) {
    const title = info.items[0].volumeInfo.title;
    const $image = $( '#cover' );
    $image.attr( 'title', title );
  }).fail(function () {
    alert( 'Something bad happend' );
  });
}

$( document ).ready( function () {
  const $form = $( '#title-search' );
  $form.on( 'submit', fetchBook );
});
