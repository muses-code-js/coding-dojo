const assert = require('assert');
//num = column num
// const wordWrap = (s, w) => s.replace(
//   new RegExp(`(?![^\\n]{1,${w}}$)([^\\n]{1,${w}})\\s`, 'g'), '$1\n'
// );
function wordWrap(str, num) {
  let result = "";
  let lastSpaceIndex
  for (let i = 0; i < str.length; i ++) {
    if (str[i]===" "){
      lastSpaceIndex = i
    }
    if (i !== 0 && i % num === 0) {
      if (str[i]===" "){
        result += "\n";
      } else {
        result += '\n'
        str[lastSpaceIndex] = '\n'
      }
    }
    result += str[i];
  }
  return result;
}

describe('Word Wrap', () => {

  it('should break at a column number', () => {
    const sentence = 'A quick brown fox jumps over a lazy dog';
    const columnNumber = 7;
    // `` <- template literal
    const expected = `A quick\nbrown\nfox\njumps\nover a\nlazy\ndog`;
    const actual = wordWrap(sentence, columnNumber);

    assert.equal(actual, expected);
  });

});
