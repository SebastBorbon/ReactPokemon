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
  //comprobations if user exists
  if (!req.body) {
    return res.status(400).json({ message: "missing data" });
  } else if (!email || !password) {
    return res.status(400).json({ message: "missing data" });
  }
  await registerUser(email, password);
  let userReturned = await getUserIdFromEmail(email);
  return res.send(userReturned);
});

router.route("/login").post(async (req, res) => {
  const { email, password } = req.body;
  //comprobations if user exists
  if (!req.body) {
    return res.status(400).json({ message: "missing data" });
  } else if (!email || !password) {
    return res.status(400).json({ message: "Falta contra" });
  }
  //comprobar credenciales

  let user = await checkUserCredentials(email, password);
  //si all the user data is correct, we send back the user
  return res.send(user);
  // const token = jwt.sign({ userID: user }, "secret", { expiresIn: "1d" });
  // return res.send(token);
});

exports.router = router;
