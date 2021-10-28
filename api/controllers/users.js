const { v4: uuidv4 } = require("uuid");
const { comparePassword, hashPasswordSync } = require("../crypto");
const { newUserTeam } = require("./teams");
const mongoose = require("mongoose");
const userDatabase = {};

const UserModel = mongoose.model("UserModel", {
  userName: String,
  password: String,
  userId: String,
});

const registerUser = async (userName, password) => {
  //save in the database
  try {
    let hashedPwd = hashPasswordSync(password);
    let userId = uuidv4();
    let newUser = new UserModel({
      userId: userId,
      userName: userName,
      password: hashedPwd,
    });
    await newUser.save().then(() => console.log("hecho rey"));
    await newUserTeam(userId);
  } catch {
    console.log("MALARDA");
  }
};

const getUser = async (userId) => {
  return await UserModel.findById(userId);
};

const getUserIdFromUserName = async (userName) => {
  let userByName = await UserModel.findOne({ userName: userName });
  if (userByName) return userByName;
};

const checkUserCredentials = (userName, password) => {
  //comprueba si las credenciales son correctas
  let user = getUserIdFromUserName(userName);
  if (user) {
    console.log(user);
    comparePassword(password, user.password);
  } else {
    console.log("Missing user");
  }
};

module.exports = {
  checkUserCredentials,
  registerUser,
  getUserIdFromUserName,
  getUser,
};
