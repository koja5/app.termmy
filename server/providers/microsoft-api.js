require("dotenv").config();
const express = require("express");
const router = express.Router();
const logger = require("./config/logger");
const sql = require("./config/sql-database");
const uuid = require("uuid");
const e = require("express");
const jwt = require("jsonwebtoken");
const sha1 = require("sha1");
const expiresToken = "12h";
const { OAuth2Client } = require("google-auth-library");

module.exports = router;

//#region SET UP
var connection = sql.connect(); //SQL SET UP

//#region SET UP TOKEN IN TERMMY DATABASE

router.post("/findOrCreateUserViaMicrosoft", function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "select * from users where email = ?",
      [req.body.email],
      function (err, rows, fields) {
        if (rows.length) {
          conn.release();
          const token = generateToken(rows[0]);
          logger.log(
            "info",
            `USER: ${req.body.email} is LOGIN at ${new Date()}.`
          );

          res.json("auth/user-auth/" + token);
        } else {
          const generateUuid = uuid.v4();
          const data = {
            id: generateUuid,
            admin_id: generateUuid,
            firstname: "",
            lastname: "",
            email: req.body.email,
            password: setSha1Password(req.body.email),
            type: 1,
            active: 1,
            verified: 1,
          };

          conn.query(
            "insert into users set ?",
            [data],
            function (err, rows, fields) {
              if (err) {
                conn.release();
                logger.log("error", err.sql + ". " + err.sqlMessage);
                res.json(false);
              } else {
                logger.log(
                  "info",
                  `USER: ${req.body.email} CREATE ACCOUNT at ${new Date()}.`
                );
                const token = generateToken(data);
                // res.json("wizard/" + token);
                res.json("auth/user-auth/" + token);
              }
            }
          );
        }
      }
    );
  });
});

//#endregion GENERAL

//#endregion

//#region HELP FUNCTIOn

function generateToken(data) {
  return jwt.sign(
    {
      user: {
        id: data.id,
        admin_id: data.admin_id ? data.admin_id : data.id,
        firstname: data.firstname,
        lastname: data.lastname,
        type: data.type,
        avatar: data.avatar,
      },
      email: data.email,
    },
    process.env.TOKEN_KEY,
    {
      expiresIn: expiresToken,
    }
  );
}

function setSha1Password(password) {
  return sha1(password);
}

//#endregion
