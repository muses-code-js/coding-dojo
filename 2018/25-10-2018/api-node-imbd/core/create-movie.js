const isDuplicated = (movieCollection, movieName) =>
  movieCollection.some(movie => movie.title === movieName);

const createMovie = database => async (title, description) => {
  if (!title && !description) {
    return "Movie title and description was required";
  } else if (!title) {
    return "Movie title was required";
  } else if (!description) {
    return "Movie description was required";
  }

  const allMovies = await database.getAll();

  if (isDuplicated(allMovies, title)) {
    return "Movie name is duplicate.";
  }

  return await database.saveMovie(title, description);
};

module.exports = createMovie;
