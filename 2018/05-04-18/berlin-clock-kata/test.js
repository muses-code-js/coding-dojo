const assert = require('assert');

function secondStatus(seconds){
	if (seconds % 2 == 1)
		return "O";
	else
		return "Y";
}

function fiveHoursStatus(hours){
		const a = Math.floor(hours / 5);
		if (a == 0)
			return "OOOO";
		else if (a ==    1)
			return "ROOO";
		else if (a == 2)
			return "RROO";
		else if (a === 3)
			return "RRRO";
		else if (a === 4)
			return "RRRR";
}

describe("Berlin Clock", () => {

	it("Given a 1 second, returns OFF", () => {
		assert.equal(secondStatus(1), "O")
	});

	it("Given a 2 second, returns ON", () => {
		assert.equal(secondStatus(2), "Y")
	});

	it("Given 0 seconds, returns ON", () => {
		assert.equal(secondStatus(0), "Y")
	});

	it("Given 1 hour, returns OOOO", () => {
		assert.equal(fiveHoursStatus(1), "OOOO")
	});
	it("Given 5 hour, returns ROOO", () => {
		assert.equal(fiveHoursStatus(5), "ROOO")
	});
	it("Given 10 hour, returns RROO", () => {
		assert.equal(fiveHoursStatus(10), "RROO")
	});
	it("Given 12 hour, returns RROO", () => {
		assert.equal(fiveHoursStatus(12), "RROO")
	});
	it("Given 15 hour, returns RRRO", () => {
		assert.equal(fiveHoursStatus(15), "RRRO")
	});
	it("Given 20 hour, returns RRRR", () => {
		assert.equal(fiveHoursStatus(20), "RRRR")
	});
});