const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const flash = require('express-flash-messages')
const mongoose = require("mongoose");
const session = require("express-session");
// const passport = require('passport')
// , LocalStrategy = require('passport-local').Strategy;
const app = express();
const passport = require("./passport/passport");
const PORT = process.env.PORT || 3002;

// // Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets

// app.use(express.static("client/build"));


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and views

app.use(cookieParser());
app.use(flash())
// app.use(expressValidator(middlewareOptions));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
cookie: {
  expires: 6000 *1000,
  httpOnly: false
}
}));

mongoose.Promise = Promise;
//change this to your own mongo collection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/fashiondb");

// Init passport authentication 
app.use(passport.initialize());
// persistent login sessions 
app.use(passport.session());

// enable CORS so that browsers don't block requests.
app.use((req, res, next) => {
  //access-control-allow-origin http://localhost:3000
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); 
  next();
});

// Define API routes here
app.use(routes);
// Send every other request to the React app

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
