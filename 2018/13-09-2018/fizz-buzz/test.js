const assert = require('assert');

describe('Fizz Buzz Game', function() {

  it('should print fizz if a number is a multiple of 3', () => {

    const result = fizzbuzz(3);

    assert.equal(result, "fizz");
  });

  it('should print buzz if a number is a multiple of 5', () => {

    const result = fizzbuzz(5);

    assert.equal(result, "buzz");
  });

  it('should print fizzbuzz if a number is a multiple of 5 and 3', () => {

    const result = fizzbuzz(15);

    assert.equal(result, "fizzbuzz");
  });
  it('should print the number as a string if not divisible by neither 5 nor 3', () => {


    const result = fizzbuzz(1);

    assert.equal(result, "1");
  });

});

const fizzbuzz = function(number){

  if(number%15==0){
    return "fizzbuzz";
  }

  if(number%3==0){
    return "fizz";
  }
  if(number%5==0){
    return "buzz";
  }
  return number;

}
