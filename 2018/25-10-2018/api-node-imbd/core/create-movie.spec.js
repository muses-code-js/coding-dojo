const createMovie = require("./create-movie");

describe("Create movie", () => {
  it("Requires movie with a title", async () => {
    const fakeDatabase = {
      getAll: () => {},
      saveMovie: () => {}
    };
    const title = "";
    const description = "some description here";
    const fakeDatabaseSaveMovie = jest.spyOn(fakeDatabase, "saveMovie");
    expect(await createMovie(fakeDatabase)(title, description)).toBe(
      "Movie title was required"
    );
    expect(fakeDatabaseSaveMovie).not.toHaveBeenCalled();
  });

  it("Requires movie with a description", async () => {
    const fakeDatabase = {
      getAll: () => {},
      saveMovie: () => {}
    };
    const title = "Star Wars";
    const description = "";
    const fakeDatabaseSaveMovie = jest.spyOn(fakeDatabase, "saveMovie");
    expect(await createMovie(fakeDatabase)(title, description)).toBe(
      "Movie description was required"
    );
    expect(fakeDatabaseSaveMovie).not.toHaveBeenCalled();
  });

  it("Requires movie with a title and a description", async () => {
    const title = "";
    const description = "";
    expect(await createMovie()(title, description)).toBe(
      "Movie title and description was required"
    );
  });

  it("Should not have duplicate movie name", async () => {
    const fakeDatabase = {
      getAll: () => {
        return [
          { title: "DespicableMe", description: "Comedy" },
          { title: "DespicableMe2", description: "Comedy" },
          { title: "DespicableMe3", description: "Comedy" }
        ];
      }
    };
    expect(await createMovie(fakeDatabase)("DespicableMe", "Comedy")).toBe(
      "Movie name is duplicate."
    );
  });

  it("Saves a valid movie", async () => {
    const fakeDatabase = {
      getAll: () => ([]),
      saveMovie: () => {
        return {
          title: "DespicableMe2",
          description: "Comedy"
        };
      }
    };
    const fakeDatabaseSaveMovie = jest.spyOn(fakeDatabase, "saveMovie");

    const movie = {
      title: "DespicableMe2",
      description: "Comedy"
    }

    expect(await createMovie(fakeDatabase)(movie.title, movie.description)).toEqual(movie);
    expect(fakeDatabaseSaveMovie).toHaveBeenCalledWith(movie.title, movie.description);
  });
});
