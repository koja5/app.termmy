import { Component } from "@angular/core";
import { EmailReminderInitial } from "./email-reminder-initial";
import { CallApiService } from "app/services/call-api.service";

@Component({
  selector: "app-email-reminder",
  templateUrl: "./email-reminder.component.html",
  styleUrls: ["./email-reminder.component.scss"],
})
export class EmailReminderComponent {
  public loader = true;
  public emailReminder: any;

  constructor(private _service: CallApiService) {}

  ngOnInit() {
    this.getSmsReminderConfig();
  }

  getSmsReminderConfig() {
    this.loader = true;
    this._service
      .callGetMethod("/api/email-reminder/getEmailReminderConfig", "")
      .subscribe((data: any) => {
        this.loader = false;
        if (data) {
          this.emailReminder = data;
        } else {
          this.emailReminder = new EmailReminderInitial();
        }
      });
  }

  changeValue(event) {
    this._service
      .callPostMethod("/api/email-reminder/setEmailReminderConfig", {
        config: JSON.stringify(this.emailReminder),
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
