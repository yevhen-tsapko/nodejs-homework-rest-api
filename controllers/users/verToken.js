const User = require("../../models/users");
const verToken = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    return res.status(404).json({ message: "Not found" });
  }
  if (user.verify) {
    return res.status(404).json({ message: "You are verificated alredy" });
  }
  await User.findOneAndUpdate(
    { verificationToken },
    {
      // verificationToken: null,
      verify: true,
    }
  );
  return res.status(200).json({ message: "Verification successful" });
};
module.exports = verToken;
