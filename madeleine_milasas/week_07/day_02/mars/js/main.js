const fetchMars = function (e) {
  e.preventDefault();

  // clear previous color statuses
  $('#curiosity-alert').attr('class', '');
  $('#opportunity-alert').attr('class', '');

  // get the query value
  const date = $('#query').val();   // yyyy-mm-dd

  // breakout functions for no image results
  const noCuriosity = function () {
    $('#curiosity-alert').html( '* No available images from <em>Curiosity</em> on this date.' );
    $('#curiosity-image').attr( { src: '', alt: '' } ); // remove prev image
    $('#curiosity-alert').attr('class', 'fail');
  };

  const noOpportunity = function () {
    $('#opportunity-alert').html( '* No available images from <em>Opportunity</em> on this date.' );
    $('#opportunity-image').attr( { src: '', alt: '' } ); // remove prev image
    $('#opportunity-alert').attr('class', 'fail');
  };

  // GETS
  $.ajax(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${ date }&api_key=9iGkM4XpqNHAJL5c7cSp4SBHDaLlNpDZJClwHlfz`)
    .done( function (rover) {
      if ( rover.photos.length > 0 ) {
        $('#curiosity-alert').text( 'Curiosity' );  // show name, remove any prev alert
        const marsImage = rover.photos[0].img_src;
        $('#curiosity-image').attr('src', marsImage);
        $('#curiosity-image').attr('alt', 'Image from the Curiosity Rover');
        $('#curiosity-alert').attr('class', 'complete');
      } else {
        noCuriosity();
      }
    }).fail( function () {
        noCuriosity();
    });

    $.ajax(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=${ date }&api_key=9iGkM4XpqNHAJL5c7cSp4SBHDaLlNpDZJClwHlfz`)
      .done( function (rover) {
        if ( rover.photos.length > 0 ) {
          $('#opportunity-alert').text( 'Opportunity' );  // show name, remove any prev alert
          const marsImage = rover.photos[0].img_src;
          $('#opportunity-image').attr('src', marsImage);
          $('#opportunity-image').attr('alt', 'Image from the Opportunity Rover');
          $('#opportunity-alert').attr('class', 'complete');
        } else {
          noOpportunity();
        }
      }).fail( function () {
        noOpportunity();
      });

}; // end fetchMars



///************    EVENT HANDLER ****************//////
$(document).ready( function () {
  $('#date-search').on('submit', fetchMars );
});
