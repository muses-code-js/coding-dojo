const assert = require('assert');

class BowlingGame {
  constructor(){
    this.counter = 0;
    this.numberofplaying = 0;
  };

  roll(pins) {
     this.counter += pins;
     this.numberofplaying++;
  };

  get score() {
    return this.counter;
  }
};

describe('Bowling Game', () => {

  it('keeps score each 1 roll', () => {
    const game = new BowlingGame();
    const expected = 3;
    game.roll(3);
    const actual = game.score;

    assert.equal(expected, actual);
  });

  it('keeps score 2 rolls', () => {
    const game = new BowlingGame();
    const expected = 5;
    game.roll(2);
    game.roll(3);
    const actual = game.score;

    assert.equal(actual, expected);
  });

  it('keeps score for a full game without strike and spare', () => {
    const game = new BowlingGame();
    const expected = 40;
    for (var i = 0; i < 20; i++) {
      game.roll(2);
    };
    const actual = game.score;

    assert.equal(actual, expected);
  });

  it('Rule of spare', () => {

    const game = new BowlingGame();
    const expected = 16;
      game.roll(8);
      game.roll(2);
      game.roll(3);
    const actual = game.score;

    assert.equal(actual, expected);
  });


});
