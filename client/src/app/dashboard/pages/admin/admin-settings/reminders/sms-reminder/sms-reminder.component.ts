import { Component, Input } from "@angular/core";
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
  public reminderConfig: any;
  public smsCount: any = { count: 0};

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
          this.smsCount = data[0];
        }
      });
  }

  generateProgressBar() {
    return this.smsCount.count + "%";
  }

  getSmsReminderConfig() {
    this.loader = true;
    this._service
      .callGetMethod("/api/sms-reminder/getSmsReminderConfig", "")
      .subscribe((data: any) => {
        this.loader = false;
        if (data) {
          this.reminderConfig = data;
        } else {
          this.reminderConfig = new SmsReminderInitial();
        }
      });
  }

  setSmsReminderConfig(event) {
    this._service
      .callPostMethod(
        "/api/sms-reminder/setSmsReminderConfig",
        this.reminderConfig
      )
      .subscribe((data) => {
        this.reminderConfig.id = data;
      });
  }
}
