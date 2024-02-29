var schedule = require("node-schedule");

function executeAutomateScript() {
  schedule.scheduleJob("21 23 * * *", function () {
    
  });
}

module.exports = executeAutomateScript;
