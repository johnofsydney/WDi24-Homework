
const accounts = {
  checkingBalance: 0,
  savingsBalance: 0,

  total: function() {
      return this.checkingBalance + this.savingsBalance; //call acccounts.toal in console

  },


  checkingDeposit: function(amount) {
    this.checkingBalance += parseInt(amount); //a += b => a = a + b
  },

  checkingWithdraw: function (amount) {
    if (amount <= this.checkingBalance) {
    this.checkingBalance -= parseInt(amount);

    //else if amount <= total
    //withdraw from each
    } else if (amount <= this.toal() ) {
      const remaining = amount - this.checkinBalance;
      this.checkinBalance = 0;
      this.savingsBalance -= remaining;
    }


  },

  savingsDeposit: function (amount) {
    this.savingsBalance += parseInt(amount);
  },

  savingsWithdraw: function (amount) {
    if (amount <= this.savingsBalance) {
      this.savingsBalance -= parseInt(amount);
    } else if (amount <= this.total() ){ //overdraft protection
      
    }
  },

}
