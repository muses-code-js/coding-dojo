const assert = require('assert');

var balance = 0;
var history = [];

function deposit(x) {
  if(x<0){
    history.push(balance);
    return 'DECLINED';
  }
  balance += x;
  history.push(balance);
  return balance;
}

function withdraw(x){
  if(x>balance || x < 0)
    {
      history.push(balance);
      return 'DECLINED';
    }
  balance -=x;
  history.push(balance);
  return balance;
}

function transaction(){
  return history
}
// TODO, make everything good

describe('Banking Kata', () => {
  it('Print the transaction1', () => {
    const expected = [];
    const actual = transaction();

    assert.deepEqual(actual, expected);
  });
  
  it('works', () => {
    const expected = 0;
    const actual = deposit(0);

    assert.equal(actual, expected);
  });

  it('Print the transaction2', () => {
    const expected = [0];
    const actual = transaction();

    assert.deepEqual(actual, expected);
  });
  it('Deposit == 10', () => {
    const expected = 10;
    const actual = deposit(10);

    assert.equal(actual, expected);
  });

  it('Print the transaction3', () => {
    const expected = [0,10];
    const actual = transaction();

    assert.deepEqual(actual, expected);
  });

  it('Deposit == 90', () => {
    const expected = 100;
    const actual = deposit(90);

    assert.equal(actual, expected);
  });
  

  it('Print the transaction4', () => {
    const expected = [0,10, 100];
    const actual = transaction();

    assert.deepEqual(actual, expected);
  });

  it('Withdraw == 30', () => {
    const expected = 70;
    const actual = withdraw(30);

    assert.equal(actual, expected);
  });
  
  it('Print the transaction5', () => {
    const expected = [0,10,100,70];
    const actual = transaction();

    assert.deepEqual(actual, expected);
  });
  

  it('Withdraw == 100', () => {
    const expected = 'DECLINED';
    const actual = withdraw(100);

    assert.equal(actual, expected);
  });

  it('Print the transaction6', () => {
    const expected = [0,10,100,70,70];
    const actual = transaction();

    assert.deepEqual(actual, expected);
  });

  

  it('Withdraw == -10', () => {
    const expected = 'DECLINED';
    const actual = withdraw(-10);

    assert.equal(actual, expected);
  });

  it('Print the transaction7', () => {
    const expected = [0,10, 100,70,70,70];
    const actual = transaction();

    assert.deepEqual(actual, expected);
  });

  it('Deposit == -10', () => {
    const expected = 'DECLINED';
    const actual = deposit(-10);

    assert.equal(actual, expected);
  });


  it('Print the transaction8', () => {
    const expected = [0,10, 100,70,70,70,70];
    const actual = transaction();

    assert.deepEqual(actual, expected);
  });

});
