var mongoose = require('mongoose');

const db = process.env.ENV || 'PROD';
const hostName = process.env.ENV === 'DOCKER' ? 'mongo' : 'localhost';
const databaseUrl = `mongodb://${hostName}:27017/movieDatabase-${db}`;

mongoose.connect(databaseUrl, { useNewUrlParser: true });

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
