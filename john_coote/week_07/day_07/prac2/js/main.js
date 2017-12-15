

console.log("connected");
state = {}
state.long = 0
state.lat = 0



const displayCoords = function () {
  $('#coords').html(state.long + ", " + state.lat)
  marker.setPosition ( {
    lat: parseFloat(state.lat),
    lng: parseFloat(state.long)
  })
}



const updateCoords = function (info) {
  state.long = info.iss_position.longitude
  state.lat = info.iss_position.latitude
  displayCoords()
}

const getISS = function () {
  $.getJSON("http://api.open-notify.org/iss-now.json").done(updateCoords)
}


let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 3
  });
  marker = new google.maps.Marker ({
    position: {lat: 0, lng: 0},
    map: map,
    label: "ISS"
  })
}


const getTrainInfo = function () {
  $.getJSON("https://api.transport.nsw.gov.au/v1/gtfs/vehiclepos/")
}



$(document).ready( function () {
  console.log("ready for action");


  window.setInterval(getISS, 2000);

  console.log("does this ever happen");

})


// https://developers.google.com/maps/documentation/javascript/tutorial

// https://api.transport.nsw.gov.au/v1/gtfs/vehiclepos/sydneytrains
