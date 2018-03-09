const assert = require('assert');
const divisibleBy = (divisor, number) => number % divisor === 0;
const divisibleBy3 = (number) => divisibleBy(3, number);
const divisibleBy5 = (number) => divisibleBy(5, number);
const divisibleBy15 = (number) => divisibleBy(15, number);

const fizzBuzz = (number) => {
  if (divisibleBy15(number)) {
    return 'fizzBuzz';
  } else if (divisibleBy3(number)) {
    return 'fizz';
  } else if (divisibleBy5(number)) {
    return 'buzz';
  }
  return number;
}

describe('Fizz Buzz Game', function() {

  it('Number not divisible by 3 and 5 returns number', () => {
    assert.equal(fizzBuzz(1), 1);
    assert.equal(fizzBuzz(2), 2);
    assert.equal(fizzBuzz(11), 11);
  });

  it('Number divisible by 5 returns "buzz"', () => {
    assert.equal(fizzBuzz(5),"buzz");
    assert.equal(fizzBuzz(10),"buzz");
  });

  it('Number divis by 3 returns "fizz"', () => {
    assert.equal(fizzBuzz(3),"fizz");
    assert.equal(fizzBuzz(6),"fizz");
    assert.equal(fizzBuzz(9),"fizz");
  });

  it('Number divisible by 15 returns "fizzBuzz"', () => {
    assert.equal(fizzBuzz(15),"fizzBuzz");
    assert.equal(fizzBuzz(30),"fizzBuzz");
  });

});
