console.log("connected");
let intPage = 1;



let scrollAction = function () {
  const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop()
  if (scrollBottom > 300) { return }
  // page reload code goes here...
  console.log(scrollBottom);
  const searchTerms = $('#searchTerms').val()
  searchFlickr(searchTerms)

}

let dbScrollAction = _.debounce(scrollAction, 200);

////////////////

const searchFlickr = function (term) {
  console.log( 'Searching Flickr for:', term );

  const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    per_page: 10,
    page: intPage,
    format: 'json'
  }).done(showImages);

  intPage ++
}

const showImages = function (results) {
  console.log( results );
  const generateURL = function (photo, photoSize) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_',
      photoSize,
      '.jpg' // Change "q" for different sizes
    ].join('');
  }

  _(results.photos.photo).each(function (photoInfo) {
    const thumbURL = generateURL(photoInfo, "n"); // q
    const largeURL = generateURL(photoInfo, "b");
    const $img = $('<img/>', {src: thumbURL});
    // const $a = $('<a>', {href: largeURL, target: "_blank"});
    // $a.append($img)
    // $a.appendTo('#images'); // $('#images').append($img);
    $img.appendTo('#images'); // $('#images').append($img);
  });
}


///////////////






$(document).ready(function () {
  console.log("ready");


  $('#searchForm').on('submit', function (e) {
    e.preventDefault()
    const searchTerms = $('#searchTerms').val()
    $('#images').html("") // clears any existing phtos.
    searchFlickr(searchTerms);
  })



  $(window).on('scroll', (dbScrollAction));

  $('#images').on('click', 'img', function() {
    console.log("clicked");
    console.log($(this));
    console.log($(this)[0].src);

    $(this)[0].src =
    $(this).remove()

    // I'd like to selecxt rhe imnage that has been clicked
    // and delete it, but I can't get it right.
    // using $(this) allows the above provedure to run, but $(this) is the doucment
    // which is not ideal.
    // $('img') doesnt work at all, as if the click cant find the img, as it has been
    // generated an placed on the page. I dunno, I'm outta clueds and off to bed.
    //
  })



})
