const _ = require('lodash')
const CONSTRUCTOR_ERROR = new Error("The parameter should be an array of 5 integers between 1 and 6.");
const NUMBER_OF_DICE = 5;
const MAX_VALUE = 6;
const MIN_VALUE = 1;

class Yatzy {
    constructor(diceRolls) {
        if (!_.isArray(diceRolls) || _.size(diceRolls) !== NUMBER_OF_DICE) {
            throw CONSTRUCTOR_ERROR
        }
        _.forEach(diceRolls, (diceRoll) => {
            if (!_.isInteger(diceRoll) || !_.inRange(diceRoll, MIN_VALUE, MAX_VALUE)) {
                throw CONSTRUCTOR_ERROR
            }
        })
        this.diceRolls = diceRolls
    }
    chance() {
        return _.sum(this.diceRolls)
    }
    yatzy() {
        if (_(this.diceRolls).uniq().size() === 1) {
            return _.sum(this.diceRolls)
        }
        return 0
    }
    number(value) {
        return _(this.diceRolls).filter(roll => roll === value).sum()
    }
    pair() {
        if (_(this.diceRolls).uniq().size() === 5) {
            return 0
        }
        return _(this.diceRolls).countBy().filter((val, key) => key > 1)
            .map((value, key) => value * 2).max()
        // TODO: FIXME
        // TODO: find ressource to explain async and functions as arguments
        // TODO: find resources to explain how to setup
    }
}
module.exports = Yatzy;