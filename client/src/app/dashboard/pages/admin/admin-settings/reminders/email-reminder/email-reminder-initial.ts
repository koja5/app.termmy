export class EmailReminderInitial {
  active = false;
  config = {
    clientImmediatelyReminder: {
      title: "Confirmation of booking",
      text: "Immediately upon appointment",
      subject: "Your appointment is confirmed",
      message:
        "Your appointment #date at #time has been confirmed. Our address is #address. #company",
      active: true,
    },
    clientDayBeforeReminder: {
      title: "Day before",
      text: "Day before at 8 p.m",
      subject: "Reminder for tomorrow appointment",
      message:
        "Reminder: You have an appointment with us at #company tomorrow at #time. Our address is #address. Greeting",
      active: true,
    },
    clientHappyBirthday: {
      title: "Birthday card",
      text: "It is sent on a birthday",
      subject: "Happy birthday!",
      message: "Lots of happiness and laughter. Greetings from #company",
      active: false,
    },
    clientThankForCommingToUs: {
      title: "Thanks for comming",
      text: "It is sent 1 hour after the appointment",
      subject: "Thank you!",
      message:
        "Thank you for your visit, we hope you enjoyed the service. Thank you for your trust! #company",
      active: false,
    },
    employeeImmediatelyReminder: {
      title: "Confirmation of booking",
      text: "Immediately upon appointment",
      subject: "Your have new appointment",
      message: "New appointment #date at #time has been confirmed. #company",
      active: true,
    },
    employeeDayBeforeReminder: {
      title: "Day before",
      text: "Day before at 8 p.m",
      subject: "Reminder for tomorrow appointment",
      message: "Reminder: You have an appointment tomorrow at #time. Greeting",
      active: true,
    },
  };
}
