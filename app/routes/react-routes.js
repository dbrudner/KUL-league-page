const path = require("path");

// module.exports = function(app) {
// 	// Serves react stuff.
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.join(__dirname + "/react/public/index.html"));
// 	});
// };

module.exports = {
	// Signup
	react: (app, route) => {
		app.get(route, (req, res) => {
			res.sendFile(path.join(__dirname + "/react/public/index.html"));
		});
	}
};
