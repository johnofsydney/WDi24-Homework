////////////////////////////////////////////////////////////////////////////////
// flickr search

// contains global variables
const state = {
  page: 1,
  requestInProgress: false,
  lastPage: false
};

const searchFlickr = function ( term ) {
  if ( state.requestInProgress || state.lastPage ) { return; }

  state.requestInProgress = true;
  // fetch images from flickr using AJAX
  const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    page: state.page++,
    format: 'json'
  }).done(showImages);
};

const showImages = function ( results ) {
  console.log( results );
  if ( results.photos.page >= results.photos.pages ) {
    state.lastPage = true;
  }
  _(results.photos.photo).each(function ( photoInfo ) {
    const photoURL = generateURL( photoInfo );
    // create a new image
    // set image source to be photoURL
    const $img = $( '<img/>', { src: photoURL } );

    // append new image to the page
    $img.appendTo( '#images' ); // $('#images').append($img); both work
  });

  state.requestInProgress = false;
};

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
    '_q.jpg' // change q for different sizes
  ].join('');
};

$(document).ready(function () {
  $('#search').on('submit', function ( e ) {
    e.preventDefault(); // stay on this page, we'll do the AJAX req ourselves

    $('#images').empty(); // empties out image container on page
    state.page = 1; // resets page to 1
    state.lastPage = false;

    const query = $('#query').val();
    searchFlickr( query );

  });

  const throttledSearchFlickr = _.throttle( searchFlickr, 6000, { trailing: false } );

  $(window).on('scroll', function () {

    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    console.log( scrollBottom );

    if ( scrollBottom > 600 ) {
      return; // dont do anything until we are within 600 pixels of page bottom
    }

    const query = $( '#query' ).val();
    throttledSearchFlickr( query );

    // code goes here

  });
});

// $(document).height(); want this to slowly grow over time
// $(window).height();
// $(window).scrollTop(); how many pixels have disappeared off the top of page
// const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
// get page 2, 3, 4, etc. for this
// do console log in show showImages
// clear out previous results of old search
// debounce and throttle underscore - useful

//window scroll event in jquery
