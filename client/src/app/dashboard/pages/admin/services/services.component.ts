import { Component, HostListener, ViewChild } from "@angular/core";
import { DynamicGridComponent } from "app/common/dynamic-component/dynamic-grid/dynamic-grid.component";
import { HelpService } from "app/services/help.service";
import { MessageService } from "app/services/message.service";
import { StorageService } from "app/services/storage.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent {
  @ViewChild(DynamicGridComponent) dynamicGrid;

  public path = "grids/admin";
  public file = "my-services.json";
  public isMobile = false;

  constructor(
    private _storageService: StorageService,
    private _messageService: MessageService,
    private _helpService: HelpService
  ) {}

  ngOnInit() {
    this.isMobile =
      this._helpService.checkIsMobileDevices() || window.innerWidth < 993;
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.isMobile =
      this._helpService.checkIsMobileDevices() || window.innerWidth < 993;
  }

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
