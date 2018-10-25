const database = require('./index')
const mongoose = require('mongoose');

describe('Database', () => {
	beforeAll(async () => await mongoose.connection.collections['movies'].drop());

	it('Saves a movie', async () => {
		const movie = {
			title: 'Despicable Me',
			description: 'A movie'
		};

		await database.saveMovie(movie.title, movie.description);

		const allMovies = await database.getAll();

		expect(allMovies[0].title).toBe(movie.title);
		expect(allMovies[0].description).toBe(movie.description);
	});
});
