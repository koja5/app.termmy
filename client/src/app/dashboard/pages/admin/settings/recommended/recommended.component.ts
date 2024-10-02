import { Component, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { DialogConfirmComponent } from "app/common/dialog-confirm/dialog-confirm.component";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { VoucherPartnerModel } from "app/models/voucher-partner.model";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";
import { StorageService } from "app/services/storage.service";

@Component({
  selector: "app-recommended",
  templateUrl: "./recommended.component.html",
  styleUrls: ["./recommended.component.scss"],
})
export class RecommendedComponent {
  @ViewChild(DialogConfirmComponent) dialogConfirm;
  public loader = false;
  public loaderContent = false;
  public path = "grids/admin";
  public file = "recommended-bonus.json";
  public data: any;
  public smsCount: number = 0;
  public termmyCoinCount: number = 0;
  public pickedUpSms = false;
  public voucher = new VoucherPartnerModel();
  public explanationForVoucherBonus: string;

  constructor(
    private _helpService: HelpService,
    private _storageService: StorageService,
    private _service: CallApiService,
    private _toastr: ToastrComponent,
    private _translate: TranslateService
  ) {}

  ngOnInit() {
    this._service
      .callGetMethod("api/getRecommendedBonus", "")
      .subscribe((data) => {
        this.data = data;
        this.getNumberOfNotUtilizedSms();
      });

    this.getVoucherCode();
    this.getTermmyCoin();
  }

  copyRecommendedLinkToClipboard() {
    const recommendedLink =
      window.location.origin +
      "/auth/signup?id=" +
      this._storageService.getUserId();
    this._helpService.copyToClipboard(recommendedLink);
    this._toastr.showSuccessCustom(
      this._translate.instant(
        "recommended.successfullyCopiedRecommendedLinkToClipboard"
      )
    );
  }

  copyRecommendedVoucherCodeToClipboard() {
    this._helpService.copyToClipboard(this.voucher.voucher_code);
    this._toastr.showSuccessCustom(
      this._translate.instant(
        "recommended.successfullyCopiedVoucherCodeToClipboard"
      )
    );
  }

  getNumberOfNotUtilizedSms() {
    for (let i = 0; i < this.data.length; i++) {
      if (!this.data[i].utilized) this.smsCount += Number(this.data[i].bonus);
    }
  }

  pickUpSmsBonus() {
    this.loaderContent = true;
    this._service.callPostMethod("api/pickUpSmsBonus", "").subscribe((data) => {
      if (data) {
        this.loaderContent = false;
        this.smsCount = 0;
        this.pickedUpSms = true;
      }
    });
  }

  getVoucherCode() {
    this._service
      .callGetMethod("api/getVoucherCode")
      .subscribe((data: VoucherPartnerModel) => {
        this.voucher = data;
        this.explanationForVoucherBonus = this._translate
          .instant("recommended.explanationVoucherBonus")
          .replaceAll("#discount", this.voucher.discount)
          .replaceAll("#bonusForPartner", this.voucher.bonus_for_partner);
      });
  }

  getTermmyCoin() {
    this._service
      .callGetMethod("/api/getTermmyCoin")
      .subscribe((data: number) => {
        this.termmyCoinCount = data;
      });
  }

  sendRequestToBePartner() {
    this.dialogConfirm.showQuestionModal();
  }

  confirmSendRequestToBePartner() {
    console.log("TEST");
    this._service
      .callPostMethod(
        "/api/mail-server/sendRequestToBeAPartner",
        this._storageService.getDecodeToken()
      )
      .subscribe((data) => {
        this._toastr.showInfoCustom(
          this._translate.instant(
            "recommended.successfullySendRequestToBePartner"
          )
        );
      });
  }
}
