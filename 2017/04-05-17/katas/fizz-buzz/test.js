const assert = require('assert');

const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 ===0) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  }
  return num;
}

const FizzBuzz1 = (num) => {
  return [1,2]
}

describe('Fizz Buzz', function() {

  it('returns 1 for 1', () => {
    const expected = 1;
    const actual = fizzBuzz(1);
    assert.equal(expected, actual);
  });

  it('return 2 for 2', () => {
    const expected = 2;
    const actual = fizzBuzz(2);
    assert.equal(expected, actual);
  });

  it('is a multiple of 3', () => {
    const expected = 'Fizz';
    const actual = fizzBuzz(3);
    assert.equal(expected, actual);
  });

  it('returns Buzz for multiple of 5 ', () => {
    const expected = 'Buzz';
    const actual = fizzBuzz(5);
    assert.equal(expected, actual);
  });

  it('returns FizzBuzz for multiple of 3 and 5', () => {
    const expected = 'FizzBuzz';

    const actual = fizzBuzz(30);
    assert.equal(expected, actual);
  });

  it('returns Generalized FizzBuzz for multiple of 3 and 5', () => {
    assert.deepEqual([1], FizzBuzz1(1));
    assert.deepEqual([1,2], FizzBuzz1(2));

  });


});
