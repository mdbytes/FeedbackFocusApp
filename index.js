// important syntax for server side 'require'
const express = require("express");

// Generate a running express server app
const app = express();

/***
Creates a new route handler for root '/' path using get method (request and
response)
***/
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
// in development go to localhost: 5000
