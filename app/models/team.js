const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamsSchema = new Schema({
    name: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Games', teamsSchema);