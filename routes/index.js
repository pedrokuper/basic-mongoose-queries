const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const UserService = require("../services/userSerivce");
const UserInstance = new UserController(new UserService());

//!Controllers

/* GET home page. */
router.get("/", function (req, res, next) {
  UserInstance.getUsers(req, res);
});

router.post("/add", (req, res) => {
  UserInstance.addUser(req, res);
});

router.delete("/delete/:id", (req, res) => {
  UserInstance.deleteUser(req, res);
});

module.exports = router;
