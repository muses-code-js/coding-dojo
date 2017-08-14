const assert = require('assert');

var balance = 0;

const withdraw =(amount) => {
  balance -= amount;
};

const getbalance =() => {
  return balance;
};

const deposit = (amount) => {
  balance += amount;
};


describe('Banking Kata', () => {
  describe('depositing', () => {
    it('credits the given amount to our account', () => {
      balance = 0;
      deposit(0);
      assert.equal(getbalance(),0); 
    });

    it('deposit 1 gives 1', () => {
      balance = 0;
      deposit(1);
      assert.equal(getbalance(),1);
    });

    it('adds to the balance', () => {
      balance = 0;
      deposit(1);
      deposit(2);
      assert.equal(getbalance(), 3);
    });
  });

  describe('withdrawal', () => {
    it('withdraws the specified amount', () => {
      balance = 0;
      withdraw(0);
      assert.equal(getbalance(), 0); 
    });

    it('deducts from the balance', () => {
      balance = 1;
      withdraw(1);
      assert.equal(getbalance(), 0); 
    });    
  });
});
