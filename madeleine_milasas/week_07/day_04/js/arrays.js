
// ************ ARRAY UNDERSCORE EXERCISES ***********************************//

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
const uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

const arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];


// Create an array of every five numbers between 30 and 101
console.log( `EVERY FIVE NUMS 30 TO 101` );

const startArray = _.range(30, 102);
const everyFive = _(startArray).groupBy(function (num, i) {
  return Math.floor( i / 5 );
});
console.log( everyFive );





// Turn bumpyArr into one flat array (no nested arrays)
console.log( `BUMPY TO FLAT` );

const flatArr = _(bumpyArr).flatten();
console.log( flatArr );





// Remove all of the falsey elements in the uncompactedArr
console.log( `REMOVE FALSEY` );

const compactArr = _(uncompactedArr).compact();
console.log( compactArr );






// Find all of the unique elements in the following arrays
const arr1 = [ 1, 25, 100 ];
const arr2 = [ 1, 14, 25 ];
const arr3 = [24, Infinity, -0];
console.log( `FIND UNIQUE` );

const unique = _.union( arr1, arr2, arr3 );
console.log( unique );



// Find the index of the first element in numbers that is over 7 and is even
console.log( `FIRST OVER 7 AND EVEN` );

const first = _(numbers).find(function (n) {
  return n > 7 && n % 2 === 0;
});
console.log( first );




// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }
console.log( `TRANSFORM ARRAY TO OBJECT` );

// const switchOrder = _.zip.apply(null, arrToTransform);  // need apply to pass in nested arrays
const switchOrder = _.unzip(arrToTransform);
const obj = _(switchOrder).object();
console.log( obj );



















//**
