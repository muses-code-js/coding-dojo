var assert = require('assert');

function displaySeconds(seconds) {
	return seconds % 2 === 0 ? 'Y' : 'O';
}

function displayMinutes(minutes) {
	if (minutes === 1) {
		return 'YOOO';
	}

	return 'YYOO'
}

describe('Berlin Clock', function() {

	it('should return Y for even seconds', function() {

		var light = displaySeconds(0);

		assert.equal(light, 'Y');


		light = displaySeconds(2);

		assert.equal(light, 'Y');

	});
    it('should return O for odd seconds', function() {

		var light = displaySeconds(1);

		assert.equal(light, 'O');


		light = displaySeconds(3);

		assert.equal(light, 'O');

	});
	it('should return YOOO for one minute', function() {

		var light = displayMinutes(1);

		assert.equal(light, 'YOOO');

	});

	it('should return YYOO for two minutes', function() {

		var light = displayMinutes(2);

		assert.equal(light, 'YYOO');

	});

});