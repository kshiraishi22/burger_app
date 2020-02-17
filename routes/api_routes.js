let db = require("../models");

module.exports = function(app) {
  // Get all burgers
  app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(results) {
      console.log(results)
      res.json(results)
  });
})

  // Add a burger
  app.post("/api/new", function(req, res) {
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
      created_at: req.body.created_at
    }).then(function(results) {
      console.log("test");
      res.end();
    });
  });

};
  

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






