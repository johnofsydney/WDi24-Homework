$( document ).ready( function () {
  setInterval( fetchISSLocation, 1000 );
});

const fetchISSLocation = function () {

  $.getJSON( 'http://api.open-notify.org/iss-now.json' ).done( function ( info ) {
    const issPosition = { lat: 0, lng: 0 };
    const latitude = info.iss_position.latitude;
    const longitude = info.iss_position.longitude;

    issPosition.lat = parseFloat( latitude );
    issPosition.lng = parseFloat( longitude );
    // console.log( issPosition );

    const $display = $( '#display' );
    $display.html( `<p>${ latitude }, ${ longitude }</p>` );

    updateMap( issPosition );
  });
  // console.log( issPosition );
}

const updateMap = function ( issPosition ) {
  map.panTo( issPosition );
  marker.setPosition( issPosition );
}

///////////////////////////////////////////////////////////////////////////////
// Google Maps initialisation

function initMap() {
  const issPosition = fetchISSLocation();
  map = new google.maps.Map( document.getElementById('map'), {
    zoom: 4,
    center: issPosition
  });

  const image = {
    url: 'satellite.png',
  };

  marker = new google.maps.Marker({
    position: issPosition,
    map: map,
    icon: image
  });
}
