import { Component, Input } from "@angular/core";
import { EmailReminderInitial } from "./email-reminder-initial";
import { CallApiService } from "app/services/call-api.service";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";

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

  constructor(
    private _service: CallApiService,
    private _translate: TranslateService
  ) {}

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.getEmailReminderConfig();

    this._translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this._translate.use(event.lang);
      this.loader = true;
      this.initializeReminderConfig();
      this.setEmailReminderConfig();
      this.loader = false;
    });
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
          this.initializeReminderConfig();
        }
      });
  }

  setEmailReminderConfig() {
    this._service
      .callPostMethod(
        "/api/email-reminder/setEmailReminderConfig",
        this.reminderConfig
      )
      .subscribe((data) => {
        this.reminderConfig.id = data;
      });
  }

  initializeReminderConfig() {
    if (this.reminderConfig) {
      this.translateReminderConfig();
    } else {
      this.reminderConfig = new EmailReminderInitial();
      this.translateReminderConfig();
    }
  }

  translateReminderConfig() {
    const emailReminderInitial = new EmailReminderInitial();
    for (const [key, value] of Object.entries(this.reminderConfig.config)) {
      this.reminderConfig.config[key].title = this._translate.instant(
        emailReminderInitial.config[key]["title"]
      );
      this.reminderConfig.config[key].text = this._translate.instant(
        emailReminderInitial.config[key]["text"]
      );
      this.reminderConfig.config[key]["subject"] = this._translate.instant(
        emailReminderInitial.config[key]["subject"]
      );
      this.reminderConfig.config[key].message = this._translate.instant(
        emailReminderInitial.config[key]["message"]
      );
    }
  }
}
