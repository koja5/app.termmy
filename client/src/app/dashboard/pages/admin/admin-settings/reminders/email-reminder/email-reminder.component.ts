import { Component, Input } from "@angular/core";
import { EmailReminderInitial } from "./email-reminder-initial";
import { CallApiService } from "app/services/call-api.service";

@Component({
  selector: "app-email-reminder",
  templateUrl: "./email-reminder.component.html",
  styleUrls: ["./email-reminder.component.scss"],
})
export class EmailReminderComponent {
  @Input() reminderNotification: any;
  public loader = true;
  public reminderConfig: any;
  public emailReminder: any;

  constructor(private _service: CallApiService) {}

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.getEmailReminderConfig();
  }

  getEmailReminderConfig() {
    this.loader = true;
    this._service
      .callGetMethod("/api/email-reminder/getEmailReminderConfig", "")
      .subscribe((data: any) => {
        this.loader = false;
        if (data) {
          this.reminderConfig = data;
        } else {
          this.reminderConfig = new EmailReminderInitial();
        }
      });
  }

  setEmailReminderConfig(event) {
    this._service
      .callPostMethod(
        "/api/email-reminder/setEmailReminderConfig",
        this.reminderConfig
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
