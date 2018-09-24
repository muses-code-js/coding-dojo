const expect = require("chai").expect;

const Yatzy = require("./index");

describe("Yatzy game", () => {
    it("Chance should return sum of roll", () => {
        chanceRoll = new Yatzy([1, 2, 3, 4, 5]);
        expect(chanceRoll.chance()).to.be.equal(15);
    });
    it("Yatzy should score 50 points", () => {
        yatzyRoll = new Yatzy([1,1,1,1,1]);
        expect(yatzyRoll.yatzy()).to.be.equal(50)
    });
    it("Non yatzy should score 0 points", () => {
        nonYatzyRoll = new Yatzy([2,1,1,1,1]);
        expect(nonYatzyRoll.yatzy()).to.be.equal(0)
    });
    it("sum of non unique numbers should be returned", () => {
        expect( new Yatzy([1,2,1,1,1]).sum(1)).to.be.equal(4);
        expect( new Yatzy([2,2,1,1,1]).sum(2)).to.be.equal(4);
        expect( new Yatzy([2,2,1,1,2]).sum(2)).to.be.equal(6);
    });
    it("Pair should score sum of highest matching dice", () => {
        pairRoll = new Yatzy([1,2,3,4,4]);
        expect(pairRoll.pair()).to.be.equal(8);
    });
    it("Pair should score 0 when no matching dice", () => {
        pairRoll = new Yatzy([1,2,3,4,5]);
        expect(pairRoll.pair()).to.be.equal(0);
    });
});
