const sinon = require('sinon');
const assert = require('assert');
const createMovie = require('./create-movie');

// using stub instead of spy

const fakeDB = {
  getAllMovies: () => {},
  saveMovie: (title, description) => {}
};

describe('CreateMovie', () => {
  let stubGetAllMovies;
  let stubSaveMovie;

  afterEach(function() {
    fakeDB.getAllMovies.restore();
    fakeDB.saveMovie.restore();
  });

  it('if the movie has no title return an error', () => {
    stubGetAllMovies = sinon.stub(fakeDB, 'getAllMovies');
    stubSaveMovie = sinon.stub(fakeDB, 'saveMovie');
    const actual = createMovie(fakeDB)('', 'description');
    const expected = 'Enter a title';
    assert.equal(actual, expected);
    assert(stubGetAllMovies.notCalled);
    assert(stubSaveMovie.notCalled);
  });

  it('if the movie has no Description return an error', () => {
    stubGetAllMovies = sinon.stub(fakeDB, 'getAllMovies');
    stubSaveMovie = sinon.stub(fakeDB, 'saveMovie');
    const actual = createMovie(fakeDB)('Star Wars', '');
    const expected = 'Enter a Description';
    assert.equal(actual, expected);
    assert(stubGetAllMovies.notCalled);
    assert(stubSaveMovie.notCalled);
  });

  it('if the movie has no Title and no Description return an error', () => {
    stubGetAllMovies = sinon.stub(fakeDB, 'getAllMovies');
    stubSaveMovie = sinon.stub(fakeDB, 'saveMovie');
    const actual = createMovie(fakeDB)('', '');
    const expected = 'Enter a Title and Description';
    assert.equal(actual, expected);
    assert(stubGetAllMovies.notCalled);
    assert(stubSaveMovie.notCalled);
  });

  it('if the movie has both Title and Description, movie is saved', () => {
    stubGetAllMovies = sinon
      .stub(fakeDB, 'getAllMovies')
      .returns([
        { title: 'Star Wars II', description: 'Description' },
        { title: 'Star Wars', description: 'Description' }
      ]);
    stubSaveMovie = sinon.stub(fakeDB, 'saveMovie').returns('Star Wars III is saved into the database!');
    const actual = createMovie(fakeDB)('Star Wars III', 'Description');
    const expected = 'Star Wars III is saved into the database!';
    assert.equal(actual, expected);
    assert(stubGetAllMovies.calledOnce);
    assert(stubSaveMovie.withArgs('Star Wars III', 'Description').called);
  });

  it('if the movie already exists in the DB, return an error', () => {
    stubGetAllMovies = sinon
      .stub(fakeDB, 'getAllMovies')
      .returns([
        { title: 'Star Wars II', description: 'Description' },
        { title: 'Star Wars', description: 'Description' }
      ]);
    stubSaveMovie = sinon.stub(fakeDB, 'saveMovie');
    const actual = createMovie(fakeDB)('Star Wars II', 'Description');
    const expected = 'Movie already exists.';
    assert.equal(actual, expected);
    assert(stubGetAllMovies.calledOnce);
    assert(stubSaveMovie.notCalled);
  });
});
