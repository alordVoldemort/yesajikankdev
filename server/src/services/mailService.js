const nodemailer = require("nodemailer");
const {
  ADMIN_EMAIL,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  SMTP_FROM,
} = require("../config/env");

function createTransporter() {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    throw new Error("SMTP configuration is missing in server environment.");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// HTML template: Admin notification
// ─────────────────────────────────────────────────────────────────────────────
function buildAdminHtml({ fullName, mobile, email, lang, message }) {
  const receivedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "long",
    timeStyle: "short",
  });

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="x-apple-disable-message-reformatting"/>
  <title>New Contact Enquiry</title>
  <style type="text/css">
    body { margin:0; padding:0; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
    table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }
    img { border:0; display:block; }
    a { color:#C05621; }

    /* ── Mobile ─────────────────────────────────────────── */
    @media only screen and (max-width:620px) {
      .outer-wrap   { padding:0 !important; }
      .email-card   { width:100% !important; max-width:100% !important; border-radius:0 !important; }
      .header-cell  { padding:24px 18px !important; }
      .header-title { font-size:16px !important; line-height:1.4 !important; }
      .header-sub   { font-size:11px !important; }
      .alert-cell   { padding:12px 18px !important; font-size:13px !important; }
      .body-cell    { padding:22px 18px !important; }
      .section-title{ font-size:15px !important; }
      .detail-row   { display:block !important; width:100% !important; }
      .detail-label { display:block !important; width:100% !important; padding:10px 0 2px !important; border-bottom:none !important; font-size:11px !important; }
      .detail-value { display:block !important; width:100% !important; padding:0 0 10px !important; font-size:13px !important; border-bottom:1px solid #f0e8dc !important; }
      .msg-box      { padding:14px 14px !important; font-size:13px !important; }
      .reply-btn    { padding:12px 20px !important; font-size:13px !important; display:block !important; text-align:center !important; }
      .footer-cell  { padding:18px 18px !important; }
      .footer-text  { font-size:11px !important; }
    }

    /* ── Tablet ─────────────────────────────────────────── */
    @media only screen and (min-width:621px) and (max-width:768px) {
      .email-card  { width:96% !important; }
      .header-cell { padding:28px 30px !important; }
      .body-cell   { padding:28px 30px !important; }
      .footer-cell { padding:18px 30px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f4f1ec;font-family:Georgia,'Times New Roman',serif;">

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ec;">
    <tr>
      <td class="outer-wrap" style="padding:32px 16px;" align="center">

        <!-- Email card -->
        <table role="presentation" class="email-card" cellpadding="0" cellspacing="0"
               style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.10);">

          <!-- ── Header ───────────────────────────────── -->
          <tr>
            <td class="header-cell"
                style="background:linear-gradient(135deg,#7B3F1E 0%,#C05621 100%);padding:32px 40px;text-align:center;">
              <h1 class="header-title"
                  style="margin:0;color:#ffffff;font-size:20px;letter-spacing:1px;font-family:Georgia,serif;line-height:1.3;">
                ॥ सरसेनापती येसाजी कंक ट्रस्ट ॥
              </h1>
              <p class="header-sub"
                 style="margin:8px 0 0;color:#f9d9b8;font-size:13px;letter-spacing:0.5px;">
                Yesaji Kank Trust — Contact Enquiry
              </p>
            </td>
          </tr>

          <!-- ── Alert banner ─────────────────────────── -->
          <tr>
            <td class="alert-cell"
                style="background:#fff8f2;border-left:4px solid #C05621;padding:14px 40px;">
              <p style="margin:0;color:#7B3F1E;font-size:14px;font-weight:bold;word-break:break-word;">
                &#128233;&nbsp; New enquiry received on ${receivedAt} (IST)
              </p>
            </td>
          </tr>

          <!-- ── Body ─────────────────────────────────── -->
          <tr>
            <td class="body-cell" style="padding:32px 40px;">
              <h2 class="section-title"
                  style="margin:0 0 20px;color:#3d2415;font-size:17px;border-bottom:2px solid #e8d5be;padding-bottom:10px;">
                Enquiry Details
              </h2>

              <!-- Details table -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr class="detail-row">
                  <td class="detail-label"
                      style="padding:10px 12px 10px 0;border-bottom:1px solid #f0e8dc;width:130px;min-width:90px;color:#888888;font-size:12px;vertical-align:top;white-space:nowrap;">
                    Full Name
                  </td>
                  <td class="detail-value"
                      style="padding:10px 0;border-bottom:1px solid #f0e8dc;color:#2d1b0d;font-size:14px;font-weight:bold;word-break:break-word;">
                    ${fullName}
                  </td>
                </tr>
                <tr class="detail-row">
                  <td class="detail-label"
                      style="padding:10px 12px 10px 0;border-bottom:1px solid #f0e8dc;color:#888888;font-size:12px;vertical-align:top;white-space:nowrap;">
                    Mobile
                  </td>
                  <td class="detail-value"
                      style="padding:10px 0;border-bottom:1px solid #f0e8dc;color:#2d1b0d;font-size:14px;word-break:break-all;">
                    ${mobile}
                  </td>
                </tr>
                <tr class="detail-row">
                  <td class="detail-label"
                      style="padding:10px 12px 10px 0;border-bottom:1px solid #f0e8dc;color:#888888;font-size:12px;vertical-align:top;white-space:nowrap;">
                    Email
                  </td>
                  <td class="detail-value"
                      style="padding:10px 0;border-bottom:1px solid #f0e8dc;font-size:14px;word-break:break-all;">
                    <a href="mailto:${email}" style="color:#C05621;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr class="detail-row">
                  <td class="detail-label"
                      style="padding:10px 12px 10px 0;border-bottom:1px solid #f0e8dc;color:#888888;font-size:12px;vertical-align:top;white-space:nowrap;">
                    Language
                  </td>
                  <td class="detail-value"
                      style="padding:10px 0;border-bottom:1px solid #f0e8dc;color:#2d1b0d;font-size:14px;">
                    ${lang === "mr" ? "Marathi (मराठी)" : "English"}
                  </td>
                </tr>
              </table>

              <!-- Message box -->
              <h3 style="margin:24px 0 10px;color:#3d2415;font-size:14px;">Message</h3>
              <div class="msg-box"
                   style="background:#fdf6ee;border:1px solid #e8d5be;border-radius:8px;padding:16px 20px;color:#3d2415;font-size:14px;line-height:1.7;white-space:pre-wrap;word-break:break-word;overflow-wrap:anywhere;">
                ${message}
              </div>

              <!-- Reply button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a class="reply-btn"
                       href="mailto:${email}?subject=Re:%20Your%20enquiry%20-%20Yesaji%20Kank%20Trust"
                       style="display:inline-block;background:#C05621;color:#ffffff;padding:13px 32px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:bold;letter-spacing:0.5px;mso-padding-alt:0;text-align:center;">
                      Reply to ${fullName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── Footer ────────────────────────────────── -->
          <tr>
            <td class="footer-cell" style="background:#3d2415;padding:20px 40px;text-align:center;">
              <p class="footer-text" style="margin:0;color:#c9a882;font-size:12px;word-break:break-word;">
                Yesaji Kank Trust &nbsp;&#183;&nbsp; Kank Wada, Bhutonde, Bhor, Pune
              </p>
              <p class="footer-text" style="margin:6px 0 0;color:#8a6a4a;font-size:11px;">
                This is an automated notification from your website contact form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// HTML template: User auto-reply
// ─────────────────────────────────────────────────────────────────────────────
function buildUserHtml({ fullName, lang }) {
  const isMr = lang === "mr";

  const heading   = isMr ? "आपली चौकशी प्राप्त झाली!" : "We've received your enquiry!";
  const greeting  = isMr ? `नमस्कार ${fullName},` : `Hello ${fullName},`;
  const line1     = isMr
    ? "आपल्या चौकशीबद्दल मनापासून धन्यवाद. आम्हाला आपला संदेश प्राप्त झाला आहे."
    : "Thank you for reaching out to us. We have successfully received your message.";
  const line2     = isMr
    ? "आमची टीम लवकरच आपल्याशी संपर्क साधेल."
    : "Our team will review your enquiry and get back to you as soon as possible.";
  const closingLabel = isMr ? "विश्वासू," : "Warm regards,";
  const trustName    = isMr ? "येसाजी कंक ट्रस्ट" : "Yesaji Kank Trust";
  const tagline      = isMr
    ? "॥ हिंदवी स्वराज्याचे सरनोबत येसाजी कंक ॥"
    : "॥ Sarnobat Yesaji Kank — Hindavi Swarajya ॥";

  return `<!DOCTYPE html>
<html lang="${isMr ? "mr" : "en"}" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="x-apple-disable-message-reformatting"/>
  <title>${heading}</title>
  <style type="text/css">
    body { margin:0; padding:0; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
    table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }
    img   { border:0; display:block; }
    a     { color:#C05621; }

    /* ── Mobile ──────────────────────────────────────────── */
    @media only screen and (max-width:620px) {
      .outer-wrap    { padding:0 !important; }
      .email-card    { width:100% !important; max-width:100% !important; border-radius:0 !important; }
      .header-cell   { padding:24px 18px !important; }
      .header-title  { font-size:16px !important; line-height:1.4 !important; }
      .header-sub    { font-size:11px !important; }
      .banner-cell   { padding:18px 18px !important; }
      .banner-heading{ font-size:14px !important; }
      .body-cell     { padding:22px 18px !important; font-size:14px !important; line-height:1.7 !important; }
      .next-box      { padding:14px 14px !important; }
      .next-title    { font-size:12px !important; }
      .next-list     { font-size:12px !important; }
      .contact-bar   { padding:14px 18px !important; }
      .contact-line  { font-size:11px !important; line-height:2 !important; display:block !important; }
      .footer-cell   { padding:18px 18px !important; }
      .footer-text   { font-size:11px !important; }
    }

    /* ── Tablet ──────────────────────────────────────────── */
    @media only screen and (min-width:621px) and (max-width:768px) {
      .email-card  { width:96% !important; }
      .header-cell { padding:28px 30px !important; }
      .body-cell   { padding:28px 30px !important; }
      .footer-cell { padding:18px 30px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f4f1ec;font-family:Georgia,'Times New Roman',serif;">

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ec;">
    <tr>
      <td class="outer-wrap" style="padding:32px 16px;" align="center">

        <!-- Email card -->
        <table role="presentation" class="email-card" cellpadding="0" cellspacing="0"
               style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.10);">

          <!-- ── Header ───────────────────────────────── -->
          <tr>
            <td class="header-cell"
                style="background:linear-gradient(135deg,#7B3F1E 0%,#C05621 100%);padding:36px 40px;text-align:center;">
              <h1 class="header-title"
                  style="margin:0;color:#ffffff;font-size:20px;letter-spacing:1px;font-family:Georgia,serif;line-height:1.3;">
                ॥ सरसेनापती येसाजी कंक ट्रस्ट ॥
              </h1>
              <p class="header-sub" style="margin:8px 0 0;color:#f9d9b8;font-size:13px;word-break:break-word;">
                ${tagline}
              </p>
            </td>
          </tr>

          <!-- ── Checkmark banner ─────────────────────── -->
          <tr>
            <td class="banner-cell"
                style="background:#fff8f2;padding:22px 40px;text-align:center;border-bottom:1px solid #f0e8dc;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="background:#C05621;color:#ffffff;border-radius:50%;width:46px;height:46px;text-align:center;vertical-align:middle;font-size:22px;line-height:46px;">
                    &#10003;
                  </td>
                </tr>
              </table>
              <p class="banner-heading"
                 style="margin:12px 0 0;color:#7B3F1E;font-size:16px;font-weight:bold;word-break:break-word;">
                ${heading}
              </p>
            </td>
          </tr>

          <!-- ── Body ─────────────────────────────────── -->
          <tr>
            <td class="body-cell"
                style="padding:32px 40px;color:#3d2415;font-size:15px;line-height:1.8;">
              <p style="margin:0 0 16px;word-break:break-word;">${greeting}</p>
              <p style="margin:0 0 12px;word-break:break-word;">${line1}</p>
              <p style="margin:0 0 24px;word-break:break-word;">${line2}</p>

              <!-- What happens next -->
              <div class="next-box"
                   style="background:#fdf6ee;border-left:4px solid #C05621;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:28px;">
                <p class="next-title"
                   style="margin:0 0 8px;color:#7B3F1E;font-weight:bold;font-size:13px;">
                  ${isMr ? "पुढे काय होईल?" : "What happens next?"}
                </p>
                <ul class="next-list"
                    style="margin:0;padding-left:18px;color:#3d2415;font-size:13px;line-height:2.1;">
                  <li>${isMr ? "आमची टीम आपली माहिती तपासेल." : "Our team will review your message."}</li>
                  <li>${isMr ? "आम्ही लवकरात लवकर आपल्याशी संपर्क साधू." : "We will reach out to you at the earliest."}</li>
                  <li>${isMr ? "त्वरित मदतीसाठी आम्हाला कॉल करा." : "For urgent queries, feel free to call us directly."}</li>
                </ul>
              </div>

              <p style="margin:0 0 4px;word-break:break-word;">${closingLabel}</p>
              <p style="margin:0;font-weight:bold;color:#7B3F1E;font-size:16px;">${trustName}</p>
            </td>
          </tr>

          <!-- ── Contact bar ───────────────────────────── -->
          <tr>
            <td class="contact-bar"
                style="background:#fdf6ee;padding:16px 40px;border-top:1px solid #f0e8dc;text-align:center;">
              <span class="contact-line" style="color:#666666;font-size:12px;">
                &#128222; +91 1234567890
              </span>
              <span style="color:#ccbbaa;font-size:12px;">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <span class="contact-line" style="color:#666666;font-size:12px;">
                &#128140; info@yesajikanktrust.org
              </span>
              <span style="color:#ccbbaa;font-size:12px;">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <span class="contact-line" style="color:#666666;font-size:12px;">
                &#128205; Kank Wada, Bhutonde, Bhor, Pune
              </span>
            </td>
          </tr>

          <!-- ── Footer ────────────────────────────────── -->
          <tr>
            <td class="footer-cell" style="background:#3d2415;padding:20px 40px;text-align:center;">
              <p class="footer-text" style="margin:0;color:#c9a882;font-size:12px;">
                &copy; 2026 Yesaji Kank Trust. All rights reserved.
              </p>
              <p class="footer-text" style="margin:6px 0 0;color:#8a6a4a;font-size:11px;">
                This is an automated reply. Please do not reply directly to this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

// ─────────────────────────────────────────────────────────────────────────────
async function sendContactMails(payload) {
  const transporter = createTransporter();
  const lang = payload.lang === "mr" ? "mr" : "en";
  const fullName = `${payload.firstName} ${payload.lastName}`.trim();

  // ── Email to admin ────────────────────────────────────────────
  await transporter.sendMail({
    from: SMTP_FROM,
    to: ADMIN_EMAIL,
    replyTo: payload.email,
    subject: `New Contact Enquiry - ${fullName}`,
    html: buildAdminHtml({
      fullName,
      mobile: payload.mobile,
      email: payload.email,
      lang,
      message: payload.message,
    }),
    text: `New enquiry from ${fullName}\nMobile: ${payload.mobile}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`,
  });

  // ── Auto-reply to user ────────────────────────────────────────
  const userSubject =
    lang === "mr" ? "आपल्या चौकशीबद्दल धन्यवाद | Yesaji Kank Trust" : "Thank you for your enquiry | Yesaji Kank Trust";

  await transporter.sendMail({
    from: SMTP_FROM,
    to: payload.email,
    subject: userSubject,
    html: buildUserHtml({ fullName, lang }),
    text:
      lang === "mr"
        ? `नमस्कार ${fullName},\n\nआपल्या चौकशीबद्दल धन्यवाद. आम्हाला आपला संदेश प्राप्त झाला आहे. आमची टीम लवकरच आपल्याशी संपर्क साधेल.\n\nधन्यवाद,\nYesaji Kank Trust`
        : `Hello ${fullName},\n\nThank you for your enquiry. We have received your message and our team will get in touch with you soon.\n\nRegards,\nYesaji Kank Trust`,
  });
}

module.exports = { sendContactMails };
