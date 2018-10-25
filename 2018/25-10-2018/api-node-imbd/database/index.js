var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

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
module.exports = database;
