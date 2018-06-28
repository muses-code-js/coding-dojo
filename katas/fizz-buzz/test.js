// const fizzbuzz = require('./fizzbuzz')
const assert = require('assert');

describe('Coding Dojo 1', function() {

  it('works', () => {
    const expected = true;
    const actual = true;

    assert.equal(actual, expected);
  });

  it('exists', () => {
    const expected = 1;
    const actual = 1;

    fizzbuzz();

    assert.equal(expected, actual);
  });

  it('check input 1 returns 1', () => {
    const expected = 1;
    const actual = fizzbuzz(1);

    assert.equal(actual, expected);
  });

  it('check input 2 returns 2', () => {
    const expected = 2;
    const actual = fizzbuzz(2);

    assert.equal(actual, expected);
  });

  it('check input 4 returns 4', () => {
    const expected = 4;
    const actual = fizzbuzz(4);

    assert.equal(actual, expected);
  });

  it('check input 3 returns fizz', () => {
    const expected = 'fizz';
    const actual = fizzbuzz(3);

    assert.equal(actual, expected);
  });

  it('check input 5 returns buzz', () => {
    const expected = 'buzz';
    const actual = fizzbuzz(5);

    assert.equal(actual, expected);
  });

  it('check input 15 returns fizzbuzz', () => {
    const expected = 'fizzbuzz';
    const actual = fizzbuzz(15);

    assert.equal(actual, expected);
  });
  
  it('check input 6 returns fizz', () => {
    const expected = 'fizz';
    const actual = fizzbuzz(6);

    assert.equal(actual, expected);
  });

  it('check input 10 returns buzz', () => {
    const expected = 'buzz';
    const actual = fizzbuzz(10);

    assert.equal(actual, expected);
  });

  it('check input 30 returns fizzbuzz', () => {
    const expected = 'fizzbuzz';
    const actual = fizzbuzz(30);

    assert.equal(actual, expected);
  });

});

function fizzbuzz(num) {
  if (num % 15 == 0) {
    return 'fizzbuzz';
  } 
  else if (num % 3 == 0 ) {
    return 'fizz';
  } else if (num % 5 == 0) {
    return 'buzz';
  } 
  return num;
}

