const { serialize } = require('cookie')
const { getDB } = require('../../lib/get-db')

module.exports = async (req, res) => {
  try {
    switch (req.method) {
      case 'POST': {
        const { auth } = req.cookies

        const db = getDB()

        await db`
          delete from access_tokens where token=${auth}
        `

        res.setHeader(
          'Set-Cookie',
          serialize('auth', 'unauth', {
            expires: new Date(
              new Date().setFullYear(new Date().getFullYear() - 1)
            )
          })
        )

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
    console.error(err)
    res.statusCode = 500
    return res.json({
      stack: String(err),
      message: 'Oops! Something went wrong.'
    })
  }
}
