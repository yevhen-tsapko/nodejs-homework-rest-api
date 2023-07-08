const { validateBody } = require("../../middlewares");
const schema = require("../../schemas/addContSchema");
const Contact = require("../../models/contacts");
const HttpError = require("../../helpers/HttpError");

const updateById = async (req, res) => {
  validateBody(schema);

  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateById;
