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


//checking balance
// let cBalance = $('#checking-balance');
// //saving balance
// let sBalance = $('#savings-balance');


// let button = document.getElementById("lib-button");
//
// let makeMadLib = function(event) {
//   let noun = document.getElementById("noun").value;
//   let adjective = document.getElementById('adjective').value;
//   let person = document.getElementById("person").value;
//   let story = `${person} really likes ${adjective} ${noun}.`
//   document.getElementById('story').innerHTML = 'story';

// button.addEventListener('click', makeMadLib);
/////////////
// JQUERY
// const makeMadLib = function (event) {
//   const noun = $('#noun').val();
//   const adjective = $('#adjective').val();
//   const person = $('#person').val();
//
//   const story = `${person} <strong>really</strong> likes ${adjective} ${noun}.`
//
//   $('#story').html(story); //setter
// }
// // can put this here: $(document).ready(function () {
// $('#lib-button').on('click', makeMadLib);



$(document).ready(function () {

//change these later - makes code more efficient
// $checkingBalanceJ = $('#checking-balance');
// $savingBalanceJ = $('#saving-balance');

//keeping track of checking balance
  // let checkingBalance = $('#checking-balance').val();
  let checkingBalance = 0;
//keeping track of savings balance
  let savingsBalance = 0;

  // let balances = ['#checking-balance'.val, '#savings-balance'.val];

  //Deposit function - Checking
  const depositCheck = function (event) {
      let checkingAmountStr = ($('#checking-amount').val()); //amount user inputs
      let checkingAmount = parseInt(checkingAmountStr)
      // let checkingBalance = parseInt($('#checking-balance'))
      // console.log(checkingBalance);
      $('#checking-balance').html(checkingAmount); //set the display as the amount entered by user
      checkingBalance = checkingBalance + checkingAmount;
      console.log(checkingBalance);
      $('#checking-balance').html(checkingBalance); //set the display as the amount entered by user + existing balance
      if (checkingBalance > 0) {
        $('.balanceC').css({'background-color': '#E3E3E3'})
      };
  };

//Withdraw function - Checking
  const withdrawCheck = function (event) {
    let checkingAmountStr = $('#checking-amount').val();
    let checkingAmount = parseInt(checkingAmountStr);
    $('#checking-balance').html(checkingAmount);
    //   if (checkingBalance - checkingAmount < 0) { //checking if user withdrawal will cause balance to become negative, and if so, disallowing withdrawal
    //   $('#checking-balance').html(checkingBalance);
    //   alert('You do not have enough funds');
    // } else {
    //   checkingBalance = checkingBalance - checkingAmount;
    //   $('#checking-balance').html(checkingBalance);
    // };
      if (checkingBalance === 0) {
        $('.balanceC').css({'background-color': 'red'});
      };
  };

  //Overdraft function - Checking
  const overdraftCheck = function (event) {
    let checkingAmountStr = $('#checking-amount').val();
    let checkingAmount = parseInt(checkingAmountStr);

      if (checkingAmount > (checkingBalance + savingsBalance)) {
        $('#checking-balance').html(checkingBalance);
        $('#savings-balance').html(savingsBalance);
        alert('You do not have enough funds');
      } else if (checkingBalance - checkingAmount > 0) {
        checkingBalance = checkingBalance - checkingAmount;
        $('#checking-balance').html(checkingBalance);
      } else {
      // if (checkingBalance - checkingAmount < 0) {
      // } else if (checkingAmount < (checkingBalance + savingsBalance)) {
      // } else if ((checkingBalance - checkingAmount < 0) && savingsBalance - overdraftC > 0)
        let zeroBalanceC = 0;
        let progressBalanceC = checkingBalance;
        checkingBalance = 0;
        $('#checking-balance').html(zeroBalanceC);
        let overdraftC = checkingAmount - progressBalanceC;
        savingsBalance = savingsBalance - overdraftC;
        $('#savings-balance').html(savingsBalance);
      };
        // if (savingsBalance - overdraftC < 0) {
        // $('#savings-balance').html(savingsBalance);
        // alert('You do not have enough funds');
        // } else {

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

 //Withdraw function - Savings
  const withdrawSave = function (event) {
    let savingsAmountStr = $('#savings-amount').val();
    let savingsAmount = parseInt(savingsAmountStr);
    //  $('#savings-balance').html(savingsAmount);
    // if (savingsBalance - savingsAmount < 0) {
    //   $('#savings-balance').html(savingsBalance);
    //   alert('You do not have enough funds');
    // } else {
    //   savingsBalance = savingsBalance - savingsAmount;
    //   $('#savings-balance').html(savingsBalance);
    // };
    if (savingsBalance === 0) {
      $('.balanceS').css({'background-color': 'red'});
      };
  };
//Overdraft function - savings
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
        // if (checkingBalance - overdraftS < 0) {
        //   $('#checking-balance').html(checkingBalance);
        //   alert('You do not have enough funds');
        // } else {

const withdrawalCMethod = function (event) {
  withdrawCheck();
  overdraftCheck();
};

const withdrawalSMethod = function (event) {
  withdrawSave();
  overdraftSave();
};

//EVENTS
  $("#checking-deposit").on('click', depositCheck);
  $("#checking-withdraw").on('click', withdrawalCMethod);
  $("#savings-deposit").on('click', depositSave);
  $("#savings-withdraw").on('click', withdrawalSMethod);

});


/// JOELS SOLUTION

const checkForZero = function () {
  $('.zero').removeClass('zero');
  const checkingBalance = +( $('#checking-balance').text().slice(1) );
  if ( 0 === checkingBalance) {
    $('#checking-balance').addClass('zero');
  }

  const savingsBalance = +( $('#savings-balance').text().slice(1) );
  if ( 0 === savingsBalance) {
  $('#savings-balance').addClass('zero')
  }
}

$(document).ready(function () {
  checkForZero();

  $('#checking-deposit').on('click', function () {
  const amount = parseInt($('#checking-amount').val()); //const amount = +($('#checking-amount').val() ); -> can also do +"11" or +"-100" to change int to num
  const balance = +( $('#checking-balance').text().slice(1) ); // skip the $
  $('#checking-balance').text( '$' + (amount + balance);
  console.log(amount, balance, amount + balance );
  checkForZero();
});

  $('#checking-withdraw').on('click', function () {
    const amount = parseInt($('#checking-amount').val());
    const balance = +( $('#checking-balance').text().slice(1) );
    const otherBalance = +( $('#savings-balance').text().slice(1) );
    // retrieve other balance
    const newBalance = balance - amount;
    if (newBalance >= 0) {
    $('#checking-balance').text( '$' + (newBalance);
    checkForZero();
  } else if (amount <= balance + otherBalance) {
    const remaining = amount - balance; //how much do we need from other account?
    $('#checking-balance').text( '$0';
    $('#savings-balance').text( '$' + (otherBalance - remaining));
  }
  checkForZero();
  }
    // if amount <= balance
      // withdraw from this account
    // else if amount <= balance + otherBalance
      // withdraw from both accounts
    // else
      // you dont have enough money


  });

  $('#savings-deposit').on('click', function () {
  const amount = parseInt($('#savings-amount').val());
  const balance = +( $('#savings-balance').text().slice(1) ); // skip the $
  $('#savings-deposit').text( '$' + (amount + balance);
  checkForZero();
};

  $('#savings-withdraw').on('click', function () { //this code is not correct, haven't changed it properly
    const amount = parseInt($('#savings-amount').val());
    const balance = +( $('#savings-balance').text().slice(1) );
    const newBalance = balance - amount;
    if (newBalance >= 0) {
    $('#savings-balance').text( '$' + (newBalance);
    checkForZero();
  } else if (amount <= balance + otherBalance) {
    const remaining = amount - balance; //how much do we need from other account?
    $('#savings-balance').text( '$0');
    $('#savings-balance').text( '$' + (otherBalance - remaining));
  }
  checkForZero();
  }
  });
});


// JOELS SECOND SOLUTION with accounts.js file

const render = function () { // render means show us some info on screen, updates in one go, always shows you latest true values
    $('#checking-balance').text('$' + accounts.checkingBalance);
    $('#savings-balance').text('$' + accounts.savingsBalance);

    $('.zero').removeClass('zero');

    //check for zero balances
    if (accounts.savingsBalance === 0) {
      $('#savings-balance').addClass('zero');
    }
    if (accounts.checkingBalance === 0) {
      $('#checking-balance').addClass('zero');
    }
}

$(document).ready(function () {
  render(); // ensures it is red initially
  $('#checking-deposit').on('click', function () {
    const amount = $('#checking-amount').val();
    accounts.checkingDeposit(amount);
    render();
  });

  $('#checking-withdraw').on('click', function () {
    const amount = $('#checking-amount').val();
    accounts.checkingWithdraw(amount);
    render();
  });

  $('#savings-deposit').on('click', function () {
    const amount = $('#savings-amount').val();
    accounts.savingDeposit (amount);
    render();
  });

  $('#savings-withdraw').on('click', function() {
    const amount = $('#savings-amount').val();
    accounts.savingWithdraw (amount);
    render();
  });

});
