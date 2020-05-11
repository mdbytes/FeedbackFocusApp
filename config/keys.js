// keys.js -- figure out which credentials to return

if (process.env.NODE_ENV === "production") {
  // Return production keys
  moduele.exports = require("./prod");
} else {
  // return development keys
  moduele.exports = require("./dev");
}
