const assert = require('assert');
const Account = require("./Account");


describe('Banking Kata', () => {
  it('should exist', ()=> {
    const account = new Account();
    assert.notEqual(account, undefined)

  });
  it('function deposit exists', () => {
    const acct = new Account();
    assert.notEqual(acct.deposit, undefined)
  });

  it('function deposit requires a value', () => {
    const acct = new Account();
    try {
      acct.deposit();
    } catch(e) {
      assert.equal(e.message, 'input val undefined');
    }
  });

  it('function deposit requires an integer', () => {
    const acct = new Account();
    try {
      acct.deposit('1');
    } catch(e) {
      assert.equal(e.message, "input val requires to be a number")
    };
  });

  it('withdraw should exists', () => {
    const acct = new Account();
    assert.notEqual(acct.withdraw, undefined)
  });

  it('function withdraw requires a value', () => {
    const acct = new Account();
    
    // Assertion fail -  The error throws before the assertion library can detect it
    //assert.throws(acc.withdraw(), Error);

    // Assertion success - By wrapping the 'withdraw' in a function it acts
    // like a try/catch catching the error thrown by 'acct.withdraw()'
    assert.throws(() => {
      acct.withdraw();
    }, Error);

    // assert.equal(acct.withdraw(), false);
    // assert.equal(acct.withdraw('1'), false);
  });

  it.skip('function withdraw requires an integer', () => {
    const acct = new Account();
    try {
      acct.withdraw('1');
    } catch(e) {
      assert.equal(e.message, "input val requires to be a number")
    };
  });


  it('should have a function called printStatement that returns a string');

});
