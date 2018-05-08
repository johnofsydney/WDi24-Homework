// * Keep track of the checking and savings balances somewhere
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

$(document).ready(function () {

//keeping track of checking balance
  let checkingBalance = 0;
//keeping track of savings balance
  let savingsBalance = 0;


  //Deposit function - Checking
  const depositCheck = function (event) {
      let checkingAmountStr = ($('#checking-amount').val()); //amount user inputs
      let checkingAmount = parseInt(checkingAmountStr)
      $('#checking-balance').html(checkingAmount); //set the display as the amount entered by user
      checkingBalance = checkingBalance + checkingAmount;
      console.log(checkingBalance);
      $('#checking-balance').html(checkingBalance); //set the display as the amount entered by user + existing balance
      if (checkingBalance > 0) {
        $('.balanceC').css({'background-color': '#E3E3E3'})
      };
  };

  //Withdrawal and Overdraft function - Checking
  const overdraftCheck = function (event) {
    let checkingAmountStr = $('#checking-amount').val();
    let checkingAmount = parseInt(checkingAmountStr); //changing input to integer
      if (checkingAmount > (checkingBalance + savingsBalance)) { //if withdrawal amount is larger than amount in both accounts together
        $('#checking-balance').html(checkingBalance);
        $('#savings-balance').html(savingsBalance);
        alert('You do not have enough funds');
      } else if (checkingBalance - checkingAmount > 0) { //if withdrawal is possible in one account, avoiding overdraft
        checkingBalance = checkingBalance - checkingAmount;
        $('#checking-balance').html(checkingBalance);
      } else { //all other situations i.e. if withdrawal is not possible without overdraft
        let zeroBalanceC = 0; //to display zero amount to user
        let progressBalanceC = checkingBalance;
        checkingBalance = 0; //to revert amount back to zero
        $('#checking-balance').html(zeroBalanceC);
        let overdraftC = checkingAmount - progressBalanceC;
        savingsBalance = savingsBalance - overdraftC;
        $('#savings-balance').html(savingsBalance);
      };
    if (checkingBalance === 0) {
      $('.balanceC').css({'background-color': 'red'});
    };

    if (savingsBalance === 0) {
        $('.balanceS').css({'background-color': 'red'});
    };
  };

  //Deposit function - Savings
  const depositSave = function (event) {
    let savingsAmountStr = $('#savings-amount').val();
    let savingsAmount = parseInt(savingsAmountStr);
    $('#savings-balance').html(savingsAmount); //set the display as the amount entered by user
    savingsBalance = savingsBalance + savingsAmount;
    $('#savings-balance').html(savingsBalance);
    if (savingsBalance > 0) {
      $('.balanceS').css({'background-color': '#E3E3E3'})
    };
  };

//Withdrawal and Overdraft function - savings
  const overdraftSave = function (event) {
    let savingsAmountStr = $('#savings-amount').val();
    let savingsAmount = parseInt(savingsAmountStr);
      if (savingsAmount > (savingsBalance + checkingBalance)) {
        $('#savings-balance').html(savingsBalance);
        $('#checking-balance').html(checkingBalance);
        alert('You do not have enough funds');
      } else if (savingsBalance - savingsAmount > 0) {
        savingsBalance = savingsBalance - savingsAmount;
        $('#savings-balance').html(savingsBalance);
      } else {
          let zeroBalanceS = 0;
          let progressBalanceS = savingsBalance;
          savingsBalance = 0;
          $('#savings-balance').html(zeroBalanceS);
          let overdraftS = savingsAmount - progressBalanceS;
          checkingBalance = checkingBalance - overdraftS;
          $('#checking-balance').html(checkingBalance);
      };
      if (savingsBalance === 0) {
          $('.balanceS').css({'background-color': 'red'});
      };
      if (checkingBalance === 0) {
        $('.balanceC').css({'background-color': 'red'});
      };
  };

//EVENTS
  $("#checking-deposit").on('click', depositCheck);
  $("#checking-withdraw").on('click', overdraftCheck);
  $("#savings-deposit").on('click', depositSave);
  $("#savings-withdraw").on('click', overdraftSave);

});
