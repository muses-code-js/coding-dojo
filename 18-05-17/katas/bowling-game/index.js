class BowlingGame {
  constructor() {
    this.rolls = []
  }

  roll(pins) {
    this.rolls.push(pins)
  }

  score() {
    let total = 0
    for (var i = 0; i < this.rolls.length; i++) {
      total += this.rolls[i]
      if (this.rolls[i] === 10) {
        if (this.rolls[i+1]) {
          total += this.rolls[i+1]
        }
        if (this.rolls[i+2]) {
          total += this.rolls[i+2]
        }
      }
    }

    return total
  }
}

module.exports = BowlingGame
