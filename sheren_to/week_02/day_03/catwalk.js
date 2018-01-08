console.log("Catwalk..");

const cat = document.getElementsByTagName('img')[0];
//console.log('cat');
cat.style.left = 0;
let whatever2 = 0;
let whatever = 0;
const w = window.innerWidth-296;

const catwalkReverse = function (){
  let oldPosition = parseInt(cat.style.left);
  let newPosition = oldPosition - 10;
  cat.style.left = newPosition + 'px';

  if ( newPosition === 0 ) {
  clearInterval(whatever2);
  whatever = setInterval(catwalk, 50);
  cat.style.transform = 'scaleX(1)';
  }
}
const catwalk = function() {
  let oldPosition = parseInt(cat.style.left);
  let newPosition = oldPosition + 10;

  if ( newPosition >= w ) {
     clearInterval(whatever);
     whatever2 = setInterval(catwalkReverse, 50);
     cat.style.transform = 'scaleX(-1)';
    //  newPosition = 0;
    //  console.log('ngdhgdh');
  }
   cat.style.left = newPosition + 'px';
  //  console.log(newPosition);
  //  console.log(w);
};

whatever = setInterval(catwalk, 50);
