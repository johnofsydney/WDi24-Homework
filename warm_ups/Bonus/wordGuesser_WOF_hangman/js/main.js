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


//BONUS

// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

//BONUS BONUS

// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.



const word = [ 'F', 'O', 'X'];
const guessedArray = [ '_', '_', '_' ];
let correctLetters = word.length;
let letterFound = false;
let rewardAmount = 0;
let guessedLetters = [];
let hangmanCount = 0;

const hangman = [
  `   _____`,
  `   |   |`,
  `   O   |`,
  `  /|\\  |`,
  `  / \\  |`,
  `_______|`
];

// we first declare the function and allow it to take the argument 'letter'
const guessLetter = function( letter ){

  // takes the argument 'letter' and converts it to uppercase
  letter = letter.toUpperCase();

  // Checking to see if the user has already guessed the letter or not
  if( guessedLetters.indexOf(letter) === -1 ){

    // resetting the letterFound so it will run the (!letterFound) if statement if your previous guess was correct.
    letterFound = false;

    for (let i = 0; i < word.length; i++) {

      // checking to see if the letter being guessed is part of the
      if ( word[i] === letter ){

        // Adds the guessed letter to the next available index of the guessedLetter array.
        guessedLetters.push(letter);
        console.log(`guessedLetters = ${guessedLetters}`);

        // take the guessed letter and adds it to the guessedArray in the same index where it found the matching letter in the word array.
        guessedArray[i] = word[i];

        // takes one away from correctLetters to let the user know when they have no more letters to guess.
        correctLetters--;

        // sets the letterFound boolean to true so it doesn't run the (!letterFound) if statement.
        letterFound = true;

        // adds 10 to the rewardAmount if the guess is correct.
        rewardAmount += 10;
        console.log(`You found one! Yay. Your reward is: ${rewardAmount}`);
        console.log(correctLetters);
      }
    }
    console.log(guessedArray);

    // determines if the letter guess was a match
    if (!letterFound){

      // pushes the current guessed letter into guessedLetters array
      guessedLetters.push(letter);
      console.log(`guessedLetters = ${guessedLetters}`);

      //negates 10 from the rewardAmount
      rewardAmount -= 10;

      // adds one to the hangmanCount the determine how many lives the hangman has left.
      hangmanCount++;
      console.log(`Not a letter. Try again! Your reward is: ${rewardAmount}`);
    }
  } else {
    // logs is you've already guess that letter.
    console.log(`You've already guessed that. Try again.`);
    letterFound = true;
  }


  // if you guess all the letters this will inform the user that they have won.
  if ( correctLetters === 0 ){
    console.log(`You guessed them all!`);
  }


  // bunch of if statements to slowly display the hangman with each incorrect attempt.
  if ( hangmanCount === 1 ){
    console.log(hangman[5]);
  }else if ( hangmanCount === 2 ){
    console.log(`${hangman[4]}\n${hangman[5]}`);
  }else if ( hangmanCount === 3 ){
    console.log(`${hangman[3]}\n${hangman[4]}\n${hangman[5]}`);
  }else if ( hangmanCount === 4 ){
    console.log(`${hangman[2]}\n${hangman[3]}\n${hangman[4]}\n${hangman[5]}`);
  }else if ( hangmanCount === 5 ){
    console.log(`${hangman[1]}\n${hangman[2]}\n${hangman[3]}\n${hangman[4]}\n${hangman[5]}`);
  }else if ( hangmanCount === 6 ){
    console.log(`${hangman[0]}\n${hangman[1]}\n${hangman[2]}\n${hangman[3]}\n${hangman[4]}\n${hangman[5]}`);
    console.log(`you dead!`);
  }

};
