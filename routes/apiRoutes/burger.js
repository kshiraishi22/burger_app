const router = require("express").Router()
const db = require("../../models");

router.post("/", function (req, res) {
  db.Burger.create(req.body)
    .then(function (dbdata) {
      res.redirect("/home")
    });
});

router.get('/:id/:devoured', function (req, res) {
  db.Burger.update({
    devoured: req.params.devoured
  }, {
    where: {
      id: req.params.id
    }
  }).then(function (dbdata) {
    res.redirect("/home")
  })
})

module.exports = router;