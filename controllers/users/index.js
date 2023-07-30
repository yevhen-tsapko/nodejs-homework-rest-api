const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getUser = require("./getUser");
const uploadAvatar = require("./uploadAvatar");
const verToken = require("./verToken");
const secondVerification = require("./secondVerification");
const contrsWrapper = require("../../helpers/contrsWrapper");

module.exports = {
  register: contrsWrapper(register),
  login: contrsWrapper(login),
  logout: contrsWrapper(logout),
  getUser: contrsWrapper(getUser),
  uploadAvatar: contrsWrapper(uploadAvatar),
  verToken: contrsWrapper(verToken),
  secondVerification: contrsWrapper(secondVerification),
};
