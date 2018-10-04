const _ = require('lodash');
const {it, describe} = require('mocha');
const {assert,expect} = require('chai')

const {potter,freq} = require('./index')

describe('the Potter discounts', () => {
  it('should return 0 if nothing given', () => {
    expect(potter()).to.equal(0);
  });

  it('should return the appropriate discount for different books', () =>{
    expect(potter([0])).to.equal(8);
    expect(potter([0,1])).to.equal(15.2);
    expect(potter([0,1,2])).to.equal(21.6);
    expect(potter([0,1,2,3])).to.equal(25.6);
    expect(potter([0,1,2,3,4])).to.equal(30)
  })

  it('should not apply discount for two same books',
  ()=>{
      expect(potter([0,0])).to.equal(16);
  })
})
describe('the frequence function', () => {
    it('should retunr the frequency function', () => {
        expect(freq([1,1,2,2])).to.deep.equal([0,2,2,0,0])
});
});


