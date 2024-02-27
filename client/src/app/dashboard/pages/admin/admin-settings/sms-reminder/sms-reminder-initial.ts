export class SmsReminderInitial {
  clientReminder = [
    {
      title: "Confirmation of booking",
      text: "Immediately upon appointment",
      message:
        "Your appointment #date at #time has been confirmed. 'TuinaPraxis'",
      active: true,
    },
    {
      title: "Day before",
      text: "Day before at 8 p.m",
      message:
        "Reminder: You have an appointment with us at 'TuinaPraxis' tomorrow at #time. Greeting",
      active: false,
    },
  ];
  employeeReminder = [
    {
      title: "Confirmation of booking",
      text: "Immediately upon appointment",
      message:
        "Your appointment #date at #time has been confirmed. 'TuinaPraxis'",
      active: true,
    },
  ];
}
