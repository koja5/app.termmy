import { Component } from "@angular/core";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { CallApiService } from "app/services/call-api.service";
import { MessageService } from "app/services/message.service";
import { StorageService } from "app/services/storage.service";

@Component({
  selector: "app-general",
  templateUrl: "./general.component.html",
  styleUrls: ["./general.component.scss"],
})
export class GeneralComponent {
  public path = "pages/account-settings";
  public file = "general.json";
  public data: any;

  public avatarImage: any =
    "../../../../../assets/images/portrait/small/avatar-s-11.jpg";

  constructor(
    private _service: CallApiService,
    private _toastr: ToastrComponent,
    private _messageService: MessageService,
    private _storageService: StorageService
  ) {}

  ngOnInit() {
    this._service
      .callGetMethod("/api/getProfileInfo", "")
      .subscribe((data: any) => {
        if (data && data.length) {
          this.data = data[0];
        }
      });
  }

  submit(event: any) {
    console.log(event);
    if (event.type != "submit") {
      this._service
        .callPostMethod("api/saveProfileInfo", event)
        .subscribe((data) => {
          if (data) {
            this._toastr.showSuccess();
          } else {
            this._toastr.showError();
          }
        });
    }
  }

  uploadEmitter(event: any) {
    this._service
      .callPostMethod("api/uploadUserProfile", event)
      .subscribe((data: any) => {
        if (data) {
          // this._storageService.setAvatarProfileInToken(data);
          this._messageService.sendAvatarProfile(data.avatar);
          this._storageService.setToken(data.token);
          this._toastr.showSuccess();
        } else {
          this._toastr.showError();
        }
      });
  }
}
