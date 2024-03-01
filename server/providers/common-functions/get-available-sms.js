const logger = require("../config/logger");
const sql = require("../config/sql-database");

var connection = sql.connect();

async function getAvailableSms(admin_id) {
  connection.getConnection(async function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
    } else {
      conn.query(
        "select * from sms_count where admin_id = ?",
        [admin_id],
        async function (err, rows, fields) {
          if (err) {
            logger.log("error", err.sql + ". " + err.sqlMessage);
            res.json(err);
          } else {
            console.log(rows);
            if (rows.length) {
              return await rows[0].count;
            }
            return await null;
          }
        }
      );
    }
  });
}

module.exports = getAvailableSms;
