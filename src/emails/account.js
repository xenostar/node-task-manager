const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "bryan.a.leewood@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendDeleteEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "bryan.a.leewood@gmail.com",
    subject: "Thanks for trying out the Task Manager App",
    text: `Sorry to see you go, ${name}. If there is anything we could have done to make your experience better, please let us know.`,
  });
};

module.exports = { sendWelcomeEmail, sendDeleteEmail };
