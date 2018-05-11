const assert = require('assert');

function fizzBuzz(){
  return [];
}

function checkFizzBuzz(num) {

  if(num % 3 === 0 && num % 5 === 0){
    return 'FizzBuzz';
  }

  if(num % 3 === 0){
    return 'fizz';
  }

  if(num % 5 === 0){
    return 'buzz';
  }

  return num;
}



describe('Fizz Buzz Game', function() {

  it('works', () => {
    const expected = false;
    const actual = false;
    assert.equal(actual, expected);
  });
  
  it('prints first number (1)', () => {
    const expected = 1;
    const actual = checkFizzBuzz(1);
    assert.equal(actual, expected);
  });

  it('prints number if it is not a multiple of 3 or 5', () => {
    let expected = 2;
    let actual = checkFizzBuzz(2);
    assert.equal(actual, expected);
    expected = 97;
    actual = checkFizzBuzz(97);
    assert.equal(actual, expected);
    expected = 59;
    actual = checkFizzBuzz(59);
    assert.equal(actual, expected);
  });

  it('prints fizz if number is multiple of (3)', () => {
    const expected = 'fizz';
    let actual = checkFizzBuzz(3);
    assert.equal(actual, expected);
    actual = checkFizzBuzz(9);
    assert.equal(actual, expected);
    actual = checkFizzBuzz(54);
    assert.equal(actual, expected);
  });

  it('prints buzz if number is multiple of (5)', () => {
    const expected = 'buzz';
    let actual = checkFizzBuzz(5);
    assert.equal(actual, expected);
    actual = checkFizzBuzz(20);
    assert.equal(actual, expected);
    actual = checkFizzBuzz(80);
    assert.equal(actual, expected);
  });

  it('prints FizzBuzz if number multiple of 3 and 5 (e.g. 15)', () => {
    const expected = 'FizzBuzz';
    let actual = checkFizzBuzz(15);
    assert.equal(actual, expected);
    actual = checkFizzBuzz(30);
    assert.equal(actual, expected);
    actual = checkFizzBuzz(90);
    assert.equal(actual, expected);
  });

  it('prints FizzBuzz List (1)', () => {
    const expected = [1];
    let actual = fizzBuzz(1);
    assert.equal(actual, expected);
  });

});
