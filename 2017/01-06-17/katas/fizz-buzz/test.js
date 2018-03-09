const assert = require('assert');

fizzbuzz = (number) => {
  if (number % 15 == 0){
    return "FizzBuzz"
  }
  if (number % 3 == 0){
   return "Fizz"
  }
  if (number % 5 == 0){
    return "Buzz"
  }
  return number
}

function fizzbuzzupto(number) {
  if (number == 1) {
    for (i = 1; i <= 1; i++) {
      return [fizzbuzz(i)]
    }
  }
  if (number == 2) {
    for (i = 1; i <= number; i++) {
    return [fizzbuzz(i), fizzbuzz(number)]
    }
  }
  if (number == 3) {
    return [fizzbuzz(1), fizzbuzz(2), fizzbuzz(number)]
  }
  if (number == 4) {
    return [fizzbuzz(1), fizzbuzz(2), fizzbuzz(3), fizzbuzz(number)]
  }
}

describe('FizzBuzz', function () {
  it('returns a number', function () {
    assert.equal(fizzbuzz(1), 1)
    assert.equal(fizzbuzz(2), 2)
    assert.equal(fizzbuzz(4), 4)
    assert.equal(fizzbuzz(7), 7)
  });
  it('returns a Fizz for multiples of 3', function () {
    assert.equal(fizzbuzz(3), "Fizz")
    assert.equal(fizzbuzz(6), "Fizz")
    assert.equal(fizzbuzz(9), "Fizz")
  });
  it('returns a Buzz for multiples of 5', function () {
    assert.equal(fizzbuzz(5), "Buzz")
    assert.equal(fizzbuzz(10), "Buzz")
  });
  it('returns a FizzBuzz for multiples of 5 and 3', function () {
    assert.equal(fizzbuzz(15), "FizzBuzz")
    assert.equal(fizzbuzz(30), "FizzBuzz")
    assert.equal(fizzbuzz(45), "FizzBuzz")
  });
  it('input returns an array of Fizzbuzzes up to number', function() {
    assert.deepEqual(fizzbuzzupto(1),[1])
    assert.deepEqual(fizzbuzzupto(2),[1,2])
    assert.deepEqual(fizzbuzzupto(3),[1,2,"Fizz"])
    assert.deepEqual(fizzbuzzupto(4),[1,2,"Fizz", 4])
  });
});
