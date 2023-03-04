const cors = require("cors");
const express = require("express");
const resources = require("./functions/resources/router.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/resources", resources);

module.exports = app;
