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

module.exports = router;

var connection = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

connection.getConnection(function (err, conn) {
  console.log(err);
  console.log(conn);
});

router.post("/setTermine", function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }
    conn.query("insert into calendar SET ?", [req.body], function (err, rows) {
      conn.release();
      if (!err) {
        res.json(rows.insertId);
      } else {
        logger.log("error", err.sql + ". " + err.sqlMessage);
        res.json(false);
      }
    });
  });
});
