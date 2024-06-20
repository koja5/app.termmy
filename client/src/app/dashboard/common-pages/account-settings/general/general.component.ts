import { Component, ViewChild } from "@angular/core";
import { DynamicFormsComponent } from "app/common/dynamic-component/dynamic-forms/dynamic-forms.component";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { ComponentCanDeactivate } from "app/interfaces/component-can-deactivate";
import { CallApiService } from "app/services/call-api.service";
import { CanComponentDeactivate } from "app/services/guards/dirtycheck.guard";
import { HelpService } from "app/services/help.service";
import { MessageService } from "app/services/message.service";
import { StorageService } from "app/services/storage.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-general",
  templateUrl: "./general.component.html",
  styleUrls: ["./general.component.scss"],
})
export class GeneralComponent implements CanComponentDeactivate {
  @ViewChild("form") form: DynamicFormsComponent;
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

  unsavedChanges(): boolean {
    return this.form.unsavedChanges();
  }

  submit(event: any) {
    if (event.type != "submit") {
      this._service
        .callPostMethod("api/saveProfileInfo", event)
        .subscribe((data) => {
          if (data) {
            this._toastr.showSuccess();
            this.sendInfoForSetupApp();
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

  sendInfoForSetupApp() {
    if (this._storageService.getSessionStorage("setup")) {
      let setup = this._storageService.getSessionStorage("setup");
      setup.account_data = true;
      this._messageService.sendSetupApp(setup);
    }
  }
}
