const Contact = require("../../models/contacts");
const HttpError = require("../../helpers/HttpError");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const findedContact = await Contact.findById(contactId);
  if (!findedContact) {
    throw HttpError(404, "Not found");
  }
  res.json(findedContact);
};

module.exports = getById;
