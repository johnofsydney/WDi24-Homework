// Serge Says
//
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.

const serge = function(string){
  // console.log(string[string.length - 1]);

  // checking to see if the user has called the function with an argument.
  if ( string === null || string === undefined || string === '' ){
    console.log(`Fine. Be that way!`);
  // string.length tells you how many characters are in the string. By minusing 1 away from the length we can get the index of the last character. (remember the indexes start at 0)
  } else if( string[string.length - 1] === '?' ){
    console.log(`Sure.`);
  // We can use .toUpperCase() to convert all characters within a string to uppercase.
  } else if ( string === string.toUpperCase() ){
    console.log(`Woah, chill out!`);
  } else {
    console.log(`Whatever.`);
  }
}

serge('sup?');
serge('LKSJHEGLKJSEH');
serge();
serge('');
