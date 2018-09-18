const createMovie = require("./create-movie");


describe('Create movie', () => {
  it('Requires movie with a title', () => {
    const title = "";
    const description = "some description here";
    expect(createMovie(title, description)).toBe('Movie title was required');
  });

  it('Requires movie with a description', () => {
    const title = "Star Wars";
    const description = "";
    expect(createMovie(title, description)).toBe('Movie description was required');
  }); 
  

});

