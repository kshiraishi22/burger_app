const db = require("../models");

module.exports = function(app) {

  app.get("/api/burgers", function(req, res) {
    db.burgers.findAll({}).then(function(data) {
      res.json(data)
      console.log(data)
    });
  });

  app.post("/api/burgers", function(req, res) {
    db.burgers.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(response) {
      res.json(response)
    });
  });

  app.delete("/api/burgers/:id", function(req, res) {
    db.burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(response) {
      res.json(response)
    })
  });
};