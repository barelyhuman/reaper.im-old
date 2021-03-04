module.exports = {
  development: {
    host: 'localhost', // Postgres ip address or domain name
    port: 5432, // Postgres server port
    database: 'reaper_im', // Name of database to connect to
    username: 'local_user', // Username of database user
    password: 'password', // Password of database user
    max: 10, // Max number of connections
    timeout: 0, // Idle connection timeout in seconds
  },
  production: process.env.DATABASE_URL,
};
