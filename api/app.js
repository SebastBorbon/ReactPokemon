const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routers/auth").router;
const teamRoutes = require("./routers/teams").router;
const cors = require("cors");

require("./database");

const app = express();

const port = 3000;
app.use(bodyParser.json());
// app.get("/", (req, res) => {
//   // req es la request, la peticion
//   // res es la respuesta
//   res.status(200).send("Hello World!");
// });
app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "authorization",
    ],
  })
);
app.use("/auth", authRoutes);
app.use("/teams", teamRoutes);

app.listen(port, () => {
  console.log("server started at port 3000");
});

exports.app = app;
