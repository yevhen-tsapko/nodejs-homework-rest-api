const Joi = require("joi");

const toggleFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});
module.exports = toggleFavoriteSchema;
