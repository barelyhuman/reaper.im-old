import { OTP_PATH } from 'configs/otp-path'
import { serialize } from 'cookie'
import fs from 'fs'
import { getDB } from 'lib/get-db'
import { nanoid } from 'nanoid'
import path from 'path'

const isDev = () => {
  return process.env.NODE_ENV !== 'production'
}

export default async (req, res) => {
  try {
    switch (req.method) {
      case 'POST': {
        const otp = getOTP()
        console.log({ otp })
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

        fs.unlinkSync(OTP_PATH)

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

function getOTP () {
  const filePath = path.join(process.env.STORAGE, 'otp.txt')
  const fileExists = fs.existsSync(filePath)

  if (!fileExists) {
    return false
  }

  const stringOTP = fs.readFileSync(filePath)
  return parseInt(stringOTP, 10)
}
