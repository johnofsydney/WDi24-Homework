// Objects!
//
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.
//
// var objectToMap = {
//   start:  100,
//   middle: 853,
//   end:    912
// }
//
//     Multiply each value in objectToMap by a random number and return an object with the changed values
//     Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
//     Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
//     Remove the "start" key from objectToMap in two different ways

console.log( 'arrays' );

var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
}

const mappedObject = _( objectToMap ).mapObject( function ( val, key ) {
  return val * _.random( 100 )
} );
console.log( 'mappedObject:', mappedObject );

const pairs = _.pairs( objectToMap );
console.log( 'pairs:', pairs );

const inverted = _.invert( objectToMap );
console.log( 'inverted:', inverted );

const omitted = _( objectToMap ).omit( 'start' );
console.log( 'omitted:', omitted );

const omittedByPredicate = _( objectToMap ).omit( function ( value, key ) {
  return key === "start";
} );
console.log( 'omittedByPredicate:', omittedByPredicate );
