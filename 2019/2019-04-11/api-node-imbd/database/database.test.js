const sinon = require('sinon');
const assert = require('assert');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
describe('databases', () => {
  it('Should saved a movie to database', () => {
    let actual = saveMovie('Star Wars IV', 'Description');
    let expected = 'Star Wars IV is saved into the database!';
    assert.equal(actual, expected);
    actual = getAllMovies();
    expected = 1;
    assert.equal(actual.length, expected);
  });
});

function saveMovie(title, description) {}
