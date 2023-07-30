const User = require("../../models/users");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const sendVerificationMail = require("../../helpers/sendVerificationMail");
const { v4: uuidv4 } = require("uuid");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user !== null) {
    res.status(409).json({ message: "Email in use" });
  }
  const avatarURL = gravatar.url(email, { s: "100", r: "x", d: "retro" });
  const passwordHash = await bcrypt.hash(password, 10);
  const verificationToken = uuidv4();

  await sendVerificationMail(verificationToken, email);
  const newUser = await User.create({
    email,
    password: passwordHash,
    avatarURL,
    verificationToken,
  });
  const { subscription } = newUser;
  res.status(201).json({ user: { subscription, email } });
};

module.exports = register;
