const { isAuthenticated } = require('../../../lib/isAuthenticated')

const handler = async (req, res) => {
  try {
    switch (req.method) {
      case 'GET': {
        return res.send({ success: true })
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

module.exports = isAuthenticated(handler)
