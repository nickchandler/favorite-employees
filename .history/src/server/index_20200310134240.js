const express = require("express");
const db = require("../db/methods");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`application server is now up and running at port ${PORT}!`);
});

app.use(bodyParser.json());

app.get("/users", (req, res) => {
  db.fetchAllEmployees(req, res);
});

app.get("/users/user", (req, res) => {
  db.fetchEmployee(req, res);
});

app.get("/favorites", (req, res) => {
  db.fetchFavorites(req, res);
});
