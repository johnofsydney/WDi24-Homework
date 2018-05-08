// Utilities, Functions and Chaining!
//
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.
//
// var people = [
//   { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
//   { id: 2, username: "B", active: false, age: 35, uid: 1352 },
//   { id: 3, username: "C", active: false, age: 50, uid: 5418 },
//   { id: 4, username: "D", active: true,  age: 65, uid: 216  },
//   { id: 5, username: "E", active: true,  age: 80, uid: 18   },
//   { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
// ];
//
// var startingData = [
//   [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
//   [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
//   [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
//   [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
//   [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
// ];
//
//

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];

var startingData = [
  [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
  [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
  [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
  [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
  [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
];

//     Log out 30 random numbers between 20 and 100
const randomNumbers = _( _.range( 20, 100 ) ).sample( 30 );
console.log( 'randomNumbers:', randomNumbers );

//     Create a function that can only ever be called once
( function () {
  console.log( 'I exist for a split second' );
}());

_.once( console.log( 'I also exist for a split second' ) );

//     Append a paragraph tag to the body for every person in people. It should end up looking something like this - <p> Hello A, you don't look a day over 20 </p>
$( document ).ready( function () {
  _( people ).each( function ( person ) {
    $( 'body' ).append( `<p>Hello ${ person.username }, you don't look a day over ${ person.age }. `);
  })
} );


// The Final Exercise
//
// This is really, really difficult, and we don't really expect it to get done. But worth having a think about!
//
// Eventually we want five console.logs that look like the following...
//
// Groucho Marx was born in 1890.
// Chico Marx was born in 1887.
// Zeppo Marx was born in 1901.
// Harpo Marx was born in 1888.
// Gummo Marx was born in 1892.

_.mixin({
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  }
});

const structuredData = _( startingData ).map( function ( data ) {
  return _.chain( data )
          .unzip()
          .object()
          .invert()
          .value();
} );
// console.log( structuredData );

_( structuredData ).each( function ( data ) {
  const compileBio = _.template( "<%= _.capitalize( firstName ) %> <%= _.capitalize( lastName ) %> was born in <%= born - 100 %>.")
  console.log( compileBio( data ) );
  }
);
