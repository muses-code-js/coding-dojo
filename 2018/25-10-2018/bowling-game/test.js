const assert = require('assert');

describe('Bowling Game', function() {
  it('gets 1 if 1 pin down', () => {
    const game = new BowlingGame();
    const expected = 1;
    game.roll(1);
    const actual = game.score();

    assert.equal(actual, expected);
  });
  it('gets 2 if 2 pins down', () => {
    const game = new BowlingGame();
    const expected = 2;
    game.roll(2);
    const actual = game.score();

    assert.equal(actual, expected);
  });
  it('gets 2 after 2 rolls with 1 pin down in each', () => {
    const expected = 2;

    const game = new BowlingGame();
    game.roll(1);
    game.roll(1);
    const actual = game.score();

    assert.equal(actual, expected);
  });
  it('gets 12 after 3 rolls with 5, 5 and 1', () => {
    const expected = 12;

    const game = new BowlingGame();
    game.roll(5);
    game.roll(5);
    game.roll(1);
    const actual = game.score();

    assert.equal(actual, expected);
  });
});

class BowlingGame {
  constructor() {
    this.pins = 0;
  }
  roll(pinsN) {
    //  return pinsN;
    this.pins += pinsN;
  }

  score() {
    return this.pins;
  }
}
