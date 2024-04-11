import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";

@Component({
  selector: "app-license-packages",
  templateUrl: "./license-packages.component.html",
  styleUrls: ["./license-packages.component.scss"],
})
export class LicensePackagesComponent {
  public selectedPackage: any;
  // false if is Monthly, true if Annual
  public annualSubscription = false;
  public licensePackages: any;
  public license: any;
  public licenseNumberClass!: number;

  constructor(
    private _translate: TranslateService,
    private _service: CallApiService
  ) {}

  ngOnInit() {
    if (this._translate.instant("licensePackagePlans")) {
      this.licensePackages = this._translate.instant("licensePackagePlans");
    }

    this._service.callGetMethod("/api/getMyLicense", "").subscribe((data) => {
      this.license = data[0];
      this.removeFreePlan();
    });
  }

  removeFreePlan() {
    if (this.license.monthly_price) {
      for (let i = 0; i < this.licensePackages.length; i++) {
        if (
          !Number(this.licensePackages[i].monthly_price)
        ) {
          this.licensePackages.splice(i, 1);
        }
      }
    }
    this.licenseNumberClass = 12 / this.licensePackages.length;
  }

  selectPackage(item: any) {
    this.license = item;
    this.license.license_id = item.id;
  }
}
