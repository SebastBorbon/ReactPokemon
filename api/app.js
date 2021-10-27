const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routers/auth").router;
const teamRoutes = require("./routers/teams").router;
require("./database");

const app = express();

const port = 3000;

app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   // req es la request, la peticion
//   // res es la respuesta
//   res.status(200).send("Hello World!");
// });
app.use("/auth", authRoutes);
app.use("/teams", teamRoutes);

app.listen(port, () => {
  console.log("server started at port 3000");
});

exports.app = app;
