const nodemailer = require("nodemailer");

// Trnsporter is where you have the sender information
const transporter = nodemailer.createTransport({
  service: "hotmail", // if you are using hotmail or outlook
  auth: {
    user: "YOUR-SENDER-MAIL-ADRESS-HERE",
    pass: "YOUR-PASSWORD",
  },
});

const options = {
  from: "YOUR-SENDER-MAIL-ADRESS-HERE",
  to: "YOUR-RECEIVER-MAIL-ADRESS-HERE",
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
