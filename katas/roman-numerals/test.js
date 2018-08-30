const expect = require('chai').expect;
const toRomanNumber = require('./roman-numerals')
describe('Roman numerals', function() {

  it('works', () => {
    const expected = true;
    const actual = true;

    expect(expected).to.equal(actual);
  });

  it('convert 1 to I', () => {
    const expected = 'I';
    const actual = toRomanNumber(1);

    expect(expected).to.equal(actual);
  });

  it('convert 5 to V', ()=> {
    const expected = 'V';
    const actual = toRomanNumber(5);

    expect(expected).to.equal(actual);
  });

  it('convert 10 to X', ()=> {
    const expected = 'X';
    const actual = toRomanNumber(10);

    expect(expected).to.equal(actual);
  });

  it('convert 50 to L', ()=> {
    const expected = 'L';
    const actual = toRomanNumber(50);

    expect(expected).to.equal(actual);
  });

  it('convert 100 to C', ()=> {
    const expected = 'C';
    const actual = toRomanNumber(100);

    expect(expected).to.equal(actual);
  });
  it('convert 500 to D', ()=> {
    const expected = 'D';
    const actual = toRomanNumber(500);

    expect(expected).to.equal(actual);
  });

  it('convert 1000 to M', ()=> {
    const expected = 'M';
    const actual = toRomanNumber(1000);

    expect(expected).to.equal(actual);
  });

  it('convert 2 to II', ()=> {
    const expected = 'II';
    const actual = toRomanNumber(2);

    expect(expected).to.equal(actual);
  });

  it('convert 3 to III', ()=> {
    const expected = 'III';
    const actual = toRomanNumber(3);

    expect(expected).to.equal(actual);
  });

  it('convert 4 to IV', ()=> {
    const expected = 'IV';
    const actual = toRomanNumber(4);

    expect(expected).to.equal(actual);
  });

  it('convert 6 to VI', ()=> {
    const expected = 'VI';
    const actual = toRomanNumber(6);

    expect(expected).to.equal(actual);
  });

  it('convert 18 to XVIII', () => {
    const expected = 'XVIII';
    const actual = toRomanNumber(18);

    expect(expected).to.equal(actual);
  })

});
