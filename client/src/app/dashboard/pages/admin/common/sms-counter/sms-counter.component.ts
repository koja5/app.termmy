import { Component } from "@angular/core";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";

@Component({
  selector: "app-sms-counter",
  templateUrl: "./sms-counter.component.html",
  styleUrls: ["./sms-counter.component.scss"],
})
export class SmsCounterComponent {
  public smsCount: any = { count: 0 };
  public loader = true;

  constructor(
    public _helpService: HelpService,
    private _service: CallApiService
  ) {}

  ngOnInit() {
    this.getNumberOfSms();
  }

  getNumberOfSms() {
    this.loader = true;
    this._service
      .callGetMethod("/api/getNumberOfSms", "")
      .subscribe((data: any) => {
        if (data.length) {
          this.smsCount = data[0];
          this.loader = false;
        }
      });
  }

  generateProgressBar() {
    return this.smsCount.count + "%";
  }
}
