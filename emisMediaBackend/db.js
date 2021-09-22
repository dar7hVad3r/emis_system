const mysql = require('mysql2')

// create pool of connections
const pool = mysql.createPool({
  host: 'localhost',
  user: 'sunbeam',
  password: 'sunbeam',
  database: 'emis_system',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

module.exports = pool
