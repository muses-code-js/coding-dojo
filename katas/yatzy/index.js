const _ = require('lodash');

class Yatzy {
    constructor(roll) {
        this.roll = roll;
    }
    chance() {
        return _.sum(this.roll);
    }
    yatzy() {
        return _.uniq(this.roll).length === 1 ? 50 : 0;
    }
    sum(num) {
        return _.reduce(this.roll, function(sum, n) {
          return n === num ? sum + n : sum;
        }, 0);
    }
    pair() {
        return _.filter(this.roll, (n) => {
            return n === _.max(this.roll);
        }).length > 1 ? _.max(this.roll) * 2 : 0;
    }
}

module.exports = Yatzy;
