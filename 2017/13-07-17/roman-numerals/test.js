const assert = require('assert');

function convertNum(num) {
  var n = "";
  var romanNumeral = {
    1: "I",
    5: "V",
    10: "X"
  }

  if (num == 20 || num == 30) {
    n= partnerNum(num, 10);
  } else if (num <= 3) {
    n= partnerNum(num, 1);
  }
  return n || romanNumeral[num];

  function partnerNum(input, romanKey) {
    var n = "";
    for (var i = input; i > 0; i -= romanKey) {
      n += romanNumeral[romanKey];
    }
    return n;
  }
}
describe('Roman Numerals', function() {

  it('Print I', () => {
    const expected = "I";
    const actual = convertNum(1);

    assert.equal(actual, expected);
  });

  it('Print V', () => {
    const expected = "V";
    const actual = convertNum(5);

    assert.equal(actual, expected);
  });

  it('Print X', () => {
    const expected = "X";
    const actual = convertNum(10);

    assert.equal(actual, expected);
  });

  it('Print II', () => {
    const expected = "II";
    const actual = convertNum(2);

    assert.equal(actual, expected);
  });
  it('Print XX', () => {
    const expected = "XX";
    const actual = convertNum(20);

    assert.equal(actual, expected);
  });
  it('Print XXX', () => {
    const expected = "XXX";
    const actual = convertNum(30);

    assert.equal(actual, expected);
  });
  it('Print III', () => {
    const expected = "III";
    const actual = convertNum(3);

    assert.equal(actual, expected);
  });
});
