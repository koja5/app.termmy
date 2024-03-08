import { Component, Input, SimpleChanges } from "@angular/core";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";

@Component({
  selector: "app-license-status",
  templateUrl: "./license-status.component.html",
  styleUrls: ["./license-status.component.scss"],
})
export class LicenseStatusComponent {
  @Input() data: any;
  @Input() currentStatus = true;

  public license: any;
  public diffDays: number;
  public subscriptionPeriod: number;
  public expiryPercentage!: string;
  public selectedPackage: any = 9.99;
  public annualSubscription = "annual";

  constructor(
    private _service: CallApiService,
    private _helpService: HelpService
  ) {}

  ngOnInit() {
    if (!this.data) {
      this._service.callGetMethod("/api/getMyLicense", "").subscribe((data) => {
        this.license = data[0];
        this.additionalCalculate();
      });
    } else {
      this.license = this.data;
      this.additionalCalculate();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.data) {
      this.license = changes.data.currentValue;
    }
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
    this.expiryPercentage =
      this._helpService
        .calculatePercentage(this.diffDays, this.subscriptionPeriod)
        .toString() + "%";
    console.log(this.expiryPercentage);
  }

  executeMethod(event) {}
}
