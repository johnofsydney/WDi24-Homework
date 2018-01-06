//checking if jquery and underscore are linked
// console.log($.fn.jquery, _.VERSION);

var page = 1;
var lastPage = false;

const searchFlickr = function (term) {
  console.log('Searching flickr for:', term);

//Fetch images from Flickr using AJAX
const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

//this function will put the keys (eg. method, text etc) below into the URL so less errors
//much neater than interpolation
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    format: 'json',
    page: page++
  }).done(showImages).done( function ( results ) {
    if (results.photos.pages <= page ) {
      lastPage = true;
    }
  });
}



const showImages = function (results) {
  console.log(results);
  //flickr doesn't give you a URL for each photo in api search so you need to create this function to build the image URL each time. Last step is to join it into one url:
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
      '_q.jpg' // Change 'q' for different sizes, look at documentation to change the size
    ].join('');
  }

  _(results.photos.photo).each(function (photoInfo) {
    const photoURL = generateURL(photoInfo);
    //create a new images
    //set the image src to be the photoUrl
    const $img = $('<img/>', {src: photoURL});
    //append photo to page
    $img.appendTo('#images'); // OR you can do $('#images').append($img);
  });
}



$(document).ready(function () {
  page = 1;
  let query = '';
  console.log(page)
  $('#search').on('submit', function (e) {
    e.preventDefault();
    // console.log('form submitted');

    query = $('#query').val();
    // console.log(query);
    $('#images').empty();
    page = 1;
    lastPage = false;
    searchFlickr(query);
    console.log('requested');
  });


  let throttled = _.throttle(searchFlickr, 1000, {trailing: false});

//scroll event to see how often we should make a request to Flickr to load more images and create an infinite scroll
  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    if (lastPage) {
      return;
    }

    if (scrollBottom > 300) {
      return; // Don't do anything until we are within 300 pixels of the bottom of the page.
    }
      throttled(query);
  });
})
