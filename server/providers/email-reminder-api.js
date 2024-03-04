require("dotenv").config();
const express = require("express");
const router = express.Router();
const auth = require("./config/auth");
const logger = require("./config/logger");
const sql = require("./config/sql-database");
const sendMail = require("./mail_server/send-mail");

module.exports = router;

var connection = sql.connect();

router.get("/getEmailReminderConfig", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from email_reminder_config where admin_id = ?",
          [req.user.user.admin_id],
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              if (rows.length) {
                rows[0].config = JSON.parse(rows[0].config);
                res.json(rows[0]);
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

router.post("/setEmailReminderConfig", auth, function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    if (!req.body.id) {
      req.body.id = uuid.v4();
    }

    req.body.config = JSON.stringify(req.body.config);
    req.body.admin_id = req.user.user.admin_id;

    conn.query(
      "INSERT INTO email_reminder_config SET ? ON DUPLICATE KEY UPDATE ?",
      [req.body, req.body],
      function (err, rows) {
        conn.release();
        if (!err) {
          res.json(req.body.id);
        } else {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(false);
        }
      }
    );

    // conn.query(
    //   "select * from email_reminder_config where admin_id = ?",
    //   [req.user.user.admin_id],
    //   function (err, rows, fields) {
    //     if (rows.length) {
    //       console.log(req.body);
    //       conn.query(
    //         "update email_reminder_config set config = ? where admin_id = ?",
    //         [req.body.config, req.user.user.admin_id],
    //         function (err, rows) {
    //           conn.release();
    //           if (!err) {
    //             res.json(true);
    //           } else {
    //             logger.log("error", err.sql + ". " + err.sqlMessage);
    //             res.json(false);
    //           }
    //         }
    //       );
    //     } else {
    //       req.body.admin_id = req.user.user.admin_id;
    //       conn.query(
    //         "insert into email_reminder_config SET ?",
    //         [req.body],
    //         function (err, rows) {
    //           conn.release();
    //           if (!err) {
    //             res.json(true);
    //           } else {
    //             logger.log("error", err.sql + ". " + err.sqlMessage);
    //             res.json(false);
    //           }
    //         }
    //       );
    //     }
    //   }
    // );
  });
});

router.post("/sendTestEmailMessage", auth, function (req, res, next) {
  const message = {
    template: "dynamic-email-template.hjs",
    text: req.body.message,
  };
  sendMail(req.user.email, req.body.subject, message);
  res.json(req.user.email);
});
