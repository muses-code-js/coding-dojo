const assert = require('assert');

function fizzbuzz(input) {

		if (input%(3*5)===0 ) {
			// return
			return 'fizzbuzz'
		}

		if (input%3===0) {
			return 'fizz'
		}

		if (input%5 === 0){
			return 'buzz'
		}

			return input	
}

function count() {
	for(let i=1; i<=100; i++) {
		console.log(fizzbuzz(i))
	}
}

count();

describe('Fizz Buzz Game', function() {

  it('should return 1', () => {
    const expected = 1;
    const actual = fizzbuzz(1);

    assert.equal(actual, expected);
  });

  it('should return 2', () => {
    const expected = 2;
    const actual = fizzbuzz(2);

    assert.equal(actual, expected);
  });

  it('should return fizz', () => {
    const expected = 'fizz';
    const actual = fizzbuzz(3);

    assert.equal(actual, expected);
  });

    it('should return buzz', () => {
    const expected = 'buzz';
    const actual = fizzbuzz(5);

    assert.equal(actual, expected);
  });

	it('should return fizzbuzz', () => {
    	const expected = 'fizzbuzz';
    	const actual = fizzbuzz(15);

    	assert.equal(actual, expected);
  });

	it('should return fizzbuzz', () => {
    	const expected = 'fizzbuzz';
    	const actual = fizzbuzz(30);

    	assert.equal(actual, expected);
  });
});
