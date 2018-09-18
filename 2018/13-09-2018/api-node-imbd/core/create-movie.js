const  createMovie = (title, description) => {
  if (title === "") {
    return "Movie title was required"
  }
  else {
    return "Movie description was required"
  }
}

module.exports=createMovie;
