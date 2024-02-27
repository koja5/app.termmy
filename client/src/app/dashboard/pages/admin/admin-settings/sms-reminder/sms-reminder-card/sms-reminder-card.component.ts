import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CallApiService } from "app/services/call-api.service";

@Component({
  selector: "app-sms-reminder-card",
  templateUrl: "./sms-reminder-card.component.html",
  styleUrls: ["./sms-reminder-card.component.scss"],
})
export class SmsReminderCardComponent {
  @Input() item: any;
  @Output() changeValue = new EventEmitter<any>();

  constructor(private _service: CallApiService) {}

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
      .callPostMethod("api/sms-reminder/sendTestSMSMessage", this.item)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
