const express = require("express");
var session = require("express-session");
const path = require("path");
const routes = require("./routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
//require passport
var passport = require("./passport/passport.js");

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//connection to mongo DB 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fashiondb");


// Define API routes here
app.use(routes);
// Send every other request to the React app

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
