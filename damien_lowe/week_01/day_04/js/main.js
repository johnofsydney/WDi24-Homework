// Geometry Function Lab
//
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangle = {
//   length: 4,
//   width: 4
// };


const rectangle = {

  isSquare: function (length, width) {
    if (length === width) {
      return true;
    } else {
      return false;
    };
  },

  areaRectangle: function (length, width) {
    let area = length * width;
    return area;
  },

  perimeterRectangle: function (length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
  }

};

// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// const triangle = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

const triangle = {

  isEquilateral: function (sideA, sideB, sideC) {
    if (sideA === sideB && sideA === sideC) {
      return true;
    } else {
      return false;
    };
  },

  isIsosceles: function (sideA, sideB, sideC) {
    if (sideA === sideB && sideA !== sideC && sideB !== sideC) {
      return true;
    } else {
      return false;
    };
  },
  //Herron's formula Let a,b,c be the lengths of the sides of a triangle. The area is given by:
  // Area	=	 √	 p	 (	p	−	a	) 	(	p	−	b	)	 (	p	−	c	)
  // where p is half the perimeter, or
  // a	+	b	+	c / 2
  isArea: function (a, b, c) {
    //Calculate the perimeter
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return area;
  },

  isObtuse: function (a, b, c) {
    //Rule #4 from http://math.rice.edu/~lanius/Geom/Imposs/
    if ((a * a + b * b) < (c * c) || (b * b + c * c) < (a * a) || (c * c + a * a) < (b * b)) {
      return true;
    } else {
      return false;
    };
  },
};

// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55


const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function (obj) {

  let totalCost = 0;
  //Store the itemPrice into an array
  let prices = Object.values(obj);

  //Iterate array, adding each price to totalCost
  for (let i = 0; i < prices.length; i++) {
    //The + is the same as parseFloat() converting string into values
    totalCost += +prices[i];
  };
  return totalCost;
};


// Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple
// function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
//
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//

// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }

// const validateCreditCard = function (str) {
//   //Boolean if cardValid
//   let cardValid = true;
//   //Object to store card information
//   let cardInfo = {
//     valid: "",
//     number: "",
//   };
//   //Variable to store and error message
//   let errorMessage = "";
//   //Array for the sum of the card digits
//   let output = [];
//   //Variable to store sum of digits
//   let sum = 0;
//   //Boolean to check if at least two different numbers
//   let moreThanOne = true;
//   //Remove all the "-" from the string input
//   let cardStr = str.replace(/-/gi, "");
//
//   //Check if it contains 16 digits
//   if (cardStr.length !== 16) {
//     cardValid = false;
//     errorMessage = "The card does not contain 16 digits!";
//   };
//
//   //Convert string into numbers
//   let cardNumber = +cardStr;
//
//   //Check that the last number is even
//   if (cardNumber % 2 !==0) {
//     cardValid = false;
//     errorMessage = "The last digit of the card is NOT an even number!";
//   };
//
//   //To check if sum digits > 16
//   //Firstly, store the digits into output[]
//   for (let i = 0; i < cardStr.length; i++) {
//     output.push(+cardStr.charAt(i));
//   };
//   //Then add the numbers into sum
//   for (let i = 0; i < output.length; i++ ) {
//     sum += output[i];
//   };
//   //Then actually check if number > 16
//   if (sum <= 16) {
//     cardValid = false;
//     errorMessage = "The sum of the digits was not greater than 16!";
//   };
//
//   // debugger;
//   //Check if there is more than one digit
//   for (let i = 1; i < cardStr.length; i++) {
//     //Check if number seen before
//     if (cardStr[i] !== cardStr[i - 1]) {
//       moreThanOne = true;
//       break;
//     } else {
//       moreThanOne = false;
//     };
//   };
//
//   if (!moreThanOne) {
//     cardValid = false;
//     errorMessage = "There is only one unique digit in the credit card!";
//   };
//
//   if (cardValid) {
//     cardInfo.valid = "true";
//     cardInfo.number = str;
//   } else {
//     cardInfo.valid = "false";
//     cardInfo.number = str;
//     cardInfo.error = errorMessage;
//   };
//   console.log(cardInfo);
// };

// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail?
// Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

const validateCreditCard = function (str) {
  //Boolean if cardValid
  let cardValid = true;
  //Object to store card information
  let cardInfo = {
    valid: "",
    number: "",
  };
  //Variable to store and error message
  let errorMessage = "";
  //Array for the sum of the card digits
  let output = [];
  //Variable to store sum of digits
  let sum = 0;
  //Boolean to check if at least two different numbers
  let moreThanOne = false;
  //Remove all the "-" from the string input
  let cardStr = str.replace(/-/gi, "");

  //Check if it contains 16 digits
  if (cardStr.length !== 16) {
    cardValid = false;
    errorMessage = "The card does not contain 16 digits!";
  };

  //Convert string into numbers
  let cardNumber = +cardStr;

  //Check that the last number is even
  if (cardNumber % 2 !==0) {
    cardValid = false;
    errorMessage = "The last digit of the card is NOT an even number!";
  };

  //To check if sum digits > 16
  //Firstly, store the digits into output[]
  for (let i = 0; i < cardStr.length; i++) {
    output.push(+cardStr.charAt(i));
  };
  //Then add the numbers into sum
  for (let i = 0; i < output.length; i++ ) {
    sum += output[i];
  };
  //Then actually check if number > 16
  if (sum <= 16) {
    cardValid = false;
    errorMessage = "The sum of the digits was not greater than 16!";
  };

  //Check if there is more than one digit
  for (let i = 1; i < cardStr.length; i++) {
    //Check if number seen before
    if (cardStr[i] !== cardStr[i - 1]) {
      moreThanOne = true;
      break;
    } else {
      moreThanOne = false;
    };
  };

  if (!moreThanOne) {
    cardValid = false;
    errorMessage = "There is only one unique digit in the credit card!";
  };

  if (cardValid) {
    cardInfo.valid = "true";
    cardInfo.number = str;
  } else {
    cardInfo.valid = "false";
    cardInfo.number = str;
    cardInfo.error = errorMessage;
  };
  console.log(cardInfo);
};

// JavaScript Bank
//
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts.
// It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts.
//  There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts,
// show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

let bank = [
  // {
  //   balance: 0,
  //   name: ""
  // }
];

const addAccount = function (newName, amount) {
  let newAccount = {
    name: newName,
    balance: amount
  };
  bank.push(newAccount);
};

const deposit = function (accName, amount) {
  //Check for the correct account
  for (let i = 0; i < bank.length; i++) {
    //If account exists, make the change
    if (bank[i].name === accName) {
      bank[i].balance += amount;
      return `Your new balance is ${bank[i].balance}`;
    } else {
      return `This account does not exist!`;
    };
  };
};


const withdraw = function (accName, amount) {
  let stageAmount = 0;
  //Check for the correct account
  for (let i = 0; i < bank.length; i++) {
    //If account exists, make the change
    if (bank[i].name === accName) {
      stageAmount = bank[i].balance - amount;
      if (stageAmount >= 0) {
        bank[i].balance -= amount;
        return `Your new balance is ${bank[i].balance}`;
      } else {
        return `You are way too poor!`;
      };
    } else {
      return `This account does not exists!`;
    };
  };
};

const transfer = function (accName1, accName2, amount) {
  let stageAmount = 0;
  //Find the generous guy
  for (let i = 0; i < bank.length; i++) {
    //If account exists, make the change
    if (bank[i].name === accName1) {
      stageAmount = bank[i].balance - amount;
      if (stageAmount >= 0) {
        bank[i].balance -= amount;
        return `${accName1}'s new balance is ${bank[i].balance}`;
      } else {
        return `You are way too poor!`;
      };
    } else {
      return `This account does not exists!`;
    };
  };

  //Find the recipient
  for (let i = 0; i < bank.length; i++) {
    //If account exists, make the change
    if (bank[i].name === accName2) {
      bank[i].balance += amount;
      return `${accName2}'s new balance is ${bank[i].balance}`;
    } else {
      return `This account does not exists!`;
    };
  };
};

addAccount("Damien Lowe", 0);
addAccount("Magnus Carlsen", 1000);
// console.log(bank);
// deposit("Damien Lowe", 10);
// console.log(bank);
