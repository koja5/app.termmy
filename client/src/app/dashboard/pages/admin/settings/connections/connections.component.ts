import { Component } from "@angular/core";
import { ToastrComponent } from "app/common/toastr/toastr.component";
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
  public calendarsList: any = {
    owner: [],
    reader: [],
  };

  constructor(
    private _service: CallApiService,
    private _storageService: StorageService,
    private _messageService: MessageService,
    private _helpService: HelpService,
    private _toastr: ToastrComponent
  ) {}

  ngOnInit() {
    this._service
      .callGetMethod("api/getExternalAccounts", "")
      .subscribe((data: any) => {
        if (data.length) {
          this.data = data[0];
          this.data.google_additional_calendars = JSON.parse(
            this.data.google_additional_calendars
          );
          this.getGoogleCalendarList(this.data.google);
          this.sendInfoForSetupApp();
        }
      });
  }

  //#region GOOGLE

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

  getGoogleCalendarList(google) {
    this._service
      .callPostMethod("/api/google/getCalendarList", {
        externalCalendar: google,
      })
      .subscribe((data: any) => {
        // this.calendarsList = data;
        for (let i = 0; i < data.items.length; i++) {
          if (data.items[i].accessRole === "owner") {
            this.calendarsList.owner.push(data.items[i]);
          } else if (data.items[i].accessRole === "reader") {
            this.calendarsList.reader.push(data.items[i]);
          }
        }
      });
  }

  setGoogleCalendarList(item) {
    if (this.data.google_additional_calendars[item.id]) {
      this.data.google_additional_calendars[item.id].active =
        !this.data.google_additional_calendars[item.id].active;
    } else {
      this.data.google_additional_calendars[item.id] = {
        id: item.id,
        summary: item.summary,
        accessRole: item.accessRole,
        active: true,
      };
    }

    this._service
      .callPostMethod("/api/google/setAdditionalCalendar", this.data)
      .subscribe((data) => {
        if (data) {
          this._toastr.showSuccess();
        }
      });
  }

  //#endregion

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
