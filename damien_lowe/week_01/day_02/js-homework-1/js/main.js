/*The Calculator

Part 1
*/

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (num) {

  const result = num * num;
  console.log(`The result of squaring the number ${num} is ${result}.`);
  return result;

};

squareNumber(2);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (num) {

  const result = num / 2;
  console.log(`Half of ${num} is ${result}.`);
  return result;

};

halfNumber(10);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function (num1, num2) {

  const percentage = (num1 / num2) * 100;
  console.log(`${num1} is ${percentage}% of ${num2}`);
  return percentage;

};

percentOf(2, 4);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function (radius) {

  const area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${area}.`);
  return area;

};

areaOfCircle(4);


/*Part 2

Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier:*/




const letsUseThemAll = function (num) {
  // Take half of the number and store the result.
  const halvedNum = halfNumber(num);
  // Square the result of #1 and store that result.
  const squaredNum = squareNumber(halvedNum);
  // Calculate the area of a circle with the result of #2 as the radius.
  const areaNum = areaOfCircle(squaredNum);
  // Calculate what percentage that area is of the squared result (#3).
  const percentageNum = percentOf(squaredNum, areaNum);

};

letsUseThemAll(4);




// Strings
//
// These exercises will test your knowledge of string functions, conditionals, and arrays.
// For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million.
// For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const drEvil = function (num) {

  if (num === 1000000) {
    console.log(`${num} dollars (pinky)`);
  } else {
    console.log(`${num} dollars`);
  }

};

drEvil(10);
drEvil(1000000);


// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each.
// You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const mixUp = function (str1, str2) {
  //Store the first two letters of each string into variables
  const a = str1[0] + str1[1];
  const b = str2[0] + str2[1];

  newStr1 = b + str1.slice(2);
  newStr2 = a + str2.slice(2);

  console.log(`${newStr1} ${newStr2}`);
};

mixUp("mix", "pod");
mixUp("dog", "dinner");

// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself.
// You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

const fixStart = function (str) {
  //Check that is has at least 1 character
  if (str.length > 1) {
    //Read the first letter and store it into a variable
    let a = str[0];
    //A new string to store the output
    let newStr = a;

    //Loop through the rest of the string and find the same letter
    for (let i = 1; i < str.length; i++) {
      //If the letter is the same as variable a, then replace it with a *
      //Otherwise, append the current letter to newStr;
      if (str[i] === a) {
        newStr = newStr + "*";
      } else {
        newStr = newStr + str[i];
      }
    };
    console.log(newStr);
  }
};

fixStart("babble");
fixStart("tatty");

// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead.
// If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'



const verbing = function (str) {

  let newVerb;
  let lastThree = str.slice(-3);

  if (str.length >= 3 && lastThree !== "ing") {
    newVerb = str + "ing";
  } else if (str.length >= 3 && lastThree === "ing") {
    newVerb = str + "ly";
  } else {
    newVerb = str;
  }

  console.log(newVerb);
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

// Madeleine Milasas [10:14 AM]
// added this Plain Text snippet: Not Bad homework attempt
// // Create a function called notBad that takes a single argument, a string.
// const notBad = function(str) {
//  // find the first appearance of the substring 'not'
//  const reNot = /not/i; // regex for not, i = ignore case
//  const notIndex = str.search(reNot); // return index of first letter of first occurence
//  // and find first appearance of 'bad'
//  const reBad = /bad/i;
//  const badIndex = str.search(reBad);
//  // if 'bad' follows 'not'
//  if (badIndex > notIndex) {
//   // then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
//   const strStart = str.slice( 0, notIndex );
//   const strEnd = str.slice( badIndex + 3, str.length ); // + 3 for the 3 letters of 'bad'
//   const amendedString = strStart + 'good' + strEnd;
//   return amendedString;
//  }
//  // If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
//  else if (badIndex <= notIndex){ // equal would be if they both don't exist, both indices -1
//   return str;
//  }
// };





const notBad = function (str) {
    //Search through the string for "not" and "bad", returning a positive integer if found
    let a = str.search("not");
    let b = str.search("bad");
    let output = str;

    //If "not" and "bad" both exist
    if (a >= 0 && b >= 0) {
      //If "not" comes before "bad"
      if (a < b) {
        output = str.replace(/not.*bad/, "good");
      } else {
        output = str;
      }
    }
    console.log(output);
};

notBad("This dinner is not that bad!");
notBad("This movie is not so bad!");
notBad("This dinner is bad!");
notBad("This dinner is OK!");
notBad("This dinner is so fucking bad, not!");
notBad("Hello this is a useless statement!");
