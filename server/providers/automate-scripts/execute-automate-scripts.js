var schedule = require("node-schedule");

// SCRIPTS
var happyBirthdayClient = require("./scripts/happy-birthday-client");
var clientAppointmentReminderDayBefore = require("./scripts/client-appointment-reminder-day-before");

//END SCRIPTS

function executeAutomateScript() {
  schedule.scheduleJob("30 50 13 * * *", function () {
    happyBirthdayClient();
  });

  schedule.scheduleJob("10 53 08 * * *", function () {
    clientAppointmentReminderDayBefore();
  });
}

module.exports = executeAutomateScript;
