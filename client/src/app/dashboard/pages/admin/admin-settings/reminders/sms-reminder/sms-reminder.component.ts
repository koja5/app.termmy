import { Component, EventEmitter, Input, Output } from "@angular/core";
import { HelpService } from "app/services/help.service";
import { SmsReminderInitial } from "./sms-reminder-initial";
import { CallApiService } from "app/services/call-api.service";
import { StorageService } from "app/services/storage.service";
import { MessageService } from "app/services/message.service";

@Component({
  selector: "app-sms-reminder",
  templateUrl: "./sms-reminder.component.html",
  styleUrls: ["./sms-reminder.component.scss"],
})
export class SmsReminderComponent {
  public loader = true;
  public reminderConfig: any;

  constructor(
    private _service: CallApiService,
    private _storageService: StorageService,
    private _messageService: MessageService
  ) {}

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.getSmsReminderConfig();
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
    this.sendInfoForSetupApp();
    this._service
      .callPostMethod(
        "/api/sms-reminder/setSmsReminderConfig",
        this.reminderConfig
      )
      .subscribe((data) => {
        this.reminderConfig.id = data;
      });
  }

  sendInfoForSetupApp() {
    if (this._storageService.getSessionStorage("setup")) {
      let setup = this._storageService.getSessionStorage("setup");
      if (this.reminderConfig && this.reminderConfig.active) {
        setup.sms_reminder = true;
      } else {
        setup.sms_reminder = false;
      }
      this._messageService.sendSetupApp(setup);
    }
  }
}
