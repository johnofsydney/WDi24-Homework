// #Title: ATM App
//
// ###Type:
// - Lab
//
// ###Summary
// - This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// - You'll be selecting elements, manipulating HTML, and manipulating style along
// with building out the logic using JavaScript.
//
// ###Objectives:
// - DOM selection, appending, removal, updating
//
// ###Specification:
//
// <!-- * Keep track of the checking and savings balances somewhere -->
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?


// //Global variables
// //Keep track of the checking and savings balances
// let checkingBalance = 0;
// let savingsBalance = 0;
// let currentBalance = 0;
// let canOverDraft = false;
//
//
// //Enter an amount
// //Get the amount entered for checking
// // let checkAmount = $("#checking-amount").val();
// //Get the amount entered for savings
// // let savAmount = $("#savings-amount").val();
//
// const withdraw = function (account1, account2) {
//   let $amount = +$(`#${account1}-amount`).val();
//
//   currentBalance -= $amount;
//   //If the balance is less than 0, check if you can overdraft
//   if (currentBalance <= 0) {
//     //Get the current balance from both account
//     let accountBalance1 = +$(`#${account1}-amount`).val();
//     let accountBalance2 = +$(`#${account2}-amount`).val();
//
//     if (accountBalance1 + accountBalance2 - $amount >= 0) {
//       overdraft ($amount, account1, account2);
//     };
//   };

//   // console.log(excess);
//   // if (currentBalance <= 0) {
//   //
//   // };
//   //Overdraft ?
//     //Update screen
//     $(`#${account1}-balance`).text(currentBalance);
// };
//
// const deposit = function (account1, account2) {
//   let $amount = +$(`#${account1}-amount`).val();
//   currentBalance += $amount;
//   //Update screen
//   $(`#${account1}-balance`).text(currentBalance);
//   console.log(currentBalance);
// };
//
// //Fixing the buttons
// $(document).ready(function (event) {
//
//   //Deposit into checking account
//   $("#checking-deposit").on("click", function () {
//     //select account
//     let account1 = "checking";
//     let account2 = "savings";
//     setCurrentBalance(account1);
//     //Reset background color to gray if the account was overdrawn
//     if (currentBalance >= 0) {
//       $(`#${account1}-balance`).removeClass("broke");
//     };
//     // console.log(currentBalance);
//     deposit(account1);
//   });
//
//   //Withdraw from checking account
//   $("#checking-withdraw").on("click", function () {
//     //select account
//     let account1 = "checking";
//     let account2 = "savings";
//     setCurrentBalance(account1);
//     //currentBalance in savings
//     // let currentSavings = +$(`#savings-amount`).val();
//     //withdraw
//     withdraw(account1);
//     //Prevent overdraw
//     if (currentBalance < 0) {
//       $(`#${account1}-balance`).addClass("broke").text("Too broke :(");
//       currentBalance = 0;
//     }
//   });
//
//   //Deposit into savings account
//   $("#savings-deposit").on("click", function () {
//     //select account
//     let account1 = "savings";
//     let account2 = "checking";
//     setCurrentBalance(account1);
//     //Reset background color to gray if the account was overdrawn
//     if (currentBalance >= 0) {
//       $(`#${account1}-balance`).removeClass("broke");
//     };
//     //deposit
//     deposit(account1);
//   });
//
//   //Withdraw from savings account
//   $("#savings-withdraw").on("click", function () {
//     //select account
//     let account1 = "savings";
//     let account2 = "checking";
//     setCurrentBalance(account1);
//     //withrdaw
//     withdraw(account1);
//     //Prevent overdraw
//     if (currentBalance < 0) {
//       $(`#${account1}-balance`).addClass("broke").text("Too broke :(");
//       currentBalance = 0;
//     };
//   });
//
// });
//
// // Overdraft protection
//
// const overdraft = function (amount, account1, account2) {
//   // //get the currentBalances from both accounts
//   // let accountBalance1 = +$(`#${account1}-amount`).val();
//   // let accountBalance2 = +$(`#${account2}-amount`).val();
//   //Check the balance in account1
//   // if (accountBalance1 - amount <= 0) {
//     // debugger;
//     //The amount to withraw from the second account
//     let excess = amount - accountBalance1;
//     //Go to other account and try to withdraw from there
//     if (accountBalance2 - excess >= 0) {
//       //Withrdaw from excess from second account, and set first account to $0
//       accountBalance2 -= excess;
//       accountBalance1 = 0;
//       //Update amount on screen
//         $(`#${account1}-balance`).text(accountBalance1);
//         $(`#${account2}-balance`).text(accountBalance2);
//     } else {
//       //Too broke :(
//       $(`#${account1}-balance`).addClass("broke").text("Too broke :(");
//       $(`#${account2}-balance`).addClass("broke").text("Too broke :(");
//     };
//   // };
//
//   // else {
//   //   withdraw(account1);
//   // };
// };
//
// const setCurrentBalance = function (account) {
//   //Read the currentBalance from screen if amount is NOT 0
//   if (currentBalance > 0) {
//     //Get the currentBalance from screen
//     currentBalance = +$(`#${account}-balance`).text();
//   } else {
//     currentBalance = 0;
//   };
// };

//Global variables
// let currentBalance = 0;
// let checkingBalance = 0;
// let savingsBalance = 0;
// let overdraw = false;
// let bothEmpty = false;
//
// //withdraw function
// const withdraw = function (account, $amount) {
//   // //Get user inout
//   // let $amount = +$(`#${account}-amount`).val();
//
//   if (account === "checking") {
//     //Add to existing amount
//     checkingBalance -= $amount;
//     //if checking balance is negative, save it to excess variable
//     $(`#${account}-balance`).text(checkingBalance);
//     currentBalance = checkingBalance;
//   };
//
//   if (account === "savings") {
//     savingsBalance -= $amount;
//     $(`#${account}-balance`).text(savingsBalance);
//     currentBalance = savingsBalance;
//   };
//
//   //Check if you your second account has enough $$$
//   if (checkingBalance < 0 && (savingsBalance - currentBalance >= 0)) {
//     debugger;
//     overdraw = true;
//   };
//
//   if (savingsBalance < 0 && (checkingBalance - currentBalance >= 0)) {
//     overdraw = true;
//   };
//
//   if (overdraw && ((checkingBalance - currentBalance < 0)) || savingsBalance - currentBalance < 0) {
//     bothEmpty = true;
//     overdraw = false;
//   };
//
// };
// //deposit function
// const deposit = function (account, $amount) {
//
//   if (account === "checking") {
//     //Add to existing amount
//     checkingBalance += $amount;
//     $(`#${account}-balance`).text(checkingBalance);
//   };
//
//   if (account === "savings") {
//     savingsBalance += $amount;
//     $(`#${account}-balance`).text(savingsBalance);
//   };
// };
//
//
// //The buttons
// $(document).ready(function (event) {
//
//   //Deposit into checking account
//   $("#checking-deposit").on("click", function () {
//     //select account
//     let account1 = "checking";
//     let account2 = "savings";
//     //Get user input amount
//     let $amount = +$(`#${account1}-amount`).val();
//     //Reset background color to gray if the account was overdrawn
//     if (checkingBalance >= 0) {
//       $(`#${account1}-balance`).removeClass("broke");
//     };
//     deposit(account1, $amount);
//   });
//
//   //Withdraw from checking account
//   $("#checking-withdraw").on("click", function () {
//     //select account
//     let account1 = "checking";
//     let account2 = "savings";
//     //Get user input amount
//     let $amount = +$(`#${account1}-amount`).val();
//     withdraw(account1, $amount);
//     //Check if not enough in both accounts
//     // if (bothEmpty) {
//     //   $(`#${account1}-balance`).addClass("broke").text("Too broke :(");
//     //   $(`#${account2}-balance`).addClass("broke").text("Too broke :(");
//     // };
//     //draw from acc2
//     if (overdraw) {
//       $amount = -currentBalance;
//       withdraw(account2, $amount);
//       overdraw = false;
//     };
//     //Prevent overdraw
//     if (checkingBalance <= 0) {
//       $(`#${account1}-balance`).addClass("broke").text("Too broke :(");
//       checkingBalance = 0;
//     };
//   });
//
//   //Deposit into savings account
//   $("#savings-deposit").on("click", function () {
//     //select account
//     let account1 = "savings";
//     let account2 = "checking";
//     //Get user input amount
//     let $amount = +$(`#${account1}-amount`).val();
//     //Reset background color to gray if the account was overdrawn
//     if (savingsBalance >= 0) {
//       $(`#${account1}-balance`).removeClass("broke");
//     };
//     //deposit
//     deposit(account1, $amount);
//   });
//
//   //Withdraw from savings account
//   $("#savings-withdraw").on("click", function () {
//     //select account
//     let account1 = "savings";
//     let account2 = "checking";
//     //Get user input amount
//     let $amount = +$(`#${account1}-amount`).val();
//     //withrdaw
//     withdraw(account1, $amount);
//     //Prevent overdraw
//     if (savingsBalance <= 0) {
//       $(`#${account1}-balance`).addClass("broke").text("Too broke :(");
//       savingsBalance = 0;
//     };
//
//     // if (bothEmpty) {
//     //   $(`#${account1}-balance`).addClass("broke").text("Too broke :(");
//     //   $(`#${account2}-balance`).addClass("broke").text("Too broke :(");
//     // };
//
//     if (overdraw) {
//       $amount = -currentBalance;
//       withdraw(account2, $amount);
//       overdraw = false;
//     };
//   });
// });
const checkForZero = function () {
  $(".zero").removeClass("zero");
};


$(document).ready(function () {

  $("#checking-deposit").on("click", function () {

    const amount = +($("#checking-amount").val());
    const balance = +$("#checking-balance").text().slice(1); //Skip the $
    $("#checking-balance").text('$' + (amount + balance));
    // console.log(amount, balance, amount + balance);
  });

  $("#checking-withdraw").on("click", function () {
    const amount = +($("#checking-amount").val());
    const balance = +$("#checking-balance").text().slice(1);
    const newBalance = balance - amount;
    if (newBalance >= 0) {
      $("#checking-balance").text('$' + newBalance);
    };
  });

  $("#savings-deposit").on("click", function () {

    const amount = +$"#savings-amount").val();
    const balance = +$("#savings-balance").text().slice(1); //Skip the $
    $("#savings-balance").text('$' + (amount + balance));
    // console.log(amount, balance, amount + balance);
  });

  $("#savings-withdraw").on("click", function () {
    const amount = +($("#savings-amount").val());
    const balance = +$("#savings-balance").text().slice(1);
    const newBalance = balance - amount;
    if (newBalance >= 0) {
      $("#savings-balance").text('$' + newBalance);
    };
  });

});
