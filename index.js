const http = require("http");
const cors = require("cors");
const express = require("express");
const app = express();
require("dotenv").config();

app.use(cors());

app.get("/foo", (_req, res) => {
	res.cookie(
		"foo",
		"bar",
		{ httpOnly: true, sameSite: "none" },
		{
			expires: new Date(Date.now() + 25892000000),
		}
	);
	res.send("sent cookie \n");
});

const server = http.createServer(app);
server.listen(3000, () => {
	console.log("we are up and live");
});
