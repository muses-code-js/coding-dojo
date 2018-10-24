// {
// 	movie: {
// 		// id,
// 		title
// 		description
// 	},
// 	status: 'successfully added movie'
	
// }


function createMovie(title, description){
	if(description == ''){
		return 'Movie should have a description';
	}else if (title == '' ){
		return 'Movie should have a title';
	} else {
		return {
			movie: {
				title: title,
				description: description
			},
			status: 'successfully added movie'
		}
	}
	
}

describe('Creating a movie', () => {
	it('Movie without title should return error', () => {
		const movie = { 
			title: '',
			description: 'hello'
		};
		expect(createMovie(movie.title, movie.description)).toBe('Movie should have a title');
	})
	it('Movie without description should return error', () => {
		const movie = {
			title: 'Harry Potter',
			description: ''
		};
		expect(createMovie(movie.title, movie.description)).toBe('Movie should have a description');
	})
	it('createMovie should return object',() => {
		const movie = {
			title: 'Game of Thrones',
			description: 'White Walkers'
		};
		const expectedMovie = {
			movie: {
				title: 'Game of Thrones',
			    description: 'White Walkers'
			}, 
			status: 'successfully added movie'
		}
		expect(createMovie(movie.title, movie.description)).toEqual(expectedMovie);
	})

});
