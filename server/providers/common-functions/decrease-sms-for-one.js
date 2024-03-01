const logger = require("../config/logger");
const sql = require("../config/sql-database");

var connection = sql.connect();

async function decreaseSmsForOne(admin_id) {
  connection.getConnection(async function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
    } else {
      conn.query(
        "update sms_count set count = count - 1 where admin_id = ?",
        [admin_id],
        function (err, rows, fields) {
          if (err) {
            logger.log("error", err.sql + ". " + err.sqlMessage);
            return false;
          } else {
            return true;
          }
        }
      );
    }
  });
}

module.exports = decreaseSmsForOne;
