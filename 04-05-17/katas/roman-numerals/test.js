function convertToRoman(number){
  var num_str = "";
  if(number < 4){
    for(var i=0; i<number; i++){
      num_str = num_str+"I";
    }
    return num_str;
  }
  var map = {
    5 : "V",
    10 : "X",
    50 : "L",
    100 : "C",
    500 : "D",
    1000 : "M"
  }

  return map[number];
}

const assert = require('assert');

describe('Roman Numerals', () => {
  it('1 should return I', () => {
    const expected = 'I';
    const actual = convertToRoman(1);
    assert.equal(expected, actual);
  });

  it('2 should return II', () => {
    const expected = 'II';
    const actual = convertToRoman(2);
    assert.equal(expected, actual);
  });

  it('3 should return III', () => {
    const expected = 'III';
    const actual = convertToRoman(3);
    assert.equal(expected, actual);
  });

  it('5 should return V', () => {
    const expected = 'V';
    const actual = convertToRoman(5);
    assert.equal(expected, actual);
  });

  it('10 should return X', () => {
    const expected = 'X';
    const actual = convertToRoman(10);
    assert.equal(expected, actual);
  });

  it('50 should return L', () => {
    const expected = 'L';
    const actual = convertToRoman(50);
    assert.equal(expected, actual);
  });

  it('100 should return C', () => {
    const expected = 'C';
    const actual = convertToRoman(100);
    assert.equal(expected, actual);
  });

  it('500 should return D', () => {
    const expected = 'D';
    const actual = convertToRoman(500);
    assert.equal(expected, actual);
  });

  it('1000 should return M', () => {
    const expected = 'M';
    const actual = convertToRoman(1000);
    assert.equal(expected, actual);
  });





});
