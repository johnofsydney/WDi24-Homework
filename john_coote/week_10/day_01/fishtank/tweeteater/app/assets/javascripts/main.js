console.log("connected");


//
// mercuryX = (a * (Math.sin(mercuryTime)) + screenCentreX - 50);
// mercuryY = (a * (Math.cos(mercuryTime)) + screenCentreY - 50);
//
// planets.mercury.img.offset({left: mercuryX, top: mercuryY})

const windowHeight = window.innerHeight // approx 780
const windowWidth = window.innerWidth // approx 1400
const screenCentreX = windowWidth / 2
const screenCentreY = windowHeight / 2



$(document).ready( function() {
  console.log("ready");

  $('.fish').each(function() {
    console.log("fish");
    l = Math.floor(Math.random() * windowWidth) + 1
    t = Math.floor(Math.random() * windowHeight) + 1

    $(this).offset({left: l, top: t})
  })

})

// $( "li" ).each(function() {
//   $( this ).addClass( "foo" );
// });
//
//
// $('.fish').each() {
//
// }
