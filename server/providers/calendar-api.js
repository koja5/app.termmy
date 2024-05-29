require("dotenv").config();
const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const expiresToken = "12h";
const logger = require("./config/logger");
const request = require("request");
const fs = require("fs");
const sha1 = require("sha1");
const stripe = require("stripe")(process.env.stripe_key);
const jwt = require("jsonwebtoken");
const auth = require("./config/auth");
const sql = require("./config/sql-database");
const uuid = require("uuid");

module.exports = router;

var connection = sql.connect();

connection.getConnection(function (err, conn) {
  console.log(err);
  console.log(conn);
});

router.post("/getTermines", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        const condition = packStringFromArrayForWhereCondition(
          req.body,
          false,
          "employee_id",
          "or"
        );

        conn.query(
          "select * from appointments where " + condition,
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(rows);
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

router.get("/getMyTermines", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "select * from appointments where employee_id = ?",
          req.user.user.id,
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(rows);
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

router.post("/setTermine", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }
    req.body.admin_id = req.user.user.admin_id;
    delete req.body.employeeId;
    delete req.body.uuid;
    delete req.body.externalCalendar;
    delete req.body.externalCalendarId;
    if (!req.body.id) {
      req.body.id = uuid.v4();
    }
    conn.query(
      "insert into appointments SET ?",
      [req.body],
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
  });
});

router.post("/updateTermine", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }
    req.body.admin_id = req.user.user.admin_id;
    req.body.employee_id = req.body.employeeId;
    if (req.body.uuid) {
      req.body.id = req.body.uuid;
    }
    delete req.body.uuid;
    delete req.body.employeeId;
    delete req.body.Guid;
    delete req.body.Id;
    delete req.body.externalCalendar;
    delete req.body.externalCalendarId;
    delete req.body.groupIndex;
    delete req.body.StartTimezone;
    delete req.body.EndTimezone;
    conn.query(
      "update appointments set ? where id = ?",
      [req.body, req.body.id],
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
  });
});

router.get("/deleteTermine/:id", auth, async (req, res, next) => {
  try {
    connection.getConnection(function (err, conn) {
      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(err);
      } else {
        conn.query(
          "delete from appointments where id = ?",
          req.params.id,
          function (err, rows, fields) {
            conn.release();
            if (err) {
              logger.log("error", err.sql + ". " + err.sqlMessage);
              res.json(err);
            } else {
              res.json(true);
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

function packStringFromArrayForWhereCondition(
  array,
  arrayField,
  sqlField,
  connective
) {
  let condition = "";
  for (let i = 0; i < array.length; i++) {
    condition +=
      sqlField + " = " + (arrayField ? array[i][arrayField] : array[i]);
    if (i < array.length - 1) {
      condition += " " + connective + " ";
    }
  }
  return condition;
}
