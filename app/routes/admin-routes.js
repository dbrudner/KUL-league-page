// app/routes.js
const path = require('path');
const db = require('../models/index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

module.exports = {

    // Return ALL players
    getAllPlayers: function(app, route) {
        app.get(route, (req, res) => {
            db.User.find({})
            .exec((err, players) => {
                if (err) throw err;
                res.json(players);
            })
        })
    },

    // Add new game to schedule
    addGame: function(app, route) {
        console.log("HI");
        app.post(route, (req, res) => {
            db.Game.create(req.body, (err, game) => res.json(game));
        })
    }
};