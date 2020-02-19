// const db = require("../models");

const Burger = require("../models/burger.js")
module.exports = function(app) {
  // Get all burgers
  app.get("/api/all", function(req, res) {
    Burger.findAll({}).then(function(results) {
      console.log(results)
      res.json(results)
  });
})

  // Add a burger
  app.post("/api/new", function(req, res) {
    console.log(req.body);
    Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
      created_at: req.body.created_at,
    }).then(function(results) {
      res.end();
    });
  });

};
  