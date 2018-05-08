// console.log( $.fn.jquery, _.VERSION );

const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
let pageNum = 1;
let query;
let lastPage = false;

const searchFlickr = function (term) {
  if ( lastPage ) { return; }

  console.log( `Searching Flickr for ${ term }` );
  // Fetch images from Flickr using Ajax
  $.getJSON(flickrURL, {
    method: "flickr.photos.search",
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    text: term , // what we're actually searching for
    page: pageNum++,
    format: "json" })  // flickr's api is old, gives xml by default
  .done(showImages)
};

const showImages = function (results) {
  console.log( results );

  if (results.photos.page >= results.photos.pages) {
    lastPage = true;
    $('#loading').addClass('hidden');
  }
  _(results.photos.photo).each(function (photoInfo) {
    // create a new image tag, set source
    const photoURL = generateURL(photoInfo, 'q'); // q = 150px square
    const $img = $('<img/>', {src: photoURL, class: 'grid-cell'});  // create and set attr at same time
    // create new anchor tag, set href
    const largePhotoURL = generateURL(photoInfo, 'h'); // h = large
    const $a = $('<a>', {href: largePhotoURL, target: '_blank'});
    // append
    $img.appendTo($a);
    $a.appendTo('#images');  // or $('#images').append($img);
  });
};

const generateURL = function (photo, size) {
  return [
    'http://farm',
    photo.farm,
    '.static.flickr.com/',
    photo.server,
    '/',
    photo.id,
    '_',
    photo.secret,
    `_${size}.jpg`  // e.g. q is 150px square, h is large 1600px on longest side
  ].join('');
};


// *********** DOC READY ***************
$(document).ready(function () {
  // ON SUBMIT
  $('#search').on('submit', function (e) {
    e.preventDefault();
    $('#loading').removeClass('hidden');
    // Clear previous images
    $('#images').empty();
    // Reset page number
    pageNum = 1;
    lastPage = false;
    query = $('#query').val();
    searchFlickr( query );
  });
  // ON SCROLL
  $(window).on('scroll', _.throttle(function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom > 500) {
      return; // don't do anything until we are within 600px of bottom of page; n.b could pick any number, 600 not nec ideal
    }
    // console.log( 'nearing the bottom' );
    searchFlickr( query );
  },
  700 ));
});
