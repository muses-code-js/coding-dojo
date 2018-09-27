const expect = require('chai').expect;

const createMovie = (movie) => {

	if(!movie.title || movie.title === ''){
		return 'The movie title is required.';
	}
	if(!movie.description || movie.description === ''){
		return 'The movie description is required.';
	}
	return '';
}

const isEmpty = (field) => {

	return field==="";
}

describe('Creating a movie', () => {
	it('should return an empty title error', () => {
		const movie = {
			title : '',
			description: 'Some description...'
		}
		expect(createMovie(movie)).to.equal('The movie title is required.');
	});

	it('should return an empty description error', () => {
		const movie = {
			title : 'Movie title',
			description: ''
		}
		expect(createMovie(movie)).to.equal('The movie description is required.');
	});
});
describe('testin if fields are empty', () => {
	it('should return true if field is empty', () => {
		const field = "";
		expect(isEmpty(field)).to.equal(true);
	});
});
