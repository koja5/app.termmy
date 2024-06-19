const spliceMessages = require("./common/splice-messages");
const logger = require("../../config/logger");
const sql = require("../../config/sql-database");
const sendMail = require("../../mail_server/send-mail");
const sendSMS = require("../../mail_server/sms-server");

var connection = sql.connect();

function happyBirthdayClient() {
  sendHappyBirthdayClientLikeSms();
  sendAppointmentRemindersLikeEmail();
}

//#region USING SMS
function sendHappyBirthdayClientLikeSms() {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
    } else {
      conn.query(
        "select c.telephone, s.config, s.admin_id, sc.count from clients c join sms_reminder_config s on c.admin_id = s.admin_id join sms_count sc on s.admin_id = sc.admin_id where DAY(c.birthday) = DAY(CURRENT_DATE()) and MONTH(c.birthday) = MONTH(CURRENT_DATE()) and s.active = 1",
        function (err, rows, fields) {
          if (err) {
            logger.log("error", err.sql + ". " + err.sqlMessage);
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
    }
  });
}

function sendViaSms(config, item, conn) {
  if (config.clientHappyBirthday.active && item.count) {
    sendSMS(
      item.telephone,
      config.clientHappyBirthday.message.replaceAll("#company", item.company)
    );
    conn.query(
      "update sms_count set count = count - 1 where admin_id = ?",
      [item.admin_id],
      function (err, rows, fields) {}
    );
  }
}

//#endregion

//#region USING EMAIL

function sendAppointmentRemindersLikeEmail() {
  connection.getConnection(async function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
    } else {
      conn.query(
        "select c.email, e.config, e.admin_id, u.company from clients c join email_reminder_config e on c.admin_id = e.admin_id join sms_count sc on e.admin_id = sc.admin_id join users u on c.admin_id = u.admin_id where DAY(c.birthday) = DAY(CURRENT_DATE()) and MONTH(c.birthday) = MONTH(CURRENT_DATE()) and e.active = 1",
        function (err, rows, fields) {
          if (err) {
            logger.log("error", err.sql + ". " + err.sqlMessage);
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
  if (config.clientHappyBirthday.active) {
    sendMail(
      item.email,
      config.clientHappyBirthday.subject,
      config.clientHappyBirthday.message.replaceAll("#company", item.company)
    );
  }
}

module.exports = happyBirthdayClient;
