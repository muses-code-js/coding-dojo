const assert = require('assert');

function Fizz(num) {
  if (num % 3 === 0 ) {
    return "Fizz";
  } 
  else {
    return num;
  }
}

function buzz(num) {
  if (num % 5 === 0 ) {
    return "Buzz";
  }
  else {
    return num;
  }
}

const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Fizz Buzz";
  } else {
    return num;
  }
}

describe('Fizz Buzz Game', function() {
  
  it('it is divisible by 3 print Fizz', () => {
    var num = 3;
    const expected = "Fizz";
    const actual = Fizz(3);

    assert.equal(actual, expected);
  });
  
  it('it not divisible by 3 print number', () => {
    var num = 2;
    const expected = num;
    const actual = Fizz(num);

    assert.equal(Fizz(num), expected);
    assert.equal(buzz(num), expected);
  });

  it('if divisible by 5 print buzz', () => {
    var num = 5;
    const expected = 'Buzz';
    const actual = buzz(num);

    assert.equal(actual, expected);

  });
  it('if divisible by 3 and 5 print Fizz Buzz', () => {
    var num = 15;
    const expected = 'Fizz Buzz';
    const actual = fizzBuzz(num);

    assert.equal(actual, expected);

  });

});

