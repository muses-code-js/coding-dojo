const assert = require('assert');
function divisibleBy(number, divisor) {
  return number % divisor == 0;
}
function FizzBuzz(number)
{
if (divisibleBy(number, 3)) {
  return 'Fizz';
}else if (number%5==0) {
  return 'Buzz';
}

  return number;

}

describe('Fizz Buzz Game', function() {


  it('returns numbers as the same', () => {

    assert.equal(FizzBuzz(1), 1);
    assert.equal(FizzBuzz(4), 4);

  });

   it('Returns Fizz When number is divisible by 3', () => {

    assert.equal(FizzBuzz(3), 'Fizz');
    assert.equal(FizzBuzz(6), 'Fizz');
  });

  it('Returns Buzz when the number is divisible by 5', () => {


    assert.equal(FizzBuzz(5), 'Buzz');
    assert.equal(FizzBuzz(10), 'Buzz');
  });

});
