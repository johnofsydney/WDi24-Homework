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
const move = 0
const bumpSize = 0.1




const movin = function ($d) {

  currentTop = $d.position().top
  currentLeft = $d.position().left
  currentHeight = $d.height()
  currentOpacity = $d.css('opacity')
  l = Math.floor(Math.random() * windowWidth) + 1
  t = Math.floor(Math.random() * windowHeight) + 1



  if (currentLeft > screenCentreX) {
    $d.css('left', currentLeft + ((currentLeft- screenCentreX)/1000) + move + "px")
    $d.css('opacity', currentOpacity - ((currentLeft- screenCentreX)/500000))
  } else {
    $d.css('left', currentLeft - ((screenCentreX -currentLeft)/1000)- move + "px")
    $d.css('opacity', currentOpacity - ((screenCentreX -currentLeft)/500000))
  }
  if (currentTop > screenCentreY) {
    $d.css('top', currentTop + ((currentTop - screenCentreY)/1000) + move + "px")
    $d.css('opacity', currentOpacity - ((currentTop - screenCentreY)/500000))
  } else {
    $d.css('top', currentTop - ((screenCentreY - currentTop)/1000) - move + "px")
    $d.css('opacity', currentOpacity - ((screenCentreY - currentTop)/500000))
  }

  if (currentTop > (windowHeight)) {
    $d.css('background-color', 'cyan')
    // $d.fadeOut(1)
    $d.css('left', l + "px")
    $d.css('top', t + "px")
    $d.fadeIn(10000)
  }

  if (currentTop < (-250)) {
    $d.css('background-color', 'yellow')
    // $d.fadeOut(1)
    $d.css('left', l + "px")
    $d.css('top', t + "px")
    $d.fadeIn(10000).css('opacity', 1)
  }
  if (currentLeft > (windowWidth - 1)) {
    $d.css('background-color', 'limegreen')
    // $d.fadeOut(1)
    $d.css('left', l + "px")
    $d.css('top', t + "px")
    $d.fadeIn(10000)
  }
  if (currentLeft < (-40)) {
    $d.css('background-color', 'magenta')
    // $d.fadeOut(1)
    $d.css('left', l + "px")
    $d.css('top', t + "px")
    $d.fadeIn(10000)
  }

  if (currentOpacity < 0.5) {
    // $d.css('opacity', 1)
  }

}


//
// update = () ->
//   a = requestAnimationFrame(update)
//   if a % 6 == 0
//     $(".fishbody").each () ->
//       movement $(this)


const update = function () {
  a = requestAnimationFrame(update)
  if (a % 100 === 0) {
    $('.fish').each( function () {
      movin($(this));
    })
}
}


$(document).ready( function() {
  console.log("ready");



  $('.fish').each(function() {
    // console.log("fish");
    l = Math.floor(Math.random() * windowWidth) + 1
    t = Math.floor(Math.random() * windowHeight) + 1


    $(this).offset({left: l, top: t})
    // movin($(this))

    update()

  })

})
