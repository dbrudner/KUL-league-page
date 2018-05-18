const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gamesSchema = new Schema({
    gameId: {
        type: Schema.Types.ObjectId,
        ref: "Game"
    },
    // Array of player _id's
    goals: Array,

    // Array of player_id's
    assists: Array
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Games', gamesSchema);