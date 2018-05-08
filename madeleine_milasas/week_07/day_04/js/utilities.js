const people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];


// Log out 30 random numbers between 20 and 100
console.log( `30 RANDOM NUMS` );

const logRandom = function () {
  console.log( _.random(20, 101) );
};
_.times( 30, logRandom );



// Create a function that can only ever be called once
console.log( 'RUN ONCE FUNCTION' );

const myFunction = function () {
  console.log( `Look, I ran once` );
};
const init = _.once( myFunction );
init();
init();
init();
init();




// Append a paragraph tag to the body for every person in people. It should end up looking something like this - <p> Hello A, you don't look a day over 20 </p>

_(people).each(function (p) {
  $('<p>').text( `Hello ${p.username}, you don't look a day over ${p.age}` ).appendTo('body');
});














//**
