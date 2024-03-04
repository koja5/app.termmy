import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { CallApiService } from "app/services/call-api.service";

@Component({
  selector: "app-booking-settings",
  templateUrl: "./booking-settings.component.html",
  styleUrls: ["./booking-settings.component.scss"],
})
export class BookingSettingsComponent {
  public path = "pages/admin/admin-settings";
  public file = "booking-settings.json";
  public disableEdit = false;

  constructor(
    private _service: CallApiService,
    private _toastr: ToastrComponent,
    private _translate: TranslateService
  ) {}

  onChangeData(event: any) {
    if (event.active) {
      this.disableEdit = true;
    }
  }

  handleSubmit(event: any) {
    this._service
      .callPostMethod("/api/booking/setBookingConfig", event)
      .subscribe((data) => {
        if (data === "exists") {
          this._toastr.showWarningCustom(
            this._translate.instant(
              "bookingSettings.bookingLinkExists"
            ),
            ""
          );
        } else if (data) {
          this._toastr.showSuccess();
        } else {
          this._toastr.showError();
        }
      });
  }
}
