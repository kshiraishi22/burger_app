// Dependencies
const router = require("express").Router()
const burgerRoutes = require("./burger")

// burger route
router.use("/burger", burgerRoutes)

module.exports = router;

  