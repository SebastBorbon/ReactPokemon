const bcrypt = require("bcrypt");

const hashPassword = async (plainTextPwd, done) => {
  await bcrypt.hash(plainTextPwd, 10, done);
};

const comparePassword = async (plainPassword, hashPassword, done) => {
  await bcrypt.compare(plainPassword, hashPassword, done);
};

const hashPasswordSync = (plainTextPwd) => {
  return bcrypt.hashSync(plainTextPwd, 10);
};

module.exports = {
  hashPassword,
  comparePassword,
  hashPasswordSync,
};
