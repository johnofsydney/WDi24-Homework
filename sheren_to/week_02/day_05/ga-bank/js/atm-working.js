console.log("GA Bank");


$(document).ready(function() {

  let checkingAccount = 0;
  let savingsAccount = 0;
  let balance = checkingAccount + savingsAccount;

  $('#checking-amount').val();//amount deposited or withdrawn
  $('#savings-amount').val();


 $('#checking-deposit').on('click', function() {
    checkingAccount = checkingAccount + +$('#checking-amount').val();
    $('#checking-balance').text('$' + checkingAccount);
  });

  $('#savings-deposit').on('click', function() {
     savingsAccount = savingsAccount + +$('#savings-amount').val();
     $('#savings-balance').text('$' + savingsAccount);
   });

 $('#checking-withdraw').on('click', function() {

      if ( checkingAccount >= +$('#checking-amount').val() ) {
        checkingAccount = checkingAccount - +$('#checking-amount').val();
        $('#checking-balance').text('$' + checkingAccount);

      } else if ( checkingAccount < +$('#checking-amount').val() ) {

          if ( checkingAccount + savingsAccount >= +$('#checking-amount').val() ) {

            $('#checking-balance').text('$' + (checkingAccount - checkingAccount));
            $('#savings-balance').text('$' + (savingsAccount + checkingAccount - +$('#checking-amount').val() ));
          } else {
            alert('You do not have enough money to withdraw.');
          }
          return checkingAccount;
        }
  });

 $('#savings-withdraw').on('click', function() {

    if ( savingsAccount >= +$('#savings-amount').val() ) {
      savingsAccount = savingsAccount - +$('#savings-amount').val();
      $('#savings-balance').text('$' + savingsAccount);

      } else if (savingsAccount < +$('#savings-amount').val() ) {

        if (checkingAccount + savingsAccount >= +$('#savings-amount').val() ) {

          $('#savings-balance').text('$' + (savingsAccount - savingsAccount));
          $('#checking-balance').text('$' + (checkingAccount + savingsAccount - +$('#savings-amount').val() ));
        } else {
          alert('You do not have enough money to withdraw.');
        }
        return savingsAccount;
      }
  });
});
