require("dotenv").config();
const mysql = require("mysql");

function createSQLPool() {
  return mysql.createPool({
    connectionLimit: 1000,
    connectTimeout: 60 * 60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
  });
}

exports.connect = () => {
  return createSQLPool();
};
