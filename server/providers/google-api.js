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
    rejectUnauthorized: false,
  };

  request(options, function (error, response, body) {
    console.log(error);
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

router.post("/syncContacts", auth, function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    if (!req.body.id) {
      req.body.id = uuid.v4();
    }

    const values = packValuesForMultiRows(req.body, req.user.user.admin_id);

    console.log(values);

    conn.query(
      "INSERT INTO clients(id, admin_id, resourceName, firstname, lastname, gender, birthday, email, telephone, address, zip, city) values " +
        values +
        " ON DUPLICATE KEY UPDATE resourceName = VALUES(resourceName), firstname = VALUES(firstname), lastname = VALUES(lastname), gender = VALUES(gender), birthday = VALUES(birthday), email = VALUES(email), telephone = VALUES(telephone), address = VALUES(address), zip = VALUES(zip), city = VALUES(city)",
      function (err, rows) {
        console.log(err);
        console.log(rows);
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

  const timeZone = await calendar.calendars.get({
    calendarId: "primary",
    auth: oauth2Client,
  });

  await calendar.events.insert(
    {
      calendarId: "primary",
      auth: oauth2Client,
      requestBody: {
        summary: req.body.Subject,
        description: JSON.stringify(req.body),
        start: {
          dateTime: moment(req.body.StartTime),
        },
        end: {
          dateTime: moment(req.body.EndTime),
        },
      },
    },
    (err, response) => {
      console.log(response);
      if (response && response.data) {
        res.json({ id: response.data.id, uuid: req.body.uuid });
      } else {
        res.json(false);
      }
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
        dateTime: moment(req.body.StartTime),
      },
      end: {
        dateTime: moment(req.body.EndTime),
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
        res.json(null);
      }
    }
  );
  // res.json(contacts);
});

router.post("/setClient", async (req, res, next) => {
  oauth2Client.setCredentials({
    refresh_token: req.body.token,
  });

  const body = {
    names: [
      {
        givenName: req.body.firstname,
        familyName: req.body.lastname,
      },
    ],
    genders: [
      {
        value: req.body.gender,
      },
    ],
    birthdays: [
      {
        date: {
          day: new Date(req.body.birthday).getDate(),
          month: new Date(req.body.birthday).getMonth() + 1,
          year: new Date(req.body.birthday).getFullYear(),
        },
      },
    ],
    emailAddresses: [
      {
        value: req.body.email,
      },
    ],
    phoneNumbers: [
      {
        value: req.body.telephone,
        canonicalForm: req.body.telephone,
      },
    ],
    addresses: [
      {
        city: req.body.city,
        postalCode: req.body.zip,
        streetAddress: req.body.address,
      },
    ],
  };
  if (req.body.resourceName) {
    people.people.get(
      {
        resourceName: req.body.resourceName,
        personFields: ["names"],
        auth: oauth2Client,
      },
      function (err, response) {
        if (response && response.data) {
          if (response && response.data) {
            const data = {
              id: generateCustomUUID(response.data.resourceName.split("/")[1]),
              resourceName: response.data.resourceName,
            };
            res.json(data);
          } else {
            res.json(false);
          }
          body["etag"] = response.data.etag;
          people.people.updateContact(
            {
              updatePersonFields: [
                "names",
                "genders",
                "birthdays",
                "emailAddresses",
                "phoneNumbers",
                "addresses",
              ],
              resourceName: req.body.resourceName,
              requestBody: body,
              auth: oauth2Client,
            },
            function (err, response) {}
          );
        }
      }
    );
  } else {
    people.people.createContact(
      {
        personFields: [
          "metadata",
          "names",
          "genders",
          "birthdays",
          "emailAddresses",
          "phoneNumbers",
          "addresses",
        ],
        requestBody: body,
        auth: oauth2Client,
      },
      function (err, response) {
        if (response && response.data) {
          const data = {
            guuid: generateCustomUUID(response.data.resourceName.split("/")[1]),
            resourceName: response.data.resourceName,
          };
          res.json(data);
        } else {
          res.json(false);
        }
      }
    );
  }
});

router.post("/deleteClient", async (req, res, next) => {
  oauth2Client.setCredentials({
    refresh_token: req.body.token,
  });

  people.people.deleteContact(
    {
      resourceName: req.body.resourceName,
      auth: oauth2Client,
    },
    function (err, response) {
      console.log(err);
      console.log(response);
      if (response && response.status === 200) {
        res.json(true);
      } else {
        res.json(false);
      }
    }
  );
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
    rejectUnauthorized: false,
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

function packValuesForMultiRows(values, admin_id) {
  let query = "";
  for (let i = 0; i < values.length; i++) {
    query += "(";
    query +=
      "'" +
      generateCustomUUID(
        values[i].resourceName
          ? values[i].resourceName.split("/")[1]
          : values[i].id
      ) +
      "'" +
      ",";
    query +=
      "'" + (values[i].admin_id ? values[i].admin_id : admin_id) + "'" + ",";
    query +=
      "'" +
      (values[i].resourceName ? values[i].resourceName : null) +
      "'" +
      ",";
    query +=
      (values[i].firstname
        ? "'" + values[i].firstname + "'"
        : values[i].firstname) + ",";
    query +=
      (values[i].lastname
        ? "'" + values[i].lastname + "'"
        : values[i].lastname) + ",";
    query +=
      (values[i].gender ? "'" + values[i].gender + "'" : values[i].gender) +
      ",";
    query +=
      (values[i].birthday
        ? "'" + values[i].birthday + "'"
        : values[i].birthday) + ",";
    query +=
      (values[i].email ? "'" + values[i].email + "'" : values[i].email) + ",";
    query +=
      (values[i].telephone
        ? "'" + values[i].telephone + "'"
        : values[i].telephone) + ",";
    query +=
      (values[i].address ? "'" + values[i].address + "'" : values[i].address) +
      ",";
    query += (values[i].zip ? "'" + values[i].zip + "'" : values[i].zip) + ",";
    query +=
      (values[i].city ? "'" + values[i].city + "'" : values[i].city) + ")";
    if (i < values.length - 1) {
      query += ",";
    }
  }
  return query;
}

function generateCustomUUID(id) {
  const first =
    id.slice(0, 8).length === 8
      ? id.slice(0, 8)
      : id.slice(0, 8) + "0".repeat(8 - id.slice(0, 8).length);
  const second =
    id.slice(9, 12).length == 4
      ? id.slice(9, 12)
      : id.slice(9, 12) + "0".repeat(4 - id.slice(9, 12).length);
  const third =
    id.slice(13, 16).length == 4
      ? id.slice(13, 16)
      : id.slice(13, 16) + "0".repeat(4 - id.slice(13, 16).length);
  const forth =
    id.slice(17, 20).length == 4
      ? id.slice(17, 20)
      : id.slice(17, 20) + "0".repeat(4 - id.slice(17, 20).length);
  const fifth =
    id.slice(21, 30).length === 12
      ? id.slice(21, 30)
      : id.slice(21, 30) + "0".repeat(12 - id.slice(21, 30).length);
  let uuid = first + "-" + second + "-" + third + "-" + forth + "-" + fifth;
  return uuid;
}

//#endregion
