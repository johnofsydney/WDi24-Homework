console.log("connected to main.js");
state = {}
  state.IPAddress = ""
  state.city = ""
  state.longlat = ""



const goNASA = function(searchDate) {
  console.log("Function goNASA: " + searchDate);

  //
  // const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';
  //
  // $.getJSON(flickrURL, {
  //   method: 'flickr.photos.search',
  //   api_key: '2f5ac274ecfac5a455f38745704ad084',
  //   text: term,
  //   format: 'json',
  //   page: state.page++
  // }).done(showImages);

  const showAsteroidData = function(results) {
    $('#nearBodies').html("")
    let descriptionHTML = []
    // console.log(results, searchDate);
    nearBodies = results.near_earth_objects[searchDate]
    // console.log(nearBodies);
    _.each(nearBodies, function(b) {
      descriptionHTML = []
      // console.log(b.name);
      // console.log(b.is_potentially_hazardous_asteroid);
      // console.log(b.estimated_diameter.meters.estimated_diameter_max);
      // console.log(b.close_approach_data[0].miss_distance.kilometers);
      // console.log(b.close_approach_data[0].relative_velocity.kilometers_per_hour);
      descriptionHTML.push("<h2>Asteroid Name: " + b.name + "</h2>")
      descriptionHTML.push("<ul>")
      descriptionHTML.push("<li>Estimated Diameter (metres): " + b.estimated_diameter.meters.estimated_diameter_max + "</li>")
      descriptionHTML.push("<li>Missed earth by (kilometres): " + b.close_approach_data[0].miss_distance.kilometers + "</li>")
      descriptionHTML.push("<li>Velocity (km/h)): " + b.close_approach_data[0].relative_velocity.kilometers_per_hour + "</li>")
      descriptionHTML.push("</ul>")
      if (b.is_potentially_hazardous_asteroid) {
        descriptionHTML.push("<strong>This asteroid is potentially hazardous</strong>")
      }
      $('#nearBodies').append(descriptionHTML.join(""))
    });
  }

  // getting asteroid data
  // GET https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY
  // https://api.nasa.gov/api.html#NeoWS
    const nearAsteroidsURL = "https://api.nasa.gov/neo/rest/v1/feed";
    $.getJSON(nearAsteroidsURL, {
      start_date: searchDate,
      api_key: "Bft18SBl4q8EMURBpzeL9hiHyg8Inws2tJdtSbTn"
    }).done(showAsteroidData);
}


const goLocal = function (yourIP) {
  console.log("inside goLocal. arg is " + yourIP);

  // $.getJSON("http://jsonip.com/?callback=?", function (data) {
  //   console.log(data);
  //   alert(data.ip);
  // });


  const showLocationData = function (localData) {
    let locMessage = []
    console.log("showlocation has been called");
    console.log(localData.city, localData.loc);
    state.longlat = localData.loc
    locMessage.push("<P>Your IP is ")
    locMessage.push(yourIP)
    locMessage.push(" Estimated location is: ")
    locMessage.push(localData.city)
    locMessage.push("</p><ol>")
    locMessage.push("<li>IP Address sourced from http://jsonip.com/ and then passed to</li>")
    locMessage.push("<li>http://ipinfo.io/ for City and Long/Lat</li>")
    locMessage.push("<li>ready to send long and lat (" + state.longlat + ") to ...</li>")

    $('#nearByThings').html(locMessage.join(""))
    $('#searchLongLat').val(state.longlat)

  }

  const getLocalURL = "http://ipinfo.io/" + yourIP + "?token=725b75cbc0fe67"
  $.getJSON(getLocalURL).done(showLocationData)




  // Welcome to http://ipinfo.io, and thank you for signing up.
  //
  // Your API access token is: 725b75cbc0fe67
  //
  // You should include this as the "token" URL parameter on all requests to our API. Here are some examples:
  //
  // http://ipinfo.io/?token=725b75cbc0fe67
  // http://ipinfo.io/8.8.8.8?token=725b75cbc0fe67
  //
  //
}

const goWeather = function (longLat) {

  const showStuff = function (weatherData) {
    weatherInfo = []
    console.log("show stuff started ");
    console.log(weatherData);
    weatherInfo.push("<h2>Weather Information</h2><ul>")
    weatherInfo.push("<li>Current Temperature: " + (weatherData.main.temp -273))
    weatherInfo.push("</li><li>Humidity: " + weatherData.main.humidity)
    weatherInfo.push("</li><ul>")
    $('#localWeather').html(weatherInfo.join(""))

    // debugger;
  }

  console.log("go westher I';m inside you", longLat);
  // "openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22"
  const weatherURL = "http://api.openweathermap.org/data/2.5/weather"
  // ?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22"
  $.getJSON(weatherURL, {
    lat: longLat.split(",")[0],
    lon: longLat.split(",")[1],
    appid: "581d9972500293befb87f569b34d50f9"
  }).done(showStuff)
  // $.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=Sydney&appid=581d9972500293befb87f569b34d50f9").done(showStuff)
}





const getIP = function () {

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    console.log('readyState', xhr.readyState);
    // Ignore all the readyStates except 4 (i.e. completed/done)
    if (xhr.readyState !== 4) {
      return;
    }

    const info = JSON.parse( xhr.response ); // Convert the string object into a real object.
    state.IPAddress = info.ip

  }
  xhr.open('GET', 'http://jsonip.com/');
  xhr.send(); // Asynchronous

  // console.log('fetchFact is done');
};






$(document).ready(function(){
  console.log("doc is loaded");
  getIP()

  $('#searchForm').on('submit', function (event) {
    event.preventDefault();
    console.log("button clicked");
    const dateToSearch = $('#searchDate').val();
    goNASA(dateToSearch)
  })

  $('#searchPlaceForm').on('submit', function (event) {
    event.preventDefault();
    console.log("button clicked");
    const placeToSearch = $('#searchPlace').val();
    goLocal(state.IPAddress)
  })

  $('#searchWeatherForm').on('submit', function (event) {
    event.preventDefault();
    console.log("button clicked");
    const longLatToSearch = $('#searchLongLat').val();
    goWeather(longLatToSearch)
  })



})
