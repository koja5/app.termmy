export class SmsReminderInitial {
  active = false;
  config = {
    clientImmediatelyReminder: {
      title: "Confirmation of booking",
      text: "Immediately upon appointment",
      message: "Your appointment #date at #time has been confirmed. #company",
      active: true,
    },
    clientDayBeforeReminder: {
      title: "Day before",
      text: "Day before at 8 p.m",
      message:
        "Reminder: You have an appointment with us at #company tomorrow at #time. Greeting",
      active: false,
    },
    clientHappyBirthday: {
      title: "Birthday card",
      text: "It is sent on a birthday",
      message: "Lots of happiness and laughter. Greetings from #company",
      active: false,
    },
    clientThankForCommingToUs: {
      title: "Thanks for comming",
      text: "It is sent 1 hour after the appointment",
      message:
        "Thank you for your visit, we hope you enjoyed the service. Thank you for your trust! #company",
      active: false,
    },
    employeeImmediatelyReminder: {
      title: "Confirmation of booking",
      text: "Immediately upon appointment",
      message: "Your appointment #date at #time has been confirmed. #company",
      active: true,
    },
    employeeDayBeforeReminder: {
      title: "Day before",
      text: "Day before at 8 p.m",
      message:
        "Reminder: You have an appointment with us at #company tomorrow at #time. Greeting",
      active: false,
    },
  };
}
