import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ToastrComponent } from "app/common/toastr/toastr.component";
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

  constructor(
    private _service: CallApiService,
    public _helpService: HelpService,
    private _toastr: ToastrComponent,
    private _translate: TranslateService
  ) {}

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
    this.selectedSmsPrice = null;
    setTimeout(() => {
      this.selectedSmsPrice = item.price;
    }, 100);
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
      .subscribe((data) => {
        if (data) {
          this._toastr.showSuccessCustom(
            this._translate
              .instant("buyMoreSms.successfullyBoughtNewSms")
              .replace("#count", this.selectedSmsPackage.count)
          );
          setTimeout(() => {
            window.open("dashboard/admin/settings/license", "_self");
          }, 1500);
        }
      });
  }

  createSmsPayment() {
    this._service
      .callPostMethod("/api/createSmsPayment", this.selectedSmsPackage)
      .subscribe((data) => {});
  }
}
