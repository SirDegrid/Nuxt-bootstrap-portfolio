const nodemailer = require("nodemailer");

const { MAIL_HOST, MAIL_PORT, MAIL_PROVIDER, MAIL_USERNAME, MAIL_PASSWORD, MAIL_TO } = require('../config');
console.log(MAIL_HOST);

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  auth: {
    user: MAIL_USERNAME,
    pass: MAIL_PASSWORD,
  },
});

class ContactController {
  constructor(request, response) {
    this.request = request;
    this.response = response;
  }

  sendContactForm() {
    console.log(this.request.body);

    const { name, email, subject, message, mailCopy } = this.request.body;

    const mailOptions = {
      from: MAIL_USERNAME,
      to: ['maggie.rose.cameron@gmail.com'],
      subject: `Message from ${name}: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    if (mailCopy) {
      mailOptions.to.push(email);
    }

    transporter
      .sendMail(mailOptions)
      .then(() => {
        return this.response.status(200).json({ msg: "Email sent successfully" });
      })
      .catch((error) => {
        console.log(error);
        return this.response.status(400).json({ errors: [{ msg: `Something went wrong: ${error}` }] });
      });
  }
}

module.exports = { ContactController };
