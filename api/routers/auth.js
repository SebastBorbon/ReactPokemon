const express = require("express");
const {
  checkUserCredentials,
  registerUser,
  getUserIdFromUserName,
} = require("../controllers/users");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.route("/").get((req, res) => {
  res.send("estas en auth");
});
router.route("/login").get((req, res) => {
  res.send("estas en el login");
});
router.route("/login").post(async (req, res) => {
  //comprobations if user exists

  if (!req.body) {
    //entra el usuario completo
    return res.status(400).json({ message: "missing data" });
  } else if (!req.body.user || !req.body.password) {
    return res.status(400).json({ message: "Falta contra" });
  }
  //comprobar credenciales
  await registerUser(req.body.user, req.body.password);
  res.send("todobien");
  // checkUserCredentials(req.body.user, req.body.password, (err, response) => {
  //   if (err || !res) {
  //     return res.status(401).json({ message: "Invalid credentials" });
  //   }
  //   //si son validas generar un JWT
  //   let user = getUserIdFromUserName(req.body.user);
  //   const token = jwt.sign({ userID: user }, "secret");
  //   res.json({
  //     token: token,
  //   });
  // });
});

exports.router = router;
