const assert = require('assert');

function fizzBuzz(y) {
    if ((y % 3 === 0) && (y % 5 ===0)) {
      return 'FizzBuzz';
    } else if (y % 3 === 0) {
      return 'Fizz';
    } else if (y % 5 === 0) {
      return 'Buzz';
    } else {
      return y;
    }

    /*  
        The case is used to hold a single value that if 
        they are equal to the value on the switch line. 
        if-else statements will serve you well.
    */

    // switch (true) {
    //     case ((y % 3 === 0) && (y % 5 ===0)):
    //         return 'FizzBuzz';
    //         break;
    //     case (y % 3 === 0):
    //         return 'Fizz';
    //         break;
    //     case (y % 5 === 0):
    //         return 'Buzz';
    //         break;
    //     default:
    //         return y;
    //         break;
    // }
}

describe('Fizz Buzz Game', function() {

  it('passing number return same number', () => {
    assert.equal(fizzBuzz(1), 1);
    assert.equal(fizzBuzz(2), 2);
  });

  it('divide by 3', () => {
    assert.equal(fizzBuzz(3), 'Fizz');
    assert.equal(fizzBuzz(6), 'Fizz');
  });

  it('divide by 5 ', () => {
    assert.equal(fizzBuzz(5), 'Buzz');
    assert.equal(fizzBuzz(10), 'Buzz');
  });

  it('divide by 3 and 5 ', () => {
    assert.equal(fizzBuzz(15), 'FizzBuzz');
  });
});
