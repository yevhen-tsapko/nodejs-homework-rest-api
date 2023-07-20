const handleMongooseError = require("../helpers/handleMongooseError");
const { Schema, model, default: mongoose } = require("mongoose");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);
const Contact = model("contact", contactSchema);

contactSchema.post("save", handleMongooseError);
module.exports = Contact;
