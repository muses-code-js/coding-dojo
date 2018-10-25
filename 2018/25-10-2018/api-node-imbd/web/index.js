const express = require('express');
const db = require('../database');
const core = require('../core/create-movie.js');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/movie', async function(req, res) {
	const error = await core(db)(req.body.title, req.body.description);

	if (error) {
		return res.status(400).send(error);
	}

  res.status(201).json({ title: req.body.title, description: req.body.description });
});

module.exports = app;
