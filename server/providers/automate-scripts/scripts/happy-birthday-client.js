const spliceMessages = require("./common/splice-messages");
const logger = require("../../config/logger");
const sql = require("../../config/sql-database");
const sendSMS = require("../../mail_server/sms-server");

var connection = sql.connect();

function happyBirthdayClient() {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
    } else {
      conn.query(
        "select c.telephone, s.config, s.admin_id from clients c join sms_reminder_config s on c.admin_id = s.admin_id join sms_count sc on s.admin_id = sc.admin_id where DAY(c.birthday) = DAY(CURRENT_DATE()) and MONTH(c.birthday) = MONTH(CURRENT_DATE())",
        function (err, rows, fields) {
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
                    if (config.clientHappyBirthday.active && item.count) {
                      sendSMS(
                        item.telephone,
                        config.clientHappyBirthday.message
                      );
                      conn.query(
                        "update sms_count set count = count - 1 where admin_id = ?",
                        [item.admin_id],
                        function (err, rows, fields) {
                          conn.release();
                        }
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
