var page = 1;
var flickrCall = false;


const searchFlickr = function (term) {
  // console.log( 'Searching Flickr for:', term );
  console.log('making request');
  const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    format: 'json',
    page:page++
  }).done(showImages).done(function (results){
    if (results.photos.pages<= page) {
      lastPage = true;
    }
  });
}

const showImages = function (results) {
  console.log( results );
  const generateURL = function (photo) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg' // Change "q" for different sizes
    ].join('');
  }

  _(results.photos.photo).each(function (photoInfo) {
    const photoURL = generateURL(photoInfo);
    const $img = $('<img/>', {src: photoURL});
    $img.appendTo('#images');// $('#images').append($img);
    flickrCall = false;
  });
}


$(document).ready(function () {

  let query ='';
  $('#search').on('submit', function (e) {
    $('#images').empty();
    page = 1;
    lastPage = false;
    e.preventDefault(); // Stay on this page, we'll do the AJAX request ourselves.
    const query = $('#query').val();
    searchFlickr( query );
  });

  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

      console.log(scrollBottom);

    if (scrollBottom > 500) {
      return; // Don't do anything until we are within 600 pixels of the bottom of the page.
    } else if ( flickrCall === false ) {
      const query = $('#query').val();
      searchFlickr( query );
      flickrCall = true;
    }
    // console.log('nearing the bottom');
    // Your code here.

  });
})
