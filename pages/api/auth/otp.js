import axios from 'axios';
import fs from 'fs';
import totp from 'totp-generator';
import path from 'path';
import { OTP_PATH } from 'configs/otp-path';

const OTP_EXPIRATION = 60;

export default async (req, res) => {
  try {
    switch (req.method) {
      case 'POST': {
        const otp = generateOTP();
        await axios.post(process.env.MAILER_URL, {
          to: process.env.AUTHENTICATION_EMAIL,
          subject: `Reaper.im OTP Request - ${String(
            new Date().getTime()
          ).slice(-7)}`,
          html: `Your otp for reaper.im is ${otp}`,
        });
        saveOTP(otp);
        return res.json({ success: true });
      }
      default:
        {
          res.statusCode = 404;
          res.end();
        }
        return;
    }
  } catch (err) {
    console.error((err.response && err.response.data) || err);
    res.statusCode = 500;
    return res.json({
      stack: String(err),
      message: 'Oops! Something went wrong.',
    });
  }
};

function saveOTP(otp) {
  fs.writeFileSync(OTP_PATH, String(otp));
  setTimeout(() => {
    fs.unlinkSync(OTP_PATH);
  }, OTP_EXPIRATION * 1000);
  return;
}

function generateOTP() {
  return totp(process.env.OTP_SECRET, {
    digits: 6,
    period: OTP_EXPIRATION,
  });
}
