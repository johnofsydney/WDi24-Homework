// The Cat Walk
//
// Who needs Milan when you have JavaScript?
//
// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
//
// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started,
 // by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px").
// So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead.
 // They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing,
// keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.




// const catWalkLeft = function () {
//   let currentLeft = parseInt(img.style.left);
//   let moveRight = currentLeft + 10 ;
//   img.style.left = moveRight + "px";
//
//   //When it gets to the end of the screen
//   if (currentLeft >= (window.innerWidth - img.width)) {
//     // clearInterval(fadeTimer);
//     img.style.left = "0px";
//   }
//
//   // fadeTime = setInterval(catWalkRight, 50);
// };
//
// // setInterval(catWalkLeft, 50);
// // setInterval(catWalkRight, 50);
//
// let fadeTimer = window.setInterval(catWalkLeft, 50);
const img = document.querySelector("img");
img.style.left = "0px";
let walkRight = true;

const catWalk = function () {
  let currentLeft = parseInt(img.style.left);

  //If walking right and not at max width, keep walking right
  if (walkRight && (currentLeft >= window.innerWidth - img.width)) {
    walkRight = false;
    img.style.transform = "scaleX(-1)";
  };

  //If you get to the end point, transform image


  //If walking left and not at left side, keep walking left
  if (!walkRight && (currentLeft <= 0)) {
    walkRight = true;
    img.style.transform = "scaleX(1)";
  };


  //To move right and left
  if (walkRight) {
    img.style.left = (currentLeft + 10) + "px";
  } else {
    img.style.left = (currentLeft - 10) + "px";
  };
};

setInterval(catWalk, 100);
