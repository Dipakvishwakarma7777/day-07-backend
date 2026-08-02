function bankAccount() {
  let balance = 1000;
  return {
    deposit(Amount) {
      balance += Amount;
      return balance;
    },
    withDraw(Amount) {
      balance -= Amount;
      return balance;
    },
    checkBalance() {
      return balance;
    },
  };
}
const myAccount = bankAccount();
console.log(myAccount.deposit(1000));
console.log(myAccount.withDraw(2200));
console.log(myAccount.checkBalance());
