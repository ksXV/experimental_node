const http = require("http");
const express = require("express");
const app = express();
require("dotenv").config();
app.get("/foo", (_req, res) => {
	res.cookie(
		"foo",
		"bar",
		{ httpOnly: true, sameSite: "none", domain: process.env.DOMAIN },
		{
			expires: new Date(Date.now() + 25892000000), // set expiry of 1month
		}
	);
	res.send("sent cookie \n");
});

const server = http.createServer(app);
server.listen(3000, () => {
	console.log("we are up and live");
});
