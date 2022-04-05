const router = require("express").Router()
// import middleware where auth is required to access protected routes

router.use("/auth", require("./authRoute"))

module.exports = router; 