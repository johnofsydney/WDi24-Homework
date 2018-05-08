console.log("testing.. testing..");

// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// Bonus
//
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.


//1.
const maxOfTwoNumbers = function(a, b) {

    if (a > b) {
        return a;
    } else {
        return b;
    }
};
console.log(`The greater number of 23 and 18 is ${ maxOfTwoNumbers(23,18) }.`)
console.log(`The greater number of 7 and 40 is ${ maxOfTwoNumbers(7,40) }.`)

//2.
const maxOfThree = function(a, b, c) {

    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    }
};
console.log(`The greater number of 2, 5 and 9 is ${maxOfThree(2, 5, 9)}`);
console.log(`The greater number of 8, 12 and 3 is ${maxOfThree(8, 12, 3)}`);

//3.
const vowel = ['a', 'e', 'i', 'o', 'u'];
const str = function(letter) {
    if (vowel.includes(letter)) {
        console.log(`${letter} is a vowel and thus true`);
        return true;
    } else {
        console.log(`${letter} is not a vowel and thus false`);
        return false;
    }
};

str('a');
str('b');
str('c');


//4.
let array = [1, 2, 3, 4];
const sumArray = function(array) {
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total = total + array[i];
        console.log(total);
    }
    return total;
};
console.log(sumArray(array));

const multiplyArray = function(array) {
    let total = 1;
    for (i = 0; i < array.length; i++) {
        total = total * array[i];
        console.log(total);
    }
    return total;
};
console.log(multiplyArray(array));

// 5.
let string = "";
const reverseString = function(string) {
    let revString = "";
    for (i = string.length - 1; i >= 0; i--) {
        revString = revString + string[i];
        // console.log(revString);
    }
    return revString;
};
console.log(reverseString('string'));

//6.

const findLongestWord = function(arrayLong) {
    var words = 0;
    for (i = 0; i < arrayLong.length; i++) {
        if (arrayLong[i].length > words) {
            var words = arrayLong[i].length;
        }
    }
    return words;

};
console.log(findLongestWord(['bee', 'flower', 'shine']));


//7.
let listOfWords = ['a', 'bee', 'flowers', 'sunshine', 'sun'];
let longestWord = '';
const filterLongWords = function( listOfWords ) {
    for (let i = 0; i < listOfWords.length; i++) {
     	if (listOfWords[i].length > longestWord.length) {
			longestWord = listOfWords[i];
        }
    }
  return longestWord;
};
console.log(filterLongWords(listOfWords));
