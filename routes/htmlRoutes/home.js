const router = require("express").Router()
const db = require("../../models");

router.get("/", function (req, res) {
  db.Burger.findAll({
    raw: true
  })
  .then(function (burgers) {
    res.render("index", {
      title: "Eat-Da-Burger!",
      burgers
    })
  })
})

module.exports = router;