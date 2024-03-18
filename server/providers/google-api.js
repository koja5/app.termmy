require("dotenv").config();
const express = require("express");
const router = express.Router();
let { google } = require("googleapis");
const moment = require("moment");
const mysql = require("mysql");
const auth = require("./config/auth");
const request = require("request");
const logger = require("./config/logger");
const sql = require("./config/sql-database");
const uuid = require("uuid");

module.exports = router;

//#region SET UP
var connection = sql.connect(); //SQL SET UP

const calendar = google.calendar({
  version: "v3",
  auth: process.env.API_KEY,
});

const people = google.people({
  version: "v1",
});

let oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

const scopes = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/contacts",
];

// router.get("/login", (req, res) => {
//   const url = oauth2Client.generateAuthUrl({
//     access_type: "offline",
//     scope: scopes,
//     approval_prompt: "consent",
//     include_granted_scopes: true,
//   });

//   res.json(url);
// });

// router.get("/login", (req, res) => {
//   const url = oauth2Client.generateAuthUrl({
//     access_type: "offline",
//     scope: scopes,
//     approval_prompt: "force",
//     include_granted_scopes: true,
//   });

//   res.json(url);
// });

//#endregion

//#region AUTH

// oauth2Client.on("tokens", (tokens) => {
//   console.log(tokens);
//   if (tokens.refresh_token) {
//     this.myTokens.refreshToken = tokens.refresh_token;
//   }
//   this.myTokens.accessToken = tokens.access_token;

//   oauth2Client.setCredentials({
//     access_token: this.myTokens.accessToken,
//     refresh_token: this.myTokens.refreshToken,
//   });
// });

// oauth2Client.on("tokens", (tokens) => {
//   if (tokens.refresh_token) {
//     console.log("USAO SAM U TOKEN!");
//     console.log(tokens.access_token);
//     var options = prepareOptionsForRequest(
//       { token: tokens.refresh_token },
//       "google/setExternalGoogleAccount"
//     );

//     makeRequest(options, res);
//     console.log(tokens.refresh_token);
//   }
// });

router.get("/login", (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
    prompt: "consent",
  });

  res.json(url);
});

router.get("/redirect", async (req, res) => {
  const code = req.query.code;
  const { tokens } = await oauth2Client.getToken(code);

  var options = {
    url: process.env.link_api + "google/setExternalGoogleAccount",
    method: "POST",
    body: { google: tokens.refresh_token, token: req.cookies["token"] },
    json: true,
  };

  request(options, function (error, response, body) {
    if (!error) {
      res.redirect(
        process.env.link_client + "dashboard/admin/settings/connections"
      );
    } else {
      res.json(false);
    }
  });
});

//#endregion GOOGLE

//#region SET UP TOKEN IN TERMMY DATABASE

router.post("/setExternalGoogleAccount", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    req.body.user_id = req.user.user.id;
    delete req.body.token;

    conn.query(
      "select * from external_accounts where user_id = ?",
      [req.user.user.id],
      function (err, rows) {
        if (!err) {
          if (rows.length) {
            conn.query(
              "update external_accounts set ? where user_id = ?",
              [req.body, req.user.user.id],
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

router.post("/deleteExternalGoogleAccount", auth, function (req, res) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    req.body.user_id = req.user.user.id;

    conn.query(
      "update external_accounts set google = null where user_id = ?",
      [req.user.user.id],
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

//#endregion GENERAL

//#region TERMINES
router.post("/createTermine", auth, async (req, res) => {
  oauth2Client.setCredentials({
    refresh_token: req.body.externalCalendar,
  });

  req.body.creator_id = req.user.user.id;
  req.body.employeeId = req.body.employee_id
    ? req.body.employee_id
    : req.body.employeeId
    ? req.body.employeeId
    : req.user.user.id;

  req.body["uuid"] = uuid.v4();

  delete req.body.employee_id;

  console.log(req.body);

  await calendar.events.insert(
    {
      calendarId: "primary",
      auth: oauth2Client,
      requestBody: {
        summary: req.body.Subject,
        description: JSON.stringify(req.body),
        start: {
          dateTime: moment(req.body.StartTime).add("hour", 1),
          timeZone: "UTC",
        },
        end: {
          dateTime: moment(req.body.EndTime).add("hour", 1),
          timeZone: "UTC",
        },
      },
    },
    (response) => {
      res.json(req.body.uuid);
    }
  );
});

router.post("/updateTermine", auth, async (req, res) => {
  oauth2Client.setCredentials({
    refresh_token:
      typeof req.body === "object"
        ? req.body.externalCalendar
        : JSON.parse(req.body).externalCalendar,
  });

  await calendar.events.update({
    calendarId: "primary",
    auth: oauth2Client,
    eventId: req.body.id,
    requestBody: {
      summary: req.body.Subject,
      description:
        typeof req.body === "object" ? JSON.stringify(req.body) : req.body,
      start: {
        dateTime: moment(req.body.StartTime).add("hour", 1),
        timeZone: "UTC",
      },
      end: {
        dateTime: moment(req.body.EndTime).add("hour", 1),
        timeZone: "UTC",
      },
    },
  });

  res.send(true);
});

router.post("/deleteTermine", async (req, res) => {
  oauth2Client.setCredentials({
    refresh_token: req.body.externalCalendar,
  });

  const events = await calendar.events.delete({
    calendarId: "primary",
    auth: oauth2Client,
    eventId: req.body.id,
  });

  res.send(events);
});

router.post("/getMyTermines", async (req, res) => {
  oauth2Client.setCredentials({
    refresh_token: req.body.id,
  });

  const events = await calendar.events.list({
    calendarId: "primary",
    auth: oauth2Client,
  });

  if (events && events.data) {
    res.send(events.data.items);
  } else {
    res.send([]);
  }
});

router.post("/getTerminesForMultiCalendar", async (req, res) => {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    const condition = packStringFromArrayForWhereCondition(
      req.body,
      false,
      "user_id",
      "or"
    );

    conn.query(
      "select * from external_accounts where " + condition,
      async function (err, rows) {
        conn.release();
        if (!err) {
          let allEvents = [];
          for (let i = 0; i < rows.length; i++) {
            oauth2Client.setCredentials({
              refresh_token: rows[i].google,
            });

            const events = await calendar.events.list({
              calendarId: "primary",
              auth: oauth2Client,
            });

            if (events && events.data) {
              allEvents = allEvents.concat(events.data.items);
            }
          }

          res.send(allEvents);
        } else {
          logger.log("error", err.sql + ". " + err.sqlMessage);
          res.json(false);
        }
      }
    );
  });
});

//#endregion END TERMINE

//#region CONTACTS

router.post("/getContacts", async (req, res, next) => {
  oauth2Client.setCredentials({
    refresh_token: req.body.token,
  });

  people.people.connections.list(
    {
      resourceName: "people/me",
      personFields: [
        "metadata",
        "names",
        "genders",
        "birthdays",
        "emailAddresses",
        "phoneNumbers",
        "addresses",
      ],
      auth: oauth2Client,
    },
    function (err, response) {
      if (response && response.data) {
        res.json(response.data.connections);
      } else {
        res.json([]);
      }
    }
  );
  // res.json(contacts);
});

//#endregion

//#region HELP FUNCTIOn
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

function prepareOptionsForRequest(body, api) {
  return {
    url: process.env.link_api + api,
    method: "POST",
    body: body,
    json: true,
  };
}

function makeRequest(options, res) {
  request(options, function (error, response, body) {
    if (!error) {
      res.json(true);
    } else {
      res.json(false);
    }
  });
}
//#endregion
