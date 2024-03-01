const spliceMessages = require("./common/splice-messages");
const logger = require("../../../config/logger");
const sql = require("../../../config/sql-database");

var connection = sql.connect();

function updateSmsCount(data) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
    } else {
      conn.query(
        "select c.telephone, s.config from clients c join sms_reminder_config s on c.admin_id = s.admin_id",
        function (err, rows, fields) {
          conn.release();
          if (err) {
            logger.log("error", err.sql + ". " + err.sqlMessage);
            res.json(err);
          } else {
            const allItems = spliceMessages(rows);

            var time = 0;
            allItems.forEach(function (items, i, array) {
              setTimeout(() => {
                var timeout = 1000;
                items.forEach(function (item, i, array) {
                  setTimeout(() => {
                    const config = JSON.parse(item.config);
                    if (config.clientHappyBirthday.active) {
                      sendSMS(
                        item.telephone,
                        config.clientHappyBirthday.message
                      );
                    }
                  }, timeout);
                  timeout += 500;
                });
              }, time);
              time += 50000;
            });
          }
        }
      );
    }
  });
}

module.exports = happyBirthdayClient;
