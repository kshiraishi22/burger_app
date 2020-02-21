// Dependencies
const router = require("express").Router()
const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./htmlRoutes");

// Routes
router.use("/api", apiRoutes)
router.use(htmlRoutes)

module.exports = router;
