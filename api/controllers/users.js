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
  //save in the database
  try {
    let hashedPwd = await bcrypt.hash(password, 10);
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
  try {
    const findedUser = await UserModel.findOne({ userId: userId });
    return findedUser;
  } catch (err) {
    console.log("no tengo usuario");
  }
};

const getUserIdFromEmail = async (email) => {
  try {
    let userByName = await UserModel.findOne({ userName: email });
    if (!userByName) {
      console.log("usuario incorrecto");
    } else {
      return userByName;
    }
  } catch {
    console.log("no se pudo conectar a la BD");
  }
};

const checkUserCredentials = async (email, password) => {
  try {
    let user = await getUserIdFromEmail(email);
    if (user) {
      let userPassword = await bcrypt.compare(password, user.password);
      if (userPassword) {
        console.log("usuario encontrado", user);
        return user;
      } else {
        console.log("contrasena erronea");
      }
    }
  } catch {
    console.log("usuario no valido");
  }
};

module.exports = {
  checkUserCredentials,
  registerUser,
  getUserIdFromEmail,
  getUser,
};
