import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { CallApiService } from "app/services/call-api.service";
import { MessageService } from "app/services/message.service";
import { StorageService } from "app/services/storage.service";

@Component({
  selector: "app-booking-settings",
  templateUrl: "./booking-settings.component.html",
  styleUrls: ["./booking-settings.component.scss"],
})
export class BookingSettingsComponent {
  public path = "pages/admin/admin-settings";
  public file = "booking-settings.json";
  public disableEdit = false;
  public data: any;

  constructor(
    private _service: CallApiService,
    private _toastr: ToastrComponent,
    private _translate: TranslateService,
    private _storageService: StorageService,
    private _messageService: MessageService
  ) {}

  ngOnInit() {
    this._service
      .callGetMethod("/api/booking/getBookingConfig", "")
      .subscribe((data: any) => {
        if (data && data.length) {
          this.data = data[0];
        }
      });
  }

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
            this._translate.instant("bookingSettings.bookingLinkExists"),
            ""
          );
        } else if (data) {
          this.sendInfoForSetupApp(event);
          this._toastr.showSuccess();
        } else {
          this._toastr.showErrorCustom(
            this._translate.instant("commonFields.fillRequredFields"),
            ""
          );
        }
      });
  }

  sendInfoForSetupApp(event: any) {
    if (this._storageService.getSessionStorage("setup")) {
      let setup = this._storageService.getSessionStorage("setup");
      if (event.active) {
        setup.booking = true;
      } else {
        setup.booking = false;
      }
      this._messageService.sendSetupApp(setup);
    }
  }

  uploadEmitter(event: any) {
    this._service.callPostMethod("/api/upload", event).subscribe((response) => {
      console.log("response received is ", response);
    });
  }
}
