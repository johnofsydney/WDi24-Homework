const searchFlickr = function (term) {
  // console.log('search flickr for:', term);
/// fetch images from flickr using AJAX
  const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
  $.getJSON(flickrURL, { //these parameters are going to be put into the url after customization from user input
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term, //what we are searching for
    format: 'json'
  }).done(showImages);
}

const showImages = function (results) {
  console.log(results);
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
      '_q.jpg' // Change 'q' for different sizes e.g. 'm' gives you a larger image
    ].join('');
  }

  _(results.photos.photo).each(function (photoInfo) {
    const photoURL = generateURL (photoInfo);
      //create new image
      const $image = $( '<img/>', {src: photoURL});
      $('#images').append($image)
    });
  }

$(document).ready(function () {
  $('#search').on('submit', function (e) {
    e.preventDefault();
    const query = $('#query').val();
    // console.log(query);
    searchFlickr(query);
  });

  $(window).on('scroll', _.debounce(function () {
    // const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    // console.log(scrollBottom);
    // if (scrollBottom > 600 ) {
    //   return; //Dont do anything until we are within 600 pixels of bottom of page
    // }
    // console.log('nearing bottom');
    // your code here
    const query = $('#query').val();

    let scrollTop = $(window).scrollTop();
    let windowHeight = $(window).height();
    let bodyHeight = $(document).height() - windowHeight;
    let scrollPercentage = (scrollTop / bodyHeight);
    // console.log(scrollPercentage);
    if (scrollPercentage > 0.9) {
      searchFlickr(query)
    };
  }, 50));
});
