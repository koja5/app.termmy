import { Component } from "@angular/core";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";
import { MessageService } from "app/services/message.service";
import { StorageService } from "app/services/storage.service";

@Component({
  selector: "app-connections",
  templateUrl: "./connections.component.html",
  styleUrls: ["./connections.component.scss"],
})
export class ConnectionsComponent {
  public data: any;

  constructor(
    private _service: CallApiService,
    private _storageService: StorageService,
    private _messageService: MessageService,
    private _helpService: HelpService
  ) {}

  ngOnInit() {
    this._service
      .callGetMethod("api/getExternalAccounts", "")
      .subscribe((data: any) => {
        if (data.length) {
          this.data = data[0];
          this.sendInfoForSetupApp();
        }
      });
  }

  connectToGoogle() {
    this._service
      .callGetMethod("/api/google/login", "")
      .subscribe((data: string) => {
        window.close();
        window.open(data);
      });
  }

  disconnectFromGoogle() {
    this._service
      .callPostMethod("/api/google/deleteExternalGoogleAccount", "")
      .subscribe((data) => {
        if (data) {
          this.data = null;
          this.sendInfoForSetupApp();
        }
      });
  }

  sendInfoForSetupApp() {
    if (this._storageService.getSessionStorage("setup")) {
      let setup = this._storageService.getSessionStorage("setup");
      let setupOld = this._helpService.copyObject(setup);
      if (this.data && this.data.google) {
        setup.sync_calendar = true;
      } else {
        setup.sync_calendar = false;
      }
      if (setup.sync_calendar != setupOld.sync_calendar) {
        this._messageService.sendSetupApp(setup);
      }
    }
  }
}
