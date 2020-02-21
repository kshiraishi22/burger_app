const router = require("express").Router()
const burgerRoutes = require("./burger")

router.use("/burger", burgerRoutes)

module.exports = router;


  