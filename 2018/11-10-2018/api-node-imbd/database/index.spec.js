var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movieDatabase');

var movieDatabaseSchema = mongoose.model('Movie', new mongoose.Schema({
	title: String,
	description: String
}));

const database = {
	saveMovie: async (title, description) => {
		await movieDatabaseSchema.create({title,description})
	},
	getAll: async () => {
		return await movieDatabaseSchema.find() }
};

describe('Database', () => {
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
