const express = require("express");
const db = require("../db/methods");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`application server is now up and running at port ${PORT}!`);
});

app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json());

app.get("/employees", (req, res) => {
  db.fetchAllEmployees(req, res);
});

app.get("/employees/employee", (req, res) => {
  db.fetchEmployee(req, res);
});

app.get("/favorites", (req, res) => {
  db.fetchFavorites(req, res);
});
