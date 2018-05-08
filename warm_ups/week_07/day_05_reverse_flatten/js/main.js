// Uncomment each function you wish to run. Make sure you're Uncommenting where the function is being called as well.


//////////////////////////////////////////
// REVERSE OPTION 1

// // defining function with argument
// const reverse = function( array ){
//   // deinfing a variable to store the output.
//   let output = [];
//   // Looping through the array backwards and pushing the array[i] into output
//   for ( let i = array.length - 1; i >= 0; i-- ){
//     output.push( array[i] );
//   };
//   // returning output so we have a result to display
//   return output;
//
// };
// // Calling function within a console log so we can see the outcome in the console.
// console.log(reverse( [1, 2, 3, 4] ));


//////////////////////////////////////////
// REVERSE OPTION 2

// // deinfing function to take arguments
// const reverse2 = function( array ){
//   // defining a variable to sort the output
//   let output = [];
//   // We're not actually using slice to do anything. Slice will return a new instance of the array that we can maipulate. If we removed elements from 'array' it will change the array.length that we refer to in the loop.
//   const newArray = array.slice();
//   // Looping through array
//   for (let i = 0; i < array.length; i++){
//     // Take the newArray and remove the first element then save it in a variable
//     let index = newArray.shift();
//     // console.log(index);
//
//     // Take that varilable and put it on the front of the output array.
//     output.unshift( index );
//   }
//   // return the output so we can view the result.
//   return output
//
// };
// // call the function with a console log so we can see the result in the console.
// console.log(reverse2( [1, 2, 3, 4] ));


//////////////////////////////////////////
// REVERSE OPTION 3

// // define function to take argument
// const reverse3 = function( array ){
//
//   // define an empty object
//   const outputObj = {};
//
//   // loop through the array
//   for (let i = 0; i < array.length; i++) {
//     // take the array.length - 1 and store that as the value for the key in outputObj[i] (this will change to the next element with each iteration)
//     outputObj[i] = array.length - i;
//   }
//   // return outputObj so we can see the result.
//   return outputObj;
// };
// // call function with a console log so we can view the result in the console.
// console.log(reverse3( [1, 2, 3, 4] ));


//////////////////////////////////////////
// FLATTEN OPTION 1

// // define the array to pass as an argument
// const arrayToFlatten = [ 1, [2], [3, [4]], 5, [6] ];
//
// // define the function to take an argument
// const flatten = function( array ){
//
//   // define variable to store the output
//   let output = [];
//   // loop through the array
//   for (let i = 0; i < array.length; i++) {
//     // determine if the element in this iteration is an array. If it is, loop through it
//     if ( Array.isArray( array[i] ) ){
//       // looping through the second level of the arrays
//       for (let j = 0; j < array[i].length; j++) {
//         // pushing the element to output.
//         output.push( array[i][j] );
//       }
//     } else {
//       // if the element isn't an array we push it to output.
//       output.push( array[i] );
//     }
//   }
//   // return the output so we can view the result
//   return output;
// };
// // call the function with a console log so we can view the result in the console.
// console.log(flatten(arrayToFlatten));

//////////////////////////////////////////
// FLATTEN OPTION 2

// The previous function doesn't take into account that the second level of elements could also be an array. This option will be able to flatten any level of array.

// define an array to be passed into the function.
const arrayToFlatten2 = [ 1, [2], [3, [[[[4]]]]], 5, [[[[[[[[[6]]]]]]]]] ];

//This one is pure witch-craft, like come on!

const flatten = function (arr) {
  // using reduce to gain access to the accumulator (flat) and the current value (toFlatten).
  return arr.reduce(function (flat, toFlatten){
    // if the current value is an array we call this function again if not it will concatinate the value into the accumulator. The trailing [] is where the result will be put.
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
};
// calling the function with a console log so we can view the result in the console.
console.log(flatten(arrayToFlatten2));
