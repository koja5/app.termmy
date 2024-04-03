import { Component } from "@angular/core";
import { MessageService } from "app/services/message.service";
import { StorageService } from "app/services/storage.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent {
  public path = "grids/admin";
  public file = "my-services.json";

  constructor(
    private _storageService: StorageService,
    private _messageService: MessageService
  ) {}

  submit(data) {
    if (this._storageService.getSessionStorage("setup")) {
      let setup = this._storageService.getSessionStorage("setup");
      if (data.total) {
        setup.services = true;
      } else {
        setup.services = false;
      }
      this._messageService.sendSetupApp(setup);
    }
  }
}
