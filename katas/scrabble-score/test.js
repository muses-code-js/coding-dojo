function scrabbleScore(word) {
  //your solution
}

/* Letter value table
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
*/

const assert = require('assert');


describe('Scrabble scoring game', () => {

  it('scores an empty word as zero', () => {
    const expected = 0;
    const actual = scrabbleScore('');

    assert.equal(actual, expected);
  });

  xit('scores a very short simple word',function() {
    const expected = 1;
    const actual = scrabbleScore('a');

    assert.equal(actual, expected);
  });

  xit('scores the word by the number of letters',function() {
    const expected = 6;
    const actual = scrabbleScore('street');

    assert.equal(actual, expected);
  });

  xit('scores letters with high points correctly',function() {
    const expected = 10;
    const actual = scrabbleScore('z');

    assert.equal(actual, expected);
  });

  xit('scores a short word with higher point letters',function() {
    const expected = 5;
    const actual = scrabbleScore('yo');

    assert.equal(actual, expected);
  });

  xit('scores more complicated words with more',function() {
    const expected = 22;
    const actual = scrabbleScore('quirky');

    assert.equal(actual, expected);
  });

  xit('scores case insensitive words',function() {
    const expected = 41;
    const actual = scrabbleScore('OXYPHENBUTAZONE');

    assert.equal(actual, expected);
  });

});