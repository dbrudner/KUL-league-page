const userRoutes = require("./user-routes");
const reactRoutes = require("./react-routes");
const adminRoutes = require("./admin-routes");
const commonRoutes = require("./common-routes");

module.exports = function(app, passport) {
	// Checks if a user is logged in
	userRoutes.test(app, "/api/test");

	// Logs a user out
	userRoutes.logout(app, "/api/logout");

	// Logs a user in
	userRoutes.login(app, passport, "/api/login");

	// Signs up
	userRoutes.signup(app, passport, "/api/signup");

	// Registers a user for season
	userRoutes.register(app, "/api/register");

	// Gets all players
	adminRoutes.getAllPlayers(app, "/api/players");

	// Adds a game to schedule
	adminRoutes.addGame(app, "/api/newgame");

	// Gets all games
	commonRoutes.getGames(app, "/api/games");

	reactRoutes.react(app, "*");
};
