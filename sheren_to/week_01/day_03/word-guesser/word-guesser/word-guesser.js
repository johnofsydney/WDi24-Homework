console.log("working?");

// let word = ['f', 'o', 'x'];//letters of word
// let lettersGuessed = ['a', 'b', 'f', 'o', 'c', 'x']; //guessed letters
//
// const guessLetter = function(lettersGuessed) {
// //for ( i = 0, i < lettersGussed.length; i++) {
//   if (word.includes(lettersGuessed)) {
//     console.log(`${lettersGuessed} selected is correct!`);
//     return true;
//   } else {
//     console.log(`${lettersGuessed} is not correct, please try again!`);
//     return false;
//   }
// };
// //once guessed remove letter from array1 and array2
// console.log(guessLetter);


// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

//pseudo code
//letter guessed, if correct, show guessed letter, and congratulate on finding letter, and how many left to guess, also push into array of guessed letters
//if incorrect, push into array of guessed letter and say it's incorrect
//also add, caps or no caps the same

let word = [ "f", "o", "x" ];
let guessArray = [ ];
let guessWord = [ "_", "_", "_" ];
let lettersLeft = word.length;
let reward = 0;

const wordGuesser = function( letter ) {
  letter = letter.toLowerCase();
  // if ( word.length === guessWord.length ) {
  //   console.log("You've guessed it all! You win!");
  // } else {
    if ( guessArray.includes(letter)) {
      reward = reward - 5;
      console.log("you've already guessed this letter, please try another one. reward: $" + reward);
      console.log("letters guessed: " + guessArray);
      console.log("correct letters: " + guessWord);


    } else if (word.includes(letter) === false) {
      guessArray.push(letter);
      reward = reward - 2;
      console.log("incorrect guess, please try again. reward: $" + reward);
      console.log("letters guessed: " + guessArray);
      console.log("correct letters: " + guessWord);


    } else {
      guessArray.push(letter);
      let x = word.indexOf(letter)
      guessWord[x] = letter;
      reward = reward + 10;
      lettersLeft -= 1;
        if ( lettersLeft === 0 ) {
          console.log("You've guessed the word! Yay!");
          console.log("correct letters: " + guessWord);
          console.log("your reward willings are: $" + reward);
        } else {
          console.log(`you guessed right with the letter ${letter}, you have ${lettersLeft} more letters to guess. reward: $` + reward);
          console.log("letters guessed: " + guessArray);
          console.log("correct letters: " + guessWord);

      }
    }
  // }
};
console.log(wordGuesser('f'));
console.log(wordGuesser('a'));
console.log(wordGuesser('d'));
console.log(wordGuesser('a'));
console.log(wordGuesser('o'));
console.log(wordGuesser('x'));


// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
// Bonus: Make it like Hangman:
//
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
// _______________
//       |       |
//       O       |
//      \|/      |
//       |       |
//      / \      |
//               |
// ------------------
