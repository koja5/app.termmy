import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";
import { StorageService } from "app/services/storage.service";

@Component({
  selector: "app-recommended",
  templateUrl: "./recommended.component.html",
  styleUrls: ["./recommended.component.scss"],
})
export class RecommendedComponent {
  public loader = false;
  public loaderContent = false;
  public path = "grids/admin";
  public file = "recommended-bonus.json";
  public data: any;
  public smsCount: number = 0;
  public pickedUpSms = false;

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
}
