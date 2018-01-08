console.log("GA Bank");


$(document).ready(function() {

   let checkingAccount = 0;
   let savingsAccount = 0;
  //
  // $('#checking-amount').val();//amount deposited or withdrawn
  // $('#savings-amount').val();

  const withdraw = function(primary, secondary, withdrawalAmount) {
    //withdraw money from account
    let primaryAccountBalance =   +$(primary).val();
      console.log('primary account balance' + primaryAccountBalance);
    // if ( account < 0 ) {
    //   alert('balance overdrawn!');
    // } else {
    //   $('#checking-balance').text('$' + account);
    // }
  };

 $('#checking-deposit').on('click', function() {
    checkingAccount = checkingAccount + +$('#checking-amount').val();
    $('#checking-balance').text('$' + checkingAccount);
  });

  $('#checking-withdraw').on('click', function() {
     withdraw('#checking-balance', '#savings-balance', '#checking-amount')
  });
 // $('#checking-withdraw').on('click', function() {
 //    let account = account - +$('#checking-amount').val();
 //
 //    if ( account < 0 ) {
 //      alert('balance overdrawn!');
 //    } else {
 //      $('#checking-balance').text('$' + account);
 //    }
 // });

 $('#savings-deposit').on('click', function() {
    savingsAccount = savingsAccount + +$('#savings-amount').val();
    $('#savings-balance').text('$' + savingsAccount);
  });

 $('#savings-withdraw').on('click', function() {
    savingsAccount = savingsAccount - +$('#savings-amount').val();

    if ( savingsAccount < 0 ) {
      alert('balance overdrawn!');
    } else {
      $('#savings-balance').text('$' + savingsAccount);
    }
  });

});
