const db = require("../models");

module.exports = function(app) {
  // Get all burgers
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
      console.log(data)
      res.json(data);
  });
})


  // Add a burger
  app.post("/api/add", function(req, res) {
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(data) {
      res.json(data);
    });
  });
};
  