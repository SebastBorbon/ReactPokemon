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
  try {
    let userRegister = await registerUser(email, password);
    if (!userRegister) {
      let userReturned = await getUserIdFromEmail(email);
      return res.send(userReturned);
    } else {
      res.status(404).send({ message: "user already exists" });
    }
  } catch (err) {
    res.status(404).send({ message: "connecting to DB" });
  }
});

router.route("/login").post(async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await checkUserCredentials(email, password);
    //if all the user data is correct, we send back the user
    if (user) {
      return res.send(user);
    } else {
      res.status(400).send({ message: "incorrect Password" });
    }
  } catch (err) {
    res.status(404).send({ message: "connecting to DB" });
  }
});

exports.router = router;
