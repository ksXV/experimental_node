const http = require("http");
const cors = require("cors");
const express = require("express");
const app = express();
require("dotenv").config();

app.use(cors());

app.get("/foo", (_req, res) => {
	res.setHeader(
		`foo=bar; Domain=172.26.94.129:5173; Path=/; HttpOnly; SameSite=None, __cf_bm=DajRGzzplFOhEPf6gg0aJAXggjfK.t3eX4QxfrhUtNI-1682927158-0-AfQ7Jvc10dciuwNd6XTriNLa1wbOSPhxReMWqkUNta5qHuOomj19YdDDJyuPSlsa8BfiQP9mAj9RmfAWveL38rQ=; path=/; expires=Mon, 01-May-23 08:15:58 GMT; domain=.onrender.com; HttpOnly; Secure; SameSite=None`
	);
	res.cookie(
		"foo",
		"bar",
		{ httpOnly: true, sameSite: "none" },
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
