const accounts = {
  checkingBalance = 0;
  savingsBalance = 0;

  total: function () {
    return this.checkingBalance + this.savingsBalance;
  },

  checkingDeposit: function (amount) {
    this.checkingBalance += parseInt(amount);
  },

  checkingWithdraw: function (amount) {
    if (amount <= this.checkingBalance) {
      this.checkingBalance -= parseInt(amount);
    } else if (amount <= this.total()) {
      const remaining = amount - this.checkingBalance;
      this.checkingBalance = 0;
      this.savingsBalance -= remaining;
    }

    //else if amount <= total
      // withdraw from each
  },

  savingsDeposit: function (amount) {
    this.savingsBalance += parseInt(amount);
  },

  savingsWithdraw: function (amount) {
    if (amount <= this.savingsBalance) {
      this.savingsBalance -= parseInt(amount);
    } else if (amount <= this.total()) {
      const remaining = amoutn - this.savingsBalance;
      this.savingsBalance = 0;
      this.checkingBalance -= remaining;
    }
  }
};
