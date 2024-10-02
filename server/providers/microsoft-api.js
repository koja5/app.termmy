require("dotenv").config();
const express = require("express");
const router = express.Router();
const logger = require("./config/logger");
const sql = require("./config/sql-database");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const sha1 = require("sha1");
const expiresToken = "12h";
const axios = require("axios");
const request = require("request");
const auth = require("./config/auth");
const moment = require("moment");

module.exports = router;

//#region SET UP
var connection = sql.connect(); //SQL SET UP

//#region GET TOKEN

// router.get("/getMicrosoftClient", function (req, res, next) {
//   // console.log(req.body);
//   const tokenEndpoint =
//     "https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a/oauth2/v2.0/token"; // Replace {tenant} with your Azure AD tenant ID or domain name
//   const clientId = "f8d10920-2603-45a7-9c7a-d474a32f4758"; // Replace with your Azure AD application client ID
//   const clientSecret = "1508c7ab-b38b-4f4d-94bf-1a32d86e2d19"; // Replace with your Azure AD application client secret

//   try {
//     const response = axios.post(tokenEndpoint, {
//       grant_type: "authorization_code",
//       client_id: clientId,
//       client_secret: clientSecret,
//       scope: "https://graph.microsoft.com/.default",
//     });

//     const accessToken = response.data.access_token;
//     console.log("Access Token:", accessToken);
//     res.json(accessToken);
//   } catch (error) {
//     res.json(error);
//     // console.error(
//     //   "Error obtaining access token:",
//     //   error.response.data.error_description
//     // );
//   }
// });

// https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=f8d10920-2603-45a7-9c7a-d474a32f4758&response_type=code&redirect_uri=http://localhost:3001/api/microsoft/getMicrosoftToken&scope=https://graph.microsoft.com/.default&state=12345&sso_reload=true

// https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=f8d10920-2603-45a7-9c7a-d474a32f4758&response_type=code&redirect_uri=http://localhost:3001/api/microsoft/getMicrosoftToken&scope=https://graph.microsoft.com/.default offline_access&state=086d5c41-207f-4489-859e-b9145e442c57&sso_reload=true&user_id=96e28189-cd75-11ee-978f-960002791003
// https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=f8d10920-2603-45a7-9c7a-d474a32f4758response_type=code&redirect_uri=http://localhost:3001/api/microsoft/getMicrosoftToken&scope=Calendars.ReadWrite%20offline_access&state=96e28189-cd75-11ee-978f-960002791003&sso_reload=true

//#region AUTH
router.get("/generateLinkForToken", auth, function (req, res, next) {
  const generateLink =
    "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=" +
    process.env.MICROSOFT_CLIENT_ID +
    "&response_type=code&redirect_uri=" +
    process.env.link_api +
    process.env.MICROSOFT_REDIRECT_URL +
    "&scope=https://graph.microsoft.com/Calendars.ReadWrite offline_access&state=" +
    req.user.user.id +
    "&sso_reload=true";
  res.json(generateLink);
});

router.get("/getMicrosoftToken", function (req, res, next) {
  var config = {
    method: "post",
    url: process.env.MICROSOFT_API_KEY,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      grant_type: "authorization_code",
      code: req.query.code,
      client_id: process.env.MICROSOFT_CLIENT_ID,
      client_secret: process.env.MICROSOFT_CLIENT_SECRET,
      scope: ["https://graph.microsoft.com/Calendars.ReadWrite"],
      redirect_uri: process.env.link_api + process.env.MICROSOFT_REDIRECT_URL,
    },
  };

  axios(config)
    .then(function (response) {
      if (response && response.data) {
        console.log(response.data);
        var options = prepareOptionsForRequest(
          {
            microsoft: response.data.refresh_token,
            userId: req.query.state,
          },
          "microsoft/setRefreshToken"
        );
        makeRequest(options, res);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});

async function renewAccessTokenAsync(refresh_token) {
  try {
    const response = await axios.post(
      process.env.MICROSOFT_API_KEY,
      {
        grant_type: "refresh_token",
        client_id: process.env.MICROSOFT_CLIENT_ID,
        client_secret: process.env.MICROSOFT_CLIENT_SECRET,
        refresh_token: refresh_token,
        scope: ["https://graph.microsoft.com/Calendars.ReadWrite"],
        redirect_uri: process.env.link_api + process.env.MICROSOFT_REDIRECT_URL,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if (response.data.access_token) {
      return {
        access_token: response.data.access_token,
        expired: moment().add("seconds", response.data.expired),
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
}

router.get("/disconnectFromMicrosoft", auth, function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "delete from external_accounts where user_id = ?",
      [req.user.user.id],
      function (err, rows, fields) {
        conn.release();
        if (err) {
          res.json(false);
        } else {
          res.json(true);
        }
      }
    );
  });
});

//#endregion

//#region EVENTS

router.get("/getTermines/:id", async function (req, res, next) {
  const url = `https://graph.microsoft.com/v1.0/me/calendar/events`;

  let token = null;
  refresh_token =
    "M.C515_BL2.0.U.-CqVWQ19s055ed8QdTDBVKvnI5jCQRMC*VND5UkzJaBLwS80Qtx5A6JxSNbNklJCn*dXu3bq8HSXlTH3tyX7*g5468O9uvileqMN6LEA*QStqHCjysdOco2ipXUijxmdhgoH3XluRVcqR!qs7hJjw2*YlKOvzvVZ0yJl62Cg012M4px1MMj5Hin9OeC6MguuCM*wRdHYWGhkaGuSx!fejtBdsGxaL19jD4pRs*3ude2ADmA0YRVqBF0gYKPWwUT*Aq8oi3WZJkNy6Fcnu5wLKWWZgktRGSLJcbsO66Y8iH4luTTFgwmsK*BahFcC6ngF4nDl1cd6!!r1pkiP0rC4hJP0LhvPq397hQQPRWEoECiR2O4xAvmZGK3deUCBAj!teJO3hSZYK7oWfZKQZCt*kRIAPYiLRwiGN8tu9eCFwI8Ca";

  token = await renewAccessTokenAsync(refresh_token);
  //   if (
  //   new Date(req.body.externalCalendar.expired) < new Date() ||
  //   !req.body.externalCalendar.expired
  // ) {
  //   token = await renewAccessTokenAsync(refresh_token);
  // } else {
  //   token = req.body.externalCalendar;
  // }

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ` + token.access_token,
        "Content-Type": "application/json",
        Prefer: "outlook.body-content-type='text'",
      },
    });

    console.log(response);
    for (let item of response.data.value) {
      console.log(Object(item));
    }

    if (response.data && response.data.value) {
      res.json(response.data.value);
    }
  } catch (error) {
    // console.error(error);
  }
});

router.post("/createTermine", async function (req, res, next) {
  const url = `https://graph.microsoft.com/v1.0/me/calendar/events`;
  console.log(req.body.StartTime);
  const eventData = {
    subject: req.body.Subject,
    body: {
      contentType: "text",
      content: JSON.stringify(req.body),
    },
    start: {
      dateTime: moment(req.body.StartTime).format("YYYY-MM-DDTHH:mm:ss"),
      timeZone: "W. Europe Standard Time",
    },
    end: {
      dateTime: moment(req.body.EndTime).format("YYYY-MM-DDTHH:mm:ss"),
      timeZone: "W. Europe Standard Time",
    },
  };

  let token = null;

  token = await renewAccessTokenAsync(req.body.externalCalendar);

  console.log(eventData);

  try {
    const response = await axios.post(url, eventData, {
      headers: {
        Authorization: `Bearer ` + token.access_token,
        "Content-Type": "application/json",
      },
    });

    res.json({
      status: response.status,
      token: token,
    });
  } catch (error) {
    // console.error(error);
  }
});

router.post("/updateTermine", async function (req, res, next) {
  const url =
    `https://graph.microsoft.com/v1.0/me/calendar/events/` + req.body.id;
  const eventData = {
    subject: req.body.Subject,
    body: {
      contentType: "text",
      content: JSON.stringify(req.body),
    },
    start: {
      dateTime: moment(req.body.StartTime).format("YYYY-MM-DDTHH:mm:ss"),
      timeZone: "W. Europe Standard Time",
    },
    end: {
      dateTime: moment(req.body.EndTime).format("YYYY-MM-DDTHH:mm:ss"),
      timeZone: "W. Europe Standard Time",
    },
  };

  let token = null;

  token = await renewAccessTokenAsync(req.body.externalCalendar);

  try {
    const response = await axios.patch(url, eventData, {
      headers: {
        Authorization: `Bearer ` + token.access_token,
        "Content-Type": "application/json",
      },
    });

    res.json({
      status: response.status,
      token: token,
    });
  } catch (error) {
    console.error(error);
  }
});

//#endregion

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
            signup_date: new Date(),
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

                var options = prepareOptionsForRequest(
                  data,
                  "/setUpSettingsAfterUserSignUp"
                );
                makeRequest(options);

                // set up voucher for created user
                makeRequest(
                  prepareOptionsForRequest(data, "/setUpVoucherCodeForNewUser")
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

router.post("/setRefreshToken", function (req, res, next) {
  connection.getConnection(function (err, conn) {
    if (err) {
      logger.log("error", err.sql + ". " + err.sqlMessage);
      res.json(err);
    }

    conn.query(
      "select * from external_accounts ea where ea.user_id = ?",
      [req.body.userId],
      function (err, rows, fields) {
        if (rows.length && rows[0].google != null) {
          conn.release();
          res.json(false);
        } else {
          const body = {
            user_id: req.body.userId,
            microsoft: req.body.microsoft,
          };
          if (rows.length) {
            body["id"] = rows[0].id;
          }
          conn.query(
            "INSERT INTO external_accounts set ? ON DUPLICATE KEY UPDATE ?",
            [body, body],
            function (err, rows) {
              conn.release();
              if (!err) {
                res.json({
                  redirect_url:
                    process.env.link_client +
                    "/dashboard/admin/settings/connections",
                });
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

//#endregion GENERAL

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
      console.log(response);
      if (response.body.redirect_url) {
        res.redirect(response.body.redirect_url);
      } else {
        res.json(response);
      }
    } else {
      res.json(response);
    }
  });
}

//#endregion
