const assert = require('assert');

function countNumber(number) {
  var vacobularyForNumbers = {
    1: 'one',
    3: 'three',
    7: 'seven',
    20: 'twenty',
    30: 'thirty'
  };
  if (number > 30) {
    return countNumber(30) + countNumber(number - 30);
  }
  if (number > 20 && number <= 29) {
    return countNumber(20) + countNumber(number - 20);
  }

  return vacobularyForNumbers[number].length;
}

describe('Number Letter Counts', function() {
  it('return three when passed 1!', () => {
    const expected = 3;
    const actual = countNumber(1);

    assert.equal(actual, expected);
  });

  it('return five when passed 3!', () => {
    const expected = 5;
    const actual = countNumber(3);

    assert.equal(actual, expected);
  });

  it('return five when passed 7!', () => {
    const expected = 5;
    const actual = countNumber(7);

    assert.equal(actual, expected);
  });

  it('return six when passed 20!', () => {
    const expected = 6;
    const actual = countNumber(20);

    assert.equal(actual, expected);
  });

  it('return nine when passed 21!', () => {
    const expected = 9;
    const actual = countNumber(21);

    assert.equal(actual, expected);
  });

  it('return eleven when passed 23!', () => {
    const expected = 11;
    const actual = countNumber(23);

    assert.equal(actual, expected);
  });

  it('return six when passed 30!', () => {
    const expected = 6;
    const actual = countNumber(30);

    assert.equal(actual, expected);
  });

  it('return eleven when passed 33!', () => {
    const expected = 11;
    const actual = countNumber(33);

    assert.equal(actual, expected);
  });
});
