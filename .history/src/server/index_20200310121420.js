const express = require("express");
const db = require("../db/methods");
const body_parser = require("body-parser");
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`application server is now up and running at port ${PORT}!`);
});

app.get("/users", (req, res) => {
  db.fetchAllUsers(req, res);
});

app.get("./users/:userid", (req, res) => {
  db.fetchEmployee(req, res);
});
