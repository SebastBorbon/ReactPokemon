const express = require("express");
const {
  checkUserCredentials,
  registerUser,
  getUserIdFromEmail,
} = require("../controllers/users");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.route("/signup").post(async (req, res) => {
  const { email, password } = req.body;
  let userRegister = await registerUser(email, password);
  if (!userRegister) {
    let userReturned = await getUserIdFromEmail(email);
    return res.send(userReturned);
  } else {
    res.send("user already exists");
  }
});

router.route("/login").post(async (req, res) => {
  const { email, password } = req.body;
  let user = await checkUserCredentials(email, password);
  //si all the user data is correct, we send back the user
  return res.send(user);
});

exports.router = router;
