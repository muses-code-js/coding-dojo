const assert = require('assert');
let account = [];
account.push('Date  Amount  Balance');

const printStatement = () => {
  return account.join('\n');
};

const deposit = n => {
  account.push('24.12.2015  +500  500');
};
describe('Banking Kata', () => {
  it('prints the statement', () => {
    const expected = 'Date  Amount  Balance';
    const actual = printStatement();
    assert.equal(actual, expected);
  });

  it('prints deposit', () => {
    const expected = `Date  Amount  Balance\n24.12.2015  +500  500`;
    deposit();
    const actual = printStatement();
    assert.equal(actual, expected);
  });
});
