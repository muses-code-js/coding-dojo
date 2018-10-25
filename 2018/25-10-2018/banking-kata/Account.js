class Account {
  deposit(val){
    if (val === undefined) throw new Error('input val undefined');
    if (typeof val !== "number") throw new Error('input val requires to be a number');
    
  };
  withdraw(val){
    if(val === undefined) throw new Error('Input val undefined');

  }
}

module.exports = Account;