// console.log('objects');
//
var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
}
// Multiply each value in objectToMap by a random number and return an object with the changed values

let a = _.mapObject(objectToMap, function( value, key ) {
  return value * _.random(0,10);
});
console.log(a);

// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]

console.log(_.pairs(objectToMap));

// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }

console.log(_.invert(objectToMap));

// Remove the "start" key from objectToMap in two different ways
console.log(_.omit(objectToMap, "start"));

console.log(_.pick(objectToMap, "middle", "end"));
