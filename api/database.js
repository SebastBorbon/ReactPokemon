const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

//I setup the dnfo nedeed to connect with te database on mongo
const url = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.ob3da.mongodb.net/mydatabase?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
