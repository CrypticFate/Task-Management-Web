const nodemailer = require('nodemailer');

const sendVerificationEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Task Manager" <noreply@taskmanager.com>',
    to: email,
    subject: 'Email Verification',
    html: `Click <a href="${process.env.CLIENT_URL}/verify-email/${token}">here</a> to verify your email.`,
  });
};