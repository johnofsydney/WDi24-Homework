function initMap() {
  map = new google.maps.Map( document.getElementById('map'), {
    zoom: 4,
    center: { lat: 0, lng: 0 }
  });
  marker = new google.maps.Marker({
    position: { lat: 0, lng: 0 },
    map: map
  });
}

///////////////////////////////////////////////////////////////////////////

const fetchISSLocation = function () {

  let issPosition = { lat: 0, lng: 0 }
  const info = $.getJSON( 'http://api.open-notify.org/iss-now.json' ).done( function ( info ) {
    const latitude = info.iss_position.latitude;
    const longitude = info.iss_position.longitude;

    issPosition.lat = parseFloat( latitude );
    issPosition.lng = parseFloat( longitude );

    const $display = $( '#display' );
    $display.html( `<p>${ latitude }, ${ longitude }</p>` );
    marker.setPosition( issPosition );
    map.panTo( issPosition , animate=true );
  });
  console.log( info );
}

setInterval( fetchISSLocation, 1000 );
