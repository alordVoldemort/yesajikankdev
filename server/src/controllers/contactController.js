const { sendContactMails } = require("../services/mailService");

const nameRegex = /^[A-Za-z\u0900-\u097F\s]+$/;
const mobileRegex = /^[6-9][0-9]{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|net)$/;

function validate(body) {
  if (!body.firstName || !nameRegex.test(body.firstName)) return "Invalid first name";
  if (!body.lastName || !nameRegex.test(body.lastName)) return "Invalid last name";
  if (!body.mobile || !mobileRegex.test(body.mobile)) return "Invalid mobile number";
  if (!body.email || !emailRegex.test(body.email)) return "Invalid email";
  if (!body.message || !String(body.message).trim()) return "Message is required";
  return null;
}

async function submitContact(req, res) {
  try {
    const error = validate(req.body || {});
    if (error) {
      return res.status(400).json({ error });
    }

    await sendContactMails(req.body);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact submit error:", err.message);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
}

module.exports = { submitContact };
