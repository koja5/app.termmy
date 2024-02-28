import { Component } from "@angular/core";
import { CallApiService } from "app/services/call-api.service";

@Component({
  selector: "app-buy-more-sms",
  templateUrl: "./buy-more-sms.component.html",
  styleUrls: ["./buy-more-sms.component.scss"],
})
export class BuyMoreSmsComponent {
  public path = "grids/admin";
  public file = "sms-payments.json";
  public smsPackages: any;
  public selectedPackage = 10;

  constructor(private _service: CallApiService) {}

  ngOnInit() {
    this._service.callGetMethod("/api/getSmsPackages", "").subscribe((data) => {
      this.smsPackages = data;
    });
  }

  selectSmsPackage(item: any) {
    console.log(item);
    this.selectedPackage = item.price;
  }
}
