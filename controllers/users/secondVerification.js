const User = require("../../models/users");
const sendVerificationMail = require("../../helpers/sendVerificationMail");
const secondVerification = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "missing required field email" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (user.verify) {
    return res
      .status(400)
      .json({ message: "Verification has already been passed" });
  }
  await sendVerificationMail(user.verificationToken, email);
  return res.status(202).json({ message: "Verification email sent" });
};
module.exports = secondVerification;
