const accounts = {
  checkingBalance: 0,
  savingsBalance: 0

  total: function () { //called a method as it is within an object. to check in console -> accounts.total
    return this.checkingBalance + this.savingsBalance;
  },

  checkingDeposit: function (amount) {
    this.checkingBalance += parseInt(amount);
  },

  checkingWithdraw: function (amount) {
    if (amount <= this.checkingBalance) {
      this.checkingBalance -= parseInt(amount);
    };
    // to check in console accounts.checkingDeposit ('15') -> accounts.checkingBalance = 15
  } else if (amount <= this.total ()) { // overdraft protection
      const remaining = amount - this.checkingBalance;
      this.checkingBalance = 0;
      this.savingsBalance -= remaining;
  }
    // pseudocode
    // else if amount <= total
      // withdraw from each
  },

  savingsDeposit: function (amount) {
    this.savingsBalance += parseInt(amount);
  },

  savingsWithdraw: function (amount) {
    if (amount <= this.savingsBalance) {
      this.savingsBalance -= parseInt(amount);
    } else if (amount <= this.total ()) { // overdraft protection 
      const remaining = amount - this.savingsBalance;
      this.savingsBalance = 0;
      this.checkingBalance -= remaining;
    }
 }
}
