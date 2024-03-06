const spliceMessages = require("./common/splice-messages");
const logger = require("../../../config/logger");
const sql = require("../../../config/sql-database");
const sendSMS = require("../../../mail_server/sms-server");
const sendMail = require("../../../mail_server/send-mail");
const moment = require("moment");

var connection = sql.connect();

// UPDATE config
//    SET config_value = CASE config_name
//                       WHEN 'name1' THEN 'value'
//                       WHEN 'name2' THEN 'value2'
//                       ELSE config_value
//                       END
//  WHERE config_name IN('name1', 'name2');

//#region execute appointment reminder bay before script
function clientAppointmentReminderDayBefore() {
  sendAppointmentRemindersLikeSms();
  sendAppointmentRemindersLikeEmail();
}
//#endregion

//#region USING SMS
function sendAppointmentRemindersLikeSms() {
  connection.getConnection(async function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
    } else {
      conn.query(
        "SELECT c.telephone, s.config, c.email, u.company, u.telephone as 'employee_telephone', u.email as 'employee_email',a.StartTime, a.EndTime, a.admin_id, sc.count from appointments a join clients c on a.client_id = c.id join users u on a.employee_id = u.id left join sms_reminder_config s on a.admin_id = s.admin_id join sms_count sc on a.admin_id = sc.admin_id WHERE CAST(a.StartTime AS DATE) = CAST((NOW() + interval 1 DAY) as DATE) and sc.count > 0 and s.active = 1",
        function (err, rows, fields) {
          if (err) {
            logger.log("error", err.sql + ". " + err.sqlMessage);
            res.json(err);
          } else {
            const allItems = spliceMessages(rows);
            console.log(allItems);
            var time = 0;
            allItems.forEach(function (items, i, array) {
              setTimeout(() => {
                var timeout = 1000;
                items.forEach(function (item, i, array) {
                  setTimeout(() => {
                    const config = JSON.parse(item.config);
                    sendViaSms(config, item, conn);
                  }, timeout);
                  timeout += 500;
                });
              }, time);
              time += 50000;
            });
          }
        }
      );
      await conn.release();
    }
  });
}

function sendViaSms(config, item, conn) {
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
    if (config.employeeDayBeforeReminder.active && item.count) {
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
          // conn.release();
        }
      );
    }
  }, 1000);
}
//#endregion

//#region USING EMAIL

function sendAppointmentRemindersLikeEmail() {
  connection.getConnection(async function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
    } else {
      conn.query(
        "SELECT c.telephone, e.config, c.email, u.company, u.telephone as 'employee_telephone', u.email as 'employee_email',a.StartTime, a.EndTime, a.admin_id from appointments a join clients c on a.client_id = c.id join users u on a.employee_id = u.id left join email_reminder_config e on a.admin_id = e.admin_id WHERE CAST(a.StartTime AS DATE) = CAST((NOW() + interval 0 DAY) as DATE) and e.active = 1",
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
                    sendViaEmail(config, item);
                  }, timeout);
                  timeout += 500;
                });
              }, time);
              time += 50000;
            });
          }
        }
      );
      await conn.release();
    }
  });
}

function sendViaEmail(config, item) {
  if (config.clientDayBeforeReminder.active && item.count) {
    sendMail(
      item.email,
      config.clientDayBeforeReminder.subject,
      config.clientDayBeforeReminder.message
        .replace("#company", item.company)
        .replace(
          "#time",
          moment(item.StartTime).format("HH:mm") +
            "-" +
            moment(item.EndTime).format("HH:mm")
        )
    );
  }
  setTimeout(() => {
    if (config.employeeDayBeforeReminder.active && item.count) {
      sendMail(
        item.employee_email,
        config.employeeDayBeforeReminder.subject,
        config.employeeDayBeforeReminder.message
          .replace("#company", item.company)
          .replace(
            "#time",
            moment(item.StartTime).format("HH:mm") +
              "-" +
              moment(item.EndTime).format("HH:mm")
          )
      );
    }
  }, 1000);
}

//#endregion

module.exports = clientAppointmentReminderDayBefore;
