// Assignment 2
// Task1
function account(account_number, balance, owner) {
    this.account_number = account_number;
    this.balance = balance;
    this.owner = owner;

    this.get_balance = function () {
         return this.balance;
    };

    this.get_account_number = function () {
         return this.account_number;
    };

    this.get_owner = function () {
         return this.owner;
    };

    //      Task2
    this.deposit = function (funds) {
         if (typeof funds === "number" || funds instanceof Number) {
              this.balance += funds;
         }
    };

    this.withdraw = function (amount) {
         if (typeof amount === "number" || amount instanceof Number) {
              if (this.balance > amount) {
                   this.balance -= amount;
              }
         }
    };

    this.details = function () {
         return `balance - ${this.balance}, owner - ${this.owner}, account number - ${this.account_number}`;
    };

    //      Task 3
    this.calculate_interest_after_years = function (years, interest_rate) {
         // let interest = this.balance * (Math.pow(1 + interest_rate, years) – 1);
         return this.balance * (Math.pow(1 + interest_rate, years) - 1);
    };
}

let new_account = new account(10010101101, 1000.0, "Jimmy");
// testing account
console.log(`testing account`);
console.log(new_account.details());
// testing deposit
console.log(`testing deposit`);
new_account.deposit(100);
console.log(new_account.get_balance());
// testing withdraw
console.log(`testing withdraw`);
new_account.withdraw(300);
console.log(new_account.get_balance());
// testing interest calculator
console.log(`testing interest calculator`);
console.log(`${new_account.calculate_interest_after_years(5, 0.05)} in interest will be accrued.`);
