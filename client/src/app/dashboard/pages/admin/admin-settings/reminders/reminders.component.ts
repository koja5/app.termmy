import { Component } from "@angular/core";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { SendVia } from "app/enums/send-via";
import { CallApiService } from "app/services/call-api.service";

@Component({
  selector: "app-reminders",
  templateUrl: "./reminders.component.html",
  styleUrls: ["./reminders.component.scss"],
})
export class RemindersComponent {
  public selectedTab = SendVia.sms;
  public sendVia = { reminder_type: SendVia.sms };
  public reminderNotification: any = {};

  constructor(
    private _service: CallApiService,
    private _toastr: ToastrComponent
  ) {}

  ngOnInit() {
    this._service
      .callGetMethod("/api/getReminderNotification", "")
      .subscribe((data: any) => {
        if (data.length) {
          this.sendVia = data[0];
          this.reminderNotification = data[0];
        } else {
          this.sendVia = { reminder_type: SendVia.sms };
        }
      });
  }

  getSmsEnum() {
    return SendVia.sms;
  }

  getEmailEnum() {
    return SendVia.email;
  }

  // selectReminder(type: any) {
  //   this.sendVia.reminder_type = type;
  //   this._service
  //     .callPostMethod("/api/setReminderNotification", this.sendVia)
  //     .subscribe((data: any) => {
  //       if (data.insertid) {
  //         this.sendVia.id = data.insertid;
  //       } else if (data) {
  //         this._toastr.showSuccess();
  //       } else {
  //         this._toastr.showWarning();
  //       }
  //     });
  // }
}
