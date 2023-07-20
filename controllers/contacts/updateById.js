const Contact = require("../../models/contacts");
const HttpError = require("../../helpers/HttpError");
const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findOneAndUpdate(
    {
      _id: contactId,
      owner: req.user.id,
    },
    req.body,
    {
      new: true,
    }
  );
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateById;
