const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/fav_employee", { useNewUrlParser: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("we are connected to MongoDB");
});

const employeeSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  age: Number,
  date_joined: Date,
  salary: Number,
  performance_score: Number,
  email: String,
  motto: String
});

const favoriteSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  age: Number,
  date_joined: Date,
  salary: Number,
  performance_score: Number,
  email: String,
  motto: String
});

const Employee = mongoose.model("Employee", employeeSchema);
const Favorite = mongoose.model("Favorite", favoriteSchema);

const insertMany = function(array) {
  Employee.insertMany(array);
};

const deleteDocument = function(req, res) {
  Employee.findByIdAndRemove(req.params.id);
};

const fetchAllEmployees = async function(req, res) {
  let employees = await Employee.find({});
  res.send(employees);
};

const fetchEmployee = async function(req, res) {
  let employee = await Employee.find({ _id: req.body.id });
  res.send(employee);
};

const fetchFavorites = async function(req, res) {
  let favorites = await Favorite.find({}, (err, files) => {
    if (err) console.log(err);
  });
  res.send(favorites);
};

const addFavorite = async function(req, res) {
  console.log(req.body.data, "this is favorite to be added");
  await Favorite.create({}, err => {
    if (err) console.log(err);
    else res.sendStatus(200);
  });
};
const removeFavorite = async function(req, res) {
  await Favorite.remove({ _id: req.body.id });
  res.sendStatus(200);
};

exports.insertMany = insertMany;
exports.deleteDocument = deleteDocument;
exports.fetchAllEmployees = fetchAllEmployees;
exports.fetchEmployee = fetchEmployee;
exports.fetchFavorites = fetchFavorites;
exports.addFavorite = addFavorite;
exports.removeFavorite = removeFavorite;
