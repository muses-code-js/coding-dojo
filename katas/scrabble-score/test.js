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
  //your solution
  return 0;
}


describe('Scrabble scoring game', () => {

  it('scores an empty word as zero', () => {
    const expected = 0;
    const actual = scrabbleScore('');
    assert.equal(actual, expected);
  });

});
