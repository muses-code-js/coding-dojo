const assert = require("assert");

const createMovie = database => {
  return (title, description) => {
    if (!title && !description) {
      return "Enter a Title and Description";
    }
    if (!title) {
      return "Enter a title";
    }
    if (!description) {
      return "Enter a Description";
    }
    const movies = database.getAllMovies();
    if (movies.some(movie => movie.title == title)) {
      return "Movie already exists.";
    }

    return "Movie is saved!";
  };
};

const fakeDB = {
  getAllMovies: () => {
    return [
      { title: "Star Wars II", description: "Description" },
      { title: "Star Wars", description: "Description" }
    ];
  }
};

describe("CreateMovie", () => {
  it("if the movie has no title return an error", () => {
    const actual = createMovie(fakeDB)("", "description");
    const expected = "Enter a title";
    assert.equal(actual, expected);
  });
  it("if the movie has no Description return an error", () => {
    const actual = createMovie(fakeDB)("Star Wars", "");
    const expected = "Enter a Description";
    assert.equal(actual, expected);
  });
  it("if the movie has no Title and no Description return an error", () => {
    const actual = createMovie(fakeDB)("", "");
    const expected = "Enter a Title and Description";
    assert.equal(actual, expected);
  });
  it("if the movie has both Title and Description, movie is saved", () => {
    const actual = createMovie(fakeDB)("Star Wars III", "Description");
    const expected = "Movie is saved!";
    assert.equal(actual, expected);
  });
  it("if the movie already exists in the DB, return an error", () => {
    const actual = createMovie(fakeDB)("Star Wars II", "Description");
    const expected = "Movie already exists.";
    assert.equal(actual, expected);
  });
});
