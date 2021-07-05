const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const UserService = require("../services/userSerivce");
const UserInstance = new UserController(new UserService());

/* GET home page. */
router.get("/", function (req, res, next) {
  UserInstance.getUsers(req, res);
});

//Add new user
router.post("/add", (req, res) => {
  UserInstance.addUser(req, res);
});
//Delete user
router.delete("/delete/:id", (req, res) => {
  UserInstance.deleteUser(req, res);
});

module.exports = router;
