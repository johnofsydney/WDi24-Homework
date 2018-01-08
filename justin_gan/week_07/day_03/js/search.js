var page = 1;
var lastPage = false;

const searchFlickr = function ( term ) {
  console.log( 'Searching Flickr for:', term );

  // Fetch images from Flickr using AJAX
  const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
  $.getJSON( flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    format: 'json',
    page: page++
  } ).done( showImages ).done( function ( results ) {
    // console.log( 'results:', results.photos.pages );
    // console.log( page );
    if ( results.photos.pages <= page ) {
      lastPage = true;
    }
    // console.log( lastPage );
  });
}

const showImages = function ( results ) {
  console.log( results );
  const generateURL = function ( photo ) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg', // Change "q" for different sizes
    ].join('');
  }

  const generatePageURL = function ( photo ) {
    return [
      'https://flickr.com/photos/',
      photo.owner,
      '/',
      photo.id
    ].join('');
  }

  _( results.photos.photo ).each( function ( photoInfo ) {
    const photoURL = generateURL( photoInfo );
    // Create a new image
    // Set the image src to be the photoURL
    const $image = $( '<img/>', { src: photoURL } );

    const webURL = generatePageURL( photoInfo );
    const $link = $( `<a></a>`, { href: webURL, html: $image, target: '_blank' } );
    // $( '#link' ).append( $image );
    // console.log( $link );
    // Append the image to the page
    $( '#images' ).append( $link );
    // debugger;
  });
}


$( document ).ready( function () {
  let query = '';
  $( '#search' ).on( 'submit', function ( e ) {
    $( '#images' ).empty();
    page = 1;
    lastPage = false;
    e.preventDefault(); // Stay on this page, we'll do the AJAX request ourselves.
    query = $( '#query' ).val();
    searchFlickr( query );
  } );

  const throttled = _.throttle( searchFlickr, 2500, { trailing: false } );

  $( window ).on( 'scroll', function () {
    const scrollBottom = $( document ).height() - $( window ).height() - $( window ).scrollTop();
    // console.log( scrollBottom );
    // console.log( lastPage );
    if ( lastPage ) {
      return; // don't do anything if we're on the last page
    }

    if ( scrollBottom > 500 ) {
      return; // don't do anything until we are within 500 pixels of the bottom of the page
    }
    // console.log( 'nearing the bottom' );
    throttled( query );
  } );
});
