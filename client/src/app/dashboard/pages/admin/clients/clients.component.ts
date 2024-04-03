import { Component } from "@angular/core";
import { CallApiService } from "app/services/call-api.service";
import { MessageService } from "app/services/message.service";
import { StorageService } from "app/services/storage.service";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"],
})
export class ClientsComponent {
  public path = "grids/admin";
  public file = "my-clients.json";
  public externalAccounts: any;

  constructor(
    private _service: CallApiService,
    private _messageService: MessageService,
    private _storageService: StorageService
  ) {}

  ngOnInit() {
    this._service
      .callGetMethod("/api/getExternalAccounts", "")
      .subscribe((data: any) => {
        if (data.length) {
          this.externalAccounts = data[0];
        }
      });
  }

  submit(data) {
    if (this._storageService.getSessionStorage("setup")) {
      let setup = this._storageService.getSessionStorage("setup");
      if (data.total) {
        setup.clients = true;
      } else {
        setup.clients = false;
      }
      this._messageService.sendSetupApp(setup);
    }
  }
}
