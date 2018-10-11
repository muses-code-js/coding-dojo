const isDuplicated = (movieCollection, movieName) =>
  movieCollection.some(movie => movie.title === movieName);

const createMovie = database => (title, description) => {
  if (title === "" && description === "") {
    return "Movie title and description was required";
  } else if (title === "") {
    return "Movie title was required";
  } else if (description === "") {
    return "Movie description was required";
  }

  const allMovies = database.getAll();

  if (isDuplicated(allMovies, title)) {
    return "Movie name is duplicate.";
  }

  return JSON.stringify(database.saveData());
};

module.exports = createMovie;
