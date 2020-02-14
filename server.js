// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api_routes.js")(app);

// Starting our Express app
db.sequelize.sync({ force: true }).then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});