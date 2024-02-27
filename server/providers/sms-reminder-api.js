require("dotenv").config();
const express = require("express");
const router = express.Router();
const auth = require("./config/auth");
const logger = require("./config/logger");
const sql = require("./config/sql-database");
const sendSMS = require("./mail_server/sms-server");

module.exports = router;

var connection = sql.connect();

router.get("/getSmsReminderConfig", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from sms_reminder_config where admin_id = ?",
          [req.user.user.admin_id],
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              if (rows.length) {
                res.json(JSON.parse(rows[0].config));
              } else {
                res.json(false);
              }
            }
          }
        );
      }
    });
  } catch (ex) {
    logger.log("error", err.sql + ". " + err.sqlMessage);
    res.json(ex);
  }
});

router.post("/setSmsReminderConfig", auth, function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "select * from sms_reminder_config where admin_id = ?",
      [req.user.user.admin_id],
      function (err, rows, fields) {
        if (rows.length) {
          console.log(req.body);
          conn.query(
            "update sms_reminder_config set config = ? where admin_id = ?",
            [req.body.config, req.user.user.admin_id],
            function (err, rows) {
              conn.release();
              if (!err) {
                res.json(true);
              } else {
                logger.log("error", err.sql + ". " + err.sqlMessage);
                res.json(false);
              }
            }
          );
        } else {
          req.body.admin_id = req.user.user.admin_id;
          conn.query(
            "insert into sms_reminder_config SET ?",
            [req.body],
            function (err, rows) {
              conn.release();
              if (!err) {
                res.json(true);
              } else {
                logger.log("error", err.sql + ". " + err.sqlMessage);
                res.json(false);
              }
            }
          );
        }
      }
    );
  });
});

router.post("/sendTestSMSMessage", auth, function (req, res, next) {
  // connection.getConnection(function (err, conn) {
  //   if (err) {
  //     logger.log("error", err.sql + ". " + err.sqlMessage);
  //     res.json(err);
  //   }
  // });

  res.json(sendSMS("+381694505544", req.body.message));
});
