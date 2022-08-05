const nodemailer = require("nodemailer");

// Trnsporter is where you have the sender information
const transporter = nodemailer.createTransport({
  service: "hotmail", // if you are using hotmail or outlook
  auth: {
    user: "sender@emailAdress.here",
    pass: "your.password",
  },
});

const options = {
  from: "sender@emailAdress.here",
  to: "receiver@emailAdress.here",
  subject: "Sending email with node", // Write the subject here
  text: "THAT WORKED ! 🥳", // Write your message here
};

transporter.sendMail(options, function (err, info) {
  // if there is an error, log it to the console
  if (err) {
    console.log("Error: " + err);
    return;
  }
  console.log("Sent: " + info.response);
});
