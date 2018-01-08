const fetchWeather = function(e){
  e.preventDefault();


  const cityName = $('#query').val(); //query is for the box to enter the city
  // console.log(cityName);
  $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=9fe2b01a852b0c363e69020a110eab45`).done(function
    (info) {
    const temp = info.main.temp;
    // console.log(temp);
    $('body').append(`<p> ${temp}</p>`)

  })
};

$(document).ready(function() {
  $('#city-search').on('submit',fetchWeather);
});
