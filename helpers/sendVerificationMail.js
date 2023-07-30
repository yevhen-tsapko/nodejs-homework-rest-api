const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendVerificationMail = (verificationToken, email) => {
  const msg = {
    to: email,
    from: "evgentsa@gmail.com",
    subject: "Registration confirmation",
    text: `Follow the link http://localhost:3000/api/auth/verify/${verificationToken}`,
    html: `<a href="http://localhost:3000/api/auth/verify/${verificationToken}"> Confirm registration </a>`,
  };
  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      // console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
};
module.exports = sendVerificationMail;
