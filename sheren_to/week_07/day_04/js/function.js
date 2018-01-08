// console.log("functions");
//
var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];

// var startingData = [
//   [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
//   [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
//   [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
//   [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
//   [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
// ];
// Log out 30 random numbers between 20 and 100

console.log(_.random(20, 100));

// Create a function that can only ever be called once

// let b = _.once( function () {
//   return 1;
// });
// console.log(b());
// console.log(b());
// console.log(b());

let b = _.once( function () {
  console.log('being called!'); // should only appear once
  return 1;
});
console.log(b());
console.log(b());
console.log(b());


// _.once( console.log( 'hi' ) );

///not sure about this one...
//another way self invoking function iife


// Append a paragraph tag to the body for every person in people. It should end up looking something like this - <p> Hello A, you don't look a day over 20 </p>

// console.log(_.pluck(people,'username'));
//
// _(_.pluck(people,'username')).each(function( name ) {
//   console.log( `Hello ${name}, you don't look a day over 20` );
// })
$(document).ready(function() {
  const username = _.each(people, function ( person ) {
    console.log(person.username);
    $("body").append(`<p> Hello ${person.username}, you don't look a day over ${person.age} </p>`)
  });
});
// $(document).ready(function() {
//     console.log($("document.body").append(`<p> Hello ${username}, you don't look a day over 20 </p>`));
// });

// This is really, really difficult, and we don't really expect it to get done. But worth having a think about!
//
// Eventually we want five console.logs that look like the following...
//
// Groucho Marx was born in 1890.
// Chico Marx was born in 1887.
// Zeppo Marx was born in 1901.
// Harpo Marx was born in 1888.
// Gummo Marx was born in 1892.
// You'll need to rearrange the data firstly, then alter the data, then print it out.

// The steps you could take...
//
// First step is restructuring each one of the nested arrays (_.unzip will help). For example:
// // This...
// [["groucho", "marx", 1990], ["firstName", "lastName", "born"]]
//
// // Needs to become this...
// [["groucho", "firstName"], ["marx", "lastName"], [1990, "born"]]
// You then need to turn them into an object (_.object will help). For example:
// // This...
// [["groucho", "firstName"], ["marx", "lastName"], [1990, "born"]]
//
// // Needs to become this...
// { 1990: "born", groucho: "firstName", marx: "lastName" }
// You then need to flip that object around (_.invert will help). For example:
// // This...
// { 1990: "born", groucho: "firstName", marx: "lastName" }
//
// // Needs to become this...
// { born: "1990", firstName: "groucho", lastName: "marx" }
// You then need to change each value in that object. If the value can be turned into a number, you need to minus 100 from it. If it can't be, you need to make the first letter a capital (_.mapObject, _.isNaN will help) For example:
// // This...
// { born: "1990", firstName: "groucho", lastName: "marx" }
//
// // Needs to become this...
// { born: 1890, firstName: "Groucho", lastName: "Marx" }
// After that, for each object in the startingData, you need to create a template (_.template will help) that receives an object, and console.log a string that looks something like this:
// // This...
// { born: 1890, firstName: "Groucho", lastName: "Marx" }
//
// // Needs to be used to create a string that looks like this...
// "Groucho Marx was born in 1890."
var startingData = [
  [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
  [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
  [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
  [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
  [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
];

// let zero = _.zip(startingData[0][0],startingData[0][1]);
// console.log(zero);

let gro = _.invert(_.object(_.unzip(startingData[0])));
console.log(gro);



















//
