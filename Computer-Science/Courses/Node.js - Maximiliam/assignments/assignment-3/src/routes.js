const express = require("express");
const path = require("path");

const PUBLIC = require("./utils/public-path");

const routes = express.Router();

routes.get("/", (req, res, next) => {
  return res.sendFile(path.join(__dirname, "views", "index.html"));
});

routes.get("/users", (req, res, next) => {
  return res.sendFile(path.join(__dirname, "views", "users.html"));
});

routes.use("/", (req, res, next) => {
  return res.sendFile(path.join(__dirname, "views", "404.html"));
});

module.exports = routes;
