const Contact = require("../../models/contacts");

const getAll = async (req, res) => {
  const allContacts = await Contact.find({ owner: req.user.id });
  res.status(200).json(allContacts);
};

module.exports = getAll;
