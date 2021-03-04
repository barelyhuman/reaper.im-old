const { serialize } = require('cookie')
const fs = require('fs')
const { getDB } = require('../../lib/get-db')
const { nanoid } = require('nanoid')
const Redis = require('ioredis')

const isDev = () => {
  return process.env.NODE_ENV !== 'production'
}

module.exports = async (req, res) => {
  try {
    switch (req.method) {
      case 'POST': {
        const otp = await getOTP()
        if (typeof otp === 'boolean' && otp === false) {
          console.log("couldn't get it from file")
          res.statusCode = 400
          return res.json({
            stack: 'OTP Invalid',
            message: 'OTP Invalid'
          })
        }

        if (parseInt(req.body.otp, 10) !== otp) {
          console.log('no payload')
          res.statusCode = 400
          return res.json({
            stack: 'OTP Invalid',
            message: 'OTP Invalid'
          })
        }

        await removeOTP()

        const token = nanoid()
        const tokenExpiry = new Date(
          new Date().setDate(new Date().getDate() + 1)
        )

        const db = getDB()
        await db.begin(async (sql) => {
          const id = nanoid()
          const [insertedToken] = await sql`
                insert into access_tokens (id,token, expires_at, is_valid) values ( ${id},${token},${tokenExpiry},${true})
            `
          return !!insertedToken
        })

        res.setHeader(
          'Set-Cookie',
          serialize('auth', token, {
            expires: tokenExpiry,
            secure: !isDev(),
            path: '/',
            sameSite: 'lax'
          })
        )

        res.end()
        return
      }
      default:
        {
          res.statusCode = 404
          res.end()
        }
        return
    }
  } catch (err) {
    console.error(err)
    res.statusCode = 500
    return res.json({
      stack: String(err),
      message: 'Oops! Something went wrong.'
    })
  }
}

async function getOTP () {
  const redis = new Redis(process.env.REDIS_URL)
  return redis.get('otp')
}

async function removeOTP () {
  const redis = new Redis(process.env.REDIS_URL)
  return redis.set('otp', '')
}
