const spliceMessages = require("./common/splice-messages");
const logger = require("../../../config/logger");
const sql = require("../../../config/sql-database");
const sendSMS = require("../../../mail_server/sms-server");
const moment = require("moment");

var connection = sql.connect();

// UPDATE config
//    SET config_value = CASE config_name
//                       WHEN 'name1' THEN 'value'
//                       WHEN 'name2' THEN 'value2'
//                       ELSE config_value
//                       END
//  WHERE config_name IN('name1', 'name2');

function clientAppointmentReminderDayBefore() {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
    } else {
      conn.query(
        "SELECT c.telephone, s.config, u.company, u.telephone as 'employee_telephone', a.StartTime, a.EndTime, a.admin_id, sc.count from appointments a join clients c on a.client_id = c.id join users u on a.employee_id = u.id join sms_reminder_config s on a.admin_id = s.admin_id join sms_count sc on a.admin_id = sc.admin_id WHERE CAST(a.StartTime AS DATE) = CAST((NOW() + interval 0 DAY) as DATE)",
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
                    if (config.clientDayBeforeReminder.active && item.count) {
                      sendSMS(
                        item.telephone,
                        config.clientDayBeforeReminder.message
                          .replace("#company", item.company)
                          .replace(
                            "#time",
                            moment(item.StartTime).format("HH:mm") +
                              "-" +
                              moment(item.EndTime).format("HH:mm")
                          )
                      );
                      conn.query(
                        "update sms_count set count = count - 1 where admin_id = ?",
                        [item.admin_id],
                        function (err, rows, fields) {}
                      );
                    }
                    setTimeout(() => {
                      if (
                        config.employeeDayBeforeReminder.active &&
                        item.count
                      ) {
                        sendSMS(
                          item.employee_telephone,
                          config.employeeDayBeforeReminder.message
                            .replace("#company", item.company)
                            .replace(
                              "#time",
                              moment(item.StartTime).format("HH:mm") +
                                "-" +
                                moment(item.EndTime).format("HH:mm")
                            )
                        );
                        conn.query(
                          "update sms_count set count = count - 1 where admin_id = ?",
                          [item.admin_id],
                          function (err, rows, fields) {
                            conn.release();
                          }
                        );
                      }
                    }, 1000);
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

module.exports = clientAppointmentReminderDayBefore;
