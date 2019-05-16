const createMovie = (database) => {
  return (title, description) => {
    if (!title && !description) {
      return 'Enter a Title and Description';
    }
    if (!title) {
      return 'Enter a title';
    }
    if (!description) {
      return 'Enter a Description';
    }
    const movies = database.getAllMovies();
    if (movies.some((movie) => movie.title == title)) {
      return 'Movie already exists.';
    }

    return database.saveMovie(title, description);
  };
};

module.exports = createMovie;
