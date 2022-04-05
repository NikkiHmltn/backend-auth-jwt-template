const router = require('express').Router();
const {auth} = require("../controllers")

// Login Auth Route
router.post('/login', auth.login)
// Register User Auth Route
router.post('/register', auth.register)

module.exports = router;