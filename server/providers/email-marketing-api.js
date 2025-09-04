require("dotenv").config();
const express = require("express");
const router = express.Router();
const logger = require("./config/logger");
const auth = require("./config/auth");
const sql = require("./config/sql-database");
const sendEmail = require("./mail_server/send-mail");
const uuid = require("uuid");

module.exports = router;

var connection = sql.connect();

connection.getConnection(function (err, conn) {});

/* GET api listing. */
router.get("/", (req, res) => {
  // res.send("api works");
});

router.post("/getFilteredUsers", auth, function (req, res, next) {
  const { man, woman, from_birthday, to_birthday, zip, city } = req.body;

  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      return res.status(500).json(err);
    }

    let baseQuery = `SELECT * FROM clients WHERE admin_id = ? and (email IS NOT NULL or email != '')`;
    const queryParams = [];
    queryParams.push(req.user.user.admin_id);

    // Pol (gender)
    if (man && woman) {
      baseQuery += ` AND gender = ? OR gender = ?`;
      queryParams.push(man);
      queryParams.push(woman);
    } else if (man) {
      baseQuery += ` AND gender = ?`;
      queryParams.push(man);
    } else if (woman) {
      baseQuery += ` AND gender = ?`;
      queryParams.push(woman);
    }

    // Datum rođenja
    if (from_birthday) {
      baseQuery += ` AND birthday >= ?`;
      queryParams.push(from_birthday);
    }

    if (to_birthday) {
      baseQuery += ` AND birthday <= ?`;
      queryParams.push(to_birthday);
    }

    // ZIP kod
    if (zip) {
      baseQuery += ` AND zip = ?`;
      queryParams.push(zip);
    }

    // Grad
    if (city) {
      baseQuery += ` AND city = ?`;
      queryParams.push(city);
    }

    conn.query(baseQuery, queryParams, function (err, results) {
      conn.release();

      if (err) {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        return res.status(500).json(err);
      }

      res.json(results);
    });
  });
});

router.post("/saveEmailCampaign", auth, function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    req.body.admin_id = req.user.user.admin_id;

    if (!req.body.id) {
      req.body.id = uuid.v4();
    }

    conn.query(
      "INSERT INTO email_campaigns set ? ON DUPLICATE KEY UPDATE ?",
      [req.body, req.body],
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

router.post("/removeSavedCampaign", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "delete from email_campaigns where id = ?",
      [req.body.id],
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

router.get("/getMySavedEmailCampaigns", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "select * from email_campaigns where admin_id = ?",
      [req.user.user.admin_id],
      function (err, rows) {
        conn.release();
        if (err) {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(err);
        }
        res.json(rows);
      }
    );
  });
});

router.post("/send", auth, async function (req, res, next) {
  const { users, subject, message } = req.body;

  for (let i = 0; i < users.length; i++) {
    if (users[i].email) {
      await sendEmail(users[i].email, subject, message);
    }
  }
  res.json(true);
});
