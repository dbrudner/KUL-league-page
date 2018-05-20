const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    isRegistered: {
        type: Boolean,
        default: false
    },
    firstName: String,
    lastName: String,
    gender: String,
    referral: String, //player ID of recomender 
    height: Number,
    positionValue: Number,
    experience: Number,
    athleticism: Number,
    contactInfo: Object,
    jerseyName: String,
    jerseyNumber: Number,
    jerseyNumbwerBackup: Number,
    jerseyStyle: String,
    jerseySize: String,
    swagOption: Boolean
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);