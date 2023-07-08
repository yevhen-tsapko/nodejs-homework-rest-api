const { validateBody } = require("../../middlewares");
const schema = require("../../schemas/addContSchema");
const Contact = require("../../models/contacts");

const addCont = async (req, res) => {
  validateBody(schema);
  const result = await Contact.create(req.body);
  console.log(result);
  res.status(201).json(result);
};

module.exports = addCont;
