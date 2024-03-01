import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";

@Component({
  selector: "app-email-reminder-card",
  templateUrl: "./email-reminder-card.component.html",
  styleUrls: ["./email-reminder-card.component.scss"],
})
export class EmailReminderCardComponent {
  @Input() item: any;
  @Output() changeValue = new EventEmitter<any>();

  constructor(
    private _service: CallApiService,
    private _toastr: ToastrComponent,
    private _helpService: HelpService,
    private _translate: TranslateService
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

  sendTestMessage() {
    this._service
      .callPostMethod("api/email-reminder/sendTestEmailMessage", this.item)
      .subscribe((data) => {
        if (data) {
          this._toastr.showSuccessCustom(
            this._helpService.replaceText(
              this._translate.instant("emailReminder.sentTestEmailTo"),
              "#email",
              data
            )
          );
        }
      });
  }
}
