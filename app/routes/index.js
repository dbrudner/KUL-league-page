const userRoutes = require('./user-routes')
const reactRoutes = require('./react-routes')
const adminRoutes = require('./admin-routes')
const commonRoutes = require('./common-routes')

module.exports = function (app, passport) {

    // Checks if a user is logged in
    userRoutes.test(app, '/test')

    // Logs a user out
    userRoutes.logout(app, '/logout')

    // Logs a user in
    userRoutes.login(app, passport, '/login')

    // Signs up
    userRoutes.signup(app, passport, '/signup')

    // Registers a user for season
    userRoutes.register(app, '/register')

    // Gets all players
    adminRoutes.getAllPlayers(app, '/players')

    // Adds a game to schedule
    adminRoutes.addGame(app, '/newgame')

    // Gets all games
    commonRoutes.getGames(app, '/games')
}