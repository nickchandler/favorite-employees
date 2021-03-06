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

const Employee = mongoose.model("Employee", employeeSchema);

const insertMany = function(array) {
  Employee.insertMany(array);
};

const deleteDocument = function(req, res) {
  Employee.findByIdAndRemove(id);
};

const fetchAllEmployees = async function(req, res) {
  let employees = await Employee.find({});
  res.send(employees);
};

const fetchEmployee = async function(req, res) {
  let employee = await Employee.find({req.id});
  res.send(employee);
};

exports.insertMany = insertMany;
exports.deleteDocument = deleteDocument;
exports.fetchAllEmployees = fetchAllEmployees;
exports.fetchEmployee = fetchEmployee;