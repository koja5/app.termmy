require("dotenv").config();
const express = require("express");
const router = express.Router();
const fs = require("fs");
const sha1 = require("sha1");
const request = require("request");
const moment = require("moment");

module.exports = router;

router.post("/verifyEmailAddress", function (req, res, next) {
  var body = JSON.parse(
    fs.readFileSync(
      "./providers/mail_server/mail_config/verify_email_address.json",
      "utf-8"
    )
  );

  body["email"] = req.body.email;
  body["verified_mail_link"] =
    process.env.link_api + "verifiedMailAndActive/" + sha1(req.body.email);

  var options = prepareOptionsForRequest(body);

  request(options, function (error, response, body) {
    if (!error) {
      res.json(true);
    } else {
      res.json(false);
    }
  });
});

router.post("/resetPasswordLink", function (req, res, next) {
  var body = JSON.parse(
    fs.readFileSync(
      "./providers/mail_server/mail_config/forgot_password.json",
      "utf-8"
    )
  );

  body["email"] = req.body.email;
  body["reset_password_link"] =
    process.env.link_client + "auth/reset-password/" + sha1(req.body.email);

  var options = prepareOptionsForRequest(body);

  request(options, function (error, response, body) {
    if (!error) {
      res.json(true);
    } else {
      res.json(false);
    }
  });
});

router.post("/sendSmsBonusInfo", function (req, res, next) {
  var body = JSON.parse(
    fs.readFileSync(
      "./providers/mail_server/mail_config/sms_bonus.json",
      "utf-8"
    )
  );

  body["email"] = req.body.email;
  body["sms_reminder"] =
    process.env.link_client + "/dashboard/admin/admin-settings/reminders";

  var options = prepareOptionsForRequest(body);

  request(options, function (error, response, body) {
    if (!error) {
      res.json(true);
    } else {
      res.json(false);
    }
  });
});

//#region FUNCTIONS

function prepareOptionsForRequest(body) {
  return {
    url: process.env.link_api + "mail-server/sendMail",
    method: "POST",
    body: body,
    json: true,
  };
}

//#endregion
