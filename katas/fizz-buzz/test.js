const assert = require('chai').assert;

const fizzbuzz = require('./index').fizzbuzz;
const testFizzbuzz = require('./index').testFizzbuzz;


describe('Fizz Buzz Game', function() {
  
  // before(function () {
  //   testFizzbuzz(100);
  // })
 
  it('does not works', () => {
    const expected = true;
    const actual = true;

    assert.equal(actual, expected);
  });

  it('returns null when parameter is not number', function () {
    const actual = fizzbuzz('test');
    const expected = null;

    assert.equal(actual, expected);
  }
  )

  it('return 1 when parameter is 1', function(){
    const actual = fizzbuzz(1);
    const expected = 1;
    assert.equal(actual, expected);
  })

  it('return Fizz when parameter is 3', function () {
    const actual = fizzbuzz(3);
    const expected = "Fizz";
    assert.equal(actual, expected);
  })

  it('return Buzz when parameter is 5', function () {
    const actual = fizzbuzz(5);
    const expected = "Buzz";
    assert.equal(actual, expected);
  })

  it('return Fizz when parameter is 9', function () {
    const actual = fizzbuzz(9);
    const expected = "Fizz";
    assert.equal(actual,expected);
  })
  it('return Fizz when parameter is divisible by 3', function(){
    var random = Math.floor(Math.random() * 100) * 3;
    const actual = fizzbuzz(random);
    const expected = "Fizz";
    assert.include(actual, expected);
  })
  it('return Buzz when parameter is divisible by 5', function(){
    var random = Math.floor(Math.random() * 100) * 5;
    const actual = fizzbuzz(random);
    const expected = "Buzz";
    assert.include(actual, expected);
  })
  it('return FizzBuzz when parameter is divisible by 3 & 5', function(){
    var random = Math.floor(Math.random() * 100) * 15;
    const actual = fizzbuzz(random);
    const expected = "FizzBuzz";
    assert.equal(actual, expected);
  })
  it('return Fizz when parameter conatins 3', function() {
    
    const actual = fizzbuzz(13);
    const expected = "Fizz";
    assert.equal(actual, expected);
  })
  it('return Buzz when parameter conatins 5', function() {
    
    const actual = fizzbuzz(52);
    const expected = "Buzz";
    assert.equal(actual, expected);
  })

  it('return FizzBuzz when parameter conatins 3 & 5', function() {
    
    const actual = fizzbuzz(53);
    const expected = "FizzBuzz";
    assert.equal(actual, expected);
  })
  it('return FizzBuzz when parameter conatains 3 & divisible by 5', function() {
    
    const actual = fizzbuzz(130);
    const expected = "FizzBuzz";
    assert.equal(actual, expected);
  })
});
