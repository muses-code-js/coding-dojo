const assert = require('assert');	

function secondFlash( seconds ) {
	const isEven = seconds % 2 === 0;
	return isEven ? 'Y' : 'O';
}

function minutesFlash( minutes ) {
	const lightsOn = minutes % 5;
	return 'Y'.repeat(lightsOn) + 'O'.repeat(4 - lightsOn);
}

function fiveMinutesFlash( minutes ) {
	const lightsOn = Math.floor(minutes / 5);
	const redLights = Math.floor(minutes / 15);
	const leftoverLights = lightsOn - redLights * 3;
	return 'YYR'.repeat(redLights) + 'Y'.repeat(leftoverLights) + 'O'.repeat(11 - lightsOn);
}
function hourFlash( hours ) {
	const lightsOn = hours % 5;
	return 'R'.repeat(lightsOn) + 'O'.repeat(4 - lightsOn);
}

describe('Berlin Clock Kata', () => {

	describe('Seconds', () => {
		it('Yellow when even', () => {
			const expected = 'Y';
			const actual = secondFlash(2);
			assert.equal(actual, expected);
		});

		it('Off when odd', () => {
			const expected = 'O';
			const actual = secondFlash(3);
			assert.equal(actual, expected);
		});
 	});
	describe('One minute', () => {
		it('Zero yellow for 0 minute ', () => {
			const expected = 'OOOO';
			const actual = minutesFlash(0);
			assert.equal(actual, expected);
		}); 
		it('One yellow for 1 minute ', () => {
			const expected = 'YOOO';
			const actual = minutesFlash(1);
			assert.equal(actual, expected);
		}); 

		it('Two yellow for 2 minutes ', () => {
			const expected = 'YYOO';
			const actual = minutesFlash(2);
			assert.equal(actual, expected);
		}); 
		it('Three yellow for 3 minutes ', () => {
			const expected = 'YYYO';
			const actual = minutesFlash(3);
			assert.equal(actual, expected);
		});
		it('Four yellow for 4 minutes ', () => {
			const expected = 'YYYY';
			const actual = minutesFlash(4);
			assert.equal(actual, expected);
		});
		it('Zero yellow for 5 minutes ', () => {
			const expected = 'OOOO';
			const actual = minutesFlash(5);
			assert.equal(actual, expected);
		});
		it('Three yellow for 58 minutes ', () => {
			const expected = 'YYYO';
			const actual = minutesFlash(58);
			assert.equal(actual, expected);
		});
		it('Four yellow for 59 minutes ', () => {
			const expected = 'YYYY';
			const actual = minutesFlash(59);
			assert.equal(actual, expected);
		});
		it('Two yellow for 32 minutes ', () => {
			const expected = 'YYOO';
			const actual = minutesFlash(32);
			assert.equal(actual, expected);
		});
	});

	describe('Five minute row', () => {
		it('Zero yellow for 0 minute ', () => {
			const expected = 'OOOOOOOOOOO';
			const actual = fiveMinutesFlash(0);
			assert.equal(actual, expected);
		});
		it('One yellow for 5 minutes', () => {
			const expected = 'YOOOOOOOOOO';
			const actual = fiveMinutesFlash(5);
			assert.equal(actual, expected);
		});
		it('One yellow for 6 minutes', () => {
			const expected = 'YOOOOOOOOOO';
			const actual = fiveMinutesFlash(6);
			assert.equal(actual, expected);
		});
		it('One yellow for 15 minutes', () => {
			const expected = 'YYROOOOOOOO';
			const actual = fiveMinutesFlash(15);
			assert.equal(actual, expected);
		});
		it('One yellow for 51 minutes', () => {
			const expected = 'YYRYYRYYRYO';
			const actual = fiveMinutesFlash(51);
			assert.equal(actual, expected);
		});
	});

	describe('One hour row', () => {
		it('Zero red for 0 hours ', () => {
			const expected = 'OOOO';
			const actual = hourFlash(0);
			assert.equal(actual, expected);
		});
		it('One red for 1 hour', () => {
			const expected = 'ROOO';
			const actual = hourFlash(1);
			assert.equal(actual, expected);
		});
		it('Two red for 2 hour', () => {
			const expected = 'RROO';
			const actual = hourFlash(2);
			assert.equal(actual, expected);
		});
		it('Two red for 7 hour', () => {
			const expected = 'RROO';
			const actual = hourFlash(7);
			assert.equal(actual, expected);
		});
	});

	describe('Five hour row', () => {
		it('Zero red for 0 hours ', () => {
			const expected = 'OOOO';
			const actual = fiveHourFlash(0);
			assert.equal(actual, expected);
		});
		it('Zero red for 1 hour', () => {
			const expected = 'OOOO';
			const actual = fiveHourFlash(1);
			assert.equal(actual, expected);
		});
		// it('Two red for 2 hour', () => {
		// 	const expected = 'RROO';
		// 	const actual = hourFlash(2);
		// 	assert.equal(actual, expected);
		// });
		// it('Two red for 7 hour', () => {
		// 	const expected = 'RROO';
		// 	const actual = hourFlash(7);
		// 	assert.equal(actual, expected);
		// });
	});
});
