
const checkForZero = function () {
  $('.zero').removeClass('zero');

  const checkingBalance = +( $('#checking-balance').text().slice(1) );

      if ( 0 === checkingBalance ) {
        $('#checking-balance').addClass('zero');
        }
      }

const savingsBalance = +( $('#savings-balance').text().slice(1) );

    if ( 0 === savingsBalance ) {
      $('#savings-balance').addClass('zero');
      }
    }



$(document).ready(function() {
  checkForZero();

  //$('*').on('click', checkForZero() ); can still use but may be confusing


  $('#checking-deposit').on('click', function () {
    const amount = +( $('#checking-amount').val() ); // could use parseInt($())
    const balance = +( $('#checking-balance').text().slice(1) ); //to skip dollar sign therefore use slice
    $('#checking-balance').text( '$' + ( amount + balance ) );
    checkForZero();
  });

  $('#checking-withdraw').on('click', function() ) {
    const amount = +( $('#checking-amount').val() );
    const balance = +( $('#checking-balance').text().slice(1) );
    const otherBalance = +( ('#savings-balance').text().slice(1));

    const newBalance = balance - amount;
    if (newBalance >= 0 ) {
      $('#checking-balance').text( '$' + newBalance );
    } else if ( amount <= balance + otherBalance ){
      const remaining = amount -balance;
      $('#checking-balance').text( '$0' );
      $('#savings-balance').text( '$' + (otherBalance - remaining);
    }
      checkForZero();
  }
});


// retrieve other balance
//if amount <= balance//withdraw from this accounts
//else if amount <= balance + other acoount
//withdraw from both accounts
//else no money


  $('#savings-deposit').on('click', function () {
    const amount = +( $('#savings-amount').val() ); // could use parseInt($())
    const balance = +( $('#savings-balance').text().slice(1) ); //to skip dollar sign therefore use slice
    $('#savings-balance').text( '$' + ( amount + balance ) );
    checkForZero();
  });

  $('#savings-withdraw').on('click', function() ) {
    const amount = +( $('#savings-amount').val() );
    const balance = +( $('#savings-balance').text().slice(1) );
    const otherBalance = +( ('#checking-balance').text().slice(1));

    const newBalance = balance - amount;
    if (newBalance >= 0 ) {
      $('#savings-balance').text( '$' + newBalance );
    } else if ( amount <= balance + otherBalance ){
      const remaining = amount -balance;
      $('#savings-balance').text( '$0' );
      $('#checking-balance').text( '$' + (otherBalance - remaining);
    }
      checkForZero();
  });
});





});
