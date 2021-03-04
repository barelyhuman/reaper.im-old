const postgres = require('postgres')

const dbconfig = require('../configs/db')

let connection

const isDev = process.env.NODE_ENV !== 'production'

exports.getDB = function getDB () {
  if (!connection) {
    const configByEnv = dbconfig[process.env.NODE_ENV || 'development']
    connection = postgres(configByEnv, {
      ssl: isDev ? false : { rejectUnauthorized: false }
    })
  }
  return connection
}
