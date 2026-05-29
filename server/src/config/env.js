const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: Number(process.env.PORT || 5000),
  FRONTEND_ORIGIN: process.env.FRONTEND_ORIGIN || "http://localhost:3000",
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || "aniket.sangale@zonixtec.com",
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: Number(process.env.SMTP_PORT || 587),
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  SMTP_FROM: process.env.SMTP_FROM,
};
