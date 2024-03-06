require("dotenv").config();
var nodemailer = require("nodemailer");
var fs = require("fs");
const logger = require("../config/logger");

var smtpTransport = nodemailer.createTransport({
  host: process.env.smtp_host,
  port: process.env.smtp_port,
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.smtp_user,
    pass: process.env.smtp_pass,
  },
});

var gatewayCountryPrefix = fs
  .readFileSync(
    "./providers/mail_server/sms_config/gateway-country-prefix.json"
  )
  .toString();

async function sendSMS(telephone, message) {
  const to = checkCountryPrefix(telephone);

  if (to) {
    var mailOptions = {
      from: '"Termmy"' + process.env.smtp_user,
      to: to,
      subject: telephone,
      text: message,
    };
    smtpTransport.sendMail(mailOptions, function (error, response) {
      console.log(response);
      if (error) {
        logger.log("error", `${telephone}: ${error}`);
      } else {
        logger.log("info", `Sent SMS to: ${telephone}`);
      }
    });
  } else {
    logger.log("warn", `Try to send SMS to: ${telephone}`);
  }
}

function checkCountryPrefix(telephone) {
  for (let i = 0; i < gatewayCountryPrefix.length; i++) {
    if (telephone.startsWith(gatewayCountryPrefix[i].prefix)) {
      return gatewayCountryPrefix[i].email;
    }
  }
  return false;
}

module.exports = sendSMS;
