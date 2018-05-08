
const render = function() {
  $('#checking-balance').text('$' + accouts.checkingBalance);
  $('#savings-balance').text('$' + accouts.savingsBalance);
}


  $('.zero').removeClass('zero');
  // check for zero balance
    if (accounts.checkingBalance === 0) {
      $('#checking-balance').addClass('zero');
    }
    if (accounts.savingsBalance === 0) {
      $('#savings-balance').addClass('zero');
    }





$(document).ready(function() {
  render();

    $('#checking-deposit').on('click', function() {
      const amount = $('#checking-amount').val();
      accounts.checkingDeposit(amount);
      //$('#checking-balance').text('$' + accounts.checkingBalance);
      render();
    })

    $('#checking-withdraw') {
      const amount = $('#checking-amount').val();
      accounts.checkingWithdraw(amount);
      render();
    }

    $('#savings-deposit').on('click', function() {
      const amount = $('#savings-amount').val();
      accounts.savingsDeposit(amount);
      //$('#savings-balance').text('$' + accounts.savingsBalance);
      render();
    })

// with savings bit






});
