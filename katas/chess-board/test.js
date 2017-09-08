const assert = require('assert');
//This function is just for testing the test describe. 
//Either you have to edit this or delete. 
var randomFuncYouWillEditLater = function ( x, y) {
  var xAxis = 1;
  var yAxis = 1; 
  return xAxis + yAxis;
}

describe('Chess Board', () => {
  it('Test', () => {
    const expected = 2;
    const actual = randomFuncYouWillEditLater();

    assert.equal(actual, expected);
  });
});
