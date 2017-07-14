const assert = require('assert');
//const Numbers = ()
const FizzBuzz = (number) => {
if(number %3 ===0 && number %5 ===0)
  {
    return 'FizzBuzz'
  } else if(number %5 ===0){
    return 'Buzz'
  }else if(number %3 ===0){
    return 'Fizz'
  }else{
    return number
  }
}


describe('Fizz Buzz Game', function() {

  it('if 3 then Fizz', () => {
    const expected = 'Fizz';
    const actual = FizzBuzz(3);

    assert.equal(actual, expected);
  });

  it('if 5 then Buzz', () => {
    const expected = 'Buzz';
    const actual = FizzBuzz(5);

    assert.equal(actual, expected);
  });

  it('if 6 then Fizz', () => {
    const expected = 'Fizz';
    const actual = FizzBuzz(6);

    assert.equal(actual, expected);
  });

  it('if 15 then FizzBuzz', () => {
    const expected = 'FizzBuzz';
    const actual = FizzBuzz(15);

    assert.equal(actual, expected);
  });
  it('if 7 then 7', () => {
    const expected = 7;
    const actual = FizzBuzz(7);

    assert.equal(actual, expected);
  });
  it('if 21 then Fizz', () => {
    const expected = 'Fizz';
    const actual = FizzBuzz(21);

    assert.equal(actual, expected);
  });
    it('if 30 then FizzBuzz', () => {
    const expected = 'FizzBuzz';
    const actual = FizzBuzz(30);

    assert.equal(actual, expected);
  });
  for(var i=1;i<=100;i++){
    console.log(FizzBuzz(i));
  }


});
