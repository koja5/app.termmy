import { Component, HostListener, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DynamicGridComponent } from "app/common/dynamic-component/dynamic-grid/dynamic-grid.component";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";
import { MessageService } from "app/services/message.service";
import { StorageService } from "app/services/storage.service";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"],
})
export class ClientsComponent {
  @ViewChild(DynamicGridComponent) dynamicGrid;

  public path = "grids/admin";
  public file = "my-clients.json";
  public externalAccounts: any;
  public phoneNumber: string;
  public isMobile = false;

  constructor(
    private _service: CallApiService,
    private _messageService: MessageService,
    private _storageService: StorageService,
    private _activatedRouter: ActivatedRoute,
    private _helpService: HelpService
  ) {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.isMobile =
      this._helpService.checkIsMobileDevices() || window.innerWidth < 993;
  }

  ngOnInit() {
    this.isMobile =
      this._helpService.checkIsMobileDevices() || window.innerWidth < 993;
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
      if (data.total === 1) {
        setup.clients = true;
        this._messageService.sendSetupApp(setup);
      } else if (data.total === 0) {
        setup.clients = false;
        this._messageService.sendSetupApp(setup);
      }
    }
  }
}
