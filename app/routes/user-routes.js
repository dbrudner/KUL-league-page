// app/routes.js
const path = require("path");
const db = require("../models/index");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

module.exports = {
	// Signup
	signup: function(app, passport, route) {
		app.post(route, passport.authenticate("local-signup"), (req, res) => {
			res.json("signing up");
		});
	},

	login: function(app, passport, route) {
		app.post(route, passport.authenticate("local-login"), (req, res) => {
			res.json("logged in");
		});
	},

	// Logout
	logout: function(app, route) {
		app.get(route, (req, res) => {
			req.logout();
			res.json("logging out");
		});
	},

	register: function(app, route) {
		app.post(route, (req, res) => {
			console.log("info", { ...req.body.registrationInfo });
			console.log("user", req.body.user);
			db.User.findOneAndUpdate(
				{ _id: req.body.user },
				{ ...req.body.registrationInfo, isRegistered: true }
			).exec((err, result) => {
				console.log("err", err);
				console.log("res", result);
				res.json(result);
			});
		});
	},

	// Used to find if user is logged in
	test: function(app, route) {
		app.get(route, function(req, res) {
			res.json(req.user);
		});
	}
};
