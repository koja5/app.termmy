import { Component } from "@angular/core";
import { HelpService } from "app/services/help.service";
import { SmsReminderInitial } from "./sms-reminder-initial";
import { CallApiService } from "app/services/call-api.service";

@Component({
  selector: "app-sms-reminder",
  templateUrl: "./sms-reminder.component.html",
  styleUrls: ["./sms-reminder.component.scss"],
})
export class SmsReminderComponent {
  public loader = true;
  public smsReminder: any;
  public numberOfSms: any;

  constructor(
    public _helpService: HelpService,
    private _service: CallApiService
  ) {}

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.getNumberOfSms();
    this.getSmsReminderConfig();
  }

  getNumberOfSms() {
    this._service
      .callGetMethod("/api/getNumberOfSms", "")
      .subscribe((data: any) => {
        if (data.length) {
          this.numberOfSms = data[0];
        }
      });
  }

  getSmsReminderConfig() {
    this.loader = true;
    this._service
      .callGetMethod("/api/sms-reminder/getSmsReminderConfig", "")
      .subscribe((data: any) => {
        this.loader = false;
        if (data) {
          this.smsReminder = data;
        } else {
          this.smsReminder = new SmsReminderInitial();
        }
      });
  }

  generateProgressBar() {
    return this.numberOfSms.count + "%";
  }

  changeValue(event) {
    console.log(this.smsReminder);
    this._service
      .callPostMethod("/api/sms-reminder/setSmsReminderConfig", {
        config: JSON.stringify(this.smsReminder),
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
