const assert = require('assert');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/MovieDB', { useNewUrlParser: true });
var schema = new mongoose.Schema({ title: 'string', description: 'string' });
var Movie = mongoose.models.Movie || mongoose.model('Movie', schema);

const DB = {
  getAllMovies: () => {},
  saveMovie: async (title, description) => {
    const result = await Movie.create({ title: title, description: description });
  }
};

describe('databases', () => {
  it('Should saved a movie to database', async () => {
    let actual = await DB.saveMovie('The Avengers: End Game', 'Description');
    let expected = 'Star Wars IV is saved into the database!';
    assert.equal(actual, expected);
  });
});
