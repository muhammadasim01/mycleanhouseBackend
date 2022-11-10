const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (email, res, text, subject) => {
  const msg = {
    to: email,
    from: "muhammadasim4515@gmail.com", // Use the email address or domain you verified above
    cc: "muhammadasim4515@gmail.com",
    subject: subject,
    text: text,
    html: `<strong>${text}</strong>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      res.send("sent");
    })
    .catch((error) => {
      console.log("error", error);
      res.send(error);
    });
};
module.exports = sendEmail;
