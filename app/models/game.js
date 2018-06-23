const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    season: String,
    gameNumber: Number,
    teamHome: String,
    teamAway: String,
    location: String,
    date: String,
    teamHomeScore: Number,
    teamAwayScore: Number,
    outcome: String,
    // Array of user _id's
    goalsByPlayer: Array,
    // Array of user _id's
    assistsByPlayer: Array
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Game', gameSchema);