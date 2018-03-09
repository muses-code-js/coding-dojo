const assert = require('assert');

function fizzBuzz(x) {
  if (x % 3 === 0 && x % 5 === 0) {
    return "fizzbuzz";
  }
  if (x%3 === 0){
    return "fizz";
  }
  if (x % 5 === 0) {
    return "buzz";
  }

  return x;
}

function computePrint(x) {
  let numberArray = [];
  let i = 1;

  for (i; i <= x; i+=1) {`1`
    numberArray.push(fizzBuzz(i));
  }
  
  return numberArray;
}

describe('Fizz Buzz Game', function() {

  it('returns fizz for numbers divisible by 3', () => {
     
    assert.equal(fizzBuzz(3), "fizz");
    assert.equal(fizzBuzz(6), "fizz");
    assert.equal(fizzBuzz(9), "fizz");
    
  });

  it('returns buzz for numbers divisible by 5', () => {
    
   assert.equal(fizzBuzz(5), "buzz");
   assert.equal(fizzBuzz(10), "buzz");
   assert.equal(fizzBuzz(20), "buzz");
   
  });

  it('returns fizzbuzz for numbers divisible by 3 and 5', () => {
    
   assert.equal(fizzBuzz(15), "fizzbuzz");
   assert.equal(fizzBuzz(30), "fizzbuzz");
   
  });

  it('returns number for numbers indivisible by 3 and 5', () => {
    
   assert.equal(fizzBuzz(1), 1);
   assert.equal(fizzBuzz(2), 2);
   
  });

  it("returns [1] for 1", () => {
    assert.deepEqual(computePrint(1), [1]);
  });

  it("returns [1, 2] for 2", () => {
    assert.deepEqual(computePrint(2), [1, 2]);
  });

  it("returns [1, 2, 'fizz'] for 3", () => {
    assert.deepEqual(computePrint(3), [1, 2, 'fizz']);
  });

  it("returns [1, 2, 'fizz', 4, 'buzz'] for 5", () => {
    assert.deepEqual(computePrint(5), [1, 2, 'fizz', 4, 'buzz']);
  });
});
