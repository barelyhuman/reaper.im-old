const postgres = require('postgres');

const dbconfig = require('../configs/db');

let connection;

exports.getDB = function getDB() {
  if (!connection) {
    const configByEnv = dbconfig[process.env.NODE_ENV || 'development'];
    connection = postgres(configByEnv);
  }
  return connection;
};
