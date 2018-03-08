const assert = require('assert');

const shoutFizzBuzz = function(num) {
    if (num % 3 == 0 && num % 5 == 0)
      return 'FizzBuzz';
    else if (num % 3 == 0)
      return 'Fizz';
    else if (num % 5 == 0)
      return 'Buzz';
    return num;
}

describe('FizzBuzz', function() {

it('prints number can not be divided by 3 and 5', () => {
    assert.equal(shoutFizzBuzz(1), 1);
    assert.equal(shoutFizzBuzz(2), 2);
  });

  it('prints Fizz when number divisible by 3', () => {
    const expected = 'Fizz';
    assert.equal(shoutFizzBuzz(3), expected);
    assert.equal(shoutFizzBuzz(6), expected);
    assert.equal(shoutFizzBuzz(9), expected);
  });

  it('prints Buzz when number divisible by 5', () => {
    const expected = 'Buzz';
    assert.equal(shoutFizzBuzz(5), expected);
    assert.equal(shoutFizzBuzz(10), expected);
  });

  it('prints FizzBuzz when number divisible by 3 and 5', () => {
    const expected = 'FizzBuzz';
    assert.equal(shoutFizzBuzz(15), expected);
    assert.equal(shoutFizzBuzz(30), expected);
  });

  it('prints sequence of numbers', () => {
    const expected = 'FizzBuzz';
    assert.equal(shoutFizzBuzz(15), expected);
    assert.equal(shoutFizzBuzz(30), expected);
  });
});
