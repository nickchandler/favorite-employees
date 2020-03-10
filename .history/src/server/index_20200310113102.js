const express = require("express");

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`application server is now up and running at port ${PORT}!`);
});
