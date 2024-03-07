var schedule = require("node-schedule");

// SCRIPTS
var happyBirthdayClient = require("./scripts/sms/happy-birthday-client");
var clientAppointmentReminderDayBefore = require("./scripts/sms/client-appointment-reminder-day-before");

//END SCRIPTS

function executeAutomateScript() {
  /*schedule.scheduleJob("40 42 11 * * *", function () {
    happyBirthdayClient();
  });*/

  schedule.scheduleJob("00 00 14 * * *", function () {
    clientAppointmentReminderDayBefore();
  });
}

module.exports = executeAutomateScript;