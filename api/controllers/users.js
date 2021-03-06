const { v4: uuidv4 } = require("uuid");
const { newUserTeam } = require("./teams");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserModel = mongoose.model("UserModel", {
  userName: String,
  password: String,
  userId: String,
});

const registerUser = async (userName, password) => {
  //save in the database  in mongoDB created with mongoose and using mongoose library to update
  //the password is hashed with bcrypt to prevalize safety
  //uuidv4 helps to never repeat a ID
  try {
    let user = await UserModel.findOne({ userName: userName });
    if (user) {
      return true;
    } else {
      let hashedPwd = await bcrypt.hash(password, 10);
      let userId = uuidv4();
      let newUser = new UserModel({
        userId: userId,
        userName: userName,
        password: hashedPwd,
      });
      await newUser.save();
      await newUserTeam(userId);
    }
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (userId) => {
  try {
    const findedUser = await UserModel.findOne({ userId: userId });
    console.log(findedUser);
    return findedUser;
  } catch (err) {
    console.log(err);
  }
};

const getUserIdFromEmail = async (email) => {
  try {
    let userByName = await UserModel.findOne({ userName: email });
    if (!userByName) {
      res.status(404).send({ message: "incorrect username" });
    } else {
      return userByName;
    }
  } catch {}
};

const checkUserCredentials = async (email, password) => {
  //check user and compare the password with the hashed one saved in the DB
  try {
    let user = await getUserIdFromEmail(email);
    if (user) {
      let userPassword = await bcrypt.compare(password, user.password);
      if (userPassword) {
        return user;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  checkUserCredentials,
  registerUser,
  getUserIdFromEmail,
  getUser,
};
