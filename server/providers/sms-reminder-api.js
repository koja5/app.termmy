require("dotenv").config();
const express = require("express");
const router = express.Router();
const auth = require("./config/auth");
const logger = require("./config/logger");
const sql = require("./config/sql-database");
const sendSMS = require("./mail_server/sms-server");
const getAvailableSms = require("./common-functions/get-available-sms");

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

router.post("/sendTestSmsMessage", auth, async function (req, res, next) {
  // const availableSms = await getAvailableSms(req.user.user.admin_id);
  // console.log(availableSms);
  // if (availableSms.length) {
  //   connection.getConnection(function (err, conn) {
  //     if (err) {
  //       logger.log("error", err.sql + ". " + err.sqlMessage);
  //       res.json(err);
  //     }
  //     conn.query(
  //       "select * from users where id = ?",
  //       [req.user.user.id],
  //       function (err, rows) {
  //         conn.release();
  //         if (!err) {
  //           if (rows.length && rows[0].telephone) {
  //             sendSMS(rows[0].telephone, req.body.message);
  //             res.json(rows[0].telephone);
  //             decreaseSmsForOne();
  //           } else {
  //             res.json(false);
  //           }
  //         } else {
  //           logger.log("error", err.sql + ". " + err.sqlMessage);
  //           res.json(false);
  //         }
  //       }
  //     );
  //   });
  // } else {
  // }

  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }
    conn.query(
      "select * from users where id = ?",
      [req.user.user.id],
      function (err, rows) {
        conn.release();
        if (!err) {
          if (rows.length && rows[0].telephone) {
            sendSMS(rows[0].telephone, req.body.message);
            res.json(rows[0].telephone);
          } else {
            res.json(false);
          }
        } else {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(false);
        }
      }
    );
  });
});
