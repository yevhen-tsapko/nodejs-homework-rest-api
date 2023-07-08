const getAll = require("./getAll");
const getById = require("./getById");
const addCont = require("./addCont");
const updateById = require("./updateById");
const contrsWrapper = require("../../helpers/contrsWrapper");
const removeCont = require("./removeCont");

module.exports = {
  getAll: contrsWrapper(getAll),
  getById: contrsWrapper(getById),
  addCont: contrsWrapper(addCont),
  removeCont: contrsWrapper(removeCont),
  updateById: contrsWrapper(updateById),
};
