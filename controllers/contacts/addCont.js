const Contact = require("../../models/contacts");

const addCont = async (req, res) => {
  const result = await Contact.create({ ...req.body, owner: req.user.id });
   res.status(201).json(result);
};

module.exports = addCont;
