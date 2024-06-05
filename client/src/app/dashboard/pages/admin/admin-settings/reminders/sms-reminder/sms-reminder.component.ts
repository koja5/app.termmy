import { Component, EventEmitter, Input, Output } from "@angular/core";
import { HelpService } from "app/services/help.service";
import { SmsReminderInitial } from "./sms-reminder-initial";
import { CallApiService } from "app/services/call-api.service";
import { StorageService } from "app/services/storage.service";
import { MessageService } from "app/services/message.service";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { ToastrComponent } from "app/common/toastr/toastr.component";

@Component({
  selector: "app-sms-reminder",
  templateUrl: "./sms-reminder.component.html",
  styleUrls: ["./sms-reminder.component.scss"],
})
export class SmsReminderComponent {
  public loader = true;
  public reminderConfig: any;
  public notFillPersonalData = false;

  constructor(
    private _service: CallApiService,
    private _storageService: StorageService,
    private _messageService: MessageService,
    private _translate: TranslateService,
    private _toastr: ToastrComponent
  ) {}

  ngOnInit() {
    this.initialize();

    this._translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this._translate.use(event.lang);
      this.loader = true;
      this.initializeReminderConfig();
      this.setSmsReminderConfig();
      this.loader = false;
    });
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
          this.initializeReminderConfig();
        }
      });
  }

  setSmsReminderConfig() {
    this.notFillPersonalData = false;
    this._service
      .callGetMethod("api/getProfileInfo", "")
      .subscribe((profile: any) => {
        if (profile && profile[0].company && profile[0].address) {
          this.sendInfoForSetupApp();
          this._service
            .callPostMethod(
              "/api/sms-reminder/setSmsReminderConfig",
              this.reminderConfig
            )
            .subscribe((data) => {
              this.reminderConfig.id = data;
              this.notFillPersonalData = false;
            });
        } else {
          this.reminderConfig.active = false;
          this.notFillPersonalData = true;
        }
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

  initializeReminderConfig() {
    if (this.reminderConfig) {
      this.translateReminderConfig();
    } else {
      this.reminderConfig = new SmsReminderInitial();
      this.translateReminderConfig();
    }
  }

  translateReminderConfig() {
    const smsReminderInitial = new SmsReminderInitial();
    for (const [key, value] of Object.entries(this.reminderConfig.config)) {
      this.reminderConfig.config[key].title = this._translate.instant(
        smsReminderInitial.config[key]["title"]
      );
      this.reminderConfig.config[key].text = this._translate.instant(
        smsReminderInitial.config[key]["text"]
      );
      this.reminderConfig.config[key].message = this._translate.instant(
        smsReminderInitial.config[key]["message"]
      );
    }
  }
}
