import { Component } from "@angular/core";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";
import { MessageService } from "app/services/message.service";
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
    private _storageService: StorageService,
    private _messageService: MessageService,
    private _helpService: HelpService
  ) {}

  ngOnInit() {
    this._service
      .callGetMethod("api/getExternalAccountAdmin", "")
      .subscribe((data: any) => {
        if (data.length) {
          this.data = data[0];
          this.sendInfoForSetupApp();
        }
      });
  }

  connectToStripe() {
    this.loading = true;
    this._service
      .callPostMethod("/api/payment/stripe/connect", {
        admin_id: this._storageService.getAdminIdSha1(),
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
        this.sendInfoForSetupApp();
      });
  }

  sendInfoForSetupApp() {
    if (this._storageService.getSessionStorage("setup")) {
      let setup = this._storageService.getSessionStorage("setup");
      let setupOld = this._helpService.copyObject(setup);
      if (this.data && this.data.stripe) {
        setup.payment = true;
      } else {
        setup.payment = false;
      }
      if (setup.payment != setupOld.payment) {
        this._messageService.sendSetupApp(setup);
      }
    }
  }
}
