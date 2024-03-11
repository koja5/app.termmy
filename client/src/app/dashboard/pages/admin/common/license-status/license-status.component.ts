import { Component, Input, SimpleChanges, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { DialogConfirmComponent } from "app/common/dialog-confirm/dialog-confirm.component";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { LicensesType } from "app/enums/licenses-type";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";
import { StorageService } from "app/services/storage.service";

@Component({
  selector: "app-license-status",
  templateUrl: "./license-status.component.html",
  styleUrls: ["./license-status.component.scss"],
})
export class LicenseStatusComponent {
  @Input() data: any;
  @Input() currentStatus = true;
  @ViewChild("dialogConfirm") dialogConfirm: DialogConfirmComponent;

  public license: any;
  public diffDays: number;
  public subscriptionPeriod: number;
  public expiryPercentage!: string;
  public licenseSubscription: any = {
    price: null,
    duration: null,
  };
  public licensePriceFor3Months!: string;
  public licensePriceFor6Months!: string;
  public annualSubscription = "annual";

  constructor(
    private _service: CallApiService,
    private _helpService: HelpService,
    private _storageService: StorageService,
    private _toastr: ToastrComponent,
    private _translate: TranslateService
  ) {}

  ngOnInit() {
    if (!this.data) {
      this._service.callGetMethod("/api/getMyLicense", "").subscribe((data) => {
        this.license = data[0];
        this.additionalCalculate();
        this.setInitializePrice();
      });
    } else {
      this.license = this.data;
      this.additionalCalculate();
      this.setInitializePrice();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this.license = changes.data.currentValue;
    }
    this.setInitializePrice();
  }

  setInitializePrice() {
    this.licenseSubscription.price = this.license.annual_price;
    this.licenseSubscription.duration = 12;
    this.licensePriceFor3Months = (3 * this.license.monthly_price).toFixed(2);
    this.licensePriceFor6Months = (
      6 *
      this.license.monthly_price *
      0.9
    ).toFixed(2);
  }

  additionalCalculate() {
    this.calculateDiffDays();
    this.getSubscriptionPeriod();
    this.calculatePercentage();
  }

  calculateDiffDays() {
    this.diffDays = this._helpService.calculateDiffInDays(
      this.license.expiry_date
    );
  }

  getSubscriptionPeriod() {
    this.subscriptionPeriod = this.license.annual_subscription
      ? this._helpService.daysInYear(new Date().getFullYear())
      : this._helpService.daysInMonth(
          new Date().getMonth(),
          new Date().getFullYear()
        );
  }

  calculatePercentage() {
    // this.expiryPercentage =
    //   this._helpService
    //     .calculatePercentage(this.diffDays, this.subscriptionPeriod)
    //     .toString() + "%";
    this.expiryPercentage = this.diffDays + "%";
  }

  selectPackage(price, duration) {
    this.licenseSubscription.price = null;
    this.licenseSubscription.duration = duration;
    setTimeout(() => {
      this.licenseSubscription.price = price;
    }, 20);
  }

  cancelSubscription() {
    this._service
      .callPostMethod("api/cancelSubscription", {
        license_id: LicensesType.Basic,
      })
      .subscribe((data) => {
        this._toastr.showSuccessCustom(
          this._translate.instant("licenseStatus.successfullyPaidLicense")
        );
        this.ngOnInit();
      });
  }

  confirmCancelSubscription() {}

  getBasicLicenseType() {
    return LicensesType.Basic;
  }

  executeMethod(event) {
    this.license.expiry_date = this._helpService.addMonthsToCurrentDate(
      this.licenseSubscription.duration
    );
    const data = {
      id: this.license.id,
      license_id: this.license.license_id,
      expiry_date: this.license.expiry_date,
    };
    this._service
      .callPostMethod("/api/updateLicense", {
        value: this._storageService.encrypt(data),
      })
      .subscribe((data) => {
        if (data) {
          this._toastr.showSuccessCustom(
            this._translate.instant("licenseStatus.successfullyPaidLicense")
          );
        }
      });
  }
}
