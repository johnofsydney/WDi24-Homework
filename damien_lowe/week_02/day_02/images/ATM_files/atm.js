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


//Global variables
//Keep track of the checking and savings balances
let checkingBalance = 0;
let savingsBalance = 0;
let currentBalance = 0;

//Enter an amount
//Get the amount entered for checking
// let checkAmount = $("#checking-amount").val();
//Get the amount entered for savings
// let savAmount = $("#savings-amount").val();

const withdraw = function (account) {
  let $amount = +$(`#${account}-amount`).val();
  currentBalance -= $amount;
    //Update screen
    $(`#${account}-balance`).text(currentBalance);
};

const deposit = function (account) {
  let $amount = +$(`#${account}-amount`).val();
  currentBalance += $amount;
  //Update screen
  $(`#${account}-balance`).text(currentBalance);
};

//Fixing the buttons
$(document).ready(function (event) {

  //Deposit into checking account
  $("#checking-deposit").on("click", function () {
    //select account
    let account = "checking";
    //Reset background color to gray if the account was overdrawn
    if (currentBalance >= 0) {
      $(`#${account}-balance`).removeClass("broke");
    };
    console.log(currentBalance);
    deposit(account);
  });

  //Withdraw from checking account
  $("#checking-withdraw").on("click", function () {
    //select account
    let account = "checking";
    //currentBalance in savings
    // let savingsBalance = +$(`#savings-amount`).val();
    //withdraw
    withdraw(account);
    //Prevent overdraw
    if (currentBalance < 0) {
      $(`#${account}-balance`).addClass("broke").text("Too broke :(");
      currentBalance = 0;
    };
  });

  //Deposit into savings account
  $("#savings-deposit").on("click", function () {
    //select account
    let account = "savings";
    //Reset background color to gray if the account was overdrawn
    if (currentBalance >= 0) {
      $(`#${account}-balance`).removeClass("broke");
    };
    //deposit
    deposit(account);
  });

  //Withdraw from savings account
  $("#savings-withdraw").on("click", function () {
    //select account
    let account = "savings";
    //withrdaw
    withdraw(account);
    //Prevent overdraw
    if (currentBalance < 0) {
      $(`#${account}-balance`).addClass("broke").text("Too broke :(");
      currentBalance = 0;
    };
  });

});

// Overdraft protection

const overdraft = function (currentBalance, amount, account1, account2) {

  //get the currentBalances from both accounts
  let accountBalance1 = +$(`#${account1}-amount`).val();
  let accountBalance2 = +$(`#${account2}-amount`).val();
  //Check the balance in account1
  if (accountBalance1 - amount <= 0) {
    //The amount to withraw from the second account
    let excess = amount - currentBalance;
    //Go to other account and try to withdraw from there
    if (accountBalance2 - excess >= 0) {
      //Withrdaw from excess from second account, and set first account to $0
      accountbalance2 -= excess;
      accountBalance1 = 0;
      //Update amount on screen
        $(`#${account1}-balance`).text(accountBalance1);
        $(`#${account2}-balance`).text(accountBalance2);
    } else {
      //Too broke :(
      $(`#${account1}-balance`).addClass("broke").text("Too broke :(");
      $(`#${account2}-balance`).addClass("broke").text("Too broke :(");
    };
  };
};
