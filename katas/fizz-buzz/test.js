var fizzbuzz = require('./index').fizzbuzz;
var printLines = require('./index').printLines;

var assert = require('chai').assert;

describe('Example test', function() {

  it('does works', () => {
    const expected = true;
    const actual = true;

    assert.equal(actual, expected);
  });
});

describe('Fizz Buzz Game', function() {
 
  // Put tests here
  it('1 should return 1', () => {
    assert.equal(fizzbuzz(1), 1);
  })

  it('should return fizz divisible by 3', () => {
    assert.equal(fizzbuzz(3), 'fizz');
    assert.equal(fizzbuzz(6), 'fizz');

  })

  it('should return buzz divisible by 5', () => {
    assert.equal(fizzbuzz(5), 'buzz');
    assert.equal(fizzbuzz(20), 'buzz');

  })
  
  it('should return fizzbuzz if divisible by 15', () => {
    assert.equal(fizzbuzz(15), 'fizzbuzz');
    assert.equal(fizzbuzz(45), 'fizzbuzz');
  })
  
  it('should return null if input not a number', () => {
    assert.equal(fizzbuzz('yes'), null);
  })

});

describe('Line Printer', function() {

  it('Returns an array', () => {
    const actual = printLines(0);
    const expected = '';
    assert.strictEqual(actual, expected);
  })
}) 
