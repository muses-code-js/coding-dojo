const assert = require('assert');
const returnNumber = (x) => {

  if (x%3 == 0 && x%5 == 0) {
    return 'FizzBuzz'
  } else if (x%3 == 0) {
    return 'Fizz';
  } else if (x%5 == 0) {
    return 'Buzz';
  }
  return x;
}

describe('Fizz buzz game', function() {

  it('returns x for x', () => {
    assert.equal(returnNumber(1), 1);
    assert.equal(returnNumber(2), 2);
    assert.equal(returnNumber(8), 8);
  });

  it('returns Fizz for multiples of 3', () => {
    assert.equal(returnNumber(3), 'Fizz');
    assert.equal(returnNumber(6), 'Fizz');
    assert.equal(returnNumber(12), 'Fizz');
  }); 

  it('returns Buzz for multiples of 5', () => {
    assert.equal(returnNumber(5), 'Buzz');
    assert.equal(returnNumber(10), 'Buzz');
    assert.equal(returnNumber(20), 'Buzz');
  }); 

  it('returns FizzBuzz for multiples of 5 and 3', () => {
    assert.equal(returnNumber(15), 'FizzBuzz');
    assert.equal(returnNumber(30), 'FizzBuzz');
    assert.equal(returnNumber(45), 'FizzBuzz');
  }); 
  
  

  
});
