// ******************* OBJECT UNDERSCORE EXERCISES ************************** //

const objectToMap = {
  start:  100,
  middle: 853,
  end:    912
};


// Multiply each value in objectToMap by a random number and return an object with the changed values
console.log( `RANDOMIZE` );

const randomize = function (n) {
  return n * _.random(100);
};
const mapped = _(objectToMap).mapObject( randomize );
console.log( mapped );




// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
console.log( `OBJECT TO ARRAY` );

const arrayVersion = _(objectToMap).pairs();
console.log( arrayVersion );




// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
console.log( 'FLIP KEY VALUE PAIRS' );

const flipped = _(objectToMap).invert();
console.log( flipped );

// Remove the "start" key from objectToMap in two different ways
console.log( `REMOVE START, 2 ways` );

const omitStart = _(objectToMap).omit('start');
console.log( omitStart );

const pickOthers = _(objectToMap).pick('middle', 'end');
console.log( pickOthers );
