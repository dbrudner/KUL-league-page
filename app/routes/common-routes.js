// app/routes.js
const path = require("path");
const db = require("../models/index");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

module.exports = {
	// Add new game to schedule
	getGames: function(app, route) {
		app.get(route, (req, res) => {
			db.Game.find({}).exec((err, games) => {
				if (err) throw err;
				res.json(games);
			});
		});
	}
};
