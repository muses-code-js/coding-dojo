const assert = require('assert');

const calculateSeconds = (seconds) => {
  return parseInt(seconds) % 2 == 0 ? 'Y' : 'O';
};

const calculateMinutes = (minutes) => {
  if (minutes === '1') {
    return 'YOOO'
  }
  return 'YYOO';
};

describe('Berlin Clock Kata', () => {

  it('even seconds should be yellow light', () => {
    let actual = calculateSeconds('00');
    const expect = 'Y';
    assert.equal(actual, expect);

    actual = calculateSeconds('30');
    assert.equal(actual, expect);
  });

  it('odd seconds should be off', () => {
    let actual = calculateSeconds('01');
    const expect = 'O';
    assert.equal(actual, expect);

    actual = calculateSeconds('23');
    assert.equal(actual, expect);
  });

  it('calculate minutes', () => {
    let actual = calculateMinutes('1');
    const expect = 'YOOO';
    assert.equal(actual, expect);
  });
  it('calculate minutes', () => {
    let actual = calculateMinutes('2');
    const expect = 'YYOO';
    assert.equal(actual, expect);
  });
})
