require("dotenv").config();
const express = require("express");
const router = express.Router();
let { google } = require("googleapis");
const moment = require("moment");
const mysql = require("mysql");
const auth = require("./config/auth");
const request = require("request");
const logger = require("./config/logger");

module.exports = router;

var connection = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

//GENERAL

router.post("/setExternalGoogleAccount", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    req.body.user_id = req.user.user.id;
    delete req.body.token;

    conn.query(
      "select * from external_accounts where admin_id = ?",
      [req.body.admin_id],
      function (err, rows) {
        if (!err) {
          if (rows.length) {
            console.log(rows.length);
            conn.query(
              "update external_accounts set ? where admin_id = ?",
              [req.body, req.body.admin_id],
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
            conn.query(
              "insert into external_accounts SET ?",
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
        } else {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(false);
        }
      }
    );
  });
});

//GENERAL

// TERMINEs
router.post("/createTermine", auth, async (req, res) => {
  oauth2Client.setCredentials({
    refresh_token:
      "1//094tvlVNdU93NCgYIARAAGAkSNwF-L9Iroonq5CG7jQeLk9JIbcdr9kFWE32YiWDXC_d-G0UMCNvsegRb2EheUOnuyX550-n2r_Y",
  });

  req.body.creator_id = req.user.user.id;
  req.body.employee_id = req.body.employee_id
    ? req.body.employee_id
    : req.body.employeeId
    ? req.body.employeeId
    : req.user.user.id;

  await calendar.events.insert({
    calendarId: "primary",
    auth: oauth2Client,
    requestBody: {
      summary: req.body.Subject,
      description: JSON.stringify(req.body),
      start: {
        dateTime: req.body.StartTime,
        timeZone: "Europe/Belgrade",
      },
      end: {
        dateTime: req.body.EndTime,
        timeZone: "Europe/Belgrade",
      },
    },
  });

  res.send(true);
});

router.post("/updateTermine", auth, async (req, res) => {
  oauth2Client.setCredentials({
    refresh_token:
      "1//094tvlVNdU93NCgYIARAAGAkSNwF-L9Iroonq5CG7jQeLk9JIbcdr9kFWE32YiWDXC_d-G0UMCNvsegRb2EheUOnuyX550-n2r_Y",
  });

  await calendar.events.update({
    calendarId: "primary",
    auth: oauth2Client,
    eventId: req.body.externalId,
    requestBody: {
      summary: req.body.Subject,
      description:
        typeof req.body.description === "object"
          ? JSON.stringify(req.body.description)
          : req.body.description,
      start: {
        dateTime: req.body.StartTime,
        timeZone: "Europe/Belgrade",
      },
      end: {
        dateTime: req.body.EndTime,
        timeZone: "Europe/Belgrade",
      },
    },
  });

  res.send(true);
});

router.get("/deleteTermine/:id", async (req, res) => {
  oauth2Client.setCredentials({
    refresh_token:
      "1//094tvlVNdU93NCgYIARAAGAkSNwF-L9Iroonq5CG7jQeLk9JIbcdr9kFWE32YiWDXC_d-G0UMCNvsegRb2EheUOnuyX550-n2r_Y",
  });

  const events = await calendar.events.delete({
    calendarId: "primary",
    auth: oauth2Client,
    eventId: req.params.id,
  });

  res.send(events);
});

router.get("/getTermines", async (req, res) => {
  oauth2Client.setCredentials({
    refresh_token:
      "1//094tvlVNdU93NCgYIARAAGAkSNwF-L9Iroonq5CG7jQeLk9JIbcdr9kFWE32YiWDXC_d-G0UMCNvsegRb2EheUOnuyX550-n2r_Y",
  });

  const events = await calendar.events.list({
    calendarId: "primary",
    auth: oauth2Client,
  });

  res.send(events);
});

//END TERMINE

// GOOGLE

const calendar = google.calendar({
  version: "v3",
  auth: process.env.API_KEY,
});

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

const scopes = ["https://www.googleapis.com/auth/calendar"];

router.get("/login", (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
    include_granted_scopes: true,
  });

  res.json(url);
});

router.get("/redirect", async (req, res) => {
  const code = req.query.code;
  const { tokens } = await oauth2Client.getToken(code);
  console.log(tokens);
  oauth2Client.setCredentials({
    refresh_token:
      "1//094tvlVNdU93NCgYIARAAGAkSNwF-L9Iroonq5CG7jQeLk9JIbcdr9kFWE32YiWDXC_d-G0UMCNvsegRb2EheUOnuyX550-n2r_Y",
  });

  var options = {
    url: process.env.link_api + "google/setExternalGoogleAccount",
    method: "POST",
    body: { google: tokens.refresh_token, token: req.cookies["token"] },
    json: true,
  };

  request(options, function (error, response, body) {
    if (!error) {
      res.redirect(process.env.link_client + "dashboard/settings/connections");
    } else {
      res.json(false);
    }
  });

  // res.send({
  //   msg: "You have successfully logged in app!",
  // });
});

router.get("/schedule_event", async (req, res) => {
  oauth2Client.setCredentials({
    refresh_token:
      "1//094tvlVNdU93NCgYIARAAGAkSNwF-L9Iroonq5CG7jQeLk9JIbcdr9kFWE32YiWDXC_d-G0UMCNvsegRb2EheUOnuyX550-n2r_Y",
  });

  await calendar.events.insert({
    calendarId: "primary",
    auth: oauth2Client,
    requestBody: {
      summary: "Event for OfficeNode from NodeJs 2",
      description: "This is description for test event from NodeJS",
      start: {
        dateTime: moment(new Date()).add(1, "day").toISOString(),
        timeZone: "Europe/Belgrade",
      },
      end: {
        dateTime: moment(new Date()).add(1, "day").add(1, "day").toISOString(),
        timeZone: "Europe/Belgrade",
      },
    },
  });

  res.send("DONE");
});

// END GOOGLE
