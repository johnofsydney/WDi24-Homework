
//Will update screen for everything, everytime we call it, it will show the current values
const render = function () {
  $("#checking-balance").text("$" + accounts.checkingBalance);
  $("#savings-balance").text("$" + accounts.checkingBalance);


  $(".zero").removeClass("zero");
  //Check for zero
  if (accounts.checkingBalance === 0) {
    $("#checking-balance").addClass("zero");
  };

  if (accounts.savingsBalance === 0) {
    $("#savings-balance").addClass("zero");
  };
};




$(document).ready(function () {
  render();
  $("#checking-deposit").on("click", funciton () {
    const amount = $("#checking-amount").val();
    accounts.checkingDeposit( amount );
    render();
  });

  $("#checking-withdraw").on("click", function () {
    const amount = $("#checking-amount").val();
    accounts.checkingWithdraw ( amount );
  });

  $("#savings-deposit").on("click", funciton () {
    const amount = $("#savings-amount").val();
    accounts.savingsDeposit( amount );
    render();
  });

  $("#savings-withdraw").on("click", function () {
    const amount = $("#savings-amount").val();
    accounts.savingsWithdraw ( amount );
  });

});
