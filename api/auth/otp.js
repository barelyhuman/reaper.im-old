const axios = require('axios')
const totp = require('totp-generator')
const Redis = require('ioredis')

const isDev = () => {
  return process.env.NODE_ENV !== 'production'
}

const OTP_EXPIRATION = 60

module.exports = async (req, res) => {
  try {
    switch (req.method) {
      case 'POST': {
        const otp = generateOTP()
        if (isDev()) {
          console.log(otp)
        } else {
          await axios.post(process.env.MAILER_URL, {
            to: process.env.AUTHENTICATION_EMAIL,
            subject: `Reaper.im OTP Request - ${String(
              new Date().getTime()
            ).slice(-7)}`,
            html: `Your otp for reaper.im is ${otp}`
          })
        }
        await saveOTP(otp)
        return res.json({ success: true })
      }
      default:
        {
          res.statusCode = 404
          res.end()
        }
        return
    }
  } catch (err) {
    console.error((err.response && err.response.data) || err)
    res.statusCode = 500
    return res.json({
      stack: String(err),
      message: 'Oops! Something went wrong.'
    })
  }
}

async function saveOTP (otp) {
  const redis = new Redis(process.env.REDIS_URL)
  await redis.set('otp', otp)
  return setTimeout(async () => {
    await redis.set('otp', null)
  }, OTP_EXPIRATION * 1000)
}

function generateOTP () {
  return totp(process.env.OTP_SECRET, {
    digits: 6,
    period: OTP_EXPIRATION
  })
}
