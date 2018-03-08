const assert = require('assert');
const BowlingGame = require('./');


describe('Bowling Game', function() {

  it('first two rolls get 0, should return 0', () => {
    const bowlingGame = new BowlingGame();
    bowlingGame.roll(0);
    bowlingGame.roll(0);
    const actual = bowlingGame.score();

    assert.equal(actual, 0);
  });

  it('first two rolls get 1, should return 1', () => {
    const bowlingGame = new BowlingGame();
    bowlingGame.roll(0);
    bowlingGame.roll(1);
    const actual = bowlingGame.score();

    assert.equal(actual, 1);
  });

  it('first two roll get one each score, should return 2', () => {
    const bowlingGame = new BowlingGame();
    bowlingGame.roll(1);
    bowlingGame.roll(1);
    const actual = bowlingGame.score();

    assert.equal(actual, 2);
  });

  it('strike without further pins', () => {
    const bowlingGame = new BowlingGame();
    bowlingGame.roll(10);
    bowlingGame.roll(0);
    bowlingGame.roll(0);
    const actual = bowlingGame.score();

    assert.equal(actual, 10);
  })

  it('strike plus one pin', () => {
    const bowlingGame = new BowlingGame();
    bowlingGame.roll(10);
    bowlingGame.roll(1);
    bowlingGame.roll(1);
    const actual = bowlingGame.score();

    assert.equal(actual,14 );
  })

  it('2 rolls then 1 strike then 2 rolls',() => {
     const bowlingGame= new BowlingGame();
     bowlingGame.roll(1);
     bowlingGame.roll(1);

     bowlingGame.roll(10);

     bowlingGame.roll(1);
     bowlingGame.roll(1);

     const actual = bowlingGame.score();
     assert.equal(actual, 16);
  })

  it('2 strikes and 2 rolls', () => {
    const bowlingGame = new BowlingGame();
    bowlingGame.roll(10);
    bowlingGame.roll(10);

    bowlingGame.roll(1);
    bowlingGame.roll(1);

    const actual = bowlingGame.score();
    assert.equal(actual, 35);
  });


    it('1 spare plua two rolls', () => {
      const bowlingGame = new BowlingGame();
      bowlingGame.roll(3);
      bowlingGame.roll(7);

      bowlingGame.roll(1);
      bowlingGame.roll(1);

      const actual = bowlingGame.score();
      assert.equal(actual, 13);
    });
});
