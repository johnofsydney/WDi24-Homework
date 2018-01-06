'use strict';

console.log("connected");
var intPage = 1;

var scrollAction = function scrollAction() {
  var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
  if (scrollBottom > 300) {
    return;
  }
  // page reload code goes here...
  console.log(scrollBottom);
  var searchTerms = $('#searchTerms').val();
  searchFlickr(searchTerms);
};

var dbScrollAction = _.debounce(scrollAction, 200);

////////////////

var searchFlickr = function searchFlickr(term) {
  console.log('Searching Flickr for:', term);

  var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    per_page: 10,
    page: intPage,
    format: 'json'
  }).done(showImages);

  intPage++;
};

var showImages = function showImages(results) {
  console.log(results);
  var generateURL = function generateURL(photo, photoSize) {
    return ['http://farm', photo.farm, '.static.flickr.com/', photo.server, '/', photo.id, '_', photo.secret, '_', photoSize, '.jpg' // Change "q" for different sizes
    ].join('');
  };

  _(results.photos.photo).each(function (photoInfo) {
    var thumbURL = generateURL(photoInfo, "n"); // q
    var largeURL = generateURL(photoInfo, "b");
    var $img = $('<img/>', { src: thumbURL });
    // const $a = $('<a>', {href: largeURL, target: "_blank"});
    // $a.append($img)
    // $a.appendTo('#images'); // $('#images').append($img);
    $img.appendTo('#images'); // $('#images').append($img);
  });
};

///////////////


$(document).ready(function () {
  console.log("ready");

  $('#searchForm').on('submit', function (e) {
    e.preventDefault();
    var searchTerms = $('#searchTerms').val();
    $('#images').html(""); // clears any existing phtos.
    searchFlickr(searchTerms);
  });

  $(window).on('scroll', dbScrollAction);

  $('#images').on('click', 'img', function () {
    console.log("clicked");
    console.log($(this));
    console.log($(this)[0].src);

    $(this)[0].src = $(this).remove();

    // I'd like to selecxt rhe imnage that has been clicked
    // and delete it, but I can't get it right.
    // using $(this) allows the above provedure to run, but $(this) is the doucment
    // which is not ideal.
    // $('img') doesnt work at all, as if the click cant find the img, as it has been
    // generated an placed on the page. I dunno, I'm outta clueds and off to bed.
    //
  });
});