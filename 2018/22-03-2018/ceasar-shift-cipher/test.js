const assert = require('assert');

const ceaser = (str) => {

  let newStr = "";
  for (let i = 0; i < str.length;i++) {
    let code = str.charCodeAt(i);
    if(code>=65&&code<=67){
      code-=23;
    }
    code-=3;
    newStr += String.fromCharCode(code);
  }
  return newStr;
}


describe('Ceaser Shift Cipher', () => {

  it('should return V given Y, when K = 3', () => {
    const expected = "V";
    const actual = ceaser("Y");

    assert.equal(actual, expected);
  });

  it('should return W given Z, when K = 3', () => {
    const expected = "W";
    const actual = ceaser("Z");

    assert.equal(actual, expected);
  });

  it('should return AA given DD, when K = 3', () => {
    const expected = "AA";
    const actual = ceaser("DD");

    assert.equal(actual, expected);
  });

  it('should return BB given EE, when K = 3', () => {
    const expected = "BB";
    const actual = ceaser("EE");

    assert.equal(actual, expected);
  });

  it('should return ZZ given CC, when K = 3', () => {
    const expected = "ZZ";
    const actual = ceaser("CC");

    assert.equal(actual, expected);
  });

});