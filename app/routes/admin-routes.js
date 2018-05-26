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
    }
};