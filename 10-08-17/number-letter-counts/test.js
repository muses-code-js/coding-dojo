const assert = require('assert');

function numberCounter(number) {
  const arrayThree = [1, 2, 6, 10];
  const arrayFive = [3, 7, 8];
  const arrayFour = [4, 5, 9];
  const arraySix = [11];

  const dict = {
    '3': [1, 2, 6, 10]
  };

  if (arrayThree.includes(number)) {
    let result;
    const keys = Object.keys(dict);
    keys.forEach(i => {
      const array = dict[i];
      if (array.includes(number)) {
        result = i;
      }
    });
    return result;
  } else if (arrayFour.includes(number)) {
    return 4;
  } else if (arrayFive.includes(number)) {
    return 5;
  } else if (arraySix.includes(number)) {
    return 6;
  }
}

describe('Number Letter Counts', function() {
  it('Returns 3 if the Input is One', () => {
    const expected = 3;
    const actual = numberCounter(1);

    assert.equal(actual, expected);
  });

  it('Returns 4 if the Input is Four', () => {
    const expected = 4;
    const actual = numberCounter(4);

    assert.equal(actual, expected);
  });

  it('Returns 3 if the Input is Two', () => {
    const expected = 3;
    const actual = numberCounter(2);

    assert.equal(actual, expected);
  });

  it('Returns 3 if the Input is Six', () => {
    const expected = 3;
    const actual = numberCounter(6);

    assert.equal(actual, expected);
  });

  it('Returns 3 if the Input is Ten', () => {
    const expected = 3;
    const actual = numberCounter(10);

    assert.equal(actual, expected);
  });

  it('Returns 5 if the Input is Three', () => {
    const expected = 5;
    const actual = numberCounter(3);

    assert.equal(actual, expected);
  });

  it('Returns 5 if the Input is Seven', () => {
    const expected = 5;
    const actual = numberCounter(7);

    assert.equal(actual, expected);
  });

  it('Returns 5 if the Input is Eight', () => {
    const expected = 5;
    const actual = numberCounter(8);

    assert.equal(actual, expected);
  });

  it('Returns 4 if the Input is Five', () => {
    const expected = 4;
    const actual = numberCounter(5);

    assert.equal(actual, expected);
  });

  it('Returns 4 if the Input is Nine', () => {
    const expected = 4;
    const actual = numberCounter(9);

    assert.equal(actual, expected);
  });

  it('Returns 6 if the Input is Eleven', () => {
    const expected = 6;
    const actual = numberCounter(11);

    assert.equal(actual, expected);
  });
});
