const mysql = require('mysql2');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'fwitter_db',
}).promise();
module.exports = connection;
