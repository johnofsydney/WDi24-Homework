console.log("google places API");

let map;
let infowindow;
let place;


function initMap(place) {

  map = new google.maps.Map(document.getElementById('map'), {
    center: place,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  let service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: place,
    radius: 500,
    type: ['store']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  let placeLoc = place.geometry.location;
  let marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}



  function getLatLng( event ) {
    event.preventDefault();
    const address = $('#query').val();
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          let latitude = results[0].geometry.location.lat();
          let longitude = results[0].geometry.location.lng();

          initMap( { lat: latitude, lng: longitude} );
        }
    })
  }

$(document).ready(function() {
  $('#place-search').on('submit', getLatLng);

  // const getPlace = function (e) {
  //   e.preventDefault();
  //
  //   $.getJSON(`https://maps.googleapis.com/maps/api/js?key=AIzaSyB9jCQyBy9GVlbnZOyuTyRv57EznuBqRDc&libraries=places:${place }`).done(getLatLng).fail(function() {
  //     alert('something went wrong, please try again')
  //   })
  //
  // // on submit
  //   // get the location from the text field
  //   // use the geocode API to find the latitude/long
  //     // show the map with that lat/long
  // }

});
