const express = require("express");
const path = require("path");
const routes = require("./routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

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
