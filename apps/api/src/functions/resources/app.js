const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const router = require("./router.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());

if (process.env["NETLIFY_DEV"]) {
  app.use("/.netlify/functions/resources", router);
} else {
  app.use("/resources");
}

module.exports = app;