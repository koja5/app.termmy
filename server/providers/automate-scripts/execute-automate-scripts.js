var schedule = require("node-schedule");

// SCRIPTS
var happyBirthdayClient = require("./scripts/sms/happy-birthday-client");

//END SCRIPTS

function executeAutomateScript() {
  schedule.scheduleJob("10 48 23 * * *", function () {
    happyBirthdayClient();
  });
}

module.exports = executeAutomateScript;
