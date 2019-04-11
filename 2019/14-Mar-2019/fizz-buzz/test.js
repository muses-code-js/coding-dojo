const list_numbers = (number) => { 
  var listNum = [];
 for( i=1; i<=number; i++) {

  listNum.push(i);
 }
   return listNum;
}

describe('fizz Buzz game ', function() {

  it('expect a number ', () => {
    const expected = [1];
    const actual = list_numbers(1);
    


    expect(expected).toEqual(actual);
  });

  it('expect a list of numbers ', () => {
    const expected = [1,2];
    const actual = list_numbers(2);
  
    


    expect(expected).toEqual(actual);
  });

  

});
