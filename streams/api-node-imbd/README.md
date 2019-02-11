This is a Kata which aims at developing a Node API for creating a personal Movie Database using Test Driven Development[TDD] approach

## Requirements
- good understanding of JavaScript
- basic knowledge of server/client request/response
- basic understanding of HTTP
- basic understanding of GIT

## Development using
- Node.js
- MongoDB
- TDD approach
- [Postman](https://www.getpostman.com/) - API development environment
- [Robo 3T](https://robomongo.org/) - a free lightweight GUI for MongoDB enthusiasts


## User Story 1
1. As a User I want to insert movie information to create my own movie database.

### Acceptance Criteria
- The movie to be inserted must have title and description
- User cannot enter the same movie name again i.e duplicates must be tracked based on the title of the movie
- The user must send the data to the API in JSON format

## User Story 2
Coming soon...

### Step 01 - Core

- Set up your project by initiate NPM
- Install Jest
- Create your first test without any implementation.
- Test your code and see if you get back the correct response

```
input (title, description)
output
	movie: {
		id,
		title,
		description
	}
	status: 'successfully added movie'
```

### Step 02 - Core

- Create a mock / fake DB.
- Use Dependency Injection to integrate the DB into your implementation.
- Test for duplicated movie
- Use `jest.spyOn` to test the save and getAll method of your DB
- Created a index file in the core to export all the controllers


### Step 03 - DB

- Create tests for the DB
- Install Mongo and Mongoose
- Connect to a DB
- Create the movie schema
- Async / Await
- Add the DB methods (save and getAll)
