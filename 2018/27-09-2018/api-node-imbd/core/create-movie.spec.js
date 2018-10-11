const createMovie = require("./create-movie");

describe("Create movie", () => {
  it("Requires movie with a title", () => {
    const fakeDatabase = {
      getAll: () => {},
      saveData: () => {}
    };
    const title = "";
    const description = "some description here";
    const mockCreateMovie = jest.spyOn(fakeDatabase, "getAll");
    expect(createMovie(fakeDatabase)(title, description)).toBe(
      "Movie title was required"
    );
    expect(mockCreateMovie).not.toHaveBeenCalled();
  });

  it("Requires movie with a description", () => {
    const fakeDatabase = {
      getAll: () => {},
      saveData: () => {}
    };
    const title = "Star Wars";
    const description = "";
    const mockCreateMovie = jest.spyOn(fakeDatabase, "getAll");
    expect(createMovie(fakeDatabase)(title, description)).toBe(
      "Movie description was required"
    );
    expect(mockCreateMovie).not.toHaveBeenCalled();
  });

  it("Requires movie with a title and a description", () => {
    const title = "";
    const description = "";
    expect(createMovie()(title, description)).toBe(
      "Movie title and description was required"
    );
  });

  it("Should not have duplicate movie name", () => {
    const fakeDatabase = {
      getAll: () => {
        return [
          { title: "DespicableMe", description: "Comedy" },
          { title: "DespicableMe2", description: "Comedy" },
          { title: "DespicableMe3", description: "Comedy" }
        ];
      }
    };
    expect(createMovie(fakeDatabase)("DespicableMe", "Comedy")).toBe(
      "Movie name is duplicate."
    );
  });

  it("Should save the data in JSON format", () => {
    const fakeDatabase = {
      getAll: () => {
        return [
          {
            id: 1,
            title: "DespicableMe",
            description: "Comedy"
          }
        ];
      },
      saveData: () => {
        return {
          id: 2,
          title: "DespicableMe2",
          description: "Comedy"
        };
      }
    };

    const expectedData = {
      id: 2,
      title: "DespicableMe2",
      description: "Comedy"
    };

    expect(createMovie(fakeDatabase)("DespicableMe2", "Comedy")).toBe(
      JSON.stringify(expectedData)
    );
  });

  it("Should call the getAll method once", () => {
    const fakeDatabase = {
      getAll: () => {
        return [
          {
            id: 1,
            title: "DespicableMe",
            description: "Comedy"
          }
        ];
      },
      saveData: () => {
        return {
          id: 2,
          title: "DespicableMe2",
          description: "Comedy"
        };
      }
    };

    const mockCreateMovie = jest.spyOn(fakeDatabase, "getAll");
    const result = createMovie(fakeDatabase)("DespicableMe2", "Comedy");

    expect(mockCreateMovie).toHaveBeenCalled();
  });
});
