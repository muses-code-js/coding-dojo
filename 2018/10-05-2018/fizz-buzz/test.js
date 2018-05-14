const assert = require('assert');

const printFizzBuzzGame =(num) => {
  if (num % 3 ==0 && num % 5 == 0) return 'FizzBuzz';
  if (num % 3 == 0) return 'Fizz';
  else if (num % 5 == 0) return 'Buzz';
 return num; 
}

describe('Fizz Buzz Game', function() {

  it('printing the number num for num', () => {
    
    assert.equal(printFizzBuzzGame(1), 1);
    assert.equal(printFizzBuzzGame(2), 2);
  });

  
  it('printing Fizz for number divided by 3', () => {

    assert.equal(printFizzBuzzGame(3), 'Fizz');
    assert.equal(printFizzBuzzGame(6), 'Fizz');
    assert.equal(printFizzBuzzGame(9), 'Fizz');
  });

  it('printing Buzz for numbers divided by 5', () => {

    assert.equal(printFizzBuzzGame(5), 'Buzz');
    assert.equal(printFizzBuzzGame(10), 'Buzz');
    
  });

  it('printing FizzBuzz for numbers divided by 3 and 5', () => {
    assert.equal(printFizzBuzzGame(15), 'FizzBuzz');
    assert.equal(printFizzBuzzGame(30), 'FizzBuzz');
    assert.equal(printFizzBuzzGame(45), 'FizzBuzz');
    
  });

});
