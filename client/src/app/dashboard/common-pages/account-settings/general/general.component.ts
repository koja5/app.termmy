import { Component } from "@angular/core";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { CallApiService } from "app/services/call-api.service";

@Component({
  selector: "app-general",
  templateUrl: "./general.component.html",
  styleUrls: ["./general.component.scss"],
})
export class GeneralComponent {
  public path = "pages/account-settings";
  public file = "general.json";

  public avatarImage: any =
    "../../../../../assets/images/portrait/small/avatar-s-11.jpg";

  constructor(
    private _service: CallApiService,
    private _toastr: ToastrComponent
  ) {}

  // uploadImage(event: any) {
  //   if (event.target.files && event.target.files[0]) {
  //     let reader = new FileReader();

  //     reader.onload = (event: any) => {
  //       this.avatarImage = event.target.result;
  //     };

  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }

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
}
