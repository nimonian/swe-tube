const cors = require("cors");
const express = require("express");
const router = require("./router.js");

const app = express();

app.use(cors());
app.use(express.json());

if (process.env["NETLIFY_DEV"]) {
	app.use("/.netlify/functions/resources", router);
} else {
	app.use("/resources", router);
}

module.exports = app;
