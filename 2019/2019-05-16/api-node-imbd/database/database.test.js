const assert = require('assert');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/MovieDB', { useNewUrlParser: true });
const schema = new mongoose.Schema({ title: 'string', description: 'string' });
const Movie = mongoose.models.Movie || mongoose.model('Movie', schema);

const DB = {
  getAllMovies: async () => {
    return await Movie.find().map(movies => {
      return movies.map(movie => {
        return {
          title: movie.title,
          description: movie.description
        };
      });
    });
  },
  saveMovie: async (title, description) => {
    const result = await Movie.create({ title, description });
    return `${result.title} is saved into the database!`;
  }
};

describe('Database', () => {
  beforeEach(done => mongoose.connection.collections['movies'].drop(() => done()));

  it('Should save a movie to database', async () => {
    const actual = await DB.saveMovie('Star Wars VI', 'Description');
    const expected = 'Star Wars VI is saved into the database!';
    assert.equal(actual, expected);
  });
  it('Should get all movies in the database', async () => {
    await Movie.create({ title: 'title1', description: 'ggggg1' });
    await Movie.create({ title: 'title2', description: 'ggggg2' });
    await Movie.create({ title: 'title3', description: 'ggggg3' });
    const actual = await DB.getAllMovies();
    const expect = [
      { title: 'title1', description: 'ggggg1' },
      { title: 'title2', description: 'ggggg2' },
      { title: 'title3', description: 'ggggg3' }
    ];
    assert.deepEqual(actual, expect);
  });
});
