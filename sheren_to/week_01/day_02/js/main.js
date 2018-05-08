//
//
// The Calculator
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function( number ) {
  const result = number * number;
  console.log(`The square root of ${ number } is ${ result }`);
  return result;
};
squareNumber(3);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function ( number ) {
const result = number / 2;
console.log(`Half of ${ number } is ${ result }.`);
return result;
};
halfNumber(5);
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function(number1, number2) {
  const result = (number2 / number1) * 100;
  console.log(`${ number2 } is ${ result }% of ${ number1 }.`);
};
percentOf(4,2);
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function( radius ) {
  const area = 2 * 3.14 * radius;
  const result = area.toFixed(2);
  console.log(`The area for the circle with radius ${ radius } is ${ result }.`);
  return result;
};
areaOfCircle(2);

// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const calculation = function ( number ) {
  var result = number / 2;
  result = Math.pow(result, 2);
  result = Math.PI * Math.pow(result,2);
  result = result / Math.pow(result,2) *100;
  console.log(`The result with the number ${ number } is ${ result }.`);
};
calculation(4);
//how come no results shown for console log?? if return is removed, console.log appears


// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const drEvil = function( amount ) {
  if ( amount <1000000 ) {
    console.log(`${ amount } dollars`)
  } else if ( amount = 1000000 ) {
    console.log( `${ amount } dollars (pinky)`);
  }
};
drEvil(10);
drEvil(1000000);

// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function( string1, string2 ) {
  var newString1 = string2.slice(0, 2) + string1.slice(2);
  var newString2 = string1.slice(0, 2) + string2.slice(2);
  var newString = newString1 + " " + newString2;
  console.log(newString);
};
 mixUp('mix', 'pod');
 mixUp('dog', 'dinner');

// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

const fixStart = function( string ) {
  var first = string.charAt(0);
  var newString = first + string.slice(1).replace(RegExp(first, 'g'), '*');
  console.log(newString);
};
fixStart('babble');

// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function( string ) {
  if ( string.length + 1 > 3 && string.slice(-3) === "ing" ) {
    console.log( string + 'ly' );
  } else if ( string.length + 1 > 3 ) {
    console.log( string + "ing" );
  } else {
    console.log(string);
  }
};

verbing('swim');
verbing('swimming');
verbing('go');

// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'


const notBad = function(string) {
  let notIndex = string.indexOf("not");
  let badIndex = string.indexOf("bad");
  let indexEndBad = badIndex + 3 - notIndex;
  if ( string.includes("bad") && string.includes("not") ) {
    if (notIndex < badIndex) {
      return string.replace(string.substr(notIndex, indexEndBad), "good");
    } else {
      return string;
    }
  } else {
    return string;
  }
};

  console.log(notBad('This dinner is not that bad!'));
  console.log(notBad('This movie is not so bad!'));
  console.log(notBad('This dinner is bad!'));
  console.log(notBad('This dinner is bad! Not.'));
