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

  constructor(
    private _translate: TranslateService,
    private _service: CallApiService
  ) {}

  ngOnInit() {
    if (this._translate.instant("licensePackages")) {
      this.licensePackages = this._translate.instant("licensePackages");
    }

    this._service.callGetMethod("/api/getMyLicense", "").subscribe((data) => {
      this.license = data[0];
    });
  }

  selectPackage(item: any) {
    this.selectedPackage = item;
  }
}
