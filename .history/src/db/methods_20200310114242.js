const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/fav_employee", { useNewUrlParser: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("we are connected to MongoDB");
});
