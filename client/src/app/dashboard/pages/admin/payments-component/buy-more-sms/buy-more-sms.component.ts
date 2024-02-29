import { Component } from "@angular/core";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";

@Component({
  selector: "app-buy-more-sms",
  templateUrl: "./buy-more-sms.component.html",
  styleUrls: ["./buy-more-sms.component.scss"],
})
export class BuyMoreSmsComponent {
  public path = "grids/admin";
  public file = "sms-payments.json";
  public smsPackages: any;
  public selectedSmsPackage: any;
  public selectedSmsPrice: number;
  public successfullyBoughtNewSms = false;

  constructor(private _service: CallApiService, public _helpService: HelpService) {}

  ngOnInit() {
    this._service
      .callGetMethod("/api/getSmsPackages", "")
      .subscribe((data: any) => {
        this.smsPackages = data;
        if (data.length) {
          this.selectedSmsPackage = data[0];
          this.selectedSmsPrice = data[0].price;
        }
      });
  }

  selectSmsPackage(item: any) {
    this.selectedSmsPackage = item;
    this.selectedSmsPrice = item.price;
  }

  executeMethod(event: any) {
    this.successfullyBoughtNewSms = true;
    this.updateNumberOfSms();
    this.createSmsPayment();
  }

  updateNumberOfSms() {
    this._service
      .callPostMethod("/api/updateNumberOfSms", {
        count: this.selectedSmsPackage.count,
      })
      .subscribe((data) => {});
  }

  createSmsPayment() {
    this._service
      .callPostMethod("/api/createSmsPayment", this.selectedSmsPackage)
      .subscribe((data) => {});
  }
}
