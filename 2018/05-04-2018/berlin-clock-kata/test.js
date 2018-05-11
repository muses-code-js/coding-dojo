const assert = require('assert');

function secondStatus(seconds){
	if (seconds % 2 == 1)
		return "O";
	else
		return "Y";
}

function fiveHoursStatus(hours){
		const a = Math.floor(hours / 5);
	switch (a) {
		case 1:
	  	return 'ROOO';
			break;
		case 2:
	  	return 'RROO';
			break;
		case 3:
	  	return 'RRRO';
			break;
		case 4:
	  	return 'RRRR';
			break;
		default:
			return 'OOOO';
			break;
	}
}

function oneHourStatus(hours){
	const a = hours % 5;
	switch(a){
		case 1:
			return "ROOO";
			break;
		case 2:
			return "RROO";
			break;
		case 3:
			return "RRRO";
			break;
		case 4:
			return "RRRR";
			break;
		default:
			return "OOOO";
			break;
	}
	
}

function fiveMinutesStatus(minutes){
	let yellowLightOn = 'Y';
	let lightsOff = 'O';
	let redLightOn = 'YYR';
	let currentMins = minutes / 5;

	if (minutes % 3 === 0)
	{
		let quotient = minutes / 15;
		const numRedLightsOn = redLightOn.repeat(quotient);
		const  reminderLights = lightsOff.repeat(11 - 3);
		return numRedLightsOn + reminderLights
	}

	
	const lightsOn = yellowLightOn.repeat(currentMins);
	const remainingLights = lightsOff.repeat(11 - currentMins);
	return lightsOn + remainingLights;
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

	it("Given 1 hour, returns ROOO", () => {
    assert.equal(oneHourStatus(1), "ROOO")
	});

	it("Given 2 hour, returns RROO", () => {
		assert.equal(oneHourStatus(2),"RROO")
	});

	it("Given 3 hour, returns RRRO", () =>{
		assert.equal(oneHourStatus(3), "RRRO")
	});

	it("Given 4 hour, returns RRRR", () =>{
		assert.equal(oneHourStatus(4), "RRRR")
	});

	it("Given 5 hour, returns OOOO", () =>{
		assert.equal(oneHourStatus(5), "OOOO")
	});

	it("Given 6 hour, returns ROOO", () => {
		assert.equal(oneHourStatus(6), "ROOO")
	});

	it("Given 0 minutes, returns OOOOOOOOOOO", () => {
		assert.equal(fiveMinutesStatus(0), "OOOOOOOOOOO")
	});

	it("Given 5 minutes, returns YOOOOOOOOOO", () => {
		assert.equal(fiveMinutesStatus(5), "YOOOOOOOOOO")
	});

	it("Given 10 minutes, returns YYOOOOOOOOO", () => {
		assert.equal(fiveMinutesStatus(10), "YYOOOOOOOOO")
	});
	 
	it("Given 15 minutes, returns YYROOOOOOOO", () => {
		assert.equal(fiveMinutesStatus(15), "YYROOOOOOOO")
	});
});