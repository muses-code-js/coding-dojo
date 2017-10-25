const assert = require('assert');

let printNumber = (number)=>{

  if (number%5 == 0 && number%3 == 0) {
    return "FizzBuzz";
  }

  if (number%5 == 0){
    return "Buzz";
  }

  if (number%3 == 0){
    return 'Fizz'
  }
  return number 
};


describe('Fizz Buzz Game', function() {

  
  it('Returns a number when Given a number', () => {
    assert.equal(printNumber(1), 1);
    assert.equal(printNumber(2), 2);
  
    assert.equal(printNumber(4), 4);
    

  });
  
  it('Returns Fizz when number is divisible by 3', () => {
    assert.equal(printNumber(3), 'Fizz');
    assert.equal(printNumber(6), 'Fizz');
    assert.equal(printNumber(9), 'Fizz');
  
  });

  it('Returns Buzz when given a number divisible by 5', () => {
    assert.equal(printNumber(5), 'Buzz');
    assert.equal(printNumber(10), 'Buzz');
  });

  it('Returns FizzBuzz when given a number divisible by 3 and 5', () => {
    assert.equal(printNumber(15), 'FizzBuzz');
   
  }); 
});


