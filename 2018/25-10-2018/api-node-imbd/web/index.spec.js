const request = require('supertest');
const app = require('./index');
const mongoose = require('mongoose');

describe('web', () => {
	beforeAll(async () => await mongoose.connection.collections['movies'].drop());

	it('Saves a valid movie', async () => {
		const response = await request(app)
			.post('/movie')
			.send({title: 'Despicable Me 3', description: 'Another movie'})
			.set('Accept', 'application/json')

		expect(response.status).toBe(201)
		expect(response.body.title).toBe("Despicable Me 3");
		expect(response.body.description).toBe("Another movie");
	});

	it('Does not save an invalid movie', async () => {
		const response = await request(app)
			.post('/movie')
			.send()
			.set('Accept', 'application/json')

		expect(response.status).toBe(400);
		expect(response.text).toBeDefined();
	})
});
