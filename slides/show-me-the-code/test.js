const assert = require('assert');

function sum(a){
	return a + a;
}

describe('Sum of two numbers', () => {
  it('passing 1', () => {
    var actual = sum(1);
    var expected = 2;

    assert.equal(actual, expected);
  });

  it('works', () => {
    var actual = sum(2);
    var expected = 4;

    assert.equal(actual, expected);
  });
});
