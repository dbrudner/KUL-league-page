const userRoutes = require('./user-routes')
const reactRoutes = require('./react-routes')

module.exports = function (app, passport) {

    // Checks if a user is logged in
    userRoutes.test(app, '/test')

    // Logs a user out
    userRoutes.logout(app, '/logout')

    // Logs a user in
    userRoutes.login(app, passport, '/login')

    // Signs up
    userRoutes.signup(app, passport, '/signup')
}