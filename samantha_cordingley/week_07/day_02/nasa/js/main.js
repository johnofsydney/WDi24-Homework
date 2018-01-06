console.log("working");

const position = function() {
  console.log('you clicked the button');
  $.get(`http://api.open-notify.org/iss-now.json`).done(function (info) {
    const latitude = parseFloat(info.iss_position.latitude);
    const longitude = parseFloat(info.iss_position.longitude);

    // console.log(info);
    console.log(`The current latitude is: ${latitude}`);
    console.log(`The current longitude is: ${longitude}`);

    $('#lat').text(latitude);
    $('#long').text(longitude);


    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: latitude, lng: longitude},
      zoom: 3,
      mapTypeControl: false,
      mapTypeId: 'satellite'
    });
    $("#wherenow").css("opacity", "0.8");
    $("#coordinates").text("CURRENT COORDINATES: ");



    marker = new google.maps.Marker({
          position: {lat: latitude, lng: longitude},
          map: map,
          icon: { url: 'images/656.png'
         }
    });

  })
};


    $(document).ready(function () {
      $('#wherenow').on('click', position);
    });
