const express = require("express");
const router = express.Router();
const { signup, login, getLoggedInUsers } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/logged-in-users", getLoggedInUsers); 
module.exports = router;
