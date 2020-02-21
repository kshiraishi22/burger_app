const router = require("express").Router()
const homeRoutes = require("./home")

router.use("/home", homeRoutes)
router.get("*", function(req, res) {
  res.redirect("/home")

});

module.exports = router;