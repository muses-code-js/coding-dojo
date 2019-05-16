const sinon = require('sinon');
const assert = require('assert');
const createMovie = require('./create-movie');

const fakeDB = {
  getAllMovies: () => {
    return [{ title: 'Star Wars II', description: 'Description' }, { title: 'Star Wars', description: 'Description' }];
  },
  saveMovie: (title, description) => {
    return `${title} is saved into the database!`;
  },
};

describe('CreateMovie', () => {
  let spyGetAllMovies;
  let spySaveMovie;

  beforeEach(function() {
    spyGetAllMovies = sinon.spy(fakeDB, 'getAllMovies');
    spySaveMovie = sinon.spy(fakeDB, 'saveMovie');
  });
  afterEach(function() {
    fakeDB.getAllMovies.restore();
    fakeDB.saveMovie.restore();
  });
  it('if the movie has no title return an error', () => {
    const actual = createMovie(fakeDB)('', 'description');
    const expected = 'Enter a title';
    assert.equal(actual, expected);
    assert(spyGetAllMovies.notCalled);
    assert(spySaveMovie.notCalled);
  });
  it('if the movie has no Description return an error', () => {
    const actual = createMovie(fakeDB)('Star Wars', '');
    const expected = 'Enter a Description';
    assert.equal(actual, expected);
    assert(spyGetAllMovies.notCalled);
    assert(spySaveMovie.notCalled);
  });
  it('if the movie has no Title and no Description return an error', () => {
    const actual = createMovie(fakeDB)('', '');
    const expected = 'Enter a Title and Description';
    assert.equal(actual, expected);
    assert(spyGetAllMovies.notCalled);
    assert(spySaveMovie.notCalled);
  });
  it('if the movie has both Title and Description, movie is saved', () => {
    const actual = createMovie(fakeDB)('Star Wars III', 'Description');
    const expected = 'Star Wars III is saved into the database!';
    assert.equal(actual, expected);
    assert(spyGetAllMovies.calledOnce);
    assert(spySaveMovie.withArgs('Star Wars III', 'Description').calledOnce);
  });
  it('if the movie already exists in the DB, return an error', () => {
    const actual = createMovie(fakeDB)('Star Wars II', 'Description');
    const expected = 'Movie already exists.';
    assert.equal(actual, expected);
    assert(spyGetAllMovies.calledOnce);
    assert(spySaveMovie.notCalled);
  });
});
