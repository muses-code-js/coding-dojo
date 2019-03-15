const assert = require('assert');
function createMovie(title, description) {
  if (!title) {
    return 'Enter a title';
  }
  if (!description) {
    return 'Enter a Description';
  }
}

describe('my first test', () => {
  it('if the movie have no title return an error', () => {
    const actual = createMovie('');
    const expected = 'Enter a title';
    assert.equal(actual, expected);
  });
  it('if the movie have no Description return an error', () => {
    const actual = createMovie('Star Wars', '');
    const expected = 'Enter a Description';
    assert.equal(actual, expected);
  });
});
