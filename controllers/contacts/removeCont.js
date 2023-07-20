const Contact = require("../../models/contacts");
const HttpError = require("../../helpers/HttpError");

const removeCont = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findOneAndRemove({
    _id: contactId,
    owner: req.user.id,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "contact deleted" });
};
module.exports = removeCont;
