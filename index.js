const express  = require('express');
const app      = express();
const port     = process.env.PORT || 5000;
const mongoose = require('mongoose');
const passport = require('passport');

const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const session      = require('express-session');
const path = require('path')

const dbname = 'Kaohsiung'

const developmentUrl = `mongodb://localhost/${dbname}`

const routes = require('./app/routes')

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
} else {
    mongoose.connect(developmentUrl, function(err) {
        console.log('connected')
    })
}

app.use(express.static(path.join(__dirname, 'react/build')));

require('./config/passport')(passport);

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

// required for passport
app.use(session({ secret: 'FSD*&(SDFH#$$#sDF' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// routes ======================================================================
// routes.userRoutes(app, passport);
// routes.keyboardRoutes(app);
// routes.reactRoutes(app);
routes(app, passport)



// launch ======================================================================
app.listen(port);
console.log('App listening on port ' + port);