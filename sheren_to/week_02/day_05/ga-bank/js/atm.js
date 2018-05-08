console.log("GA Bank");


$(document).ready(function() {

  let checkingAccount = 0;
  let savingsAccount = 0;


  $('#checking-amount').val();//amount deposited or withdrawn
  $('#savings-amount').val();


 $('#checking-deposit').on('click', function() {
    checkingAccount = checkingAccount + +$('#checking-amount').val();
    $('#checking-balance').text('$' + checkingAccount);
    if (checkingAccount >= 0) {
    $('#checking-balance').css({'background-color': '#e3e3e3'});
    }
  });

  $('#savings-deposit').on('click', function() {
     savingsAccount = savingsAccount + +$('#savings-amount').val();
     $('#savings-balance').text('$' + savingsAccount);
     if (savingsAccount >= 0) {
     $('#savings-balance').css({'background-color': '#e3e3e3'});
   }
   });

 $('#checking-withdraw').on('click', function() {

      if ( checkingAccount > +$('#checking-amount').val() ) {
        checkingAccount = checkingAccount - +$('#checking-amount').val();
        $('#checking-balance').text('$' + checkingAccount);


      } else if ( checkingAccount <= +$('#checking-amount').val() ) {

          if ( checkingAccount + savingsAccount >= +$('#checking-amount').val() ) {

            $('#savings-balance').text('$' + (savingsAccount + checkingAccount - +$('#checking-amount').val() ));
            savingsAccount = savingsAccount + checkingAccount - +$('#checking-amount').val();
            checkingAccount = 0;
            $('#checking-balance').text('$' + checkingAccount);
            $('#checking-balance').css({'background-color': 'red'});
              if ( savingsAccount === 0 ) {
              $('#savings-balance').css({'background-color': 'red'});
              }

          } else {
            alert('You do not have enough money to withdraw.');
          }
        }
  });

 $('#savings-withdraw').on('click', function() {

    if ( savingsAccount > +$('#savings-amount').val() ) {
      savingsAccount = savingsAccount - +$('#savings-amount').val();
      $('#savings-balance').text('$' + savingsAccount);


    } else if (savingsAccount <= +$('#savings-amount').val() ) {

        if (checkingAccount + savingsAccount >= +$('#savings-amount').val() ) {

          $('#checking-balance').text('$' + (checkingAccount + savingsAccount - +$('#savings-amount').val() ));
          checkingAccount = checkingAccount + savingsAccount - +$('#savings-amount').val();
          savingsAccount = 0;
          $('#savings-balance').text('$' + savingsAccount);
          $('#savings-balance').css({'background-color': 'red'});
            if ( checkingAccount === 0 ) {
              $('#checking-balance').css({'background-color': 'red'});
            }


        } else {
          alert('You do not have enough money to withdraw.');
        }
      }
  });
});
