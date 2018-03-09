describe('Fizz Buzz Game', function() {
  it('takes regular number and returns the same number', () => {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(2)).toEqual(2);
  });
  it('takes multiple of 3 and return Fizz', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
    expect(fizzBuzz(6)).toEqual('Fizz');
    expect(fizzBuzz(21)).toEqual('Fizz');
  });
  it('takes multiple of 5 and return Buzz', () => {
    expect(fizzBuzz(10)).toEqual('Buzz');
    expect(fizzBuzz(5)).toEqual('Buzz');
  });
  it('takes multiple of both 3 and 5 and returns FizzBuzz', () => {
    expect(fizzBuzz(60)).toEqual('FizzBuzz');
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    expect(fizzBuzz(30)).toEqual('FizzBuzz');
  });
});

function fizzBuzz(input) {
  let fbString = '';

  if(input % 3 === 0)
    fbString = 'Fizz'

  if(input % 5 === 0)
    fbString += 'Buzz'

  return fbString || input;
}
