import { Component } from "@angular/core";
import { CallApiService } from "app/services/call-api.service";
import { StorageService } from "app/services/storage.service";

@Component({
  selector: "app-online-payment",
  templateUrl: "./online-payment.component.html",
  styleUrls: ["./online-payment.component.scss"],
})
export class OnlinePaymentComponent {
  public data: any;
  public loading = false;

  constructor(
    private _service: CallApiService,
    private _storage: StorageService
  ) {}

  ngOnInit() {
    this._service
      .callGetMethod("api/getExternalAccountAdmin", "")
      .subscribe((data: any) => {
        if (data.length) {
          this.data = data[0];
        }
      });
  }

  connectToStripe() {
    this.loading = true;
    this._service
      .callPostMethod("/api/payment/stripe/connect", {
        admin_id: this._storage.getAdminIdSha1(),
      })
      .subscribe((data: any) => {
        window.open(data.url);
        this.loading = false;
      });
  }

  cancelStripe() {
    this.loading = true;
    this._service
      .callPostMethod("/api/payment/stripe/cancelStripeAccount", {})
      .subscribe((data: any) => {
        this.data.stripe = null;
        this.loading = false;
      });
  }
}
