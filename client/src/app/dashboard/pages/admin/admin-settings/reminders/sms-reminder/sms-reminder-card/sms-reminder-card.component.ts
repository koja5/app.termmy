import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";

@Component({
  selector: "app-sms-reminder-card",
  templateUrl: "./sms-reminder-card.component.html",
  styleUrls: ["./sms-reminder-card.component.scss"],
})
export class SmsReminderCardComponent {
  @Input() item: any;
  @Output() changeValue = new EventEmitter<any>();

  constructor(
    private _service: CallApiService,
    private _toastr: ToastrComponent,
    private _translate: TranslateService,
    private _helpService: HelpService
  ) {}

  modelChangeFn(event) {
    console.log(this.item);
  }

  ngOnChanges() {
    console.log(this.item);
  }

  change() {
    this.changeValue.emit(this.item);
  }

  sendTestSmsMessage() {
    this._service
      .callPostMethod("api/sms-reminder/sendTestSmsMessage", this.item)
      .subscribe((data) => {
        if (data) {
          this._toastr.showSuccessCustom(
            this._helpService.replaceText(
              this._translate.instant("smsReminder.sentTestSMSTo"),
              "#telephone",
              data
            )
          );
        } else {
          this._toastr.showErrorCustom(
            this._translate.instant("smsReminder.needToInsertTelephoneAtSettings")
          );
        }
      });
  }
}
