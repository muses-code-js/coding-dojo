const expect = require('chai').expect

const Yatzy = require('./index')

describe('Yatzi game', () => {
    describe('constructor', () => {
        it('Should throw an exception when the parameter is not an array', () => {
            expect(() => { new Yatzy(1) }).to.throw('The parameter should be an array of 5 integers between 1 and 6.')
        })
        it('Should throw error when the length of the input array is not equal to 5', () => {
            expect(() => { new Yatzy([1, 2, 3, 4]) }).to.throw('The parameter should be an array of 5 integers between 1 and 6.')
        })
        it('Should throw an error if arrays has not integers', () => {
            expect(() => { new Yatzy([1, 2, 3, "4", 5]) }).to.throw('The parameter should be an array of 5 integers between 1 and 6.')
        })
        it('Should throw an error if values are not between 1 and 6.', () => {
            expect(() => { new Yatzy([1, 2, 3, 20, 5]) }).to.throw('The parameter should be an array of 5 integers between 1 and 6.')
        })
        it('Should create an object with the same array values that is provided.', () => {
            const acceptableRoll = new Yatzy([1, 2, 3, 4, 5])
            expect(acceptableRoll.diceRolls).to.be.eql([1, 2, 3, 4, 5])
        })
    })
    describe('Chance', () => {
        it('Should return the sum of all values in the array', () => {
            const acceptableRoll = new Yatzy([1, 2, 3, 4, 5])
            expect(acceptableRoll.chance()).to.be.equal(15)
        })
    })
    describe('Yatzi', () => {
        it('Should return 0 if array has different values', () => {
            const acceptableRoll = new Yatzy([1, 2, 3, 4, 5])
            expect(acceptableRoll.yatzy()).to.be.equal(0)
        })
        it('Should return the sum of all integers of an array if the array has the same values', () => {
            const acceptableRoll = new Yatzy([1, 1, 1, 1, 1])
            expect(acceptableRoll.yatzy()).to.be.equal(5)
        })
    })
    describe('Number', () => {
        it('Should return 0 if the number doesnt exist in the array', () => {
            const acceptableRoll = new Yatzy([2, 2, 3, 4, 5])
            expect(acceptableRoll.number(1)).to.be.equal(0)
        })
        it('Should return the sum of the numbers in the array matching the value', () => {
            const acceptableRoll = new Yatzy([2, 2, 3, 4, 5])
            expect(acceptableRoll.number(2)).to.be.equal(4)
        })
    })
    describe('Pair', () => {
        it('Should return 0 if there is no pairs in the array', () => {
            const acceptableRoll = new Yatzy([1, 2, 3, 4, 5])
            expect(acceptableRoll.pair()).to.be.equal(0)
        })
        it('Should return some of the highest pair', () => {
            const acceptableRoll = new Yatzy([2, 2, 3, 3, 5])
            expect(acceptableRoll.pair()).to.be.equal(6)
        })
    })
})

