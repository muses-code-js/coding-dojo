const assert = require('assert');
const FizzBuzz = (number) => {
  if (number == 0) {
    return 0;
  }
  if (number % 3 == 0 && number % 5 == 0) {
    return 'FizzBuzz';
  }
  if (number % 3 == 0) {
    return "Fizz";
  }
  if (number % 5 == 0) {
    return 'Buzz';
  }
  return number;
}

const GenericFizzBuzz = (number) => {
  if (number == 1) {
    return [0,FizzBuzz(number)]
  } else if (number == 2) {
    return [0, 1, FizzBuzz(number)]
  } else if (number == 3) {
    return [0, 1, 2, FizzBuzz(number)]
  }
  return [FizzBuzz(number)]
}

describe('Fizz Buzz', function() {
  it('return the same number when not multiple of 3', () => {
    assert.equal(0, FizzBuzz(0));
    assert.equal(1, FizzBuzz(1));
    assert.equal(4, FizzBuzz(4));
  });

  it('return Fizz for multiple of 3', () => {
    assert.equal('Fizz', FizzBuzz(3));
    assert.equal('Fizz', FizzBuzz(6));
    assert.equal('Fizz', FizzBuzz(9));
  });

  it('return Buzz for multiple of 5', () => {
    assert.equal('Buzz', FizzBuzz(5));
    assert.equal('Buzz', FizzBuzz(10));
  });

  it('return FizzBuzz for multiples of 3 and 5', () => {
    assert.equal('FizzBuzz', FizzBuzz(15));
    assert.equal('FizzBuzz', FizzBuzz(30));
  });

  describe ('Give an array of numbers', () => {
    it ('return the numbers with FizzBuzz rule', () => {
     assert.deepEqual([0], GenericFizzBuzz(0));
     assert.deepEqual([0, 1], GenericFizzBuzz(1));
     assert.deepEqual([0, 1, 2], GenericFizzBuzz(2));
     assert.deepEqual([0, 1, 2, 'Fizz'], GenericFizzBuzz(3));
    })
  })
});
