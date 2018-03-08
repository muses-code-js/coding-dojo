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


function scrabbleScore(word) {
  const letterValues = {
    'A': 1,
    'E': 1,
    'I': 1,
    'O': 1,
    'U': 1,
    'L': 1,
    'N': 1,
    'R': 1,
    'S': 1,
    'T': 1,
    'D': 2,
    'G': 2,
    'B': 3,
    'C': 3,
    'M': 3,
    'P': 3,
    'F': 4,
    'H': 4,
    'V': 4,
    'W': 4,
    'Y': 4,
    'K': 5,
    'J': 8,
    'X': 8,
    'Q': 10,
    'Z': 10,
  };
  let score = 0;
  word.split('').forEach(letter => {
    score += letterValues[letter]
  });

  return score;
  // if (letterValues[word]) {
  //   return letterValues[word];
  // } else {
  //   return 0;
  // }
}


describe('Scrabble scoring game', () => {

  it('scores an empty word as zero', () => {
    const expected = 0;
    const actual = scrabbleScore('');
    assert.equal(actual, expected);
  });


  it('scores K as 5', () => {
    const expected = 5;
    const actual = scrabbleScore('K');
    assert.equal(actual, expected);
  });

  it('scores 1 for A, E, I, O, U, L, N, R, S, T', () => {
    const expected = 1;
    assert.equal(scrabbleScore('A'), expected);
    assert.equal(scrabbleScore('E'), expected);
    assert.equal(scrabbleScore('I'), expected);
    assert.equal(scrabbleScore('O'), expected);
    assert.equal(scrabbleScore('U'), expected);
    assert.equal(scrabbleScore('L'), expected);
    assert.equal(scrabbleScore('N'), expected);
    assert.equal(scrabbleScore('R'), expected);
    assert.equal(scrabbleScore('S'), expected);
    assert.equal(scrabbleScore('T'), expected);
  });

  it('scores 2 for D, G', () => {
    const expected = 2;
    assert.equal(scrabbleScore('D'), expected);
    assert.equal(scrabbleScore('G'), expected);
  });

  it('scores 3 for B, C, M, P', () => {
    const expected = 3;
    assert.equal(scrabbleScore('B'), expected);
    assert.equal(scrabbleScore('C'), expected);
    assert.equal(scrabbleScore('M'), expected);
    assert.equal(scrabbleScore('P'), expected);
  });

  it('scores 4 for F', () => {
    const expected = 4;
    assert.equal(scrabbleScore('F'), expected);
  });

  it('scores 4 for V', () => {
    const expected = 4;
    assert.equal(scrabbleScore('V'), expected);
  });

  it('scores 8 for J', () => {
    const expected = 8;
    assert.equal(scrabbleScore('J'), expected);
  });

  it('scores 8 for X', () => {
    const expected = 8;
    assert.equal(scrabbleScore('X'), expected);
  });

  it('scores 10 for Q', () => {
    const expected = 10;
    assert.equal(scrabbleScore('Q'), expected);
  });

  it('scores 10 for Z', () => {
    const expected = 10;
    assert.equal(scrabbleScore('Z'), expected);
  });

  it('scores 2 for AA', () => {
    const expected = 2;
    assert.equal(scrabbleScore('AA'), expected);
   });
});
