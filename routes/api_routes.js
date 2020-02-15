// const db = require("../models");
// const mysql = require("mysql");

const Burger = require("../models/burger.js")
// module.exports = function(app) {

//   app.get("/api/burgers", function(req, res) {
//     db.burgers.findAll({}).then(function(data) {
//       res.json(data)
//       console.log(data)
//     });
//   });

//   app.post("/api/burgers", function(req, res) {
//     db.burgers.create({
//       burger_name: req.body.burger_name,
//       devoured: req.body.devoured
//     }).then(function(response) {
//       res.json(response)
//     });
//   });

//   app.delete("/api/burgers/:id", function(req, res) {
//     db.burgers.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(response) {
//       res.json(response)
//     })
//   });
// };

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

  // // Use Handlebars to render the main index.html page with the plans in it.

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
  //   connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
  //     if (err) {
  //       return res.status(500).end();
  //     }

  //     // Send back the ID of the new burger
  //     res.json({ id: result.insertId });
  //     console.log({ id: result.insertId });
  //   });
  // });

  // // Devour (Delete) a burger
  // app.delete("/api/burgers/:id", function(req, res) {
  //   connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
  //     if (err) {
  //       // If an error occurred, send a generic server failure
  //       return res.status(500).end();
  //     }
  //     else if (result.affectedRows === 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     }
  //     res.status(200).end();

  //   });
  // });
// };