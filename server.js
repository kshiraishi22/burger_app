// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8000;

// Requiring our models for syncing
// var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api_routes.js")(app);

// Create connection with localhost
// let connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);
// });

// Use Handlebars to render the main index.html page with the plans in it.

// app.get("/", function(req, res) {
//   connection.query("SELECT * FROM burgers;", function(err, data) {
//     if (err) {
//       return res.status(500).end();
//     }

//     res.render("index", { burgers: data });
//   });
// });

// // Create a new burger
// app.post("/api/burgers", function(req, res) {
//   console.log(req.body.burger_name);
//   connection.query('INSERT INTO burgers (burger_name) VALUES ?', ["Test123"], function(err, result) {
//     if (err) {
//       console.log(err);
//       return res.status(500).end();
//     }
//     console.log("****");
//     console.log(result)
//     // Send back the ID of the new burger
//     console.log({ id: result.insertId });
//     res.json({ id: result.insertId });
//     // res.redirect("index");
//   });
// });

// Starting our Express app
// db.sequelize.sync({ force: true }).then(function(){
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
// });

// Figure out how delete can allow for the text to move over to the other side.