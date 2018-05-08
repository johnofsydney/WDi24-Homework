// Arrays!
//
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.
//
// var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
// var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];
//
// var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];
//
//     Create an array of every five numbers between 30 and 101
//     Turn bumpyArr into one flat array (no nested arrays)
//     Remove all of the falsey elements in the uncompactedArr
//     Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0
//     Find the index of the first element in numbers that is over 7 and is even
//     Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];
var arrayOfArrays = [ [ 1, 25, 100 ], [ 1, 14, 25 ], [ 24, Infinity, -0 ] ];
var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

const fifths = _.range( 30, 101, 5);
console.log( 'fifths:', fifths );

const flattened = _.flatten( bumpyArr );
console.log( 'flattened:', flattened );

const compacted = _.compact( uncompactedArr );
console.log( 'compacted:', compacted );

const unique = _.uniq( _.flatten( arrayOfArrays ) );
console.log( 'unique:', unique );

console.log( _( numbers ).find( function ( num ) { return num > 7 && ( num % 2 === 0 ) } ) );

const object = _.object(_.unzip(arrToTransform))
console.log( object );
