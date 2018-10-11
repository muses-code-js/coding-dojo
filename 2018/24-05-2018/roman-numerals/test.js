const assert = require('assert');

function romanNumerals(i) {

 let symbol = {
 	1: "I",
 	5: "V",
 	10:"X",
 	50:"L",
 	100:"C",
 	500:"D",
 	1000:"M"
 };

  let output = i;

  	if (i<=3){
		console.log(symbol[1].repeat(i))
		return symbol[1].repeat(i);
	}

	if (i===4){
		return symbol[1]+symbol[5];
	}	

	if (i===5){
		return symbol[5];
	}

  	if (i % 10 === 0) {
  		output = input % 10
  		return symbol[10];
  	}
  	console.log(output)




	// if (i<10){
	// 	return symbol[5]+symbol[1].repeat(i-5);
	// }
	// if (i===10) {
	// 	return symbol[10]
	// }
}

describe('Roman Numerals', function() {

  it('1 should return I', () => {
    const expected = 'I';
    const actual = romanNumerals(1);

    assert.equal(actual, expected);
  });

  it('2 should return II', () => {
    const expected = 'II';
    const actual = romanNumerals(2);

    assert.equal(actual, expected);
  });

 it('3 should return III', () => {
    const expected = 'III';
    const actual = romanNumerals(3);

    assert.equal(actual, expected);
  });

 it('4 should return IV', () => {
    const expected = 'IV';
    const actual = romanNumerals(4);

    assert.equal(actual, expected);
  });
  it('5 should return V', () => {
    const expected = 'V';
    const actual = romanNumerals(5);

    assert.equal(actual, expected);
  });
  it('6 should return VI', () => {
    const expected = 'VI';
    const actual = romanNumerals(6);

    assert.equal(actual, expected);
  });  

  it('10 should return X', () => {
    const expected = 'X';
    const actual = romanNumerals(10);

    assert.equal(actual, expected);
   });

  it('11 should return XI', () => {
    const expected = 'XI';
    const actual = romanNumerals(11);

    assert.equal(actual, expected);
   });


});
