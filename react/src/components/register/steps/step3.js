import slider from "./slider";

const description = `How experienced of a player are you? Perhaps it's your first
season, or maybe you're a professional with double digit
years of ultimate.`;

export default slider(
	"timePlayed",
	"Time Played",
	description,
	"Brand New",
	"Veteran"
);
